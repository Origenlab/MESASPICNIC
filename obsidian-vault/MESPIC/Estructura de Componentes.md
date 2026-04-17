# 🧩 Estructura de Componentes

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Arquitectura Técnica]]

---

## Componentes en `/src/components/`

| Componente | Descripción |
|---|---|
| `BaseLayout.astro` | Layout raíz con Head, TopBar, Header, Footer |
| `TopBar.astro` | Barra superior con datos de contacto rápido |
| `Header.astro` | Navegación sticky con glassmorphism y menú móvil |
| `Hero.astro` | Sección hero configurable (badge, título, descripción, CTAs, párrafos SEO) |
| `CtaBar.astro` | Barra de CTA con iconos por tipo de evento |
| `CtaBarFinal.astro` | CTA final de sección con teléfono + WhatsApp + formulario |
| `Footer.astro` | Footer completo con columnas (marca, servicios, catálogo, empresa) |
| `ServiceCard.astro` | Tarjeta de servicio (imagen, título, descripción, botón) |
| `FeatureCard.astro` | Tarjeta de característica/ventaja (título + descripción) |
| `TestimonialCard.astro` | Tarjeta de testimonio (nombre, evento, cita, estrellas, fecha) |
| `FaqSection.astro` | Sección FAQ expandible con formulario de contacto lateral |
| `GallerySection.astro` | Galería de imágenes (array de {src, alt}) |
| `SectionHeader.astro` | Cabecera de sección con tag, título y 2 párrafos |
| `Breadcrumbs.astro` | Migas de pan de navegación |
| `WaBubble.astro` | Burbuja flotante de WhatsApp |
| `ProductGallery.astro` | Galería específica para productos del catálogo |

---

## Datos de Configuración en `/src/data/`

### `header.md` — Navegación

```yaml
brand: "MesPic"
brandAccent: "·"
nav:
  - Inicio /
  - Servicios /servicios/ (con submenu de 8 servicios)
  - Catálogo /catalogo/
  - Paquetes /paquetes/
  - Blog /blog/
  - Contacto /contacto/
cta:
  enabled: true
  label: "Cotizar →"
  href: "/cotizar/"
```

### `topbar.md` — Barra Superior

Configura los datos de contacto que aparecen en la barra superior de la página.

---

## Comportamiento del Header

- **Sticky** — se queda fijo al hacer scroll
- **Glassmorphism** — fondo semitransparente con blur al hacer scroll
- **Desktop** — dropdown en hover sobre "Servicios"
- **Móvil** — panel slide-in desde la derecha con accordion
- **CTA** — botón "Cotizar →" siempre visible en desktop

---

## Componente Hero — Props

| Prop | Descripción |
|---|---|
| `badge` | Chip/etiqueta superior opcional |
| `title` | H1 principal |
| `description` | Subtítulo/descripción |
| `ctaPrimary` | Botón principal `{label, href}` |
| `ctaSecondary` | Botón secundario `{label, href}` |
| `seoParagraph1` | Párrafo SEO 1 (texto de cuerpo para indexación) |
| `seoParagraph2` | Párrafo SEO 2 |

---

## Footer — Estructura de Columnas

| Columna | Contenido |
|---|---|
| **Marca** | Logo, tagline, teléfono, WhatsApp, horario |
| **Servicios** | 8 links de servicios |
| **Catálogo + Paquetes** | 6 productos + 3 paquetes |
| **Empresa** | Nosotros, Blog, Cotizar, Contacto |

---

#mespic #componentes #astro #frontend
