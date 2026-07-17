/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** "true" fuerza URLs de CDN también en dev (cdn.ts) */
  readonly PUBLIC_FORCE_CDN?: string;
  /** "1"/"true" desactiva el rewriter de CDN en build (exactdn.ts) */
  readonly PUBLIC_DISABLE_CDN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
