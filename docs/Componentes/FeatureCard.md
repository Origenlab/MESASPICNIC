---
tags: [componente, featurecard, ui, card]
archivo: src/components/FeatureCard.astro
tipo: Tarjeta de diferenciador
created: 2026-04-17
updated: 2026-04-17
---

# 🔢 FeatureCard

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/FeatureCard.astro`  
**Tipo:** Card de ventaja/diferenciador con número grande decorativo  
**Versión:** OrigenLab Standard v2

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | — **requerido** | Título de la ventaja |
| `description` | `string` | — **requerido** | Descripción de la ventaja |
| `index` | `number` | `undefined` | Posición (0, 1, 2…) — muestra "01", "02"… de fondo |

---

## Estructura visual

```
.fc (card blanca con borde)
├── [.fc__num] — "01" en verde opacidad 12% — opcional
└── .fc__body
    ├── h3.fc__title
    └── p.fc__desc
```

---

## Cuándo usar `index`

Pasar `index={0}`, `index={1}`... cuando las cards están en secuencia y se quiere mostrar la numeración decorativa. Ideal en secciones "Qué incluye" y "Por qué elegirnos".

---

## Páginas que lo usan

- [[L1 — Home]] — sección "¿Por qué MESPIC?" (4 cards con index)
- [[L2 — Servicios]] — "Qué Incluye" (4 con index) y "¿Por qué MESPIC?" (4 con index)
- [[L3 — Bodas]] — "Qué incluye" y "Referencia por invitados" (sin index)
