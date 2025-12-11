# MESPIC - Guía de Desarrollo de Páginas

## Documento de Especificaciones para Crear Nuevas Páginas

**Versión:** 1.0
**Última actualización:** Diciembre 2024
**Basado en:** index.html, nosotros.html, contacto.html

---

## Índice

1. [Estructura Base del Documento HTML](#1-estructura-base-del-documento-html)
2. [Sistema de Diseño (Design System)](#2-sistema-de-diseño-design-system)
3. [Componentes Reutilizables](#3-componentes-reutilizables)
4. [Estructura del Hero](#4-estructura-del-hero)
5. [Secciones de Contenido](#5-secciones-de-contenido)
6. [Botones y CTAs](#6-botones-y-ctas)
7. [SEO y Meta Tags](#7-seo-y-meta-tags)
8. [Schema.org (Datos Estructurados)](#8-schemaorg-datos-estructurados)
9. [Responsive Design](#9-responsive-design)
10. [Checklist de Nueva Página](#10-checklist-de-nueva-página)

---

## 1. Estructura Base del Documento HTML

### Plantilla Base

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO Meta Tags -->
    <title>[Título] | MESPIC - Renta de Mesas Picnic</title>
    <meta name="description" content="[Descripción de 150-160 caracteres]">
    <meta name="keywords" content="[keywords separadas por coma]">
    <meta name="author" content="MESPIC - Renta de Mesas Picnic">
    <meta name="robots" content="index, follow">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://mesaspicnic.com/[pagina]">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mesaspicnic.com/[pagina]">
    <meta property="og:title" content="[Título] | MESPIC">
    <meta property="og:description" content="[Descripción corta]">
    <meta property="og:image" content="https://mesaspicnic.com/images/og-[pagina].jpg">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="MESPIC - Renta de Mesas Picnic">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="[Título] | MESPIC">
    <meta name="twitter:description" content="[Descripción corta]">
    <meta name="twitter:image" content="https://mesaspicnic.com/images/twitter-[pagina].jpg">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="icon.png">
    <meta name="theme-color" content="#2D5016">

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Component Styles -->
    <link rel="stylesheet" href="css/components.css">

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "[Nombre de la página]",
        "description": "[Descripción]",
        "url": "https://mesaspicnic.com/[pagina]"
    }
    </script>

    <style>
        /* CSS Variables y estilos específicos de la página */
    </style>
</head>
<body>
    <!-- Header (cargado via components.js) -->
    <div id="header-placeholder"></div>

    <!-- Breadcrumb (para páginas internas, NO para index) -->

    <!-- Hero Section -->

    <!-- Contenido de la página -->

    <!-- Footer (cargado via components.js) -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="js/components.js"></script>
</body>
</html>
```

---

## 2. Sistema de Diseño (Design System)

### 2.1 Variables CSS Obligatorias

Copiar EXACTAMENTE estas variables al inicio del `<style>`:

```css
:root {
    /* Colores principales */
    --color-primary: #2D5016;
    --color-primary-light: #4A7C23;
    --color-primary-dark: #1E3610;
    --color-secondary: #8B7355;
    --color-accent: #D4A574;
    --color-accent-light: #E8C9A8;

    /* Neutros */
    --color-white: #FFFFFF;
    --color-off-white: #FAF8F5;
    --color-cream: #F5F1EB;
    --color-gray-100: #F7F7F7;
    --color-gray-200: #E5E5E5;
    --color-gray-300: #D4D4D4;
    --color-gray-400: #A3A3A3;
    --color-gray-500: #737373;
    --color-gray-600: #525252;
    --color-gray-700: #404040;
    --color-gray-800: #262626;
    --color-gray-900: #171717;
    --color-black: #0A0A0A;

    /* Semánticos */
    --color-success: #22C55E;
    --color-warning: #F59E0B;
    --color-error: #EF4444;
    --color-info: #3B82F6;

    /* Gradientes */
    --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    --gradient-hero: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);

    /* Tipografía */
    --font-heading: 'Playfair Display', Georgia, serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

    /* Tamaños de fuente */
    --text-xs: 0.75rem;      /* 12px */
    --text-sm: 0.875rem;     /* 14px */
    --text-base: 1rem;       /* 16px */
    --text-lg: 1.125rem;     /* 18px */
    --text-xl: 1.25rem;      /* 20px */
    --text-2xl: 1.5rem;      /* 24px */
    --text-3xl: 1.875rem;    /* 30px */
    --text-4xl: 2.25rem;     /* 36px */
    --text-5xl: 3rem;        /* 48px */
    --text-6xl: 3.75rem;     /* 60px */

    /* Espaciado */
    --space-1: 0.25rem;      /* 4px */
    --space-2: 0.5rem;       /* 8px */
    --space-3: 0.75rem;      /* 12px */
    --space-4: 1rem;         /* 16px */
    --space-5: 1.25rem;      /* 20px */
    --space-6: 1.5rem;       /* 24px */
    --space-8: 2rem;         /* 32px */
    --space-10: 2.5rem;      /* 40px */
    --space-12: 3rem;        /* 48px */
    --space-16: 4rem;        /* 64px */
    --space-20: 5rem;        /* 80px */
    --space-24: 6rem;        /* 96px */

    /* Bordes */
    --radius-sm: 0.25rem;    /* 4px */
    --radius-md: 0.5rem;     /* 8px */
    --radius-lg: 1rem;       /* 16px */
    --radius-xl: 1.5rem;     /* 24px */
    --radius-2xl: 2rem;      /* 32px */
    --radius-full: 9999px;   /* Círculo/Pill */

    /* Sombras */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    /* Z-index */
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-fixed: 300;
    --z-modal-backdrop: 400;
    --z-modal: 500;

    /* Contenedor */
    --container-max: 1280px;
    --container-padding: 1.5rem;
}
```

### 2.2 Reset y Base (Obligatorio)

```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--color-gray-800);
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}

ul, ol {
    list-style: none;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-gray-900);
}
```

### 2.3 Contenedor

```css
.container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}
```

---

## 3. Componentes Reutilizables

### 3.1 Header y Footer

El header y footer se cargan automáticamente desde `/components/`:

```html
<!-- En el body, al inicio -->
<div id="header-placeholder"></div>

<!-- En el body, al final -->
<div id="footer-placeholder"></div>

<!-- Antes de </body> -->
<script src="js/components.js"></script>
```

**Archivos de componentes:**
- `/components/header.html` - Navegación principal
- `/components/footer.html` - Footer con WhatsApp flotante
- `/js/components.js` - Cargador de componentes
- `/css/components.css` - Estilos compartidos

### 3.2 Navegación Activa

Para marcar el enlace activo en el menú, agregar `data-page` en header.html:

```html
<a href="nueva-pagina.html" class="nav-link" data-page="nueva-pagina">Nueva Página</a>
```

El sistema detecta automáticamente la página actual y agrega la clase `.active`.

---

## 4. Estructura del Hero

### 4.1 Hero para Página Principal (index.html)

```css
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: var(--color-white);
    padding-top: 100px;
}
```

### 4.2 Hero para Páginas Internas (con Breadcrumb)

```css
/* Breadcrumb */
.breadcrumb {
    background: var(--color-white);
    padding: var(--space-3) 0;
    padding-top: calc(80px + var(--space-4));
}

/* Hero después de Breadcrumb */
.hero {
    position: relative;
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    background: var(--color-white);
    padding: var(--space-12) 0;
}
```

### 4.3 Estructura HTML del Hero (2 Columnas)

```html
<section class="hero">
    <div class="hero-container">
        <!-- Columna Izquierda -->
        <div class="hero-left">
            <span class="hero-badge">
                <i class="fas fa-[icono]"></i>
                [Texto del Badge]
            </span>

            <h1 class="hero-title">
                [Título Principal] <span>[Texto Destacado]</span>
            </h1>

            <p class="hero-subtitle">
                [Descripción del hero - 2 líneas máximo]
            </p>

            <div class="hero-cta">
                <a href="[url]" class="btn btn-primary btn-lg">
                    <i class="fas fa-[icono]"></i> [Texto Botón]
                </a>
                <a href="[url]" class="btn btn-secondary btn-lg">
                    <i class="fas fa-[icono]"></i> [Texto Botón]
                </a>
            </div>
        </div>

        <!-- Columna Derecha -->
        <div class="hero-right">
            <h3 class="hero-intro-title">
                <i class="fas fa-leaf"></i>
                [Título Secundario]
            </h3>
            <p class="hero-intro-text">
                [Párrafo 1 con <strong>palabras clave</strong>]
            </p>
            <p class="hero-intro-text">
                [Párrafo 2 con <strong>palabras clave</strong>]
            </p>
            <div class="hero-intro-highlight">
                <i class="fas fa-check-circle"></i>
                <p><strong>[Destacado]:</strong> [Texto del highlight]</p>
            </div>
        </div>
    </div>

    <a href="#[siguiente-seccion]" class="hero-scroll">
        <i class="fas fa-chevron-down fa-2x"></i>
    </a>
</section>
```

### 4.4 CSS Completo del Hero

```css
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

.hero-left {
    text-align: left;
}

.hero-right {
    padding: var(--space-8);
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    background: var(--color-primary);
    color: var(--color-white);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 600;
    margin-bottom: var(--space-6);
}

.hero-badge i {
    color: var(--color-accent);
}

.hero-title {
    font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
    font-weight: 700;
    color: var(--color-gray-900);
    margin-bottom: var(--space-6);
    line-height: 1.1;
}

.hero-title span {
    color: var(--color-primary);
}

.hero-subtitle {
    font-size: var(--text-lg);
    color: var(--color-gray-600);
    margin-bottom: var(--space-8);
    line-height: 1.7;
}

.hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
}

.hero-intro-title {
    font-size: var(--text-2xl);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.hero-intro-title i {
    color: var(--color-accent);
}

.hero-intro-text {
    font-size: var(--text-base);
    color: var(--color-gray-700);
    line-height: 1.8;
    margin-bottom: var(--space-6);
}

.hero-intro-text:last-child {
    margin-bottom: 0;
}

.hero-intro-highlight {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-4);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    margin-top: var(--space-6);
}

.hero-intro-highlight i {
    color: var(--color-primary);
    font-size: var(--text-xl);
    margin-top: 2px;
}

.hero-intro-highlight p {
    font-size: var(--text-sm);
    color: var(--color-gray-600);
    margin: 0;
}

.hero-intro-highlight strong {
    color: var(--color-gray-800);
}

.hero-scroll {
    position: absolute;
    bottom: var(--space-8);
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-primary);
    opacity: 0.5;
}

@media (max-width: 968px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: var(--space-10);
    }

    .hero-left {
        text-align: center;
    }

    .hero-cta {
        justify-content: center;
    }
}
```

---

## 5. Secciones de Contenido

### 5.1 Estructura Base de Sección

```html
<section class="section" id="[id-seccion]">
    <div class="container">
        <div class="section-header">
            <span class="section-label">[Etiqueta]</span>
            <h2 class="section-title">[Título de la Sección]</h2>
            <p class="section-subtitle">[Descripción breve]</p>
        </div>

        <!-- Contenido de la sección -->
    </div>
