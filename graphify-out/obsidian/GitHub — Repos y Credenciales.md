---
source_file: "MESASPICNIC/GitHub Config"
type: "reference"
community: "Git y Deploy"
tags:
  - graphify/reference
  - community/Git_y_Deploy
  - proyecto/MESASPICNIC
---

# GitHub — Repos y Credenciales — MESASPICNIC

**Fecha:** 2026-04-18

---

## Remotes configurados

| Remote | URL | Uso |
|--------|-----|-----|
| `origenlab` | https://github.com/Origenlab/MESASPICNIC.git | ✅ **PRODUCCIÓN** — GitHub Pages activo |
| `origin` | https://github.com/Frankoropeza/mesaspicnic.git | ❌ Espejo sin Pages — no usar para deploy |

## Cuentas GitHub CLI

El sistema tiene dos cuentas en `gh`:
- `Origenlab` — cuenta del repo de producción
- `Frankoropeza` — cuenta secundaria

## Flujo correcto para publicar

```bash
# 1. Hacer cambios en el código fuente

# 2. Commit
cd /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC
git add [archivos]
git commit -m "descripción"

# 3. Push al repo de PRODUCCIÓN
gh auth switch -u Origenlab
git push origenlab main
```

## Deploy automático

Hay un workflow de GitHub Actions en `.github/workflows/deploy.yml` que:
1. Hace `npm run build` en ubuntu
2. Despliega `dist/` al root de `main` con `JamesIves/github-pages-deploy-action`
3. GitHub Pages sirve desde el root de `main`

#graphify/reference #community/Git_y_Deploy #proyecto/MESASPICNIC
