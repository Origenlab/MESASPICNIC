---
source_file: "MESASPICNIC/BlogLayout"
type: "architecture"
community: "Blog y Contenido"
tags:
  - graphify/architecture
  - community/Blog_y_Contenido
  - proyecto/MESASPICNIC
---

# BlogLayout — Template y Reglas

**Fecha:** 2026-04-18

---

## Archivo

`src/layouts/BlogLayout.astro`

## Props requeridas

```ts
title: string
description: string
pubDate: string          // "YYYY-MM-DD"
image: string            // ruta a /img/...
imageAlt: string
category: string
readTime: string         // "X min de lectura"
author?: string          // default: "Equipo MESPIC"
```

## Estructura del artículo

```
BlogLayout
  └── Hero (dark={true}, imagen del post)
  └── Contenido principal (slot default)
  └── Sidebar
        ├── CTA WhatsApp
        ├── Posts relacionados
        └── Categorías
```

## Reglas de estilo

- Hero siempre `dark={true}`
- Imagen del hero: usar webp de `/public/img/`
- Nunca texto en blanco sobre imagen clara sin overlay
- El sidebar es dinámico — se genera automáticamente

## Connections
- [[Arquitectura del Sitio — Páginas y Estructura]] - `references`
- [[Estándar Hero — dark obligatorio]] - `references`

#graphify/architecture #community/Blog_y_Contenido #proyecto/MESASPICNIC
