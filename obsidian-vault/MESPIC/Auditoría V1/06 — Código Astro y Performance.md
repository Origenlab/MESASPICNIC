# 06 — Código Astro y Performance

**Módulo:** Arquitectura de código, scripts, bundle, Core Web Vitals
**Hallazgos:** 10
**Prioridad global:** 🔴 crítica · 🟠 alta · 🟡 media

---

## Contexto

Stack sólido: Astro 4.16.18, @astrojs/mdx, @astrojs/sitemap, static output con `trailingSlash: 'never'` (bueno para SEO canónico). Sin embargo, la implementación tiene puntos débiles en:

- Scripts de terceros sin diferir
- DMChamp + TruConversion compitiendo por el main thread
- Componentes que re-declaran lógica en vez de compartirla
- CSS crítico no separado del resto
- Falta View Transitions API disponible en Astro 4

---

## 6.1 — DMChamp widget bloquea LCP

### Hallazgo
`BaseLayout.astro:178`:

```html
<script is:inline src="https://api.dmchamp.com/v1/chat-widget/MudstzucAJwOXl5hvruG"></script>
```

Este script carga síncrono (no tiene `defer` ni `async`), y dado que está en `<body>` tras el contenido, aunque no bloquea `DOMContentLoaded`, sí retrasa el momento en que `openMespicChat()` está disponible. El click handler en `:193` depende de `querySelector('.wai-chat-bubble')` que puede no existir cuando el usuario hace click rápido post-load.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — afecta TBT (Total Blocking Time)
- **UX:** alto — clicks "se pierden" si el widget no cargó
- **Comercial:** alto — cada click perdido = lead perdido

### Recomendación técnica
1. Agregar `async` al script
2. Implementar una cola de clicks en memoria (queue) que se replay cuando el widget anuncie `ready`

### Propuesta de mejora

```html
<script is:inline async src="https://api.dmchamp.com/v1/chat-widget/MudstzucAJwOXl5hvruG"></script>

<script is:inline>
  (function () {
    var WA_FALLBACK = 'https://wa.me/5564328954?text=' + encodeURIComponent('Hola, quiero cotizar mesas picnic para mi evento.');
    var pendingOpen = false;

    function tryOpen() {
      var bubble = document.querySelector('.wai-chat-bubble');
      if (bubble) { bubble.click(); return true; }
      return false;
    }

    function openMespicChat() {
      if (tryOpen()) return;
      pendingOpen = true;
      // poll for widget ready (max 5s), then fallback
      var attempts = 0;
      var interval = setInterval(function () {
        attempts++;
        if (tryOpen() || attempts > 25) {
          clearInterval(interval);
          if (!pendingOpen) return;
          if (attempts > 25) window.open(WA_FALLBACK, '_blank', 'noopener');
          pendingOpen = false;
        }
      }, 200);
    }

    window.openMespicChat = openMespicChat;
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href*="wa.me"]');
      if (!link) return;
      e.preventDefault();
      openMespicChat();
    }, true);
  })();
</script>
```

---

## 6.2 — TruConversion cargado para TODAS las páginas

### Hallazgo
`BaseLayout.astro:150-160`:

```html
<script type="text/javascript">
  var _tip = _tip || [];
  (function(d,s,id){
    var js, tjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.async = true;
    js.src = d.location.protocol + '//app.truconversion.com/ti-js/62950/9fe33.js';
    tjs.parentNode.insertBefore(js, tjs);
  }(document, 'script', 'ti-js'));
</script>
```

TruConversion (heatmaps / session recording) agrega ~180 KB al bundle y genera overhead continuo. Cargarlo en TODAS las páginas incluye:

- `/terminos` y `/privacidad` (sin conversión)
- `/gracias` (post-conversión, ya innecesario)
- Blog individual (tráfico orgánico, no funnel de conversión)

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — TBT + bandwidth
- **UX:** medio — main thread blocking
- **Comercial:** bajo — TruConversion sigue cubriendo el funnel principal

### Recomendación técnica
Cargar TruConversion solo en páginas del funnel de conversión vía prop del layout, no en todas.

### Propuesta de mejora

