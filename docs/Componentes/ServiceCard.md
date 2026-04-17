---
tags: [componente, servicecard, ui, card]
archivo: src/components/ServiceCard.astro
tipo: Tarjeta de servicio
created: 2026-04-17
updated: 2026-04-17
---

# 🃏 ServiceCard

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/ServiceCard.astro`  
**Tipo:** Tarjeta con imagen, badge, título, descripción y CTA  
**Versión:** v3 — sin ícono visible, sin animaciones de hover

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | — **requerido** | Título de la tarjeta |
| `description` | `string` | — **requerido** | Descripción del servicio |
| `image` | `string` | — **requerido** | Ruta de la imagen (`/img/...`) |
| `href` | `string` | — **requerido** | URL de destino al hacer clic |
| `btnLabel` | `string` | `"Ver detalles"` | Texto del botón CTA |
| `badge` | `string` | `undefined` | Chip sobre la imagen (ej: "Bodas") |
| `icon` | `string` | `undefined` | Emoji del servicio (prop recibida, no renderizada) |

---

## Estructura visual

```
.sc (card)
├── .sc__img (aspect-ratio 4:3)
│   ├── img (lazy, 400×300)
│   └── [.sc__badge] — chip sobre imagen
└── .sc__body (border-top 3px verde)
    ├── h3.sc__title
    ├── p.sc__desc
    └── a.sc__btn (verde, ancho 100%)
```

---

## Uso en grid

```astro
<div class="grid-4">
  <ServiceCard
    title="Bodas al Aire Libre"
    description="..."
    image="/img/mesa-picnic-boda-elegante-decoracion.avif"
    href="/servicios/bodas/"
    btnLabel="Mesas para bodas"
    badge="Bodas"
    icon="💍"
  />
</div>
```

---

## Páginas que lo usan

- [[L1 — Home]] — 8 cards con badge e icon
- [[L2 — Servicios]] — 8 cards con badge e icon
- [[L3 — Bodas]] — 4 cards de estilos (→ L4), sin badge
