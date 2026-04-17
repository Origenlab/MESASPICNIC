import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://mesaspicnic.com");
const $$ProductGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductGallery;
  const {
    images,
    recommended,
    sidebarTitle = "Tambi\xE9n te puede interesar"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pg container" data-astro-cid-g66van4u> <!-- Grid de imágenes --> <div class="pg__gallery" data-astro-cid-g66van4u> ${images.map((img) => renderTemplate`<div class="pg__item" data-astro-cid-g66van4u> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} loading="lazy" width="400" height="225" data-astro-cid-g66van4u> </div>`)} </div> <!-- Sidebar recomendaciones --> <aside class="pg__sidebar" data-astro-cid-g66van4u> <h3 class="pg__sidebar-title" data-astro-cid-g66van4u>${sidebarTitle}</h3> <div class="pg__sidebar-list" data-astro-cid-g66van4u> ${recommended.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="pg__rec" data-astro-cid-g66van4u> ${item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="pg__rec-img" loading="lazy" width="80" height="80" data-astro-cid-g66van4u>` : renderTemplate`<div class="pg__rec-placeholder" aria-hidden="true" data-astro-cid-g66van4u> <span data-astro-cid-g66van4u>Img</span> </div>`} <div class="pg__rec-info" data-astro-cid-g66van4u> <span class="pg__rec-title" data-astro-cid-g66van4u>${item.title}</span> <span class="pg__rec-desc" data-astro-cid-g66van4u>${item.description}</span> </div> </a>`)} </div> </aside> </div> `;
}, "/sessions/bold-dazzling-curie/mnt/MESASPICNIC/src/components/ProductGallery.astro", void 0);

export { $$ProductGallery as $ };
