# Auditoría técnica del proyecto — MESASPICNIC

**Fecha:** 2026-07-17 · **Modo:** solo lectura (ningún archivo modificado) · **Sitio:** https://mesaspicnic.com

> **Nota sobre el contexto declarado vs. realidad del repo:** el proyecto NO es Astro 5 con Tailwind v4 y Content Collections. La realidad verificada es: **Astro ^6.1.1** (`package.json:15`), **CSS plano** en `src/styles/` (sin Tailwind, sin `tailwind.config.js` — coherente), y **sin Content Collections**: el blog son 74 páginas `.astro` en `src/pages/blog/` + `index.astro`. Toda la auditoría se hizo sobre esta realidad.

---

## 1. Resumen ejecutivo

El sitio está en buen estado técnico de base: build limpio (159 páginas en 3.8s), `astro check` sin errores, 100% estático (0 islas, 0 directivas `client:`), JS vanilla mínimo, CSS bien fragmentado por `inlineStylesheets:"auto"`, headings correctos (un solo `<h1>` por página), 684 imágenes de blog todas con `alt`/`width`/`height`/`loading`, 0 enlaces internos rotos, 404 real, robots.txt y sitemap operativos.

Los problemas graves están en tres frentes:

1. **Datos estructurados con reseñas fabricadas** (`aggregateRating` 4.9/500 en TODAS las páginas + reseñas 5★ inventadas en las 32 fichas del directorio) → riesgo real de acción manual de Google por structured-data spam.
2. **El formulario de /cotizar/ no hace nada** (sin `action`, sin handler JS) → la página de conversión principal del sitio está rota.
3. **Incoherencia canonical/sitemap vs. servidor**: todos los canonicals y `<loc>` del sitemap apuntan a URLs sin slash que Cloudflare 308-redirige a con-slash → cada señal de canonicalización apunta a una URL que redirige.

Las mayores oportunidades de rendimiento: imágenes servidas a resolución completa sin `srcset` ni resize (el CDN soporta `?w=` y recorta ~60% de bytes, pero el sitio no lo usa: `Img.astro` y `cdn.ts` son código muerto), Google Fonts render-blocking sin preload, y HTML sin caché edge (`cf-cache-status: DYNAMIC`). En higiene: el root del repo contiene una **segunda copia completa del sitio commiteada** (residuo del deploy GitHub Pages anterior) más 112 MB de imágenes con 389 duplicadas.

---

## 2. Resultados de validación

| Comando | Resultado |
|---|---|
| `npx astro check` | ✅ **0 errores, 0 warnings, 313 hints** (258 archivos). Hints = `astro(4000)`: los `<script type="application/ld+json">` se tratan como `is:inline` implícito; cosmético, se silencia añadiendo `is:inline` explícito. |
| `npm run build` | ✅ **159 páginas en 3.80s**. Integración `exactdn-rewriter`: 2591 URLs reescritas en 159 archivos → `https://ew3fy9iennp.exactdn.com/img/`. Sitemap generado. |
| Deploy live | ✅ Action "Deploy to Cloudflare Pages" verde; publica **solo `dist/`** (`.github/workflows/deploy.yml:34`). |
| Verificación HTTP live | `/` → 200, brotli activo (130 KB → 20 KB). `/servicios`, `/catalogo`, `/blog/*` sin slash → **308** a versión con slash. Ruta inexistente → **404 real**. |
| Tests | No existen tests en el proyecto. |

---

## 3. Hallazgos críticos

### C1. `aggregateRating` y reseñas fabricadas en JSON-LD

- **Problema:** valoraciones inventadas en datos estructurados, emitidas en todas las páginas.
- **Evidencia:** `src/layouts/BaseLayout.astro:56-60` → LocalBusiness con `"ratingValue":"4.9"`, `"ratingCount":"500"` (global, todas las páginas). `src/pages/servicios/bodas/index.astro:404-407` → segundo `aggregateRating` `"5"`/`"47"`. `src/pages/directorio/[slug].astro:75-81` y `307-317` → reseña visible "★★★★★ 4.9, +500 eventos", autor "Clientes MESPIC", texto idéntico en las 32 fichas.
- **Impacto técnico:** structured data que no corresponde a reseñas reales verificables.
- **Impacto SEO:** riesgo de **acción manual por spam de datos estructurados** (pérdida de todos los rich results del dominio). Además viola la regla interna OrigenLab de no fabricar reseñas.
- **Solución:** eliminar ambos `aggregateRating` del JSON-LD y la reseña genérica del directorio. Si existen reseñas reales (Google Business Profile), enlazarlas, no marcarlas.
- **Riesgo de aplicar:** nulo (solo se elimina marcado).
- **Esfuerzo:** bajo (3 archivos).