</section>
```

### 5.2 Variantes de Fondo

```html
<!-- Fondo blanco (default) -->
<section class="section">

<!-- Fondo gris claro -->
<section class="section section--gray">

<!-- Fondo crema -->
<section class="section section--cream">

<!-- Fondo oscuro -->
<section class="section section--dark">
```

### 5.3 CSS de Secciones

```css
.section {
    padding: var(--space-24) 0;
}

.section--gray {
    background: var(--color-gray-100);
}

.section--cream {
    background: var(--color-cream);
}

.section--dark {
    background: var(--color-gray-900);
    color: var(--color-white);
}

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-16);
}

.section-label {
    display: inline-block;
    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.section-title {
    font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
    margin-bottom: var(--space-6);
}

.section-subtitle {
    font-size: var(--text-lg);
    color: var(--color-gray-600);
}
```

### 5.4 Grids Comunes

```css
/* Grid de 2 columnas */
.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
}

/* Grid de 3 columnas */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
}

/* Grid de 4 columnas */
.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-6);
}

/* Grid responsive */
.grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-8);
}
```

### 5.5 Cards

```css
.card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    padding: var(--space-8);
}

.card-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-6);
    font-size: var(--text-3xl);
    color: var(--color-white);
}

.card-title {
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
}

.card-text {
    color: var(--color-gray-600);
    font-size: var(--text-sm);
    line-height: 1.6;
}
```

---

## 6. Botones y CTAs

### 6.1 Clases de Botones

```html
<!-- Botón primario (verde) -->
<a href="#" class="btn btn-primary">Texto</a>

