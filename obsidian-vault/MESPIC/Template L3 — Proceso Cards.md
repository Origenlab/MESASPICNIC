# 🃏 Template L3 — Proceso Cards

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[Estructura de Componentes]] | [[Identidad Visual y Diseño]]

---

## Qué es un Template L3

| Nivel | Scope | Descripción |
|---|---|---|
| **L1** | Página completa | Hero + todas las secciones de una URL |
| **L2** | Sección | Un bloque completo con `SectionHeader` + contenido |
| **L3** | Patrón de contenido | El layout interno de una sección — clases CSS, estructura HTML, tokens de diseño |

> Un **Template L3** es el "molde" reutilizable que vive dentro de una sección L2. Puede instanciarse en cualquier página sin importar el contexto de negocio, sólo cambia el contenido.

---

## Template: `proceso-cards`

**ID Graphify:** `tmpl-proceso-cards`
**Tipo:** Template L3 — proceso paso a paso en tarjetas
**Estado:** ✅ Aprobado — 2026-04-17
**Referencia de implementación:** `/servicios/bodas/#proceso`
**Creado para:** Secciones "Cómo trabajamos" / procesos secuenciales de N pasos

---

## Cuándo usar este template

Usar `proceso-cards` cuando la sección:

- Describe **pasos ordenados** (1, 2, 3…) de un proceso, servicio o flujo de trabajo
- Tiene entre **3 y 6 ítems** (el layout 3+2 es óptimo para 5; para 6 usar 3+3)
- Requiere jerarquía visual clara entre "primer contacto" → "resultado final"
- Vive en una sección con `section-alt` (fondo crema) para contraste con las tarjetas blancas

**No usar** para: FAQs, listas de características sin orden, comparativas de productos.

---

## Estructura HTML completa

```astro
<!-- Encabezado de sección (L2) -->
<SectionHeader
  badge="Cómo trabajamos"
  tag="h2"
  title="Cómo Funciona, Paso a Paso"
  paragraph1="[Descripción del proceso]"
  paragraph2="[Dato de confianza / prueba social]"
/>

<!-- Grid de tarjetas (L3) -->
<div class="container">
  <div class="proceso-cards">

    <!-- Paso 01 -->
    <div class="paso-card">
      <span class="paso-card__num">01</span>
      <div class="paso-card__body">
        <h3 class="paso-card__title">[Título del paso]</h3>
        <p class="paso-card__text">[Descripción del paso — 2–3 líneas]</p>
      </div>
    </div>

    <!-- Paso 02 -->
    <div class="paso-card">
      <span class="paso-card__num">02</span>
      <div class="paso-card__body">
        <h3 class="paso-card__title">[Título del paso]</h3>
        <p class="paso-card__text">[Descripción del paso]</p>
      </div>
    </div>

    <!-- Paso 03 -->
    <div class="paso-card">
      <span class="paso-card__num">03</span>
      <div class="paso-card__body">
        <h3 class="paso-card__title">[Título del paso]</h3>
        <p class="paso-card__text">[Descripción del paso]</p>
      </div>
    </div>

    <!-- Paso 04 (fila 2 — más ancha) -->
    <div class="paso-card">
      <span class="paso-card__num">04</span>
      <div class="paso-card__body">
        <h3 class="paso-card__title">[Título del paso]</h3>
        <p class="paso-card__text">[Descripción del paso]</p>
      </div>
    </div>

    <!-- Paso 05 (fila 2 — más ancha) -->
    <div class="paso-card">
      <span class="paso-card__num">05</span>
      <div class="paso-card__body">
        <h3 class="paso-card__title">[Título del paso]</h3>
        <p class="paso-card__text">[Descripción del paso]</p>
      </div>
    </div>

  </div>
</div>
```

> ⚠️ La sección padre debe llevar `class="section section-alt"` para el fondo crema. El id es libre (`id="proceso"`, `id="como-funciona"`, etc.).

---

## CSS completo del template

Pegar dentro del `<style>` de la página (es CSS local, no global):

