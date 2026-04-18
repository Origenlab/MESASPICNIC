---
source_file: "MESASPICNIC/Workflow Git"
type: "workflow"
community: "Git y Deploy"
tags:
  - graphify/workflow
  - community/Git_y_Deploy
  - proyecto/MESASPICNIC
---

# Workflow — Subir Cambios a GitHub

**Proyecto:** MESASPICNIC  
**Fecha:** 2026-04-18  
**Estado:** Activo — aplica a todas las sesiones de trabajo

---

## ⚠️ REPO QUE SIRVE EL SITIO LIVE

El sitio **mesaspicnic.com** está en GitHub Pages configurado en:

```
https://github.com/Origenlab/MESASPICNIC
Remote local: origenlab
```

`Frankoropeza/mesaspicnic` es un espejo sin Pages — los cambios ahí **NO aparecen en producción**.

## Ruta del proyecto en el Mac

```
/Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC
```

## Herramienta para comandos

Usar `mcp__Desktop_Commander__start_process` (Desktop Commander Shell).  
NO usar el sandbox de Linux para git.

## Notas importantes

- Si hay `index.lock`: `rm -f .git/index.lock`
- Siempre verificar con `gh run list --repo Origenlab/MESASPICNIC --limit 3`
- El build tarda ~20-30 segundos en GitHub Actions

#graphify/workflow #community/Git_y_Deploy #proyecto/MESASPICNIC
