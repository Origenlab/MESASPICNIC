# 🗄️ Catálogo Expandido — Pipeline de Datos y Scraping

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Catálogo de Productos]] | [[SEO y Palabras Clave]]

**Fecha de implementación:** 2026-04-18
**Estado:** ✅ Implementado — 14 productos, 44 imágenes, pipeline documentado

---

## Resumen Ejecutivo

El catálogo de MESPIC pasó de 6 a **14 productos** mediante un pipeline profesional de:
1. Scraping estructurado (Mercado Libre MX + Amazon MX)
2. Investigación de mercado y análisis de segmentos
3. Generación de contenido premium humanizado
4. Optimización de imágenes (WebP, 44 archivos)
5. Implementación en Astro con patrón homologado

---

## Fuentes de Investigación de Mercado

### Mercado Libre México
- **URL scrapeada:** `https://listado.mercadolibre.com.mx/mesas-picnic-madera`
- **Herramienta:** Scrapling v0.4.7 (Playwright fetcher)
- **Productos identificados:** 10 productos relevantes
- **Categorías principales:** mesas plegables, sets completos, mesas hexagonales, materiales (pino, nogal, parota)

### Amazon México
- **URL scrapeada:** `https://www.amazon.com.mx/s?k=mesa+picnic+madera+eventos`
- **Herramienta:** Scrapling v0.4.7 (Playwright fetcher)
- **Productos identificados:** 33 productos analizados
- **Marcas relevantes:** CUORY, LIFETIME, VEVOR, Costzon
- **Segmentos cubiertos:** plegable portátil, mesa alta, mesa de vino, sets infantiles

### Conclusiones del Mercado
- El segmento de **mesas altas cocktail** tiene alta demanda corporativa sin oferta local de madera
- Las **mesas hexagonales** son nicho premium con demanda de boda boho no cubierta en México
- Las **bancas individuales** complementarias tienen demanda en festivales y graduaciones
- La **madera de parota** se perfila como diferenciador VIP vs competencia de pino estándar
- El **Set Lounge** es un vacío en el mercado de renta de madera en CDMX

---

## Productos Implementados — Catálogo Expandido

### Modelos Originales (6)
| # | Slug | Modelo | Medidas | Capacidad |
|---|------|---------|---------|-----------|
| 1 | `mesa-picnic-estandar` | Mesa Estándar | 1.80 × 1.50 m | 6 pax |
| 2 | `mesa-picnic-grande` | Mesa Grande | 2.40 × 1.50 m | 10-12 pax |
| 3 | `mesa-picnic-infantil` | Mesa Infantil | 1.20 × 1.00 m | 8-10 niños |
| 4 | `mesa-picnic-premium` | Mesa Premium | 1.80 × 1.50 m | 6 pax |
| 5 | `mesa-picnic-rustica` | Mesa Rústica | 1.80 × 1.50 m | 6 pax |
| 6 | `set-picnic-completo` | Set Completo | Mesa + decoración | 2-6 pax |

### Modelos Nuevos (8) — Implementados 2026-04-18
| # | Slug | Modelo | Medidas | Capacidad | Diferenciador |
|---|------|---------|---------|-----------|---------------|
| 7 | `mesa-picnic-hexagonal` | Mesa Hexagonal | Ø 1.80 m | 6-8 pax | Forma exclusiva boho |
| 8 | `mesa-picnic-plegable` | Mesa Plegable | 1.50 × 1.20 m | 4-6 pax | Portátil, 12cm plegada |
| 9 | `mesa-alta-cocktail` | Mesa Alta Cocktail | Ø 70 cm × 110 cm | 4-5 de pie | Standing events |
| 10 | `banca-picnic-individual` | Banca Individual | 1.80 × 0.35 m | 3 pax | Complemento versatil |
| 11 | `mesa-picnic-xl` | Mesa XL | 3.00 × 1.50 m | 14-16 pax | La más grande |
| 12 | `set-lounge-exterior` | Set Lounge | Mesa baja + 4 módulos | 4-6 pax | Zona VIP premium |
| 13 | `mesa-picnic-parota` | Mesa Parota | 2.00 × 0.90 m | 6-8 pax | Parota maciza, VIP |
| 14 | `set-picnic-infantil-tematico` | Set Infantil Temático | 1.00 × 0.70 m | 6-8 niños | 5 colores, atóxico |

