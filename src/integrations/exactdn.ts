/**
 * Astro Integration — ExactDN (ewww.io) URL rewriter
 * ───────────────────────────────────────────────────
 * Reescribe referencias a /img/... en el HTML/CSS/JSON compilado
 * para que se sirvan desde https://ew3fy9iennp.exactdn.com/img/...
 *
 * Solo se ejecuta en build de producción (npm run build).
 * Se desactiva si PUBLIC_DISABLE_CDN === "true".
 *
 * Cubre:
 *   - <img src="/img/...">          (atributo src)
 *   - <img srcset="/img/..., ...">  (srcset con múltiples urls)
 *   - <source srcset="/img/...">    (elementos <picture>)
 *   - <link rel="preload" href="/img/...">
 *   - <meta content="/img/..."> con property=og:image / twitter:image
 *   - background-image: url(/img/...) en CSS inline o externo
 *   - JSON-LD "image": "/img/...", "logo": "/img/..."
 *
 * NO toca:
 *   - URLs que ya son absolutas (http/https/data/protocol-relative)
 *   - /favicon.ico, /manifest.json, /sitemap.xml (no están en /img/)
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import type { AstroIntegration } from "astro";

const CDN_HOST = "ew3fy9iennp.exactdn.com";
const IMG_PREFIX = "/img/";

// Extensiones de archivo donde hacemos el rewrite
const REWRITE_EXTS = new Set([".html", ".css", ".js", ".xml", ".json"]);

async function* walk(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

/**
 * Reescribe /img/xxx en un string (HTML o CSS o JSON) a la URL del CDN.
 * Usa una expresión que captura /img/ seguido por cualquier caracter que
 * típicamente forma parte de la ruta (letras, dígitos, -, _, ., /).
 * Se ancla por delante con caracteres delimitadores válidos
 * (", ', (, espacio, =, ,) para no tocar subcadenas dentro de palabras.
 */
function rewrite(content: string): { content: string; count: number } {
  let count = 0;
  // Delimitador por delante | /img/path.ext (opcional ?query)
  const re = /(["'(,=\s])\/img\/([a-zA-Z0-9_\-./]+\.(?:avif|webp|png|jpe?g|svg|gif))(\?[^"')\s,]*)?/g;
  const out = content.replace(re, (match, pre, pathPart, query) => {
    count++;
    return `${pre}https://${CDN_HOST}${IMG_PREFIX}${pathPart}${query || ""}`;
  });
  return { content: out, count };
}

export function exactdnRewriter(): AstroIntegration {
  return {
    name: "exactdn-rewriter",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        if (process.env.PUBLIC_DISABLE_CDN === "true") {
          logger.info("ExactDN rewriter desactivado (PUBLIC_DISABLE_CDN=true)");
          return;
        }

        const outDir = new URL(dir).pathname;
        let filesTouched = 0;
        let totalRewrites = 0;

        for await (const file of walk(outDir)) {
          const ext = path.extname(file).toLowerCase();
          if (!REWRITE_EXTS.has(ext)) continue;

          try {
            const s = await stat(file);
            // Skip archivos grandes (>5MB) — probablemente no son HTML/CSS
            if (s.size > 5 * 1024 * 1024) continue;

            const raw = await readFile(file, "utf8");
            if (!raw.includes(IMG_PREFIX)) continue;

            const { content, count } = rewrite(raw);
            if (count > 0) {
              await writeFile(file, content, "utf8");
              filesTouched++;
              totalRewrites += count;
            }
          } catch (e: any) {
            // Ignorar archivos no-UTF8 (binarios, etc.)
            if (e?.code !== "ERR_INVALID_ARG_TYPE") {
              logger.warn(`ExactDN rewrite fallo en ${file}: ${e?.message || e}`);
            }
          }
        }

        logger.info(
          `ExactDN: reescritas ${totalRewrites} URLs en ${filesTouched} archivos → https://${CDN_HOST}${IMG_PREFIX}`,
        );
      },
    },
  };
}

export default exactdnRewriter;
