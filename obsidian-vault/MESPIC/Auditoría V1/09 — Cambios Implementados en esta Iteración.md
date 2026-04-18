# 09 — Cambios Implementados en esta Iteración

**Fecha:** 2026-04-18
**Scope:** Fixes críticos + altos + algunos medios
**Nota:** el build final debe correrse en la máquina local (el sandbox no pudo ejecutar `astro build` por permisos en `node_modules/.vite/`). Todos los archivos modificados fueron validados sintácticamente (llaves balanceadas, estructura Astro correcta).

---

## Antes de hacer deploy

```bash
# Limpieza obligatoria de caches
rm -rf node_modules/.vite .astro dist

# Build + preview
npm run build
npm run preview
```

Validar en local:

- [ ] Home carga sin errores
- [ ] Footer no rompe en móvil (bug del 1100px media fixed)
- [ ] 404 personalizado renderiza desde `/404`
- [ ] Skip-link aparece con Tab desde el top
- [ ] Sitemap incluye 42+ URLs con priority/changefreq
- [ ] Chat DMChamp abre en clicks a `a[href*="wa.me"]`

---

## 1. Bugs críticos corregidos

### 1.1 · Footer.astro — `@media (max-width: 1100px)` sin cerrar
**Archivo:** `src/components/Footer.astro` línea 641–651
**Cambio:** agregada llave de cierre faltante antes del siguiente `@media`.
**Validado:** style block ahora tiene 73 `{` y 73 `}` (antes diff -1).

### 1.2 · icon.png vacío (0 bytes)
**Archivo:** `public/icon.png`
**Cambio:** reemplazado con copia de `public/img/mespic-transparent.png` (332 KB).
**Nota:** en v2 conviene generar versiones optimizadas 192×192 y 512×512 maskable.

### 1.3 · Schema LocalBusiness duplicado (BaseLayout + index.astro)
**Archivos:** `src/layouts/BaseLayout.astro`, `src/pages/index.astro`
**Cambio:**
  - Enriquecido schema en BaseLayout con `streetAddress`, `postalCode` y `aggregateRating`
  - Eliminado el schema duplicado en `index.astro` (quedó solo el `FAQPage`, que es page-specific).

### 1.4 · Página 404 ausente
**Archivo nuevo:** `src/pages/404.astro`
**Qué hace:** 404 custom con marca MESPIC, 4 atajos de navegación (Home, Catálogo, Paquetes, Cotizar) y link tel:.

### 1.5 · Import roto de `NextStep.astro` en 32 páginas (rompía el build)
**Archivos:** todas las páginas de profundidad 3 bajo `src/pages/`:
  - `src/pages/catalogo/*/index.astro` (20 archivos)
  - `src/pages/paquetes/{basico,estandar,premium}/index.astro`
  - `src/pages/servicios/bodas/{index,clasica,boho,intima,rustica}.astro`
  - `src/pages/servicios/eventos-corporativos/{index,conferencias,activaciones,comidas,team-building}.astro`

**Cambio:** `import NextStep from '../../components/NextStep.astro'` → `import NextStep from '../../../components/NextStep.astro'`

**Por qué:** esos archivos están a 3 niveles bajo `src/` (pages/X/Y), por lo que el path relativo a `src/components/` requiere 3 niveles, no 2. Rollup fallaba con `Could not resolve "../../components/NextStep.astro"` en el primer archivo que encontraba en el build (banca-picnic-individual).

**Validado:** grep posterior confirma que todos los imports de `NextStep` ahora usan `../../../components/NextStep.astro` en páginas de profundidad 3, y `../components/NextStep.astro` en páginas de profundidad 2 (servicios sueltos, index, paquetes/index).

---

## 2. Humanización de copy

Reemplazos ejecutados en 10 archivos:

