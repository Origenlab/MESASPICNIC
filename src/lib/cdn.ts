/**
 * ExactDN / ewww.io — Helper de CDN para imágenes MESPIC
 * ───────────────────────────────────────────────────────
 * Reescribe rutas /img/... para que se sirvan desde el CDN
 * ExactDN en producción. En desarrollo mantiene rutas locales.
 *
 * Uso en .astro:
 *   ---
 *   import { cdnUrl } from "@/lib/cdn";
 *   ---
 *   <img src={cdnUrl("/img/boda-boho-1.avif")} alt="..." />
 *   <img src={cdnUrl("/img/hero.webp", { w: 1600, q: 80 })} />
 *
 * Parámetros ExactDN soportados:
 *   w = ancho máximo en px
 *   h = alto máximo en px
 *   q = calidad 1-100 (default 82)
 *   fit = contain | cover | scale-down
 *   resize = forzar redimensión (ej: "800,600")
 *   lossy = 1 (activar lossy incluso en PNG)
 *
 * Documentación: https://docs.ewww.io/article/94-exactdn-url-api
 */

// Subdominio ExactDN asignado por ewww.io para mesaspicnic.com
const EXACTDN_HOST = "ew3fy9iennp.exactdn.com";

// Dominio de origen (lo que ExactDN toma como source)
const ORIGIN_HOST = "mesaspicnic.com";

// En dev (astro dev) NO queremos tocar URLs. Astro expone import.meta.env.PROD.
// También respetamos una variable de entorno para forzar CDN en dev si se desea.
const PROD = import.meta.env.PROD;
const FORCE_CDN = import.meta.env.PUBLIC_FORCE_CDN === "true";

export type CdnOpts = {
  /** Ancho máximo en px (ExactDN redimensionará) */
  w?: number;
  /** Alto máximo en px */
  h?: number;
  /** Calidad 1-100 */
  q?: number;
  /** Forzar redimensión exacta "W,H" */
  resize?: string;
  /** fit mode */
  fit?: "contain" | "cover" | "scale-down";
  /** forzar conversión lossy */
  lossy?: boolean;
  /** deshabilitar CDN para esta imagen (devuelve path local) */
  bypass?: boolean;
};

/**
 * Convierte una ruta local (ej. "/img/foo.webp") en URL del CDN.
 * - Rutas absolutas externas (https://...) se devuelven sin modificar.
 * - Data URLs y SVG inline se devuelven sin modificar.
 * - En dev devuelve la ruta local tal cual (salvo PUBLIC_FORCE_CDN).
 */
export function cdnUrl(src: string, opts: CdnOpts = {}): string {
  if (!src) return src;

  // No tocar si es externo, data: o SVG
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("//")
  ) {
    return src;
  }

  // Bypass explícito
  if (opts.bypass) return src;

  // En dev mantenemos rutas locales para no depender del CDN
  if (!PROD && !FORCE_CDN) return src;

  // Normalizar: asegurar leading slash
  const clean = src.startsWith("/") ? src : `/${src}`;

  // Construir query de ExactDN
  const params = new URLSearchParams();
  if (opts.w) params.set("w", String(opts.w));
  if (opts.h) params.set("h", String(opts.h));
  if (opts.q) params.set("quality", String(opts.q));
  if (opts.resize) params.set("resize", opts.resize);
  if (opts.fit) params.set("fit", opts.fit);
  if (opts.lossy) params.set("lossy", "1");

  const qs = params.toString();
  return `https://${EXACTDN_HOST}${clean}${qs ? `?${qs}` : ""}`;
}

/**
 * Igual que cdnUrl pero genera un srcset completo para responsive images.
 * Ej: cdnSrcset("/img/hero.webp", [640, 960, 1280, 1920])
 *     → "https://cdn.../img/hero.webp?w=640 640w, ..."
 */
export function cdnSrcset(src: string, widths: number[], opts: CdnOpts = {}): string {
  return widths
    .map((w) => `${cdnUrl(src, { ...opts, w })} ${w}w`)
    .join(", ");
}

export const CDN = {
  host: EXACTDN_HOST,
  origin: ORIGIN_HOST,
  enabled: PROD || FORCE_CDN,
};