```astro
---
// BaseLayout.astro
interface Props {
  // ...
  trackAnalytics?: boolean;
}
const { trackAnalytics = true } = Astro.props;
---

<head>
  <!-- ... -->
  {trackAnalytics && (
    <script type="text/javascript">
      var _tip = _tip || [];
      (function(d,s,id){ ... }(document, 'script', 'ti-js'));
    </script>
  )}
</head>
```

Y en páginas legales/gracias: `<BaseLayout trackAnalytics={false}>`.

Además, idle-delay cargar el script:

```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadTru, { timeout: 3000 });
} else {
  setTimeout(loadTru, 2500);
}
```

---

## 6.3 — CSS global.css con variables mezcladas con reset y typography

### Hallazgo
`src/styles/global.css` (113 líneas) contiene tokens CSS, CSS reset, tipografía base y utilidades — todo en un solo archivo. En una iteración posterior será difícil de mantener.

### Prioridad
🟡 Media

### Impacto
- **Mantenimiento:** alto
- **Performance:** bajo directo
- **SEO:** bajo

### Recomendación técnica
Separar en:

- `tokens.css` — custom properties (`--c-primary`, etc.)
- `reset.css` — normalización
- `typography.css` — body/headings base
- `utilities.css` — clases reutilizables

E importar desde `global.css`:

```css
@import './tokens.css';
@import './reset.css';
@import './typography.css';
@import './utilities.css';
```

No urgente. Queda para v2.

---

## 6.4 — Astro View Transitions no habilitado

### Hallazgo
Astro 4 incluye View Transitions API que da transiciones suaves entre páginas sin SPA-router. Habilitarlo mejora percepción de velocidad y tiempo perceived-load.

Actualmente no está configurado (no hay `<ViewTransitions />` en BaseLayout).

### Prioridad
🟡 Media

### Impacto
- **UX:** alto
- **SEO:** bajo
- **Comercial:** medio

### Recomendación técnica
Agregar:

```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <!-- ... -->
  <ViewTransitions />
</head>
```

Y etiquetar elementos persistentes (header, footer, bubble) con `transition:persist`:

```astro
<Header transition:persist="header" />
<Footer transition:persist="footer" />
<script is:inline transition:persist src="https://api.dmchamp.com/..."></script>
```

Esto evita que el widget de DMChamp se recargue en cada navegación.

---

## 6.5 — Componente `Hero.astro` con 364 líneas: mezcla lógica y presentación

### Hallazgo
`Hero.astro` contiene:

- Props (20 variantes)
- Lógica condicional para dark/light
- CSS ~250 líneas inline
- HTML de 3 variaciones de layout

Es legible pero demasiado acoplado. Un cambio visual requiere navegar todo el archivo.

### Prioridad
🟡 Media

### Impacto
- **Mantenimiento:** alto
- **Performance:** nulo
- **SEO:** nulo

### Recomendación técnica
Refactor opcional en v2:

- `Hero.astro` → shell con props y slots
- `HeroMedia.astro` → imagen + overlay
- `HeroContent.astro` → badge + H1 + desc + CTAs + metrics
- `HeroSeoColumn.astro` → col2 con párrafos SEO

Por ahora, documentar la estructura en comentarios dentro del archivo.

---

## 6.6 — Ausencia de `<link rel="preconnect">` para DMChamp y TruConversion

### Hallazgo
BaseLayout hace preconnect a `fonts.googleapis.com` y `fonts.gstatic.com`, pero no a `api.dmchamp.com` ni `app.truconversion.com`, que son los dos scripts de terceros que más bloquean.

### Prioridad
🟡 Media

### Impacto
- **Performance:** medio — -80 a -150 ms de handshake
- **SEO:** medio

### Recomendación técnica
Agregar preconnects antes de los scripts:

### Propuesta de mejora

```html
<!-- BaseLayout.astro <head> -->
<link rel="preconnect" href="https://api.dmchamp.com" />
<link rel="preconnect" href="https://app.truconversion.com" />
<link rel="dns-prefetch" href="https://api.dmchamp.com" />
<link rel="dns-prefetch" href="https://app.truconversion.com" />
```

---

## 6.7 — Inline event listeners en click global pueden fallar con delegación compleja

