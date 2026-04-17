import { j as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderTemplate, l as addAttribute } from './astro/server_BUBszSA2.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$3 = createAstro("https://mesaspicnic.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    tag = "h2",
    title,
    paragraph1,
    paragraph2
  } = Astro2.props;
  const Tag = tag;
  return renderTemplate`${maybeRenderHead()}<div class="sh" data-astro-cid-wk2votdk> <div class="container sh__grid" data-astro-cid-wk2votdk> <div class="sh__col1" data-astro-cid-wk2votdk> ${renderComponent($$result, "Tag", Tag, { "class": "sh__title", "data-astro-cid-wk2votdk": true }, { "default": ($$result2) => renderTemplate`${title}` })} </div> <div class="sh__col2" data-astro-cid-wk2votdk> <p class="sh__text" data-astro-cid-wk2votdk>${paragraph1}</p> <p class="sh__text" data-astro-cid-wk2votdk>${paragraph2}</p> </div> </div> </div> `;
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/SectionHeader.astro", void 0);

const $$Astro$2 = createAstro("https://mesaspicnic.com");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const {
    title,
    description,
    index
  } = Astro2.props;
  const num = index !== void 0 ? String(index + 1).padStart(2, "0") : null;
  return renderTemplate`${maybeRenderHead()}<div class="fc" data-astro-cid-lxmfzltz> ${num && renderTemplate`<span class="fc__num" aria-hidden="true" data-astro-cid-lxmfzltz>${num}</span>`} <div class="fc__body" data-astro-cid-lxmfzltz> <h3 class="fc__title" data-astro-cid-lxmfzltz>${title}</h3> <p class="fc__desc" data-astro-cid-lxmfzltz>${description}</p> </div> </div> `;
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/FeatureCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://mesaspicnic.com");
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const {
    items,
    phone = "55 6432 8954",
    whatsapp = "5564328954",
    waMessage = "Hola, tengo una duda sobre el servicio de mesas picnic.",
    email = "",
    schedule = "Lun\u2013Dom 8:00\u201320:00"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="faq-layout container" data-astro-cid-4j5dlmku> <!-- \u2550\u2550\u2550 COLUMNA 1: FAQ \u2550\u2550\u2550 --> <div class="faq-layout__faqs" data-astro-cid-4j5dlmku> ', ' </div> <!-- \u2550\u2550\u2550 COLUMNA 2: Contacto + Formulario WA \u2550\u2550\u2550 --> <div class="faq-layout__contact" data-astro-cid-4j5dlmku> <div class="faq-contact" data-astro-cid-4j5dlmku> <h3 class="faq-contact__title" data-astro-cid-4j5dlmku>\xBFNo encuentras tu respuesta?</h3> <p class="faq-contact__desc" data-astro-cid-4j5dlmku>Escr\xEDbenos y te respondemos en minutos. Tambi\xE9n puedes llamarnos directamente.</p> <div class="faq-contact__info" data-astro-cid-4j5dlmku> <a', ' class="faq-contact__item" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-4j5dlmku></path></svg> <span data-astro-cid-4j5dlmku>', '</span> </a> <div class="faq-contact__item" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4j5dlmku><circle cx="12" cy="12" r="10" data-astro-cid-4j5dlmku></circle><polyline points="12 6 12 12 16 14" data-astro-cid-4j5dlmku></polyline></svg> <span data-astro-cid-4j5dlmku>', `</span> </div> </div> <!-- Mini formulario WA --> <form class="faq-form" id="faqWaForm" data-astro-cid-4j5dlmku> <label for="faqName" class="faq-form__label" data-astro-cid-4j5dlmku>Tu nombre</label> <input type="text" id="faqName" class="faq-form__input" placeholder="Ej: Mar\xEDa Garc\xEDa" required data-astro-cid-4j5dlmku> <label for="faqEvent" class="faq-form__label" data-astro-cid-4j5dlmku>Tipo de evento</label> <select id="faqEvent" class="faq-form__input" data-astro-cid-4j5dlmku> <option value="Boda" data-astro-cid-4j5dlmku>Boda</option> <option value="Evento corporativo" data-astro-cid-4j5dlmku>Evento corporativo</option> <option value="Fiesta infantil" data-astro-cid-4j5dlmku>Fiesta infantil</option> <option value="Picnic rom\xE1ntico" data-astro-cid-4j5dlmku>Picnic rom\xE1ntico</option> <option value="Fiesta tem\xE1tica" data-astro-cid-4j5dlmku>Fiesta tem\xE1tica</option> <option value="Reuni\xF3n familiar" data-astro-cid-4j5dlmku>Reuni\xF3n familiar</option> <option value="Festival o feria" data-astro-cid-4j5dlmku>Festival o feria</option> <option value="Sesi\xF3n fotogr\xE1fica" data-astro-cid-4j5dlmku>Sesi\xF3n fotogr\xE1fica</option> <option value="Otro" data-astro-cid-4j5dlmku>Otro</option> </select> <label for="faqMsg" class="faq-form__label" data-astro-cid-4j5dlmku>Tu pregunta</label> <textarea id="faqMsg" class="faq-form__input faq-form__textarea" placeholder="Escribe tu duda aqu\xED..." rows="3" data-astro-cid-4j5dlmku></textarea> <button type="submit" class="faq-form__btn" data-astro-cid-4j5dlmku> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-4j5dlmku><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-4j5dlmku></path></svg>
Enviar por WhatsApp
</button> </form> </div> </div> </div> <script>
  document.getElementById('faqWaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('faqName').value.trim();
    var event = document.getElementById('faqEvent').value;
    var msg = document.getElementById('faqMsg').value.trim();
    var text = 'Hola, soy ' + name + '. Estoy interesado en mesas picnic para ' + event.toLowerCase() + '.';
    if (msg) text += ' Mi pregunta: ' + msg;
    var wa = 'https://wa.me/5564328954?text=' + encodeURIComponent(text);
    window.open(wa, '_blank');
  });
