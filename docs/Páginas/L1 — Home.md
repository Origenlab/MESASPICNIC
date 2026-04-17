---
tags: [L1, pagina, home]
ruta: /
nivel: L1
estado: publicada
archivo: src/pages/index.astro
created: 2026-04-17
updated: 2026-04-17
---

# 🏠 L1 — Home

→ [[MOC — MESPIC Website]] | [[Estructura del Sitio]]

**Ruta:** `/`  
**Archivo:** `src/pages/index.astro`  
**Estado:** ✅ Publicada y homologada

---

## Meta SEO

| Campo | Valor |
|-------|-------|
| Title | `Renta de Mesas Picnic para Eventos en CDMX \| MESPIC` |
| Description | Renta de bancas de madera para bodas, corporativos y fiestas al aire libre. Entrega y montaje incluidos en CDMX y Edomex. |
| OG Image | `/img/mesa-picnic-boda-elegante-decoracion.avif` |

---

## Estructura de secciones

| # | Sección | Componente | ID |
|---|---------|------------|-----|
| 1 | Hero | [[Hero]] `dark={true}` | — |
| 2 | CtaBar navegación | [[CtaBar]] (default items) | — |
| 3 | Servicios | [[SectionHeader]] + [[ServiceCard]] ×8 | `#servicios` |
| 4 | ¿Por qué MESPIC? | [[SectionHeader]] + [[FeatureCard]] ×4 | `#por-que` |
| 5 | Testimonios | [[SectionHeader]] + [[TestimonialCard]] ×8 | `#testimonios` |
| 6 | Galería | [[SectionHeader]] + [[GallerySection]] | `#galeria` |
| 7 | FAQ | [[SectionHeader]] + [[FaqSection]] | `#faq` |
| 8 | CTA Final | [[CtaBarFinal]] | — |

---

## Hero

```
badge:       "Mobiliario para eventos"
title:       "Renta de Mesas Picnic para Eventos en CDMX"
dark:        true
ctaPrimary:  Cotizar ahora → /cotizar/
ctaSecondary: Ver servicios → /servicios/
metrics:     — (ninguna)
```

---

## Galería

8 imágenes: boda hacienda, corp rooftop, infantil cumple, tema mexicana, boda boho, corp teambuilding, infantil teaparty, tema tropical.

---

## Schema.org

- `LocalBusiness` — datos de negocio completos
- `FAQPage` — 5 preguntas frecuentes

---

## Páginas hijas (L2)

- [[L2 — Servicios]]
- [[L2 — Nosotros]]
- [[L2 — Contacto]]
- [[L2 — Cotizar]]
- [[L2 — Blog]]
