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
import { $ as $$WaBubble } from '../chunks/WaBubble_ByMWnQ5I.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const galeriaPaquetes = [
    { src: "/img/mesa-picnic-boda-elegante-decoracion.avif", alt: "Paquete de mesas picnic para boda \xEDntima con 24 personas en jard\xEDn CDMX" },
    { src: "/img/corp-teambuilding-1.avif", alt: "Paquete est\xE1ndar de bancas de pino para team building corporativo en parque" },
    { src: "/img/mesa-picnic-feria-gastronomica-multitud.avif", alt: "Paquete premium de mesas picnic para festival gastron\xF3mico con 60 personas" },
    { src: "/img/infantil-cumple-1.avif", alt: "Paquete b\xE1sico de mesas picnic para fiesta de cumplea\xF1os familiar en jard\xEDn" },
    { src: "/img/mesa-picnic-evento-corporativo-networking.avif", alt: "Paquete de mesas picnic para evento corporativo networking al aire libre" },
    { src: "/img/mesa-picnic-boda-elegante-luces.avif", alt: "Paquete premium montado para boda elegante nocturna con iluminaci\xF3n c\xE1lida" },
    { src: "/img/tema-mexicana-1.avif", alt: "Paquete est\xE1ndar con mesas r\xFAsticas para fiesta tem\xE1tica en hacienda mexicana" },
    { src: "/img/mesa-picnic-reunion-familiar-comida.avif", alt: "Paquete b\xE1sico de mesas picnic para reuni\xF3n familiar dominical en jard\xEDn" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Paquetes de Renta de Mesas Picnic \u2014 24, 36 y 60 Personas | MESPIC CDMX", "description": "3 paquetes de renta de mesas picnic para eventos en CDMX y Edomex: B\xE1sico (24 personas), Est\xE1ndar (36 personas) y Premium (60 personas). Precio final sin extras. Traslado, montaje y recolecci\xF3n incluidos.", "ogImage": "/img/mesa-picnic-boda-elegante-decoracion.avif", "data-astro-cid-ftvjo3up": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Paquetes" }
  ], "data-astro-cid-ftvjo3up": true })} ` })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "badge": "3 paquetes disponibles", "title": "Paquetes de Mesas Picnic por N\xFAmero de Invitados", "description": "Tres paquetes pensados para que no tengas que calcular piezas: elige el que se acerca al n\xFAmero de invitados de tu evento. Precio final, sin cargos extra. Traslado, montaje y recolecci\xF3n incluidos.", "ctaPrimary": { label: "Cotizar ahora \u2192", href: "/cotizar/" }, "ctaSecondary": { label: "Ver cat\xE1logo de modelos", href: "/catalogo/" }, "seoParagraph1": "Los paquetes de MESPIC est\xE1n dise\xF1ados para clientes que quieren simplicidad: en lugar de calcular cu\xE1ntas bancas de qu\xE9 modelo necesitan, eligen un paquete seg\xFAn el n\xFAmero de invitados y listo. El Paquete B\xE1sico cubre hasta 24 personas, el Est\xE1ndar hasta 36 y el Premium hasta 60. Para eventos m\xE1s grandes, cotizamos por volumen directamente.", "seoParagraph2": "Todos los paquetes incluyen exactamente lo mismo en t\xE9rminos de servicio: traslado a la locaci\xF3n elegida en CDMX o Edomex, montaje profesional por el equipo de MESPIC, uso sin l\xEDmite de horas durante el evento y recolecci\xF3n completa al terminar. El precio que aparece en la cotizaci\xF3n es el precio final \u2014 sin cargos por maniobras, distancia ni tiempo extra. Aceptamos efectivo, transferencia y tarjeta de cr\xE9dito.", "dark": true, "data-astro-cid-ftvjo3up": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "data-astro-cid-ftvjo3up": true })}  ${maybeRenderHead()}<section class="section" id="paquetes" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Todos los paquetes", "title": "Elige el Paquete seg\xFAn tu N\xFAmero de Invitados", "paragraph1": "Tres opciones de capacidad. El modelo de bancas de cada paquete se ajusta al formato del evento. Si tu n\xFAmero de invitados cae entre dos paquetes, te recomendamos el superior para que nadie est\xE9 apretado.", "paragraph2": "\xBFTu evento tiene m\xE1s de 60 invitados? Cotizamos volumen personalizado por WhatsApp con el n\xFAmero exacto de bancas, combinaci\xF3n de modelos y distribuci\xF3n seg\xFAn el espacio.", "stats": [
    { value: "3", label: "paquetes disponibles" },
    { value: "24\u201360", label: "personas por paquete" },
    { value: "precio final", label: "sin extras ni sorpresas" }
  ], "data-astro-cid-ftvjo3up": true })} <div class="container" data-astro-cid-ftvjo3up> <div class="grid-3" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Paquete B\xE1sico", "description": "Para eventos de hasta 24 personas. 4 bancas est\xE1ndar de pino natural (1.80 \xD7 1.50 m), con capacidad de 6 personas por banca. Ideal para reuniones familiares, cumplea\xF1os \xEDntimos y eventos corporativos peque\xF1os.", "image": "/img/mesa-picnic-reunion-familiar-comida.avif", "href": "/paquetes/basico/", "btnLabel": "Ver Paquete B\xE1sico \u2192", "badge": "B\xE1sico \xB7 24 personas", "icon": "\u{1F33F}", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Paquete Est\xE1ndar", "description": "Para eventos de hasta 36 personas. 6 bancas est\xE1ndar de pino. El paquete m\xE1s solicitado: cubre cumplea\xF1os medianos, baby showers, posadas y corporativos de tama\xF1o medio sin sobredimensionar el presupuesto.", "image": "/img/mesa-picnic-boda-elegante-decoracion.avif", "href": "/paquetes/estandar/", "btnLabel": "Ver Paquete Est\xE1ndar \u2192", "badge": "Est\xE1ndar \xB7 36 personas", "icon": "\u{1FAB5}", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Paquete Premium", "description": "Para eventos de hasta 60 personas. 10 bancas en combinaci\xF3n de modelos est\xE1ndar y/o grande seg\xFAn el layout del evento. Bodas medianas, corporativos de grupo, graduaciones y celebraciones de escala completa.", "image": "/img/mesa-picnic-feria-gastronomica-multitud.avif", "href": "/paquetes/premium/", "btnLabel": "Ver Paquete Premium \u2192", "badge": "Premium \xB7 60 personas", "icon": "\u2728", "data-astro-cid-ftvjo3up": true })} </div> </div> </section>  <section class="section section-alt" id="comparativa" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Comparativa de paquetes", "title": "Los 3 Paquetes en una Sola Vista", "paragraph1": "Capacidad, composici\xF3n y lo que incluye cada paquete de un vistazo. Todos tienen el mismo nivel de servicio \u2014 lo que var\xEDa es la cantidad de bancas y el rango de invitados que cubre.", "paragraph2": "\xBFTu n\xFAmero de invitados es mayor a 60? Cotiza volumen personalizado. Tenemos m\xE1s de 120 piezas en bodega para eventos de 100 o m\xE1s personas.", "stats": [
    { value: "4\u201310", label: "bancas seg\xFAn paquete" },
    { value: "100%", label: "precio final sin extras" },
    { value: "+120 pzas", label: "inventario disponible" }
  ], "data-astro-cid-ftvjo3up": true })} <div class="container" data-astro-cid-ftvjo3up> <div class="pkg-table-wrap" data-astro-cid-ftvjo3up> <table class="pkg-table" role="table" aria-label="Comparativa de paquetes de mesas picnic" data-astro-cid-ftvjo3up> <thead data-astro-cid-ftvjo3up> <tr data-astro-cid-ftvjo3up> <th scope="col" data-astro-cid-ftvjo3up>Paquete</th> <th scope="col" data-astro-cid-ftvjo3up>Personas</th> <th scope="col" data-astro-cid-ftvjo3up>Bancas incluidas</th> <th scope="col" data-astro-cid-ftvjo3up>Traslado</th> <th scope="col" data-astro-cid-ftvjo3up>Montaje</th> <th scope="col" data-astro-cid-ftvjo3up>Recolección</th> <th scope="col" data-astro-cid-ftvjo3up>Detalles</th> </tr> </thead> <tbody data-astro-cid-ftvjo3up> <tr data-astro-cid-ftvjo3up> <td class="pkg-name" data-astro-cid-ftvjo3up><strong data-astro-cid-ftvjo3up>Básico</strong></td> <td data-astro-cid-ftvjo3up><span class="pkg-badge" data-astro-cid-ftvjo3up>Hasta 24</span></td> <td data-astro-cid-ftvjo3up>4 bancas estándar</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td data-astro-cid-ftvjo3up><a href="/paquetes/basico/" class="tbl-link" data-astro-cid-ftvjo3up>Ver →</a></td> </tr> <tr data-astro-cid-ftvjo3up> <td class="pkg-name" data-astro-cid-ftvjo3up><strong data-astro-cid-ftvjo3up>Estándar</strong></td> <td data-astro-cid-ftvjo3up><span class="pkg-badge pkg-badge--mid" data-astro-cid-ftvjo3up>Hasta 36</span></td> <td data-astro-cid-ftvjo3up>6 bancas estándar</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td data-astro-cid-ftvjo3up><a href="/paquetes/estandar/" class="tbl-link" data-astro-cid-ftvjo3up>Ver →</a></td> </tr> <tr data-astro-cid-ftvjo3up> <td class="pkg-name" data-astro-cid-ftvjo3up><strong data-astro-cid-ftvjo3up>Premium</strong></td> <td data-astro-cid-ftvjo3up><span class="pkg-badge pkg-badge--top" data-astro-cid-ftvjo3up>Hasta 60</span></td> <td data-astro-cid-ftvjo3up>10 bancas (combinación)</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td data-astro-cid-ftvjo3up><a href="/paquetes/premium/" class="tbl-link" data-astro-cid-ftvjo3up>Ver →</a></td> </tr> <tr class="pkg-row-vol" data-astro-cid-ftvjo3up> <td class="pkg-name" data-astro-cid-ftvjo3up><strong data-astro-cid-ftvjo3up>Volumen</strong></td> <td data-astro-cid-ftvjo3up><span class="pkg-badge pkg-badge--vol" data-astro-cid-ftvjo3up>60+ personas</span></td> <td data-astro-cid-ftvjo3up>Según invitados</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td class="pkg-check" data-astro-cid-ftvjo3up>✓</td> <td data-astro-cid-ftvjo3up><a href="/cotizar/" class="tbl-link" data-astro-cid-ftvjo3up>Cotizar →</a></td> </tr> </tbody> </table> </div> </div> </section>  <section class="section" id="incluye" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Qu\xE9 incluye el precio", "title": "Todo lo que Incluye Cualquier Paquete", "paragraph1": "Sin importar qu\xE9 paquete elijas, el servicio es completo de inicio a fin. El precio cubre todo lo que se necesita para que el mobiliario est\xE9 listo en tu evento sin que t\xFA muevas una sola pieza.", "paragraph2": "No hay cargos adicionales por traslado, maniobras, tiempo extra ni distancia dentro de la zona de cobertura CDMX y Edomex. Lo que cotizamos es el precio final.", "stats": [
    { value: "4 pasos", label: "entrega \u2192 montaje \u2192 uso \u2192 recolecci\xF3n" },
    { value: "7 d\xEDas", label: "de la semana, 8:00\u201320:00" },
    { value: "sin l\xEDmite", label: "de tiempo en tu evento" }
  ], "data-astro-cid-ftvjo3up": true })} <div class="container" data-astro-cid-ftvjo3up> <div class="grid-4" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 0, "title": "Traslado a Tu Locaci\xF3n", "description": "Llevamos las bancas directamente a donde sea tu evento: jard\xEDn, terraza, hacienda, parque o sal\xF3n exterior. Cubrimos todas las alcald\xEDas de CDMX y los principales municipios del Estado de M\xE9xico.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 1, "title": "Montaje Profesional", "description": "Nuestro equipo arma y distribuye las bancas seg\xFAn el espacio y el n\xFAmero de invitados. Llegamos con anticipaci\xF3n suficiente para que todo est\xE9 listo antes de que empiece el evento.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 2, "title": "Uso Sin L\xEDmite de Horas", "description": "Las bancas se quedan en tu evento hasta que termine \u2014 no cobramos por hora ni por tiempo extra. Si la celebraci\xF3n se extiende hasta la madrugada, recogemos cuando t\xFA nos avises.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 3, "title": "Recolecci\xF3n Incluida", "description": "Al finalizar el evento, nuestro equipo recoge todas las piezas. T\xFA no tienes que desmontar, acomodar ni preocuparte por nada. El precio del paquete ya incluye este servicio desde el inicio.", "data-astro-cid-ftvjo3up": true })} </div> </div> </section>  <section class="section section-alt" id="calculadora" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "\xBFCu\xE1ntas bancas necesito?", "title": "Referencia R\xE1pida por N\xFAmero de Invitados", "paragraph1": "Usa esta referencia para elegir el paquete correcto o para calcular si necesitas cotizar por volumen. La banca est\xE1ndar acomoda 6 personas; la grande acomoda 10 a 12.", "paragraph2": "Si tu n\xFAmero de invitados cae entre dos rangos, siempre es mejor el paquete superior: m\xE1s espacio significa m\xE1s comodidad y mejor experiencia para tus invitados.", "stats": [
    { value: "6", label: "personas por banca est\xE1ndar" },
    { value: "10\u201312", label: "personas por banca grande" },
    { value: "1 sem", label: "anticipaci\xF3n recomendada" }
  ], "data-astro-cid-ftvjo3up": true })} <div class="container" data-astro-cid-ftvjo3up> <div class="grid-4" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 0, "title": "Hasta 24 personas \u2192 B\xE1sico", "description": "4 bancas est\xE1ndar. Cumplea\xF1os \xEDntimos, reuniones familiares dominicales, baby showers peque\xF1os, brunch con amigos. Ocupa aproximadamente 40 m\xB2 de espacio \xFAtil.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 1, "title": "Hasta 36 personas \u2192 Est\xE1ndar", "description": "6 bancas est\xE1ndar. Cumplea\xF1os medianos, posadas, graduaciones, convivencias corporativas de equipo. Ocupa aproximadamente 60 m\xB2 de espacio \xFAtil.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 2, "title": "Hasta 60 personas \u2192 Premium", "description": "10 bancas (combinaci\xF3n de modelos). Bodas \xEDntimas, corporativos de \xE1rea completa, XV a\xF1os, kermesses escolares. Requiere al menos 90 m\xB2 de espacio \xFAtil.", "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 3, "title": "M\xE1s de 60 personas \u2192 Volumen", "description": "Cotizaci\xF3n personalizada. Enviamos el n\xFAmero exacto de bancas seg\xFAn invitados, distribuci\xF3n del espacio y combinaci\xF3n de modelos. Tenemos capacidad para 100+ personas en un solo evento.", "data-astro-cid-ftvjo3up": true })} </div> </div> </section>  <section class="section" id="galeria" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Galer\xEDa de paquetes", "title": "Los 3 Paquetes en Eventos Reales", "paragraph1": "Bodas, corporativos, cumplea\xF1os, festivales y reuniones familiares \u2014 as\xED se ve el mobiliario de MESPIC distribuido en eventos de diferentes escalas.", "stats": [
    { value: "3 escalas", label: "b\xE1sico, est\xE1ndar y premium" },
    { value: "pino natural", label: "lijado y barnizado a mano" },
    { value: "CDMX + Edomex", label: "zona de cobertura" }
  ], "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "GallerySection", $$GallerySection, { "images": galeriaPaquetes, "id": "galeria-paquetes", "data-astro-cid-ftvjo3up": true })} </section>  <section class="section section-alt" id="faq" data-astro-cid-ftvjo3up> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Preguntas frecuentes", "title": "Preguntas sobre los Paquetes", "paragraph1": "Las dudas m\xE1s comunes antes de reservar un paquete. Respuestas directas para que puedas decidir con informaci\xF3n completa.", "paragraph2": "\xBFTienes una pregunta que no est\xE1 aqu\xED? Escr\xEDbenos por WhatsApp y te respondemos en minutos.", "stats": [
    { value: "6", label: "respuestas inmediatas" },
    { value: "< 5 min", label: "respuesta por WhatsApp" },
    { value: "lun\u2013dom", label: "8:00 a 20:00 hrs" }
  ], "data-astro-cid-ftvjo3up": true })} ${renderComponent($$result2, "FaqSection", $$FaqSection, { "phone": "55 6432 8954", "whatsapp": "5564328954", "schedule": "Lun\u2013Dom 8:00\u201320:00", "waMessage": "Hola, quiero cotizar un paquete de mesas picnic para mi evento.", "items": [
    {
      question: "\xBFPuedo personalizar la composici\xF3n de un paquete?",
      answer: "S\xED. Si prefieres combinar bancas est\xE1ndar con bancas grandes, o agregar una mesa infantil para la zona de ni\xF1os, lo cotizamos como un paquete personalizado. La composici\xF3n base de cada paquete es una referencia orientativa \u2014 la ajustamos seg\xFAn el formato de tu evento."
    },
    {
      question: "\xBFEl precio incluye todo o hay cargos adicionales?",
      answer: "El precio es final. Incluye traslado, montaje, uso sin l\xEDmite de tiempo y recolecci\xF3n. No hay cargos adicionales por distancia dentro de CDMX y Edomex, por maniobras de carga y descarga, ni por extensi\xF3n del tiempo del evento."
    },
    {
      question: "\xBFCon cu\xE1nto tiempo de anticipaci\xF3n debo reservar?",
      answer: "Recomendamos reservar con al menos 1 semana de anticipaci\xF3n para garantizar disponibilidad. En temporada alta (noviembre a febrero), los fines de semana se agotan r\xE1pido \u2014 en ese per\xEDodo recomendamos reservar con 2 semanas o m\xE1s."
    },
    {
      question: "\xBFMis invitados son m\xE1s de 60? \xBFPueden atenderme igual?",
      answer: "S\xED. Para eventos de m\xE1s de 60 personas cotizamos por volumen. Tenemos m\xE1s de 120 piezas en bodega y capacidad operativa para eventos de 100 o m\xE1s personas. Solo ind\xEDcanos el n\xFAmero de invitados, el tipo de evento y la fecha para preparar la cotizaci\xF3n."
    },
    {
      question: "\xBFQu\xE9 formas de pago aceptan?",
      answer: "Aceptamos efectivo, transferencia bancaria y tarjeta de cr\xE9dito o d\xE9bito. El pago se coordina al momento de confirmar la reserva. No cobramos dep\xF3sito adicional ni cargos por el m\xE9todo de pago."
    },
    {
      question: "\xBFPuedo cambiar de paquete despu\xE9s de reservar?",
      answer: "S\xED, siempre que haya disponibilidad de las piezas adicionales en tu fecha. Si decides agregar m\xE1s bancas al paquete original, solo notif\xEDcanos con al menos 48 horas de anticipaci\xF3n para confirmar que tenemos el inventario disponible."
    }
  ], "data-astro-cid-ftvjo3up": true })} </section>  ${renderComponent($$result2, "CtaBarFinal", $$CtaBarFinal, { "headline": "\xBFListo para reservar tu paquete?", "subtext": "Cotiza sin compromiso. Te confirmamos disponibilidad y precio el mismo d\xEDa.", "phone": "55 6432 8954", "whatsapp": "5564328954", "waMessage": "Hola, quiero cotizar un paquete de mesas picnic para mi evento.", "cotizarHref": "/cotizar/", "data-astro-cid-ftvjo3up": true })}  ${renderComponent($$result2, "WaBubble", $$WaBubble, { "whatsapp": "5564328954", "message": "Hola, quiero cotizar un paquete de mesas picnic.", "data-astro-cid-ftvjo3up": true })}   `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Paquetes de Renta de Mesas Picnic \u2014 MESPIC",
    "description": "3 paquetes de renta de mobiliario de madera para eventos en CDMX y Edomex: B\xE1sico (24 personas), Est\xE1ndar (36 personas) y Premium (60 personas). Precio final con traslado, montaje y recolecci\xF3n.",
    "url": "https://mesaspicnic.com/paquetes/",
    "numberOfItems": 3,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Paquete B\xE1sico \u2014 24 personas", "url": "https://mesaspicnic.com/paquetes/basico/" },
      { "@type": "ListItem", "position": 2, "name": "Paquete Est\xE1ndar \u2014 36 personas", "url": "https://mesaspicnic.com/paquetes/estandar/" },
      { "@type": "ListItem", "position": 3, "name": "Paquete Premium \u2014 60 personas", "url": "https://mesaspicnic.com/paquetes/premium/" }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFEl precio del paquete incluye todo?",
        "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El precio es final e incluye traslado, montaje, uso sin l\xEDmite de tiempo y recolecci\xF3n. Sin cargos adicionales." }
      },
      {
        "@type": "Question",
        "name": "\xBFPueden atender eventos de m\xE1s de 60 personas?",
        "acceptedAnswer": { "@type": "Answer", "text": "S\xED. Para eventos de m\xE1s de 60 personas cotizamos por volumen. Tenemos m\xE1s de 120 piezas en bodega para eventos de 100 o m\xE1s personas." }
      },
      {
        "@type": "Question",
        "name": "\xBFCon cu\xE1nto tiempo debo reservar?",
        "acceptedAnswer": { "@type": "Answer", "text": "Con al menos 1 semana de anticipaci\xF3n. En temporada alta (noviembre a febrero) se recomienda reservar con 2 semanas o m\xE1s." }
      }
    ]
  }))) })}` })} `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/paquetes/index.astro", void 0);

const $$file = "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/paquetes/index.astro";
const $$url = "/paquetes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