<\/script> `])), maybeRenderHead(), items.map((item) => renderTemplate`<details class="faq-item" data-astro-cid-4j5dlmku> <summary class="faq-item__q" data-astro-cid-4j5dlmku>${item.question}</summary> <div class="faq-item__a" data-astro-cid-4j5dlmku> <p data-astro-cid-4j5dlmku>${item.answer}</p> </div> </details>`), addAttribute(`tel:+52${whatsapp}`, "href"), phone, schedule);
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/FaqSection.astro", void 0);

const $$Astro = createAstro("https://mesaspicnic.com");
const $$CtaBarFinal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaBarFinal;
  const {
    headline = "\xBFListo para tu evento?",
    subtext = "Cotiza sin compromiso. Te respondemos en minutos.",
    phone = "55 6432 8954",
    whatsapp = "5564328954",
    waMessage = "Hola, quiero cotizar mesas picnic para mi evento.",
    cotizarHref = "/cotizar/"
  } = Astro2.props;
  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(waMessage)}`;
  return renderTemplate`${maybeRenderHead()}<section class="ctaf" aria-label="Contacto" data-astro-cid-4xebqgti> <div class="container ctaf__inner" data-astro-cid-4xebqgti> <div class="ctaf__text" data-astro-cid-4xebqgti> <h2 class="ctaf__headline" data-astro-cid-4xebqgti>${headline}</h2> <p class="ctaf__sub" data-astro-cid-4xebqgti>${subtext}</p> </div> <div class="ctaf__actions" data-astro-cid-4xebqgti> <a${addAttribute(waHref, "href")} target="_blank" rel="noopener" class="ctaf__btn ctaf__btn--wa" data-astro-cid-4xebqgti> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-4xebqgti><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-4xebqgti></path></svg>
WhatsApp
</a> <a${addAttribute(`tel:+52${whatsapp}`, "href")} class="ctaf__btn ctaf__btn--phone" data-astro-cid-4xebqgti> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4xebqgti><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-astro-cid-4xebqgti></path></svg> ${phone} </a> <a${addAttribute(cotizarHref, "href")} class="ctaf__btn ctaf__btn--cotizar" data-astro-cid-4xebqgti>
Cotizar en línea →
</a> </div> </div> </section> `;
}, "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/components/CtaBarFinal.astro", void 0);

export { $$SectionHeader as $, $$FeatureCard as a, $$FaqSection as b, $$CtaBarFinal as c };
