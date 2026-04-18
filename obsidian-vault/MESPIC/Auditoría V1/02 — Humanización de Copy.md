# 02 — Humanización de Copy

**Módulo:** Copywriting, tono y densidad semántica
**Hallazgos:** 9
**Prioridad global:** 🟠 alta

---

## Contexto

MESPIC tiene un producto con personalidad: mesas de pino natural, montaje al aire libre, experiencias para bodas y eventos corporativos. El copy actual no lo transmite: en muchas secciones el tono suena a plantilla SEO de 2018 — frases vacías ("transforma cualquier espacio", "experiencias inolvidables"), keyword stuffing ("renta de mesas picnic" repetido 4–5 veces en el mismo párrafo), y aperturas genéricas copiadas entre páginas de servicio.

El objetivo de este módulo es pasar a un copy que:

1. Suene a un humano que conoce el negocio (no a una IA rellenando huecos).
2. Use variedad léxica: "mobiliario de madera", "mesas de pino", "bancas para eventos", "alquiler", "montaje".
3. Hable específico del caso de uso (boda, corporativo, infantil) en vez de fórmulas universales.
4. Reduzca densidad keyword de ~3.5% observada a 1–1.8% natural.

---

## 2.1 — Apertura robótica recurrente: "Transforma cualquier espacio…"

### Hallazgo
Frase aparece literal en:

- `Footer.astro:17` → "Transforma cualquier espacio en una experiencia inolvidable"
- `servicios/bodas.astro` (intro)
- `servicios/eventos-corporativos.astro` (cierre)
- `index.astro` (sección de beneficios)

Es el cliché #1 de copy generado por IA sin curación. Google y usuarios lo identifican al instante como contenido "low-effort".

### Prioridad
🟠 Alta

### Impacto
- **SEO:** medio — no penaliza directo pero reduce dwell time
- **UX:** alto — rompe credibilidad en el primer scroll
- **Comercial:** alto — la homepage es el 60% del tráfico; una apertura débil cuesta conversiones

### Recomendación técnica
Reescribir cada aparición con copy específico del contexto. Nunca repetir la misma fórmula "transforma/convierte/vuelve [X] en [Y]".

### Propuesta de mejora

**Footer actual:**
> "Transforma cualquier espacio en una experiencia inolvidable con mobiliario premium de madera natural."

**Footer propuesto:**
> "Mesas de pino barnizado, bancas corridas y montaje puntual. Rentamos el mobiliario que le da carácter a bodas, corporativos y fiestas en CDMX desde 2019."

**Servicios/Bodas actual (intro):**
> "Transforma tu boda al aire libre en una experiencia inolvidable con nuestras mesas picnic de madera natural."

**Servicios/Bodas propuesto:**
> "Tu boda al aire libre merece mobiliario que aguante el sol, el brindis y las fotos. Nuestras mesas picnic de pino se ven bien con mantel rústico y sin él, soportan 8 invitados cómodos, y llegan armadas al lugar."

---

## 2.2 — "Respuesta inmediata" / "te respondemos en minutos"

### Hallazgo
Apariciones:

- `TopBar.astro:88` → "WhatsApp — Respuesta inmediata"
- `CtaBarFinal.astro` (múltiples variantes) → "Te respondemos en minutos"
- `FaqSection.astro` (microcopy del form) → "Respuesta en menos de 10 minutos"

Problema doble: (1) es un compromiso que el negocio no siempre puede cumplir (riesgo reputacional), (2) es un latiguillo que todos los competidores usan → no diferencia.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** bajo
- **UX:** medio — genera fricción cuando el usuario escribe y no recibe respuesta en 10 min
- **Comercial:** medio — expectativa mal calibrada → reseñas negativas

### Recomendación técnica
Reemplazar por compromiso realista y auditable. Dar rango honesto (mismo día hábil) o poner el valor real (humano respondiendo, no bot).

### Propuesta de mejora

| Ubicación | Antes | Después |
|-----------|-------|---------|
| TopBar | "Respuesta inmediata" | "Te contestamos personal" |
| CtaBarFinal | "Te respondemos en minutos" | "Cotización el mismo día hábil" |
| FaqSection | "Respuesta en menos de 10 minutos" | "Respondemos con precio y disponibilidad para tu fecha" |

