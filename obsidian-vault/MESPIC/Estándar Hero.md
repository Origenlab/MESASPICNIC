# Estándar Hero MESPIC ✓

**Estado:** Aprobado  
**Homologado:** 2026-04-17  
**Última actualización:** 2026-04-17  
**Páginas aplicadas:** 33  
**Referencia canónica:** `src/pages/index.astro` → `https://mesaspicnic.com/`

---

## Descripción

El componente `Hero` de MESPIC es el bloque de cabecera estándar que aparece al inicio de **todas las páginas del sitio**. Usa un gradiente forestal oscuro y estructura de dos columnas: izquierda con badge + título + descripción, derecha con dos párrafos SEO en texto corrido.

**Archivo:** `src/components/Hero.astro`

---

## Plantilla obligatoria

```astro
<Hero
  badge="..."
  title="..."
  description="..."
  seoParagraph1="..."
  seoParagraph2="..."
  dark={true}
/>
```

---

## Reglas (sin excepciones)

### ✅ Regla 1 — `dark={true}` obligatorio
Todos los heroes del sitio usan `dark={true}`, que activa el gradiente forestal oscuro (`#1B3B20 → #2C5530 → #1D4A25`). **Nunca omitir esta prop.** Si se omite, el hero aparece en fondo crema — error de diseño grave.

### ✅ Regla 2 — Sin botones CTA en el hero
Los heroes **no llevan botones (CTAs)**. Ni `ctaPrimary` ni `ctaSecondary`. Aplica a **todas las páginas del sitio sin excepción**, incluyendo servicios, catálogo, paquetes, blog, contacto y cotizar.

- `ctaPrimary={null}` — SIEMPRE
- `ctaSecondary={null}` — SIEMPRE

El default del componente `Hero.astro` ya está configurado en `null` para ambos. No es necesario pasarlos explícitamente, pero se pueden incluir como recordatorio visual.

**Aprobado:** 2026-04-17. Frank eliminó los CTAs del hero del index y extendió la regla a todo el sitio.

---

## Props del componente

| Prop | Tipo | Obligatorio | Valor aprobado |
|------|------|-------------|----------------|
| `badge` | string | Sí | texto descriptivo de la página |
| `title` | string | Sí | H1 de la página |
| `description` | string | Sí | texto introductorio (max ~200 chars) |
| `seoParagraph1` | string | Sí | párrafo SEO col. derecha |
| `seoParagraph2` | string | Sí | párrafo SEO col. derecha |
| `dark` | boolean | Sí | `true` — siempre |
| `ctaPrimary` | null | No | `null` — siempre |
| `ctaSecondary` | null | No | `null` — siempre |
| `metrics` | array | No | opcional, bajo descripción |

---

## Estructura visual

```
┌─────────────────────────────────────────────────┐
│  HERO (gradiente verde oscuro)                  │
│  ┌──────────────────┐  ┌────────────────────┐   │
│  │ [Badge pill]     │  │ Párrafo SEO 1      │   │
│  │ H1 Título        │  │                    │   │
│  │ Descripción      │  │ Párrafo SEO 2      │   │
│  │ [métricas opt.]  │  │                    │   │
│  └──────────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────┘
```

---

## Historial de cambios

| Fecha | Cambio |
|-------|--------|
| 2026-04-17 | Homologación inicial: `dark={true}` en 18 páginas. CTAs prohibidos: "Ver catálogo de mesas →" y "Ver paquetes". |
| 2026-04-17 | **Nueva regla:** Sin ningún CTA en el hero. `ctaPrimary=null` y `ctaSecondary=null` en las 33 páginas. Default del componente actualizado a `null`. Referencia: index `/`. |

---

## Relaciones

- Vinculado a: [[Estructura de Componentes]]
- Referencia de layout: [[BlogLayout — Template]]
- Estándar par: [[Estándar SectionHeader]]
- Ver también: [[Página - Home]]
