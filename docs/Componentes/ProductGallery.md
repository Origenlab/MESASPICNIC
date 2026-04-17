---
tags: [componente, galería, sidebar, productos]
archivo: src/components/ProductGallery.astro
tipo: Galería con sidebar de productos recomendados
created: 2026-04-17
updated: 2026-04-17
---

# 🛍️ ProductGallery

→ [[MOC — MESPIC Website]]

**Archivo:** `src/components/ProductGallery.astro`  
**Tipo:** Galería de imágenes + sidebar con productos/paquetes recomendados

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `images` | `Array<{src, alt}>` | Imágenes del servicio |
| `recommended` | `Array<{title, description, href}>` | Items del sidebar |
| `sidebarTitle` | `string` | Título del sidebar |

## Layout

2 columnas: galería principal izquierda + sidebar de recomendados derecha

## Páginas que lo usan

- [[L3 — Bodas]] — sección `#montajes`
