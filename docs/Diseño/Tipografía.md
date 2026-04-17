---
tags: [diseño, tipografía, fuentes]
created: 2026-04-17
updated: 2026-04-17
---

# ✍️ Tipografía

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]] | [[Tokens CSS]]

---

## Familias tipográficas

| Rol | Familia | Variable CSS |
|-----|---------|--------------|
| Headings (H1–H6) | **Plus Jakarta Sans** | `--font-head` |
| Body (párrafos, UI) | **Inter** | `--font-body` |

```css
--font-head: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
```

---

## Plus Jakarta Sans — Headings

| Peso | Uso |
|------|-----|
| 400 | Subtítulos ligeros |
| 500 | Subtítulos |
| 600 | Títulos de card (`fc__title`, `sc__title`) |
| 700 | Títulos de sección |
| **800** | H1, H2 principales — peso por defecto en `h1–h6` |

**Características:**
- `letter-spacing: -0.02em` en headings (ajuste negativo)
- `line-height: 1.15` en headings

---

## Inter — Body

| Peso | Uso |
|------|-----|
| 300 | Texto muy sutil |
| 400 | Párrafos base |
| 500 | Labels, UI elements |
| 600 | Botones, badges |
| 700 | Texto enfatizado |

---

## Escala tipográfica

| Elemento | Tamaño | Peso |
|----------|--------|------|
| H1 Hero | `clamp(2.25rem, 5vw, 3.5rem)` | 800 |
| H2 SectionHeader | `clamp(1.75rem, 3.5vw, 2.5rem)` | 800 |
| H2 CtaBarFinal | `clamp(1.5rem, 3vw, 2rem)` | 800 |
| H3 card title | `1.0625rem` – `1.125rem` | 600–700 |
| Párrafo hero | `1.0625rem` | 400 |
| Párrafo sección | `0.9375rem` | 400 |
| Badge/chip | `0.75rem–0.8125rem` | 600–700 |
| Botón | `0.875rem–0.9375rem` | 600 |

---

## Anti-aliasing

```css
body { -webkit-font-smoothing: antialiased; }
```
