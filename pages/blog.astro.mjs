import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKYJJsIr.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DnPvbfSR.mjs';
import { $ as $$Hero, a as $$CtaBar } from '../chunks/CtaBar_BVSMSHmm.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_CxAVDIGG.mjs';
import { $ as $$CtaBarFinal } from '../chunks/CtaBarFinal_BKXqK_qM.mjs';
import { $ as $$WaBubble } from '../chunks/WaBubble_ByMWnQ5I.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allPosts = [
    {
      title: "Renta de Mesas Picnic para Bodas en CDMX: Gu\xEDa Completa",
      description: "Todo lo que necesitas saber sobre la renta de mesas picnic para bodas al aire libre en Ciudad de M\xE9xico y Estado de M\xE9xico. Estilos, capacidades y log\xEDstica.",
      image: "/img/mesa-picnic-boda-elegante-decoracion.avif",
      href: "/blog/renta-mesas-picnic-bodas-cdmx/",
      category: "Bodas",
      featured: true
    },
    {
      title: "Mesas Picnic en Polanco, Lomas de Chapultepec y Santa Fe CDMX",
      description: "Servicio premium de renta de mesas picnic para eventos en las colonias m\xE1s exclusivas de CDMX: Polanco, Lomas de Chapultepec, Santa Fe y Bosques de las Lomas.",
      image: "/img/mesa-picnic-evento-polanco-cdmx.avif",
      href: "/blog/renta-mesas-picnic-polanco-lomas-santa-fe/",
      category: "Zonas Premium"
    },
    {
      title: "Mesas Picnic Corporativas en Interlomas, Huixquilucan y Sat\xE9lite",
      description: "Renta de mesas picnic para team buildings, desayunos ejecutivos y activaciones de empresa en las zonas corporativas m\xE1s importantes del Estado de M\xE9xico.",
      image: "/img/mesa-picnic-team-building-corporativo.avif",
      href: "/blog/mesas-picnic-eventos-corporativos-interlomas-huixquilucan/",
      category: "Corporativo"
    },
    {
      title: "Picnic de Lujo en CDMX: Experiencias Premium para Parejas",
      description: "C\xF3mo crear un picnic de lujo en Ciudad de M\xE9xico para pedidas de mano, aniversarios y celebraciones \xEDntimas con mobiliario premium y decoraci\xF3n curada.",
      image: "/img/picnic-lujo-romantico-cdmx-mespic.avif",
      href: "/blog/picnic-lujo-experiencias-premium-cdmx/",
      category: "Experiencias"
    },
    {
      title: "Mesas Picnic en Coyoac\xE1n, San \xC1ngel, Roma Norte y Del Valle",
      description: "Gu\xEDa completa de renta de mesas picnic para eventos en las colonias m\xE1s culturales y bohemias de CDMX. Estilos, cobertura y log\xEDstica en zona hist\xF3rica.",
      image: "/img/mesa-picnic-evento-coyoacan-cdmx.avif",
      href: "/blog/renta-mesas-picnic-coyoacan-san-angel-roma-norte/",
      category: "Zonas Premium"
    },
    {
      title: "Mesas Picnic en Metepec, Zona Esmeralda y Bosque Real",
      description: "Renta de mesas picnic para fiestas privadas, bodas y eventos de alto nivel en las zonas residenciales m\xE1s exclusivas del Estado de M\xE9xico.",
      image: "/img/mesa-picnic-fiesta-privada-metepec.avif",
      href: "/blog/mesas-picnic-fiestas-privadas-metepec-zona-esmeralda-bosque-real/",
      category: "Estado de M\xE9xico"
    },
    {
      title: "Cu\xE1ntas Mesas Picnic Necesitas Seg\xFAn el N\xFAmero de Invitados",
      description: "Gu\xEDa pr\xE1ctica para calcular cu\xE1ntas mesas picnic rentar seg\xFAn invitados, tipo de evento y espacio disponible.",
      image: "/img/mesa-picnic-grande-evento-16.avif",
      href: "/blog/cuantas-mesas-picnic-necesitas-segun-invitados/",
      category: "Gu\xEDas"
    },
    {
      title: "Mesas Picnic para Eventos Corporativos: Gu\xEDa para Empresas",
      description: "C\xF3mo elegir mesas picnic para tu evento corporativo. Team buildings, conferencias y comidas empresariales al aire libre.",
      image: "/img/mesa-picnic-evento-corporativo-networking.avif",
      href: "/blog/mesas-picnic-eventos-corporativos/",
      category: "Corporativo"
    },
    {
      title: "Decoraci\xF3n de Mesas Picnic para Fiestas Infantiles",
      description: "Ideas creativas para decorar mesas picnic en cumplea\xF1os y fiestas infantiles. Tem\xE1ticas, colores y consejos pr\xE1cticos paso a paso.",
      image: "/img/mesa-picnic-fiesta-infantil-globos-colores.avif",
      href: "/blog/decoracion-mesas-picnic-fiestas-infantiles/",
      category: "Infantiles"
    }
  ];
  const featuredPost = allPosts.find((p) => p.featured);
  const gridPosts = allPosts.filter((p) => !p.featured);
  const categories = [...new Set(allPosts.map((p) => p.category))];
  const sidebarServices = [
    { label: "Renta para Bodas", href: "/servicios/bodas/" },
    { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos/" },
    { label: "Fiestas Infantiles", href: "/servicios/fiestas-infantiles/" },
    { label: "Picnic Rom\xE1ntico", href: "/servicios/picnic-romantico/" },
    { label: "Fiestas Tem\xE1ticas", href: "/servicios/fiestas-tematicas/" },
    { label: "Reuniones Familiares", href: "/servicios/reuniones-familiares/" }
  ];
  const sidebarCatalog = [
    { label: "Mesa Picnic Est\xE1ndar", desc: "6\u20138 personas", href: "/catalogo/mesa-picnic-estandar/", image: "/img/mesa-picnic-area-verde-19.avif" },
    { label: "Mesa Picnic Grande", desc: "10\u201312 personas", href: "/catalogo/mesa-picnic-grande/", image: "/img/mesa-picnic-grande-evento-16.avif" },
    { label: "Mesa Picnic Infantil", desc: "Ni\xF1os 3\u20138 a\xF1os", href: "/catalogo/mesa-picnic-infantil/", image: "/img/mesa-picnic-fiesta-infantil-globos-colores.avif" },
    { label: "Mesa Picnic Premium", desc: "Acabado premium", href: "/catalogo/mesa-picnic-premium/", image: "/img/mesa-picnic-premium-23.avif" },
    { label: "Set Picnic Completo", desc: "Con decoraci\xF3n incluida", href: "/catalogo/set-picnic-completo/", image: "/img/mesa-picnic-boda-invitados-atardecer.avif" }
  ];
  const catColor = {
    Bodas: "#9B6B4E",
    Gu\u00EDas: "#2C5530",
    Corporativo: "#3B5998",
    Infantiles: "#C75C6A",
    "Zonas Premium": "#7B5EA7",
    Experiencias: "#B45309",
    "Estado de M\xE9xico": "#0F766E"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog \u2014 MESPIC | Tips y Gu\xEDas de Mesas Picnic", "description": "Art\xEDculos, gu\xEDas y consejos sobre renta de mesas picnic para eventos en CDMX. Bodas, corporativos, infantiles y m\xE1s.", "data-astro-cid-5tznm7mj": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Blog" }
  ], "data-astro-cid-5tznm7mj": true })} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "dark": true, "badge": "Blog de MESPIC", "title": "Gu\xEDas y Consejos de Mesas Picnic para Eventos", "description": "Art\xEDculos escritos con base en m\xE1s de 8 a\xF1os organizando eventos. Bodas, corporativos, infantiles y celebraciones al aire libre.", "ctaPrimary": { label: "Ver art\xEDculos \u2192", href: "#articulos" }, "ctaSecondary": { label: "Cotizar ahora", href: "/cotizar/" }, "seoParagraph1": "En el blog de MESPIC compartimos gu\xEDas completas, consejos pr\xE1cticos y tendencias sobre renta de mesas picnic para eventos. Desde c\xF3mo elegir la cantidad correcta de mesas para tu boda, hasta ideas de decoraci\xF3n para fiestas infantiles.", "seoParagraph2": "Toda la informaci\xF3n est\xE1 basada en nuestra experiencia real montando m\xE1s de 500 eventos en Ciudad de M\xE9xico y Estado de M\xE9xico. Sin relleno: solo datos y consejos que funcionan.", "data-astro-cid-5tznm7mj": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<section class="section" id="articulos" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "title": "Art\xEDculos del Blog", "paragraph1": "Gu\xEDas pr\xE1cticas para que tu evento con mesas picnic sea un \xE9xito. Cada art\xEDculo resuelve una duda real de nuestros clientes.", "paragraph2": "Navega por categor\xEDa o consulta la barra lateral para encontrar exactamente lo que necesitas.", "badge": "Contenido especializado", "stats": [
    { value: "9", label: "Art\xEDculos" },
    { value: "7", label: "Categor\xEDas" }
  ], "data-astro-cid-5tznm7mj": true })} <div class="container" data-astro-cid-5tznm7mj> <!-- Filtros de categoría --> <div class="cat-filters" aria-label="Filtrar por categoría" data-astro-cid-5tznm7mj> <span class="cat-filter cat-filter--active" data-astro-cid-5tznm7mj>Todos</span> ${categories.map((cat) => renderTemplate`<span class="cat-filter" data-astro-cid-5tznm7mj>${cat}</span>`)} </div> <!-- Artículo destacado --> <a${addAttribute(featuredPost.href, "href")} class="feat-card"${addAttribute(`Leer: ${featuredPost.title}`, "aria-label")} data-astro-cid-5tznm7mj> <div class="feat-card__img" data-astro-cid-5tznm7mj> <img${addAttribute(featuredPost.image, "src")}${addAttribute(featuredPost.title, "alt")} loading="eager" width="860" height="480" data-astro-cid-5tznm7mj> <div class="feat-card__img-overlay" aria-hidden="true" data-astro-cid-5tznm7mj></div> <span class="feat-card__badge" data-astro-cid-5tznm7mj>Artículo destacado</span> </div> <div class="feat-card__body" data-astro-cid-5tznm7mj> <span class="feat-card__cat"${addAttribute(`color:${catColor[featuredPost.category] ?? "var(--c-accent)"}`, "style")} data-astro-cid-5tznm7mj> ${featuredPost.category} </span> <h3 class="feat-card__title" data-astro-cid-5tznm7mj>${featuredPost.title}</h3> <p class="feat-card__desc" data-astro-cid-5tznm7mj>${featuredPost.description}</p> <span class="feat-card__cta" data-astro-cid-5tznm7mj>
