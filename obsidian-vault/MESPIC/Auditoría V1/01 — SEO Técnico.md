# 01 — SEO Técnico

**14 hallazgos · 3 críticos · 5 altos · 4 medios · 2 bajos**

---

## 1.1 — Sobreoptimización de keyword "renta de mesas picnic" 🔴

**Hallazgo:** La frase exacta "renta de mesas picnic" aparece 200+ veces en el sitio. En `/servicios/`, `/servicios/bodas/` y `/servicios/eventos-corporativos/` aparece 8–12 veces por página. En el footer aparece 5 veces entre tagline, stats, nav. En `SEO-KEYWORDS.md` ya existe la regla "densidad keyword 1-2% natural, sin stuffing" — se está incumpliendo.

| Archivo | Conteo de "renta de mesas picnic" |
|---|---|
| `src/pages/index.astro` | 7 |
| `src/pages/servicios/index.astro` | 10 |
| `src/pages/servicios/bodas/index.astro` | 12 |
| `src/pages/servicios/eventos-corporativos/index.astro` | 11 |
| `src/pages/catalogo/index.astro` | 9 |
| `src/components/Footer.astro` | 5 (tagline + nav) |

**Impacto SEO:** Alto (riesgo de penalización algorítmica por keyword stuffing, peor CTR en SERP).
**Impacto UX:** Medio (texto se siente robótico / repetitivo al leer).
**Impacto comercial:** Alto (baja credibilidad = menor conversión).

**Recomendación técnica:**

- Cap duro: máximo 2 instancias de la frase exacta por página.
- Sustituir resto por LSI (variantes semánticas):
  - "mobiliario de madera para eventos"
  - "bancas picnic de pino"
  - "mesas de pino natural"
  - "alquiler de mobiliario"
  - "mesas para eventos al aire libre"
  - "bancas de madera premium"
- Revisar que cada página use 3–4 variantes distintas.
- Mantener la keyword primaria en: title, H1, meta description, primer párrafo, y una ocurrencia adicional en H2. El resto debe ser sinónimos.

**Propuesta de mejora (ejemplo en `src/pages/servicios/bodas/index.astro`):**

```
Antes: "Renta de mesas picnic para bodas en CDMX con entrega y montaje. Nuestras mesas picnic para bodas son ideales para bodas al aire libre..."

Después: "Mesas picnic para bodas en CDMX con entrega y montaje incluidos. Estas bancas de pino macizo se adaptan a bodas en jardines, haciendas y terrazas, con acabado artesanal lijado a mano..."
```

---

## 1.2 — Meta description y title duplicados en hubs 🟠

**Hallazgo:** Varias subpáginas de servicio heredan el meta description por defecto del `BaseLayout.astro` línea 20 (`"Renta de mesas picnic para eventos en CDMX..."`) en lugar de tener su propio description único.

**Impacto SEO:** Alto (Google deduplica SERPs con el mismo snippet, solo indexa 1).
**Impacto UX:** Bajo.
**Impacto comercial:** Medio.

**Recomendación:**

- Auditar las 12 páginas de servicio (bodas/boho, bodas/clasica, bodas/intima, bodas/rustica, eventos-corporativos/activaciones, eventos-corporativos/comidas, eventos-corporativos/conferencias, eventos-corporativos/team-building, festivales, fiestas-infantiles, fiestas-tematicas, reuniones-familiares, sesiones-fotograficas, picnic-romantico) — asegurar que cada una tenga `description` propio.
- Longitud 140–160 caracteres, sin keyword stuffing.
- Abrir con beneficio concreto + cerrar con CTA suave.

---

## 1.3 — Title >60 caracteres en blog posts 🟡

**Hallazgo:** Varios titles del blog rebasan los 60 caracteres y Google los trunca en SERP:

- `/blog/renta-mesas-picnic-bodas-cdmx`: 65 chars
- `/blog/cuanto-cuesta-rentar-mesas-picnic-cdmx`: 60 chars (borderline)
- `/blog/mesas-picnic-eventos-corporativos-interlomas-huixquilucan`: ~70 chars probable

