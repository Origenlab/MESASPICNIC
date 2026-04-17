---
tags: [componente, layout, base]
archivo: src/layouts/BaseLayout.astro
tipo: Layout wrapper global
created: 2026-04-17
updated: 2026-04-17
---

# 📦 BaseLayout

→ [[MOC — MESPIC Website]] | [[Stack Técnico]]

**Archivo:** `src/layouts/BaseLayout.astro`  
**Tipo:** Wrapper HTML global — todas las páginas lo usan

## Props

| Prop | Tipo | Default |
|------|------|---------|
| `title` | `string` | — requerido |
| `description` | `string` | Descripción por defecto |
| `canonical` | `string` | URL calculada automáticamente |
| `ogImage` | `string` | `/img/mesa-picnic-boda-elegante-decoracion.avif` |

## Estructura HTML generada

```
<!DOCTYPE html>
<html lang="es-MX">
<head>
  meta charset, viewport, robots
  title, description, canonical
  Open Graph (og:type/url/title/description/image/locale/site_name)
  Twitter Card
  favicon.ico / icon.svg / apple-touch-icon
  theme-color: #2C5530
  Google Fonts (Plus Jakarta Sans + Inter)
  <slot name="head" />  ← Schema.org JSON-LD va aquí
  DMChamp Chat Widget script
</head>
<body>
  <TopBar />
  <div class="hdr-stack">  ← fixed, z-index 1000
    <Header />
    <slot name="breadcrumbs" />
  </div>
  <main>
    <slot />
  </main>
  <Footer />
</body>
```

## Slots disponibles

| Slot | Uso |
|------|-----|
| `head` | Schema.org JSON-LD por página |
| `breadcrumbs` | [[Breadcrumbs]] por página |
| *(default)* | Contenido principal de la página |
