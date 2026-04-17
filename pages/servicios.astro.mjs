import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_C6AFCjSs.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKYJJsIr.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DnPvbfSR.mjs';
import { $ as $$Hero, a as $$CtaBar } from '../chunks/CtaBar_BVSMSHmm.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_CxAVDIGG.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_DC6JjJ3j.mjs';
import { $ as $$FeatureCard, a as $$FaqSection } from '../chunks/FaqSection_DsOaJ6r-.mjs';
import { $ as $$GallerySection } from '../chunks/GallerySection_D_chrQdy.mjs';
import { $ as $$CtaBarFinal } from '../chunks/CtaBarFinal_BKXqK_qM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const galeriaServicios = [
    { src: "/img/boda-hacienda-1.avif", alt: "Mesas picnic elegantes en boda de hacienda mexicana con decoraci\xF3n floral" },
    { src: "/img/mesa-picnic-evento-corporativo-networking.avif", alt: "Mobiliario de madera para evento corporativo networking al aire libre" },
    { src: "/img/infantil-cumple-1.avif", alt: "Mesa infantil decorada con globos y cupcakes para cumplea\xF1os en jard\xEDn" },
    { src: "/img/mesa-picnic-pedida-mano-romantica.webp", alt: "Montaje rom\xE1ntico de picnic para pedida de mano con flores y velas" },
    { src: "/img/tema-mexicana-1.avif", alt: "Mesa tem\xE1tica con decoraci\xF3n mexicana, papel picado y talavera" },
    { src: "/img/corp-teambuilding-1.avif", alt: "Bancas de madera distribuidas en parque verde para team building empresarial" },
    { src: "/img/mesa-picnic-feria-gastronomica-multitud.avif", alt: "Gran montaje de mesas picnic para feria gastron\xF3mica con m\xFAltiples asistentes" },
    { src: "/img/mesa-picnic-boda-elegante-luces.avif", alt: "Mesa picnic con iluminaci\xF3n de luces c\xE1lidas para boda nocturna en jard\xEDn" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Servicios de Renta de Mesas Picnic para Eventos | MESPIC \u2014 CDMX", "description": "8 servicios especializados de renta de mobiliario de madera: bodas, corporativos, infantiles, picnic rom\xE1ntico, tem\xE1ticas, festivales y m\xE1s. Entrega y montaje incluidos en CDMX y Edomex.", "ogImage": "/img/mesa-picnic-boda-elegante-decoracion.avif", "data-astro-cid-hezqo47o": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Servicios" }
  ], "data-astro-cid-hezqo47o": true })} ` })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "badge": "8 tipos de servicio", "title": "Mobiliario de Madera para Cada Tipo de Evento", "description": "Desde una boda para 200 personas hasta un picnic rom\xE1ntico para dos. Tenemos la configuraci\xF3n exacta para tu evento, con entrega, montaje y recolecci\xF3n incluidos en CDMX y Edomex.", "ctaPrimary": { label: "Cotizar ahora \u2192", href: "/cotizar/" }, "ctaSecondary": { label: "Ver todos los servicios", href: "#todos-los-servicios" }, "seoParagraph1": "MESPIC ofrece 8 servicios especializados de renta de mobiliario de madera para eventos al aire libre en la Ciudad de M\xE9xico y Estado de M\xE9xico. Cada servicio tiene su propia log\xEDstica y configuraci\xF3n: no es lo mismo preparar bancas para una boda \xEDntima en Coyoac\xE1n que montar 30 mesas para un festival gastron\xF3mico en Roma Norte. Por eso adaptamos cada entrega al tipo de evento, no al rev\xE9s.", "seoParagraph2": "Todos los servicios incluyen transporte a tu ubicaci\xF3n, montaje profesional por nuestro equipo y recolecci\xF3n al terminar. No subcontratamos ni cobramos cargos extra por maniobras o tiempo. Operamos los 7 d\xEDas de la semana con tiempo de respuesta inferior a 3 horas en toda la Ciudad de M\xE9xico y municipios del Estado de M\xE9xico como Naucalpan, Huixquilucan y Atizap\xE1n.", "dark": true, "data-astro-cid-hezqo47o": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "data-astro-cid-hezqo47o": true })}  ${maybeRenderHead()}<section class="section" id="todos-los-servicios" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Nuestros Servicios", "title": "Todos Nuestros Servicios", "paragraph1": "Cada tipo de evento requiere una log\xEDstica distinta: cantidad de bancas, distribuci\xF3n del espacio, tiempo de montaje y tipo de asesor\xEDa. Explora cada servicio en detalle y encuentra el que se ajusta a tu ocasi\xF3n.", "paragraph2": "Si no est\xE1s seguro de cu\xE1l necesitas, cotiza por WhatsApp y te asesoramos seg\xFAn tu fecha, ubicaci\xF3n y n\xFAmero de invitados. Respondemos en minutos.", "stats": [
    { value: "8", label: "servicios especializados" },
    { value: "500+", label: "eventos realizados" },
    { value: "CDMX+Edomex", label: "zona de cobertura" }
  ], "data-astro-cid-hezqo47o": true })} <div class="container" data-astro-cid-hezqo47o> <div class="grid-4" data-astro-cid-hezqo47o> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Bodas al Aire Libre", "description": "Bancas de pino barnizadas a mano para bodas en jardines, haciendas y terrazas. Combinan con cualquier estilo de decoraci\xF3n: r\xFAstico, boho, cl\xE1sico o minimalista. Montaje incluido en tu ubicaci\xF3n.", "image": "/img/mesa-picnic-boda-elegante-decoracion.avif", "href": "/servicios/bodas/", "btnLabel": "Mesas para bodas", "badge": "Bodas", "icon": "\u{1F48D}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Eventos Corporativos", "description": "Mobiliario para team buildings, conferencias y comidas empresariales al aire libre. Configuramos el montaje seg\xFAn la cantidad de asistentes y el formato de tu evento.", "image": "/img/mesa-picnic-evento-corporativo-networking.avif", "href": "/servicios/eventos-corporativos/", "btnLabel": "Mobiliario corporativo", "badge": "Corporativo", "icon": "\u{1F3E2}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Fiestas Infantiles", "description": "Bancas lijadas a grano fino, sin astillas ni bordes filosos. Modelo infantil con altura adaptada para ni\xF1os de 3 a 10 a\xF1os. Ideal para cumplea\xF1os, baby showers y reuniones familiares.", "image": "/img/mesa-picnic-fiesta-infantil-globos-colores.avif", "href": "/servicios/fiestas-infantiles/", "btnLabel": "Mesas para ni\xF1os", "badge": "Infantil", "icon": "\u{1F388}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Picnic Rom\xE1ntico", "description": "Montaje \xEDntimo para dos personas con banca decorada, manteler\xEDa y ambientaci\xF3n personalizada. Ideal para pedidas de mano, aniversarios o una tarde especial en parques y jardines de la ciudad.", "image": "/img/mesa-picnic-pedida-mano-romantica.webp", "href": "/servicios/picnic-romantico/", "btnLabel": "Picnic para parejas", "badge": "Rom\xE1ntico", "icon": "\u2764\uFE0F", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Fiestas Tem\xE1ticas", "description": "Montajes para fiestas mexicanas, XV a\xF1os, ferias gastron\xF3micas y celebraciones tem\xE1ticas. La madera natural se adapta visualmente a cualquier ambientaci\xF3n que tengas en mente.", "image": "/img/tema-mexicana-1.avif", "href": "/servicios/fiestas-tematicas/", "btnLabel": "Mesas para fiestas", "badge": "Tem\xE1tico", "icon": "\u{1F389}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Reuniones Familiares", "description": "Mobiliario para cumplea\xF1os de adultos, d\xEDa de las madres, posadas y reuniones de fin de semana. Bancas amplias donde caben abuelos, pap\xE1s y ni\xF1os c\xF3modamente.", "image": "/img/mesa-picnic-reunion-familiar-comida.avif", "href": "/servicios/reuniones-familiares/", "btnLabel": "Mesas para familia", "badge": "Familiar", "icon": "\u{1F3E1}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Festivales y Ferias", "description": "Bancas resistentes de alta capacidad para ferias gastron\xF3micas, bazares, festivales culturales y eventos masivos al aire libre. Disponibles en volumen para 100+ personas.", "image": "/img/mesa-picnic-feria-gastronomica-multitud.avif", "href": "/servicios/festivales/", "btnLabel": "Mobiliario para festivales", "badge": "Masivo", "icon": "\u{1F3AA}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Sesiones Fotogr\xE1ficas", "description": "Bancas de madera como escenograf\xEDa para sesiones de fotos profesionales, contenido para redes sociales, cat\xE1logos y producciones audiovisuales. Montaje por hora disponible.", "image": "/img/mesa-picnic-boda-elegante-luces.avif", "href": "/servicios/sesiones-fotograficas/", "btnLabel": "Renta para fotos", "badge": "Foto & Video", "icon": "\u{1F4F7}", "data-astro-cid-hezqo47o": true })} </div> </div> </section>  <section class="section section-alt" id="incluye" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Servicio completo", "title": "Qu\xE9 Incluye Cada Servicio", "paragraph1": "Sin importar el tipo de evento que elijas, todos los servicios vienen con el mismo paquete integral: entrega, montaje, uso ilimitado y recolecci\xF3n. Sin cargos extra, sin letra chica, sin sorpresas.", "paragraph2": "La diferencia entre servicios est\xE1 en el tipo de montaje, la cantidad de piezas recomendadas y la asesor\xEDa que te damos seg\xFAn el formato espec\xEDfico de tu evento.", "stats": [
    { value: "100%", label: "precio final sin cargos extra" },
    { value: "sin l\xEDmite", label: "de tiempo en tu evento" },
    { value: "7 d\xEDas", label: "de la semana, 8\u201320 hrs" }
  ], "data-astro-cid-hezqo47o": true })} <div class="container" data-astro-cid-hezqo47o> <div class="grid-4" data-astro-cid-hezqo47o> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 0, "title": "Entrega en tu Ubicaci\xF3n", "description": "Llevamos el mobiliario a donde sea tu evento: jard\xEDn, terraza, parque, hacienda o sal\xF3n exterior. Cubrimos todas las alcald\xEDas de CDMX y municipios del Edomex en un promedio de 2 a 3 horas.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 1, "title": "Montaje Profesional", "description": "Nuestro equipo arma y distribuye las bancas seg\xFAn el espacio disponible y el n\xFAmero de invitados. Llegamos con tiempo para que todo est\xE9 listo antes de que comience tu evento.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 2, "title": "Uso sin L\xEDmite de Tiempo", "description": "Las bancas quedan en tu evento hasta que termine. No cobramos por hora ni por tiempo extra. Si tu boda termina a las 3 am, recogemos a las 3 am, sin cargo adicional.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 3, "title": "Recolecci\xF3n Incluida", "description": "Al terminar tu evento, nuestro equipo recoge todo el mobiliario. T\xFA no tienes que hacer absolutamente nada. El precio que cotizamos ya incluye este servicio desde el inicio.", "data-astro-cid-hezqo47o": true })} </div> </div> </section>  <section class="section" id="catalogo-relacionado" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Cat\xE1logo de mobiliario", "title": "Elige el Modelo que Mejor se Adapta a tu Evento", "paragraph1": "Adem\xE1s de tipo de servicio, puedes elegir el modelo espec\xEDfico de mesa picnic. Tenemos 6 modelos distintos, cada uno dise\xF1ado para una capacidad y un uso particular.", "paragraph2": "Revisa las fichas t\xE9cnicas de cada producto con medidas, capacidad, acabado y fotos reales en eventos. Tambi\xE9n puedes ver la tabla comparativa para decidir cu\xE1l combina mejor con tu ocasi\xF3n.", "stats": [
    { value: "6", label: "modelos de mesa picnic" },
    { value: "1.20\u20132.40 m", label: "rango de medidas" },
    { value: "pino nacional", label: "madera natural premium" }
  ], "data-astro-cid-hezqo47o": true })} <div class="container" data-astro-cid-hezqo47o> <div class="grid-3" data-astro-cid-hezqo47o> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Est\xE1ndar", "description": "1.80 \xD7 1.50 m \xB7 6 personas. Pino lijado y barnizado a mano. El modelo m\xE1s solicitado para bodas, reuniones familiares y corporativos.", "image": "/img/mesa-picnic-boda-elegante-decoracion.avif", "href": "/catalogo/mesa-picnic-estandar/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "6 personas", "icon": "\u{1FAB5}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Grande", "description": "2.40 \xD7 1.50 m \xB7 10-12 personas. Ideal para festivales, corporativos y mesa principal de boda. Estructura reforzada.", "image": "/img/mesa-picnic-evento-corporativo-networking.avif", "href": "/catalogo/mesa-picnic-grande/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "10-12 personas", "icon": "\u{1F333}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Infantil", "description": "1.20 \xD7 1.00 m \xB7 8-10 ni\xF1os. Altura reducida, bordes redondeados y lijado ultrafino sin astillas. Seguridad para los peque\xF1os.", "image": "/img/infantil-cumple-1.avif", "href": "/catalogo/mesa-picnic-infantil/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "3-10 a\xF1os", "icon": "\u{1F9F8}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Premium", "description": "Pino sin nudos + 4 manos de barniz. Acabado de lujo para bodas VIP, eventos de alto perfil y sesiones fotogr\xE1ficas profesionales.", "image": "/img/mesa-picnic-boda-elegante-luces.avif", "href": "/catalogo/mesa-picnic-premium/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "Lujo", "icon": "\u2728", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Set Picnic Completo", "description": "Mesa + manteler\xEDa + cojines + centro de mesa. Paquete llave en mano para picnics rom\xE1nticos, aniversarios y pedidas de mano.", "image": "/img/mesa-picnic-pedida-mano-romantica.webp", "href": "/catalogo/set-picnic-completo/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "Todo incluido", "icon": "\u{1F381}", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic R\xFAstica", "description": "Barniz que resalta veta y nudos naturales. Estilo boho, vintage y campestre-chic. Perfecta para bodas en bosques y haciendas.", "image": "/img/tema-mexicana-1.avif", "href": "/catalogo/mesa-picnic-rustica/", "btnLabel": "Ver ficha t\xE9cnica \u2192", "badge": "Boho & Vintage", "icon": "\u{1F33F}", "data-astro-cid-hezqo47o": true })} </div> <div class="catalog-cta-wrap" data-astro-cid-hezqo47o> <a href="/catalogo/" class="btn btn-secondary" data-astro-cid-hezqo47o>Ver catálogo completo con tabla comparativa →</a> </div> </div> </section>  <section class="section" id="por-que" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Por qu\xE9 elegirnos", "title": "\xBFPor qu\xE9 elegir MESPIC?", "paragraph1": "Despu\xE9s de 8 a\xF1os y m\xE1s de 500 eventos, hay cosas que solo se aprenden con experiencia: c\xF3mo proteger la madera del clima, cu\xE1ntas bancas necesitas seg\xFAn tus invitados, o c\xF3mo distribuir el mobiliario para que todos est\xE9n c\xF3modos.", "paragraph2": "Trabajamos con pino nacional seleccionado, lijado a grano fino y barnizado a mano. No subcontratamos: nuestro equipo se encarga desde la carga hasta el \xFAltimo detalle del montaje.", "stats": [
    { value: "8 a\xF1os", label: "de experiencia operativa" },
    { value: "100%", label: "madera de pino natural" },
    { value: "equipo propio", label: "sin subcontratistas" }
  ], "data-astro-cid-hezqo47o": true })} <div class="container" data-astro-cid-hezqo47o> <div class="grid-4" data-astro-cid-hezqo47o> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 0, "title": "Madera 100% Natural", "description": "Pino nacional seleccionado, lijado a grano fino y barnizado a mano. Sin pl\xE1sticos ni materiales sint\xE9ticos. La textura y el color de la madera real no se pueden imitar con ning\xFAn sustituto.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 1, "title": "Precio Final sin Sorpresas", "description": "El precio que cotizamos incluye entrega, montaje y recolecci\xF3n. Sin cargos por traslado, maniobras extra ni tiempo adicional. Lo que ves en la cotizaci\xF3n es lo que pagas.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 2, "title": "Equipo Propio, Sin Subcontratistas", "description": "Todo el personal que atiende tu evento es de MESPIC: desde la carga en bodega hasta el montaje en tu locaci\xF3n. Eso nos permite controlar la calidad en cada entrega.", "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 3, "title": "+500 Eventos desde 2017", "description": "Bodas, corporativos, cumplea\xF1os, posadas, XV a\xF1os, festivales y bazares. Ocho a\xF1os de operaci\xF3n nos han dado la log\xEDstica y la experiencia para anticipar lo que cada evento necesita.", "data-astro-cid-hezqo47o": true })} </div> </div> </section>  <section class="section" id="galeria" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Galer\xEDa de eventos", "title": "Nuestro Mobiliario en Acci\xF3n", "paragraph1": "Bodas, corporativos, fiestas infantiles, eventos tem\xE1ticos y festivales \u2014 la madera natural se adapta a cualquier estilo y tipo de celebraci\xF3n.", "stats": [
    { value: "3 modelos", label: "est\xE1ndar, grande e infantil" },
    { value: "pino natural", label: "lijado y barnizado a mano" },
    { value: "cualquier estilo", label: "r\xFAstico, boho, minimalista\u2026" }
  ], "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "GallerySection", $$GallerySection, { "images": galeriaServicios, "id": "galeria-servicios", "data-astro-cid-hezqo47o": true })} </section>  <section class="section section-alt" id="faq-servicios" data-astro-cid-hezqo47o> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Preguntas frecuentes", "title": "Preguntas sobre los Servicios", "paragraph1": "Dudas comunes que recibimos antes de que los clientes elijan su servicio. Cada pregunta tiene una respuesta directa y sin rodeos.", "paragraph2": "Cada servicio tiene su propia p\xE1gina con informaci\xF3n detallada, fotos de referencia y especificaciones del mobiliario.", "stats": [
    { value: "6", label: "preguntas con respuesta inmediata" },
    { value: "< 5 min", label: "tiempo de respuesta por WhatsApp" },
    { value: "lun\u2013dom", label: "8:00 a 20:00 hrs" }
  ], "data-astro-cid-hezqo47o": true })} ${renderComponent($$result2, "FaqSection", $$FaqSection, { "phone": "55 6432 8954", "whatsapp": "5564328954", "schedule": "Lun\u2013Dom 8:00\u201320:00", "items": [
    {
      question: "\xBFCu\xE1l es la diferencia entre los servicios?",
      answer: "La diferencia est\xE1 en el tipo de montaje y la asesor\xEDa. Para una boda te ayudamos con la distribuci\xF3n en el jard\xEDn y el estilo del armado. Para un corporativo configuramos seg\xFAn el formato del evento. Para un festival preparamos volumen de bancas con resistencia para todo el d\xEDa. El mobiliario es el mismo; la log\xEDstica y el acompa\xF1amiento cambian."
    },
    {
      question: "\xBFPuedo combinar varios servicios en un mismo evento?",
      answer: "S\xED. Si tu evento tiene zona de ni\xF1os y zona de adultos, llevamos bancas est\xE1ndar e infantiles. Si quieres un rinc\xF3n de fotos adem\xE1s del mobiliario principal del evento, lo incluimos en la misma cotizaci\xF3n y entrega."
    },
    {
      question: "\xBFCu\xE1ntas bancas necesito para mi evento?",
      answer: "Depende del n\xFAmero de invitados. La banca est\xE1ndar (1.80 \xD7 1.50 m) acomoda 6 personas; la grande (2.40 \xD7 1.50 m) acomoda 10-12. Para 50 invitados necesitas aproximadamente 8-9 bancas est\xE1ndar. Cotiza por WhatsApp y te calculamos la cantidad exacta sin costo."
    },
    {
      question: "\xBFTienen disponibilidad para fines de semana?",
      answer: "Operamos los 7 d\xEDas de la semana. Los s\xE1bados y domingos son los m\xE1s solicitados, as\xED que recomendamos reservar con al menos 1 semana de anticipaci\xF3n, especialmente en temporada alta de noviembre a febrero."
    },
    {
      question: "\xBFPueden montar en cualquier ubicaci\xF3n de CDMX?",
      answer: "S\xED, siempre que haya acceso vehicular para la entrega. Montamos en jardines, terrazas, parques p\xFAblicos (con permiso), haciendas, salones con \xE1rea exterior y azoteas. Si no est\xE1s seguro, m\xE1ndanos la ubicaci\xF3n por WhatsApp y te confirmamos sin compromiso."
    },
    {
      question: "\xBFEl servicio de picnic rom\xE1ntico incluye decoraci\xF3n?",
      answer: "S\xED. El picnic rom\xE1ntico incluye banca decorada, manteler\xEDa, cojines y ambientaci\xF3n b\xE1sica. Si quieres agregar flores, velas, menaje especial o una cesta de picnic, lo cotizamos por separado seg\xFAn tus preferencias."
    }
  ], "data-astro-cid-hezqo47o": true })} </section>  ${renderComponent($$result2, "CtaBarFinal", $$CtaBarFinal, { "headline": "\xBFYa sabes qu\xE9 servicio necesitas?", "subtext": "Cotiza sin compromiso. Te asesoramos seg\xFAn tu evento y presupuesto.", "phone": "55 6432 8954", "whatsapp": "5564328954", "waMessage": "Hola, quiero cotizar un servicio de mesas picnic para mi evento.", "cotizarHref": "/cotizar/", "data-astro-cid-hezqo47o": true })}   `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renta de Mesas Picnic para Eventos \u2014 MESPIC",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MESPIC \u2014 Renta de Mesas Picnic",
      "telephone": "+52-55-6432-8954",
      "url": "https://mesaspicnic.com",
      "areaServed": [
        { "@type": "City", "name": "Ciudad de M\xE9xico" },
        { "@type": "State", "name": "Estado de M\xE9xico" }
      ]
    },
    "description": "Servicio de renta de mobiliario de madera para bodas, corporativos, fiestas infantiles, picnics rom\xE1nticos, festivales, ferias y sesiones fotogr\xE1ficas en CDMX y Edomex. Entrega, montaje y recolecci\xF3n incluidos.",
    "serviceType": [
      "Renta de mesas picnic para bodas",
      "Renta de mobiliario para eventos corporativos",
      "Renta de bancas para fiestas infantiles",
      "Picnic rom\xE1ntico para parejas",
      "Mobiliario para festivales y ferias",
      "Renta de escenograf\xEDa para sesiones fotogr\xE1ficas"
    ],
    "areaServed": [
      { "@type": "City", "name": "Ciudad de M\xE9xico" },
      { "@type": "State", "name": "Estado de M\xE9xico" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1l es la diferencia entre los servicios de MESPIC?",
        "acceptedAnswer": { "@type": "Answer", "text": "La diferencia est\xE1 en el tipo de montaje y la asesor\xEDa. Para bodas, distribuci\xF3n en jard\xEDn. Para corporativos, configuraci\xF3n seg\xFAn formato. Para festivales, volumen de bancas resistentes para todo el d\xEDa." }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas bancas necesito para mi evento?",
        "acceptedAnswer": { "@type": "Answer", "text": "La banca est\xE1ndar acomoda 6 personas. La grande acomoda 10-12. Para 50 invitados necesitas aproximadamente 8-9 bancas est\xE1ndar." }
      },
      {
        "@type": "Question",
        "name": "\xBFPueden montar en cualquier ubicaci\xF3n de CDMX?",
        "acceptedAnswer": { "@type": "Answer", "text": "S\xED, siempre que haya acceso vehicular. Cubrimos todas las alcald\xEDas de CDMX y municipios del Edomex como Naucalpan, Huixquilucan y Atizap\xE1n." }
      }
    ]
  }))) })}` })} `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/servicios/index.astro", void 0);

const $$file = "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/servicios/index.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