**Impacto SEO:** Medio (truncamiento = menor CTR).
**Impacto UX:** Bajo.
**Impacto comercial:** Bajo.

**Recomendación:** Revisar cada post; mantener keyword al frente y cortar sufijos. Formato ideal: `Keyword Primaria en CDMX | MESPIC` (max 60 chars).

---

## 1.4 — `robots.txt` demasiado permisivo 🟡

**Hallazgo:** Estado actual:

```
User-agent: *
Allow: /
Disallow: /_astro/
Sitemap: https://mesaspicnic.com/sitemap-index.xml
```

No bloquea:

- `/gracias` (si se crea página post-submit) — debería ser `Disallow`.
- Parámetros de búsqueda / URLs con query.
- Rutas de desarrollo o test que puedan existir.

**Impacto SEO:** Medio.
**Recomendación:**

```
User-agent: *
Allow: /
Disallow: /_astro/
Disallow: /api/
Disallow: /gracias
Disallow: /*?q=*
Disallow: /*?search=*

# Bloquea bots agresivos/scraping
User-agent: AhrefsBot
Crawl-delay: 10
User-agent: SemrushBot
Crawl-delay: 10

Sitemap: https://mesaspicnic.com/sitemap-index.xml
```

---

## 1.5 — Schema LocalBusiness duplicado con contradicciones 🟠

**Hallazgo:** `BaseLayout.astro` emite un schema LocalBusiness (líneas 33-70) y `src/pages/index.astro` emite OTRO schema LocalBusiness (líneas 353-378) con datos ligeramente distintos:

- BaseLayout no tiene `streetAddress` ni `postalCode`.
- Index sí tiene `streetAddress: "Calle Gob. García Conde 34, Col. San Miguel Chapultepec I Secc"` y `aggregateRating` (4.9/500).
- BaseLayout tiene `sameAs` (Facebook, Instagram); index no.
- BaseLayout usa `@type: ["LocalBusiness", "EventVenue"]`; index solo `LocalBusiness`.

**Impacto SEO:** Alto (Google puede ignorar ambos schemas por inconsistencia).
**Impacto comercial:** Alto (pierde las estrellas en SERP).

**Recomendación técnica:**

Consolidar en un único schema LocalBusiness en `BaseLayout.astro` con TODOS los campos:

```javascript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  "@id": "https://mesaspicnic.com/#organization",
  "name": "MESPIC — Renta de Mesas Picnic",
  "url": siteUrl,
  "telephone": "+52 55 6432 8954",
  "email": "hola@mesaspicnic.com",
  "description": "Renta de mesas picnic...",
  "priceRange": "$$",
  "image": `${siteUrl}/img/mesa-picnic-boda-elegante-decoracion.avif`,
  "logo": `${siteUrl}/img/mespic.webp`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Gob. García Conde 34",
    "addressLocality": "Miguel Hidalgo",
    "addressRegion": "CDMX",
    "postalCode": "11850",
    "addressCountry": "MX"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.4075", "longitude": "-99.1950" },
  "areaServed": [...],
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"  // usar valor real, no 500 (eso son eventos, no reviews)
  },
  "sameAs": [...]
};
```

Quitar el schema LocalBusiness de `index.astro`. Mantener en index solo FAQPage + Service.

⚠️ **Nota:** Google diferencia `ratingCount` (todos los ratings) de `reviewCount` (reseñas escritas). Si no se tienen 500 reseñas reales, usar un número conservador defendible (p. ej. el número real de Google Reviews).

---

## 1.6 — Falta Schema BreadcrumbList en páginas profundas 🟡

**Hallazgo:** `Breadcrumbs.astro` genera JSON-LD de BreadcrumbList, pero no todas las páginas L3/L4 (servicios/bodas/boho, eventos-corporativos/team-building, etc.) lo usan.

**Impacto SEO:** Medio (Google muestra breadcrumb en SERP para SEO local).

