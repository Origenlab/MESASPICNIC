---
tags: [L2, pagina, servicios]
ruta: /servicios/
nivel: L2
estado: publicada
archivo: src/pages/servicios/index.astro
created: 2026-04-17
updated: 2026-04-17
---

# 📋 L2 — Servicios

→ [[MOC — MESPIC Website]] | [[L1 — Home]] | [[Estructura del Sitio]]

**Ruta:** `/servicios/`  
**Archivo:** `src/pages/servicios/index.astro`  
**Estado:** ✅ Publicada y homologada — **revisión 2026-04-17**

---

## Meta SEO

| Campo | Valor |
|-------|-------|
| Title | `Servicios de Renta de Mesas Picnic para Eventos \| MESPIC — CDMX` |
| Description | 8 servicios especializados de renta de mobiliario de madera: bodas, corporativos, infantiles, picnic romántico, temáticas, festivales y más. |
| OG Image | `/img/mesa-picnic-boda-elegante-decoracion.avif` |

---

## Estructura de secciones

| # | Sección | Componente | ID | Fondo |
|---|---------|------------|----|-------|
| 1 | Breadcrumbs | [[Breadcrumbs]] | — | — |
| 2 | Hero | [[Hero]] `dark={true}` | — | Verde forestal |
| 3 | CtaBar | [[CtaBar]] (default) | — | `#111` |
| 4 | Todos los Servicios | [[SectionHeader]] + [[ServiceCard]] ×8 | `#todos-los-servicios` | Blanco |
| 5 | Qué Incluye | [[SectionHeader]] + [[FeatureCard]] ×4 | `#incluye` | `section-alt` |
| 6 | ¿Por qué MESPIC? | [[SectionHeader]] + [[FeatureCard]] ×4 | `#por-que` | Blanco |
| 7 | Galería | [[SectionHeader]] + [[GallerySection]] | `#galeria` | Blanco |
| 8 | FAQ | [[SectionHeader]] + [[FaqSection]] | `#faq-servicios` | `section-alt` |
| 9 | CTA Final | [[CtaBarFinal]] | — | Verde forestal |

---

## Hero

```
badge:        "8 tipos de servicio"
title:        "Mobiliario de Madera para Cada Tipo de Evento"
dark:         true
metrics:      — (eliminadas por decisión de diseño)
ctaPrimary:   Cotizar ahora → /cotizar/
ctaSecondary: Ver todos los servicios → #todos-los-servicios
```

---

## ServiceCards (8 tarjetas)

| # | Título | Badge | Icon | Href |
|---|--------|-------|------|------|
| 1 | Bodas al Aire Libre | Bodas | 💍 | [[L3 — Bodas]] |
| 2 | Eventos Corporativos | Corporativo | 🏢 | [[L3 — Eventos Corporativos]] |
| 3 | Fiestas Infantiles | Infantil | 🎈 | [[L3 — Fiestas Infantiles]] |
| 4 | Picnic Romántico | Romántico | ❤️ | [[L3 — Picnic Romántico]] |
| 5 | Fiestas Temáticas | Temático | 🎉 | [[L3 — Fiestas Temáticas]] |
| 6 | Reuniones Familiares | Familiar | 🏡 | [[L3 — Reuniones Familiares]] |
| 7 | Festivales y Ferias | Masivo | 🎪 | [[L3 — Festivales y Ferias]] |
| 8 | Sesiones Fotográficas | Foto & Video | 📷 | [[L3 — Sesiones Fotográficas]] |

---

## FeatureCards — "Qué Incluye"

| # | Título |
|---|--------|
| 01 | Entrega en tu Ubicación |
| 02 | Montaje Profesional |
| 03 | Uso sin Límite de Tiempo |
| 04 | Recolección Incluida |

---

## FeatureCards — "¿Por qué MESPIC?"

| # | Título |
|---|--------|
| 01 | Madera 100% Natural |
| 02 | Precio Final sin Sorpresas |
| 03 | Equipo Propio, Sin Subcontratistas |
| 04 | +500 Eventos desde 2017 |

---

## Galería

8 imágenes representativas de diferentes tipos de servicio:
- `boda-hacienda-1.avif`, `mesa-picnic-evento-corporativo-networking.avif`, `infantil-cumple-1.avif`
- `mesa-picnic-pedida-mano-romantica.webp`, `tema-mexicana-1.avif`, `corp-teambuilding-1.avif`
- `mesa-picnic-feria-gastronomica-multitud.avif`, `mesa-picnic-boda-elegante-luces.avif`

---

## FAQ (6 preguntas)

1. ¿Cuál es la diferencia entre los servicios?
2. ¿Puedo combinar varios servicios en un mismo evento?
3. ¿Cuántas bancas necesito para mi evento?
4. ¿Tienen disponibilidad para fines de semana?
5. ¿Pueden montar en cualquier ubicación de CDMX?
6. ¿El servicio de picnic romántico incluye decoración?

---

## Schema.org

- `Service` — con serviceType array de 6 especialidades
- `FAQPage` — 3 preguntas

---

## Páginas hijas (L3)

- [[L3 — Bodas]]
- [[L3 — Eventos Corporativos]]
- [[L3 — Fiestas Infantiles]]
- [[L3 — Picnic Romántico]]
- [[L3 — Fiestas Temáticas]]
- [[L3 — Reuniones Familiares]]
- [[L3 — Festivales y Ferias]]
- [[L3 — Sesiones Fotográficas]]

---

## Notas de desarrollo

> **2026-04-17** — Se eliminó la sección de Testimonios (decisión editorial). Se eliminaron métricas del Hero (homologación con index). CtaBar usa items por defecto (con SVGs y prop `sub`).
