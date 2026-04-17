---
tags: [componente, galería, grid]
archivo: src/components/GallerySection.astro
tipo: Grid de imágenes
created: 2026-04-17
updated: 2026-04-17
---

# 🖼️ GallerySection

→ [[MOC — MESPIC Website]]

**Archivo:** `src/components/GallerySection.astro`  
**Tipo:** Grid responsive de imágenes. El SectionHeader va externamente.

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `images` | `Array<{src, alt}>` | Array de imágenes |
| `id` | `string` | ID del contenedor (para anclas) |

## Layout

- Grid: `auto-fill, minmax(280px, 1fr)` con gap 1rem
- Aspect ratio de cada imagen: `16/9`
- Bordes redondeados: `--radius-md` (12px)
- Todas las imágenes con `loading="lazy"`

## Páginas que lo usan

- [[L1 — Home]] — 8 imágenes
- [[L2 — Servicios]] — 8 imágenes de tipos de servicio