### C2. Formulario de /cotizar/ roto

- **Problema:** el formulario de la página de conversión principal no envía a ningún lado.
- **Evidencia:** `src/pages/cotizar.astro:30` → `<form id="cotizarForm">` sin `action`; `<button type="submit">` en `:76`; **cero** scripts referencian `cotizarForm`. Contraste: `contacto.astro:415-441` sí tiene handler → WhatsApp.
- **Impacto técnico:** submit hace GET a la misma página; no pasa nada.
- **Impacto negocio:** pérdida directa de conversiones — es el destino del CTA del header.
- **Solución:** replicar el patrón de `contacto.astro` (handler que arma mensaje → `wa.me/525530682988`).
- **Riesgo:** bajo. **Esfuerzo:** bajo (1 archivo, ~25 líneas).

### C3. Canonical y sitemap contradicen al servidor (slash final)

- **Problema:** todos los canonicals y URLs del sitemap se emiten SIN slash final, pero Cloudflare Pages sirve las páginas CON slash y responde **308** a las versiones sin slash.
- **Evidencia:** `astro.config.mjs:30-33` (serialize que quita el slash), `src/layouts/BaseLayout.astro:33`, `BlogLayout.astro:96-97`. Live: `curl -sI /servicios` → `308 → /servicios/`; el HTML de `/servicios/` declara `canonical: .../servicios` (que redirige). 860 enlaces internos usan slash vs. 1 sin (`catalogo/index.astro:367`, `/cotizar`).
- **Impacto SEO:** cada señal de canonical apunta a una URL que hace 308; Google canonicaliza a la URL resuelta, contradiciendo lo declarado. No hay contenido duplicado (el 308 lo evita), pero la señal es incoherente en el 100% de las páginas. Coste extra: un round-trip 308 en navegaciones a URL sin slash.
- **Solución:** alinear todo a CON slash: `trailingSlash: "always"` (o quitar la normalización), canonicals con slash, y eliminar la reescritura del `serialize` del sitemap. Homogeneizar el enlace `/cotizar` → `/cotizar/`.
- **Riesgo:** medio — cambia el canonical de todas las páginas; hacerlo una sola vez y de forma consistente (Google reconsolida en días/semanas).
- **Esfuerzo:** bajo (2 archivos + 1 enlace).

### C4. Root del repo = segunda copia del sitio, commiteada y con origen fantasma de GitHub Pages

- **Problema:** el root contiene un build completo del sitio trackeado en git (residuo del deploy GitHub Pages anterior), ya **stale** respecto a `dist/`, con `CNAME` + `.nojekyll` presentes.
- **Evidencia:** tracked: `index.html`, `blog/` (76), `catalogo/` (23), `servicios/` (17), `directorio/` (33), `chunks/` (40), `pages/` (44), `manifest_*.mjs` (9), `renderers.mjs`, `_noop-middleware.mjs`, `webpack.*.js` (3), `sitemap-*.xml`, `robots.txt`, `*.html` sueltos. `git log -1 -- index.html` → `5fb90d0` (el commit de hoy los siguió tocando). `diff index.html dist/index.html` → difieren. El propio `deploy.yml` documenta el riesgo del "GitHub Pages congelado detrás del proxy de Cloudflare".
- **Impacto técnico:** repo duplicado e hinchado, confusión operativa (los reemplazos globales tienen que tocar 373 archivos en vez de ~130), y **riesgo de servir contenido stale** si GitHub Pages sigue/vuelve a estar habilitado (incidente barberia.mx 2026-06-20 fue exactamente esto).
- **Impacto SEO:** URLs legacy duplicadas (`aviso-privacidad.html`, `contacto.html`, `blog.html`, `terminos-condiciones.html`) con canonicals divergentes si algo las sirve.
- **Solución:** (1) confirmar en GitHub Settings → Pages que está **deshabilitado**; (2) borrar del repo el build del root (html, chunks, pages, manifests, webpack, sitemaps, robots del root — conservando `src/`, `public/`, `img/` si aplica); (3) verificar deploy CF verde después.
- **Riesgo:** medio — requiere confirmar primero que nada sirve desde el root (regla del skill deploy-seguridad). Con Pages deshabilitado, riesgo nulo.
- **Esfuerzo:** medio (limpieza + verificación de deploy).