<!-- Botón secundario (borde verde) -->
<a href="#" class="btn btn-secondary">Texto</a>

<!-- Botón WhatsApp -->
<a href="#" class="btn btn-whatsapp">Texto</a>

<!-- Tamaños -->
<a href="#" class="btn btn-primary btn-sm">Pequeño</a>
<a href="#" class="btn btn-primary">Normal</a>
<a href="#" class="btn btn-primary btn-lg">Grande</a>
```

### 6.2 CSS de Botones

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
    font-weight: 600;
    border-radius: var(--radius-full);
    white-space: nowrap;
}

.btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: var(--color-white);
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: var(--color-white);
}

.btn-whatsapp {
    background: #25D366;
    color: var(--color-white);
}

.btn-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-2px);
}

.btn-lg {
    padding: var(--space-5) var(--space-10);
    font-size: var(--text-lg);
}

.btn-sm {
    padding: var(--space-2) var(--space-5);
    font-size: var(--text-sm);
}
```

### 6.3 CTA Section (Call to Action)

```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">[Título del CTA]</h2>
            <p class="cta-subtitle">[Descripción motivacional]</p>
            <div class="cta-buttons">
                <a href="[url-whatsapp]" class="btn btn-whatsapp btn-lg">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="[url]" class="btn btn-secondary btn-lg">
                    <i class="fas fa-th-large"></i> Ver Catálogo
                </a>
            </div>
        </div>
    </div>
</section>
```

