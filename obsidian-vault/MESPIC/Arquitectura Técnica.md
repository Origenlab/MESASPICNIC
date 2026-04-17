# ⚙️ Arquitectura Técnica

> Parte de → [[🏠 MESPIC — Índice Principal]]

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Framework** | [Astro](https://astro.build) v4.16.18 |
| **Lenguaje plantillas** | Astro (`.astro`) + MDX (`.mdx`) |
| **Blog/Contenido** | MDX via `@astrojs/mdx` ^3.1.9 |
| **Sitemap** | `@astrojs/sitemap` ^3.2.1 |
| **CSS legacy (dist)** | Webpack (webpack.common.js / dev / prod) |
| **Tipografía** | Google Fonts (Plus Jakarta Sans + Inter) |
| **Iconos** | Font Awesome 6.5.1 (CDN) |
| **Dominio** | `mesaspicnic.com` (CNAME en repo) |
| **Deploy** | Sitio estático (carpeta `/dist`) |

---

## Estructura de Archivos del Proyecto

```
MESASPICNIC/
├── src/
│   ├── pages/          ← Páginas del sitio
│   ├── components/     ← Componentes reutilizables
│   ├── layouts/        ← Layout base (BaseLayout.astro)
│   ├── data/           ← Datos de configuración (header.md, topbar.md)
│   └── styles/         ← CSS global
├── public/             ← Assets estáticos públicos
├── img/                ← Imágenes del sitio (.avif, .webp)
├── css/                ← CSS compilado (components.min.css)
├── js/                 ← JS compilado
├── dist/               ← Build de producción
├── blog/               ← HTML de blog (dist)
├── servicios/          ← HTML de servicios (dist)
├── astro.config.mjs    ← Configuración Astro
├── package.json        ← Dependencias npm
├── tsconfig.json       ← TypeScript config
├── robots.txt          ← Indexación SEO
├── sitemap.xml         ← Mapa del sitio XML
├── CNAME               ← Apunta a mesaspicnic.com
└── SEO-KEYWORDS.md     ← Estrategia de keywords
```

---

## Configuración Astro

```js
// astro.config.mjs
site: "https://mesaspicnic.com"
integrations: [sitemap(), mdx()]
```

---

## Layout Base (BaseLayout.astro)

El layout base incluye:
- `<TopBar>` — barra superior con info de contacto
- `<Header>` — navegación principal con sticky glassmorphism
- `<main>` — slot de contenido
- `<Footer>` — pie de página con columnas
- SEO meta tags (OG, Twitter, canonical)
- Schema.org JSON-LD
- Theme color: `#2C5530`

**Props aceptadas:**
| Prop | Tipo | Default |
|---|---|---|
| `title` | string | — |
| `description` | string | default SEO text |
| `canonical` | string | auto-generado |
| `ogImage` | string | `/img/mesa-picnic-boda-elegante-decoracion.avif` |

---

## Fuentes

- **Headings:** Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Body/UI:** Inter (300, 400, 500, 600, 700)

---

## Integración SEO

- `robots.txt` — index/follow habilitado
- `sitemap.xml` — generado por `@astrojs/sitemap`
- Schema.org `LocalBusiness` + `Service` + `FAQPage` en páginas clave
- Open Graph (Facebook) configurado
- Twitter Card (summary_large_image)
- Canonical URLs automáticos

---

#mespic #tecnico #arquitectura #astro
