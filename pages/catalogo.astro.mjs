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
  const galeriaCatalogo = [
    { src: "/img/mesa-picnic-boda-elegante-decoracion.avif", alt: "Mesa picnic est\xE1ndar de pino natural decorada para boda al aire libre" },
    { src: "/img/mesa-picnic-evento-corporativo-networking.avif", alt: "Mesa picnic grande para evento corporativo con networking al exterior" },
    { src: "/img/infantil-cumple-1.avif", alt: "Mesa picnic infantil decorada para cumplea\xF1os de ni\xF1os en jard\xEDn" },
    { src: "/img/mesa-picnic-boda-elegante-luces.avif", alt: "Mesa picnic premium con iluminaci\xF3n de luces para boda nocturna elegante" },
    { src: "/img/corp-teambuilding-1.avif", alt: "Set de mesas picnic en parque para team building corporativo" },
    { src: "/img/tema-mexicana-1.avif", alt: "Mesa picnic r\xFAstica con acabado campestre para fiesta tem\xE1tica mexicana" },
    { src: "/img/mesa-picnic-pedida-mano-romantica.webp", alt: "Set picnic completo montado para pedida de mano con decoraci\xF3n rom\xE1ntica" },
    { src: "/img/mesa-picnic-feria-gastronomica-multitud.avif", alt: "M\xFAltiples mesas picnic grandes para feria gastron\xF3mica con asistentes" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cat\xE1logo de Mesas Picnic para Renta \u2014 6 Modelos | MESPIC CDMX", "description": "Cat\xE1logo completo de mesas picnic de pino natural para renta en CDMX y Edomex. 6 modelos: est\xE1ndar, grande, infantil, premium, r\xFAstica y set completo. Capacidad para 6 a 12 personas. Entrega y montaje incluidos.", "ogImage": "/img/mesa-picnic-boda-elegante-decoracion.avif", "data-astro-cid-r7cejkkl": true }, { "breadcrumbs": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "breadcrumbs" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Inicio", href: "/" },
    { label: "Cat\xE1logo" }
  ], "data-astro-cid-r7cejkkl": true })} ` })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "badge": "6 modelos disponibles", "title": "Cat\xE1logo de Mesas Picnic de Pino Natural", "description": "Seis modelos de mobiliario para renta: desde la banca est\xE1ndar de 6 personas hasta el set picnic completo con decoraci\xF3n. Todos elaborados en pino nacional, lijados y barnizados a mano.", "ctaPrimary": { label: "Cotizar ahora \u2192", href: "/cotizar/" }, "ctaSecondary": { label: "Ver paquetes", href: "/paquetes/" }, "seoParagraph1": "MESPIC cuenta con m\xE1s de 120 piezas en bodega, disponibles los 7 d\xEDas de la semana para la Ciudad de M\xE9xico y el Estado de M\xE9xico. Todos los modelos est\xE1n fabricados en pino nacional seleccionado: lijado a grano fino, sellado y barnizado a tres manos para resistencia al exterior. La misma pieza que va a una boda en Coyoac\xE1n va al d\xEDa siguiente a un festival en Roma Norte.", "seoParagraph2": "El precio de renta incluye traslado, montaje profesional en tu locaci\xF3n y recolecci\xF3n al finalizar el evento. No hay cargos por maniobras, tiempo extra ni distancia dentro de nuestra zona de cobertura. Puedes combinar modelos en una misma cotizaci\xF3n \u2014por ejemplo, mesas est\xE1ndar para adultos y mesas infantiles para zona de ni\xF1os\u2014 y todo llega en la misma entrega.", "dark": true, "data-astro-cid-r7cejkkl": true })}  ${renderComponent($$result2, "CtaBar", $$CtaBar, { "data-astro-cid-r7cejkkl": true })}  ${maybeRenderHead()}<section class="section" id="modelos" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Todos los modelos", "title": "6 Modelos de Mesa Picnic", "paragraph1": "Cada modelo tiene un uso recomendado, capacidad espec\xEDfica y acabado adaptado al tipo de evento. Selecciona el que se ajuste a tu ocasi\xF3n o cotiza varios para el mismo evento.", "paragraph2": "\xBFNo sabes cu\xE1l elegir? M\xE1ndanos el n\xFAmero de invitados y el tipo de evento por WhatsApp y te recomendamos el modelo y la cantidad exacta. Respondemos en menos de 5 minutos.", "stats": [
    { value: "6", label: "modelos en cat\xE1logo" },
    { value: "6\u201312", label: "personas por pieza" },
    { value: "pino nacional", label: "madera 100% natural" }
  ], "data-astro-cid-r7cejkkl": true })} <div class="container" data-astro-cid-r7cejkkl> <div class="grid-3" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Est\xE1ndar", "description": "El modelo m\xE1s solicitado. 1.80 \xD7 1.50 m, acomoda 6 personas. Pino lijado y barnizado a mano, acabado liso y uniforme. Ideal para bodas, reuniones familiares, corporativos y fiestas en jard\xEDn.", "image": "/img/mesa-picnic-boda-elegante-decoracion.avif", "href": "/catalogo/mesa-picnic-estandar/", "btnLabel": "Ver Mesa Est\xE1ndar \u2192", "badge": "Est\xE1ndar \xB7 6 personas", "icon": "\u{1FAB5}", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Grande", "description": "2.40 \xD7 1.50 m, acomoda 10 a 12 personas. El modelo preferido para eventos corporativos, festivales y bodas con mesa principal de pareja. Resistencia estructural para uso intensivo.", "image": "/img/mesa-picnic-evento-corporativo-networking.avif", "href": "/catalogo/mesa-picnic-grande/", "btnLabel": "Ver Mesa Grande \u2192", "badge": "Grande \xB7 10-12 personas", "icon": "\u{1F333}", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Infantil", "description": "1.20 \xD7 1.00 m, dise\xF1ada para ni\xF1os de 3 a 10 a\xF1os. Altura reducida, bordes redondeados y pino lijado a grano ultrafino. Sin astillas ni aristas. Acomoda hasta 10 ni\xF1os c\xF3modamente.", "image": "/img/infantil-cumple-1.avif", "href": "/catalogo/mesa-picnic-infantil/", "btnLabel": "Ver Mesa Infantil \u2192", "badge": "Infantil \xB7 3-10 a\xF1os", "icon": "\u{1F9F8}", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic Premium", "description": "Mesa de acabado superior para bodas de alto perfil y eventos de lujo. Barniz de primera calidad, pino seleccionado sin nudos visibles. Para cuando la est\xE9tica del mobiliario es parte central del evento.", "image": "/img/mesa-picnic-boda-elegante-luces.avif", "href": "/catalogo/mesa-picnic-premium/", "btnLabel": "Ver Mesa Premium \u2192", "badge": "Premium \xB7 Lujo", "icon": "\u2728", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Set Picnic Completo", "description": "Mesa est\xE1ndar con manteler\xEDa, cojines, centro decorativo y ambientaci\xF3n b\xE1sica incluidos. Un paquete llave en mano para picnics rom\xE1nticos, aniversarios y pedidas de mano. Sin necesidad de decoradora.", "image": "/img/mesa-picnic-pedida-mano-romantica.webp", "href": "/catalogo/set-picnic-completo/", "btnLabel": "Ver Set Completo \u2192", "badge": "Set Completo \xB7 Todo incluido", "icon": "\u{1F381}", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mesa Picnic R\xFAstica", "description": "Acabado campestre: pino con barniz r\xFAstico que resalta la veta y los nudos naturales de la madera. Estilo boho, vintage y r\xFAstico-chic. Perfecta para bodas en bosques, vi\xF1edos y haciendas.", "image": "/img/tema-mexicana-1.avif", "href": "/catalogo/mesa-picnic-rustica/", "btnLabel": "Ver Mesa R\xFAstica \u2192", "badge": "R\xFAstica \xB7 Boho & Vintage", "icon": "\u{1F33F}", "data-astro-cid-r7cejkkl": true })} </div> </div> </section>  <section class="section section-alt" id="comparativa" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Comparativa t\xE9cnica", "title": "Especificaciones por Modelo", "paragraph1": "Consulta las medidas, capacidad y caracter\xEDsticas de cada modelo en una tabla de referencia r\xE1pida. Todos los modelos son de pino nacional con tratamiento para exteriores.", "paragraph2": "Las medidas son est\xE1ndar. Si necesitas algo espec\xEDfico o una combinaci\xF3n de modelos para el mismo evento, cotiza por WhatsApp y te preparamos un presupuesto a la medida.", "stats": [
    { value: "1.20\u20132.40 m", label: "rango de longitud" },
    { value: "100%", label: "madera de pino natural" },
    { value: "+120 pzas", label: "inventario disponible" }
  ], "data-astro-cid-r7cejkkl": true })} <div class="container" data-astro-cid-r7cejkkl> <div class="spec-table-wrap" data-astro-cid-r7cejkkl> <table class="spec-table" role="table" aria-label="Comparativa de modelos de mesa picnic" data-astro-cid-r7cejkkl> <thead data-astro-cid-r7cejkkl> <tr data-astro-cid-r7cejkkl> <th scope="col" data-astro-cid-r7cejkkl>Modelo</th> <th scope="col" data-astro-cid-r7cejkkl>Medidas</th> <th scope="col" data-astro-cid-r7cejkkl>Capacidad</th> <th scope="col" data-astro-cid-r7cejkkl>Acabado</th> <th scope="col" data-astro-cid-r7cejkkl>Uso principal</th> <th scope="col" data-astro-cid-r7cejkkl>Detalles</th> </tr> </thead> <tbody data-astro-cid-r7cejkkl> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Estándar</strong></td> <td data-astro-cid-r7cejkkl>1.80 × 1.50 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge" data-astro-cid-r7cejkkl>6 personas</span></td> <td data-astro-cid-r7cejkkl>Liso barnizado</td> <td data-astro-cid-r7cejkkl>Bodas · Reuniones · Corporativos</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/mesa-picnic-estandar/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Grande</strong></td> <td data-astro-cid-r7cejkkl>2.40 × 1.50 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge" data-astro-cid-r7cejkkl>10–12 personas</span></td> <td data-astro-cid-r7cejkkl>Liso barnizado</td> <td data-astro-cid-r7cejkkl>Corporativos · Festivales · Bodas</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/mesa-picnic-grande/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Infantil</strong></td> <td data-astro-cid-r7cejkkl>1.20 × 1.00 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge cap-badge--kids" data-astro-cid-r7cejkkl>8–10 niños</span></td> <td data-astro-cid-r7cejkkl>Ultra fino sin astillas</td> <td data-astro-cid-r7cejkkl>Fiestas infantiles · Baby showers</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/mesa-picnic-infantil/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Premium</strong></td> <td data-astro-cid-r7cejkkl>1.80 × 1.50 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge cap-badge--premium" data-astro-cid-r7cejkkl>6 personas</span></td> <td data-astro-cid-r7cejkkl>Premium sin nudos</td> <td data-astro-cid-r7cejkkl>Bodas de lujo · Eventos VIP</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/mesa-picnic-premium/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Set Completo</strong></td> <td data-astro-cid-r7cejkkl>1.80 × 1.50 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge" data-astro-cid-r7cejkkl>2–6 personas</span></td> <td data-astro-cid-r7cejkkl>Liso + decoración</td> <td data-astro-cid-r7cejkkl>Picnics románticos · Aniversarios</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/set-picnic-completo/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> <tr data-astro-cid-r7cejkkl> <td class="model-name" data-astro-cid-r7cejkkl><strong data-astro-cid-r7cejkkl>Rústica</strong></td> <td data-astro-cid-r7cejkkl>1.80 × 1.50 m</td> <td data-astro-cid-r7cejkkl><span class="cap-badge" data-astro-cid-r7cejkkl>6 personas</span></td> <td data-astro-cid-r7cejkkl>Veta rústica barnizada</td> <td data-astro-cid-r7cejkkl>Bodas boho · Fiestas vintage</td> <td data-astro-cid-r7cejkkl><a href="/catalogo/mesa-picnic-rustica/" class="tbl-link" data-astro-cid-r7cejkkl>Ver →</a></td> </tr> </tbody> </table> </div> </div> </section>  <section class="section" id="material" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Calidad del producto", "title": "Pino Nacional Seleccionado, Elaborado a Mano", "paragraph1": "Todo el mobiliario de MESPIC est\xE1 fabricado en pino nacional de primera calidad. El proceso de preparaci\xF3n de cada pieza tarda m\xE1s de lo que parece: selecci\xF3n de tabla, secado, lijado, aplicaci\xF3n de sellador y tres manos de barniz para exteriores.", "paragraph2": "Antes de cada entrega, cada pieza pasa por una inspecci\xF3n visual y estructural. Si una banca tiene una astilla, una grieta o un barniz deteriorado, no sale del almac\xE9n. Por eso nuestros clientes reciben mobiliario en condiciones impecables, evento tras evento.", "stats": [
    { value: "3 manos", label: "de barniz para exteriores" },
    { value: "grano fino", label: "lijado sin astillas" },
    { value: "100%", label: "inspecci\xF3n antes de entrega" }
  ], "data-astro-cid-r7cejkkl": true })} <div class="container" data-astro-cid-r7cejkkl> <div class="grid-4" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 0, "title": "Pino Nacional de Primera", "description": "Seleccionamos tablas de pino con veta uniforme, sin defectos estructurales. La madera pasa por un proceso de secado natural antes de ser trabajada, lo que reduce deformaciones por humedad y temperatura.", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 1, "title": "Lijado a Grano Fino", "description": "Cada pieza se lija en dos etapas: desbaste grueso para eliminar irregularidades y acabado fino para lograr una superficie suave al tacto. El modelo infantil tiene una tercera pasada ultrafina para eliminar cualquier posibilidad de astilla.", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 2, "title": "Sellador + 3 Manos de Barniz", "description": "Aplicamos un sellador de poros antes del barniz para garantizar adherencia y protecci\xF3n profunda. Las tres manos de barniz de exterior protegen la madera de humedad, lluvia y variaciones de temperatura.", "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "index": 3, "title": "Inspecci\xF3n Antes de Cada Entrega", "description": "El d\xEDa de la entrega, cada pieza es revisada: verificamos estructura, barniz, uniones y estado general. Si alguna pieza no cumple, se sustituye. Este proceso garantiza que lo que llega a tu evento siempre se ve impecable.", "data-astro-cid-r7cejkkl": true })} </div> </div> </section>  <section class="section section-alt" id="galeria" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Galer\xEDa del cat\xE1logo", "title": "Los 6 Modelos en Eventos Reales", "paragraph1": "As\xED se ve el mobiliario de MESPIC en bodas, corporativos, festivales, fiestas infantiles y picnics rom\xE1nticos. La madera natural se adapta a cualquier estilo de decoraci\xF3n.", "stats": [
    { value: "6 modelos", label: "en una sola bodega" },
    { value: "cualquier estilo", label: "r\xFAstico, boho, premium\u2026" },
    { value: "CDMX + Edomex", label: "zona de cobertura" }
  ], "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "GallerySection", $$GallerySection, { "images": galeriaCatalogo, "id": "galeria-catalogo", "data-astro-cid-r7cejkkl": true })} </section>  <section class="section" id="faq-catalogo" data-astro-cid-r7cejkkl> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "tag": "h2", "badge": "Preguntas frecuentes", "title": "Preguntas sobre el Cat\xE1logo", "paragraph1": "Las dudas m\xE1s comunes sobre los modelos, las medidas y la disponibilidad. Respuestas directas y sin rodeos.", "paragraph2": "\xBFTienes una pregunta que no est\xE1 aqu\xED? Escr\xEDbenos por WhatsApp y te respondemos en minutos.", "stats": [
    { value: "6", label: "respuestas inmediatas" },
    { value: "< 5 min", label: "respuesta por WhatsApp" },
    { value: "lun\u2013dom", label: "8:00 a 20:00 hrs" }
  ], "data-astro-cid-r7cejkkl": true })} ${renderComponent($$result2, "FaqSection", $$FaqSection, { "phone": "55 6432 8954", "whatsapp": "5564328954", "schedule": "Lun\u2013Dom 8:00\u201320:00", "waMessage": "Hola, quiero cotizar mesas picnic para mi evento.", "items": [
    {
      question: "\xBFCu\xE1l es la diferencia entre la Mesa Est\xE1ndar y la Grande?",
      answer: "La Mesa Est\xE1ndar mide 1.80 \xD7 1.50 m y acomoda 6 personas. La Mesa Grande mide 2.40 \xD7 1.50 m y acomoda 10 a 12. La Grande es ideal como mesa principal de una boda o para eventos corporativos donde se necesita espacio de trabajo o servicio de comida para grupos grandes. Para la mayor\xEDa de los eventos con invitados mixtos, la combinaci\xF3n \xF3ptima es 70% est\xE1ndar y 30% grande."
    },
    {
      question: "\xBFQu\xE9 diferencia la Mesa Premium de la Est\xE1ndar?",
      answer: "La Premium usa pino seleccionado sin nudos visibles y recibe una capa de barniz adicional de acabado fino. El resultado es una superficie m\xE1s uniforme y un aspecto m\xE1s elegante. Recomendamos el modelo Premium para bodas de alto perfil donde el mobiliario es un elemento visual protagonista, y para sesiones fotogr\xE1ficas profesionales."
    },
    {
      question: "\xBFEl Set Picnic Completo incluye todos los accesorios?",
      answer: "S\xED. El Set Picnic Completo incluye mesa est\xE1ndar, manteler\xEDa de algod\xF3n, cojines decorativos, centro de mesa y ambientaci\xF3n b\xE1sica. Es un paquete llave en mano para parejas que no quieren contratar por separado una decoradora. Si quieres agregar flores frescas, cesta de picnic con comida o decoraci\xF3n tem\xE1tica, lo cotizamos por separado."
    },
    {
      question: "\xBFPuedo combinar diferentes modelos en un mismo evento?",
      answer: "S\xED, y de hecho es lo m\xE1s com\xFAn. Si tu evento tiene una zona de adultos y una zona de ni\xF1os, llevamos mesas est\xE1ndar e infantiles en la misma entrega. Si quieres una mesa grande como mesa principal y est\xE1ndares para el resto de los invitados, tambi\xE9n. Todo entra en una sola cotizaci\xF3n y una sola entrega."
    },
    {
      question: "\xBFCu\xE1ntas piezas pueden entregar para un mismo evento?",
      answer: "Contamos con m\xE1s de 120 piezas en bodega, lo que nos permite atender eventos de 100 o m\xE1s personas sin problema. Para eventos masivos de 200+ asistentes, recomendamos reservar con al menos 2 semanas de anticipaci\xF3n para garantizar disponibilidad de todos los modelos que necesitas."
    },
    {
      question: "\xBFLa madera resiste el exterior y la intemperie?",
      answer: "S\xED. Todos los modelos tienen acabado con barniz de exterior que resiste humedad moderada, variaciones de temperatura y exposici\xF3n al sol. Para lluvia intensa o eventos en zonas de alta humedad, recomendamos contar con carpas o toldos como respaldo. La madera no se da\xF1a con humedad moderada, pero una lluvia sostenida puede afectar el barniz a largo plazo si la pieza no est\xE1 cubierta."
    }
  ], "data-astro-cid-r7cejkkl": true })} </section>  ${renderComponent($$result2, "CtaBarFinal", $$CtaBarFinal, { "headline": "\xBFYa sabes qu\xE9 modelo necesitas?", "subtext": "Cotiza por WhatsApp o en l\xEDnea. Te respondemos con disponibilidad y precio el mismo d\xEDa.", "phone": "55 6432 8954", "whatsapp": "5564328954", "waMessage": "Hola, quiero cotizar mesas picnic para mi evento. Vi el cat\xE1logo en la web.", "cotizarHref": "/cotizar/", "data-astro-cid-r7cejkkl": true })}  ${renderComponent($$result2, "WaBubble", $$WaBubble, { "whatsapp": "5564328954", "message": "Hola, vi el cat\xE1logo de mesas picnic y quiero cotizar.", "data-astro-cid-r7cejkkl": true })}   `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cat\xE1logo de Mesas Picnic para Renta \u2014 MESPIC",
    "description": "6 modelos de mesas picnic de pino natural para renta en CDMX y Edomex. Est\xE1ndar, grande, infantil, premium, r\xFAstica y set completo.",
    "url": "https://mesaspicnic.com/catalogo/",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Mesa Picnic Est\xE1ndar",
        "url": "https://mesaspicnic.com/catalogo/mesa-picnic-estandar/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mesa Picnic Grande",
        "url": "https://mesaspicnic.com/catalogo/mesa-picnic-grande/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mesa Picnic Infantil",
        "url": "https://mesaspicnic.com/catalogo/mesa-picnic-infantil/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Mesa Picnic Premium",
        "url": "https://mesaspicnic.com/catalogo/mesa-picnic-premium/"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Set Picnic Completo",
        "url": "https://mesaspicnic.com/catalogo/set-picnic-completo/"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Mesa Picnic R\xFAstica",
        "url": "https://mesaspicnic.com/catalogo/mesa-picnic-rustica/"
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1l es la diferencia entre la Mesa Est\xE1ndar y la Grande?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Mesa Est\xE1ndar mide 1.80 \xD7 1.50 m y acomoda 6 personas. La Mesa Grande mide 2.40 \xD7 1.50 m y acomoda 10 a 12 personas."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFPuedo combinar diferentes modelos en un mismo evento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S\xED. Puedes combinar modelos en una sola cotizaci\xF3n y una sola entrega. Por ejemplo, mesas est\xE1ndar para adultos y mesas infantiles para zona de ni\xF1os."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas piezas pueden entregar para un mismo evento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MESPIC cuenta con m\xE1s de 120 piezas en bodega para atender eventos de 100 o m\xE1s personas. Para eventos masivos, se recomienda reservar con al menos 2 semanas de anticipaci\xF3n."
        }
      }
    ]
  }))) })}` })} `;
}, "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/catalogo/index.astro", void 0);

const $$file = "/sessions/nifty-hopeful-archimedes/mnt/MESASPICNIC/src/pages/catalogo/index.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