```css
.cta-section {
    background: var(--gradient-primary);
    padding: var(--space-20) 0;
}

.cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.cta-title {
    font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
    color: var(--color-white);
    margin-bottom: var(--space-4);
}

.cta-subtitle {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--space-8);
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: var(--space-4);
    flex-wrap: wrap;
}

.cta-buttons .btn-whatsapp {
    background: var(--color-white);
    color: var(--color-primary);
}

.cta-buttons .btn-secondary {
    border-color: var(--color-white);
    color: var(--color-white);
    background: transparent;
}

.cta-buttons .btn-secondary:hover {
    background: var(--color-white);
    color: var(--color-primary);
}
```

---

## 7. SEO y Meta Tags

### 7.1 Meta Tags Obligatorios

```html
<!-- Título: 50-60 caracteres, incluir keyword principal -->
<title>[Keyword Principal] | MESPIC - Renta de Mesas Picnic</title>

<!-- Descripción: 150-160 caracteres -->
<meta name="description" content="[Descripción con keywords naturales]">

<!-- Keywords: 5-10 keywords relevantes -->
<meta name="keywords" content="renta de mesas picnic, mesas picnic, [keyword específica]">

<!-- Canonical (evita contenido duplicado) -->
<link rel="canonical" href="https://mesaspicnic.com/[pagina]">
```

### 7.2 Keywords Principales del Sitio

Usar estas keywords en títulos, descripciones y contenido:

**Primarias:**
- renta de mesas picnic
- mesas picnic
- mesas picnic para eventos
- alquiler mesas picnic

**Secundarias:**
- mesas picnic bodas
- mesas picnic fiestas
- mesas picnic corporativos
- mesas picnic infantiles
- renta mesas picnic CDMX
- renta mesas picnic México

**Long-tail:**
- renta de mesas picnic para bodas
- mesas picnic de madera para eventos
- servicio de renta de mesas picnic con entrega

### 7.3 Estructura de Headings (SEO)

```
H1: Solo uno por página (en el hero)
    └── H2: Títulos de secciones principales
        └── H3: Subtítulos dentro de secciones
            └── H4: Títulos de cards o elementos menores
```

---

## 8. Schema.org (Datos Estructurados)

