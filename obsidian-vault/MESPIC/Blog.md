# 📝 Blog

> Parte de → [[🏠 MESPIC — Índice Principal]] | [[SEO y Palabras Clave]]
> Actualizado: 2026-04-17

**URL:** `https://mesaspicnic.com/blog/`

---

## Layout del Blog

Todos los artículos usan **[[BlogLayout — Template]]** — layout homologado con el resto del sitio.

Patrón: `BaseLayout → Hero(dark) → CtaBar → Artículo + Sidebar → CtaBarFinal`

---

## Artículos Publicados (4 artículos — formato .astro)

### 1. Mesas Picnic para Bodas en CDMX: Guía Completa
- **Archivo:** `renta-mesas-picnic-bodas-cdmx.astro`
- **URL:** `/blog/renta-mesas-picnic-bodas-cdmx/`
- **Categoría:** Bodas al aire libre
- **Layout:** BlogLayout ✅
- **Secciones:** Lead → Feature cards → Tabla invitados → 4 estilos → Pasos decoración → Galería → Servicios incluidos → Comparativa → Cobertura → FAQ → CTA final

### 2. Cuántas Mesas Picnic Necesitas Según el Número de Invitados
- **Archivo:** `cuantas-mesas-picnic-necesitas-segun-invitados.astro`
- **URL:** `/blog/cuantas-mesas-picnic-necesitas-segun-invitados/`
- **Categoría:** Guías y cálculo
- **Layout:** BlogLayout ✅
- **Secciones:** Lead → Feature cards → Tabla de cálculo → Por tipo de evento → Ejemplos reales → Errores comunes → FAQ → CTA final

### 3. Decoración de Mesas Picnic para Fiestas Infantiles
- **Archivo:** `decoracion-mesas-picnic-fiestas-infantiles.astro`
- **URL:** `/blog/decoracion-mesas-picnic-fiestas-infantiles/`
- **Categoría:** Fiestas infantiles
- **Layout:** BlogLayout ✅
- **Secciones:** Lead → 5 temáticas → Materiales → Distribución por cantidad → Consejos de montaje → Galería → FAQ → CTA final

### 4. Mobiliario Rústico para Eventos Corporativos
- **Archivo:** `mesas-picnic-eventos-corporativos.astro`
- **URL:** `/blog/mesas-picnic-eventos-corporativos/`
- **Categoría:** Eventos corporativos
- **Layout:** BlogLayout ✅
- **Secciones:** Lead → Tipos de eventos → Beneficios → Tabla de cálculo → Logística empresarial → Casos reales → Comparativa → FAQ → CTA final

---

## Artículos Planificados (SEO Strategy)

| Keyword objetivo | Artículo sugerido | Prioridad |
|---|---|---|
| cómo organizar un picnic | "Guía completa para organizar un picnic perfecto" | 🔴 Alta |
| cuánto cuesta rentar mesas picnic | "Precios de renta de mesas picnic en 2026" | 🔴 Alta |
| picnic romántico cdmx | "Mejores lugares para un picnic romántico en CDMX" | 🟠 Media |
| picnic corporativo cdmx | "Cómo organizar un picnic corporativo exitoso" | 🟠 Media |
| decoración mesa picnic | "Ideas de decoración para mesas picnic en eventos" | 🟠 Media |
| mesa picnic medidas | "Medidas de mesas picnic: ¿cuál necesitas?" | 🟡 Normal |
| tipos de mesas para eventos | "Tipos de mesas: cuál elegir según tu fiesta" | 🟡 Normal |

---

## Sidebar — Widgets fijos

Todos los artículos comparten el mismo sidebar con 5 widgets:
1. CTA WhatsApp (verde oscuro)
2. Servicios relacionados (links limpios, sin iconos)
3. Catálogo de productos (2 thumbnails)
4. Artículos relacionados (3 thumbnails)
5. Cobertura CDMX + Edomex

---

## Cómo crear un nuevo artículo

1. Crear `src/pages/blog/[slug].astro`
2. Usar `BlogLayout` — ver [[BlogLayout — Template]] para props y estructura
3. Nunca usar `.mdx` con `BaseLayout` — el patrón legacy está descontinuado
4. Ejecutar `npm run build` y copiar a `blog/[slug]/`

---

## Frecuencia Objetivo
- 1–2 artículos/semana (según plan SEO)
- Enlace interno desde cada artículo → páginas de servicios correspondientes

---

#mespic #blog #contenido #seo
