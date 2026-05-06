# Graph Report - .  (2026-04-21)

## Corpus Check
- Large corpus: 755 files · ~3,434,107 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 531 nodes · 1157 edges · 12 communities detected
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `markHTMLString()` - 18 edges
2. `renderFrameworkComponent()` - 18 edges
3. `markHTMLString()` - 18 edges
4. `renderFrameworkComponent()` - 18 edges
5. `renderComponent()` - 11 edges
6. `renderComponent()` - 11 edges
7. `getImage$1()` - 10 edges
8. `stringifyChunk()` - 10 edges
9. `renderChild()` - 10 edges
10. `stringifyChunk()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `deserializeManifest()` --calls--> `decodeKey()`  [INFERRED]
  /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/manifest_CJ-ELmJ7.mjs → /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/astro/server_C6AFCjSs.mjs
- `deserializeManifest()` --calls--> `decodeKey()`  [INFERRED]
  /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/manifest_BTlo2Gd_.mjs → /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/astro/server_C6AFCjSs.mjs
- `renderToStaticMarkup()` --calls--> `renderJSX()`  [INFERRED]
  /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/renderers.mjs → /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/astro/server_C6AFCjSs.mjs
- `deserializeManifest()` --calls--> `decodeKey()`  [INFERRED]
  /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/manifest_Dd96UJab.mjs → /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/astro/server_C6AFCjSs.mjs
- `getImage$1()` --calls--> `resolveSrc()`  [INFERRED]
  /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/_astro_assets_ssTAmN2-.mjs → /Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC/chunks/astro/assets-service_VAb-9I6c.mjs

## Communities

### Community 0 - "Community 0"
Cohesion: 0.03
Nodes (92): addAttribute(), AstroComponentInstance, AstroUserError, baseCreateComponent(), bitwise(), BufferedRenderer, bufferHeadContent(), callComponentAsTemplateResultOrResponse() (+84 more)

### Community 1 - "Community 1"
Cohesion: 0.03
Nodes (87): addAttribute(), AstroComponentInstance, baseCreateComponent(), bitwise(), bufferHeadContent(), callComponentAsTemplateResultOrResponse(), chunkToString(), componentIsHTMLElement() (+79 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (48): getTargetDimensions(), isCoreRemotePath(), isESMImportedImage(), isLocalService(), isRemoteAllowed(), isRemoteImage(), matchHostname(), matchPathname() (+40 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (19): deserializeManifest(), deserializeRouteData(), getRouteGenerator(), deserializeManifest(), deserializeRouteData(), getRouteGenerator(), deserializeManifest(), deserializeRouteData() (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.17
Nodes (9): Content(), _createMdxContent(), MDXContent(), check(), renderToStaticMarkup(), slotName(), throwEnhancedErrorIfMdxComponent(), AstroUserError (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (3): AstroError, codeFrame(), normalizeLF()

### Community 8 - "Community 8"
Cohesion: 0.2
Nodes (3): AstroError, codeFrame(), normalizeLF()

### Community 9 - "Community 9"
Cohesion: 0.32
Nodes (3): deserializeManifest(), deserializeRouteData(), getRouteGenerator()

### Community 10 - "Community 10"
Cohesion: 0.32
Nodes (3): deserializeManifest(), deserializeRouteData(), getRouteGenerator()

### Community 11 - "Community 11"
Cohesion: 0.32
Nodes (3): deserializeManifest(), deserializeRouteData(), getRouteGenerator()

### Community 12 - "Community 12"
Cohesion: 0.38
Nodes (2): BufferedRenderer, RenderTemplateResult

### Community 14 - "Community 14"
Cohesion: 0.83
Nodes (3): fmt(), main(), optimize()

## Knowledge Gaps
- **2 isolated node(s):** `HTMLBytes`, `HTMLBytes`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (7 nodes): `BufferedRenderer`, `.constructor()`, `.renderToFinalDestination()`, `.write()`, `RenderTemplateResult`, `.constructor()`, `.render()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `get()` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.233) - this node is a cross-community bridge._
- **Why does `createVNode()` connect `Community 6` to `Community 1`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **What connects `HTMLBytes`, `HTMLBytes` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.03 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._