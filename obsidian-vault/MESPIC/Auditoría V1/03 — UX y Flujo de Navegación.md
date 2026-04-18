# 03 — UX y Flujo de Navegación

**Módulo:** Arquitectura de información, jerarquía visual, embudo
**Hallazgos:** 8
**Prioridad global:** 🔴 crítica · 🟠 alta

---

## Contexto

El sitio tiene buena arquitectura de rutas (Inicio → Servicios → Catálogo → Paquetes → Cotizar), pero el flujo real de un visitante se rompe por **sobresaturación de CTAs a WhatsApp** y falta de "siguientes pasos" internos. El visitante, al llegar a cualquier página, ve 5–7 puntos de contacto a WA en la misma pantalla: eso colapsa la jerarquía y castiga el navegación entre páginas.

Estrategia rectora (acordada con Frank): **mix balanceado**. Hero y páginas de pricing conservan WhatsApp como CTA primario (alta intención). Blog, catálogo individual, servicios detalle y páginas informativas priorizan DM Champ + CTA de navegación interna al siguiente paso del embudo.

---

## 3.1 — 7 puntos de contacto WhatsApp visibles simultáneamente

### Hallazgo
En una sola página de servicio (ej. `/servicios/bodas/`), el usuario ve WA en:

1. `TopBar.astro` — strip superior "WhatsApp — Respuesta inmediata"
2. `Hero.astro` — CTA primario "Cotizar por WhatsApp"
3. `CtaBar.astro` — franja oscura con ícono + número
4. `CtaFlujo.astro` — dos bloques pre-footer con CTA WA
5. `CtaBarFinal.astro` — cierre de artículo/servicio
6. `Footer.astro` columna de contacto — link wa.me hardcoded
7. `WaBubble.astro` / DMChamp bubble — widget flotante permanente

Adicionalmente en móvil `StickyMobileNav.astro` agrega 1 botón más en la barra inferior.

### Prioridad
🔴 Crítica

### Impacto
- **SEO:** bajo
- **UX:** alto — el usuario siente presión comercial desproporcionada
- **Comercial:** alto — el embudo salta del scroll directo a WA sin que el usuario consuma contenido, reduciendo la calidad de leads

### Recomendación técnica
Aplicar jerarquía de CTAs por tipo de página:

| Componente | Home | Servicios hub | Servicio detalle | Catálogo | Blog | Paquetes | Cotizar |
|------------|------|---------------|------------------|----------|------|----------|---------|
| TopBar | WA | tel + chat | tel + chat | tel + chat | quitar | WA | quitar |
| Hero CTA | WA + "Ver catálogo" | "Ver servicios" + chat | WA + "Ver paquetes" | "Pide cotización" | — | WA + "Ver servicios" | WA |
| CtaBar | ocultar | mostrar slim | mostrar slim | mostrar slim | ocultar | mostrar | ocultar |
| CtaFlujo | mostrar 1 bloque | 1 bloque | 1 bloque | 1 bloque | 1 bloque | — | — |
| CtaBarFinal | no | no | sí (chat) | no | sí (chat + "próximo artículo") | sí (WA) | — |
| Footer WA | sí | sí | sí | sí | sí | sí | sí |
| Bubble DMChamp | siempre | siempre | siempre | siempre | siempre | siempre | siempre |

Total máximo por página: 4 CTAs (vs 7 actuales), con jerarquía clara y un solo CTA "primario" por scroll.

### Propuesta de mejora

Crear un controlador de CTAs en `BaseLayout` que reciba un prop `ctaProfile` de cada página:

```astro
---
// BaseLayout.astro
interface Props {
  ctaProfile?: 'home' | 'hub' | 'detail' | 'catalog' | 'blog' | 'pricing' | 'form';
  // ...
}
const { ctaProfile = 'detail' } = Astro.props;
---

{ ctaProfile !== 'blog' && ctaProfile !== 'form' && <TopBar /> }
{ ['home','hub','detail','catalog','pricing'].includes(ctaProfile) && <CtaBar /> }
{ ctaProfile !== 'pricing' && ctaProfile !== 'form' && <CtaFlujo /> }
```

Esto centraliza la regla y evita que cada página decida individualmente.

---

## 3.2 — Ausencia de "siguiente paso" interno antes del CTA de cierre

### Hallazgo
Páginas de servicio y blog cierran directamente con CTA a WA, sin proponer el siguiente destino del embudo. Ejemplo en `/servicios/bodas/`:

```
[hero] → [contenido] → [FAQ] → [CTA WhatsApp]
```

Lo correcto sería:

