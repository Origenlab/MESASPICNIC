---
source_file: "MESASPICNIC/Arquitectura del Sitio"
type: "architecture"
community: "Arquitectura y Navegación"
tags:
  - graphify/architecture
  - community/Arquitectura_y_Navegación
  - proyecto/MESASPICNIC
---

# Arquitectura del Sitio — MESASPICNIC

**Fecha:** 2026-04-18

---

## Páginas principales (L1/L2)

| Página | URL | Notas |
|--------|-----|-------|
| Home | `/` | Landing principal |
| Servicios | `/servicios/` | Hub de servicios |
| Catálogo | `/catalogo/` | Hub de productos |
| Paquetes | `/paquetes/` | Hub de paquetes |
| Blog | `/blog/` | Listado de artículos |
| Contacto | `/contacto/` | Formulario |
| Cotizar | `/cotizar/` | CTA principal |

## Servicios (L3)

```
/servicios/bodas/
/servicios/eventos-corporativos/
/servicios/fiestas-infantiles/
/servicios/picnic-romantico/
/servicios/fiestas-tematicas/
/servicios/reuniones-familiares/
/servicios/festivales/
/servicios/sesiones-fotograficas/
```

## Catálogo (L3)

```
/catalogo/mesa-picnic-estandar/
/catalogo/mesa-picnic-grande/
/catalogo/mesa-picnic-infantil/
/catalogo/mesa-picnic-premium/
/catalogo/set-picnic-completo/
/catalogo/mesa-picnic-rustica/
```

## Paquetes (L3)

```
/paquetes/basico/       → 24 personas
/paquetes/estandar/     → 36 personas
/paquetes/premium/      → 60 personas
```

## Blog (9 artículos)

Artículos en `src/pages/blog/*.astro` usando `BlogLayout.astro`.  
Temáticas: bodas, corporativos, infantiles, zonas CDMX, picnic romántico, etc.

## Componentes principales

```
src/components/
  Header.astro        # Navegación fija con glassmorphism
  Footer.astro        # Links, contacto, redes
  Hero.astro          # Hero reutilizable (dark={true} obligatorio)
  Topbar.astro        # Barra superior con teléfono y WhatsApp
```

## Layouts

```
src/layouts/
  BaseLayout.astro    # Layout base (incluye Header, Footer, DMChamp)
  BlogLayout.astro    # Layout para artículos del blog
```

## Connections
- [[BlogLayout — Template y Reglas]] - `references`
- [[Header — Logo y Configuración]] - `references`

#graphify/architecture #community/Arquitectura_y_Navegación #proyecto/MESASPICNIC
