---
tags: [componente, testimonial, reseña, social-proof]
archivo: src/components/TestimonialCard.astro
tipo: Tarjeta de reseña
created: 2026-04-17
updated: 2026-04-17
---

# ⭐ TestimonialCard

→ [[MOC — MESPIC Website]]

**Archivo:** `src/components/TestimonialCard.astro`

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `name` | `string` | — requerido | Nombre del cliente |
| `event` | `string` | — requerido | Tipo de evento y alcaldía |
| `quote` | `string` | — requerido | Cita del testimonio |
| `stars` | `number` | `5` | Estrellas 1–5 |
| `image` | `string` | `undefined` | Avatar foto (si no hay, genera iniciales) |
| `date` | `string` | `undefined` | Fecha del evento ("Feb 2026") |

## Páginas que lo usan

- [[L1 — Home]] — 8 testimonios en sección `#testimonios`
- [[L2 — Servicios]] — ❌ **Eliminado** por decisión editorial (2026-04-17)
