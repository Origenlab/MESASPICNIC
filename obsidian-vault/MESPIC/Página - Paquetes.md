# 📦 Página — Paquetes

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Paquetes]] | [[Páginas Pendientes]]

Documentación técnica y de contenido de la sección `/paquetes/` del sitio MESPIC.

---

## Estructura de URLs

| Página | URL | Archivo fuente |
|---|---|---|
| Índice Paquetes | `/paquetes/` | `src/pages/paquetes/index.astro` |
| Paquete Básico | `/paquetes/basico/` | `src/pages/paquetes/basico/index.astro` |
| Paquete Estándar | `/paquetes/estandar/` | `src/pages/paquetes/estandar/index.astro` |
| Paquete Premium | `/paquetes/premium/` | `src/pages/paquetes/premium/index.astro` |

---

## /paquetes/ — Índice (L2)

### SEO
- **Title**: `Paquetes de Renta de Mesas Picnic — 24, 36 y 60 Personas | MESPIC CDMX`
- **Description**: `3 paquetes de renta de mesas picnic para eventos en CDMX y Edomex: Básico (24 personas), Estándar (36 personas) y Premium (60 personas). Precio final sin extras. Traslado, montaje y recolección incluidos.`
- **Canonical**: `https://mesaspicnic.com/paquetes/`
- **Schema**: `ItemList` (3 paquetes) + `FAQPage`

### Estructura de Componentes
1. `<Hero dark={true}>` — Badge "Paquetes Completos" · Título H1 · Descripción · 2 CTAs · SEO paragraph col2
2. `<CtaBar>` — Banner de urgencia
3. `<SectionHeader>` — "Elige tu paquete ideal"
4. Grid `.grid-3` — 3 `<ServiceCard>` (Básico · Estándar · Premium)
5. `<SectionHeader>` — "Comparativa completa"
6. `.pkg-table` — Tabla comparativa 4 filas: Mesas, Personas, Área, Precio
7. `<SectionHeader>` — "¿Qué incluye cada paquete?"
8. Grid `.grid-4` — 4 `<FeatureCard>` (Traslado · Montaje · Uso libre · Recolección)
9. `<SectionHeader>` — "¿Cuántas mesas necesito?"
10. Grid `.grid-4` — 4 `<FeatureCard>` (calculadora por invitados)
11. `<GallerySection>` — Montajes reales
12. `<FaqSection>` — 6 preguntas frecuentes sobre paquetes
13. `<CtaBarFinal>` — CTA de cierre

### Interlinking
- Cada ServiceCard enlaza a su página L3 (`/paquetes/basico/`, `/paquetes/estandar/`, `/paquetes/premium/`)
- Breadcrumbs: Home → Paquetes

---

## /paquetes/basico/ — Paquete Básico (L3)

### Datos del Producto
- **4 mesas picnic** + 8 bancas (4 mesas × 2 bancas)
- **Capacidad**: 24 personas (4–6 por mesa)
- **Área sugerida**: ~40 m²
- **Ideal para**: Cumpleaños, reuniones familiares, fiestas infantiles, brunch

### SEO
- **Title**: `Paquete Básico — 4 Mesas Picnic para 24 Personas | MESPIC CDMX`
- **Description**: `Renta el Paquete Básico: 4 mesas picnic para 24 personas con traslado, montaje y recolección incluidos. Ideal para fiestas en jardín, terrazas y eventos familiares en CDMX.`
- **Schema**: `Product`

### Estructura de Componentes
1. Hero(dark) + CtaBar
2. ProductGallery (6 imgs + 5 sidebar)
3. `.spec-grid` — Sticky `.spec-card` (320px) con specs + 2×2 FeatureCards
4. Grid `.grid-4` — 4 ServiceCards con enlaces a paquetes relacionados
5. FaqSection (6 preguntas) + CtaBarFinal + WaBubble

---

## /paquetes/estandar/ — Paquete Estándar (L3)

### Datos del Producto
- **6 mesas picnic** + 12 bancas
- **Capacidad**: 36 personas
- **Área sugerida**: ~60 m²
- **Badge**: "El más solicitado" (diferenciador visual)
- **Ideal para**: Bodas íntimas, XV años, graduaciones, eventos corporativos medianos

### SEO
- **Title**: `Paquete Estándar — 6 Mesas Picnic para 36 Personas | MESPIC CDMX`
- **Description**: `El paquete más solicitado: 6 mesas picnic para 36 personas con traslado, montaje y recolección en CDMX y Edomex. Perfecto para bodas, XV años y graduaciones.`
- **Schema**: `Product`

### Notas de Diseño
- Badge visual "El más solicitado" en el Hero y la spec-card
- Spec-card usa `--c-primary` (verde) como diferenciador de marca estándar

---

## /paquetes/premium/ — Paquete Premium (L3)

### Datos del Producto
- **10 mesas picnic** + 20 bancas (composición flexible según modelos)
- **Capacidad**: 60 personas
- **Área sugerida**: ~90 m²
- **Diferenciador**: Composición mixta de modelos (estándar + grande + infantil según necesidad)
- **Ideal para**: Bodas grandes, eventos empresariales, festivales privados, quinceañeras de lujo

### SEO
- **Title**: `Paquete Premium — 10 Mesas Picnic para 60 Personas | MESPIC CDMX`
- **Description**: `Paquete Premium con 10 mesas picnic para 60 personas en CDMX. Composición flexible de modelos, montaje profesional, traslado incluido. Ideal para bodas y eventos masivos.`
- **Schema**: `Product`

### Notas de Diseño
- Spec-card usa `--c-accent` (#D4A574 dorado) como diferenciador premium (igual que mesa-picnic-premium en catálogo)
- CTA principal usa `--c-accent` para reforzar posicionamiento luxury

---

## Diferenciadores Clave vs /catalogo/

| Aspecto | /catalogo/ | /paquetes/ |
|---|---|---|
| Enfoque | Producto físico (dimensiones, madera, acabado) | Bundle de servicio (personas, área, qué incluye) |
| Métrica principal | Tamaño en metros, personas por mesa | Total personas evento, área total |
| Precio | Por pieza (unitario) | Por evento (todo incluido) |
| Composición | 1 modelo específico | Flexible / combinación de modelos |
| CTA | "Ver modelo" | "Cotizar paquete" |

---

## CSS Classes Usadas

```css
.pkg-table          /* Tabla comparativa de paquetes — 4 cols, highlight columna central */
.spec-grid          /* Layout 2 cols: sticky card 320px + FeatureCards */
.spec-card          /* Tarjeta sticky con specs técnicas */
.spec-card__title   /* Título de spec-card — borde color variable por tier */
.spec-list          /* Lista de especificaciones */
.grid-3             /* Grid 3 columnas (ServiceCards en índice) */
.grid-4             /* Grid 4 columnas (FeatureCards) */
```

---

## Interlinking entre Secciones

- `/paquetes/` ↔ `/catalogo/` — CTA cruzado "¿Prefieres rentar por pieza?"
- Cada paquete L3 enlaza a `/cotizar/` como CTA principal
- ServiceCards en L3 enlazan a los otros paquetes y a `/catalogo/`
- Breadcrumbs: Home → Paquetes → [Nombre Paquete]

---

#mespic #paquetes #documentacion #seo #astro