### C5. `Product` con `offers` sin `price` en las 22 fichas de catálogo

- **Problema:** JSON-LD `Product` → `offers` sin `price`/`priceSpecification`, sin `image`, sin `url`.
- **Evidencia:** `src/pages/catalogo/mesa-picnic-estandar/index.astro:331-353` (patrón repetido en las 22 fichas). Grep de `price` en `src/pages/catalogo` = 0.
- **Impacto SEO:** Search Console reportará "Missing field 'price'"; el rich result de Product no valida → se pierde el snippet enriquecido del catálogo completo.
- **Solución:** añadir `AggregateOffer` con `lowPrice` (o `priceSpecification`) + `image` + `url`; o quitar `offers` si no se quiere publicar precio.
- **Riesgo:** bajo. **Esfuerzo:** medio (22 archivos, patrón mecánico).

---

## 4. Hallazgos importantes

### I1. Imágenes sin `srcset`/resize — el CDN lo soporta y no se usa

- **Evidencia:** 0 `srcset` en el HTML live de las 4 páginas medidas; 749 `<img>` planos en `src/`. `src/integrations/exactdn.ts:52-56` solo cambia el hostname, sin parámetros. Medición: `mesa-picnic-celebracion-18.webp` = 306 KB sin parámetros vs. **134 KB con `?w=800`** (−56%). `src/components/Img.astro` (0 imports) y `src/lib/cdn.ts` (6 usos marginales) son la infraestructura que haría esto y está muerta.
- **Impacto:** móviles descargan imágenes a resolución de escritorio; LCP y peso total inflados en catálogo (imágenes de 200–549 KB).
- **Solución:** adoptar `Img.astro`/`cdnUrl` con `?w=` + `srcset/sizes` en plantillas (empezar por catálogo y héroes de servicio), o añadir parámetros en el rewriter.
- **Riesgo:** bajo-medio (verificar comportamiento real del CDN — ver I9). **Esfuerzo:** medio-alto (muchas plantillas, pero patrón repetitivo).

### I2. LCP no priorizado

- **Evidencia:** única imagen `eager` en todo el sitio = logo del header (39 KB). Fotos principales above-the-fold de catálogo/servicios con `loading="lazy"`, 0 `fetchpriority="high"`, 0 `<link rel="preload">` de imagen. (Home se salva: su hero es CSS, LCP = texto.)
- **Solución:** en fichas de catálogo/servicios: `loading="eager"` + `fetchpriority="high"` en la imagen principal.
- **Riesgo:** nulo. **Esfuerzo:** bajo.

### I3. Google Fonts render-blocking

- **Evidencia:** `src/layouts/BaseLayout.astro:145-147` — Plus Jakarta Sans (500/700/800) vía `<link>` CSS de Google, render-blocking; preconnect presente pero sin self-hosting ni preload de woff2; `display=swap` → FOUT en títulos.
- **Solución:** self-host de los 3 pesos woff2 con `@font-face` + `font-display: swap` + `<link rel="preload">`, o al menos patrón media="print" onload.
- **Riesgo:** bajo. **Esfuerzo:** bajo-medio.

### I4. HTML sin caché edge + Rocket Loader

- **Evidencia:** `cf-cache-status: DYNAMIC`, `cache-control: public, max-age=0, must-revalidate` en HTML de un sitio 100% estático. Rocket Loader activo (reescribe todos los scripts inline con `type="...text/javascript"`) + `email-decode.min.js`.
- **Impacto:** cada request de HTML va al origen; Rocket Loader difiere JS propio ya mínimo y puede retrasar interactividad (menú móvil).
- **Solución:** Cache Rule en Cloudflare para cachear HTML (con purge on deploy, que la Action ya podría disparar) y desactivar Rocket Loader. Son ajustes de dashboard, no de repo.
- **Riesgo:** bajo (purge en cada deploy es clave). **Esfuerzo:** bajo.

