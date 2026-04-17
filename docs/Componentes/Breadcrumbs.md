---
tags: [componente, breadcrumbs, navegación, seo]
archivo: src/components/Breadcrumbs.astro
tipo: Migas de pan
created: 2026-04-17
updated: 2026-04-17
---

# 🍞 Breadcrumbs

→ [[MOC — MESPIC Website]]

**Archivo:** `src/components/Breadcrumbs.astro`  
**Tipo:** Navegación de migas de pan con Schema.org BreadcrumbList

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `items` | `Array<{label, href?}>` | Ítems del breadcrumb. El último sin `href` es la página actual |

## Uso

```astro
<Fragment slot="breadcrumbs">
  <Breadcrumbs items={[
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios/" },
    { label: "Bodas" }
  ]} />
</Fragment>
```

## Posición

Va en el slot `breadcrumbs` del [[BaseLayout]], dentro del `.hdr-stack` fijo, entre el [[Header]] y el contenido.

## Páginas que lo usan

Todas las páginas excepto [[L1 — Home]]: L2, L3 y L4.
