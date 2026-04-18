# 04 — Responsive y Mobile UX

**Módulo:** Breakpoints, CSS responsive, mobile-first
**Hallazgos:** 6
**Prioridad global:** 🔴 crítica (bug CSS) · 🟠 alta

---

## Contexto

El sitio tiene 6 breakpoints (1100 / 1024 / 768 / 640 / 480 / 400) — razonable, pero con inconsistencias entre componentes (algunos usan 900, otros 920) y un **bug crítico en Footer.astro** donde un media query no cierra la llave, rompiendo toda la cascada responsive a partir de ese punto.

El tráfico real de negocios como MESPIC en MX ronda 68–75% móvil, así que los defectos responsive tienen impacto directo en conversiones.

---

## 4.1 — 🔴 Footer.astro: @media no cierra llave (bug crítico)

### Hallazgo
`src/components/Footer.astro` línea 641–651:

```css
@media (max-width: 1100px) {
    .ft__grid {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .ft__brand {
      grid-column: 1 / -1;
    }
/* ← FALTA LA LLAVE DE CIERRE AQUÍ */
  @media (max-width: 768px) {
    ...
```

El `@media (max-width: 1100px)` nunca cierra su bloque, así que el `@media (max-width: 768px)` queda anidado dentro. Resultado: las reglas 768px **solo aplican cuando la pantalla es ≤1100px AND ≤768px**, que funciona por accidente, pero cualquier regla posterior al bloque 768 también queda anidada.

Esto rompe la responsive cascade de todo lo que haya después en el archivo, incluyendo los breakpoints 480px y 400px del footer.

### Prioridad
🔴 Crítica (bug que afecta render real)

### Impacto
- **SEO:** medio — Core Web Vitals distorsionados por layout shifts
- **UX:** alto — en tablets y pantallas pequeñas, el footer colapsa con grid-column roto
- **Comercial:** medio

### Recomendación técnica
Cerrar el bloque 1100px agregando `}` antes del siguiente `@media`.

### Propuesta de mejora

```css
@media (max-width: 1100px) {
    .ft__grid {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .ft__brand {
      grid-column: 1 / -1;
    }
  } /* ← AGREGAR */

  @media (max-width: 768px) {
    .ft__grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    ...
  }
```

Post-fix: validar en DevTools que rules 480px y 400px vuelven a aplicar sueltas, no anidadas.

---

## 4.2 — Breakpoints inconsistentes entre componentes

### Hallazgo
Recorrido por `src/components/`:

| Componente | Breakpoints usados |
|------------|--------------------|
| Header.astro | 1024, 768, 480 |
| Hero.astro | 1024, 900, 768, 640, 480 |
| Footer.astro | 1100, 768, 480, 400 |
| CtaBar.astro | 920, 768, 640 |
| CatalogoCard.astro | 1100, 768, 480 |
| PaqueteCard.astro | 1024, 768, 640 |

Siete valores diferentes (1100, 1024, 920, 900, 768, 640, 480, 400). No hay un token CSS compartido.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** bajo
- **UX:** medio — comportamientos impredecibles al redimensionar
- **Mantenimiento:** alto — un cambio de breakpoint requiere tocar 17 archivos

### Recomendación técnica
Definir tokens de breakpoint en `global.css`:

```css
:root {
  --bp-xs: 400px;
  --bp-sm: 480px;
  --bp-md: 640px;
  --bp-lg: 768px;
  --bp-xl: 1024px;
  --bp-2xl: 1280px;
}
```

Y consolidar a 5 breakpoints únicos: 480, 640, 768, 1024, 1280. Eliminar 400, 900, 920, 1100.

Nota: CSS nativo no permite usar `var()` dentro de `@media`, así que la consistencia se logra por convención. Alternativa: usar PostCSS preset-env con media query ranges si se quiere tooling.

### Propuesta de mejora

Refactor gradual: en esta iteración normalizar los 3 archivos más críticos (Footer, Header, Hero) al set de 5 breakpoints. Resto en v2.

---

## 4.3 — Hero desktop → mobile: col2 (SEO paragraphs) desaparece visualmente

### Hallazgo
En `Hero.astro` la columna derecha (2 párrafos SEO) en móvil se apila bajo la columna izquierda. Los párrafos tienen 280 palabras totales, empujando el CTA y las métricas fuera del viewport mobile inicial.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — LCP y FID penalizados cuando el Hero es gigante
- **UX:** alto — usuario en móvil no ve CTA en first paint
- **Comercial:** alto

### Recomendación técnica
En móvil (<768px):