### I5. `FAQPage` duplicado en la misma URL

- **Evidencia:** `FaqSection.astro:33-48` emite FAQPage (correcto, coincide con lo visible). Además: `catalogo/mesa-picnic-estandar/index.astro:354-369` (2 preguntas abreviadas) y `contacto.astro:390-410` (3 preguntas) añaden un **segundo** FAQPage manual con contenido distinto. Verificado en el HTML live: 2× FAQPage.
- **Impacto SEO:** marcado duplicado y no coincidente con lo visible → Google puede ignorarlo o marcarlo.
- **Solución:** eliminar los FAQPage manuales; conservar solo el de `FaqSection`.
- **Riesgo:** nulo. **Esfuerzo:** bajo.

### I6. NAP inconsistente: tres correos distintos

- **Evidencia:** `hola@mesaspicnic.com` (`BaseLayout.astro:45`, JSON-LD, 3 usos), `contacto@mesaspicnic.com` (`Footer.astro:92`, 6 usos), `mesaspicnick@gmail.com` (`contacto.astro:105,114,369`, `aviso-de-privacidad.astro:37`, 15 usos — gmail y con "ck").
- **Impacto:** SEO local (consistencia NAP) y confianza (gmail con typo aparente en la página de contacto).
- **Solución:** definir el correo oficial y unificar (mismo tratamiento que se hizo con el teléfono).
- **Riesgo:** nulo tras confirmar cuál es el real — **requiere decisión de Frank**. **Esfuerzo:** bajo.

### I7. Fechas del blog incoherentes

- **Evidencia:** `BlogLayout.astro:60` → default `datePublished = "2026-06-03"`. **54 de 75 posts no pasan fecha** y heredan el default; los 21 restantes solo usan 2026-06-03/04. 0 posts declaran `dateModified` (`BlogLayout.astro:109` emite dateModified = datePublished).
- **Impacto SEO:** todo el blog aparenta publicarse en 2 días (huella de publicación masiva); sin señal de frescura.
- **Solución:** quitar el default, hacer `datePublished` requerido en la interface de Props, poblar fechas reales escalonadas y `dateModified` al editar.
- **Riesgo:** bajo. **Esfuerzo:** medio (74 archivos, mecánico).

### I8. Accesibilidad — menú móvil y foco

- **Evidencia:** `Header.astro:521` — el panel móvil cerrado se oculta solo con `transform: translateX(100%)`: sus enlaces **siguen siendo tabbables** dentro de un contenedor `aria-hidden="true"` (fallo WCAG). Sin focus-trap, sin manejo de `Escape`, sin devolución de foco al botón. `global.css`: sin regla global `:focus-visible` (solo `.skip-link:focus`, `:155`). `prefers-reduced-motion` solo en `WaBubble.astro:133-137`; 0 en `src/styles/*.css`.
- **Solución:** `visibility:hidden`/`inert` al panel cerrado + Escape + foco; regla global `:focus-visible`; bloque global `@media (prefers-reduced-motion: reduce)`.
- **Riesgo:** bajo. **Esfuerzo:** bajo-medio.

### I9. El "ExactDN" es en realidad BunnyCDN — validar parámetros antes de I1

- **Evidencia:** `curl -I` al host CDN → `server: BunnyCDN-PHX1-1155`. Los comentarios de `cdn.ts:82-88` asumen la API de ExactDN (ewww.io); además el "webp" del CDN puede pesar MÁS que el jpeg (364 KB vs 306 KB en la muestra) mientras los AVIF originales sí son eficientes (105 KB).
- **Solución:** verificar qué parámetros de transformación soporta realmente la pull zone (Bunny Optimizer: `?width=`, `?quality=`…) y ajustar `cdn.ts` a la API real antes de desplegar srcset.
- **Riesgo:** — . **Esfuerzo:** bajo (validación).

---

## 5. Mejoras recomendadas

