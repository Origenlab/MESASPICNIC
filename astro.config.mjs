import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { exactdnRewriter } from "./src/integrations/exactdn.ts";

const SITE = "https://mesaspicnic.com";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    mdx(),
    exactdnRewriter(),
    sitemap({
      filter: (page) =>
        !page.includes("/aviso-de-privacidad") &&
        !page.includes("/gracias") &&
        !page.includes("/404"),
      serialize(item) {
        // Cloudflare Pages sirve CON slash final (308 desde la versión sin
        // slash); el sitemap y los canonical llevan slash para coincidir.
        if (!/\.[a-z0-9]+$/i.test(item.url) && !item.url.endsWith("/")) {
          item.url = `${item.url}/`;
        }
        const path = item.url.replace(SITE, "");

        // L1 Homepage
        if (path === "/" || path === "")
          return { ...item, priority: 1.0, changefreq: "weekly" };

        // L2 Hubs directos (servicios, catalogo, paquetes, blog, nosotros)
        if (/^\/[^/]+\/?$/.test(path))
          return { ...item, priority: 0.9, changefreq: "weekly" };

        // L3 Sub-categorias (servicios/bodas, catalogo/mesa-estandar)
        if (/^\/[^/]+\/[^/]+\/?$/.test(path))
          return { ...item, priority: 0.8, changefreq: "monthly" };

        // L4 Variantes (servicios/bodas/rustica)
        if (/^\/[^/]+\/[^/]+\/[^/]+\/?$/.test(path))
          return { ...item, priority: 0.7, changefreq: "monthly" };

        // Blog articulos
        if (path.startsWith("/blog/"))
          return { ...item, priority: 0.6, changefreq: "monthly" };

        return { ...item, priority: 0.7, changefreq: "monthly" };
      },
    }),
  ],
});
