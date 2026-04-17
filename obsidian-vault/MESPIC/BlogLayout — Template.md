# 📐 BlogLayout — Template Estándar de Artículos

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Estructura de Componentes]] | [[Blog]]
> Creado: 2026-04-17

---

## ¿Qué es?

`BlogLayout.astro` es el layout maestro para todos los artículos del blog de MESPIC. Homologado 100% con el patrón del resto del sitio: mismos componentes, misma jerarquía, misma cadena de conversión.

---

## Patrón de estructura (obligatorio)

```
BaseLayout
  └── slot="breadcrumbs" → Breadcrumbs (dentro del hdr-stack fijo)
  └── slot (main)
        ├── Hero (dark=true) — mismo componente que el home y servicios
        ├── CtaBar — barra de navegación rápida por tipo de evento
        ├── .blog-wrapper
        │     └── .blog-layout (grid: 1fr 340px)
        │           ├── <article class="blog-content"> ← slot principal del artículo
        │           └── <aside class="blog-sidebar">
        │                 ├── Widget CTA WhatsApp (verde oscuro)
        │                 ├── Widget Servicios relacionados (links)
        │                 ├── Widget Catálogo de productos (imágenes)
        │                 ├── Widget Artículos relacionados (thumbnails)
        │                 └── Widget Zonas de cobertura
        └── CtaBarFinal (personalizable por artículo)
```

---

## Props del BlogLayout

| Prop | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | string | ✅ | `<title>` HTML y OG |
| `description` | string | — | Meta description |
| `canonical` | string | — | URL canónica explícita |
| `ogImage` | string | — | Imagen OG (default: mesa-picnic-boda-elegante-decoracion.avif) |
| `heroTitle` | string | ✅ | H1 del hero |
| `heroBadge` | string | — | Chip superior del hero (default: "Blog · Guías de eventos") |
| `heroDescription` | string | ✅ | Subtítulo del hero |
| `heroSeo1` | string | ✅ | Párrafo SEO columna derecha hero |
| `heroSeo2` | string | ✅ | Párrafo SEO columna derecha hero |
| `heroCta` | `{label, href}` | — | CTA primario hero (default: Cotizar → /cotizar/) |
| `heroCtaSecondary` | `{label, href}` | — | CTA secundario hero (default: Ver catálogo) |
| `breadcrumbs` | `Array<{label, href?}>` | — | Migas de pan (default: Inicio / Blog / título) |

---

## Breadcrumbs — posición correcta

Los breadcrumbs van en `<Fragment slot="breadcrumbs">` dentro de `<BaseLayout>`. Esto los coloca en el `hdr-stack` fijo, **directamente debajo del header**, no debajo del hero.

```astro
<BaseLayout ...>
  <Fragment slot="breadcrumbs">
    <Breadcrumbs items={crumbs} />
  </Fragment>
  <!-- Hero, CtaBar, contenido... -->
</BaseLayout>
```

---

## Estructura interna del artículo (slot principal)

El contenido del artículo va dentro de `<div class="art">`. Clases disponibles:

| Clase | Uso |
|---|---|
| `.art__lead` | Párrafo introductorio principal |
| `.art__section` | Sección con `margin-bottom: 3.5rem` |
| `.art__h2` | H2 con línea decorativa accent |
| `.art__feature-grid` | Grid 2×2 de tarjetas sin iconos |
| `.art__feature-card` | Tarjeta de característica (h3 + p) |
| `.art__table-wrap` | Wrapper scrollable para tablas |
| `.art__table` | Tabla estándar del artículo |
| `.art__table--compare` | Tabla comparativa con columna accent |
| `.art__tip` | Caja de consejo/tip (fondo accent) |
| `.art__style-grid` | Grid de tarjetas con imagen + body |
| `.art__style-card` | Tarjeta estilo (foto + lista) |
| `.art__steps` | Lista numerada de pasos (01, 02...) |
| `.art__gallery` | Galería principal (1 grande + 6 grid) |
| `.art__gallery-strip` | Galería horizontal de 4 imágenes |
| `.art__service-cards` | Grid de tarjetas de servicio |
| `.art__service-item` | Ítem de servicio (h3 + p, sin iconos) |
| `.art__coverage-grid` | Grid 2 columnas de cobertura |
| `.art__faqs` | Acordeón FAQ con `<details>` |
| `.art__cta-inline` | CTA intermedio verde (h3 + botones) |
| `.art__cta-final` | CTA final oscuro del artículo |
| `.art__figure` | Imagen con `<figcaption>` |

---

## Sidebar — 5 Widgets fijos

### 1. CTA WhatsApp (verde oscuro)
- Fondo: gradiente `#1B3B20 → #2C5530`
- Botón WhatsApp verde `#25D366`
- Botón formulario transparente
- Personalizable: título "¿Planeas una boda?" → adaptar por categoría

### 2. Servicios relacionados
- Lista de 4 links con nombre, subtítulo y flecha SVG
- Sin iconos/emojis — links limpios y profesionales
- Personalizar por tema del artículo

### 3. Catálogo de productos
- 2 productos con imagen thumbnail (72×60px)
- Link "Ver catálogo completo →"

