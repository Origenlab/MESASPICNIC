---
source_file: "MESASPICNIC/Setup Local"
type: "reference"
community: "Desarrollo Local"
tags:
  - graphify/reference
  - community/Desarrollo_Local
  - proyecto/MESASPICNIC
---

# Rutas y Comandos Locales — MESASPICNIC

**Proyecto:** MESASPICNIC  
**Fecha:** 2026-04-18

---

## Ruta del proyecto

```
/Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC
```

## Framework

- **Astro** con MDX y Sitemap
- Node 20
- Site: `https://mesaspicnic.com`

## Comandos principales

```bash
# Iniciar servidor de desarrollo
cd /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC
npm run dev
# → http://localhost:4321

# Build de producción
npm run build
# → genera dist/

# Preview del build
npm run preview
```

## Estructura de carpetas clave

```
src/
  components/   # Header, Footer, Hero, etc.
  layouts/      # BaseLayout.astro, BlogLayout.astro
  pages/        # Todas las rutas del sitio
  styles/       # global.css
  data/         # header.md (config nav)
public/
  img/          # Todas las imágenes (webp, avif, png)
```

#graphify/reference #community/Desarrollo_Local #proyecto/MESASPICNIC
