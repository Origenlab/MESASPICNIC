import { j as createAstro, c as createComponent, d as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment, m as maybeRenderHead, l as addAttribute } from './astro/server_BUBszSA2.mjs';
import 'kleur/colors';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mesaspicnic.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const schemaItems = items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.label,
    ...item.href ? { "item": `https://mesaspicnic.com${item.href}` } : {}
  }));
  return renderTemplate(_a || (_a = __template(["", '<div class="bc" data-astro-cid-ilhxcym7> <div class="container bc__inner" data-astro-cid-ilhxcym7> ', ' </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), items.map((crumb, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ilhxcym7": true }, { "default": ($$result2) => renderTemplate`${crumb.href ? renderTemplate`<a${addAttribute(crumb.href, "href")} class="bc__link" data-astro-cid-ilhxcym7>${crumb.label}</a>` : renderTemplate`<span class="bc__current" data-astro-cid-ilhxcym7>${crumb.label}</span>`}${i < items.length - 1 && renderTemplate`<span class="bc__sep" data-astro-cid-ilhxcym7>/</span>`}` })}`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  })));
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
