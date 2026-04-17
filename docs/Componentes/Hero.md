---
tags: [componente, hero, sección, estandar]
archivo: src/components/Hero.astro
tipo: Sección principal
created: 2026-04-17
updated: 2026-04-17
---

# 🦸 Hero

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/Hero.astro`  
**Tipo:** Sección principal — siempre la primera sección de cada página  
**Versión:** OrigenLab Standard v3

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `badge` | `string` | `"Renta de Mobiliario"` | Chip superior sobre el título |
| `title` | `string` | — **requerido** | H1 de la página |
| `description` | `string` | — **requerido** | Párrafo introductorio bajo el título |
| `ctaPrimary` | `{label, href}` | `Cotizar ahora → /cotizar/` | Botón CTA principal |
| `ctaSecondary` | `{label, href}` | `Ver servicios → /servicios/` | Botón CTA secundario |
| `seoParagraph1` | `string` | — **requerido** | Párrafo SEO columna derecha |
| `seoParagraph2` | `string` | — **requerido** | Párrafo SEO columna derecha |
| `dark` | `boolean` | `false` | Activa gradiente forestal verde |
| `metrics` | `Array<{value, label}>` | `undefined` | Métricas debajo de los CTAs |

---

## ⚠️ Reglas de Estándar Global (2026-04-17)

> Estas reglas aplican a **TODAS** las páginas del sitio sin excepción. Son un estándar firmado.

### Regla 1 — `dark={true}` obligatorio
Todos los heroes del sitio deben usar `dark={true}`. La variante clara (`dark={false}`) está **descontinuada**. Referencia: homepage `/`.

### Regla 2 — CTAs prohibidos en el hero
Los siguientes labels de CTA están **PROHIBIDOS** en cualquier hero del sitio:
- ❌ `"Ver catálogo de mesas →"`
- ❌ `"Ver paquetes"`
- ❌ `"Ver catálogo →"`

Los CTAs permitidos son:
- ✅ `"Cotizar ahora →"` → `/cotizar/`
- ✅ `"Ver servicios"` → `/servicios/`
- ✅ Variantes contextuales equivalentes (ej. `"Ver artículos →"` en blog)

**Why:** El hero del index es la referencia canónica. Mezclar links al catálogo y paquetes dentro del hero rompe el flujo de conversión y la consistencia visual del sitio.

---

## Variantes

### Variante oscura (`dark={true}`) ← **ÚNICA VARIANTE APROBADA**
- Fondo: `linear-gradient(155deg, #1B3B20, #2C5530, #1D4A25)`
- Texto: blanco
- Badge: fondo blanco translúcido
- Usada en: todas las páginas del sitio

### Variante clara (`dark={false}`) ← **DESCONTINUADA**
- No usar. Existía antes del homologado del 2026-04-17.

---

## Layout interno

```
hero__grid (2 columnas)
├── hero__col1
│   ├── hero__badge
│   ├── h1.hero__title
│   ├── p.hero__desc
│   ├── [hero__ctas — incluye btn-primary + btn-outline]  ← eliminado en v3
│   └── [hero__metrics] — opcional
└── hero__col2
    ├── p.hero__seo-text (seoParagraph1)
    └── p.hero__seo-text (seoParagraph2)
```

> ⚠️ **Nota:** Los CTAs (`hero__ctas`) se eliminaron del template en una revisión reciente. Los botones ya no se renderizan aunque se pasen las props `ctaPrimary` y `ctaSecondary`.

---

## Responsive

| Breakpoint | Comportamiento |
|------------|---------------|
| `≤1024px` | Gap reducido, título más pequeño |
| `≤768px` | Grid a 1 columna, CTAs en columna |

---

## Padding top

```css
padding-top: calc(var(--topbar-height) + var(--header-height) + 5rem);
/* = 36px + 70px + 5rem = ~186px */
```

Algunas páginas L3 sobreescriben con:
```css
:global(.hero) {
  padding-top: calc(36px + 70px + 2.5rem + 3rem);
}
```

---

## Páginas que lo usan

- [[L1 — Home]] — `dark={true}` sin métricas
- [[L2 — Servicios]] — `dark={true}` sin métricas
- [[L2 — Nosotros]] — `dark={false}` clara
- [[L3 — Bodas]] — `dark={false}` clara
- [[L3 — Eventos Corporativos]] — `dark={false}` clara
- Todas las L3 y L4
