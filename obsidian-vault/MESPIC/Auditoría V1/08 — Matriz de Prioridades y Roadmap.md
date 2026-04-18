# 08 — Matriz de Prioridades y Roadmap

**Módulo:** Consolidación accionable
**Fecha:** 2026-04-18

---

## Matriz de los 61 hallazgos

### 🔴 Críticos (hacer antes del lanzamiento — 9 items)

| # | Hallazgo | Módulo | Esfuerzo | Impacto |
|---|----------|--------|----------|---------|
| 1.1 | Keyword stuffing en hubs | 01 SEO | M | Alto SEO |
| 1.5 | Schema LocalBusiness duplicado | 01 SEO | S | Alto SEO |
| 2.3 | Keyword stuffing servicios | 02 Copy | M | Alto SEO |
| 3.1 | 7 CTAs WA simultáneos | 03 UX | L | Alto UX/Comercial |
| 4.1 | Footer CSS llave sin cerrar | 04 Responsive | XS | Alto UX |
| 5.1 | Manifest PWA roto | 05 Imágenes | S | Medio UX/Brand |
| 5.2 | 18 MB PNG basura | 05 Imágenes | XS | Alto build |
| 7.1 | /cotizar/ no es CTA primario | 07 CRO | M | Alto Comercial |

Estimación total: **~14 horas** de trabajo efectivo.

### 🟠 Altos (esta iteración — 24 items)

| Bloque | Items | Módulos |
|--------|-------|---------|
| SEO técnico / schema | 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.10 | 01 |
| Copy humanización | 2.1, 2.2, 2.4, 2.5, 2.7 | 02 |
| UX nav | 3.2, 3.3, 3.4 | 03 |
| Responsive | 4.2, 4.3, 4.4, 4.5 | 04 |
| Imágenes | 5.3, 5.4, 5.5, 5.6 | 05 |
| Performance | 6.1, 6.2 | 06 |
| CRO | 7.2, 7.3, 7.4, 7.5, 7.6 | 07 |

Estimación: **~32 horas**.

### 🟡 Medios (parciales esta iteración — 20 items)

Copy menores, tokens CSS, accordion fix, HowTo page, Tru-idle-delay, file auditing scripts, etc.

Estimación parcial: **~18 horas** (solo los quick wins).

### 🟢 Bajos (documentados para v2 — 8 items)

Refactors de componentes, archivos residuales root, skill de code review, etc.

---

## Roadmap sugerido (3 sprints)

### Sprint 1 — Pre-lanzamiento (esta iteración, scope acordado)
**Duración:** 3 días hábiles · **Horas efectivas:** ~28h

1. **Día 1 (10h)** — Bugs críticos + cleanup
   - Fix Footer.astro CSS (4.1) → 15 min
   - Delete 18 MB PNG basura (5.2) → 5 min
   - Fix site.webmanifest + generar iconos (5.1) → 1h
   - Consolidar schema LocalBusiness (1.5) → 45 min
   - Fix robots.txt (1.4) → 15 min
   - Eliminar 404.html legacy (1.13, 6.8) → 10 min
   - Humanizar copy robótico en Footer, TopBar, CtaBarFinal (2.1, 2.2) → 2h
   - De-keyword-stuff servicios/bodas, /eventos-corporativos, /aniversarios (1.1, 2.3) → 3h
   - Fix hardcoded wa.me → openMespicChat pattern (1.6, 7 puntos) → 1.5h
   - Rebuild + sanity checks → 30 min

2. **Día 2 (10h)** — UX y embudo
   - Aplicar jerarquía de CTAs por ctaProfile (3.1) → 3h
   - Componente `<Breadcrumbs>` unificado (3.3) → 1.5h
   - Componente `<NextStep>` en 8 páginas (3.2) → 2h
   - Ocultar TopBar en móvil (3.4) → 15 min
   - Agregar skip-link (3.8) → 20 min
   - Agregar loading/decoding consistentes a imágenes (5.3, 5.6) → 1.5h
   - Fix alt text stuffing (muestra de 20 imágenes) (5.4) → 1h
   - Fix hero fetchpriority / preload (5.5) → 30 min