```css
/* ═══════════════════════════════════════════
   Template L3 — proceso-cards
   Layout: 3 tarjetas fila 1 + 2 tarjetas fila 2
   Referencia: /servicios/bodas/#proceso
   ═══════════════════════════════════════════ */

.proceso-cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;
}

/* Fila 1: pasos 01–03 — 2 columnas c/u = 6 total */
.paso-card:nth-child(1),
.paso-card:nth-child(2),
.paso-card:nth-child(3) {
  grid-column: span 2;
}

/* Fila 2: pasos 04–05 — 3 columnas c/u = 6 total */
.paso-card:nth-child(4),
.paso-card:nth-child(5) {
  grid-column: span 3;
}

/* Tarjeta base */
.paso-card {
  background: #fff;
  border: 1px solid var(--c-border, #E7E0D8);
  border-top: 3px solid var(--c-accent, #C8956C);   /* acento terracota */
  border-radius: var(--radius-md, 12px);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

/* Gradiente sutil de fondo (igual que FeatureCard) */
.paso-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(44, 85, 48, 0.03) 0%, transparent 60%);
  pointer-events: none;
}

/* Número fantasma */
.paso-card__num {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--c-primary, #2C5530);
  opacity: 0.12;
  line-height: 1;
  letter-spacing: -0.03em;
  align-self: flex-start;
}

/* Contenedor texto */
.paso-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
}

/* Título del paso */
.paso-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--c-text, #1C1917);
  line-height: 1.3;
  margin: 0;
}

/* Descripción */
.paso-card__text {
  font-size: 0.875rem;
  color: var(--c-text-muted, #78716C);
  line-height: 1.7;
  margin: 0;
}

/* ── Responsive ── */

/* Tablet (≤1024px): 2 columnas */
@media (max-width: 1024px) {
  .proceso-cards { grid-template-columns: repeat(2, 1fr); }
  .paso-card:nth-child(1),
  .paso-card:nth-child(2),
  .paso-card:nth-child(3),
  .paso-card:nth-child(4),
  .paso-card:nth-child(5) { grid-column: span 1; }
}

/* Móvil (≤640px): 1 columna */
@media (max-width: 640px) {
  .proceso-cards { grid-template-columns: 1fr; }
}
```

---

## Tokens de diseño utilizados

| Token | Valor en código | Rol en este template |
|---|---|---|
| `--c-border` | `#E7E0D8` | Borde lateral e inferior de la tarjeta |
| `--c-accent` | `#C8956C` | Borde superior terracota (indica secuencia) |
| `--c-primary` | `#2C5530` | Color base del número fantasma |
| `--c-text` | `#1C1917` | Título del paso |
| `--c-text-muted` | `#78716C` | Descripción del paso |
| `--radius-md` | `12px` | Border radius de la tarjeta |
| `gap` | `1.25rem` | Separación entre tarjetas |
| `padding` | `1.75rem` | Padding interno de cada tarjeta |

> Todos los tokens están definidos en el archivo CSS global del proyecto (BaseLayout). No redefinir localmente.

---

## Layout grid — diagrama

```
Desktop (≥1025px) — grid de 6 columnas:
┌───────┬───────┬───────┐
│  01   │  02   │  03   │   ← span 2 c/u (total = 6)
├───────┴┬──────┴───────┤
│   04   │     05       │   ← span 3 c/u (total = 6)
└────────┴──────────────┘

Tablet (≤1024px) — grid de 2 columnas:
┌───────┬───────┐
│  01   │  02   │
├───────┼───────┤
│  03   │  04   │
├───────┴───────┤
│      05       │
└───────────────┘

Móvil (≤640px) — 1 columna:
┌───────────────┐
│      01       │
├───────────────┤
│      02       │
│      ...      │
└───────────────┘
```

---

## Variantes de número de pasos

| Pasos | Layout recomendado | Grid config |
|---|---|---|
| 3 | 3 en una fila | `repeat(3, 1fr)` — sin nth-child especial |
| 4 | 2+2 | `repeat(2, 1fr)` para todos |
| 5 | 3+2 ✅ | Layout aprobado — ver CSS arriba |
| 6 | 3+3 | `repeat(3, 1fr)` — sin nth-child especial |

---

## Relación con otros componentes

| Componente | Relación |
|---|---|
| `SectionHeader` | Encabezado L2 obligatorio antes del grid. Siempre con `badge=` |
| `FeatureCard` | Hermano de diseño — misma tarjeta base, sin acento top ni número |
| `Hero` | Sin relación directa. No usar dentro del hero |
| `.section.section-alt` | Clase de sección padre recomendada (fondo crema, contraste con tarjetas blancas) |

---

## Páginas que usan este template

| Página | ID sección | Badge SectionHeader | Pasos |
|---|---|---|---|
| `/servicios/bodas/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/eventos-corporativos/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/fiestas-infantiles/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/picnic-romantico/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/fiestas-tematicas/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/reuniones-familiares/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/festivales/` | `#proceso` | "Cómo trabajamos" | 5 |
| `/servicios/sesiones-fotograficas/` | `#como-funciona` | "Cómo trabajamos" | 5 |

> Homologado en 8 páginas de servicios el 2026-04-17. Al agregar nuevas páginas, actualizar esta tabla y el nodo `tmpl-proceso-cards` en `graphify.json`.

---

## Reglas de implementación

1. **Siempre** envolver en `<section class="section section-alt" id="[id]">`
2. **Siempre** colocar `SectionHeader` con `badge=` antes del `container`
3. **No modificar** los tokens de diseño — usar las variables CSS
4. **No agregar animaciones** — el sistema de diseño MESPIC no usa animaciones
5. **El número** (`paso-card__num`) es decorativo — no requiere `aria-label`; el título H3 es el texto accesible principal
6. Para **más de 6 pasos**, dividir en dos secciones separadas o reconsiderar la arquitectura de contenido

---

#mespic #template #l3 #proceso #componentes #diseño
