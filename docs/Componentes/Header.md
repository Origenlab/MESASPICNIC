---
tags: [componente, header, navegación, layout]
archivo: src/components/Header.astro
tipo: Navegación principal
created: 2026-04-17
updated: 2026-04-17
---

# 🧭 Header

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]] | [[BaseLayout]] | [[TopBar]]

**Archivo:** `src/components/Header.astro`  
**Tipo:** Header sticky con glassmorphism, nav desktop/móvil, dropdowns  
**Versión:** OrigenLab Standard  
**Configurable desde:** `src/data/header.md` (frontmatter)

---

## Configuración (`src/data/header.md`)

| Campo | Tipo | Default | Descripción |
|-------|------|---------|-------------|
| `brand` | `string` | `"MesPic"` | Nombre en el logotipo |
| `brandAccent` | `string` | `"·"` | Carácter de acento del logo |
| `logoHref` | `string` | `"/"` | Destino del logo |
| `nav` | `NavItem[]` | `[]` | Items de navegación principal |
| `cta.enabled` | `boolean` | `false` | Mostrar botón CTA |
| `cta.label` | `string` | `""` | Texto del botón CTA |
| `cta.href` | `string` | `""` | URL del botón CTA |
| `scrollEffect` | `boolean` | `true` | Activa shadow al hacer scroll |
| `blurBg` | `boolean` | `true` | Glassmorphism (backdrop-filter blur) |

### Interface `NavItem`

```ts
interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
```

---

## Estructura visual

```
<header.hdr>
├── .hdr__inner
│   ├── a.hdr__logo           — Logotipo con acento de color
│   ├── nav.hdr__nav          — Navegación desktop (oculta en ≤768px)
│   │   └── ul.hdr__list
│   │       └── li.hdr__has-sub?
│   │           ├── a.hdr__link (+ .hdr__link--active)
│   │           └── ul.hdr__dropdown  — Submenu desplegable
│   ├── a.hdr__cta            — Botón CTA (opcional)
│   └── button.hdr__toggle    — Hamburguesa (visible en ≤768px)
<div.hdr__overlay>            — Overlay móvil
<nav.hdr__panel>              — Panel slide-in móvil
    ├── .hdr__panel-head
    ├── ul.hdr__panel-list    — Links con acordeón [data-sub]
    └── .hdr__panel-foot      — CTA móvil (opcional)
```

---

## Comportamiento

**Scroll effect:** Al pasar `var(--topbar-height)` px de scroll:
- Se añade `.hdr--scrolled` (box-shadow suave)
- `TopBar` se oculta con `transform: translateY(-100%)`
- El `hdr-stack` sube a `top: 0`

**Active link detection:** Compara `Astro.url.pathname` con `href` de cada item. Marca como activo si `pathname.startsWith(href)` o si algún `children.href` coincide.

**Mobile panel:** Slide desde la derecha (85% ancho, máx 360px). `body.overflow:hidden` mientras está abierto. Se cierra al hacer clic en overlay, botón X, o cualquier enlace.

**Dropdowns desktop:** CSS puro con `hover`. Puente invisible de 12px evita que el submenu desaparezca al mover el cursor.

---

## Clases CSS clave

| Clase | Descripción |
|-------|-------------|
| `.hdr--blur` | Glassmorphism activo (rgba + backdrop-filter) |
| `.hdr--scrolled` | Shadow al hacer scroll |
| `.hdr__link--active` | Link activo con subrayado verde |
| `.hdr__toggle--open` | Hamburguesa → X animada |
| `.hdr__panel--open` | Panel móvil visible |
| `.hdr__panel-subtoggle--open` | Acordeón expandido |

---

## Responsive

| Breakpoint | Comportamiento |
|------------|---------------|
| > 768px | Nav desktop visible, hamburguesa oculta |
| ≤ 768px | Nav desktop oculta, hamburguesa visible, panel activo |
| ≤ 400px | Panel ocupa 100% del ancho |

---

## Dónde se usa

Importado en [[BaseLayout]] — presente en absolutamente todas las páginas del sitio.
