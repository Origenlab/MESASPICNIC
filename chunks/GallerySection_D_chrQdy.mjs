import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://mesaspicnic.com");
const $$GallerySection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GallerySection;
  const { images, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container gallery"${addAttribute(id, "id")} data-astro-cid-aozjdial> <div class="gallery__grid" data-astro-cid-aozjdial> ${images.map((img) => renderTemplate`<div class="gallery__item" data-astro-cid-aozjdial> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} loading="lazy" width="560" height="315" data-astro-cid-aozjdial> </div>`)} </div> </div> `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/components/GallerySection.astro", void 0);

export { $$GallerySection as $ };
