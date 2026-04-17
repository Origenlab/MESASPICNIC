---
tags: [arquitectura, diseño, tokens]
nivel: arquitectura
created: 2026-04-17
updated: 2026-04-17
---

# 🎨 Sistema de Diseño — OrigenLab Standard

→ [[MOC — MESPIC Website]] | [[Paleta de Colores]] | [[Tipografía]] | [[Tokens CSS]]

---

## Identidad visual

**Concepto:** Madera natural + Naturaleza + Premium  
**Paleta base:** Verde bosque · Madera cálida · Terracota  
**Sensación:** Artesanal, elegante, confiable, al aire libre

---

## Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--c-primary` | `#2C5530` | Botones, badges, acentos principales |
| `--c-primary-light` | `#3D7A45` | Hover en botones primarios |
| `--c-primary-dark` | `#1B3B20` | Hero dark, CTA Final, títulos |
| `--c-secondary` | `#8B6F4E` | Textos secundarios de madera |
| `--c-accent` | `#C8956C` | Terracota — CTAs, líneas, íconos CtaBar |
| `--c-accent-light` | `#E8C9A8` | Fondos de acento suave |
| `--c-bg` | `#FEFDFB` | Fondo base del cuerpo |
| `--c-bg-alt` | `#F7F4F0` | Secciones alternas (`.section-alt`) |
| `--c-bg-hero` | `#F2EDE7` | Hero variante clara |
| `--c-text` | `#1C1917` | Texto principal |
| `--c-text-muted` | `#78716C` | Párrafos descriptivos, subtítulos |
| `--c-border` | `#E7E0D8` | Bordes de cards y divisores |
| `--c-star` | `#F59E0B` | Estrellas en testimonios |
| `--c-success` | `#22C55E` | Estados de éxito |

Ver → [[Paleta de Colores]] para swatches visuales.

---

## Tipografía

| Rol | Familia | Pesos |
|-----|---------|-------|
| Headings | **Plus Jakarta Sans** | 400, 500, 600, 700, 800 |
| Body | **Inter** | 300, 400, 500, 600, 700 |

```css
--font-head: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
```

Ver → [[Tipografía]] para escala y uso.

---

## Layout y espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `--container` | `1400px` | Ancho máximo del contenido |
| `--header-height` | `70px` | Altura del header fijo |
| `--topbar-height` | `36px` | Altura de la TopBar |
| `--section-gap` | `5rem` | Espaciado entre secciones |

```css
.section       { padding: 5rem 0; }
.section-alt   { background: var(--c-bg-alt); }
.container     { max-width: 1400px; margin: 0 auto; padding: 0 1.5rem; }
```

---

## Radios y bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `8px` | Botones, inputs |
| `--radius-md` | `12px` | Cards, imágenes |
| `--radius-lg` | `20px` | Botones grandes, chips |

---

## Botones

| Clase | Apariencia | Uso |
|-------|-----------|-----|
| `.btn-primary` | Verde `#2C5530` / blanco | CTA principal |
| `.btn-outline` | Borde `--c-border` | Acción secundaria |
| `.btn-wa` | Verde WhatsApp `#25D366` | Contacto WhatsApp |

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.9375rem;
}
```

---

## Grids usados en el sitio

| Clase | Columnas | Breakpoint |
|-------|---------|------------|
| `.grid-4` | 4 cols | → 2 cols en ≤1024px → 1 col en ≤640px |

---

## Variantes de Hero

| Prop | Fondo | Uso |
|------|-------|-----|
| `dark={false}` (default) | `#F2EDE7` crema | Páginas interiores |
| `dark={true}` | Gradiente forestal verde | Home, Servicios L2 |

---

## Patrón de sección

Todas las secciones siguen el mismo patrón:

```
<section class="section [section-alt]" id="ancla">
  <SectionHeader badge="..." title="..." paragraph1="..." stats={[...]} />
  <div class="container">
    <div class="grid-4">
      <ComponenteCard ... />
    </div>
  </div>
</section>
```

---

## Easing

```css
--ease: cubic-bezier(0.4, 0, 0.2, 1);
```

Solo en botones y menú. **Sin animaciones en contenido** — política OrigenLab Standard.
