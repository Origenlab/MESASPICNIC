---
title: "Plan estratégico — Directorio de Espacios al Aire Libre para Eventos"
proyecto: MESPIC / mesaspicnic.com
fecha: 2026-06-03
estado: Propuesta para aprobación
autor: Estrategia MESPIC
---

# Directorio de Espacios al Aire Libre para Eventos
### Plan estratégico y arquitectura — MESPIC

---

## 1. Resumen ejecutivo

MESPIC construirá un **directorio de espacios al aire libre para eventos** (jardines, terrazas, rooftops, haciendas y foros campestres de CDMX y Edomex) dentro de `mesaspicnic.com`. El directorio cumple **dos funciones a la vez**:

1. **Captar tráfico orgánico (B2C).** Cada venue es una página optimizada para búsquedas locales ("jardín para boda en Coyoacán", "terraza para evento en Naucalpan"). Quien busca un espacio necesita mobiliario → MESPIC.
2. **Prospectar partners (B2B).** Se listan **venues que están en Google Business pero NO tienen sitio web**. Esos espacios no compiten en SEO con su propia web, así que la página de MESPIC rankea para su nombre. A cambio, MESPIC les ofrece visibilidad gratis y se convierte en su proveedor natural de mobiliario.

La jugada central: **el directorio no es un gasto, es un motor de adquisición de clientes B2B y de tráfico B2C simultáneo**, construido sobre venues que hoy son invisibles en internet.

---

## 2. Por qué venues sin sitio web (la decisión clave)

Listar específicamente espacios **sin web propia** es lo que hace este directorio defendible y rentable:

| Ventaja | Explicación |
|---|---|
| **SEO sin competencia** | Si el venue no tiene web, nadie rankea para su nombre de marca + intención. La ficha de MESPIC puede posicionar para "[Nombre del Jardín] eventos" casi sin esfuerzo. |
| **Lead B2B perfecto** | Un venue sin presencia digital tiene una necesidad obvia (visibilidad). MESPIC se la resuelve gratis y entra como aliado, no como vendedor frío. |
| **Datos ya públicos** | Google Business expone nombre, dirección, teléfono, fotos, reseñas y horarios. Material suficiente para una ficha sin pedir nada al venue. |
| **Reciprocidad natural** | "Te puse en mi directorio sin costo" abre la puerta a "¿rentas mis mesas para tus eventos?" o a un acuerdo de referidos. |
| **Inventario amplio** | Hay cientos de jardines y haciendas familiares sin web en Edomex. Inventario casi infinito para escalar el directorio. |

> Regla editorial: **no se listan competidores de mobiliario ni venues con web fuerte que ya rankean.** El foco es el espacio invisible que MESPIC vuelve visible.

---

## 3. Arquitectura de información

Hub nuevo dentro del sitio Astro existente, siguiendo la jerarquía de URLs y prioridades de sitemap ya establecidas.

```
/espacios/                         → Hub principal (L2, priority 0.9)
  /espacios/cdmx/                  → Por zona (L3, priority 0.8)
  /espacios/edomex/
  /espacios/jardines/              → Por tipo de espacio (L3)
  /espacios/terrazas/
  /espacios/haciendas/
  /espacios/rooftops/
  /espacios/foros-campestres/
  /espacios/[slug-del-venue]/      → Ficha individual del venue (L4, priority 0.7)
```

Estructura de filtrado dentro del hub: **por zona**, **por tipo de espacio**, **por capacidad** y **por tipo de evento** (boda, XV, corporativo, infantil). Esto cubre las combinaciones de búsqueda long-tail sin crear páginas huérfanas.

**Nomenclatura recomendada:** usar `/espacios/` (no `/salones/`) porque "salón" connota interior cerrado; "espacios al aire libre" es exacto y abarca jardín, terraza, rooftop y hacienda. Alternativa de marca: **"MESPIC Espacios"** o **"Directorio MESPIC"**.

---

## 4. Estructura de cada ficha de venue

Cada ficha es una landing page optimizada. Campos:

**Datos del espacio (de Google Business)**
- Nombre del espacio + slug
- Tipo (jardín / terraza / rooftop / hacienda / foro)
- Zona / municipio / colonia
- Dirección aproximada y mapa embebido
- Capacidad estimada (personas)
- Galería de fotos (de Google Business o propias de MESPIC si ya trabajó ahí)
- Horarios y datos de contacto público
- Reseñas / calificación (citando Google)

**Contenido de valor SEO (redactado por MESPIC)**
- Descripción del espacio (200-300 palabras, original, no copiada)
- Tipos de evento ideales para ese espacio
- "Qué incluye / qué no incluye" (la mayoría de jardines rentan solo el espacio → necesitas mobiliario)
- Tips para montar un evento ahí

**Conversión (el corazón del modelo)**
- CTA primario: **"Renta mesas picnic y mobiliario para tu evento en [Nombre del Espacio]"** → cotizador MESPIC
- CTA secundario: contacto del venue (referido)
- Bloque "MESPIC ya ha montado eventos en espacios como este"
- Productos sugeridos del catálogo según capacidad del espacio

**Técnico/SEO**
- Schema.org `LocalBusiness` / `EventVenue` + `BreadcrumbList`
- Title: `[Nombre del Espacio] — [Tipo] para Eventos en [Zona] | MESPIC`
- Meta description con intención local
- Canonical, OG image, enlazado interno a servicios y catálogo