3. **Día 3 (8h)** — CRO y SEO final
   - Rediseñar H1s únicos en 10 páginas (2.5) → 2h
   - Meta descriptions únicas en 10 páginas (2.7) → 2h
   - Variar H1s + meta en blog (9 artículos) → 1.5h
   - Agregar `<TrustBar>` a home + servicios (7.3) → 1.5h
   - Consolidar CTA /cotizar/ como co-primario (7.1) → 1h

**Entregable final Sprint 1:** sitio listo para lanzamiento con score UX+SEO estimado de 8.3/10.

### Sprint 2 — Post-lanzamiento (mes 1)
**Duración:** 5 días · **Horas:** ~30h

- Form multi-step /cotizar/ (7.5)
- Página /casos/ con 6 eventos documentados (7.2)
- Página /como-funciona/ con HowTo schema (3.7)
- Pricing transparente en catálogo y paquetes (7.4)
- Testimonios reales con fotos (7.2)
- Rediseño /gracias/ con upsell + pixel de conversión (7.6)
- Convertir 6 JPG remanentes a AVIF (5.7)
- localStorage recovery + exit-intent (7.7)
- View Transitions API (6.4)
- Tokens de breakpoint + normalización (4.2)

### Sprint 3 — Optimización continua (mes 2–3)
**Duración:** trabajo amortizado

- Refactor Hero.astro en sub-componentes (6.5)
- Separar global.css en archivos temáticos (6.3)
- Scripts npm de lint/audit/a11y (6.9)
- Monitoreo Core Web Vitals con CrUX o Search Console
- A/B test: form vs WA CTA en paquetes
- A/B test: precio visible vs oculto en catálogo
- Iteración de copy basada en Hotjar/TruConversion heatmaps

---

## KPIs a medir post-lanzamiento

### SEO (90 días)

| KPI | Baseline estimada | Meta |
|-----|-------------------|------|
| Impresiones orgánicas | - | +40% |
| Clicks orgánicos | - | +25% |
| Posición promedio "mesas picnic cdmx" | - | top 5 |
| Posición promedio "renta mesas picnic" | - | top 10 |
| Páginas indexadas | 42 | 42 + /casos + /como-funciona |
| Core Web Vitals (pass rate) | 70% | 90% |

### UX / Engagement

| KPI | Baseline estimada | Meta |
|-----|-------------------|------|
| Bounce rate home | 58% | <48% |
| Páginas/sesión | 2.1 | >2.7 |
| Tiempo en página hub | 0:35 | >1:00 |
| Scroll depth blog | 40% | >60% |

### CRO

| KPI | Baseline estimada | Meta |
|-----|-------------------|------|
| Leads por mes | 120 | 150+ |
| Tasa completion form /cotizar/ | <15% | >35% |
| Ratio leads form vs WA | 10/90 | 35/65 |
| Calidad de lead (campos llenos) | 30% | 85% |
| Tasa conversión lead → cotización enviada | 60% | 80% |

---

## Dependencias y riesgos

### Dependencias técnicas
- Regeneración de iconos PWA requiere acceso a fuente gráfica (mespic.webp o logo vectorial)
- View Transitions API requiere testing cross-browser (Safari 17+ para soporte nativo)
- Form multi-step requiere backend endpoint que procese steps parciales

### Riesgos
- **Publicar precios** puede generar ansiedad comercial interna — mitigar con rangos "desde" sin techo
- **Reducir CTAs WA** puede sentirse como "menos conversión" en el corto plazo — justificar con calidad de lead
- **Copy humanizado** puede recibir feedback de "suena menos profesional" — mantener tono con datos concretos (no casual)

### Medidas de reversión
- Backup del repo antes de sprint 1 (git tag `pre-audit-v1`)
- Feature flag en ctaProfile (posibilidad de volver a profile "all-wa" si métricas caen)
- A/B testing desde día 1 con TruConversion para comparar variantes