### 4. Artículos relacionados
- 3 artículos con thumbnail cuadrado (60×60px)
- Título + meta (categoría · tiempo lectura)

### 5. Cobertura
- Fondo `#F7F4F0`
- Lista de alcaldías/municipios
- Link "¿Tu zona? Consúltanos →"

---

## Reglas de estilo del artículo

- **Sin emojis en iconos de cards** — solo texto limpio
- **H2 con línea accent terracota** (`.art__h2::after`)
- **Párrafos** `color: #78716C`, `font-size: 1.0625rem`, `line-height: 1.85`
- **Strong** `color: #1C1917`
- **Tablas** con fila `<thead>` oscura (`#1C1917`) y columna accent
- **Feature cards** con borde izquierdo o ningún ícono
- **Imágenes** con `loading="lazy"`, `width`, `height` explícitos
- **Galerías** con `aspect-ratio: 4/3` o `16/9` según contexto
- **CTAs intermedios** en verde oscuro `#1B3B20`
- **CTA final** del artículo en oscuro con 3 botones: WA, formulario, servicio

---

## Cómo crear un nuevo artículo

```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';
---

<BlogLayout
  title="[Título SEO] | MESPIC"
  description="[Meta description 150-160 caracteres]"
  ogImage="/img/[imagen-relevante].avif"
  heroTitle="[H1 del artículo]"
  heroBadge="Blog · [Categoría]"
  heroDescription="[Subtítulo 1-2 líneas]"
  heroSeo1="[Párrafo SEO 1 — 3-4 líneas con datos de autoridad]"
  heroSeo2="[Párrafo SEO 2 — 3-4 líneas con propuesta de valor]"
  heroCta={{ label: "Cotizar sin compromiso →", href: "/cotizar/" }}
  heroCtaSecondary={{ label: "Ver servicios", href: "/servicios/" }}
  breadcrumbs={[
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "[Título corto del artículo]" },
  ]}
>

<div class="art">
  <p class="art__lead">[Párrafo de entrada]</p>

  <!-- SECCIÓN 1 -->
  <section class="art__section">
    <h2 class="art__h2">[Título de sección]</h2>
    <p>[Contenido]</p>
    <div class="art__feature-grid">
      <div class="art__feature-card">
        <h3>[Título]</h3>
        <p>[Descripción]</p>
      </div>
      <!-- repetir x4 -->
    </div>
  </section>

  <!-- TABLA -->
  <section class="art__section">
    <h2 class="art__h2">[Título]</h2>
    <div class="art__table-wrap">
      <table class="art__table">
        <thead><tr><th>Col 1</th><th>Col 2</th></tr></thead>
        <tbody>
          <tr><td>dato</td><td>dato</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- CTA INTERMEDIO -->
  <div class="art__cta-inline">
    <div class="art__cta-inline-content">
      <h3>[Pregunta]</h3>
      <p>[Texto]</p>
      <div class="art__cta-inline-btns">
        <a href="https://wa.me/5564328954?text=..." class="art__btn art__btn--wa">Cotizar por WhatsApp</a>
        <a href="/cotizar/" class="art__btn art__btn--outline">Formulario →</a>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <section class="art__section">
    <h2 class="art__h2">Preguntas frecuentes</h2>
    <div class="art__faqs">
      <details class="art__faq">
        <summary class="art__faq-q">[Pregunta]</summary>
        <p class="art__faq-a">[Respuesta]</p>
      </details>
    </div>
  </section>

  <!-- CTA FINAL -->
  <div class="art__cta-final">
    <div class="art__cta-final-inner">
      <h2>[Título CTA]</h2>
      <p>[Texto]</p>
      <div class="art__cta-final-btns">
        <a href="https://wa.me/5564328954?text=..." class="art__btn art__btn--wa art__btn--lg">Cotizar por WhatsApp</a>
        <a href="/cotizar/" class="art__btn art__btn--primary art__btn--lg">Formulario →</a>
        <a href="/servicios/[servicio]/" class="art__btn art__btn--ghost art__btn--lg">Ver servicio</a>
      </div>
    </div>
  </div>
</div>

</BlogLayout>
```

---

## Archivos involucrados

| Archivo | Ruta | Función |
|---|---|---|
| `BlogLayout.astro` | `src/layouts/BlogLayout.astro` | Layout maestro del blog |
| `BaseLayout.astro` | `src/layouts/BaseLayout.astro` | Layout raíz del sitio |
| `Hero.astro` | `src/components/Hero.astro` | Hero dark compartido |
| `CtaBar.astro` | `src/components/CtaBar.astro` | Barra de navegación rápida |
| `CtaBarFinal.astro` | `src/components/CtaBarFinal.astro` | CTA de conversión final |
| `Breadcrumbs.astro` | `src/components/Breadcrumbs.astro` | Migas de pan (schema.org) |
| `[artículo].astro` | `src/pages/blog/[slug].astro` | Página individual del artículo |

---

## Flujo de build y deploy

```bash
npm run build
cp -r dist/blog/[slug]/* blog/[slug]/
```

---

#mespic #blog #layout #template #componentes #astro
