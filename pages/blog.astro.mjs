import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, l as addAttribute } from '../chunks/astro/server_BUBszSA2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout__s1rEpZe.mjs';
import { $ as $$Hero } from '../chunks/Hero_G4qPgYAv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allPosts = [
    {
      title: "Ideas de Decoraci\xF3n para Mesas Picnic en Fiestas Infantiles",
      description: "Consejos profesionales para decorar mesas picnic infantiles con mejor est\xE9tica, orden y funcionalidad.",
      image: "/img/mesa-picnic-fiesta-infantil-globos-colores.avif",
      href: "/blog/ideas-decoracion-mesas-picnic-fiestas-infantiles/"
    },
    {
      title: "Cu\xE1ntas Mesas Picnic Necesitas Seg\xFAn el N\xFAmero de Invitados",
      description: "Gu\xEDa pr\xE1ctica para calcular cu\xE1ntas mesas picnic rentar seg\xFAn invitados, tipo de evento y espacio disponible.",
      image: "/img/mesa-picnic-grande-evento-16.avif",
      href: "/blog/cuantas-mesas-picnic-necesitas-segun-invitados/"
    },
    {
      title: "Renta de Mesas Picnic para Bodas en CDMX: Gu\xEDa Completa",
      description: "Todo lo que necesitas saber sobre la renta de mesas picnic para bodas al aire libre en Ciudad de M\xE9xico y Estado de M\xE9xico.",
      image: "/img/mesa-picnic-boda-elegante-decoracion.avif",
      href: "/blog/renta-mesas-picnic-bodas-cdmx/"
    },
    {
      title: "Mesas Picnic para Eventos Corporativos: Gu\xEDa para Empresas",
      description: "C\xF3mo elegir mesas picnic para tu evento corporativo. Team buildings, conferencias y comidas empresariales al aire libre.",
      image: "/img/mesa-picnic-evento-corporativo-networking.avif",
      href: "/blog/mesas-picnic-eventos-corporativos/"
    },
    {
      title: "Decoraci\xF3n de Mesas Picnic para Fiestas Infantiles",
      description: "Ideas creativas para decorar mesas picnic en cumplea\xF1os y fiestas infantiles. Tem\xE1ticas, colores y consejos pr\xE1cticos.",
      image: "/img/mesa-picnic-fiesta-infantil-globos-colores.avif",
      href: "/blog/decoracion-mesas-picnic-fiestas-infantiles/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog \u2014 MESPIC | Tips y Gu\xEDas de Mesas Picnic", "description": "Art\xEDculos, gu\xEDas y consejos sobre renta de mesas picnic para eventos. Bodas, corporativos, infantiles y m\xE1s.", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Blog MESPIC", "description": "Gu\xEDas, consejos y tendencias sobre mesas picnic para eventos. Aprende a crear el evento perfecto.", "ctaPrimary": { label: "Cotizar ahora \u2192", href: "/cotizar/" }, "ctaSecondary": { label: "Servicios", href: "/servicios/" }, "seoParagraph1": "En el blog de MESPIC compartimos gu\xEDas completas, consejos pr\xE1cticos y tendencias sobre renta de mesas picnic para eventos. Desde c\xF3mo elegir la cantidad correcta de mesas para tu boda, hasta ideas de decoraci\xF3n para fiestas infantiles.", "seoParagraph2": "Nuestros art\xEDculos est\xE1n escritos con base en nuestra experiencia de m\xE1s de 8 a\xF1os organizando eventos con mesas picnic. Informaci\xF3n real y pr\xE1ctica para que tu evento sea un \xE9xito total.", "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<section class="section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="blog-grid" data-astro-cid-5tznm7mj> ${allPosts.map((post) => renderTemplate`<a${addAttribute(post.href, "href")} class="blog-card" data-astro-cid-5tznm7mj> <div class="blog-card-img" data-astro-cid-5tznm7mj> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} loading="lazy" width="400" height="250" data-astro-cid-5tznm7mj> </div> <div class="blog-card-body" data-astro-cid-5tznm7mj> <h2 class="blog-card-title" data-astro-cid-5tznm7mj>${post.title}</h2> <p class="blog-card-desc" data-astro-cid-5tznm7mj>${post.description}</p> <span class="blog-card-link" data-astro-cid-5tznm7mj>Leer artículo →</span> </div> </a>`)} </div> </div> </section> ` })} `;
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