---

## Pipeline de Imágenes

### Estructura de Carpetas
```
public/
└── img/
    ├── [imágenes generales del sitio]    ← imágenes originales
    └── catalogo/                          ← imágenes del catálogo expandido
        ├── mesa-picnic-hexagonal-*
        ├── mesa-picnic-plegable-*
        ├── mesa-alta-cocktail-*
        ├── banca-picnic-madera-pino-*
        ├── mesa-picnic-xl-*
        ├── set-lounge-exterior-*
        ├── mesa-picnic-parota-*
        └── set-picnic-infantil-tematico-*
```

### Convención de Nombres SEO
```
{producto-slug}-{descripcion-seo}-{numero}.webp
```

**Ejemplos:**
- `mesa-picnic-hexagonal-madera-6-personas-jardin-01.webp`
- `mesa-picnic-xl-extra-larga-3m-16-personas-02.webp`
- `set-picnic-infantil-tematico-colores-04.webp`

### Especificaciones Técnicas de Imágenes
- **Formato:** WebP (conversión automática con Pillow)
- **Calidad:** 88% (balance visual/peso)
- **Ancho máximo:** 1,400 px
- **Método compresión:** 6 (máxima calidad WebP)
- **Archivos generados:** 44 imágenes (5-6 por producto)
- **Tamaño típico:** 46-339 KB

### Script del Pipeline
```
/tmp/create_catalog_images.py
```
Mapeo: imágenes de producción existentes → copia renombrada en `/img/catalogo/`

---

## Patrón de Página de Producto (Template Homologado)

Cada página del catálogo sigue este patrón exacto:

```astro
// Imports
BaseLayout · Breadcrumbs · Hero · CtaBar · SectionHeader
FeatureCard · ServiceCard · ProductGallery · FaqSection
CtaBarFinal · WaBubble

// Secciones (en orden)
1. BaseLayout (title, description, ogImage)
2. Breadcrumbs — Inicio > Catálogo > [Producto]
3. Hero dark={true}, ctaPrimary={null}, ctaSecondary={null}
   - badge, title, description
   - seoParagraph1, seoParagraph2
4. CtaBar
5. Section galería — SectionHeader + ProductGallery
   - 6 imágenes de galería
   - 5 productos relacionados en sidebar
6. Section especificaciones — SectionHeader con stats + spec-grid
   - spec-card con ficha técnica (9 ítems)
   - spec-features con 4 FeatureCards (2×2)
7. Section usos — SectionHeader con stats + grid-4
   - 4 ServiceCards con href a servicios
8. Section FAQ — SectionHeader + FaqSection
   - 6 preguntas con respuestas detalladas
9. CtaBarFinal (headline, subtext, phone, whatsapp, waMessage)
10. WaBubble
11. Fragment slot="head" — Schema.org Product + FAQPage JSON-LD

// CSS local (al final del archivo)
.spec-grid · .spec-card · .spec-list · .spec-features
.grid-4 · .blog-cards · .blog-card (donde aplique)
```

---

## SEO — Taxonomía y Keywords

### Keywords Principales por Producto Nuevo