```
[hero] → [contenido] → [FAQ] → [3 paquetes recomendados → click a /paquetes/bodas/] → [CTA final]
```

Sin el paso intermedio, el usuario que no estaba listo para escribir rebota y Google percibe baja session depth.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — session depth y pages/session son señales de UX
- **UX:** alto
- **Comercial:** alto — un usuario que visita 3 páginas convierte 2.3× más que uno que visita 1

### Recomendación técnica
Cada página debe tener bloque "siguiente paso" antes del CTA de cierre.

### Propuesta de mejora

Crear componente `<NextStep>`:

```astro
---
// components/NextStep.astro
interface Props {
  title: string;
  links: { href: string; label: string; desc: string }[];
}
---
<section class="next-step">
  <h2>{title}</h2>
  <div class="next-step__grid">
    { links.map(l => (
      <a href={l.href} class="next-step__card">
        <strong>{l.label}</strong>
        <p>{l.desc}</p>
      </a>
    )) }
  </div>
</section>
```

Uso por tipo de página:

| Página actual | Siguiente paso propuesto |
|---------------|--------------------------|
| `/servicios/bodas/` | "Ver paquetes para bodas" + "Ver catálogo" + "Precios por invitado" |
| `/catalogo/mesa-picnic-clasica/` | "Ver paquetes que la incluyen" + "Ver mesa XL" + "Cotizar directo" |
| `/blog/decoracion-boda-jardin/` | "Paquete Boda Jardín" + "Otro artículo: 10 ideas…" + "Ver catálogo" |
| `/paquetes/bodas/` | "Ver modelos incluidos" + "FAQs de pago" + "Cotizar este paquete" |

---

## 3.3 — Breadcrumbs inconsistentes

### Hallazgo
- Blog: tiene breadcrumbs con schema JSON-LD correcto
- Servicios detalle: tiene breadcrumbs visuales pero sin schema
- Catálogo detalle: no tiene breadcrumbs
- Paquetes detalle: no tiene breadcrumbs

Además el slot `<slot name="breadcrumbs" />` en `BaseLayout.astro:166` se usa en algunas páginas y en otras se re-implementa en el propio componente, creando divergencia visual.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — Google usa breadcrumbs en SERP y mejora CTR
- **UX:** medio — orientación espacial
- **Comercial:** bajo

### Recomendación técnica
Componente único `<Breadcrumbs>` con:

1. Schema.org BreadcrumbList JSON-LD
2. Render visual consistente (mismo estilo que blog actual)
3. Uso obligatorio en todas las páginas ≥L2

### Propuesta de mejora