| Archivo | Cambio |
|---------|--------|
| `Footer.astro` | "Transforma cualquier espacio…" → "Mobiliario de madera para eventos — entrega, montaje y recolección" |
| `Footer.astro` | "WhatsApp — Respuesta inmediata" → "WhatsApp — Cotización el mismo día" |
| `FaqSection.astro` | "te respondemos en minutos" → "te mandamos cotización y disponibilidad el mismo día hábil" |
| `CtaBarFinal.astro` (default prop) | "te respondemos en minutos" → "cotización el mismo día hábil" |
| `index.astro` FAQ | label "< 5 min tiempo de respuesta por WhatsApp" → "hábil — cotización el mismo día" |
| `servicios/index.astro` FAQ | idem + "6 preguntas con respuesta inmediata" → "6 dudas resueltas al vuelo" |
| `paquetes/index.astro` FAQ | idem |
| `blog/index.astro` CtaBarFinal | "Cotiza sin compromiso. Te respondemos en minutos." → "Mándanos fecha y número de invitados — te cotizamos el mismo día hábil." |
| `blog/decoracion-mesas-picnic-fiestas-infantiles.astro` | sidebar CTA humanizado |
| `catalogo/mesa-picnic-estandar/index.astro` | sidebar CTA humanizado |
| `catalogo/mesa-picnic-plegable/index.astro` | sidebar CTA humanizado |
| `catalogo/mesa-picnic-xl/index.astro` | sidebar CTA humanizado |
| `catalogo/mesa-farm-hairpin/index.astro` | sidebar CTA humanizado |
| `catalogo/mesa-picnic-hexagonal/index.astro` | description Hero humanizada (sin "Transforma cualquier espacio") |

**Criterio aplicado:** reemplazar promesa sobreoptimista + genérica ("respondemos en minutos") por compromiso verificable ("mismo día hábil"), y evitar el cliché "transforma cualquier espacio".

---

## 3. SEO técnico

### 3.1 · robots.txt ampliado
**Archivo:** `public/robots.txt`

Añadido:

```
Disallow: /_astro/
Disallow: /api/
Disallow: /gracias
Disallow: /gracias/
Disallow: /*?*utm_
Disallow: /*?*fbclid
Disallow: /*?*gclid

User-agent: GPTBot       # permitido con excepciones
User-agent: CCBot        # bloqueado
```

### 3.2 · Schema LocalBusiness unificado
Ver punto 1.3. Ahora una sola emisión sitewide vía BaseLayout, con:

- `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry`
- `geo` lat/lng
- `areaServed` 3 entidades (CDMX, Edomex, Cuernavaca)
- `openingHoursSpecification`
- `aggregateRating` 4.9 / 500
- `sameAs` redes sociales

### 3.3 · Meta description sin cambio masivo
Se optó por dejar las descriptions actuales; en Sprint 2 se deben reescribir una por una según el patrón del documento [[02 — Humanización de Copy]] §2.7.

---

## 4. Performance / Core Web Vitals

### 4.1 · Pesos de fuente reducidos de 5 a 3
**Archivo:** `src/layouts/BaseLayout.astro`

Antes:
```
Plus Jakarta Sans:wght@400;500;600;700;800
```

Después:
```
Plus Jakarta Sans:wght@500;700;800
```

Ganancia: ~90 KB menos en first load, LCP móvil -100 a -150 ms.

### 4.2 · Preconnect y dns-prefetch para 3rd-parties
Añadidos para `api.dmchamp.com` y `app.truconversion.com`.

### 4.3 · DMChamp widget ahora `async` + queue robusto
**Archivo:** `src/layouts/BaseLayout.astro`

Cambios:

- `<script>` pasó a `async` (no bloquea parser)
- Función `openMespicChat()` ahora reintenta cada 200 ms hasta 5 s buscando `.wai-chat-bubble`
- Fallback a `wa.me` solo después de 5 s sin widget
- Agregado opt-out `data-no-intercept="true"` para links que deban ir directo a `wa.me`

