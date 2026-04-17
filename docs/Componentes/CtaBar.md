---
tags: [componente, ctabar, navegación]
archivo: src/components/CtaBar.astro
tipo: Navegación rápida post-hero
created: 2026-04-17
updated: 2026-04-17
---

# ⚡ CtaBar

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/CtaBar.astro`  
**Tipo:** Strip de navegación rápida — va inmediatamente después del [[Hero]]  
**Versión:** OrigenLab Standard v4

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `items` | `NavItem[]` | Ver items default | Array de ítems de navegación |

### Interfaz NavItem

```typescript
interface NavItem {
  href: string;     // URL de destino
  label: string;    // Texto principal
  sub: string;      // Subtexto descriptivo
  icon: string;     // SVG como string
  cta?: boolean;    // true = variante terracota (último ítem)
}
```

---

## Items por defecto

| # | Label | Sub | Href | CTA |
|---|-------|-----|------|-----|
| 1 | Bodas | Jardines · Haciendas · Terr… | `/servicios/bodas/` | — |
| 2 | Corporativo | Team building · Conferencias | `/servicios/eventos-corporativos/` | — |
| 3 | Fiestas infantiles | Cumpleaños · Baby shower | `/servicios/fiestas-infantiles/` | — |
| 4 | Picnic romántico | Parejas · Aniversarios | `/servicios/picnic-romantico/` | — |
| 5 | Cotizar ahora | Respuesta en minutos | `/cotizar/` | ✅ `cta=true` |

---

## Diseño

- Fondo: `#111` negro total
- Border top/bottom: `rgba(255,255,255,0.05)`
- Hover: línea de acento terracota (`--c-accent: #C8956C`) debajo
- Ícono: fondo `rgba(200,149,108,0.1)`, borde terracota
- Último ítem CTA: fondo levemente terracota

---

## Responsive

- `≤768px`: Scrollable horizontal, ítems de ancho fijo `150px`

---

## Páginas que lo usan

Todas: [[L1 — Home]], [[L2 — Servicios]], [[L3 — Bodas]], y todas las demás usando los items **por defecto**.

> ⚠️ **Decisión de diseño:** Siempre usar los items por defecto. Los items custom sin la prop `sub` rompen el layout visual del componente.
