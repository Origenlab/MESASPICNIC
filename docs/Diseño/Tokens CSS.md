---
tags: [diseño, tokens, css, variables]
archivo: src/styles/global.css
created: 2026-04-17
updated: 2026-04-17
---

# 🔧 Tokens CSS

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]] | [[Paleta de Colores]] | [[Tipografía]]

**Archivo:** `src/styles/global.css`  
Importado en [[BaseLayout]] y disponible en todos los componentes.

---

## Variables globales (`:root`)

```css
:root {
  /* ── Colores ── */
  --c-primary:       #2C5530;
  --c-primary-light: #3D7A45;
  --c-primary-dark:  #1B3B20;
  --c-secondary:     #8B6F4E;
  --c-accent:        #C8956C;
  --c-accent-light:  #E8C9A8;
  --c-bg:            #FEFDFB;
  --c-bg-alt:        #F7F4F0;
  --c-bg-hero:       #F2EDE7;
  --c-text:          #1C1917;
  --c-text-muted:    #78716C;
  --c-border:        #E7E0D8;
  --c-star:          #F59E0B;
  --c-success:       #22C55E;

  /* ── Tipografía ── */
  --font-head: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* ── Layout ── */
  --header-height:   70px;
  --topbar-height:   36px;
  --container:       1400px;
  --section-gap:     5rem;

  /* ── Radios ── */
  --radius-sm:  8px;
  --radius-md:  12px;
  --radius-lg:  20px;

  /* ── Easing ── */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Clases utilitarias globales

```css
.container   { max-width: 1400px; margin: 0 auto; padding: 0 1.5rem; }
.section     { padding: 5rem 0; }
.section-alt { background: var(--c-bg-alt); }

/* Botones */
.btn         { display: inline-flex; padding: 0.875rem 2rem; border-radius: var(--radius-lg); font-weight: 600; }
.btn-primary { background: var(--c-primary); color: #fff; }
.btn-outline  { border: 2px solid var(--c-border); color: var(--c-text); }
.btn-wa      { background: #25D366; color: #fff; }

/* Header fijo */
.hdr-stack   { position: fixed; top: var(--topbar-height); z-index: 1000; }
```

---

## Reglas de reset

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html  { scroll-behavior: smooth; scroll-padding-top: var(--header-height); }
a     { text-decoration: none; color: inherit; }
ul, ol { list-style: none; }
img   { max-width: 100%; height: auto; display: block; }
```

---

## Responsive global

```css
@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
}
```