1. **Sidebar del blog data-driven:** cada uno de los 74 posts hardcodea ~40 líneas de `sidebarProducts/sidebarArticles/sidebarServices/breadcrumbs` (`blog/bodas-boho-chic-cdmx.astro:25-42`). Extraer a un módulo de datos (`src/data/blog-related.ts`) reduciría el principal foco de duplicación editable.
2. **Content Collections: solo para frontmatter.** Migrar los cuerpos (HTML bespoke, mediana 404 líneas, 23 posts con `<style>` propio) a MDX es alto esfuerzo/bajo retorno. Alternativa barata con casi todo el beneficio: interface de Props estricta en `BlogLayout` con `datePublished` requerido (ataca I7 sin migración).
3. **Script `"check": "astro check"`** en `package.json` (hoy el deploy usa npx pero no hay script local).
4. **Tipar env vars** (`PUBLIC_DISABLE_CDN`, `PUBLIC_FORCE_CDN`) en `src/env.d.ts` — hoy son `any` (`cdn.ts:34`, `exactdn.ts:65`).
5. **Arreglar `.gitignore:12`:** línea colapsada `_wtest_root.tmp*.cfbak` (debían ser 2 patrones); por eso `_wtest_root.tmp` y `deploy.yml.cfbak` están trackeados.
6. **JSON-LD:** quitar `EventVenue` del type de MESPIC (`BaseLayout.astro:41` — es proveedor, no recinto); añadir `is:inline` a los `<script type="application/ld+json">` para silenciar los 313 hints.
7. **Meta description global** ~200 chars (`BaseLayout.astro:22`) → recortar a <160.
8. **`aviso-de-privacidad`:** excluida del sitemap pero sin `noindex` — añadirlo si se quiere fuera del índice.
9. **`directorio/[slug].astro:13,16`:** importa `espacios.json` dos veces (top-level + `await import` en getStaticPaths) — reusar el import.
10. **`autocomplete`** en formularios (`name`, `tel`, `email`) en `contacto.astro:157-213` y `cotizar.astro:33-74`.
11. **Contraste footer:** `#3F3F46` sobre `#111113` ≈ 2.0:1 y `#52525B` sobre `#16161a` ≈ 3.3:1 fallan AA (`Footer.astro:562-621`); no usar `--c-accent #C8956C` como texto sobre blanco (2.7:1).
12. **Evaluar TruConversion** (`BaseLayout.astro:150-151`): si los heatmaps ya no se consultan, quitarlo elimina el único tercero pesado.

---

## 6. Código y archivos innecesarios

**Componentes muertos (0 imports, verificado por grep en todo `src/`):**

| Archivo | Evidencia |
|---|---|
| `src/components/CtaBarFinal.astro` | 0 imports; su rol lo cumple `CtaFlujo` (`BaseLayout.astro:5,193`) |
| `src/components/Img.astro` | 0 imports; las páginas usan `<img>` plano (mejor: adoptarlo, ver I1) |
| `src/components/StickyMobileNav.astro` | único import comentado (`BaseLayout.astro:7` "removed") |

**Dependencias/integraciones sin uso:** `@astrojs/mdx` instalado y registrado (`astro.config.mjs:3,15`) con **0 archivos .mdx** en el proyecto — quitar integración y dependencia.

**Archivos obsoletos trackeados (verificar Settings→Pages antes de borrar — ver C4):** build completo del root (`index.html`, `blog/`, `catalogo/`, `servicios/`, `paquetes/`, `nosotros/`, `contacto/`, `cotizar/`, `directorio/`, `*.html` sueltos, `sitemap-*.xml`, `robots.txt` del root), artefactos SSR/webpack (`chunks/`, `pages/`, `manifest_*.mjs` ×9, `renderers.mjs`, `_noop-middleware.mjs`, `webpack.*.js` ×3, `scripts/`), junk (`_wtest_root.tmp`, `deploy.yml.cfbak`, `index.html.probe`, `.fuse_hidden*`).

**Imágenes:** `img/` (root, 63 MB) vs `public/img/` (49 MB): **389 archivos idénticos duplicados**. Además 12 PNGs generados por IA (17.1 MB) en `img/` root: 0 referencias en código, 404 en live. `img/` root parece un staging duplicado de `public/img/` — consolidar en `public/img/` únicamente.

**No son duplicados (verificado, conservar):** `CtaBar` (52 usos) vs `CtaBarFinal`; `TestimonialCard` vs `TestimonialCardEmpresa` (variantes B2C/B2B, ambas en uso); `FeatureCard`/`NextStep`/`ExploreMore`/`FaqSection` (48 usos c/u), `EspaciosSidebar` (2), `FunnelProgress` (1, vía `CtaBar:11`).

