---
tags: [MOC, MESPIC]
created: 2026-04-17
updated: 2026-04-17
---

# 🏠 MESPIC — Mapa de Contenido

> **Vault raíz.** Todos los documentos están enlazados desde aquí. Úsalo como punto de partida para navegar la arquitectura del sitio.

---

## 📐 Arquitectura

| Documento | Descripción |
|-----------|-------------|
| [[Estructura del Sitio]] | Jerarquía L1→L4, rutas, estado y diagrama Mermaid |
| [[Sistema de Diseño]] | Paleta, tipografía, tokens CSS y patrones visuales |
| [[Stack Técnico]] | Astro, dependencias, scripts y flujo de build |

---

## 📄 Páginas

### Nivel 1 — Raíz
- [[L1 — Home]] · `/` · ✅ Publicada

### Nivel 2 — Secciones principales
| Página | Ruta | Estado |
|--------|------|--------|
| [[L2 — Servicios]] | `/servicios/` | ✅ Publicada |
| [[L2 — Nosotros]] | `/nosotros/` | ⚠️ Sin componentes OrigenLab |
| [[L2 — Contacto]] | `/contacto/` | ✅ Publicada |
| [[L2 — Cotizar]] | `/cotizar/` | ✅ Publicada |
| [[L2 — Blog]] | `/blog/` | ✅ Publicada |

### Nivel 3 — Servicios
| Página | Ruta | Estado |
|--------|------|--------|
| [[L3 — Bodas]] | `/servicios/bodas/` | ✅ Publicada |
| [[L3 — Eventos Corporativos]] | `/servicios/eventos-corporativos/` | ✅ Publicada |
| [[L3 — Fiestas Infantiles]] | `/servicios/fiestas-infantiles/` | ✅ Publicada |
| [[L3 — Picnic Romántico]] | `/servicios/picnic-romantico/` | ✅ Publicada |
| [[L3 — Fiestas Temáticas]] | `/servicios/fiestas-tematicas/` | ✅ Publicada |
| [[L3 — Reuniones Familiares]] | `/servicios/reuniones-familiares/` | ✅ Publicada |
| [[L3 — Festivales y Ferias]] | `/servicios/festivales/` | ✅ Publicada |
| [[L3 — Sesiones Fotográficas]] | `/servicios/sesiones-fotograficas/` | ✅ Publicada |

### Nivel 4 — Sub-servicios Bodas
| Página | Ruta | Estado |
|--------|------|--------|
| [[L4 — Boda Boho]] | `/servicios/bodas/boho/` | ✅ Publicada |
| [[L4 — Boda Clásica]] | `/servicios/bodas/clasica/` | ✅ Publicada |
| [[L4 — Boda Íntima]] | `/servicios/bodas/intima/` | ✅ Publicada |
| [[L4 — Boda Rústica]] | `/servicios/bodas/rustica/` | ✅ Publicada |

### Nivel 4 — Sub-servicios Corporativo
| Página | Ruta | Estado |
|--------|------|--------|
| [[L4 — Corp Activaciones]] | `/servicios/eventos-corporativos/activaciones/` | ✅ Publicada |
| [[L4 — Corp Comidas]] | `/servicios/eventos-corporativos/comidas/` | ✅ Publicada |
| [[L4 — Corp Conferencias]] | `/servicios/eventos-corporativos/conferencias/` | ✅ Publicada |
| [[L4 — Corp Team Building]] | `/servicios/eventos-corporativos/team-building/` | ✅ Publicada |

---

## 🧩 Componentes

| Componente | Tipo | Uso |
|------------|------|-----|
| [[BaseLayout]] | Layout | Wrapper HTML global |
| [[TopBar]] | Global | Barra superior de contacto |
| [[Header]] | Global | Navegación principal |
| [[Hero]] | Sección | Portada de página, 2 variantes |
| [[CtaBar]] | Sección | Navegación rápida post-hero |
| [[SectionHeader]] | UI | Encabezado de sección 2 columnas |
| [[ServiceCard]] | UI | Tarjeta de servicio con imagen |
| [[FeatureCard]] | UI | Tarjeta de diferenciador numérico |
| [[TestimonialCard]] | UI | Tarjeta de reseña |
| [[GallerySection]] | Sección | Grid de imágenes responsive |
| [[ProductGallery]] | Sección | Galería + sidebar de productos |
| [[FaqSection]] | Sección | Acordeón FAQ + formulario |
| [[CtaBarFinal]] | Sección | Barra de conversión final |
| [[Breadcrumbs]] | UI | Migas de pan |
| [[Footer]] | Global | Pie de página |
| [[WaBubble]] | UI | Burbuja flotante de WhatsApp |

---

## 🎨 Diseño

- [[Paleta de Colores]] — Verde bosque · Madera · Terracota
- [[Tipografía]] — Plus Jakarta Sans + Inter
- [[Tokens CSS]] — Variables globales en `global.css`

---

## 📌 Convención de niveles

```
L1  →  /                        (Home)
L2  →  /seccion/                (Servicios, Nosotros, Blog…)
L3  →  /servicios/categoria/    (Bodas, Corporativo, Infantil…)
L4  →  /servicios/cat/estilo/   (Boda Boho, Corp Team Building…)
```

## 🏷️ Leyenda de colores (Graph View)

| Color | Categoría |
|-------|-----------|
| 🟡 Dorado | MOC |
| 🟢 Verde oscuro | L1 |
| 🟢 Verde medio | L2 |
| 🟢 Verde claro | L3 |
| 🟩 Verde pálido | L4 |
| 🔵 Azul | Componentes |
| 🟣 Morado | Diseño |
| 🟠 Naranja | Arquitectura |
