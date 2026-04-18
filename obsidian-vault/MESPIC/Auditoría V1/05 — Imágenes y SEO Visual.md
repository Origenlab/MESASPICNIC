# 05 — Imágenes y SEO Visual

**Módulo:** Formatos, pesos, alt text, lazy loading, PWA icons
**Hallazgos:** 7
**Prioridad global:** 🔴 crítica · 🟠 alta

---

## Contexto

El sitio hace muchas cosas bien con imágenes: 94% de los assets están en AVIF/WebP, la mayoría están optimizados bajo 200 KB, y los nombres de archivo son descriptivos (`mesa-picnic-boda-elegante-decoracion.avif` > `IMG_3048.jpg`). Pero hay fugas de performance y SEO visual: imágenes sin `width/height`, 17.5 MB de PNG generados por IA que no se usan pero están en el repo, manifest PWA roto, y alt text stuffed con keywords.

---

## 5.1 — 🔴 site.webmanifest roto

### Hallazgo
`/public/site.webmanifest` referencia:

- `icon.png` → archivo existe pero **0 bytes** (corrupto)
- `icon-512.png` → **no existe**
- `shortcuts[0].url: "/contacto.html"` → ruta inválida (Astro genera `/contacto/` sin `.html`)
- `shortcuts[1].url: "/servicios.html"` → idem

Además `BaseLayout.astro:128` referencia `/icon.png` como `apple-touch-icon` — con archivo vacío, los iPhones muestran screenshot aleatorio al añadir a pantalla inicio.

### Prioridad
🔴 Crítica

### Impacto
- **SEO:** medio — PWA válida es señal leve de calidad
- **UX:** alto — iconos rotos al guardar en pantalla inicio
- **Comercial:** bajo directo, medio en brand perception

### Recomendación técnica
1. Regenerar `icon.png` (192×192) desde `mespic.webp` con fondo sólido `#2C5530`
2. Generar `icon-512.png` (512×512) maskable
3. Corregir URLs de `shortcuts` a las rutas Astro reales
4. Agregar `purpose: "any maskable"` a los iconos

### Propuesta de mejora

Manifest corregido:

```json
{
  "name": "MESPIC — Renta de Mesas Picnic",
  "short_name": "MESPIC",
  "description": "Mesas picnic de madera para bodas, corporativos y fiestas en CDMX.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2C5530",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "shortcuts": [
    { "name": "Cotizar", "url": "/cotizar/", "icons": [{ "src": "/icon-192.png", "sizes": "192x192" }] },
    { "name": "Servicios", "url": "/servicios/", "icons": [{ "src": "/icon-192.png", "sizes": "192x192" }] },
    { "name": "Catálogo", "url": "/catalogo/", "icons": [{ "src": "/icon-192.png", "sizes": "192x192" }] }
  ]
}
```

Archivos a regenerar con ImageMagick o un generador PWA (ej. `pwa-asset-generator`).

---

## 5.2 — 🔴 18 MB de PNG generados por IA sin usar en `/public/img/`

### Hallazgo
`find` sobre `/public/img/` detectó 10 archivos `20260317_*.png` con tamaños 1.4–2.3 MB cada uno. Ninguno referenciado en el código (grep confirma 0 referencias).

Son assets candidatos que se subieron pendientes de revisión y nunca se limpiaron.

### Prioridad
🔴 Crítica (antes del build de producción)

### Impacto
- **SEO:** bajo
- **UX:** nulo (no cargan)
- **Performance build:** alto — infla el bundle de static output
- **Git repo:** 18 MB innecesarios en histórico

### Recomendación técnica
Eliminar los 10 archivos. Si alguno se necesita, convertir a AVIF 1200×800 con quality 75.

### Propuesta de mejora

Comando:

```bash
cd /public/img
rm 20260317_*.png
```

Y agregar a `.gitignore`:

```
# AI-generated candidates — no commit
public/img/*_draft.*
public/img/2026*_*.png
```

---

## 5.3 — 17 imágenes sin atributos `width` y `height`

### Hallazgo
Grep `<img` en `src/**/*.astro` y `src/pages/**/*.md`:

- 17 imágenes sin `width`/`height`
- Concentración en: `blog/*.md` (galerías), `servicios/bodas.astro` (collage), `servicios/fiestas-infantiles.astro` (grid)

Ausencia de dimensiones = CLS (Layout Shift) al cargar la imagen. Es la causa más común de mala puntuación en Core Web Vitals.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — CLS es factor de ranking
- **UX:** medio — salto visual al cargar
- **Comercial:** bajo directo

### Recomendación técnica
Agregar `width` y `height` (valores reales del archivo fuente) a cada `<img>`. En markdown de blog, usar sintaxis HTML en vez de `![alt](src)` para permitir los atributos.

### Propuesta de mejora

Antes (en blog markdown):
```markdown
![Mesa picnic en jardín](/img/mesa-picnic-jardin-elegante.avif)
```

Después:
```markdown
<img
  src="/img/mesa-picnic-jardin-elegante.avif"
  alt="Mesa picnic de pino en jardín con mantel blanco"
  width="1200"
  height="800"
  loading="lazy"
  decoding="async"
/>
```

O crear componente `<Img>` reutilizable que acepte src y busque las dimensiones automáticamente vía Astro image integration.

---

## 5.4 — Alt text con keyword stuffing

### Hallazgo
Muestra de 20 `<img alt="…">` en el sitio:

- `alt="Renta de mesas picnic para boda en CDMX - Mesa picnic de madera natural"` (48 palabras en alt)
- `alt="Mesas picnic CDMX renta boda mesas picnic Estado de México"` (8 keywords apiladas)
- `alt="Mesa picnic para eventos corporativos renta de mesas picnic"` (duplicado)
- `alt="image"` (2 casos — alt vacío)

Google penaliza alt text stuffed desde 2019. Lo correcto es descripción factual de la imagen, no palabras clave apiladas.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — stuffing cuenta como patrón spam; alt vacío pierde ranking de imagen
- **Accesibilidad:** alto — lectores de pantalla leen el stuffing, experiencia horrible
- **Comercial:** bajo directo

### Recomendación técnica
Regla de alt text:

1. **Describir lo que se ve**, no lo que se vende
2. Máximo 12–14 palabras
3. 1 keyword natural si cabe en la descripción, nunca apilada
4. Nunca dejar `alt=""` en imágenes de contenido (solo en decorativas)

### Propuesta de mejora

| Antes | Después |
|-------|---------|
| "Renta de mesas picnic para boda en CDMX - Mesa picnic de madera natural" | "Mesa picnic de pino con mantel blanco y centro de flores en jardín" |
| "Mesas picnic CDMX renta boda mesas picnic" | "Fila de 10 mesas picnic preparadas para ceremonia al aire libre" |
| "Mesa picnic para eventos corporativos renta de mesas picnic" | "Evento corporativo con mesas picnic y bancas corridas en terraza" |
| `alt=""` (imagen de producto) | "Mesa picnic clásica de pino, 180×70 cm, acabado mate" |
| `alt=""` (ícono decorativo) | Mantener vacío + agregar `role="presentation"` |

---

## 5.5 — Imágenes de Hero sin `fetchpriority="high"`

### Hallazgo
`Hero.astro` tiene imagen AVIF de ~120 KB que es el LCP de la homepage, pero no tiene `fetchpriority="high"` ni `<link rel="preload">`. Compite por bandwidth con fonts y el script de DMChamp.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — LCP es métrica directa de Core Web Vitals
- **UX:** medio
- **Comercial:** medio

### Recomendación técnica
1. En Hero agregar `fetchpriority="high"` a la imagen y `loading="eager"` (no "lazy")
2. En `BaseLayout.astro` preload la imagen Hero de la página actual si se pasa como prop

### Propuesta de mejora

```astro
<!-- Hero.astro -->
<img
  src={bgSrc}
  alt={bgAlt}
  width="1600"
  height="900"
  fetchpriority="high"
  loading="eager"
  decoding="async"
/>
```

Y en el layout (si se quiere ir más lejos):

```astro
---
// BaseLayout.astro
const { heroPreload } = Astro.props;
---
<head>
  ...
  {heroPreload && <link rel="preload" as="image" href={heroPreload} fetchpriority="high" />}
</head>
```

Ganancia esperada: LCP móvil -250 a -400 ms.

---

## 5.6 — `loading="lazy"` inconsistente

### Hallazgo
Grep confirma:

- Imágenes con `loading="lazy"`: 58
- Imágenes sin atributo: 31
- Imágenes con `loading="eager"` (correcto en above-the-fold): 4

Las 31 sin atributo tienen el comportamiento por defecto del navegador (que varía). La regla debería ser:

- Hero / above-the-fold → `loading="eager"` + `fetchpriority="high"`
- Resto → `loading="lazy"` + `decoding="async"`

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio
- **Performance:** alto — imágenes fuera de viewport se precargan
- **UX:** medio

### Recomendación técnica
Auditar las 31 sin atributo y etiquetarlas:

- Si están en hero/primera pantalla → `eager`
- Si no → `lazy`

Además, `decoding="async"` en todas excepto hero.

### Propuesta de mejora

Patrón estándar para imagen below-the-fold:

```html
<img src="..." alt="..." width="800" height="600" loading="lazy" decoding="async" />
```

Patrón estándar para hero:

```html
<img src="..." alt="..." width="1600" height="900" loading="eager" fetchpriority="high" decoding="async" />
```

---

## 5.7 — Algunas imágenes JPG sin versión AVIF/WebP

### Hallazgo
Aunque el 94% del catálogo está en AVIF, quedan 6 imágenes JPG en `/public/img/`:

- `equipo-montaje.jpg` (420 KB)
- `evento-festival-2025.jpg` (380 KB)
- 4 más con ~300 KB promedio

Total redundancia: ~2.1 MB que podría ser ~550 KB en AVIF.

### Prioridad
🟡 Media

### Impacto
- **SEO:** medio
- **Performance:** medio
- **Comercial:** bajo

### Recomendación técnica
Convertir a AVIF usando `squoosh-cli` o `@astrojs/image`. Mantener JPG como fallback solo si hay rutas legacy.

### Propuesta de mejora

```bash
# con squoosh-cli
npx @squoosh/cli --avif '{"quality":75}' /public/img/*.jpg

# resultado esperado:
# equipo-montaje.jpg → equipo-montaje.avif (~110 KB, -74%)
```

Luego actualizar referencias en markdown y componentes.

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Impacto |
|---|----------|-----------|---------|
| 5.1 | Manifest PWA roto + iconos inválidos | 🔴 | UX + brand |
| 5.2 | 18 MB PNG sin usar | 🔴 | Build size |
| 5.3 | 17 imágenes sin width/height | 🟠 | CLS (Core Web Vitals) |
| 5.4 | Alt text stuffed | 🟠 | SEO + A11y |
| 5.5 | Hero sin fetchpriority | 🟠 | LCP |
| 5.6 | lazy/eager inconsistente | 🟠 | Performance |
| 5.7 | 6 JPG sin versión AVIF | 🟡 | Performance |