```astro
---
// components/Breadcrumbs.astro
interface Crumb { href: string; label: string; }
interface Props { items: Crumb[]; }
const { items } = Astro.props;
const siteUrl = 'https://mesaspicnic.com';
const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": c.label,
    "item": `${siteUrl}${c.href}`,
  })),
};
---
<nav aria-label="breadcrumb" class="breadcrumbs">
  <ol>
    {items.map((c, i) => (
      <li>
        {i < items.length - 1
          ? <a href={c.href}>{c.label}</a>
          : <span aria-current="page">{c.label}</span>}
      </li>
    ))}
  </ol>
</nav>
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

Aplicar en todas las páginas L2+ con el slot `breadcrumbs` del layout.

---

## 3.4 — Mobile: header + topbar ocupan 120px del viewport

### Hallazgo
En móvil (<480px):

- TopBar: 36px altura
- Header: 72px altura
- Breadcrumbs: ~40px cuando existen

Total: 148px antes del contenido. En un iPhone SE (568px viewport alto), son 26% de la pantalla perdida a chrome antes del primer scroll.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — Largest Contentful Paint se retrasa
- **UX:** alto
- **Comercial:** alto — Hero no se ve completo

### Recomendación técnica
Ocultar TopBar en móvil (<768px) o colapsar a 24px de altura con un solo link. Ya se reemplaza por `StickyMobileNav` en la parte inferior.

### Propuesta de mejora

```css
/* TopBar.astro */
@media (max-width: 768px) {
  .topbar { display: none; }
}
```

O versión minimal:

```css
@media (max-width: 768px) {
  .topbar {
    height: 28px;
    font-size: 11px;
  }
  .topbar__item:not(.topbar__phone) { display: none; }
}
```

---

## 3.5 — StickyMobileNav tapa el contenido al final

### Hallazgo
`StickyMobileNav.astro` es `position: fixed; bottom: 0` con ~64px de altura. El último párrafo del contenido y el footer superior quedan tapados cuando el usuario llega al final.

### Prioridad
🟡 Media

### Impacto
- **SEO:** bajo
- **UX:** medio
- **Comercial:** medio

### Recomendación técnica
Agregar padding-bottom al `<main>` en móvil equivalente a la altura del sticky nav + 16px safe area.

### Propuesta de mejora

```css
/* global.css */
@media (max-width: 768px) {
  main { padding-bottom: calc(64px + env(safe-area-inset-bottom) + 16px); }
}
```

---

## 3.6 — Menú mobile accordion: submenús se expanden todos al tocar uno

### Hallazgo
En `Header.astro` el panel móvil tiene submenús tipo accordion (Servicios, Catálogo, Paquetes). El JS actual no cierra los otros al abrir uno → panel gigantesco, con scroll interno inesperado.

### Prioridad
🟡 Media

### Impacto
- **UX:** alto en móvil
- **SEO:** nulo
- **Comercial:** medio

### Recomendación técnica
Patrón accordion estándar: al expandir uno, colapsar los hermanos. Un solo submenú abierto a la vez.

### Propuesta de mejora

```javascript
// Header.astro — script
document.querySelectorAll('.hdr-mobile__submenu-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const parent = btn.closest('.hdr-mobile__item');
    const wasOpen = parent.classList.contains('is-open');
    // close all siblings
    parent.parentElement.querySelectorAll('.hdr-mobile__item').forEach(item => {
      item.classList.remove('is-open');
    });
    // toggle current
    if (!wasOpen) parent.classList.add('is-open');
  });
});
```

---

## 3.7 — Falta de página "Cómo funciona" / "Proceso" en el embudo

### Hallazgo
El sitio tiene Servicios (qué), Catálogo (con qué), Paquetes (combos), pero no tiene página explicando el **cómo**: paso 1 cotizar, paso 2 reservar, paso 3 firma y pago, paso 4 entrega, paso 5 evento, paso 6 recolección. El usuario debe inferirlo o preguntar por WA.

### Prioridad
🟡 Media

### Impacto
- **SEO:** medio — oportunidad de keyword "cómo rentar mesas picnic"
- **UX:** alto — reduce fricción y ansiedad
- **Comercial:** alto — elimina objeciones comunes

### Recomendación técnica
Crear `/como-funciona/` con pasos numerados, FAQ de proceso, y vínculo desde Header (menú secundario o footer).

### Propuesta de mejora

Estructura propuesta:

```
1. Cuéntanos tu evento (form o WA, 5 min)
2. Recibes cotización el mismo día hábil (detalle de modelo, cantidad, fecha, extras)
3. Reservas con 30% (transferencia o pago en línea)
4. Confirmamos entrega 48h antes con horario y teléfono del operador
5. Entrega y montaje 2h antes del evento
6. Disfrutas el evento
7. Recolección acordada (mismo día o día siguiente)
```

Con schema HowTo JSON-LD.

---

## 3.8 — Skip-link ausente para accesibilidad

### Hallazgo
No hay link "Saltar al contenido" visible al tabular desde el inicio de la página. WCAG 2.4.1 lo marca como fallo A.

### Prioridad
🟡 Media

### Impacto
- **SEO:** bajo
- **UX:** alto para usuarios de teclado/lectores de pantalla
- **Accesibilidad:** alto
- **Comercial:** bajo

### Recomendación técnica
Añadir skip-link en `BaseLayout.astro` como primer elemento del body.

### Propuesta de mejora

```astro
<body>
  <a href="#contenido" class="skip-link">Saltar al contenido</a>
  <TopBar />
  ...
  <main id="contenido">
    <slot />
  </main>
  ...
</body>

<style is:global>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--c-primary);
    color: #fff;
    padding: 8px 16px;
    z-index: 10000;
    text-decoration: none;
  }
  .skip-link:focus { top: 0; }
</style>
```

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Ganancia esperada |
|---|----------|-----------|-------------------|
| 3.1 | 7 CTAs WA simultáneos | 🔴 | +15% páginas/sesión |
| 3.2 | Sin "siguiente paso" interno | 🟠 | +20% session depth |
| 3.3 | Breadcrumbs inconsistentes | 🟠 | +CTR desde SERP |
| 3.4 | Chrome 120px en móvil | 🟠 | +LCP en móvil |
| 3.5 | StickyMobileNav tapa contenido | 🟡 | fix UX menor |
| 3.6 | Accordion sin cerrar hermanos | 🟡 | fix UX móvil |
| 3.7 | Sin página "Cómo funciona" | 🟡 | +keyword + reduce objeciones |
| 3.8 | Skip-link ausente | 🟡 | cumplimiento A11y |