---

## 7. Rendimiento y Core Web Vitals

**LCP:** el mayor riesgo está en catálogo/servicios: imagen principal `lazy` sin `fetchpriority` (I2) + servida a resolución completa sin resize (I1) + fuente del H1 con FOUT por Google Fonts render-blocking (I3). Home está protegida (hero CSS, LCP texto). El 308 de trailing slash (C3) añade un RTT a navegaciones internas y `cf-cache-status: DYNAMIC` (I4) suma TTFB de origen en cada vista.

**CLS:** bien controlado — 100% de `<img>` con `width`/`height`, FAQ con `<details>` nativo, sticky nav `position:fixed`. Riesgo residual: swap de fuente (I3) en títulos.

**INP:** JS propio mínimo (menú móvil vanilla, form WhatsApp). El riesgo viene de fuera: Rocket Loader reescribiendo/difiriendo los scripts inline y TruConversion en el arranque (I4, mejora 12).

**Peso:** HTML 109–153 KB raw → 18–24 KB brotli (bien). CSS fragmentado correctamente: `BaseLayout.css` 6.3 KB br global; `blog-article.css` solo en blog; duplicación entre hojas mínima (solo `.btn`, `.container`); `!important` acotado (14 en mobile.css, documentado). El grueso del peso son imágenes sin resize (hasta 549 KB por imagen en catálogo).

**Build:** 3.8s para 159 páginas — sano. Ineficiencias menores: `readFileSync`+gray-matter de `header.md`/`topbar.md` ejecutado 128 veces (una por página) sin cache; rewriter ExactDN recorre todo `dist` post-build (aceptable a esta escala).

---

## 8. SEO técnico y contenido Markdown

**Lo grave:** C1 (ratings fabricados), C3 (canonical vs 308 en el 100% de páginas), C5 (Product sin price), I5 (FAQPage duplicado), I6 (NAP con 3 emails), I7 (fechas de blog).

**Lo sano (verificado):** titles únicos en las 128 páginas con patrón `… | MESPIC`; descriptions presentes en el 100% del blog; un solo `<h1>` por página vía `Hero.astro:47`, jerarquía h2/h3 sin saltos; OG/Twitter completos con og:image 1200×630 (77.7 KB); `lang="es-MX"`; breadcrumbs visibles + `BreadcrumbList` con URLs absolutas; robots.txt correcto (bloquea `_astro`, parámetros utm, CCBot); sitemap 200 en live; 404 real con `noindex`; skip-link presente; 0 enlaces internos rotos (99 hrefs verificados contra 160 rutas); directorio y blog bien enlazados (no hay páginas huérfanas — blog/index emite 67 enlaces estáticos).

**Contenido:** no hay duplicado literal, pero sí **canibalización de intención** en `fiestas-tematicas-conceptos-mesas-picnic` vs `conceptos-fiesta-tematica-mesas-picnic-mobiliario` (Jaccard 0.18, misma intención "10 conceptos de fiesta temática") — diferenciar titles/H1 o consolidar con redirect. Pares corporativo/team-building y las 3 piezas de "Producciones" están suficientemente diferenciados.

**Datos internos:** los `.md` de root, `obsidian-vault/` y `docs/` NO llegan al sitio (deploy sube solo `dist/`) — pero quedan expuestos si el repo es público ("DMChamp — Guía Maestra", prompts, keywords). Considerar sacarlos del repo del sitio.

---

## 9. Accesibilidad

| Severidad | Problema | Archivo | Impacto usuario |
|---|---|---|---|
| **Alta** | Panel móvil cerrado con enlaces tabbables dentro de `aria-hidden` | `Header.astro:521,539-555` | Usuarios de teclado/lector navegan a elementos invisibles |
| **Alta** | Menú móvil sin focus-trap, sin Escape, sin retorno de foco | `Header.astro:529-598` | Teclado queda "fuera" del menú abierto |
| **Media** | Sin `:focus-visible` global | `global.css` (solo `:155` skip-link) | Foco invisible en la mayoría de elementos |
| **Media** | `prefers-reduced-motion` solo en WaBubble | `WaBubble.astro:133` vs 0 en `src/styles/` | Animaciones (pulsos, scales) para usuarios sensibles al movimiento |
| **Media** | Contraste footer 2.0:1 y 3.3:1 (falla AA) | `Footer.astro:562-621` | Texto ilegible para baja visión |
| **Baja** | Sin `autocomplete` en formularios | `contacto.astro:157-213`, `cotizar.astro:33-74` | Fricción al rellenar en móvil |

