---
tags: [componente, sectionheader, ui]
archivo: src/components/SectionHeader.astro
tipo: Encabezado de sección
created: 2026-04-17
updated: 2026-04-17
---

# 📰 SectionHeader

→ [[MOC — MESPIC Website]] | [[Sistema de Diseño]]

**Archivo:** `src/components/SectionHeader.astro`  
**Tipo:** Encabezado de sección — 2 columnas. Usado en TODAS las secciones del sitio.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `tag` | `'h2'\|'h3'\|...'h6'` | `'h2'` | Tag HTML del título |
| `title` | `string` | — **requerido** | Título de la sección |
| `paragraph1` | `string` | — **requerido** | Párrafo descriptivo principal |
| `paragraph2` | `string` | `undefined` | Segundo párrafo descriptivo |
| `badge` | `string` | `undefined` | Chip verde con punto antes del título |
| `stats` | `Array<{value, label}>` | `undefined` | Métricas numéricas bajo los párrafos |

---

## Layout interno

```
sh__grid (2 columnas)
├── sh__col1
│   ├── [sh__badge] — opcional
│   ├── Tag.sh__title
│   └── sh__accent (línea degradado verde→terracota)
└── sh__col2
    ├── p.sh__text (paragraph1)
    ├── [p.sh__text] (paragraph2) — opcional
    └── [sh__stats] — opcional
        ├── sh__stat (value + label)
        └── ...
```

---

## Uso correcto

```astro
<SectionHeader
  tag="h2"
  badge="Nuestros Servicios"
  title="Todos Nuestros Servicios"
  paragraph1="Descripción principal de la sección..."
  paragraph2="Párrafo complementario opcional..."
  stats={[
    { value: '8',     label: 'servicios especializados' },
    { value: '500+',  label: 'eventos realizados' },
    { value: 'CDMX',  label: 'zona de cobertura' },
  ]}
/>
```

---

## Regla de jerarquía SEO

- **Solo H1 en [[Hero]]** — el SectionHeader siempre usa H2 o inferior
- Usar `tag="h2"` para secciones principales de página
- Usar `tag="h3"` para sub-secciones

---

## Páginas que lo usan

Todas las páginas con secciones: [[L1 — Home]], [[L2 — Servicios]], [[L3 — Bodas]], y todas las demás.
