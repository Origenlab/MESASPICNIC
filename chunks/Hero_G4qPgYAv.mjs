import { j as createAstro, c as createComponent, m as maybeRenderHead, l as addAttribute, d as renderTemplate } from './astro/server_BUBszSA2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://mesaspicnic.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    badge = "Renta de Mobiliario",
    title,
    description,
    ctaPrimary = { label: "Cotizar ahora \u2192", href: "/cotizar/" },
    ctaSecondary = { label: "Ver servicios", href: "/servicios/" },
    seoParagraph1,
    seoParagraph2,
    dark = false,
    metrics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["hero", { "hero--dark": dark }], "class:list")} aria-label="Sección principal" data-astro-cid-bbe6dxrz> <div class="container hero__grid" data-astro-cid-bbe6dxrz> <!-- ═══ COLUMNA 1: Título + CTAs ═══ --> <div class="hero__col1" data-astro-cid-bbe6dxrz> ${badge && renderTemplate`<span class="hero__badge" data-astro-cid-bbe6dxrz> ${badge} </span>`} <h1 class="hero__title" data-astro-cid-bbe6dxrz>${title}</h1> <p class="hero__desc" data-astro-cid-bbe6dxrz>${description}</p> ${metrics && metrics.length > 0 && renderTemplate`<div class="hero__metrics" data-astro-cid-bbe6dxrz> ${metrics.map((m) => renderTemplate`<div class="hero__metric" data-astro-cid-bbe6dxrz> <span class="hero__metric-value" data-astro-cid-bbe6dxrz>${m.value}</span> <span class="hero__metric-label" data-astro-cid-bbe6dxrz>${m.label}</span> </div>`)} </div>`} </div> <!-- ═══ COLUMNA 2: Párrafos SEO (SOLO TEXTO) ═══ --> <div class="hero__col2" data-astro-cid-bbe6dxrz> <p class="hero__seo-text" data-astro-cid-bbe6dxrz>${seoParagraph1}</p> <p class="hero__seo-text" data-astro-cid-bbe6dxrz>${seoParagraph2}</p> </div> </div> </section> `;
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/Hero.astro", void 0);

export { $$Hero as $ };