**Recomendación:** Auditar todas las páginas L2–L4 e incluir `<Breadcrumbs>` con los datos correctos.

---

## 1.7 — Canonical hardcodeado en Breadcrumbs.astro línea 22 🟢

**Hallazgo:**

```astro
// src/components/Breadcrumbs.astro:22
const siteUrl = "https://mesaspicnic.com";
```

Debería usar `Astro.site` para respetar la config de `astro.config.mjs`.

**Impacto:** Bajo (hoy coincide, pero si cambia dominio se rompe).

**Fix:**
```astro
const siteUrl = Astro.site?.toString().replace(/\/$/, '') ?? 'https://mesaspicnic.com';
```

---

## 1.8 — Sitemap sin lastmod 🟡

**Hallazgo:** `sitemap-0.xml` solo emite `<loc>` para cada URL. No incluye `<lastmod>`, `<changefreq>` ni `<priority>`, aunque `astro.config.mjs` tiene `serialize()` que sí los agrega — pero el archivo build no los refleja (probablemente el build del 2026-04-17 20:04 no usó el serialize actualizado).

**Impacto SEO:** Medio (Google usa lastmod para priorizar crawl).

**Recomendación:** Rebuild el sitio (`npm run build`) para regenerar sitemap-0.xml con los metadatos de serialize. Verificar que aparezcan `<priority>` y `<changefreq>`.

---

## 1.9 — H1 repetido entre páginas y títulos H1 con stuffing 🟠

**Hallazgo:** Varios H1 empiezan idéntico:

- `/`: "Renta de Mesas Picnic para Eventos en CDMX"
- `/servicios/`: "Servicios de Renta de Mesas Picnic para Todo Tipo de Evento"
- `/servicios/bodas/`: "Renta de Mesas Picnic para Bodas en CDMX y Edomex"
- `/servicios/eventos-corporativos/`: "Renta de Mesas Picnic para Eventos Corporativos en CDMX"
- `/catalogo/`: usa variante similar.

Google no necesita "Renta de Mesas Picnic" al inicio de cada H1. El dominio `mesaspicnic.com` ya es exact-match. Hay que variar.

**Impacto SEO:** Alto (similitud H1 = señal de bajo esfuerzo editorial).
**Impacto UX:** Medio.

**Propuesta:**

| Página | H1 actual | H1 propuesto |
|---|---|---|
| Home | Renta de Mesas Picnic para Eventos en CDMX | Mesas picnic para eventos en CDMX y Estado de México |
| Servicios | Servicios de Renta de Mesas Picnic para Todo Tipo de Evento | Mobiliario para cada tipo de evento |
| Bodas | Renta de Mesas Picnic para Bodas en CDMX y Edomex | Bancas de madera para bodas al aire libre |
| Corporativos | Renta de Mesas Picnic para Eventos Corporativos en CDMX | Mobiliario para eventos empresariales |
| Infantiles | — | Mesas seguras para fiestas infantiles |
| Catálogo | — | Nuestros modelos: 20 piezas de madera a escoger |

Mantiene foco semántico sin repetir la keyword primaria verbatim.

---

## 1.10 — Internal linking débil entre servicios y catálogo 🟠

**Hallazgo:** `src/pages/servicios/bodas/index.astro` solo enlaza a 2 páginas internas (paquetes/premium, servicios/picnic-romantico). Debería enlazar cruzado a:

- Catálogo de la Mesa Picnic Premium y Rústica (relevantes para bodas).
- Blog post `/blog/renta-mesas-picnic-bodas-cdmx/`.
- Paquetes básico, estándar y premium (con anchor descriptivo).
- Subcategorías: `/servicios/bodas/boho/`, `/clasica/`, `/intima/`, `/rustica/`.

**Impacto SEO:** Alto (el internal linking distribuye PageRank; el hub bodas debe ser el centro).

**Recomendación:** Cada hub (bodas, corporativos, etc.) debe tener mínimo 8 links internos a:

- 2–3 subcategorías propias
- 2–3 productos del catálogo relacionados
- 1–2 paquetes relacionados
- 1 blog post relevante
- 1 link lateral a otro servicio complementario

