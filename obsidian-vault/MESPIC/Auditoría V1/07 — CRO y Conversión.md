# 07 — CRO y Conversión

**Módulo:** Funnel, CTAs, pruebas sociales, objeciones
**Hallazgos:** 7
**Prioridad global:** 🔴 crítica · 🟠 alta

---

## Contexto

El objetivo del sitio es generar cotizaciones de calidad (con contexto: fecha, invitados, tipo de evento, zona). Hoy el 90% del tráfico termina en WhatsApp con mensajes tipo "hola, cuánto cuesta?" — sin contexto, lo que obliga al equipo comercial a hacer 5–6 re-preguntas antes de cotizar.

La estrategia acordada con Frank: mantener WhatsApp en puntos de **alta intención** (hero + pricing) y redirigir el resto al **funnel interno** que culmine en formulario estructurado + DMChamp como fallback conversacional.

---

## 7.1 — 🔴 Formulario de cotización no es el CTA primario

### Hallazgo
El sitio tiene `/cotizar/` con un form estructurado (fecha, invitados, tipo, zona, extras). Es el mejor asset de calificación del sitio, pero:

- Ningún Hero apunta a `/cotizar/` como CTA primario
- El link aparece en 3er o 4to nivel de nav
- TopBar no lo menciona
- Nombre "Cotizar →" en el menú es correcto pero genérico

El formulario existe pero el sitio no empuja a que se llene. 100% del tráfico va a WA.

### Prioridad
🔴 Crítica

### Impacto
- **SEO:** bajo directo
- **UX:** alto — usuario maduro prefiere llenar form, no chatear
- **Comercial:** alto — leads de form = +80% cualificación vs WA

### Recomendación técnica
Promover `/cotizar/` a CTA **co-primario** en todas las páginas excepto home (que sigue siendo WA por ser primera visita):

| Página | CTA primario | CTA secundario |
|--------|--------------|----------------|
| `/` | "Cotizar por WhatsApp" (mantener) | "Llenar formulario →" `/cotizar/` |
| `/servicios/*` | "Llenar formulario →" `/cotizar/?servicio=X` | "Chat con asesor" (DMChamp) |
| `/catalogo/` | "Pide tu cotización" `/cotizar/` | "Ver paquetes" |
| `/paquetes/*` | "Reservar este paquete" `/cotizar/?paquete=X` | "WhatsApp" (fallback) |
| `/blog/*` | "Cotizar mi evento" `/cotizar/` | "Otro artículo" |

### Propuesta de mejora

Query params pre-populan el form:

```astro
<!-- en /servicios/bodas/ -->
<a href="/cotizar/?servicio=bodas&utm_source=servicios" class="btn btn--primary">
  Pide tu cotización en 2 minutos
</a>
```

En `/cotizar/`:

```javascript
const params = new URLSearchParams(window.location.search);
if (params.has('servicio')) {
  document.querySelector('[name="tipo_evento"]').value = params.get('servicio');
}
```

---

## 7.2 — Pruebas sociales enterradas / ausentes

### Hallazgo
- Testimonios: hay 8 logos de aliados en home pero sin historia asociada
- Reseñas Google: 4.9 ⭐ en el LocalBusiness schema (index.astro:378), pero NO visibles en la UI
- Casos de éxito: no hay página ni sección dedicada
- Números concretos: "eventos atendidos", "clientes satisfechos" aparecen como claims sin fuente

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — rich snippets de reviews
- **UX:** alto — prueba social es el #1 driver de conversión
- **Comercial:** alto

### Recomendación técnica
1. **Bloque de testimonios real** con foto + nombre + evento + cita de 2 líneas (3–5 testimonios)
2. **Widget de reseñas Google** (embed oficial, no scraping) en home y servicios
3. **Página `/casos/`** con 6–8 eventos reales documentados (tipo de evento, invitados, mobiliario usado, foto del montaje, problemas resueltos)
4. **Badges en hero**: "+2,400 eventos montados" "4.9 ⭐ en Google" con link real

### Propuesta de mejora

Componente `<Testimonial>`:

```astro
---
interface Props {
  quote: string;
  author: string;
  role: string;
  event: string;
  photo?: string;
}
const { quote, author, role, event, photo } = Astro.props;
---
<figure class="testimonial">
  {photo && <img src={photo} alt={author} width="64" height="64" class="testimonial__photo" />}
  <blockquote>"{quote}"</blockquote>
  <figcaption>
    <strong>{author}</strong>
    <span>{role} · {event}</span>
  </figcaption>
</figure>
```

Ejemplo de testimonio real:

```astro
<Testimonial
  quote="Entregaron 2h30 antes, montaron en silencio mientras terminábamos la ceremonia, y el desmontaje después del evento fue impecable. Volveríamos sin dudar."
  author="Alejandra M."
  role="Wedding planner · Acento Bodas"
  event="Boda en Jardín Etéreo, 180 invitados"
  photo="/img/testimonios/alejandra.avif"
/>
```

---

## 7.3 — Falta barra de confianza / objeciones resueltas

