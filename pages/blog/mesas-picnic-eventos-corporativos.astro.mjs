import { _ as __astro_tag_component__, e as createVNode, F as Fragment } from '../../chunks/astro/server_BUBszSA2.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout__s1rEpZe.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_ssTAmN2-.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BaseLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/BaseLayout.astro",
  "title": "Mobiliario Rústico para Eventos Corporativos: Guía para Empresas | MESPIC",
  "description": "Cómo organizar team buildings, comidas empresariales y conferencias al aire libre con mobiliario de madera. Capacidades, logística, facturación y cobertura en Ciudad de México."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mobiliario-rústico-para-eventos-corporativos-guía-práctica",
    "text": "Mobiliario Rústico para Eventos Corporativos: Guía Práctica"
  }, {
    "depth": 2,
    "slug": "eventos-donde-el-mobiliario-de-madera-funciona-mejor",
    "text": "Eventos donde el mobiliario de madera funciona mejor"
  }, {
    "depth": 3,
    "slug": "team-buildings",
    "text": "Team buildings"
  }, {
    "depth": 3,
    "slug": "conferencias-y-talleres-al-aire-libre",
    "text": "Conferencias y talleres al aire libre"
  }, {
    "depth": 3,
    "slug": "comidas-empresariales",
    "text": "Comidas empresariales"
  }, {
    "depth": 3,
    "slug": "activaciones-de-marca",
    "text": "Activaciones de marca"
  }, {
    "depth": 2,
    "slug": "beneficios-concretos-frente-al-mobiliario-convencional",
    "text": "Beneficios concretos frente al mobiliario convencional"
  }, {
    "depth": 2,
    "slug": "cuántas-piezas-necesitas",
    "text": "¿Cuántas piezas necesitas?"
  }, {
    "depth": 3,
    "slug": "ejemplo-team-building-de-100-personas",
    "text": "Ejemplo: team building de 100 personas"
  }, {
    "depth": 2,
    "slug": "logística-pensada-para-empresas",
    "text": "Logística pensada para empresas"
  }, {
    "depth": 2,
    "slug": "casos-reales-que-hemos-atendido",
    "text": "Casos reales que hemos atendido"
  }, {
    "depth": 2,
    "slug": "cobertura-para-empresas",
    "text": "Cobertura para empresas"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("section", {
      class: "blog-article",
      children: createVNode("div", {
        class: "container",
        children: [createVNode(_components.h1, {
          id: "mobiliario-rústico-para-eventos-corporativos-guía-práctica",
          children: "Mobiliario Rústico para Eventos Corporativos: Guía Práctica"
        }), createVNode(_components.p, {
          children: ["Cada trimestre montamos entre 30 y 50 eventos empresariales. Las áreas de recursos humanos y los organizadores de eventos buscan lo mismo: sacar a los colaboradores del salón convencional y llevarlos a un espacio al aire libre que se sienta diferente. Las ", createVNode(_components.strong, {
            children: "mesas picnic de madera"
          }), " — de 2.4 m × 0.75 m, con bancas integradas para 6-8 personas — resuelven esa necesidad sin complicar la logística."]
        }), createVNode("img", {
          src: "/img/mesa-picnic-evento-corporativo-networking.avif",
          alt: "Colaboradores sentados en bancas de madera durante un almuerzo corporativo en un jardín",
          loading: "lazy",
          width: "800",
          height: "500",
          style: "border-radius: 12px; width: 100%; height: auto; margin: 2rem 0;"
        }), createVNode(_components.h2, {
          id: "eventos-donde-el-mobiliario-de-madera-funciona-mejor",
          children: "Eventos donde el mobiliario de madera funciona mejor"
        }), createVNode(_components.h3, {
          id: "team-buildings",
          children: "Team buildings"
        }), createVNode(_components.p, {
          children: "Las dinámicas de integración requieren que los equipos se sienten frente a frente y compartan materiales. Las bancas rústicas agrupan a 6-8 personas por estación, lo que facilita actividades como retos de cocina, talleres de construcción o trivias por equipo."
        }), createVNode(_components.h3, {
          id: "conferencias-y-talleres-al-aire-libre",
          children: "Conferencias y talleres al aire libre"
        }), createVNode(_components.p, {
          children: "Cuando el taller dura más de dos horas, los asistentes necesitan superficie para escribir y apoyar laptops. Cada pieza de madera ofrece 1.8 m² de área útil — suficiente para que 4 personas trabajen con computadora o 6 tomen notas a mano."
        }), createVNode(_components.h3, {
          id: "comidas-empresariales",
          children: "Comidas empresariales"
        }), createVNode(_components.p, {
          children: "Almuerzos de bienvenida, festejos de fin de año o celebraciones de resultados. El montaje al aire libre cambia por completo la atmósfera: los colaboradores conversan más, se relajan y la comida se disfruta diferente que en un comedor cerrado."
        }), createVNode(_components.h3, {
          id: "activaciones-de-marca",
          children: "Activaciones de marca"
        }), createVNode(_components.p, {
          children: "Para lanzamientos de producto o pop-ups, el mobiliario rústico genera un look auténtico que funciona en fotos y redes sociales. Hemos trabajado con marcas de alimentos, cervecerías artesanales y startups tecnológicas que buscaban un escenario natural para sus activaciones."
        }), createVNode(_components.h2, {
          id: "beneficios-concretos-frente-al-mobiliario-convencional",
          children: "Beneficios concretos frente al mobiliario convencional"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Menos piezas, menos costo"
            }), ": Al integrar banca y mesa, eliminas el alquiler de sillas — eso reduce entre un 15% y 20% el presupuesto de mobiliario"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Montaje rápido"
            }), ": Nuestro equipo coloca 30 piezas en menos de 90 minutos"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Ambiente distendido"
            }), ": La madera natural rompe la rigidez del entorno corporativo sin perder profesionalismo"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Resistencia"
            }), ": Pino tratado que soporta sol, lluvia ligera y el uso de 6-8 adultos por banca sin flexión"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Escalabilidad"
            }), ": Tenemos inventario para atender desde 10 hasta 500+ personas en un solo evento"]
          }), "\n"]
        }), createVNode("img", {
          src: "/img/mesa-picnic-conferencia-empresarial-plantas.avif",
          alt: "Espacio al aire libre con bancas de madera alineadas entre macetas y plantas para una conferencia",
          loading: "lazy",
          width: "800",
          height: "500",
          style: "border-radius: 12px; width: 100%; height: auto; margin: 2rem 0;"
        }), createVNode(_components.h2, {
          id: "cuántas-piezas-necesitas",
          children: "¿Cuántas piezas necesitas?"
        }), createVNode(_components.p, {
          children: "La cantidad depende del formato del evento:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Comida sentada"
            }), ": 1 pieza por cada 6-8 personas"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Networking o cocktail"
            }), ": 1 pieza por cada 10-12 asistentes (la gente rota entre puestos)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Estaciones de trabajo"
            }), ": 1 pieza por cada 4-6 personas si usan laptop"]
          }), "\n"]
        }), createVNode(_components.h3, {
          id: "ejemplo-team-building-de-100-personas",
          children: "Ejemplo: team building de 100 personas"
        }), createVNode(_components.p, {
          children: "Necesitas 14-16 mesas picnic distribuidas en grupos de 2-3 para crear islas de trabajo. Deja pasillos de 1.5 m entre grupos para que los facilitadores circulen y los equipos se muevan durante las dinámicas."
        }), createVNode(_components.h2, {
          id: "logística-pensada-para-empresas",
          children: "Logística pensada para empresas"
        }), createVNode(_components.p, {
          children: ["En ", createVNode(_components.strong, {
            children: "MESPIC"
          }), " sabemos que el mundo corporativo tiene requerimientos específicos:"]
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Facturación"
            }), ": Emitimos CFDI con los datos fiscales de tu empresa (razón social, RFC y uso de CFDI que indiques)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Coordinación"
            }), ": Trabajamos directo con tu equipo de eventos interno, la agencia contratada o el venue"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Puntualidad"
            }), ": Llegamos 3 horas antes del inicio; todo queda montado y nivelado con tiempo de sobra"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Flexibilidad"
            }), ": Si dos días antes necesitas agregar o quitar piezas, ajustamos sin penalización"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Estado impecable"
            }), ": Cada pieza se lija y se revisa antes de cada entrega; no salen del almacén con manchas ni astillas"]
          }), "\n"]
        }), createVNode(_components.h2, {
          id: "casos-reales-que-hemos-atendido",
          children: "Casos reales que hemos atendido"
        }), createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Comida de fin de año en jardín corporativo"
            }), ": 200 personas, 30 piezas de madera en zona verde con iluminación colgante"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Workshop de innovación"
            }), ": 40 personas, 8 bancas rústicas como estaciones de prototipado con materiales sobre la superficie"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Lanzamiento de producto para prensa"
            }), ": 150 asistentes, 20 piezas + tarima de presentación en un parque privado"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Día de la familia"
            }), ": 300 personas entre adultos y niños, 45 piezas con manteles temáticos y centros de mesa"]
          }), "\n"]
        }), createVNode(_components.h2, {
          id: "cobertura-para-empresas",
          children: "Cobertura para empresas"
        }), createVNode(_components.p, {
          children: "Operamos en toda la CDMX y Estado de México: Santa Fe, Polanco, Insurgentes, Lomas, parques empresariales en Naucalpan, Huixquilucan, Tlalnepantla y Atizapán. Para ubicaciones fuera de zona metropolitana, cotizamos flete adicional."
        }), createVNode(_components.hr, {}), createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "¿Organizando un evento corporativo?"
          }), " ", createVNode(_components.a, {
            href: "/cotizar/",
            children: "Solicita tu cotización empresarial →"
          })]
        })]
      })
    }), "\n", createVNode("style", {
      children: `
.blog-article {
  padding-top: calc(var(--header-height, 70px) + 3rem);
  padding-bottom: 4rem;
}
.blog-article h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); color: var(--c-primary); margin-bottom: 1.5rem; line-height: 1.2; }
.blog-article h2 { font-size: 1.5rem; color: var(--c-primary); margin-top: 2.5rem; margin-bottom: 1rem; }
.blog-article h3 { font-size: 1.125rem; color: var(--c-text); margin-top: 1.5rem; margin-bottom: 0.5rem; }
.blog-article p { color: var(--c-text-muted); line-height: 1.8; margin-bottom: 1rem; font-size: 1.0625rem; }
.blog-article ul, .blog-article ol { padding-left: 1.5rem; margin-bottom: 1rem; }
.blog-article li { color: var(--c-text-muted); line-height: 1.8; list-style: disc; margin-bottom: 0.25rem; }
.blog-article ol li { list-style: decimal; }
.blog-article strong { color: var(--c-text); }
.blog-article a { color: var(--c-primary); text-decoration: underline; }
.blog-article hr { border: none; border-top: 1px solid var(--c-border); margin: 2rem 0; }
`
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/blog/mesas-picnic-eventos-corporativos";
const file = "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/mesas-picnic-eventos-corporativos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/mesas-picnic-eventos-corporativos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