### 8.1 WebPage (Para páginas generales)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "[Nombre de la página]",
    "description": "[Descripción]",
    "url": "https://mesaspicnic.com/[pagina]"
}
</script>
```

### 8.2 BreadcrumbList

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://mesaspicnic.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "[Página Actual]",
            "item": "https://mesaspicnic.com/[pagina]"
        }
    ]
}
</script>
```

### 8.3 FAQPage (Para páginas con preguntas frecuentes)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "[Pregunta 1]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[Respuesta 1]"
            }
        }
    ]
}
</script>
```

---

## 9. Responsive Design

### 9.1 Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { }

/* Tablet pequeña / Móvil grande */
@media (max-width: 968px) { }

/* Móvil */
@media (max-width: 768px) { }

/* Móvil pequeño */
@media (max-width: 640px) { }
```

### 9.2 Patrones Responsive Comunes

```css
/* Grid a 1 columna en móvil */
@media (max-width: 968px) {
    .grid-2,
    .grid-3 {
        grid-template-columns: 1fr;
    }
}

/* Grid de 4 a 2 columnas en tablet */
@media (max-width: 1024px) {
    .grid-4 {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Grid de 4 a 1 columna en móvil */
@media (max-width: 768px) {
    .grid-4 {
        grid-template-columns: 1fr;
    }
}

/* Centrar texto en móvil */
@media (max-width: 768px) {
    .section-header,
    .hero-left {
        text-align: center;
    }
}

/* Botones en columna en móvil */
@media (max-width: 768px) {
    .cta-buttons,
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
}
```

---

## 10. Checklist de Nueva Página

### Pre-desarrollo

- [ ] Definir propósito de la página
- [ ] Investigar keywords objetivo
- [ ] Planear estructura de secciones
- [ ] Preparar contenido de texto
- [ ] Seleccionar imágenes (optimizadas)

### Estructura HTML

- [ ] Copiar plantilla base
- [ ] Configurar meta tags SEO
- [ ] Agregar Schema.org apropiado
- [ ] Incluir `<div id="header-placeholder">`
- [ ] Incluir `<div id="footer-placeholder">`
- [ ] Agregar breadcrumb (si no es index)
- [ ] Crear hero con estructura de 2 columnas
- [ ] Agregar secciones de contenido
- [ ] Incluir CTA section antes del footer
- [ ] Agregar `<script src="js/components.js">`

### CSS

- [ ] Copiar variables CSS completas
- [ ] Copiar reset y base
- [ ] Usar clases existentes cuando sea posible
- [ ] Agregar estilos específicos de la página
- [ ] Implementar responsive design
- [ ] Verificar en móvil, tablet y desktop

### SEO

- [ ] Title tag optimizado (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 único con keyword principal
- [ ] H2 para cada sección
- [ ] Alt text en todas las imágenes
- [ ] Links internos a otras páginas
- [ ] Schema.org configurado

### Testing

- [ ] Verificar carga de header/footer
- [ ] Probar navegación móvil
- [ ] Verificar links funcionales
- [ ] Probar botones de WhatsApp
- [ ] Validar HTML (W3C Validator)
- [ ] Probar en diferentes navegadores
- [ ] Verificar velocidad de carga

### Post-desarrollo

- [ ] Agregar enlace en navegación (header.html)
- [ ] Agregar enlace en footer si aplica
- [ ] Actualizar sitemap.xml
- [ ] Probar página en producción

---

## Archivos del Proyecto

```
MESASPICNIC/
├── index.html              # Página principal
├── nosotros.html           # Página Nosotros
├── contacto.html           # Página Contacto
├── [nueva-pagina].html     # Nuevas páginas aquí
│
├── components/
│   ├── header.html         # Componente header
│   └── footer.html         # Componente footer
│
├── css/
│   └── components.css      # Estilos compartidos
│
├── js/
│   └── components.js       # Cargador de componentes
│
├── images/                 # Imágenes del sitio
│
└── .audit/
    └── DOCUMENTO-PAGINAS.md  # Este documento
```

---

## Contacto de Soporte

Para dudas sobre el desarrollo del sitio MESPIC:
- Email: contacto@mesaspicnic.com
- WhatsApp: +52 55 1234 5678

---

*Documento generado para el proyecto MESPIC - Renta de Mesas Picnic*