| Producto | Keyword Principal | Keywords Secundarias |
|----------|------------------|----------------------|
| Mesa Hexagonal | renta mesa hexagonal CDMX | mesa picnic hexagonal bodas, mesa hexagonal madera eventos |
| Mesa Plegable | renta mesa picnic plegable | mesa plegable madera eventos CDMX, mesa portátil renta |
| Mesa Cocktail | renta mesa alta eventos | mesa cocktail madera CDMX, mesa standing eventos corporativos |
| Banca Individual | renta bancas madera eventos | banca picnic individual CDMX, bancas de madera renta |
| Mesa XL | renta mesa picnic grande 3 metros | mesa larga eventos masivos, mesa 14 personas renta |
| Set Lounge | renta lounge exterior eventos | zona VIP madera renta CDMX, lounge exterior bodas |
| Mesa Parota | renta mesa parota madera | mesa parota eventos VIP CDMX, madera parota renta |
| Set Infantil | renta mesa infantil tematica | set infantil cumpleaños temático CDMX, mesa niños renta |

### Schema.org Implementado
- **Tipo:** `Product` en todas las páginas de producto
- **Campos:** name, description, brand, category, offers (InStock, MXN)
- **FAQPage:** en todas las páginas (6 preguntas cada una)
- **LocalBusiness:** en el offer.seller con CDMX + Edomex como areaServed
- **Breadcrumbs:** BreadcrumbList en todas las páginas (via componente)

---

## Interlinking Interno

### Estrategia de Navegación entre Productos
- **Sidebar de ProductGallery:** 5 productos relacionados por cada página
- **ServiceCards de usos:** 4 links a secciones de servicios
- **Hero Description:** menciona productos complementarios
- **Blog relacionado:** 3 artículos existentes del blog por página

### Mapa de Interlinking
```
Mesa Estándar ←→ Mesa Grande ←→ Mesa XL
Mesa Premium ←→ Mesa Parota ←→ Set Lounge
Mesa Hexagonal ←→ Mesa Rústica ←→ Set Completo
Mesa Infantil ←→ Set Infantil Temático
Mesa Plegable ←→ Banca Individual ←→ Mesa Cocktail
```

---

## Checklist SEO — Validación por Producto

Para cada producto nuevo, verificar:

- [x] Title tag < 70 caracteres con keyword principal y "MESPIC CDMX"
- [x] Meta description 150-160 caracteres con keyword y CTA
- [x] OG Image apuntando a imagen específica del producto
- [x] Breadcrumbs con BreadcrumbList schema.org
- [x] H1 único con keyword principal
- [x] H2 en secciones internas
- [x] Schema.org Product con availability InStock
- [x] Schema.org FAQPage con 6 preguntas
- [x] Alt text descriptivos en todas las imágenes
- [x] Internal links a servicios relacionados
- [x] Internal links a otros productos del catálogo
- [x] seoParagraph1 y seoParagraph2 con keywords geográficas (CDMX, Edomex)

---

## Checklist QA — Antes de Deploy

- [ ] Compilar con `npm run build` sin errores
- [ ] Verificar que todas las imágenes en `/img/catalogo/` se sirven correctamente
- [ ] Confirmar que los 8 nuevos productos aparecen en `/catalogo/`
- [ ] Verificar que los links de ProductGallery sidebar apuntan a URLs válidas
- [ ] Confirmar que los ServiceCards apuntan a rutas de servicios existentes
- [ ] Verificar schema.org con Google Rich Results Test
- [ ] Revisar mobile en Chrome DevTools para cada página nueva
- [ ] Confirmar que CtaBarFinal tiene el waMessage correcto por producto

---

## Próximas Ampliaciones Recomendadas

1. **Mesa Rectangular de Madera de Cedro** — nicho rústico norteño
2. **Mesa Picnic con Agujero para Sombrilla** — uso en exteriores sin toldo
3. **Set de Candelabros de Madera** — complemento decorativo
4. **Tarimas de Madera** — para sets fotográficos y escenarios
5. **Sillas Tiffany Blancas** — complemento para eventos formales
6. **Mesas de Parota Ovaladas** — variante elegante del modelo parota

---

#mespic #catalogo #pipeline #scraping #seo #productos #implementado