---

## 2.3 — Keyword stuffing en página de Servicios

### Hallazgo
En `servicios/bodas.astro` (muestra 800 palabras):

- "renta de mesas picnic" × 11
- "mesas picnic" × 18
- "mesas picnic de madera" × 7
- "nuestras mesas picnic" × 6

Densidad estimada: 3.8% (el umbral saludable es 1.0–1.8%).

### Prioridad
🔴 Crítica

### Impacto
- **SEO:** alto — patrón de sobreoptimización penalizado por Google desde Panda/Hummingbird
- **UX:** medio — fatiga lectora
- **Comercial:** bajo — directo, alto indirecto

### Recomendación técnica
Aplicar la regla definida en [[00 — Índice Maestro]]: máximo 2 instancias exactas de "renta de mesas picnic" por página. Resto sustituir con sinónimos y variantes LSI:

- "mobiliario de madera"
- "mesas para evento"
- "bancas corridas de pino"
- "alquiler de mesas"
- "mesas picnic para bodas" (long-tail específico, 1 vez)
- "nuestro catálogo"
- "esta línea"
- "el mobiliario"

### Propuesta de mejora

**Antes (párrafo típico):**
> "En MESPIC ofrecemos renta de mesas picnic para bodas al aire libre. Nuestras mesas picnic están fabricadas en madera natural. La renta de mesas picnic para boda incluye entrega y montaje. Las mesas picnic de madera dan un toque cálido a tu boda."

**Después:**
> "Rentamos mesas picnic para bodas al aire libre: mobiliario de madera natural de pino, barnizado mate, con bancas corridas para 8 personas cada mesa. Incluimos entrega, montaje y recolección al final del evento."

Resultado: de 4 apariciones a 1 exacta + 1 variante; copy más fluido y con datos concretos (8 personas, barnizado mate, pino).

---

## 2.4 — Copy-paste entre páginas de servicio

### Hallazgo
Párrafos idénticos entre:

- `servicios/bodas.astro` ↔ `servicios/aniversarios.astro` (sección "incluye")
- `servicios/eventos-corporativos.astro` ↔ `servicios/team-building.astro` (sección "para quién")
- `servicios/festivales.astro` ↔ `servicios/ferias.astro` (sección "logística")

Google detecta duplicate content intra-dominio y consolida señales en una sola URL, dejando las demás como "canónicas débiles".

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — canibaliza rankings
- **UX:** medio — usuario que navega entre páginas percibe "es la misma cosa"
- **Comercial:** medio

### Recomendación técnica
Cada página de servicio debe tener:

1. Intro específica del caso (bodas ≠ corporativos ≠ infantiles).
2. "Qué incluye" con el mismo componente compartido (evitar copiar texto).
3. Casos de ejemplo concretos de esa vertical (1–2 por página).
4. FAQs propios de ese uso.

### Propuesta de mejora

Crear componente `<ServiceIncludes>` que renderice desde un frontmatter o data-prop en vez de hardcodear el mismo párrafo:

```astro
<ServiceIncludes
  items={[
    { icon: "🚚", title: "Entrega puntual", copy: "Llegamos 2h antes del evento" },
    { icon: "🛠️", title: "Montaje incluido", copy: "Armamos y distribuimos" },
    { icon: "♻️", title: "Recolección", copy: "Desmontamos al cierre" },
  ]}
/>
```

Luego, texto de introducción único por página. Ejemplo:

- **Bodas:** "Las mesas picnic funcionan para bodas al aire libre, jardín, haciendas y terrazas. Su estructura soporta mantelería y centros de mesa sin temblar."
- **Corporativos:** "En eventos corporativos las mesas picnic rompen la formalidad típica de silla y banquete: ayudan al networking porque obligan a sentarse codo a codo."
- **Infantiles:** "Para fiestas infantiles usamos la versión baja (68 cm) — es segura para niños de 4 a 12 años y soporta actividades como pintacaritas o repostería."

---

## 2.5 — Headings (H1/H2) genéricos y repetidos

### Hallazgo
H1 actuales:

| Página | H1 |
|--------|----|
| `/` | "Renta de mesas picnic de madera para eventos en CDMX" |
| `/servicios/` | "Renta de mesas picnic para todo tipo de eventos" |
| `/servicios/bodas/` | "Renta de mesas picnic para bodas" |
| `/servicios/eventos-corporativos/` | "Renta de mesas picnic para eventos corporativos" |
| `/catalogo/` | "Catálogo de mesas picnic en renta" |
| `/paquetes/` | "Paquetes de renta de mesas picnic" |

Los 6 H1 empiezan con "Renta de mesas picnic…". Es perfecto para 2012, terrible en 2026 — Google ya penaliza patrón de exact-match repetido y premia variedad + entity-richness.

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — homogeneidad H1 es señal de low-effort
- **UX:** bajo — el usuario no compara, pero Google sí
- **Comercial:** medio

### Recomendación técnica
Cada H1 único, cada uno capturando intent diferente. El keyword principal va en uno o dos H1 exactos (home + hub de servicios); el resto usa variantes + intent modifier.

### Propuesta de mejora

| Página | H1 nuevo |
|--------|----------|
| `/` | "Renta de mesas picnic para eventos en CDMX" *(mantener — query principal)* |
| `/servicios/` | "Mobiliario para eventos: mesas, bancas y montajes" |
| `/servicios/bodas/` | "Mesas picnic para bodas al aire libre" |
| `/servicios/eventos-corporativos/` | "Mobiliario para eventos de empresa y networking" |
| `/servicios/fiestas-infantiles/` | "Mesas bajas seguras para fiestas infantiles" |
| `/servicios/festivales/` | "Mobiliario para festivales, ferias y food markets" |
| `/catalogo/` | "Catálogo de mesas picnic, bancas y accesorios" |
| `/paquetes/` | "Paquetes de renta con entrega, montaje y recolección" |

---

## 2.6 — Descripciones de beneficio sin datos

### Hallazgo
En `index.astro` (sección beneficios) y tarjetas de servicio, los bullets dicen cosas como:

- "Calidad premium"
- "Servicio profesional"
- "Atención personalizada"
- "Puntualidad garantizada"

Son claims sin sustento. Cualquiera puede escribirlos. No diferencian.

### Prioridad
🟡 Media

### Impacto
- **SEO:** bajo
- **UX:** medio — el usuario "skimea" y se queda vacío
- **Comercial:** alto — los decisores (wedding planners, event managers) buscan especificidad

### Recomendación técnica
Sustituir claim genérico por dato específico siempre que haya uno.

### Propuesta de mejora

| Antes | Después |
|-------|---------|
| "Calidad premium" | "Pino de 1.5" lijado y barniz mate anti-humedad" |
| "Servicio profesional" | "Operadores uniformados y seguro de responsabilidad civil incluido" |
| "Atención personalizada" | "Un mismo asesor te acompaña desde la cotización hasta el desmontaje" |
| "Puntualidad garantizada" | "Entregamos 2 horas antes de tu evento o reembolsamos el flete" |

---

## 2.7 — Meta descriptions homogéneas

### Hallazgo
Revisión de los 42 meta description del sitio:

- 31 comienzan con "Renta de mesas picnic…"
- 19 repiten casi literal el texto del default de `BaseLayout.astro`
- 8 páginas no tienen meta description propia (hereda el default)

Además, 11 meta descriptions superan 160 caracteres (se truncan en SERP).

### Prioridad
🟠 Alta

### Impacto
- **SEO:** alto — CTR desde SERP depende de meta description variada y específica
- **UX:** medio — primera impresión en buscador
- **Comercial:** alto — meta mejor escrita = +5-8% CTR

### Recomendación técnica
Meta description única por página, 140–155 caracteres, con:

1. Beneficio específico de esa página
2. Prueba social o dato numérico cuando haya
3. Call-to-action o modificador de intent

### Propuesta de mejora

| Página | Antes | Después |
|--------|-------|---------|
| `/` | "Renta de mesas picnic para eventos en CDMX y Estado de México. Bodas, corporativos, fiestas infantiles y temáticas." (default) | "Mesas picnic de pino para bodas, corporativos y fiestas en CDMX. Entrega, montaje y recolección. Cotiza tu evento con asesor humano." |
| `/servicios/bodas/` | "Renta de mesas picnic para bodas…" | "Mesas picnic para bodas al aire libre: 8 invitados por mesa, madera barnizada y montaje 2h antes del brindis. Ve precios y paquetes." |
| `/catalogo/` | "Renta de mesas picnic: catálogo de modelos…" | "6 modelos en renta: mesa clásica, infantil, XL para 10 personas, banca corrida y mesa de parota. Precios y disponibilidad en tiempo real." |