---

## 5. Modelo de captación de venues (workflow operativo)

Proceso repetible para poblar el directorio:

1. **Fuente:** Google Maps / Google Business. Buscar por zona + tipo ("jardín para eventos [municipio]").
2. **Filtro:** quedarse solo con los que **no tienen sitio web** en su ficha de Google Business y tienen reseñas reales (señal de que operan).
3. **Captura de datos:** nombre, dirección, teléfono, fotos, capacidad aproximada, calificación.
4. **Redacción:** MESPIC escribe la descripción original (nunca copiar texto de terceros) y los bloques de valor.
5. **Publicación:** se genera la ficha desde una plantilla data-driven.
6. **Outreach B2B (opcional pero recomendado):** contactar al venue — "Te incluimos gratis en nuestro directorio, ¿te interesa que llevemos mobiliario a tus eventos / acuerdo de referidos?".

> Modelo de datos sugerido: un archivo `src/data/espacios.json` (o colección de contenido Astro) con un objeto por venue. La plantilla de página genera todas las fichas automáticamente — se escala añadiendo registros, sin tocar código.

---

## 6. Estrategia SEO

Aprovecha lo que el sitio ya hace bien (EMD, jerarquía de sitemap, blog maduro):

- **Keywords objetivo:** combinaciones `[tipo de espacio] + para [evento] + en [zona]`. Volumen individual bajo, pero cientos de fichas suman tráfico significativo (estrategia long-tail / "directorio").
- **Enlazado interno:** cada ficha enlaza a `/servicios/` y `/catalogo/` relevantes; los artículos del blog existentes (bodas en haciendas, Valle de Bravo, etc.) enlazan al directorio. Refuerza autoridad temática.
- **Contenido único obligatorio:** Google penaliza directorios de fichas duplicadas/raspadas. Cada descripción debe ser original. Éste es el principal riesgo y la principal barrera de entrada.
- **Datos estructurados:** Schema de venue + breadcrumbs en cada ficha.
- **Sitemap:** las fichas entran como L4 (priority 0.7) según la lógica de `astro.config.mjs` ya existente.
- **Páginas de zona/tipo** como pillar pages que agregan y enlazan las fichas.

---

## 7. Monetización (fases)

Se eligió **listado gratis para SEO** como base. Evolución sugerida:

| Fase | Modelo | Objetivo |
|---|---|---|
| **1 — Lanzamiento** | Todas las fichas gratis | Inventario + tráfico + autoridad. Captar partners. |
| **2 — Referidos** | Acuerdo informal con venues | MESPIC manda leads; venue renta mobiliario o paga comisión. |
| **3 — Destacados** | Venues pagan por aparecer arriba con galería ampliada y badge | Ingreso recurrente una vez que el directorio tiene tráfico demostrable. |

No cobrar nada hasta tener tráfico probado; el valor para el venue es el tráfico, y aún no existe en fase 1.

---

## 8. Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| **Contenido duplicado / thin content** (penalización Google) | Descripción original por ficha. No publicar fichas vacías; mínimo 200 palabras útiles. |
| **Datos desactualizados** (venue cerró, cambió teléfono) | Revisión trimestral; nota "datos de referencia, confirma con el venue". |
| **Uso de fotos de terceros** | Usar fotos propias de MESPIC cuando existan; si se usan de Google, atribuir o pedir permiso. Preferir fotos del mobiliario MESPIC en el espacio. |
| **Venue molesto por aparecer sin permiso** | Outreach proactivo y opción de retiro inmediato. El tono es "te damos visibilidad gratis". |
| **Percepción de "directorio relleno"** | Curaduría: calidad sobre cantidad al inicio; arrancar con 20-30 fichas sólidas, no 300 mediocres. |

---

## 9. Fases de ejecución

**Fase 0 — Validación (esta semana)**
- Aprobar nomenclatura (`/espacios/`) y alcance.
- Definir 3-5 zonas piloto (ej. Coyoacán, Tlalpan, Naucalpan, Atizapán, Calimaya).

**Fase 1 — MVP (2-3 semanas)**
- Plantilla de ficha + modelo de datos `espacios.json`.
- Hub `/espacios/` + páginas de zona y tipo.
- 20-30 fichas piloto de venues sin web, redactadas a mano.
- Schema, sitemap, enlazado interno.

**Fase 2 — Escala (continuo)**
- Sumar fichas por zona; outreach B2B a venues listados.
- Enlazar artículos de blog existentes al directorio.
- Medir tráfico y leads atribuidos.

**Fase 3 — Monetización**
- Activar referidos y, con tráfico probado, fichas destacadas de pago.

---

## 10. Métricas de éxito

- Tráfico orgánico a `/espacios/*` (Search Console).
- Posiciones para "[nombre venue] + eventos" y "[tipo] para [evento] en [zona]".
- Leads/cotizaciones atribuidos al directorio.
- Partners B2B cerrados (venues que rentan mobiliario o mandan referidos).
- Nº de fichas publicadas y % con descripción original.

---

## Siguiente paso

Si apruebas este plan, lo siguiente es construir el **MVP de Fase 1**: plantilla de ficha en Astro + `espacios.json` + hub `/espacios/`, con 3-5 fichas de muestra ya redactadas para que veas cómo se ven y rankean. Avísame con qué zonas piloto arrancamos.
