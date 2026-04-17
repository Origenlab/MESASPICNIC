# 📦 Página — Catálogo

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Catálogo de Productos]] | [[Paquetes]]

**URL base:** `https://mesaspicnic.com/catalogo/`
**Estado:** ✅ Implementado — L2 + L3 completo (7 páginas)

---

## Estructura de Páginas

```
/catalogo/                          → Index — vista general 6 modelos
/catalogo/mesa-picnic-estandar/     → Mesa Estándar · 1.80m · 6 pax
/catalogo/mesa-picnic-grande/       → Mesa Grande · 2.40m · 10–12 pax
/catalogo/mesa-picnic-infantil/     → Mesa Infantil · 1.20m · 8–10 niños
/catalogo/mesa-picnic-premium/      → Mesa Premium · acabado lujo · 6 pax
/catalogo/set-picnic-completo/      → Set Completo · mesa + decoración
/catalogo/mesa-picnic-rustica/      → Mesa Rústica · boho & vintage · 6 pax
```

---

## Secciones del Index `/catalogo/`

1. **Hero** (dark) — "Catálogo de Mesas Picnic de Pino Natural" + métricas (+120 piezas, 6 modelos)
2. **CtaBar**
3. **Grid 3 cols** — 6 ServiceCards, una por modelo
4. **Tabla comparativa de specs** — medidas, capacidad, acabado, uso, link
5. **FeatureCards 4 cols** — material, lijado, barniz, inspección
6. **GallerySection** — 8 imágenes representativas
7. **FaqSection** — 6 preguntas sobre el catálogo
8. **CtaBarFinal** + **WaBubble**
9. **Schema.org** — `ItemList` (6 productos) + `FAQPage`

---

## Secciones por Página de Producto (patrón uniforme)

| Sección | Componente |
|---|---|
| Hero dark + métricas | `Hero` |
| CtaBar | `CtaBar` |
| Galería + sidebar | `ProductGallery` (6 img + 5 relacionados) |
| Ficha técnica + features | `.spec-grid` inline + `FeatureCard` 2×2 |
| Usos recomendados | `ServiceCard` × 4 en `.grid-4` |
| FAQ de producto | `FaqSection` (5–6 preguntas) |
| CTA Final | `CtaBarFinal` + `WaBubble` |
| Datos estructurados | Schema `Product` (MXN, InStock) |

---

## Componentes utilizados (todos pre-existentes y autorizados)

`BaseLayout` · `Breadcrumbs` · `Hero` · `CtaBar` · `SectionHeader`
`ServiceCard` · `FeatureCard` · `ProductGallery` · `GallerySection`
`FaqSection` · `CtaBarFinal` · `WaBubble`

CSS local nuevo en cada archivo: `.spec-grid`, `.spec-card`, `.spec-list`, `.spec-table`, `.grid-3`

---

## SEO Titles y Meta Descriptions

| URL | Title |
|---|---|
| `/catalogo/` | Catálogo de Mesas Picnic para Renta — 6 Modelos · MESPIC CDMX |
| `/catalogo/mesa-picnic-estandar/` | Mesa Picnic Estándar — 1.80m · 6 Personas · MESPIC |
| `/catalogo/mesa-picnic-grande/` | Mesa Picnic Grande — 2.40m · 10-12 Personas · MESPIC |
| `/catalogo/mesa-picnic-infantil/` | Mesa Picnic Infantil — niños 3-10 años · MESPIC |
| `/catalogo/mesa-picnic-premium/` | Mesa Picnic Premium — Bodas de Lujo y VIP · MESPIC |
| `/catalogo/set-picnic-completo/` | Set Picnic Completo — Mesa + Decoración · MESPIC |
| `/catalogo/mesa-picnic-rustica/` | Mesa Picnic Rústica — Boho y Vintage · MESPIC |

---

## Interlinks con otras secciones del sitio

- Catálogo → `/servicios/` (usos recomendados en cada producto)
- Catálogo → `/paquetes/` (desde Hero)
- Catálogo → `/cotizar/` (CTA primario en todos los niveles)
- `/servicios/bodas/` → `/catalogo/` (ctaPrimary en Hero de bodas)
- `/servicios/*/` → productos del catálogo en sidebar de `ProductGallery`

---

#mespic #catalogo #paginas #l2 #l3 #implementado