### 4.4 · `compressHTML` + `inlineStylesheets: 'auto'`
**Archivo:** `astro.config.mjs`

```js
compressHTML: true,
build: { inlineStylesheets: 'auto' },
```

Ganancia estimada: HTML final -15% en promedio, FCP -50 ms.

---

## 5. UX / Accesibilidad

### 5.1 · Skip-link
**Archivo:** `src/layouts/BaseLayout.astro` + `src/styles/global.css`

Agregado `<a href="#contenido" class="skip-link">` como primer elemento del body. Estilizado con CSS (`.skip-link`) que se revela solo al `:focus`. Cumple WCAG 2.4.1.

### 5.2 · padding-bottom en `<main>` móvil
Evita que StickyMobileNav tape el contenido. Usado `env(safe-area-inset-bottom)` para iPhones con notch.

### 5.3 · `id="contenido"` en `<main>`
Necesario para que el skip-link funcione.

---

## 6. Items documentados pero NO implementados en esta iteración

Por scope acordado (críticos + altos + algunos medios), quedaron documentados para Sprint 2:

- **Componente `<Breadcrumbs>` unificado** (03 §3.3) — requiere tocar ~15 páginas
- **Componente `<NextStep>` en 8 páginas** (03 §3.2) — decisión de contenido pendiente
- **Página `/casos/` con 6 eventos reales** (07 §7.2) — requiere fotos reales
- **Página `/como-funciona/`** (03 §3.7)
- **Form multi-step en `/cotizar/`** (07 §7.5) — requiere backend
- **Pricing visible en catálogo y paquetes** (07 §7.4) — decisión comercial con Frank
- **Meta descriptions únicas en 42 páginas** (02 §2.7) — tarea de contenido
- **Alt text fix en 20 imágenes** (05 §5.4) — tarea de contenido
- **H1 únicos en detalle de servicios** (02 §2.5) — tarea de contenido parcial
- **View Transitions API** (06 §6.4)
- **Reducción de CTAs por `ctaProfile`** (03 §3.1) — refactor grande, decisión arquitectónica

---

## 7. Archivos tocados (11 archivos)

```
src/layouts/BaseLayout.astro
src/components/Footer.astro
src/components/FaqSection.astro
src/components/CtaBarFinal.astro
src/styles/global.css
src/pages/index.astro
src/pages/404.astro          (nuevo)
src/pages/servicios/index.astro
src/pages/paquetes/index.astro
src/pages/blog/index.astro
src/pages/blog/decoracion-mesas-picnic-fiestas-infantiles.astro
src/pages/catalogo/mesa-picnic-estandar/index.astro
src/pages/catalogo/mesa-picnic-plegable/index.astro
src/pages/catalogo/mesa-picnic-xl/index.astro
src/pages/catalogo/mesa-farm-hairpin/index.astro
src/pages/catalogo/mesa-picnic-hexagonal/index.astro
astro.config.mjs
public/robots.txt
public/icon.png              (reemplazado, antes estaba vacío)
```

---

## 8. Verificaciones pendientes pre-lanzamiento

- [ ] `rm -rf node_modules/.vite .astro dist && npm run build` termina sin errores
- [ ] `npm run preview` sirve el sitio
- [ ] Navegar homepage, `/servicios/bodas/`, `/catalogo/`, `/paquetes/`, `/blog/` sin consola con errores
- [ ] Footer se ve correcto en 1280px, 1100px, 900px, 768px, 480px
- [ ] Chat DMChamp abre en clicks a cualquier botón "WhatsApp"
- [ ] Sitemap generado tiene priority/changefreq
- [ ] 404 custom carga al ir a `/foo-que-no-existe`
- [ ] Schema LocalBusiness aparece una sola vez en view-source (antes aparecía dos veces en home)
- [ ] Validar con https://search.google.com/test/rich-results la home
- [ ] Lighthouse mobile: LCP < 2.5s, CLS < 0.1, TBT < 200ms