---

## 2.8 — Tono impersonal ("nuestra empresa", "esta compañía")

### Hallazgo
Aparece en `nosotros.astro`, en footer y en blog. Ejemplos:

> "Nuestra empresa se distingue por ofrecer…"
> "En esta compañía creemos que…"
> "MESPIC es una empresa líder en el sector…"

El usuario mexicano post-2022 prefiere tono cercano, primera persona plural con pronombre implícito ("montamos", "rentamos", "entregamos") y uso de "tú" sin forzar.

### Prioridad
🟡 Media

### Impacto
- **SEO:** bajo
- **UX:** medio — el tono formal distancia y reduce tiempo en página
- **Comercial:** medio

### Recomendación técnica
Regla de copy: nunca empezar oración con "Nuestra empresa" o "En MESPIC". Cambiar a verbo activo conjugado en 1ª persona plural.

### Propuesta de mejora

| Antes | Después |
|-------|---------|
| "Nuestra empresa ofrece renta de…" | "Rentamos mesas picnic, bancas y…" |
| "MESPIC es una empresa mexicana…" | "Arrancamos en 2019 en la CDMX con 12 mesas. Hoy movemos eventos de 20 a 800 invitados." |
| "En nuestra empresa creemos que…" | "Creemos que un evento se recuerda por los detalles: la madera cálida, el montaje puntual, el desmontaje silencioso." |

---

## 2.9 — Cierres pasivos sin llamada a acción específica

### Hallazgo
Varias páginas terminan con fórmulas como:

> "Contáctanos para más información."
> "Estamos a tus órdenes."
> "Escríbenos y con gusto te atendemos."

Son cierres débiles, genéricos, sin fricción cero ni direccionalidad.

### Prioridad
🟡 Media

### Impacto
- **SEO:** nulo
- **UX:** medio
- **Comercial:** alto — el cierre es donde se decide la conversión

### Recomendación técnica
Cada página debe cerrar con CTA específico al caso de esa página, no al genérico. Ejemplos por tipo:

### Propuesta de mejora

| Página | Cierre propuesto |
|--------|------------------|
| `/servicios/bodas/` | "¿Ya tienes fecha? Cuéntanos cuántos invitados y dónde, y te mandamos el layout con mesas + bancas + extras antes del martes." |
| `/servicios/eventos-corporativos/` | "Para RH, marketing y agencias: armamos cotización con factura, contrato y seguro de RC en 24h hábiles." |
| `/catalogo/` | "¿Quieres reservar un modelo específico? La mesa XL (10 personas) se agota los fines de semana de octubre — consulta disponibilidad antes de elegir." |
| `/paquetes/` | "Paquete más pedido: 20 mesas + 160 bancas para bodas de 150–180 invitados. Si te encaja, lo dejamos apartado con 30%." |

---

## Resumen del módulo

| # | Hallazgo | Prioridad | Impacto dominante |
|---|----------|-----------|-------------------|
| 2.1 | "Transforma cualquier espacio" cliché | 🟠 | UX/Comercial |
| 2.2 | "Respuesta inmediata" sobreprometido | 🟠 | UX |
| 2.3 | Keyword stuffing servicios | 🔴 | SEO |
| 2.4 | Copy-paste entre servicios | 🟠 | SEO |
| 2.5 | H1s homogéneos | 🟠 | SEO |
| 2.6 | Claims sin datos | 🟡 | Comercial |
| 2.7 | Meta descriptions homogéneas | 🟠 | SEO |
| 2.8 | Tono impersonal | 🟡 | UX |
| 2.9 | Cierres pasivos | 🟡 | Comercial |

**Ganancia estimada post-fix:** +3–5 puntos en CTR desde SERP, +15% dwell time en hubs, reducción de señal de "contenido duplicado" a niveles seguros (<3% del sitio).
