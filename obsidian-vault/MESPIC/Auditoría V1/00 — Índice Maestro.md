# Auditoría Integral MESPIC — Versión 1

**Fecha:** 2026-04-18
**Auditor:** Consultoría SEO/UX/CRO Senior
**Alcance:** Sitio completo v1 pre-lanzamiento (`mesaspicnic.com`)
**Stack:** Astro 4.16 + Markdown + Sitemap + MDX

---

## Contexto ejecutivo

MESPIC está a punto de lanzar la v1 del sitio. El producto es sólido: arquitectura Astro bien pensada, 42 URLs rastreables, componentes reutilizables, JSON-LD de LocalBusiness/FAQ/BlogPosting, formatos de imagen modernos (AVIF/WebP al 94%), y un embudo navegable (Servicios → Catálogo → Paquetes → Cotizar). La base para posicionar en "mesas picnic CDMX" está puesta.

Sin embargo, la auditoría detectó **61 hallazgos** repartidos en siete ejes. Los tres que mueven más la aguja antes del lanzamiento son:

1. **Sobresaturación de CTAs a WhatsApp** — hay hasta 7 puntos de contacto WA visibles simultáneamente (TopBar, Hero, CtaBar, CtaFlujo, CtaBarFinal, Footer pre-CTA, Footer columna, FaqSection form, WaBubble). El usuario quiere reducir dependencia de WA y balancear con DM Champ + navegación interna.
2. **Sobreoptimización semántica** — la frase "renta de mesas picnic" aparece verbatim más de 200 veces en servicios/bodas, eventos-corporativos y páginas hub. Google castiga este patrón como low-effort SEO, no como "semantic richness".
3. **Bug CSS crítico en `Footer.astro`** — `@media (max-width: 1100px)` no cierra la llave y rompe la cascada responsive en tablet-desktop.

El resto son oportunidades: 18 MB de assets basura removibles, manifest PWA roto (icon.png vacío, icon-512 inexistente), inconsistencia DMChamp/wa.me, 17 imágenes sin `width/height` (CLS), copy con latiguillos robóticos ("transforma cualquier espacio", "respuesta inmediata"), y varios copy-paste entre páginas de servicio.

**Potencial post-fixes:** pasar de un score estimado 7.1/10 a 9.2/10 en las dimensiones SEO+UX+Performance, con expectativa realista de +15–25% en tráfico orgánico a 90 días y +20–30% en completitud de formulario (reduciendo la fuga a WhatsApp).

---

## Cómo leer esta auditoría

Cada módulo sigue el mismo formato:

- **Hallazgo** — descripción del problema con archivo:línea cuando aplica
- **Prioridad** — 🔴 crítica · 🟠 alta · 🟡 media · 🟢 baja
- **Impacto SEO · UX · Comercial** — rating individual (alto/medio/bajo)
- **Recomendación técnica** — el cambio concreto
- **Propuesta de mejora** — alternativa redactada/codificada

Las prioridades 🔴 y 🟠 se implementan en esta iteración (scope acordado). Las 🟡 parciales. Las 🟢 quedan documentadas para la v2.

---

## Índice de documentos

| # | Documento | Hallazgos | Prioridad |
|---|-----------|-----------|-----------|
| 01 | [[01 — SEO Técnico]] | 14 | 🔴🟠🟡 |
| 02 | [[02 — Humanización de Copy]] | 9 | 🟠🟡 |
| 03 | [[03 — UX y Flujo de Navegación]] | 8 | 🔴🟠 |
| 04 | [[04 — Responsive y Mobile UX]] | 6 | 🟠🟡 |
| 05 | [[05 — Imágenes y SEO Visual]] | 7 | 🔴🟠 |
| 06 | [[06 — Código Astro y Performance]] | 10 | 🔴🟠🟡 |
| 07 | [[07 — CRO y Conversión]] | 7 | 🔴🟠 |
| 08 | [[08 — Matriz de Prioridades y Roadmap]] | Resumen accionable | — |
| 09 | [[09 — Cambios Implementados en esta Iteración]] | Log de fixes | — |

---

## Puntaje actual vs. potencial

| Dimensión | Actual | Post-fix v1 | Potencial v2 |
|-----------|--------|-------------|--------------|
| SEO Técnico | 7.5/10 | 8.8/10 | 9.5/10 |
| SEO Contenido (copy/keywords) | 5.5/10 | 7.5/10 | 9.0/10 |
| UX / Navegación | 7.0/10 | 8.5/10 | 9.2/10 |
| Responsive | 7.8/10 | 9.0/10 | 9.5/10 |
| Performance / Core Web Vitals | 6.5/10 | 8.3/10 | 9.3/10 |
| Accesibilidad | 7.0/10 | 8.2/10 | 9.0/10 |
| CRO / Conversión | 6.0/10 | 8.0/10 | 9.0/10 |
| **PROMEDIO** | **6.8/10** | **8.3/10** | **9.2/10** |

---

## Reglas generales aplicadas en esta auditoría

1. **Balance CTA:** Hero y pricing conservan WhatsApp (alta intención). Blog, servicios detalle y catálogo priorizan DM Champ + navegación interna (ver [[07 — CRO y Conversión]]).
2. **Densidad de keyword:** máximo 2 instancias exactas de "renta de mesas picnic" por página; resto usar LSI: "mobiliario de madera", "bancas picnic", "mesas de pino", "alquiler", "mesas para eventos".
3. **No sobreoptimizar:** evitar stuffing en alt text, títulos y meta. Preferir lenguaje humano y específico.
4. **Embudo visible:** cada página debe tener un "siguiente paso" interno antes del CTA de cierre a chat.
5. **DMChamp > WA:** donde haya botón WA, la función `openMespicChat()` debe ser primaria y `wa.me` solo fallback.

---

## Referencias

- [[../reference_dmchamp|Guía DMChamp OrigenLab]]
- [[../project_hero_standard|Estándar Hero MESPIC]]
- [[../project_blog_layout_template|Template BlogLayout]]
- [[../project_site_structure|Estructura completa del sitio]]
- [[../../../SEO-KEYWORDS|SEO-KEYWORDS.md]]
