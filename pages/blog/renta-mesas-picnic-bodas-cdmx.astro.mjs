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
  "title": "Renta de Mesas Picnic para Bodas en CDMX: Guía Completa | MESPIC",
  "description": "Guía práctica para rentar mobiliario rústico de madera en bodas al aire libre. Capacidades, estilos de decoración, logística de entrega y cobertura en Ciudad de México."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "renta-de-mobiliario-rústico-para-bodas-al-aire-libre-en-cdmx",
    "text": "Renta de Mobiliario Rústico para Bodas al Aire Libre en CDMX"
  }, {
    "depth": 2,
    "slug": "qué-hace-diferente-al-mobiliario-de-madera-en-una-boda",
    "text": "¿Qué hace diferente al mobiliario de madera en una boda?"
  }, {
    "depth": 3,
    "slug": "ventajas-concretas",
    "text": "Ventajas concretas"
  }, {
    "depth": 2,
    "slug": "cuántas-piezas-necesitas-según-tu-número-de-invitados",
    "text": "¿Cuántas piezas necesitas según tu número de invitados?"
  }, {
    "depth": 2,
    "slug": "cuatro-estilos-de-boda-donde-el-mobiliario-rústico-destaca",
    "text": "Cuatro estilos de boda donde el mobiliario rústico destaca"
  }, {
    "depth": 3,
    "slug": "boda-campestre",
    "text": "Boda campestre"
  }, {
    "depth": 3,
    "slug": "boda-boho-chic",
    "text": "Boda boho-chic"
  }, {
    "depth": 3,
    "slug": "boda-elegante-al-aire-libre",
    "text": "Boda elegante al aire libre"
  }, {
    "depth": 3,
    "slug": "boda-minimalista",
    "text": "Boda minimalista"
  }, {
    "depth": 2,
    "slug": "decoración-paso-a-paso-lo-que-funciona-sobre-madera",
    "text": "Decoración paso a paso: lo que funciona sobre madera"
  }, {
    "depth": 2,
    "slug": "qué-incluye-el-servicio-de-alquiler",
    "text": "¿Qué incluye el servicio de alquiler?"
  }, {
    "depth": 2,
    "slug": "cobertura-ciudad-de-méxico-y-zona-metropolitana",
    "text": "Cobertura: Ciudad de México y zona metropolitana"
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
          id: "renta-de-mobiliario-rústico-para-bodas-al-aire-libre-en-cdmx",
          children: "Renta de Mobiliario Rústico para Bodas al Aire Libre en CDMX"
        }), createVNode(_components.p, {
          children: ["En los últimos tres años hemos montado más de 400 bodas en jardines, haciendas y viñedos. Lo que más nos piden las parejas son ", createVNode(_components.strong, {
            children: "mesas picnic de madera natural"
          }), ": cada pieza mide 2.4 m de largo por 0.75 m de ancho, con bancas integradas que acomodan de 6 a 8 personas sin necesidad de sillas adicionales."]
        }), createVNode("img", {
          src: "/img/mesa-picnic-boda-elegante-decoracion.avif",
          alt: "Banca de madera decorada con flores blancas y velas en un jardín durante una boda",
          loading: "lazy",
          width: "800",
          height: "500",
          style: "border-radius: 12px; width: 100%; height: auto; margin: 2rem 0;"
        }), createVNode(_components.h2, {
          id: "qué-hace-diferente-al-mobiliario-de-madera-en-una-boda",
          children: "¿Qué hace diferente al mobiliario de madera en una boda?"
        }), createVNode(_components.p, {
          children: "Las bancas rústicas generan un ambiente que las sillas y tablones convencionales no logran. La madera maciza de pino tratado resiste la intemperie, y su acabado natural funciona como base neutra para cualquier paleta de color. Además, al integrar banca y mesa en una sola estructura, reduces el número de piezas que necesitas transportar y montar."
        }), createVNode(_components.h3, {
          id: "ventajas-concretas",
          children: "Ventajas concretas"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Estética cálida"
            }), ": El tono natural de la madera complementa jardines, terrazas y viñedos sin competir con la decoración floral"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Adaptabilidad"
            }), ": Funcionan igual para un estilo boho, provenzal, minimalista o campestre — basta cambiar los textiles y centros de mesa"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Capacidad real"
            }), ": 6 adultos cómodos, hasta 8 si son personas delgadas o niños en las esquinas"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Menos logística"
            }), ": No necesitas rentar sillas aparte, lo que reduce costos de transporte entre un 15% y 20%"]
          }), "\n"]
        }), createVNode(_components.h2, {
          id: "cuántas-piezas-necesitas-según-tu-número-de-invitados",
          children: "¿Cuántas piezas necesitas según tu número de invitados?"
        }), createVNode(_components.p, {
          children: "Esta es la duda que resolvemos a diario. Con base en nuestras mesas picnic de 2.4 m, la distribución queda así:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "50 invitados"
            }), ": 7-8 piezas, ideales para patios medianos de 80 m²"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "100 invitados"
            }), ": 14-16 piezas, requieren al menos 150 m² para dejar pasillos de 1.2 m"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "150 invitados"
            }), ": 20-22 piezas, funcionan bien en jardines de hacienda o fincas"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "200 invitados"
            }), ": 28-34 piezas, aquí recomendamos dos zonas separadas (comida y coctelería)"]
          }), "\n"]
        }), createVNode(_components.p, {
          children: "Siempre sugerimos dejar pasillos de mínimo 1.2 m entre hileras para que los meseros circulen con charolas y los invitados se levanten sin mover a nadie."
        }), createVNode(_components.h2, {
          id: "cuatro-estilos-de-boda-donde-el-mobiliario-rústico-destaca",
          children: "Cuatro estilos de boda donde el mobiliario rústico destaca"
        }), createVNode(_components.h3, {
          id: "boda-campestre",
          children: "Boda campestre"
        }), createVNode(_components.p, {
          children: "Caminos de mesa de yute, frascos con flores silvestres y velas de cera de abeja. La madera sin pintar es el lienzo perfecto: no necesitas cubrir nada."
        }), createVNode(_components.h3, {
          id: "boda-boho-chic",
          children: "Boda boho-chic"
        }), createVNode(_components.p, {
          children: "Macramé colgante, suculentas en macetas de barro y cojines de textil oaxaqueño sobre las bancas. El contraste entre la madera y los colores terrosos crea un ambiente relajado y fotogénico."
        }), createVNode(_components.h3, {
          id: "boda-elegante-al-aire-libre",
          children: "Boda elegante al aire libre"
        }), createVNode(_components.p, {
          children: "Manteles de lino blanco que cubren solo la superficie superior, vajilla de porcelana y arreglos florales altos con rosas y eucalipto. Las bancas de madera aportan calidez frente a tanta formalidad."
        }), createVNode(_components.h3, {
          id: "boda-minimalista",
          children: "Boda minimalista"
        }), createVNode(_components.p, {
          children: "Madera expuesta, un solo tipo de flor en color blanco y velas cilíndricas. Menos piezas decorativas, más impacto visual."
        }), createVNode("img", {
          src: "/img/boda-boho-1.avif",
          alt: "Montaje al aire libre con bancas de madera decoradas con macramé y suculentas en un jardín",
          loading: "lazy",
          width: "800",
          height: "500",
          style: "border-radius: 12px; width: 100%; height: auto; margin: 2rem 0;"
        }), createVNode(_components.h2, {
          id: "decoración-paso-a-paso-lo-que-funciona-sobre-madera",
          children: "Decoración paso a paso: lo que funciona sobre madera"
        }), createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Caminos de mesa"
            }), ": Tela de manta, yute o ramas de eucalipto fresco a lo largo del centro — la madera visible en los bordes es parte del diseño"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Iluminación"
            }), ": Velas dentro de fanales de vidrio protegen la llama del viento; las luces LED en serie funcionan si tu venue no tiene buena iluminación nocturna"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Arreglos florales bajos"
            }), ": Máximo 25 cm de altura para que los invitados se vean entre sí — los arreglos altos solo van en la mesa de honor"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Detalles personalizados"
            }), ": Menús impresos en papel kraft, servilletas de tela con el monograma de la pareja, o tarjetas de asignación de lugar"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Contraste de texturas"
            }), ": Combina la rugosidad de la madera con la suavidad de la tela y el brillo del cristal"]
          }), "\n"]
        }), createVNode(_components.h2, {
          id: "qué-incluye-el-servicio-de-alquiler",
          children: "¿Qué incluye el servicio de alquiler?"
        }), createVNode(_components.p, {
          children: ["En ", createVNode(_components.strong, {
            children: "MESPIC"
          }), " el servicio cubre todo el ciclo del evento:"]
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Entrega puntual en tu venue (llegamos 3 horas antes del inicio, o según indique tu coordinador)"
          }), "\n", createVNode(_components.li, {
            children: "Montaje profesional: nivelamos cada pieza y la colocamos según el plano de distribución"
          }), "\n", createVNode(_components.li, {
            children: "Uso sin límite de tiempo durante la celebración"
          }), "\n", createVNode(_components.li, {
            children: "Recolección al día siguiente si el evento termina después de medianoche"
          }), "\n", createVNode(_components.li, {
            children: "Coordinación directa con tu wedding planner o con el encargado del lugar"
          }), "\n"]
        }), createVNode(_components.h2, {
          id: "cobertura-ciudad-de-méxico-y-zona-metropolitana",
          children: "Cobertura: Ciudad de México y zona metropolitana"
        }), createVNode(_components.p, {
          children: "Operamos en todas las alcaldías de la Ciudad de México y en municipios del Estado de México: Naucalpan, Huixquilucan, Tlalnepantla, Atizapán, Metepec y Cuernavaca. Para venues fuera de esta zona, cotizamos un cargo adicional por distancia."
        }), createVNode(_components.hr, {}), createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "¿Lista para reservar el mobiliario de tu boda?"
          }), " ", createVNode(_components.a, {
            href: "/cotizar/",
            children: "Solicita tu cotización →"
          })]
        })]
      })
    }), "\n", createVNode("style", {
      children: `
.blog-article {
  padding-top: calc(var(--header-height, 70px) + 3rem);
  padding-bottom: 4rem;
}
.blog-article h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--c-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.blog-article h2 {
  font-size: 1.5rem;
  color: var(--c-primary);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.blog-article h3 {
  font-size: 1.125rem;
  color: var(--c-text);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.blog-article p {
  color: var(--c-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.0625rem;
}
.blog-article ul, .blog-article ol {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.blog-article li {
  color: var(--c-text-muted);
  line-height: 1.8;
  list-style: disc;
  margin-bottom: 0.25rem;
}
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

const url = "/blog/renta-mesas-picnic-bodas-cdmx";
const file = "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/renta-mesas-picnic-bodas-cdmx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/pensive-beautiful-maxwell/mnt/MESASPICNIC/src/pages/blog/renta-mesas-picnic-bodas-cdmx.mdx";
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
