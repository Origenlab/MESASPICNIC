---
tags: [arquitectura, estructura, sitemap]
nivel: arquitectura
created: 2026-04-17
updated: 2026-04-17
---

# 🗺️ Estructura del Sitio

→ [[MOC — MESPIC Website]] | [[Stack Técnico]] | [[Sistema de Diseño]]

---

## Diagrama de jerarquía

```mermaid
graph TD
    L1["🏠 L1 — Home<br/>/"]
    
    L1 --> L2S["📋 L2 — Servicios<br/>/servicios/"]
    L1 --> L2N["👥 L2 — Nosotros<br/>/nosotros/"]
    L1 --> L2C["📞 L2 — Contacto<br/>/contacto/"]
    L1 --> L2Q["💬 L2 — Cotizar<br/>/cotizar/"]
    L1 --> L2B["📝 L2 — Blog<br/>/blog/"]

    L2S --> L3BO["💍 L3 — Bodas<br/>/servicios/bodas/"]
    L2S --> L3EC["🏢 L3 — Corporativo<br/>/servicios/eventos-corporativos/"]
    L2S --> L3FI["🎈 L3 — Fiestas Infantiles<br/>/servicios/fiestas-infantiles/"]
    L2S --> L3PR["❤️ L3 — Picnic Romántico<br/>/servicios/picnic-romantico/"]
    L2S --> L3FT["🎉 L3 — Fiestas Temáticas<br/>/servicios/fiestas-tematicas/"]
    L2S --> L3RF["🏡 L3 — Reuniones Familiares<br/>/servicios/reuniones-familiares/"]
    L2S --> L3FF["🎪 L3 — Festivales<br/>/servicios/festivales/"]
    L2S --> L3SF["📷 L3 — Sesiones Fotográficas<br/>/servicios/sesiones-fotograficas/"]

    L3BO --> L4BB["Boho<br/>/bodas/boho/"]
    L3BO --> L4BC["Clásica<br/>/bodas/clasica/"]
    L3BO --> L4BI["Íntima<br/>/bodas/intima/"]
    L3BO --> L4BR["Rústica<br/>/bodas/rustica/"]

    L3EC --> L4CA["Activaciones<br/>/corp/activaciones/"]
    L3EC --> L4CC["Comidas<br/>/corp/comidas/"]
    L3EC --> L4CF["Conferencias<br/>/corp/conferencias/"]
    L3EC --> L4CT["Team Building<br/>/corp/team-building/"]
```

---

## Inventario de páginas

### L1 — Nivel raíz

| Ruta | Archivo fuente | Título SEO | Estado |
|------|---------------|-----------|--------|
| `/` | `src/pages/index.astro` | Renta de Mesas Picnic para Eventos en CDMX \| MESPIC | ✅ |

### L2 — Secciones principales

| Ruta | Archivo fuente | Título SEO | Estado |
|------|---------------|-----------|--------|
| `/servicios/` | `src/pages/servicios/index.astro` | Servicios de Renta de Mesas Picnic \| MESPIC — CDMX | ✅ |
| `/nosotros/` | `src/pages/nosotros.astro` | Nosotros — MESPIC | ⚠️ Pendiente homologar |
| `/contacto/` | `src/pages/contacto.astro` | Contacto — MESPIC | ✅ |
| `/cotizar/` | `src/pages/cotizar.astro` | Cotizar — MESPIC | ✅ |
| `/blog/` | `src/pages/blog/index.astro` | Blog — MESPIC | ✅ |
| `/aviso-de-privacidad/` | `src/pages/aviso-de-privacidad.astro` | Aviso de Privacidad | ✅ |

### L3 — Servicios

| Ruta | Archivo fuente | Estado |
|------|---------------|--------|
| `/servicios/bodas/` | `src/pages/servicios/bodas/index.astro` | ✅ |
| `/servicios/eventos-corporativos/` | `src/pages/servicios/eventos-corporativos/index.astro` | ✅ |
| `/servicios/fiestas-infantiles/` | `src/pages/servicios/fiestas-infantiles.astro` | ✅ |
| `/servicios/picnic-romantico/` | `src/pages/servicios/picnic-romantico.astro` | ✅ |
| `/servicios/fiestas-tematicas/` | `src/pages/servicios/fiestas-tematicas.astro` | ✅ |
| `/servicios/reuniones-familiares/` | `src/pages/servicios/reuniones-familiares.astro` | ✅ |
| `/servicios/festivales/` | `src/pages/servicios/festivales.astro` | ✅ |
| `/servicios/sesiones-fotograficas/` | `src/pages/servicios/sesiones-fotograficas.astro` | ✅ |

### L4 — Sub-servicios de Bodas

| Ruta | Archivo fuente | Estado |
|------|---------------|--------|
| `/servicios/bodas/boho/` | `src/pages/servicios/bodas/boho.astro` | ✅ |
| `/servicios/bodas/clasica/` | `src/pages/servicios/bodas/clasica.astro` | ✅ |
| `/servicios/bodas/intima/` | `src/pages/servicios/bodas/intima.astro` | ✅ |
| `/servicios/bodas/rustica/` | `src/pages/servicios/bodas/rustica.astro` | ✅ |

### L4 — Sub-servicios de Corporativo

| Ruta | Archivo fuente | Estado |
|------|---------------|--------|
| `/servicios/eventos-corporativos/activaciones/` | `src/pages/servicios/eventos-corporativos/activaciones.astro` | ✅ |
| `/servicios/eventos-corporativos/comidas/` | `src/pages/servicios/eventos-corporativos/comidas.astro` | ✅ |
| `/servicios/eventos-corporativos/conferencias/` | `src/pages/servicios/eventos-corporativos/conferencias.astro` | ✅ |
| `/servicios/eventos-corporativos/team-building/` | `src/pages/servicios/eventos-corporativos/team-building.astro` | ✅ |

### Blog — Artículos

| Ruta | Archivo fuente |
|------|---------------|
| `/blog/renta-mesas-picnic-bodas-cdmx/` | `src/pages/blog/renta-mesas-picnic-bodas-cdmx.mdx` |
| `/blog/ideas-decoracion-mesas-picnic-fiestas-infantiles/` | `src/pages/blog/ideas-decoracion-mesas-picnic-fiestas-infantiles.mdx` |
| `/blog/cuantas-mesas-picnic-necesitas-segun-invitados/` | `src/pages/blog/cuantas-mesas-picnic-necesitas-segun-invitados.mdx` |
| `/blog/decoracion-mesas-picnic-fiestas-infantiles/` | `src/pages/blog/decoracion-mesas-picnic-fiestas-infantiles.mdx` |
| `/blog/mesas-picnic-eventos-corporativos/` | `src/pages/blog/mesas-picnic-eventos-corporativos.mdx` |

---

## Convención de niveles

| Nivel | Descripción | Ejemplo |
|-------|-------------|---------|
| **L1** | Home — única página raíz | `/` |
| **L2** | Secciones principales del sitio | `/servicios/` |
| **L3** | Páginas de categoría de servicio | `/servicios/bodas/` |
| **L4** | Páginas de especialidad o sub-estilo | `/servicios/bodas/boho/` |

---

## Pendientes de arquitectura

- [ ] Homologar `/nosotros/` con componentes OrigenLab (Hero dark, CtaBarFinal, etc.)
- [ ] Crear páginas de Catálogo (`/catalogo/`) referenciadas en bodas L3
- [ ] Crear páginas de Paquetes (`/paquetes/`) referenciadas en bodas L3
- [ ] Verificar que todas las L4 de corporativo estén homologadas