**Correcto:** FAQ con `<details>/<summary>` nativo; hamburguesa con `aria-expanded`/`aria-controls`; WaBubble con `aria-label` + `:focus-visible`; labels asociados en todos los formularios; skip-link.

---

## 10. Plan de optimización

**Fase 1 — Correcciones críticas**
1. Eliminar `aggregateRating` y reseñas fabricadas (C1).
2. Arreglar formulario /cotizar/ → WhatsApp (C2).
3. Alinear trailing slash: canonicals + sitemap + `/cotizar` (C3).
4. Confirmar GitHub Pages deshabilitado; limpiar build del root del repo (C4).

**Fase 2 — Alto impacto / bajo esfuerzo**
5. `fetchpriority="high"` + `eager` en imágenes LCP de catálogo/servicios (I2).
6. Eliminar FAQPage manuales duplicados (I5).
7. Unificar email oficial (I6 — decidir cuál).
8. Self-host de Plus Jakarta Sans + preload (I3).
9. Cache Rule para HTML + desactivar Rocket Loader en Cloudflare (I4).
10. `price` en Product del catálogo o quitar `offers` (C5).

**Fase 3 — Rendimiento**
11. Validar API real del CDN (Bunny) (I9) → desplegar `srcset`/`?w=` vía `Img.astro`/`cdnUrl`, empezando por catálogo (I1).
12. Consolidar `img/` root en `public/img/`; borrar 17 MB de PNGs sin uso (tras verificar referencias).

**Fase 4 — Refactor y mantenimiento**
13. Fechas reales de blog + `datePublished` requerido (I7).
14. A11y: inert/focus en menú móvil, `:focus-visible` global, reduced-motion, contraste footer, autocomplete (I8).
15. Quitar `@astrojs/mdx`, componentes muertos, arreglar `.gitignore`, script check, tipar env (sección 6 + mejoras 3-5).

**Fase 5 — Largo plazo**
16. Sidebar de blog data-driven; Props estrictas en BlogLayout.
17. Diferenciar/consolidar el par de fiestas temáticas.
18. Mover docs internos fuera del repo del sitio.

## 11. Matriz de prioridades

| Prioridad | Hallazgo | Archivo | Impacto | Esfuerzo | Riesgo | Acción recomendada |
|---|---|---|---|---|---|---|
| 🔴 1 | Ratings/reseñas fabricadas | `BaseLayout.astro:56`, `bodas/index.astro:404`, `directorio/[slug].astro:75,307` | Muy alto (penalización) | Bajo | Nulo | Eliminar del JSON-LD y UI |
| 🔴 2 | Form /cotizar/ roto | `cotizar.astro:30` | Muy alto (conversión) | Bajo | Bajo | Handler → WhatsApp |
| 🔴 3 | Canonical vs 308 slash | `astro.config.mjs:30`, `BaseLayout.astro:33` | Alto (100% páginas) | Bajo | Medio | `trailingSlash:"always"` + canonicals con slash |
| 🔴 4 | Build commiteado en root + Pages fantasma | root del repo, `.gitignore:12` | Alto (stale/duplicado) | Medio | Medio | Verificar Pages off → limpiar |
| 🔴 5 | Product sin price | `catalogo/*/index.astro` (22) | Alto (rich results) | Medio | Bajo | AggregateOffer o quitar offers |
| 🟠 6 | Imágenes sin srcset/resize | `exactdn.ts:52`, `Img.astro` (muerto) | Alto (LCP móvil, −60% bytes) | Medio-alto | Bajo-medio | Validar CDN → adoptar Img/srcset |
| 🟠 7 | LCP lazy sin fetchpriority | fichas catálogo/servicios | Alto (LCP) | Bajo | Nulo | eager + fetchpriority=high |
| 🟠 8 | Google Fonts blocking | `BaseLayout.astro:145` | Medio (LCP/FOUT) | Bajo-medio | Bajo | Self-host + preload |
| 🟠 9 | HTML sin edge cache + Rocket Loader | Cloudflare dashboard | Medio (TTFB/INP) | Bajo | Bajo | Cache Rule + purge on deploy; RL off |
| 🟠 10 | FAQPage duplicado | `mesa-picnic-estandar:354`, `contacto:390` | Medio (SEO) | Bajo | Nulo | Dejar solo FaqSection |
| 🟠 11 | 3 emails distintos (NAP) | `contacto.astro:105` et al. | Medio (SEO local/confianza) | Bajo | Nulo* | Unificar (decidir cuál) |
| 🟠 12 | Fechas blog default | `BlogLayout.astro:60` + 54 posts | Medio (frescura) | Medio | Bajo | Fechas reales + prop requerida |
| 🟡 13 | Menú móvil a11y | `Header.astro:521` | Medio (teclado/SR) | Bajo-medio | Bajo | inert + focus + Escape |
| 🟡 14 | Contraste footer | `Footer.astro:562-621` | Medio (AA) | Bajo | Nulo | Subir luminancia |
| 🟡 15 | mdx sin uso + componentes muertos | `package.json`, 3 componentes | Bajo (higiene) | Bajo | Nulo | Eliminar |
| 🟡 16 | img/ duplicado + PNGs IA | `img/` root (63 MB) | Bajo (repo) | Bajo | Bajo | Consolidar en public/img |
| 🟡 17 | Canibalización fiestas temáticas | 2 posts blog | Bajo-medio | Bajo | Bajo | Diferenciar o 301 |

