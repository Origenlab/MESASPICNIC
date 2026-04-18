# 🖼️ Imágenes — Convención SEO y Pipeline de Optimización

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Catálogo Expandido — Pipeline de Datos]]

**Actualizado:** 2026-04-18

---

## Estructura de Directorios

```
public/img/
├── [imágenes generales del sitio]     ← naming libre, producción existente
└── catalogo/                           ← catálogo expandido 2026
    └── [producto-slug]-[desc]-[n].webp
```

---

## Convención de Nombres — Regla Universal

```
{slug-producto}-{descripcion-seo-3-5-palabras}-{numero-2-digitos}.webp
```

### Reglas de Nomenclatura
1. **Solo minúsculas** — nunca mayúsculas
2. **Solo guiones** — nunca guiones bajos ni espacios
3. **WebP siempre** — nunca JPG/PNG/AVIF en carpeta catálogo
4. **Número de 2 dígitos** — `01`, `02` no `1`, `2`
5. **Slug primero** — el slug del producto siempre al inicio
6. **Descripción SEO** — 3 a 5 palabras con keywords relevantes
7. **Sin caracteres especiales** — sin acentos, ñ, ni caracteres no ASCII

### Ejemplos Correctos ✓
```
mesa-picnic-hexagonal-madera-6-personas-jardin-01.webp
mesa-picnic-xl-extra-larga-3m-16-personas-02.webp
banca-picnic-madera-pino-individual-05.webp
set-lounge-exterior-madera-vip-evento-03.webp
set-picnic-infantil-tematico-colores-04.webp
mesa-picnic-parota-carpinteria-detalle-01.webp
```

### Ejemplos Incorrectos ✗
```
IMG_20240315.jpg                ← nombre de cámara
mesa_picnic.webp                ← guiones bajos
Mesa-Hexagonal.PNG              ← mayúsculas y PNG
foto-evento.jpeg                ← no es JPEG
catalogo-2.webp                 ← sin slug de producto
```

---

## Tipos de Imagen por Producto

Cada producto del catálogo debe tener al menos estas imágenes:

| Tipo | Sufijo | Descripción |
|------|--------|-------------|
| Hero principal | `-01.webp` | La imagen más representativa del producto en evento |
| Galería evento 1 | `-02.webp` | Contexto de uso principal |
| Galería evento 2 | `-03.webp` | Uso alternativo o variante |
| Galería evento 3 | `-04.webp` | Detalle o perspectiva diferente |
| Galería evento 4 | `-05.webp` | Escena grupal o masiva |
| Ficha técnica | `-ficha-dimensiones-01.webp` | Diagrama, dimensiones o taller |

---

## Especificaciones Técnicas

| Parámetro | Valor | Razón |
|-----------|-------|-------|
| Formato | WebP | Mejor compresión + soporte universal 2024+ |
| Calidad | 88% | Balance visual/peso óptimo para web |
| Ancho máximo | 1,400 px | Adecuado para grids de 3 columnas |
| Método WebP | 6 (máximo) | Mejor compresión sin pérdida visual |
| Tamaño objetivo | < 200 KB | Ideal, máximo aceptable 350 KB |
| Modo de color | RGB (sin alfa) | Mayor compatibilidad |

---

## Pipeline de Optimización

### Paso 1: Origen de la Imagen
- **Opción A:** Descarga desde fuentes de scraping (Scrapling)
- **Opción B:** Copia de imagen de producción existente en `/public/img/`
- **Opción C:** Imagen nueva de sesión fotográfica

### Paso 2: Procesamiento (Python + Pillow)
```python
from PIL import Image

img = Image.open(source_path)

# Convertir a RGB si RGBA/P
if img.mode in ('RGBA', 'P'):
    bg = Image.new('RGB', img.size, (255, 255, 255))
    bg.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)
    img = bg

# Resize si > 1400px
if img.width > 1400:
    ratio = 1400 / img.width
    img = img.resize((1400, int(img.height * ratio)), Image.LANCZOS)

# Guardar en WebP
img.save(destination_path, 'WEBP', quality=88, method=6)
```

### Paso 3: Validación
```bash
# Verificar tamaños
ls -lh /public/img/catalogo/ | sort -k5 -rh | head -10

# Verificar que son WebP válidos
file public/img/catalogo/*.webp
```

### Paso 4: Uso en Astro
```astro
<!-- Hero og -->
ogImage="/img/catalogo/{slug}-{desc}-01.webp"

<!-- Galería -->
{ src: "/img/catalogo/{slug}-{desc}-01.webp", 
  alt: "Descripción detallada con keywords del producto y contexto de uso" }
```

---

## Alt Text — Estándar de Calidad

### Fórmula
```
{Material} {producto} para {contexto-de-uso} en {ubicación} {detalles}
```

### Ejemplos Correctos ✓
```
"Mesa picnic hexagonal de pino natural para boda boho en jardín privado CDMX"
"Set lounge exterior de madera con tapizado crudo en evento VIP al atardecer"
"Carpintero aplicando aceite de teca en mesa de parota MESPIC en taller"
```

### Errores Comunes ✗
- `alt=""` — vacío
- `alt="imagen"` — genérico
- `alt="foto1"` — número de archivo
- `alt="DSC_0234"` — nombre de cámara

---

#mespic #imagenes #seo #pipeline #convencion #catalogo
