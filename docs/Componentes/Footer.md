---
tags: [componente, footer, navegación, layout]
archivo: src/components/Footer.astro
tipo: Pie de página
created: 2026-04-17
updated: 2026-04-17
---

# 🔻 Footer

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]] | [[BaseLayout]]

**Archivo:** `src/components/Footer.astro`  
**Tipo:** Footer de 4 columnas, oscuro neutro, sin animaciones  
**Versión:** OrigenLab Standard v2

---

## Estructura

```
<footer.ft>
├── .ft__main (.container)
│   └── .ft__grid (4 columnas)
│       ├── .ft__brand        — Logo + tagline + contacto (col 1.5fr)
│       ├── .ft__col          — Servicios (8 links L3)
│       ├── .ft__col          — Catálogo (6 items) + Paquetes (3 items)
│       └── .ft__col          — Empresa + Cobertura
└── .ft__bar
    └── .ft__bar-inner        — Copyright + Aviso de privacidad
```

---

## Columnas de navegación

**Servicios:**
- Bodas → `/servicios/bodas/`
- Corporativos → `/servicios/eventos-corporativos/`
- Infantiles → `/servicios/fiestas-infantiles/`
- Picnic Romántico → `/servicios/picnic-romantico/`
- Fiestas Temáticas → `/servicios/fiestas-tematicas/`
- Reuniones Familiares → `/servicios/reuniones-familiares/`
- Festivales y Ferias → `/servicios/festivales/`
- Sesiones Fotográficas → `/servicios/sesiones-fotograficas/`

**Catálogo:** Mesa Estándar, Grande, Infantil, Premium, Set Completo, Rústica  
**Paquetes:** Básico (24p), Estándar (36p), Premium (60p)  
**Empresa:** Nosotros, Blog, Cotizar, Contacto  
**Cobertura:** CDMX, Estado de México

> ⚠️ `/catalogo/` y `/paquetes/` aún no tienen páginas creadas — están referenciadas en el Footer pero no existen en `src/pages/`.

---

## Contacto en columna de marca

| Elemento | Valor |
|----------|-------|
| Teléfono | `tel:+525564328954` → "55 6432 8954" |
| WhatsApp | `wa.me/5564328954` — color `#25D366` |
| Horario | Lun–Dom 8:00–20:00 |

---

## Estilos

| Propiedad | Valor |
|-----------|-------|
| Fondo principal | `#18181B` (zinc-900) |
| Texto secundario | `#A1A1AA` |
| Borde bottom bar | `#27272A` |
| Copyright | `#52525B` |
| Logo dot | `var(--c-accent)` `#C8956C` |
| Grid | `1.5fr 1fr 1fr 1fr` |

---

## Responsive

| Breakpoint | Grid |
|------------|------|
| > 1024px | 4 columnas (`1.5fr 1fr 1fr 1fr`) |
| ≤ 1024px | 2 columnas; `.ft__brand` ocupa ancho completo |
| ≤ 640px | 1 columna; bottom bar en stack vertical centrado |

---

## Bottom bar

```html
© {year} MESPIC — Renta de Mesas Picnic para Eventos. Todos los derechos reservados.
[Aviso de privacidad] · [Contacto]
```

El año es dinámico: `new Date().getFullYear()`.

---

## Dónde se usa

Importado en [[BaseLayout]] — presente en absolutamente todas las páginas del sitio.