## 12. Métricas esperadas

**Antes de tocar nada, capturar línea base:** PageSpeed Insights (móvil) de `/`, `/catalogo/mesa-picnic-estandar/` y un post de blog; Search Console → Mejoras (Product, FAQ, Breadcrumb) y Cobertura.

| Métrica | Cómo validar | Efecto esperado |
|---|---|---|
| LCP móvil (catálogo) | PSI / CrUX tras I1+I2+I3 | De "imagen full-res lazy" a <2.5s |
| Bytes de imagen | DevTools Network con `?w=` + srcset | −50-60% en móvil |
| TTFB | curl -w / WebPageTest tras Cache Rule | `cf-cache-status: HIT` en HTML |
| Rich results Product | Search Console + Rich Results Test tras C5 | 22 fichas válidas |
| Errores structured data | Search Console tras C1/I5 | 0 items con review spam / FAQ duplicado |
| Canonicalización | Search Console → Inspección URL tras C3 | "URL canónica declarada = seleccionada" |
| Conversión /cotizar/ | Eventos de clic WhatsApp (o TruConversion) tras C2 | >0 envíos |
| Peso del repo | `git count-objects -vH` tras C4 + limpieza img | −100+ MB |
| A11y | Lighthouse a11y + prueba de teclado tras I8 | Score >95, menú navegable |
| Indexación blog | Search Console rendimiento tras I7/canibalización | Impresiones estables o al alza |

---

## Top 10 acciones por impacto real

1. **Eliminar `aggregateRating` y reseñas fabricadas** — riesgo de penalización que afecta a todo el dominio (C1).
2. **Arreglar el formulario de /cotizar/** — hoy pierde el 100% de sus conversiones (C2).
3. **Alinear canonical/sitemap con el trailing slash real del servidor** — señal incoherente en todas las páginas (C3).
4. **Verificar GitHub Pages deshabilitado y limpiar el build commiteado del root** — elimina el origen fantasma y ~100 MB (C4).
5. **Responsive images: validar CDN Bunny y activar `?w=` + srcset** — la mayor palanca de LCP y datos móviles (I1/I9).
6. **`fetchpriority="high"` en las imágenes LCP** de catálogo/servicios — mejora inmediata casi gratis (I2).
7. **Añadir `price` al Product de las 22 fichas** — desbloquea rich results del catálogo (C5).
8. **Self-host de la fuente + preload** — quita el render-blocking de terceros (I3).
9. **Unificar el correo de contacto** — NAP consistente, igual que se hizo con el teléfono (I6).
10. **Cache Rule para HTML + desactivar Rocket Loader** en Cloudflare — TTFB e INP sin tocar código (I4).

---
*Auditoría de solo lectura. Ningún archivo del proyecto fue modificado. Esperando autorización para implementar.*
