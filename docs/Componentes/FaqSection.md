---
tags: [componente, faq, acordeón, formulario]
archivo: src/components/FaqSection.astro
tipo: Sección FAQ con formulario de contacto
created: 2026-04-17
updated: 2026-04-17
---

# ❓ FaqSection

→ [[MOC — MESPIC Website]]

**Archivo:** `src/components/FaqSection.astro`  
**Tipo:** Acordeón de preguntas frecuentes + formulario lateral de contacto

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `items` | `Array<{question, answer}>` | — requerido | Preguntas y respuestas |
| `phone` | `string` | — | Teléfono visible en sidebar |
| `whatsapp` | `string` | — | Número wa.me |
| `schedule` | `string` | — | Horario de atención |

## Layout

2 columnas: acordeón FAQ izquierda + sidebar con datos de contacto + formulario derecha

## Número de FAQs por página

| Página | Nº preguntas |
|--------|-------------|
| [[L1 — Home]] | 8 |
| [[L2 — Servicios]] | 6 |
| [[L3 — Bodas]] | 6 |
| Demás páginas | 4–6 |