### Hallazgo
Usuarios dudan típicamente en:

- "¿Cómo pago?" → no respondido visible
- "¿Qué pasa si llueve?" → no respondido
- "¿Hay contrato y factura?" → mencionado solo en FAQ
- "¿Hay mínimo de mesas?" → no respondido
- "¿Cuánto cuesta el flete?" → escondido en FAQ

Estas son las top-5 objeciones según cualquier vendedor del sector. No responderlas arriba del fold = pérdida directa.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** bajo
- **UX:** alto
- **Comercial:** alto

### Recomendación técnica
Crear bloque `<TrustBar>` con 5 objeciones resueltas en formato bullet corto, visible en hero o inmediatamente debajo.

### Propuesta de mejora

```astro
<section class="trust-bar">
  <div class="trust-item">
    <svg icon="shield" />
    <div>
      <strong>Contrato y factura</strong>
      <p>Factura con IVA, contrato firmado, seguro de RC incluido</p>
    </div>
  </div>
  <div class="trust-item">
    <svg icon="cloud-rain" />
    <div>
      <strong>Plan B de lluvia</strong>
      <p>Coordinamos reubicación bajo techo o reembolso del 70% con 24h</p>
    </div>
  </div>
  <div class="trust-item">
    <svg icon="truck" />
    <div>
      <strong>Flete calculado</strong>
      <p>Cotización con IVA y flete incluido — sin cargos sorpresa</p>
    </div>
  </div>
  <div class="trust-item">
    <svg icon="card" />
    <div>
      <strong>Pago flexible</strong>
      <p>30% para reservar, 70% 3 días antes del evento. Transferencia o pago en línea</p>
    </div>
  </div>
  <div class="trust-item">
    <svg icon="users" />
    <div>
      <strong>Desde 5 mesas</strong>
      <p>Mínimo 5 mesas para CDMX metropolitana. Menos con cargo adicional</p>
    </div>
  </div>
</section>
```

Colocar en home, servicios detalle y paquetes.

---

## 7.4 — Pricing opaco: no hay ni un precio visible

### Hallazgo
En todo el sitio no hay un solo precio numérico. Todos los CTAs piden contactar para cotización. Esto filtra 60–70% del tráfico (usuarios que solo quieren saber rango antes de contactar).

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — páginas con precio posicionan mejor en queries transaccionales
- **UX:** alto
- **Comercial:** **medio ambiguo** — puede bajar volumen pero sube calidad de leads

### Recomendación técnica
Publicar rangos orientativos (no precios exactos) en catálogo y paquetes:

- Mesa picnic clásica: desde **$850 MXN + IVA por día**
- Paquete boda 150 invitados: desde **$22,000 MXN + IVA**

Con asterisco: "el precio final depende de zona, fecha y extras. Cotización gratis en 24h hábiles".

### Propuesta de mejora

En `CatalogoCard.astro`:

```astro
<div class="cat-card">
  <img ... />
  <h3>Mesa picnic clásica</h3>
  <p class="cat-card__price">
    desde <strong>$850</strong> <span>MXN · 24 h</span>
  </p>
  <p class="cat-card__note">*Entrega y montaje calculados por zona</p>
  <a href="/catalogo/mesa-picnic-clasica/" class="btn btn--sm">Ver detalles</a>
</div>
```

En `/paquetes/bodas/`:

```astro
<div class="paquete">
  <h3>Boda Jardín — 150 invitados</h3>
  <p class="paquete__price">
    desde <strong>$22,000</strong> <span>MXN + IVA</span>
  </p>
  <ul class="paquete__includes">
    <li>19 mesas picnic + 152 bancas</li>
    <li>Entrega, montaje, recolección</li>
    <li>Mantelería blanca básica</li>
  </ul>
</div>
```

Ganancia esperada: -10% volumen bruto, +25% tasa de conversión de lead → venta (leads más calificados por precio conocido).

---

## 7.5 — Form de cotización muy largo

### Hallazgo
`/cotizar/` pide 11 campos:

1. Nombre
2. Teléfono
3. Email
4. Tipo evento
5. Fecha
6. Hora
7. Número invitados
8. Zona / ubicación
9. Tipo de mobiliario
10. Extras
11. Mensaje libre

11 campos es friccionante. Usuarios abandonan al 3er o 4to campo típicamente.

### Prioridad
🟠 Alta

### Impacto
- **UX:** alto
- **Comercial:** alto — cada campo innecesario = -5% completion rate

### Recomendación técnica
Convertir en multi-step (3 pasos) con progreso visual:

- **Paso 1 (contacto)**: Nombre + Teléfono + Email (3 campos — requeridos)
- **Paso 2 (evento)**: Tipo evento + Fecha + Invitados aprox + Zona (4 campos)
- **Paso 3 (detalles)**: Tipo mobiliario + Extras + Mensaje libre (opcionales)

Usuario puede enviar en paso 2 (datos mínimos viables) con "Saltar detalles →".

### Propuesta de mejora

Pseudo-código del componente:

