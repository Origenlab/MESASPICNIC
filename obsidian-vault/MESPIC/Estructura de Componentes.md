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

## Layouts en `/src/layouts/`

| Layout | Descripción |
|---|---|
| `BaseLayout.astro` | Layout raíz: Head SEO + TopBar + hdr-stack (Header + slot breadcrumbs) + main + Footer |
| `BlogLayout.astro` | Layout completo de artículos: Hero dark + CtaBar + grid 2 columnas (artículo + sidebar) + CtaBarFinal |

### BlogLayout — props principales

| Prop | Descripción |
|---|---|
| `heroTitle` | H1 del artículo |
| `heroBadge` | Chip de categoría |
| `heroDescription` | Subtítulo |
| `heroSeo1 / heroSeo2` | Párrafos SEO columna derecha |
| `heroCta / heroCtaSecondary` | Botones del hero |
| `breadcrumbs` | Array `{label, href?}` para migas de pan |

> Ver documentación completa → [[BlogLayout — Template]]

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

## Componente Hero — Estándar Aprobado ✅

> **REGLA GLOBAL (homologado 2026-04-17):**  
> Todos los heroes del sitio usan **`dark={true}`** — gradiente forestal oscuro.  
> Referencia aprobada: **homepage `/`**.  
> No existe ninguna excepción. Cualquier hero sin `dark={true}` es un error.

### Props

| Prop | Tipo | ¿Obligatorio? | Descripción |
|---|---|---|---|
| `badge` | `string` | Sí | Chip/etiqueta superior (ej. `"Mobiliario para bodas"`) |
| `title` | `string` | Sí | H1 principal de la página |
| `description` | `string` | Sí | Subtítulo/descripción corta |
| `seoParagraph1` | `string` | Sí | Párrafo SEO columna derecha |
| `seoParagraph2` | `string` | Sí | Párrafo SEO columna derecha |
| `ctaPrimary` | `{label, href}` | No | Botón CTA primario (default: "Cotizar ahora →" / `/cotizar/`) |
| `ctaSecondary` | `{label, href}` | No | Botón CTA secundario (default: "Ver servicios" / `/servicios/`) |
| `dark` | `boolean` | **Siempre true** | **Activar SIEMPRE. Nunca omitir.** |
| `metrics` | `Array<{value, label}>` | No | Métricas opcionales bajo los CTAs |

### Uso correcto (plantilla)

```astro
<Hero
  badge="Texto del badge"
  title="Título Principal de la Página"
  description="Descripción corta y directa del servicio o contenido."
  ctaPrimary={{ label: "CTA primario →", href: "/cotizar/" }}
  ctaSecondary={{ label: "CTA secundario", href: "/catalogo/" }}
  seoParagraph1="Párrafo SEO 1..."
  seoParagraph2="Párrafo SEO 2..."
  dark={true}
/>
```

### Páginas homologadas (18 total — 2026-04-17)

| Sección | Páginas |
|---|---|
| Servicios Bodas | `/servicios/bodas/`, `/servicios/bodas/boho/`, `/servicios/bodas/clasica/`, `/servicios/bodas/intima/`, `/servicios/bodas/rustica/` |
| Servicios Corporativos | `/servicios/eventos-corporativos/`, `…/activaciones/`, `…/comidas/`, `…/conferencias/`, `…/team-building/` |
| Otros Servicios | `/servicios/festivales/`, `/servicios/fiestas-infantiles/`, `/servicios/fiestas-tematicas/`, `/servicios/picnic-romantico/`, `/servicios/reuniones-familiares/`, `/servicios/sesiones-fotograficas/` |
| Páginas generales | `/cotizar/`, `/nosotros/` |

> Ya tenían `dark={true}` antes: `/` (index), `/servicios/`, `/catalogo/` + subpáginas, `/paquetes/` + subpáginas, `/contacto/`, `/blog/` + artículos

---

## Footer — Estructura de Columnas

| Columna | Contenido |
|---|---|
| **Marca** | Logo, tagline, teléfono, WhatsApp, horario |
| **Servicios** | 8 links de servicios |
| **Catálogo + Paquetes** | 6 productos + 3 paquetes |
| **Empresa** | Nosotros, Blog, Cotizar, Contacto |

---

## Sistema de Niveles de Diseño

El sistema de diseño MESPIC se organiza en 3 niveles jerárquicos:

| Nivel | Scope | Ejemplos |
|---|---|---|
| **L1 — Página** | URL completa | `/servicios/bodas/`, `/catalogo/mesa-picnic-estandar/` |
| **L2 — Sección** | Bloque con `SectionHeader` + contenido | Galería, FAQ, Testimonios, Proceso |
| **L3 — Patrón** | Layout CSS interno de una sección | `proceso-cards`, `grid-4`, `stats-grid` |

> Los **Templates L3** son los moldes reutilizables. Documentar siempre en Graphify (`group: "templates-l3"`) y en Obsidian (`Template L3 — [Nombre].md`).

---

## Templates L3 Registrados ✅

### `proceso-cards` — Proceso Paso a Paso

> Documentación completa → [[Template L3 — Proceso Cards]]

**ID Graphify:** `tmpl-proceso-cards`
**Estado:** Aprobado — 2026-04-17
**Referencia:** `/servicios/bodas/#proceso`

Layout de tarjetas para secciones de proceso secuencial (N pasos ordenados).

**Grid:**
- Desktop: 6 columnas — pasos 1-3 ocupan `span 2`, pasos 4-5 ocupan `span 3` → layout 3+2
- Tablet ≤1024px: 2 columnas, todos `span 1`
- Móvil ≤640px: 1 columna

**Clases CSS:** `.proceso-cards` / `.paso-card` / `.paso-card__num` / `.paso-card__body` / `.paso-card__title` / `.paso-card__text`

**Tokens clave:**
- Borde top terracota: `border-top: 3px solid var(--c-accent, #C8956C)` ← identifica "secuencia"
- Número fantasma: `color: var(--c-primary) + opacity: 0.12`
- Gradiente sutil: `linear-gradient(135deg, rgba(44,85,48,0.03) 0%, transparent 60%)`

**Reglas:**
- Sección padre: `class="section section-alt"` (fondo crema)
- Siempre con `SectionHeader` con `badge=` antes del container
- Sin animaciones
- Para 5 pasos: layout 3+2. Ver [[Template L3 — Proceso Cards]] para variantes de 3, 4 y 6 pasos.

**Páginas implementadas:** `/servicios/bodas/#proceso`

---

## SectionHeader — Estándar de Badge ✅

> Ver también → Hero (Componente Hero — Estándar Aprobado, arriba)

**Regla global (homologado 2026-04-17):**
Todos los `SectionHeader` del sitio llevan `badge=`. Sin badge el pill verde decorativo no aparece y el título pierde el complemento visual aprobado.

- **89 instancias** en **32 páginas** homologadas
- Badge en **Title Case** sin puntos finales (ej. `"Preguntas frecuentes"`, `"Galería de montajes"`)
- El badge es un `<span>` con punto verde decorativo — rendered por el componente, no escribir HTML manual

---

#mespic #componentes #astro #frontend #templates #l3