### Hallazgo
`BaseLayout.astro:193-199` intercepta todos los clicks con `closest('a[href*="wa.me"]')` y previene default. Funciona pero:

- Si un link tiene `data-no-interceptor` por alguna razón, no hay escape
- Un botón `<button onclick="openMespicChat()">` no entra por aquí (está OK porque no es anchor)
- Click-en-form-submit que contiene wa.me como parámetro → podría bloquear

Es robusto en 95% casos pero frágil.

### Prioridad
🟡 Media

### Impacto
- **UX:** medio (si falla)
- **SEO:** nulo
- **Comercial:** medio

### Recomendación técnica
Añadir opt-out explícito:

### Propuesta de mejora

```javascript
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href*="wa.me"]');
  if (!link) return;
  if (link.dataset.noIntercept === 'true') return;  // ← NUEVO
  e.preventDefault();
  openMespicChat();
}, true);
```

Y documentar en [[../reference_dmchamp]] que `data-no-intercept="true"` deja pasar el enlace wa.me directo.

---

## 6.8 — Archivos residuales en root: `404.html`, `_redirects`, `nojekyll`

### Hallazgo
Root del proyecto tiene:

- `404.html` (legacy, Astro ya genera `404.astro` → `/404/`)
- `_redirects` (vacío o con 1 línea)
- `.nojekyll` (relevante solo en GitHub Pages, no en el deploy actual)

Ruido en el repo.

### Prioridad
🟢 Baja

### Impacto
- **SEO:** nulo
- **Mantenimiento:** bajo

### Recomendación técnica
Eliminar los que no sirvan en el hosting actual. Documentar los necesarios en README.

---

## 6.9 — Falta script de `build && sitemap regenerate` en CI

### Hallazgo
`package.json` scripts:

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

No hay:

- `lint` (sin ESLint/Prettier configurados)
- `audit:links` (romped link checker)
- `audit:a11y` (axe-core)

### Prioridad
🟡 Media

### Impacto
- **Calidad:** alto en largo plazo
- **SEO:** medio
- **Comercial:** bajo directo

### Recomendación técnica
Agregar:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "audit:links": "linkinator ./dist --recurse --skip 'wa.me|dmchamp.com'",
    "audit:a11y": "pa11y-ci --sitemap dist/sitemap-0.xml",
    "prebuild": "node scripts/prebuild-check.mjs"
  }
}
```

Opcional: hook `prebuild` que valide manifest, canonicals y breadcrumbs antes de `astro build`.

---

## 6.10 — `astro.config.mjs` sin compress ni inline-stylesheets

### Hallazgo
`astro.config.mjs` usa config por defecto. Astro 4 permite:

```js
build: {
  inlineStylesheets: 'auto',  // inline CSS pequeño
  assets: 'assets',            // directorio limpio
},
compressHTML: true,            // minify HTML output
```

No se está aprovechando.

### Prioridad
🟡 Media

### Impacto
- **Performance:** medio — HTML -15% en promedio
- **SEO:** medio — FCP más rápido

### Recomendación técnica
Habilitar ambos flags. Ya viene en Astro 4 por defecto para compressHTML pero vale confirmar, y `inlineStylesheets: 'auto'` hay que declararlo.

### Propuesta de mejora

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://mesaspicnic.com',
  trailingSlash: 'never',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [mdx(), sitemap({ /* ... */ })],
});
```

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Impacto dominante |
|---|----------|-----------|-------------------|
| 6.1 | DMChamp sin async + queue | 🟠 | UX + conversión |
| 6.2 | TruConversion en todas las páginas | 🟠 | Performance |
| 6.3 | global.css monolítico | 🟡 | Mantenimiento |
| 6.4 | Sin Astro View Transitions | 🟡 | UX |
| 6.5 | Hero.astro mezcla todo | 🟡 | Mantenimiento |
| 6.6 | Sin preconnect para 3rd-parties | 🟡 | Performance |
| 6.7 | Click interceptor sin opt-out | 🟡 | UX edge-cases |
| 6.8 | Archivos residuales root | 🟢 | Higiene repo |
| 6.9 | Sin scripts de lint/audit | 🟡 | Calidad |
| 6.10 | Config Astro sin optimizaciones | 🟡 | Performance |