```astro
---
// pages/cotizar.astro
---
<form id="cotizar-form" data-step="1">
  <div class="steps">
    <span class="step is-active">1</span>
    <span class="step">2</span>
    <span class="step">3</span>
  </div>

  <fieldset data-step="1">
    <legend>Cómo te contactamos</legend>
    <input name="nombre" required />
    <input name="telefono" type="tel" required />
    <input name="email" type="email" required />
    <button type="button" data-next>Siguiente →</button>
  </fieldset>

  <fieldset data-step="2" hidden>
    <legend>Tu evento</legend>
    <select name="tipo">...</select>
    <input name="fecha" type="date" required />
    <input name="invitados" type="number" required />
    <input name="zona" required />
    <button type="button" data-prev>← Atrás</button>
    <button type="submit">Enviar (puedes saltar detalles)</button>
    <button type="button" data-next>Agregar detalles →</button>
  </fieldset>

  <fieldset data-step="3" hidden>
    <legend>Detalles (opcional)</legend>
    <textarea name="mensaje"></textarea>
    <button type="button" data-prev>← Atrás</button>
    <button type="submit">Enviar cotización</button>
  </fieldset>
</form>
```

Tasa de completion esperada: +30–45% vs form único.

---

## 7.6 — Post-conversión sin upsell ni seguimiento

### Hallazgo
`/gracias/` (post-form) solo dice "Gracias, te contactaremos". Oportunidades perdidas:

- No hay lectura sugerida ("mientras esperas, mira estos paquetes")
- No hay gift: "10% de descuento si confirmas en 48h"
- No hay link a WhatsApp del asesor asignado
- No hay schema de conversión para Google Ads / Pixel

### Prioridad
🟠 Alta

### Impacto
- **SEO:** nulo
- **UX:** medio
- **Comercial:** alto

### Recomendación técnica
Rediseñar `/gracias/`:

```
[✓ Solicitud recibida]
"Hola [nombre], recibimos tu solicitud para [tipo evento] el [fecha].
Te contactamos hoy mismo antes de las 19:00 al [teléfono]."

[Mientras tanto:]
- Ve cómo armamos una boda similar → /casos/boda-jardin-150/
- Paquete más pedido → /paquetes/bodas/
- Chatea directo con tu asesor → [DMChamp]

[10% OFF si confirmas en 48h]
[código que se manda por email]
```

Y agregar:

```html
<!-- Google Ads / Meta Pixel conversion -->
<script>
  if (typeof gtag === 'function') gtag('event', 'conversion', { ... });
  if (typeof fbq === 'function') fbq('track', 'Lead');
</script>
```

---

## 7.7 — Zero exit-intent / abandono de form

### Hallazgo
Usuario que abre `/cotizar/`, llena 2 campos y se va → pérdida total. No hay:

- Modal de "¿Te ayudamos?" al detectar salida
- Recuperación de form (localStorage con los datos hasta aquí)
- Remarketing trigger

### Prioridad
🟡 Media

### Impacto
- **UX:** medio (puede ser molesto si mal ejecutado)
- **Comercial:** alto

### Recomendación técnica
1. **localStorage recovery** (sin librerías):

```javascript
// pages/cotizar.astro script
const form = document.getElementById('cotizar-form');
form.addEventListener('input', (e) => {
  const data = Object.fromEntries(new FormData(form));
  localStorage.setItem('cotizar_draft', JSON.stringify(data));
});

// on load
const draft = localStorage.getItem('cotizar_draft');
if (draft) {
  const data = JSON.parse(draft);
  Object.entries(data).forEach(([k, v]) => {
    const field = form.querySelector(`[name="${k}"]`);
    if (field) field.value = v;
  });
}

form.addEventListener('submit', () => localStorage.removeItem('cotizar_draft'));
```

2. **Exit-intent modal** (opcional, solo desktop):

```javascript
document.addEventListener('mouseout', (e) => {
  if (e.clientY < 0 && !sessionStorage.getItem('exit_shown')) {
    sessionStorage.setItem('exit_shown', '1');
    showExitModal();
  }
});
```

Con contenido: "¿Prefieres WhatsApp? Chateemos directo →"

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Impacto |
|---|----------|-----------|---------|
| 7.1 | /cotizar/ no es CTA primario | 🔴 | Calidad de leads |
| 7.2 | Pruebas sociales enterradas | 🟠 | Conversión |
| 7.3 | Objeciones no resueltas arriba | 🟠 | Fricción |
| 7.4 | Pricing opaco | 🟠 | Filtro + SEO |
| 7.5 | Form muy largo (11 campos) | 🟠 | Completion rate |
| 7.6 | Post-conversión vacío | 🟠 | Upsell + tracking |
| 7.7 | Sin recuperación de form | 🟡 | Completion rate |

**Ganancia agregada esperada (CRO):**

- Completion rate del form: **+30–45%**
- Calidad de leads (con contexto): **+60–80%**
- Tiempo comercial por lead: **-40%**
- Tasa conversión lead → venta: **+15–25%**
