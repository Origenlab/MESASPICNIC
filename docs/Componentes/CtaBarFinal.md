---
tags: [componente, ctabarfinal, conversión]
archivo: src/components/CtaBarFinal.astro
tipo: Barra de conversión final
created: 2026-04-17
updated: 2026-04-17
---

# 🟢 CtaBarFinal

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/CtaBarFinal.astro`  
**Tipo:** Barra de conversión — última sección antes del [[Footer]]  
**Versión:** OrigenLab Standard

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `headline` | `string` | `"¿Listo para tu evento?"` | Título del CTA |
| `subtext` | `string` | `"Cotiza sin compromiso..."` | Subtexto |
| `phone` | `string` | `"55 6432 8954"` | Número de teléfono visible |
| `whatsapp` | `string` | `"5564328954"` | Número para el link wa.me |
| `waMessage` | `string` | `"Hola, quiero cotizar..."` | Mensaje pre-llenado de WhatsApp |
| `cotizarHref` | `string` | `"/cotizar/"` | URL del botón "Cotizar en línea" |

---

## Botones que renderiza

| Botón | Estilo | Acción |
|-------|--------|--------|
| WhatsApp | Verde `#25D366` | Abre `wa.me/whatsapp?text=...` |
| Teléfono | Blanco translúcido | `tel:+52whatsapp` |
| Cotizar en línea | Blanco sólido | Link a `cotizarHref` |

---

## Fondo

`linear-gradient(135deg, #1B3B20, #2C5530, #1D4A25)` — mismo verde forestal que el Hero dark.

---

## Páginas que lo usan

Todas: [[L1 — Home]], [[L2 — Servicios]], [[L3 — Bodas]], y todas las páginas del sitio como sección final.
