import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://mesaspicnic.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    tag = "h2",
    title,
    paragraph1,
    paragraph2,
    badge,
    stats
  } = Astro2.props;
  const Tag = tag;
  return renderTemplate`${maybeRenderHead()}<div class="sh" data-astro-cid-wk2votdk> <div class="container sh__grid" data-astro-cid-wk2votdk> <!-- Columna 1: Badge + Título + acento --> <div class="sh__col1" data-astro-cid-wk2votdk> ${badge && renderTemplate`<span class="sh__badge" data-astro-cid-wk2votdk> <span class="sh__badge-dot" aria-hidden="true" data-astro-cid-wk2votdk></span> ${badge} </span>`} ${renderComponent($$result, "Tag", Tag, { "class": "sh__title", "data-astro-cid-wk2votdk": true }, { "default": ($$result2) => renderTemplate`${title}` })} <span class="sh__accent" aria-hidden="true" data-astro-cid-wk2votdk></span> </div> <!-- Columna 2: Textos + Stats --> <div class="sh__col2" data-astro-cid-wk2votdk> <p class="sh__text" data-astro-cid-wk2votdk>${paragraph1}</p> ${paragraph2 && renderTemplate`<p class="sh__text" data-astro-cid-wk2votdk>${paragraph2}</p>`} ${stats && stats.length > 0 && renderTemplate`<div class="sh__stats" role="list" aria-label="Datos destacados" data-astro-cid-wk2votdk> ${stats.map((s) => renderTemplate`<div class="sh__stat" role="listitem" data-astro-cid-wk2votdk> <strong class="sh__stat-value" data-astro-cid-wk2votdk>${s.value}</strong> <span class="sh__stat-label" data-astro-cid-wk2votdk>${s.label}</span> </div>`)} </div>`} </div> </div> </div> `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/components/SectionHeader.astro", void 0);

export { $$SectionHeader as $ };
