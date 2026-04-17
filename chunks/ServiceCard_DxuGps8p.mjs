import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://mesaspicnic.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    title,
    description,
    image,
    href,
    btnLabel = "Ver detalles",
    badge
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sc" data-astro-cid-uhzbvkqe> <div class="sc__img" data-astro-cid-uhzbvkqe> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" width="400" height="300" data-astro-cid-uhzbvkqe> ${badge && renderTemplate`<span class="sc__badge" data-astro-cid-uhzbvkqe>${badge}</span>`} </div> <div class="sc__body" data-astro-cid-uhzbvkqe> <h3 class="sc__title" data-astro-cid-uhzbvkqe>${title}</h3> <p class="sc__desc" data-astro-cid-uhzbvkqe>${description}</p> <a${addAttribute(href, "href")} class="sc__btn" data-astro-cid-uhzbvkqe>${btnLabel}</a> </div> </div> `;
}, "/sessions/bold-dazzling-curie/mnt/MESASPICNIC/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