Leer artículo completo
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-5tznm7mj><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-5tznm7mj></path></svg> </span> </div> </a> <!-- Grid + Sidebar --> <div class="blog-layout" data-astro-cid-5tznm7mj> <div class="blog-main" data-astro-cid-5tznm7mj> <div class="blog-main__header" data-astro-cid-5tznm7mj> <h3 class="blog-main__heading" data-astro-cid-5tznm7mj>Todos los artículos</h3> <span class="blog-main__count" data-astro-cid-5tznm7mj>${allPosts.length} artículos</span> </div> <div class="blog-grid" data-astro-cid-5tznm7mj> ${gridPosts.map((post) => renderTemplate`<a${addAttribute(post.href, "href")} class="blog-card"${addAttribute(`Leer: ${post.title}`, "aria-label")} data-astro-cid-5tznm7mj> <div class="blog-card__img" data-astro-cid-5tznm7mj> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} loading="lazy" width="480" height="280" data-astro-cid-5tznm7mj> <span class="blog-card__cat-badge" data-astro-cid-5tznm7mj>${post.category}</span> </div> <div class="blog-card__body" data-astro-cid-5tznm7mj> <span class="blog-card__cat-text"${addAttribute(`color:${catColor[post.category] ?? "var(--c-accent)"}`, "style")} data-astro-cid-5tznm7mj> ${post.category} </span> <h3 class="blog-card__title" data-astro-cid-5tznm7mj>${post.title}</h3> <p class="blog-card__desc" data-astro-cid-5tznm7mj>${post.description}</p> <span class="blog-card__link" data-astro-cid-5tznm7mj>
Leer artículo
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-5tznm7mj><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-5tznm7mj></path></svg> </span> </div> </a>`)} </div> </div> <!-- SIDEBAR --> <aside class="blog-sidebar" aria-label="Recursos relacionados" data-astro-cid-5tznm7mj> <!-- CTA --> <div class="sb-cta" data-astro-cid-5tznm7mj> <p class="sb-cta__eyebrow" data-astro-cid-5tznm7mj>¿Tienes un evento próximo?</p> <p class="sb-cta__title" data-astro-cid-5tznm7mj>Cotiza tus mesas picnic</p> <p class="sb-cta__text" data-astro-cid-5tznm7mj>Sin compromiso. Respondemos en menos de 30 min.</p> <a href="/cotizar/" class="sb-cta__btn sb-cta__btn--primary" data-astro-cid-5tznm7mj>Cotizar ahora →</a> <a href="https://wa.me/5564328954?text=Hola%2C%20quiero%20cotizar%20mesas%20picnic%20para%20mi%20evento." target="_blank" rel="noopener" class="sb-cta__btn sb-cta__btn--wa" data-astro-cid-5tznm7mj> <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-5tznm7mj><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-5tznm7mj></path></svg>
WhatsApp directo
</a> </div> <!-- Artículos recientes --> <div class="sb-block" data-astro-cid-5tznm7mj> <h3 class="sb-block__title" data-astro-cid-5tznm7mj>Artículos recientes</h3> <div class="sb-list" data-astro-cid-5tznm7mj> ${allPosts.map((post) => renderTemplate`<a${addAttribute(post.href, "href")} class="sb-post" data-astro-cid-5tznm7mj> <div class="sb-post__thumb"${addAttribute(`background-image:url(${post.image})`, "style")} role="img"${addAttribute(post.title, "aria-label")} data-astro-cid-5tznm7mj></div> <div class="sb-post__info" data-astro-cid-5tznm7mj> <span class="sb-post__title" data-astro-cid-5tznm7mj>${post.title}</span> <span class="sb-post__cat" data-astro-cid-5tznm7mj>${post.category}</span> </div> </a>`)} </div> </div> <!-- Nuestros servicios --> <div class="sb-block" data-astro-cid-5tznm7mj> <h3 class="sb-block__title" data-astro-cid-5tznm7mj>Nuestros servicios</h3> <div class="sb-list" data-astro-cid-5tznm7mj> ${sidebarServices.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="sb-service" data-astro-cid-5tznm7mj> <span class="sb-service__icon" aria-hidden="true" data-astro-cid-5tznm7mj> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg> </span> <span class="sb-service__label" data-astro-cid-5tznm7mj>${item.label}</span> </a>`)} </div> </div> <!-- Catálogo de mesas --> <div class="sb-block" data-astro-cid-5tznm7mj> <h3 class="sb-block__title" data-astro-cid-5tznm7mj>Catálogo de mesas</h3> <div class="sb-list" data-astro-cid-5tznm7mj> ${sidebarCatalog.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="sb-catalog-item" data-astro-cid-5tznm7mj> <div class="sb-catalog-item__img"${addAttribute(`background-image:url(${item.image})`, "style")} role="img"${addAttribute(item.label, "aria-label")} data-astro-cid-5tznm7mj></div> <div class="sb-catalog-item__info" data-astro-cid-5tznm7mj> <span class="sb-catalog-item__name" data-astro-cid-5tznm7mj>${item.label}</span> <span class="sb-catalog-item__desc" data-astro-cid-5tznm7mj>${item.desc}</span> </div> <svg class="sb-catalog-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg> </a>`)} <a href="/catalogo/" class="sb-see-all" data-astro-cid-5tznm7mj>Ver catálogo completo →</a> </div> </div> <!-- Zonas de cobertura --> <div class="sb-block sb-block--coverage" data-astro-cid-5tznm7mj> <h3 class="sb-block__title" data-astro-cid-5tznm7mj> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-5tznm7mj><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-5tznm7mj></path><circle cx="12" cy="10" r="3" data-astro-cid-5tznm7mj></circle></svg>
Zonas de cobertura
</h3> <ul class="sb-coverage" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj>Ciudad de México (todas las alcaldías)</li> <li data-astro-cid-5tznm7mj>Naucalpan · Huixquilucan</li> <li data-astro-cid-5tznm7mj>Atizapán · Tlalnepantla</li> <li data-astro-cid-5tznm7mj>Toluca · Metepec</li> <li data-astro-cid-5tznm7mj>Texcoco · Chalco</li> </ul> </div> </aside> </div> </div> </section> ${renderComponent($$result2, "CtaBarFinal", $$CtaBarFinal, { "headline": "\xBFListo para tu evento?", "subtext": "Cotiza sin compromiso. Te respondemos en minutos.", "phone": "55 6432 8954", "whatsapp": "5564328954", "waMessage": "Hola, quiero cotizar mesas picnic para mi evento.", "cotizarHref": "/cotizar/", "data-astro-cid-5tznm7mj": true })} ${renderComponent($$result2, "WaBubble", $$WaBubble, { "whatsapp": "5564328954", "message": "Hola, quiero cotizar mesas picnic para mi evento.", "data-astro-cid-5tznm7mj": true })}  `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog MESPIC",
    "description": "Gu\xEDas y consejos sobre renta de mesas picnic para eventos en CDMX.",
    "url": "https://mesaspicnic.com/blog/",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "MESPIC",
      "telephone": "+52-55-6432-8954",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad de M\xE9xico",
        "addressCountry": "MX"
      }
    }
  }))) })}` })} `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
