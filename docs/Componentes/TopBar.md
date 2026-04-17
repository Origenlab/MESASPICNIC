---
tags: [componente, topbar, contacto, layout]
archivo: src/components/TopBar.astro
tipo: Barra superior de contacto
created: 2026-04-17
updated: 2026-04-17
---

# 📌 TopBar

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]] | [[BaseLayout]] | [[Header]]

**Archivo:** `src/components/TopBar.astro`  
**Tipo:** Barra de información superior — teléfono, WhatsApp, email, horario, promo  
**Versión:** OrigenLab Standard  
**Configurable desde:** `src/data/topbar.md` (frontmatter)  
**Altura:** `var(--topbar-height)` = `36px`

---

## Configuración (`src/data/topbar.md`)

| Campo | Tipo | Default | Descripción |
|-------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Renderizar o no el TopBar |
| `promo` | `string` | `""` | Mensaje promo con animación pulse (izquierda) |
| `phone` | `string` | `""` | Número de teléfono visible |
| `whatsapp` | `string` | `""` | Número E.164 sin `+` para `wa.me/...` |
| `waMessage` | `string` | `"Hola, quiero información."` | Mensaje pre-llenado WhatsApp |
| `email` | `string` | `""` | Email para `mailto:` |
| `schedule` | `string` | `""` | Texto de horario (centro) |
| `delivery` | `string` | `""` | Nota de entrega (derecha, oculta en tablet) |
| `style` | `"dark"\|"primary"\|"accent"` | `"dark"` | Variante de color |

---

## Layout de tres columnas

```
[izquierda: promo pulse] ── [centro: teléfono | horario] ── [derecha: delivery · email · WhatsApp]
```

---

## Variantes de color

| Valor | Fondo | Texto |
|-------|-------|-------|
| `dark` | `#111827` (casi negro) | Blanco 85% |
| `primary` | `var(--c-primary)` `#2C5530` | Blanco 90% |
| `accent` | `var(--c-accent)` `#C8956C` | `#1a1a1a` |

---

## Responsive

| Breakpoint | Comportamiento |
|------------|---------------|
| > 1024px | Tres columnas completas |
| ≤ 1024px | Se ocultan `.topbar__delivery` y email |
| ≤ 768px | Compacta: promo en fila superior, centro oculto, derecha centrada |
| ≤ 400px | Reduce `font-size` a 0.7rem |

---

## Interacción con Header al hacer scroll

Cuando el usuario hace scroll más allá de `topbar.offsetHeight`, el `Header` ejecuta:
```js
topbar.style.transform = 'translateY(-100%)'
```
La TopBar se desliza hacia arriba y el Header sube a `top: 0`.  
Al volver al tope, la TopBar regresa a su posición original.

---

## Dónde se usa

Importado en [[BaseLayout]] — presente en absolutamente todas las páginas del sitio.
