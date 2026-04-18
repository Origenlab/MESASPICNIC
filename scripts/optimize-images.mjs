#!/usr/bin/env node
/**
 * Optimiza imágenes en /public/img:
 * - Redimensiona a máx. 1920px de ancho (mantiene aspecto)
 * - Recomprime AVIF/WebP a calidad 82
 * - Solo sobrescribe si el archivo resultante es más pequeño
 * - Preserva PNGs de logos (mespic.png, mespic-transparent.png)
 *
 * Uso:
 *   node scripts/optimize-images.mjs           # optimizar
 *   node scripts/optimize-images.mjs --dry     # solo reportar, no escribir
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/img");
const MAX_WIDTH = 1920;
const QUALITY = 82;
const DRY_RUN = process.argv.includes("--dry");

// Logos / íconos que NO se tocan
const SKIP = new Set(["mespic.png", "mespic-transparent.png"]);

const EXTS = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

async function optimize(file) {
  const name = path.basename(file);
  const ext = path.extname(file).toLowerCase();
  if (!EXTS.has(ext)) return null;
  if (SKIP.has(name)) return { file, skipped: "logo" };

  const origSize = (await stat(file)).size;
  const meta = await sharp(file, { failOn: "none" }).metadata();

  let pipeline = sharp(file, { failOn: "none" });
  const resized = (meta.width || 0) > MAX_WIDTH;
  if (resized) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".avif") {
    pipeline = pipeline.avif({ quality: QUALITY, effort: 4 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: QUALITY, effort: 4 });
  } else if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  }

  const buf = await pipeline.toBuffer();
  const newSize = buf.length;

  // Solo reemplaza si reduce al menos 3%
  const reduction = (origSize - newSize) / origSize;
  if (newSize >= origSize || reduction < 0.03) {
    return {
      file,
      origSize,
      newSize,
      resized,
      width: meta.width,
      skipped: "no-benefit",
    };
  }

  if (!DRY_RUN) {
    await writeFile(file, buf);
  }

  return { file, origSize, newSize, resized, width: meta.width };
}

async function main() {
  console.log(`${DRY_RUN ? "[DRY RUN] " : ""}Optimizando ${ROOT}`);
  console.log(`Max width: ${MAX_WIDTH}px  ·  Quality: ${QUALITY}\n`);

  let totalOrig = 0;
  let totalNew = 0;
  let optimized = 0;
  let noBenefit = 0;
  let resizedCount = 0;
  let logoSkip = 0;
  const errors = [];

  for await (const file of walk(ROOT)) {
    try {
      const r = await optimize(file);
      if (!r) continue;
      if (r.skipped === "logo") {
        logoSkip++;
        continue;
      }
      if (r.skipped === "no-benefit") {
        noBenefit++;
        totalOrig += r.origSize;
        totalNew += r.origSize;
        continue;
      }
      totalOrig += r.origSize;
      totalNew += r.newSize;
      optimized++;
      if (r.resized) resizedCount++;
      const pct = (((r.origSize - r.newSize) / r.origSize) * 100).toFixed(0);
      console.log(
        `  ${r.resized ? "R" : " "} ${path.relative(ROOT, file).padEnd(60)} ${fmt(r.origSize)} → ${fmt(r.newSize)}  -${pct}%`
      );
    } catch (e) {
      errors.push({ file, msg: e.message });
    }
  }

  console.log("\n── Resumen ──");
  console.log(`Optimizadas:     ${optimized}`);
  console.log(`Redimensionadas: ${resizedCount}`);
  console.log(`Sin beneficio:   ${noBenefit}`);
  console.log(`Logos saltados:  ${logoSkip}`);
  console.log(`Errores:         ${errors.length}`);
  if (totalOrig) {
    const saved = totalOrig - totalNew;
    console.log(`Antes:           ${fmt(totalOrig)}`);
    console.log(`Después:         ${fmt(totalNew)}`);
    console.log(
      `Ahorro:          ${fmt(saved)} (${((saved / totalOrig) * 100).toFixed(1)}%)`
    );
  }
  if (errors.length) {
    console.log("\nErrores:");
    for (const e of errors.slice(0, 10)) console.log(`  ${e.file}: ${e.msg}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
