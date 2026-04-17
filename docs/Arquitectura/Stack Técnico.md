---
tags: [arquitectura, stack, astro]
nivel: arquitectura
created: 2026-04-17
updated: 2026-04-17
---

# ⚙️ Stack Técnico

→ [[MOC — MESPIC Website]] | [[Estructura del Sitio]] | [[Sistema de Diseño]]

---

## Framework y generación

| Herramienta | Versión | Rol |
|-------------|---------|-----|
| **Astro** | `^5.x` | Framework SSG/SSR principal |
| **Node.js** | LTS | Runtime de build |
| **npm** | `^10.x` | Gestor de paquetes |

---

## Estructura del proyecto

```
MESASPICNIC/
├── src/
│   ├── components/     → Componentes Astro reutilizables
│   ├── layouts/        → BaseLayout.astro (wrapper global)
│   ├── pages/          → Rutas del sitio (file-based routing)
│   ├── styles/         → global.css (tokens CSS)
│   └── data/           → Datos estáticos (topbar.md, header.md)
├── dist/               → Output compilado (no editar)
├── docs/               → Vault de documentación (este vault)
├── public/             → Assets estáticos (img/, favicon)
└── astro.config.mjs    → Configuración de Astro
```

---

## Fuentes externas (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?
  family=Plus+Jakarta+Sans:wght@400;500;600;700;800
  &family=Inter:wght@300;400;500;600;700
  &display=swap" rel="stylesheet" />
```

Cargadas en `BaseLayout.astro` con `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com`.

---

## Chat Widget

```html
<script is:inline
  src="https://api.dmchamp.com/v1/chat-widget/1YB1OxPSRFXvOPTjrFsq">
</script>
```

Integrado en `BaseLayout.astro`. Aparece como burbuja de chat en todas las páginas.

---

## Scripts de build

```bash
npm run build    # Genera /dist completo
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run preview  # Preview del build en localhost:4321
```

El servidor de desarrollo del proyecto corre en **`http://localhost:8888`** en el entorno actual.

---

## Rutas y generación de páginas

Astro usa **file-based routing**:

| Archivo | Ruta generada |
|---------|--------------|
| `src/pages/index.astro` | `/` |
| `src/pages/servicios/index.astro` | `/servicios/` |
| `src/pages/servicios/bodas/index.astro` | `/servicios/bodas/` |
| `src/pages/servicios/bodas/boho.astro` | `/servicios/bodas/boho/` |
| `src/pages/blog/post-slug.mdx` | `/blog/post-slug/` |

---

## Imágenes

Todas las imágenes están en `public/img/` y se referencian como `/img/nombre.ext`.

Formatos usados:
- `.avif` — formato principal (mejor compresión)
- `.webp` — fallback
- `.jpg/.png` — solo para legacy

---

## SEO y meta tags

`BaseLayout.astro` genera automáticamente:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Open Graph (og:title, og:description, og:image, og:type)
- Twitter Card
- `theme-color: #2C5530`

Schema.org (JSON-LD) se inyecta por página en el slot `head` de cada `.astro`.

---

## Servidor de producción

El sitio se sirve con un servidor local en el puerto **8888** que sirve el contenido de `/dist/`.