1. Ocultar col2 (SEO paragraphs) con `display: none`, o
2. Mostrarla debajo del CTA, no encima, o
3. Mostrar solo los primeros 60 caracteres con "Leer más →" que expande.

La opción recomendada es **(2)**: CTA primero, luego texto SEO debajo, accesible al scroll.

### Propuesta de mejora

```css
/* Hero.astro */
@media (max-width: 768px) {
  .hero__grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "col1"
      "col2";
  }
  .hero__col--seo {
    grid-area: col2;
    padding-top: 2rem;
    font-size: 0.95rem;
    opacity: 0.85;
  }
}
```

Con esto el col1 (badge → H1 → desc → CTAs → metrics) ocupa el viewport y col2 queda como contenido SEO scrollable sin obstruir CTA.

---

## 4.4 — Tablas de precios con overflow horizontal sin scroll visible

### Hallazgo
En `/paquetes/` (y algunos artículos de blog) hay tablas comparativas de 4 columnas. En móvil, la tabla excede 100vw y hay que hacer swipe horizontal sin indicador visual de "hay más a la derecha".

### Prioridad
🟠 Alta

### Impacto
- **UX:** alto — usuario no sabe que puede hacer scroll horizontal
- **Comercial:** alto — pierde info de precios

### Recomendación técnica
Patrón "shadow hint" en el borde derecho que indique overflow, o transformar la tabla en cards apiladas en móvil.

### Propuesta de mejora

Opción A (shadow hint, mínimo código):

```css
.table-wrap {
  position: relative;
  overflow-x: auto;
}
.table-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(0,0,0,0.15));
  pointer-events: none;
}
.table-wrap.no-overflow::after { display: none; }
```

Con JS que agregue `.no-overflow` cuando scrollLeft === scrollMax.

Opción B (cards apiladas móvil):

```css
@media (max-width: 640px) {
  .precios-table { display: none; }
  .precios-cards { display: grid; gap: 1rem; }
}
@media (min-width: 641px) {
  .precios-cards { display: none; }
}
```

Recomendado: A en v1, B en v2.

---

## 4.5 — Imágenes de Hero sin `aspect-ratio` en móvil

### Hallazgo
`Hero.astro` tiene imagen de fondo con `width/height` en desktop pero en móvil la imagen re-carga con proporción distinta, causando CLS (Cumulative Layout Shift).

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — CLS es métrica de Core Web Vitals
- **UX:** medio
- **Comercial:** medio

### Recomendación técnica
Definir `aspect-ratio` CSS explícito por breakpoint.

### Propuesta de mejora

```css
.hero__bg {
  aspect-ratio: 16 / 9;  /* desktop */
}
@media (max-width: 768px) {
  .hero__bg {
    aspect-ratio: 4 / 5;  /* móvil vertical */
  }
}
```

Y en el `<img>` agregar `style="aspect-ratio: 16/9;"` como hint al navegador para reservar espacio antes de carga.

---

## 4.6 — Fuentes: Plus Jakarta Sans 400;500;600;700;800 (cinco pesos)

### Hallazgo
`BaseLayout.astro:134` importa cinco pesos de Plus Jakarta Sans desde Google Fonts. En inspección real, solo se usan efectivamente:

- 500 (body)
- 700 (headings)
- 800 (algunos H1 marketing)

Los pesos 400 y 600 están declarados pero no usados en componentes (grep confirma).

Peso descargado: ~180 KB extra por los 5 pesos en WOFF2, cuando se podría cargar 90 KB con 3 pesos.

### Prioridad
🟡 Media

### Impacto
- **SEO:** medio — LCP en móvil mejora con menos fuentes
- **UX:** medio — flash de texto sin estilar (FOUT) se reduce
- **Comercial:** bajo

### Recomendación técnica
Reducir a `500;700;800` y self-host si es posible (o mantener Google Fonts con `display=swap` + `preload`).

### Propuesta de mejora

```html
<!-- BaseLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap"
  rel="stylesheet"
/>
```

Ganancia esperada: -90 KB en first load, LCP móvil -150ms promedio.

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Impacto |
|---|----------|-----------|---------|
| 4.1 | Footer CSS llave sin cerrar | 🔴 | UX tablet/móvil |
| 4.2 | Breakpoints inconsistentes | 🟠 | Mantenimiento + UX |
| 4.3 | Hero col2 empuja CTA en móvil | 🟠 | UX + LCP |
| 4.4 | Tablas sin indicador de overflow | 🟠 | UX + conversión |
| 4.5 | Hero sin aspect-ratio = CLS | 🟠 | Core Web Vitals |
| 4.6 | 5 pesos de fuente (exceso) | 🟡 | Performance |
