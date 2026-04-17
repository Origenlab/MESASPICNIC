import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, u as unescapeHTML } from './astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                  */

const $$Astro$1 = createAstro("https://mesaspicnic.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["hero", { "hero--dark": dark }], "class:list")} aria-label="Sección principal" data-astro-cid-bbe6dxrz> <div class="container hero__grid" data-astro-cid-bbe6dxrz> <!-- ═══ COLUMNA 1: Título + CTAs ═══ --> <div class="hero__col1" data-astro-cid-bbe6dxrz> ${badge && renderTemplate`<span class="hero__badge" data-astro-cid-bbe6dxrz> ${badge} </span>`} <h1 class="hero__title" data-astro-cid-bbe6dxrz>${title}</h1> <p class="hero__desc" data-astro-cid-bbe6dxrz>${description}</p> ${(ctaPrimary || ctaSecondary) && renderTemplate`<div class="hero__ctas" data-astro-cid-bbe6dxrz> ${ctaPrimary && renderTemplate`<a${addAttribute(ctaPrimary.href, "href")} class="hero__cta-primary" data-astro-cid-bbe6dxrz> ${ctaPrimary.label} </a>`} ${ctaSecondary && renderTemplate`<a${addAttribute(ctaSecondary.href, "href")} class="hero__cta-secondary" data-astro-cid-bbe6dxrz> ${ctaSecondary.label} </a>`} </div>`} ${metrics && metrics.length > 0 && renderTemplate`<div class="hero__metrics" data-astro-cid-bbe6dxrz> ${metrics.map((m) => renderTemplate`<div class="hero__metric" data-astro-cid-bbe6dxrz> <span class="hero__metric-value" data-astro-cid-bbe6dxrz>${m.value}</span> <span class="hero__metric-label" data-astro-cid-bbe6dxrz>${m.label}</span> </div>`)} </div>`} </div> <!-- ═══ COLUMNA 2: Párrafos SEO (SOLO TEXTO) ═══ --> <div class="hero__col2" data-astro-cid-bbe6dxrz> <p class="hero__seo-text" data-astro-cid-bbe6dxrz>${seoParagraph1}</p> <p class="hero__seo-text" data-astro-cid-bbe6dxrz>${seoParagraph2}</p> </div> </div> </section> `;
}, "/sessions/bold-dazzling-curie/mnt/MESASPICNIC/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://mesaspicnic.com");
const $$CtaBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaBar;
  const defaultItems = [
    {
      href: "/servicios/bodas/",
      label: "Bodas",
      sub: "Jardines \xB7 Haciendas \xB7 Terrazas",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`
    },
    {
      href: "/servicios/eventos-corporativos/",
      label: "Corporativo",
      sub: "Team building \xB7 Conferencias",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`
    },
    {
      href: "/servicios/fiestas-infantiles/",
      label: "Fiestas infantiles",
      sub: "Cumplea\xF1os \xB7 Baby shower",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    },
    {
      href: "/servicios/picnic-romantico/",
      label: "Picnic rom\xE1ntico",
      sub: "Parejas \xB7 Aniversarios",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
    },
    {
      href: "/cotizar/",
      label: "Cotizar ahora",
      sub: "Respuesta en minutos",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      cta: true
    }
  ];
  const { items = defaultItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="nav-rapida" aria-label="Acceso rápido a servicios" data-astro-cid-szmug3e6> <div class="nav-rapida__inner" data-astro-cid-szmug3e6> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["nav-item", item.cta && "nav-item--cta"], "class:list")}${addAttribute(item.label, "aria-label")} data-astro-cid-szmug3e6> <span class="nav-item__icon" aria-hidden="true" data-astro-cid-szmug3e6>${unescapeHTML(item.icon)}</span> <span class="nav-item__text" data-astro-cid-szmug3e6> <span class="nav-item__label" data-astro-cid-szmug3e6>${item.label}</span> <span class="nav-item__sub" data-astro-cid-szmug3e6>${item.sub}</span> </span> <svg class="nav-item__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-szmug3e6> <path d="M9 18l6-6-6-6" data-astro-cid-szmug3e6></path> </svg> </a>`)} </div> </nav> `;
}, "/sessions/bold-dazzling-curie/mnt/MESASPICNIC/src/components/CtaBar.astro", void 0);

export { $$Hero as $, $$CtaBar as a };