Texto de anchor variado (no "aquí", no "ver más"). Preferir: "mesa picnic premium para bodas de alto perfil", "paquete para 60 invitados", "guía de decoración rústica".

---

## 1.11 — Alt text con keyword stuffing 🟡

**Hallazgo:** Varias imágenes tienen alt tipo `"Renta de mesas picnic para bodas"` o `"alt={title}"` donde `title` ya es la keyword. Esto es alt stuffing.

Ejemplos detectados en `src/pages/index.astro` líneas 17-25: los alt son descriptivos y correctos (✓ bien hecho). Pero en `src/components/ServiceCard.astro` línea 30: `alt={title}` reutiliza el título del card, que puede ser keyword-stuffed.

**Recomendación:**

- Alt debe describir la **imagen**, no la keyword:
  - ✗ "Renta de mesas picnic para bodas CDMX"
  - ✓ "Mesa larga de pino natural con centros de flores blancas en jardín para boda"
- Fórmula: `qué objeto + cómo está decorado + contexto` (sin keyword primaria ni "renta de...").

---

## 1.12 — FAQ Schema con respuestas cortadas 🟢

**Hallazgo:** En `src/pages/index.astro` líneas 380-388 el FAQPage schema tiene respuestas resumidas (1-2 frases), pero el FaqSection HTML tiene respuestas más completas. Google puede preferir las largas.

**Recomendación:** Hacer que las `text` del FAQ schema coincidan con las respuestas visibles del acordeón (150–300 chars cada una).

---

## 1.13 — Indexabilidad: `404.html` en raíz indexable 🟢

**Hallazgo:** Existe `404.html` en raíz del build y también `aviso-privacidad.html`, `servicios.html`, `nosotros.html`, `blog.html`, `contacto.html`. Estos archivos son legacy (de un build anterior en HTML plano). No están en el sitemap pero siguen siendo servibles por el CDN.

**Impacto:** Bajo hoy, pero podría causar indexación duplicada si Google los encuentra por links externos o rastreo antiguo.

**Recomendación:** Borrar los .html legacy en raíz al preparar el deploy de producción. El build moderno de Astro genera `/pagina/index.html` en subcarpetas, no en raíz.

---

## 1.14 — `hreflang` ausente 🟢

**Hallazgo:** El sitio solo atiende México (es-MX), pero no emite `hreflang`. Si en el futuro se expande a LATAM o a usuarios bilingües, hacerlo desde ahora evita retrabajos.

**Recomendación (opcional v2):**

```html
<link rel="alternate" hreflang="es-MX" href="https://mesaspicnic.com{pathname}" />
<link rel="alternate" hreflang="x-default" href="https://mesaspicnic.com{pathname}" />
```

---

## Resumen SEO Técnico

| # | Hallazgo | Prioridad | Esfuerzo |
|---|----------|-----------|----------|
| 1.1 | Sobreoptimización "renta de mesas picnic" | 🔴 | Alto |
| 1.2 | Meta description duplicados | 🟠 | Medio |
| 1.5 | Schema LocalBusiness duplicado | 🟠 | Bajo |
| 1.9 | H1 repetidos entre páginas | 🟠 | Medio |
| 1.10 | Internal linking débil | 🟠 | Medio |
| 1.3 | Title >60 chars en blog | 🟡 | Bajo |
| 1.4 | robots.txt permisivo | 🟡 | Bajo |
| 1.6 | Breadcrumbs faltantes L3/L4 | 🟡 | Medio |
| 1.8 | Sitemap sin lastmod | 🟡 | Muy bajo (rebuild) |
| 1.11 | Alt text stuffed | 🟡 | Medio |
| 1.7 | URL hardcodeada en Breadcrumbs | 🟢 | Muy bajo |
| 1.12 | FAQ schema texto corto | 🟢 | Bajo |
| 1.13 | .html legacy en raíz | 🟢 | Muy bajo |
| 1.14 | hreflang ausente | 🟢 | Bajo |
