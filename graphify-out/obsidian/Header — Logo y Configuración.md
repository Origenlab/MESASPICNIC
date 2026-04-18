---
source_file: "MESASPICNIC/Header Component"
type: "architecture"
community: "Componentes UI"
tags:
  - graphify/architecture
  - community/Componentes_UI
  - proyecto/MESASPICNIC
---

# Header — Logo y Configuración

**Fecha:** 2026-04-18

---

## Logo

- **Archivo:** `/public/img/mespic.webp`
- **Formato:** RGBA, 900×251 px, ~43KB
- **Color:** Azul marino oscuro (RGB 8, 46, 98) sobre fondo transparente
- **Referenciado en:** `src/components/Header.astro` como `<img src="/img/mespic.webp">`
- **Altura CSS:** `height: 65px; width: auto`

## Configuración del header

La navegación se configura en `src/data/header.md` (frontmatter YAML).

## Posición

El `.hdr-stack` es `position: fixed; top: var(--topbar-height, 36px)` definido en `global.css`.

## Widget DMChamp

Instalado en `src/layouts/BaseLayout.astro`:

```html
<script is:inline src="https://api.dmchamp.com/v1/chat-widget/MudstzucAJwOXl5hvruG"></script>
```

## Diagnóstico de logo invisible

Si el logo no se ve en producción: el problema es caché de CDN (Fastly/Cloudflare).
Solución: esperar ~10 min o hacer hard refresh `Cmd+Shift+R`.

#graphify/architecture #community/Componentes_UI #proyecto/MESASPICNIC
