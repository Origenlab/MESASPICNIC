# 🎨 Identidad Visual y Diseño

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Arquitectura Técnica]]

---

## Paleta de Colores (CSS Variables)

| Variable | Valor | Uso |
|---|---|---|
| `--c-primary` | `#2C5530` | Verde bosque — color principal, CTAs, headings |
| `--c-accent` | `#D4A574` | Arena/caramelo — punto de acento (logo dot) |
| `--c-text` | `#1a1a1a` | Texto principal |
| `--c-text-muted` | `#6b7280` | Texto secundario/gris |
| `--c-bg` | `#fff` | Fondo blanco |
| `--c-bg-alt` | `#FAF8F5` | Fondo alternativo crema |
| `--c-border` | `#e5e7eb` | Bordes y divisores |
| `theme-color` | `#2C5530` | Color de navegador |

---

## Tipografía

| Uso | Fuente | Pesos |
|---|---|---|
| **Headings** | Plus Jakarta Sans | 400, 500, 600, 700, 800 |
| **Body / UI** | Inter | 300, 400, 500, 600, 700 |

---

## Logo y Branding

- **Nombre en UI:** `MesPic·` (con punto de acento en color arena)
- **Favicon:** `/favicon.ico` + `/icon.svg` + `/icon.png`
- **Manifesto PWA:** `site.webmanifest`
- **Estilo:** Limpio, profesional, calidez de madera natural

---

## Clases CSS Globales

| Clase | Uso |
|---|---|
| `.btn.btn-primary` | Botón verde principal |
| `.btn.btn-wa` | Botón verde WhatsApp |
| `.section` | Sección con padding estándar |
| `.section.section-alt` | Sección con fondo crema |
| `.container` | Contenedor máx. 1200px centrado |
| `.grid-4` | Grid de 4 columnas (responsive: 2 cols en tablet, 1 en móvil) |

---

## Estilo Visual General

- Bordes redondeados con variables `--radius-sm` y `--radius-md`
- Sombras suaves y minimalistas
- Imágenes en formato `.avif` (moderno) con fallback `.webp`
- Fotos de escenas reales: bodas, mesas de madera, taller artesanal
- Sin fondos oscuros (excepto footer)
- Glassmorphism en header al hacer scroll

---

## Formato de Imágenes

- **Principal:** `.avif` (mejor compresión y calidad)
- **Alternativas:** `.webp` para compatibilidad
- **Nombres descriptivos SEO:** `mesa-picnic-boda-elegante-decoracion.avif`
- **Directorio:** `/img/`

---

#mespic #diseno #identidad-visual #css
