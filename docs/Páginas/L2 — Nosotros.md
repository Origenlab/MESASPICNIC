---
tags: [L2, pagina, nosotros]
ruta: /nosotros/
nivel: L2
estado: pendiente-homologar
archivo: src/pages/nosotros.astro
created: 2026-04-17
updated: 2026-04-17
---

# 👥 L2 — Nosotros

→ [[MOC — MESPIC Website]] | [[L1 — Home]] | [[Estructura del Sitio]]

**Ruta:** `/nosotros/`  
**Archivo:** `src/pages/nosotros.astro`  
**Estado:** ⚠️ **Pendiente de homologar** — usa CSS inline, no usa componentes OrigenLab

---

## Meta SEO

| Campo | Valor |
|-------|-------|
| Title | `Nosotros — MESPIC \| Alquiler de Mobiliario para Eventos` |
| Description | Conoce a MESPIC: más de 8 años fabricando y rentando mobiliario de madera natural para bodas, fiestas y eventos corporativos en CDMX. |

---

## Estructura actual (sin homologar)

| # | Sección | Componente | Nota |
|---|---------|------------|------|
| 1 | Hero | [[Hero]] variante clara | ✅ Usa Hero |
| 2 | Historia | `.content-split` custom | ⚠️ CSS inline |
| 3 | Compromiso | `.content-split.reverse` custom | ⚠️ CSS inline |
| 4 | Equipo | `.content-split` custom | ⚠️ CSS inline |
| 5 | CTA Final | `.cta-final` custom | ⚠️ No usa [[CtaBarFinal]] |

---

## Imágenes usadas

- `/img/equipo-trabajo-mesas-picnic-showroom.avif`
- `/img/carpintero-fabricacion-mesa-picnic-artesanal.avif`
- `/img/equipo-trabajo-renta-mesas-picnic.avif`

---

## Pendientes de homologación

- [ ] Cambiar Hero a `dark={true}` y agregar [[Breadcrumbs]]
- [ ] Reemplazar secciones custom por [[SectionHeader]] + [[FeatureCard]] o layout estándar
- [ ] Reemplazar `.cta-final` custom por [[CtaBarFinal]]
- [ ] Agregar [[CtaBar]] post-hero
- [ ] Agregar [[WaBubble]]
- [ ] Agregar Schema.org `Organization`
