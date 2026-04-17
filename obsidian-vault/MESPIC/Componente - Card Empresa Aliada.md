---
tags: [mespic, componente, diseño, html, css]
updated: 2026-04-17
status: producción
---

# 🧩 Componente — Card Empresa Aliada

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Identidad Visual y Diseño]] | [[Testimonios]]

Documentación del componente de reseña corporativa usado en la sección `#testimonios` del Home.

---

## Propósito

Reemplaza las cards de reseñas individuales por un formato B2B que:
- Identifica visualmente a la empresa reseñante
- Enlaza directamente al sitio web de la empresa aliada
- Elimina elementos caducables (fechas)
- Mantiene coherencia visual con el grid existente

---

## Estructura HTML

```html
<div class="tc" data-astro-cid-3ba2o4vp
  style="border-top:3px solid #2C5530;
         position:relative;
         display:flex;
         flex-direction:column;
         padding-top:0.75rem;">

  <!-- 1. Fila superior: Badge + Estrellas -->
  <div style="display:flex; justify-content:space-between;
              align-items:center; margin-top:0; margin-bottom:0.75rem;">

    <!-- Badge "Empresa aliada" -->
    <span style="display:inline-flex; align-items:center; gap:0.35rem;
                 background:#eef4ee; color:#2C5530; font-size:0.65rem;
                 font-weight:700; letter-spacing:0.07em;
                 padding:0.3rem 0.65rem; border-radius:20px;
                 text-transform:uppercase;">
      <!-- SVG ícono edificio -->
      Empresa aliada
    </span>

    <!-- 5 Estrellas -->
    <div class="tc__stars" aria-label="5 de 5 estrellas" data-astro-cid-3ba2o4vp>
      <span class="tc__star" data-astro-cid-3ba2o4vp>★</span> × 5
    </div>
  </div>

  <!-- 2. Texto de reseña -->
  <blockquote class="tc__quote" data-astro-cid-3ba2o4vp
    style="margin-top:0; padding-top:0; flex:1;">
    [Texto de la reseña]
  </blockquote>

  <!-- 3. Footer: Logo + Nombre + Sector -->
  <div class="tc__author" data-astro-cid-3ba2o4vp
    style="margin-top:1rem; padding-top:1rem;
           border-top:1px solid rgba(44,85,48,0.1);">

    <!-- Logo cuadrado con iniciales -->
    <div style="width:42px; height:42px; border-radius:8px;
                background:#2C5530; color:#fff; font-size:0.75rem;
                font-weight:800; display:flex; align-items:center;
                justify-content:center; flex-shrink:0;
                letter-spacing:0.03em;
                font-family:'Plus Jakarta Sans',sans-serif;">
      XX
    </div>

    <div class="tc__info" data-astro-cid-3ba2o4vp>

      <!-- Nombre empresa con link externo -->
      <a href="https://empresa.com/" target="_blank" rel="noopener noreferrer"
        style="color:#2C5530; text-decoration:none; font-weight:700;
               font-size:0.9rem; display:inline-flex;
               align-items:center; gap:0.3rem;">
        Nombre Empresa
        <!-- SVG ícono enlace externo -->
      </a>

      <!-- Sector y ciudad -->
      <span class="tc__event" data-astro-cid-3ba2o4vp>
        Sector · CDMX
      </span>
    </div>
  </div>
</div>
```

---

## Tokens de Diseño del Componente

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `border-top` | `3px solid #2C5530` | Acento verde superior diferenciador |
| `padding-top` | `0.75rem` | Espacio interior superior |
| Badge background | `#eef4ee` | Verde muy claro, coherente con paleta |
| Badge color | `#2C5530` | Verde principal |
| Logo size | `42×42px` | Cuadrado compacto |
| Logo radius | `8px` | Esquinas suavemente redondeadas |
| Logo background | `#2C5530` | Verde principal |
| Logo text | blanco, 700–800 weight | Contraste máximo |
| Divisor footer | `1px solid rgba(44,85,48,0.1)` | Verde translúcido sutil |
| Link color | `#2C5530` | Verde principal, sin subrayado |
| Ícono externo | `10×10px`, opacidad 55% | Indicador de enlace saliente |

---

## Diferencias vs Card Individual

| Elemento | Card Individual (original) | Card Empresa (nuevo) |
|----------|---------------------------|----------------------|
| Fila superior | `.tc__top` con fecha | Div flex con badge + estrellas |
| Fecha | Sí (ej. "Feb 2026") | **No** — evergreen |
| Avatar | Círculo con iniciales | Cuadrado con iniciales (empresa) |
| Nombre | `<span>` texto plano | `<a>` con link + ícono externo |
| Subtítulo | Tipo de evento + colonia | Sector + CDMX |
| Calificación | 4 o 5 estrellas | **Siempre 5 estrellas** |
| Badge | Ninguno | "Empresa aliada" en verde |

---

## Notas de Implementación

- El componente usa `data-astro-cid-3ba2o4vp` para heredar los estilos base de `.tc` del CSS compilado de Astro.
- Los estilos específicos de empresa se aplican como **inline styles** para no modificar el CSS compilado.
- El `flex:1` en el blockquote asegura que las cards del grid tengan altura uniforme cuando el texto varía.
- `rel="noopener noreferrer"` en todos los links externos — buena práctica de seguridad.

---

## Archivos Modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `index.html` | HTML compilado | Sección `#testimonios`, 8 cards + encabezado |
| `dist/index.html` | HTML dist | Copia sincronizada |

---

#mespic #componente #html #css #diseño #testimonios
