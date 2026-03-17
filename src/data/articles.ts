/* ─── Article Content Types ─── */
export type ArticleContent =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface Article {
  slug: string;
  url: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  featured: boolean;
  content: ArticleContent[];
}

export const articles: Article[] = [
  /* ═══════════════════════════════════════════════
     1. CRM correcto (legacy /blog/1)
     ═══════════════════════════════════════════════ */
  {
    slug: "como-elegir-el-crm-correcto",
    url: "/blog/como-elegir-el-crm-correcto",
    title: "Cómo elegir el CRM correcto para tu empresa en 2025",
    seoTitle: "Cómo elegir el CRM correcto para tu empresa en 2025 | North",
    excerpt: "Una guía completa para evaluar, comparar e implementar un CRM que realmente se adapte a tu operación comercial y acelere tus ventas.",
    category: "crm",
    categoryLabel: "CRM & Ventas",
    tags: ["CRM", "Ventas", "HubSpot", "Salesforce", "Automatización", "B2B"],
    date: "12 Mar 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "Elegir un CRM no es solo una decisión tecnológica — es una decisión estratégica que impacta directamente tu capacidad de vender, retener clientes y escalar tu operación. En 2025, el mercado de CRMs ha evolucionado significativamente, y las opciones van desde plataformas enterprise hasta soluciones ligeras basadas en IA." },
      { type: "h2", text: "¿Por qué necesitas un CRM en 2025?" },
      { type: "paragraph", text: "Las empresas que implementan un CRM correctamente ven un incremento promedio del 29% en ventas y una mejora del 42% en la retención de clientes. Pero la clave está en elegir el correcto. Si tu equipo comercial maneja prospectos en hojas de cálculo o notas sueltas, estás perdiendo oportunidades cada día." },
      { type: "quote", text: "Un CRM mal implementado es peor que no tener CRM. La herramienta debe adaptarse a tu proceso, no al revés." },
      { type: "h2", text: "Criterios clave para evaluar un CRM" },
      { type: "paragraph", text: "Antes de comparar precios o funcionalidades, necesitas definir tres cosas fundamentales sobre tu operación:" },
      { type: "list", items: ["Tamaño de tu equipo comercial y volumen de leads mensuales", "Complejidad de tu ciclo de ventas (B2B vs B2C, ticket promedio)", "Integraciones necesarias con tu stack tecnológico actual", "Nivel de personalización requerido en reportes y dashboards", "Presupuesto total incluyendo implementación y capacitación"] },
      { type: "h2", text: "Comparativa de plataformas populares" },
      { type: "paragraph", text: "Analizamos las plataformas más relevantes para empresas en Latinoamérica, considerando precio, soporte en español y facilidad de implementación." },
      { type: "h3", text: "HubSpot CRM" },
      { type: "paragraph", text: "Ideal para empresas en crecimiento que buscan una plataforma todo-en-uno. Su versión gratuita es sorprendentemente completa, y la curva de aprendizaje es baja. La integración con marketing automation es nativa." },
      { type: "h3", text: "Salesforce" },
      { type: "paragraph", text: "La opción enterprise por excelencia. Extremadamente personalizable pero requiere inversión significativa en implementación y administración. Ideal para equipos de más de 20 vendedores." },
      { type: "ordered-list", items: ["Define tu proceso de ventas actual", "Identifica los puntos de fricción", "Evalúa 3-5 opciones con demos personalizadas", "Implementa con un piloto de 30 días", "Mide y optimiza basándote en datos"] },
      { type: "h2", text: "Integración con tu stack tecnológico" },
      { type: "paragraph", text: "Un CRM moderno debe conectarse nativamente con tus herramientas existentes. La integración entre tu CRM, tu plataforma de email marketing y tu sistema de facturación elimina silos de información y acelera tu ciclo de ventas. En North ayudamos a empresas a implementar CRM integrado con automatización — conoce más en nuestra página de CRM para empresas." },
      { type: "h2", text: "Errores comunes al implementar un CRM" },
      { type: "list", items: ["No mapear el proceso de ventas antes de configurar la herramienta", "Intentar migrar todo de golpe en lugar de hacer una transición gradual", "No capacitar al equipo adecuadamente", "Elegir basándose solo en precio sin considerar el costo total de ownership", "No definir KPIs claros desde el inicio"] },
      { type: "quote", text: "La tecnología es solo el 30% del éxito. El otro 70% es proceso, adopción y mejora continua." },
      { type: "h2", text: "Métricas para medir el éxito" },
      { type: "paragraph", text: "Una vez implementado, necesitas trackear estas métricas para asegurarte de que tu inversión está dando resultados: tasa de adopción del equipo, calidad de datos, velocidad del pipeline, tasa de conversión y ROI directo." },
      { type: "paragraph", text: "Recuerda: un CRM es una inversión a largo plazo. Dale al menos 90 días antes de evaluar resultados definitivos, y asegúrate de tener un proceso de mejora continua establecido." },
    ],
  },

  /* ═══════════════════════════════════════════════
     2. Top 7 agencias (FEATURED)
     ═══════════════════════════════════════════════ */
  {
    slug: "top-7-de-agencias-de-marketing-digital-en-cancun",
    url: "/top-7-de-agencias-de-marketing-digital-en-cancun",
    title: "Las 7 mejores agencias de marketing digital en Cancún (2026)",
    seoTitle: "Las 7 mejores agencias de marketing digital en Cancún en 2026 | North",
    excerpt: "Descubre cuáles son las mejores agencias de marketing digital en Cancún en 2026 y elige la mejor opción según tu tipo de empresa, objetivos y estrategia de crecimiento.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["Marketing Digital", "Cancún", "Agencias", "SEO", "Publicidad Digital", "Estrategia"],
    date: "17 Mar 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: true,
    content: [
      { type: "paragraph", text: "El mercado de marketing digital en Cancún evoluciona rápidamente. En 2026, las empresas ya no solo necesitan presencia en redes sociales: necesitan estrategias completas que integren publicidad, SEO, CRM y automatización. Elegir la agencia correcta puede ser la diferencia entre crecer de forma sostenible o seguir invirtiendo sin resultados claros." },
      { type: "paragraph", text: "En esta guía actualizada analizamos las 7 mejores agencias de marketing digital en Cancún para 2026, evaluadas con criterios objetivos para ayudarte a tomar la mejor decisión según el tipo y tamaño de tu empresa." },
      { type: "h2", text: "¿Por qué es más importante que nunca elegir bien tu agencia?" },
      { type: "paragraph", text: "Cancún y la Riviera Maya siguen siendo uno de los mercados más competitivos de México. Con el crecimiento del e-commerce, la transformación digital de negocios locales y la llegada de nuevas empresas, la competencia por la atención del cliente es más intensa que nunca. En 2026, una agencia que solo gestione redes sociales ya no es suficiente — necesitas un partner que entienda tecnología, datos y conversión." },
      { type: "h2", text: "Cómo evaluamos estas agencias" },
      { type: "paragraph", text: "Para construir este ranking 2026 utilizamos criterios actualizados que reflejan lo que realmente importa hoy:" },
      { type: "list", items: ["Experiencia demostrada en el mercado de Cancún y Riviera Maya", "Servicios integrales (SEO, paid media, contenido, CRM)", "Enfoque en resultados medibles: leads, ventas, ROI", "Uso de tecnología, automatización e inteligencia artificial", "Capacidad estratégica más allá de la ejecución táctica", "Reputación, casos de éxito verificables y adaptación a 2026"] },
      { type: "h2", text: "Las 7 mejores agencias de marketing digital en Cancún en 2026" },

      { type: "h3", text: "1. Starter Marketing" },
      { type: "paragraph", text: "Una de las agencias con mayor trayectoria en Cancún. Se han mantenido relevantes gracias a su conocimiento profundo del sector turístico y hotelero. En 2026 siguen siendo una opción sólida para hoteles, tours y experiencias que necesitan campañas de Google Ads y redes sociales con enfoque turístico. Su área de oportunidad sigue siendo la adopción de tecnología más avanzada y automatización." },

      { type: "h3", text: "2. North" },
      { type: "paragraph", text: "North se ha consolidado como una de las agencias más innovadoras de Cancún en 2026. Lo que las diferencia es su modelo híbrido: no solo ejecutan campañas de marketing, sino que integran CRM, automatización de ventas e inteligencia artificial dentro de la estrategia. Esto permite a sus clientes no solo generar leads, sino convertirlos en ventas reales de forma automatizada." },
      { type: "list", items: ["Integración nativa entre marketing digital, CRM y automatización de ventas", "Uso de inteligencia artificial para optimización de campañas y seguimiento de leads", "Enfoque basado en métricas de negocio reales (ventas, ROI), no solo impresiones o likes", "Capacidad de desarrollar software empresarial a medida para sus clientes", "Ideal para empresas en crecimiento, B2B y servicios profesionales que quieren escalar"] },
      { type: "paragraph", text: "Si buscas una agencia que piense más allá de las campañas y te ayude a construir un sistema de crecimiento, North es probablemente la opción más completa de la región en 2026." },

      { type: "h3", text: "3. Brandkey Media" },
      { type: "paragraph", text: "Agencia creativa con fuerte presencia en Cancún, reconocida por su trabajo en branding y producción audiovisual. En 2026 han fortalecido su oferta de contenido para marcas lifestyle, gastronomía y moda. Ideal si tu prioridad es construir una imagen de marca potente y contenido visual de alto nivel, aunque su enfoque en generación de leads y conversión es menos robusto." },

      { type: "h3", text: "4. Mktidea" },
      { type: "paragraph", text: "Agencia generalista con experiencia en el mercado local de Cancún. Ofrecen desde diseño web hasta campañas de publicidad digital, con paquetes flexibles que se adaptan a distintos presupuestos. En 2026 siguen siendo una opción práctica para pequeños negocios que buscan un proveedor todo-en-uno sin demasiada complejidad técnica." },

      { type: "h3", text: "5. Pelicano Marketing" },
      { type: "paragraph", text: "Especializada en marketing inmobiliario en la Riviera Maya. Si tu negocio es bienes raíces — desarrollos, propiedades de inversión o Airbnb — esta agencia tiene experiencia específica en generación de prospectos para ese sector. En 2026 han ampliado sus servicios hacia embudos de conversión inmobiliarios, lo que les da una ventaja en su nicho." },

      { type: "h3", text: "6. Netcommerce" },
      { type: "paragraph", text: "Con presencia nacional y oficinas en Cancún, Netcommerce ofrece servicios de e-commerce y marketing digital orientados a retail. Su fortaleza está en tiendas en línea, pasarelas de pago y estrategias de conversión. En 2026 son una buena opción si tu negocio vende productos online, aunque su enfoque no es tan localizado como agencias nativas de la región." },

      { type: "h3", text: "7. Digital Caribe" },
      { type: "paragraph", text: "Agencia local enfocada en redes sociales y community management. Ofrecen paquetes accesibles para emprendedores y pequeños negocios que están iniciando su presencia digital. En 2026 siguen siendo una opción económica para quienes necesitan gestión básica de redes, aunque su capacidad estratégica y tecnológica es más limitada." },

      { type: "h2", text: "¿Qué tipo de agencia necesita tu empresa?" },
      { type: "paragraph", text: "No todas las empresas necesitan el mismo tipo de agencia. Tu elección debe depender de tu etapa de crecimiento, tus objetivos y tu presupuesto:" },
      { type: "list", items: [
        "Negocios pequeños o emprendimientos: Una agencia generalista con paquetes accesibles puede ser suficiente para establecer presencia digital básica.",
        "Empresas en crecimiento: Necesitas una agencia que entienda de generación de leads, embudos de conversión y optimización basada en datos.",
        "Empresas que necesitan automatización: Busca agencias que integren marketing con CRM y procesos automatizados de seguimiento y ventas.",
        "Empresas que buscan estrategia integral: Requieres un partner que combine marketing, tecnología y visión de negocio — no solo ejecución táctica."
      ]},
      { type: "quote", text: "La mejor agencia no es la más grande ni la más barata. Es la que entiende tu modelo de negocio y puede conectar el marketing con resultados comerciales reales." },
      { type: "h2", text: "Conclusión" },
      { type: "paragraph", text: "En 2026, el mercado de agencias de marketing digital en Cancún es más diverso y competitivo que nunca. Desde agencias creativas hasta partners tecnológicos, hay opciones para cada tipo de empresa y presupuesto. Lo importante es evaluar más allá del portafolio visual: pregunta por métricas reales, procesos de conversión, uso de tecnología y capacidad de escalar contigo." },
      { type: "paragraph", text: "Si estás buscando un partner que combine marketing digital con tecnología, CRM, automatización e inteligencia artificial para impulsar el crecimiento real de tu empresa en 2026, te invitamos a conocer cómo trabajamos en North. Puedes explorar nuestras soluciones de marketing digital en Cancún o agendar una llamada con nuestro equipo." },
    ],
  },

  /* ═══════════════════════════════════════════════
     3. ¿Qué es marketing digital?
     ═══════════════════════════════════════════════ */
  {
    slug: "que-es-marketing-digital",
    url: "/que-es-marketing-digital",
    title: "¿Qué es el marketing digital? Guía completa para empresas",
    seoTitle: "¿Qué es el marketing digital? Guía completa para empresas | North",
    excerpt: "Aprende qué es el marketing digital, cómo funciona, qué canales existen y cómo puede ayudar a tu empresa a crecer de forma medible y escalable.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["Marketing Digital", "SEO", "Google Ads", "Redes Sociales", "Estrategia", "Guía"],
    date: "10 Mar 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "El marketing digital es el conjunto de estrategias, herramientas y acciones que utilizan canales digitales para conectar a las empresas con sus clientes potenciales. A diferencia del marketing tradicional, todo en el marketing digital es medible, optimizable y escalable — lo que lo convierte en la inversión más inteligente para empresas que quieren crecer." },
      { type: "h2", text: "¿Por qué el marketing digital es esencial en 2025?" },
      { type: "paragraph", text: "Más del 80% de las decisiones de compra comienzan con una búsqueda en internet. Si tu empresa no tiene presencia digital estratégica, estás cediendo clientes a tu competencia. El marketing digital no es un gasto: es el canal de adquisición con mejor retorno de inversión para la mayoría de las empresas." },
      { type: "list", items: ["93% de las experiencias online comienzan en un motor de búsqueda", "Las empresas con estrategia digital generan 3x más leads que las que dependen solo de métodos tradicionales", "El costo por lead en digital es hasta 62% menor que en medios tradicionales", "Cada acción es medible: sabes exactamente cuánto inviertes y cuánto generas"] },
      { type: "h2", text: "Los pilares del marketing digital" },
      { type: "h3", text: "SEO (Posicionamiento en buscadores)" },
      { type: "paragraph", text: "El SEO es la estrategia de optimizar tu sitio web para que aparezca en los primeros resultados de Google cuando alguien busca tus productos o servicios. Es una inversión a mediano plazo que genera tráfico orgánico constante sin pagar por cada clic. Para empresas en Cancún y la Riviera Maya, el SEO local es especialmente poderoso." },
      { type: "h3", text: "Publicidad digital (Google Ads, Meta Ads)" },
      { type: "paragraph", text: "La publicidad pagada te permite aparecer frente a tu audiencia ideal de forma inmediata. Google Ads captura demanda existente (personas buscando activamente lo que ofreces), mientras que Meta Ads (Facebook e Instagram) genera demanda nueva al mostrar tu oferta a audiencias segmentadas." },
      { type: "h3", text: "Marketing de contenidos" },
      { type: "paragraph", text: "Crear contenido valioso (artículos, guías, videos) posiciona a tu empresa como autoridad en tu industria, mejora tu SEO y nutre a prospectos que aún no están listos para comprar. Es el combustible que alimenta todo el ecosistema digital." },
      { type: "h3", text: "Email marketing y automatización" },
      { type: "paragraph", text: "El email sigue siendo el canal con mayor ROI en marketing digital. Combinado con automatización, puedes crear secuencias que nutren leads, reactivan clientes inactivos y generan ventas recurrentes de forma automática." },
      { type: "h2", text: "¿Cómo empezar con marketing digital?" },
      { type: "ordered-list", items: ["Define tus objetivos de negocio (leads, ventas, awareness)", "Identifica a tu cliente ideal y dónde busca información", "Construye un sitio web optimizado para conversión", "Elige 2-3 canales iniciales y ejecuta con consistencia", "Mide resultados semanalmente y optimiza basándote en datos", "Escala lo que funciona e integra con un CRM para no perder leads"] },
      { type: "h2", text: "Marketing digital vs. marketing tradicional" },
      { type: "paragraph", text: "La diferencia fundamental es la medición. En marketing tradicional (radio, espectaculares, volantes) no puedes saber cuántas personas vieron tu anuncio, cuántas se interesaron y cuántas compraron. En marketing digital, cada paso del embudo es medible y optimizable." },
      { type: "quote", text: "No se trata de elegir entre digital y tradicional. Se trata de invertir donde puedas medir el retorno y escalar lo que funciona." },
      { type: "h2", text: "¿Necesitas una agencia o puedes hacerlo internamente?" },
      { type: "paragraph", text: "Depende de tu etapa y recursos. Empresas pequeñas pueden empezar con acciones básicas internamente. Pero cuando buscas resultados serios — posicionamiento SEO competitivo, campañas de publicidad rentables, integración con CRM — trabajar con un equipo especializado acelera los resultados significativamente." },
      { type: "paragraph", text: "En North combinamos marketing digital con CRM y automatización para que cada lead generado se convierta en una oportunidad real de venta. Conoce nuestras soluciones de marketing digital o explora cómo nuestro software empresarial puede complementar tu estrategia." },
    ],
  },

  /* ═══════════════════════════════════════════════
     4. SEO en Cancún
     ═══════════════════════════════════════════════ */
  {
    slug: "seo-en-cancun",
    url: "/seo-en-cancun",
    title: "SEO en Cancún: cómo posicionar tu empresa en Google",
    seoTitle: "SEO en Cancún: cómo posicionar tu empresa en Google | North",
    excerpt: "Guía práctica de SEO local para empresas en Cancún y la Riviera Maya. Aprende a posicionar tu negocio en Google y atraer clientes de forma orgánica.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["SEO", "Cancún", "Google", "Posicionamiento Web", "SEO Local", "Marketing Digital"],
    date: "8 Mar 2025",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "Si tienes un negocio en Cancún y no apareces en la primera página de Google, estás perdiendo clientes todos los días. El SEO (Search Engine Optimization) es la estrategia más rentable a largo plazo para atraer tráfico cualificado a tu sitio web. En esta guía te mostramos exactamente cómo posicionar tu empresa en Google para búsquedas locales en Cancún y la Riviera Maya." },
      { type: "h2", text: "¿Por qué el SEO local es clave para negocios en Cancún?" },
      { type: "paragraph", text: "Cancún recibe más de 30 millones de visitantes al año, y la mayoría investiga en Google antes de elegir un hotel, restaurante, tour o servicio. Pero el SEO local no solo atrae turistas: la población local de la zona metropolitana supera el millón de habitantes que también buscan servicios profesionales, clínicas, escuelas y más." },
      { type: "list", items: ["El 46% de todas las búsquedas en Google tienen intención local", "El 76% de las personas que buscan algo cercano visitan el negocio dentro de 24 horas", "Los resultados del 'mapa de Google' (Local Pack) reciben el 42% de los clics", "Las búsquedas 'cerca de mí' han crecido más del 500% en los últimos años"] },
      { type: "h2", text: "Fundamentos del SEO local para Cancún" },
      { type: "h3", text: "Google Business Profile (antes Google My Business)" },
      { type: "paragraph", text: "Tu perfil de Google Business es la base de tu SEO local. Un perfil completo y optimizado con fotos, horarios, categorías correctas y reseñas te posiciona en el mapa de Google. Es gratuito y puede ser tu mayor fuente de leads locales." },
      { type: "h3", text: "Optimización on-page con enfoque local" },
      { type: "paragraph", text: "Tu sitio web debe incluir señales claras de ubicación: menciona Cancún, Zona Hotelera, Centro, Playa del Carmen o tu zona de servicio en títulos, descripciones y contenido. Crea páginas específicas para cada servicio + ubicación que atiendes." },
      { type: "h3", text: "Contenido local relevante" },
      { type: "paragraph", text: "Publicar contenido relevante para tu audiencia local (guías, noticias del sector, casos de éxito regionales) le dice a Google que eres una autoridad en tu mercado. Un blog activo con contenido local es una de las estrategias SEO más efectivas." },
      { type: "h2", text: "Estrategias avanzadas de SEO para competir en Cancún" },
      { type: "ordered-list", items: [
        "Investigación de palabras clave locales: Identifica qué buscan tus clientes potenciales con herramientas como Google Keyword Planner, Ahrefs o SEMrush",
        "Link building local: Consigue enlaces de directorios locales, cámaras de comercio, medios regionales y partners de negocio",
        "SEO técnico: Asegura que tu sitio cargue rápido, sea mobile-friendly y tenga estructura de datos correcta (Schema markup)",
        "Gestión de reseñas: Responde a todas las reseñas y genera un flujo constante de testimonios positivos",
        "Contenido pilar: Crea guías exhaustivas sobre tu industria que se posicionen para búsquedas informacionales de alto volumen"
      ]},
      { type: "h2", text: "Errores comunes de SEO en empresas de Cancún" },
      { type: "list", items: [
        "Tener un sitio web sin optimización básica (sin meta títulos, sin H1, sin alt text en imágenes)",
        "No reclamar ni optimizar el perfil de Google Business",
        "Comprar enlaces de baja calidad o usar técnicas black hat",
        "No tener un sitio responsive (optimizado para móvil)",
        "Esperar resultados en semanas — el SEO requiere mínimo 3-6 meses de trabajo constante"
      ]},
      { type: "quote", text: "El SEO no es un gasto puntual, es una inversión acumulativa. Cada mes que trabajas en posicionamiento, tu activo digital crece y genera más valor." },
      { type: "h2", text: "¿Cuánto cuesta el SEO en Cancún?" },
      { type: "paragraph", text: "Los precios varían enormemente. Agencias locales pueden cobrar desde $5,000 MXN hasta $50,000+ MXN mensuales dependiendo de la competitividad de tu industria, el alcance del proyecto y la experiencia del equipo. Lo importante no es el precio, sino el retorno: un buen SEO debe generar más ingresos de los que cuesta." },
      { type: "h2", text: "Cómo North aborda el SEO" },
      { type: "paragraph", text: "En North integramos el SEO con una estrategia completa de generación de leads. No solo posicionamos tu sitio: conectamos el tráfico orgánico con tu CRM y automatizaciones para que cada visitante se convierta en una oportunidad de negocio real. Conoce nuestra estrategia de marketing digital en Cancún." },
    ],
  },

  /* ═══════════════════════════════════════════════
     5. Publicidad en Facebook Cancún
     ═══════════════════════════════════════════════ */
  {
    slug: "publicidad-en-facebook-cancun",
    url: "/publicidad-en-facebook-cancun",
    title: "Publicidad en Facebook para empresas en Cancún: guía práctica",
    seoTitle: "Publicidad en Facebook para empresas en Cancún | North",
    excerpt: "Aprende a crear campañas de publicidad en Facebook e Instagram efectivas para tu negocio en Cancún. Segmentación, presupuestos, formatos y estrategias que funcionan.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["Facebook Ads", "Meta Ads", "Cancún", "Publicidad Digital", "Instagram", "Redes Sociales"],
    date: "5 Mar 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "Facebook e Instagram siguen siendo dos de los canales publicitarios más poderosos para empresas en Cancún. Con más de 100 millones de usuarios en México y opciones de segmentación extremadamente detalladas, Meta Ads permite llegar a tu cliente ideal con precisión quirúrgica. Esta guía te muestra cómo aprovechar al máximo la publicidad en estas plataformas." },
      { type: "h2", text: "¿Por qué Facebook Ads funciona para negocios en Cancún?" },
      { type: "paragraph", text: "Cancún tiene una dinámica única: combina una población local en crecimiento con millones de turistas que planean sus viajes online. Facebook e Instagram te permiten alcanzar ambos segmentos con campañas específicas, segmentadas por ubicación, intereses, comportamiento y demografía." },
      { type: "list", items: ["Segmentación por ubicación precisa (Cancún, Zona Hotelera, Playa del Carmen)", "Segmentación por intereses y comportamiento de compra", "Formatos visuales ideales para turismo, gastronomía, bienes raíces y servicios", "Remarketing a personas que ya visitaron tu sitio web", "Lookalike audiences basadas en tus mejores clientes"] },
      { type: "h2", text: "Tipos de campañas más efectivas" },
      { type: "h3", text: "Campañas de generación de leads" },
      { type: "paragraph", text: "Los formularios nativos de Facebook (Lead Ads) permiten capturar datos de contacto sin que el usuario salga de la plataforma. Para servicios profesionales, inmobiliarias y clínicas en Cancún, este formato genera leads a costos muy competitivos." },
      { type: "h3", text: "Campañas de tráfico y conversión" },
      { type: "paragraph", text: "Dirige tráfico cualificado a tu sitio web y optimiza para conversiones específicas: compras, cotizaciones, reservaciones o llamadas. El pixel de Meta y la API de conversiones son esenciales para medir y optimizar correctamente." },
      { type: "h3", text: "Campañas de awareness y branding" },
      { type: "paragraph", text: "Para negocios nuevos o lanzamientos, las campañas de alcance y video views construyen reconocimiento de marca a costos bajos. Reels y Stories son los formatos con mejor rendimiento en 2025." },
      { type: "h2", text: "Presupuestos realistas para Cancún" },
      { type: "paragraph", text: "No necesitas un presupuesto enorme para empezar. Con $3,000-$5,000 MXN mensuales puedes probar audiencias y creativos. Negocios que buscan resultados consistentes suelen invertir entre $10,000-$30,000 MXN mensuales, dependiendo del sector y la competencia." },
      { type: "quote", text: "El presupuesto no determina el éxito de tu campaña. La estrategia, los creativos y la optimización constante son lo que marca la diferencia." },
      { type: "h2", text: "Errores que debes evitar" },
      { type: "ordered-list", items: [
        "No instalar correctamente el pixel de Meta en tu sitio web",
        "Usar la misma creatividad durante meses sin renovar",
        "Segmentar demasiado amplio o demasiado estrecho",
        "No hacer pruebas A/B de creativos y audiencias",
        "Medir likes y alcance en lugar de leads y ventas reales",
        "No tener una landing page optimizada para recibir el tráfico"
      ]},
      { type: "h2", text: "Conectando Facebook Ads con tu CRM" },
      { type: "paragraph", text: "El verdadero poder de la publicidad en Facebook se desbloquea cuando conectas los leads generados con un CRM y flujos de seguimiento automatizados. Cada lead que entra debe recibir una respuesta inmediata y entrar a una secuencia de nurturing. En North integramos tus campañas con CRM para empresas y automatización, asegurando que ningún lead se pierda." },
      { type: "paragraph", text: "Si necesitas ayuda para crear o escalar tus campañas de publicidad digital en Cancún, conoce nuestros servicios de marketing digital o agenda una llamada con nuestro equipo." },
    ],
  },

  /* ═══════════════════════════════════════════════
     6. Estrategias de marketing digital para empresas
     ═══════════════════════════════════════════════ */
  {
    slug: "estrategias-de-marketing-digital-para-empresas",
    url: "/estrategias-de-marketing-digital-para-empresas",
    title: "Estrategias de marketing digital para empresas que quieren crecer",
    seoTitle: "Estrategias de marketing digital para empresas | North",
    excerpt: "Las estrategias de marketing digital más efectivas para empresas en crecimiento. SEO, publicidad, contenido, email marketing y automatización para generar resultados.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["Estrategia", "Marketing Digital", "Crecimiento", "SEO", "Contenido", "Automatización"],
    date: "1 Mar 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "Tener presencia digital ya no es suficiente. Las empresas que realmente crecen en 2025 son las que implementan estrategias integradas que conectan cada canal con un objetivo claro de negocio. En esta guía compartimos las estrategias que hemos visto generar los mejores resultados para empresas en México y Latinoamérica." },
      { type: "h2", text: "El problema con el marketing digital sin estrategia" },
      { type: "paragraph", text: "Muchas empresas invierten en marketing digital de forma reactiva: publican en redes sociales sin plan, lanzan anuncios sin entender el embudo, o crean un sitio web sin optimizarlo para conversión. El resultado es gasto sin retorno y frustración." },
      { type: "quote", text: "El marketing digital sin estrategia es como construir una casa sin planos. Puedes gastar mucho dinero y terminar con algo que no funciona." },
      { type: "h2", text: "Las 6 estrategias que realmente funcionan" },
      { type: "h3", text: "1. SEO como base de adquisición orgánica" },
      { type: "paragraph", text: "El SEO es la inversión con mejor retorno a largo plazo. Posicionar tu sitio web para las búsquedas que tus clientes potenciales hacen genera tráfico constante y gratuito. Para empresas en Cancún y la Riviera Maya, el SEO local es especialmente poderoso. Conoce más sobre SEO para empresas locales." },
      { type: "h3", text: "2. Publicidad digital con enfoque en conversión" },
      { type: "paragraph", text: "Google Ads y Meta Ads permiten generar leads y ventas de forma inmediata. La clave es optimizar para conversiones reales (ventas, cotizaciones) y no para métricas superficiales (clics, impresiones). Cada peso invertido debe poder atribuirse a un resultado de negocio." },
      { type: "h3", text: "3. Marketing de contenidos estratégico" },
      { type: "paragraph", text: "El contenido no es publicar por publicar. Una estrategia de contenidos efectiva crea artículos, guías y recursos que responden las preguntas de tus clientes potenciales, mejoran tu SEO y nutren prospectos a lo largo del embudo de conversión." },
      { type: "h3", text: "4. Email marketing y nurturing automatizado" },
      { type: "paragraph", text: "El 80% de los leads no están listos para comprar cuando te contactan. Las secuencias de email automatizadas mantienen tu marca presente y nutren al prospecto hasta que esté listo para tomar una decisión. El email tiene un ROI promedio de $36 por cada $1 invertido." },
      { type: "h3", text: "5. CRM como centro de operaciones comerciales" },
      { type: "paragraph", text: "Un CRM conecta tu marketing con tu equipo de ventas. Cada lead generado entra al sistema, se califica automáticamente y se asigna al vendedor correcto. Sin CRM, estás perdiendo leads que ya pagaste por generar. Explora nuestras soluciones de CRM para empresas." },
      { type: "h3", text: "6. Automatización de procesos de seguimiento" },
      { type: "paragraph", text: "Las empresas que automatizan el seguimiento de leads responden 10x más rápido y convierten hasta 3x más que las que dependen de procesos manuales. La automatización no reemplaza a tu equipo: lo potencia." },
      { type: "h2", text: "Cómo integrar todo en un sistema de crecimiento" },
      { type: "paragraph", text: "La verdadera ventaja competitiva no está en usar un canal u otro, sino en integrarlos en un sistema cohesivo:" },
      { type: "ordered-list", items: [
        "El SEO y contenido atraen tráfico cualificado a tu sitio web",
        "La publicidad digital acelera la generación de leads",
        "Los formularios y landing pages capturan información de contacto",
        "El CRM organiza y califica cada lead automáticamente",
        "Las automatizaciones envían secuencias de nurturing personalizadas",
        "Tu equipo de ventas recibe leads calientes y listos para cerrar"
      ]},
      { type: "h2", text: "Métricas que importan" },
      { type: "list", items: [
        "CAC (Costo de adquisición de cliente): ¿Cuánto cuesta conseguir un nuevo cliente?",
        "LTV (Valor de vida del cliente): ¿Cuánto genera cada cliente a lo largo del tiempo?",
        "Tasa de conversión por etapa del embudo: ¿Dónde se pierden los prospectos?",
        "ROI por canal: ¿Qué canal genera más ingresos por peso invertido?",
        "Velocidad del pipeline: ¿Cuánto tarda un lead en convertirse en cliente?"
      ]},
      { type: "paragraph", text: "En North diseñamos e implementamos sistemas de crecimiento que integran marketing, CRM y automatización. Si quieres conocer cómo podemos ayudar a tu empresa a crecer con una estrategia basada en datos, agenda una consulta con nuestro equipo." },
    ],
  },

  /* ═══════════════════════════════════════════════
     7. CRM para empresas en Cancún (FEATURED)
     ═══════════════════════════════════════════════ */
  {
    slug: "crm-para-empresas-en-cancun",
    url: "/crm-para-empresas-en-cancun",
    title: "CRM para empresas en Cancún: por qué lo necesitas y cómo mejora tus ventas",
    seoTitle: "CRM para empresas en Cancún | North",
    excerpt: "Descubre por qué las empresas en Cancún necesitan un CRM, cómo mejora sus ventas y qué considerar al elegir e implementar uno en tu negocio.",
    category: "crm",
    categoryLabel: "CRM & Ventas",
    tags: ["CRM", "Cancún", "Ventas", "Automatización", "HubSpot", "Empresas"],
    date: "14 Mar 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: true,
    content: [
      { type: "paragraph", text: "En Cancún y la Riviera Maya, miles de empresas compiten por la atención de clientes locales y turistas. Pero muchas siguen gestionando sus ventas con hojas de cálculo, WhatsApp y notas en papel. Un CRM (Customer Relationship Management) transforma la manera en que manejas tus relaciones comerciales — y puede ser la diferencia entre crecer o estancarte." },
      { type: "h2", text: "El problema: cómo venden la mayoría de las empresas en Cancún" },
      { type: "paragraph", text: "El patrón es común: los leads llegan por WhatsApp, redes sociales, llamadas y formularios web. Se anotan en diferentes lugares, no hay seguimiento consistente y se pierden oportunidades constantemente. El equipo de ventas no tiene visibilidad de su pipeline y la gerencia no puede medir el rendimiento real." },
      { type: "list", items: [
        "El 40% de los leads nunca recibe un segundo contacto de seguimiento",
        "Los tiempos de respuesta superan las 24 horas en muchos casos",
        "No hay forma de saber cuántos leads se convierten en clientes reales",
        "La información de clientes se pierde cuando un vendedor se va",
        "No existe un proceso estandarizado de ventas"
      ]},
      { type: "h2", text: "¿Qué es un CRM y cómo funciona?" },
      { type: "paragraph", text: "Un CRM es un sistema que centraliza toda la información de tus clientes y prospectos en un solo lugar. Te permite hacer seguimiento a cada interacción, automatizar tareas repetitivas, medir el rendimiento de tu equipo y tomar decisiones basadas en datos reales — no en intuición." },
      { type: "h2", text: "Beneficios concretos de un CRM para tu empresa" },
      { type: "ordered-list", items: [
        "Seguimiento automático: Cada lead recibe una respuesta inmediata y entra a un flujo de seguimiento automatizado",
        "Pipeline visual: Ve en tiempo real cuántos prospectos tienes en cada etapa del proceso de venta",
        "Reportes y métricas: Mide la productividad de tu equipo, las tasas de conversión y el valor del pipeline",
        "Historial completo: Toda la conversación con cada cliente está en un solo lugar, accesible para todo el equipo",
        "Automatización de tareas: Reduce el trabajo manual y enfoca a tu equipo en cerrar ventas",
        "Pronósticos de venta: Predice tus ingresos con base en datos reales del pipeline"
      ]},
      { type: "h2", text: "¿Qué industrias se benefician más en Cancún?" },
      { type: "paragraph", text: "Cualquier empresa que genere leads y tenga un proceso de venta se beneficia de un CRM. Pero en Cancún, estas industrias ven resultados especialmente fuertes:" },
      { type: "list", items: [
        "Inmobiliarias y desarrolladoras: Pipeline largos con múltiples interacciones antes del cierre",
        "Hoteles y tours: Gestión de reservaciones, grupos y cuentas corporativas",
        "Clínicas y servicios médicos: Seguimiento a pacientes y programación de citas",
        "Agencias de marketing y publicidad: Gestión de clientes y proyectos",
        "Empresas de servicios profesionales: Consultoría, legal, contabilidad"
      ]},
      { type: "quote", text: "No es cuestión de tamaño. Empresas desde 3 hasta 300 empleados pueden transformar sus ventas con el CRM correcto bien implementado." },
      { type: "h2", text: "Cómo elegir el CRM correcto" },
      { type: "paragraph", text: "No todos los CRM son iguales. Para empresas en Cancún recomendamos considerar: facilidad de uso (tu equipo debe adoptarlo rápidamente), integraciones con WhatsApp y redes sociales, soporte en español, precio escalable y capacidad de automatización. Puedes profundizar en nuestra guía de cómo elegir el CRM correcto." },
      { type: "h2", text: "La implementación importa tanto como la herramienta" },
      { type: "paragraph", text: "El 60% de las implementaciones de CRM fallan por falta de estrategia, no por problemas técnicos. Un CRM mal configurado o sin adopción del equipo es dinero perdido. Por eso, en North no solo implementamos la herramienta: diseñamos el proceso de ventas, capacitamos al equipo y configuramos automatizaciones que generan resultados desde el primer mes." },
      { type: "paragraph", text: "Si tu empresa en Cancún está lista para profesionalizar sus ventas, explora nuestra solución de CRM para empresas o agenda una consulta gratuita con nuestro equipo." },
    ],
  },

  /* ═══════════════════════════════════════════════
     8. Automatización de ventas
     ═══════════════════════════════════════════════ */
  {
    slug: "automatizacion-de-ventas-para-empresas",
    url: "/automatizacion-de-ventas-para-empresas",
    title: "Automatización de ventas para empresas: guía para escalar tu operación",
    seoTitle: "Automatización de ventas para empresas | North",
    excerpt: "Cómo la automatización de ventas mejora la conversión, el seguimiento y la escalabilidad de tu empresa. Estrategias, herramientas y casos prácticos.",
    category: "automatizacion",
    categoryLabel: "Automatización",
    tags: ["Automatización", "Ventas", "CRM", "Productividad", "Escalabilidad", "Tecnología"],
    date: "13 Mar 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: false,
    content: [
      { type: "paragraph", text: "La automatización de ventas no es un lujo para grandes corporaciones — es una necesidad para cualquier empresa que quiera crecer sin multiplicar su equipo. Automatizar tareas repetitivas, seguimientos y procesos de calificación permite a tu equipo enfocarse en lo que realmente importa: cerrar ventas." },
      { type: "h2", text: "¿Qué es la automatización de ventas?" },
      { type: "paragraph", text: "Es el uso de tecnología para ejecutar automáticamente tareas del proceso de ventas que antes requerían intervención manual. Desde enviar un email de seguimiento hasta asignar un lead al vendedor correcto, la automatización elimina la fricción y acelera el ciclo de ventas." },
      { type: "h2", text: "El costo de no automatizar" },
      { type: "paragraph", text: "Las empresas que dependen de procesos manuales enfrentan problemas predecibles:" },
      { type: "list", items: [
        "Los vendedores dedican solo el 35% de su tiempo a vender — el resto es administrativo",
        "El tiempo de respuesta a nuevos leads supera las 5 horas en promedio",
        "El 50% de los leads nunca recibe un seguimiento adecuado",
        "La información se pierde entre emails, WhatsApp y notas personales",
        "Escalar requiere contratar más personas en lugar de optimizar procesos"
      ]},
      { type: "quote", text: "Automatizar no es reemplazar a tu equipo. Es liberarlo de tareas repetitivas para que pueda dedicar su talento a lo que genera ingresos." },
      { type: "h2", text: "Qué puedes automatizar en tu proceso de ventas" },
      { type: "h3", text: "Captura y distribución de leads" },
      { type: "paragraph", text: "Cada lead que entra (formulario, WhatsApp, redes sociales) se registra automáticamente en tu CRM, se califica con un score basado en sus datos y se asigna al vendedor más adecuado según reglas predefinidas." },
      { type: "h3", text: "Seguimiento automatizado" },
      { type: "paragraph", text: "Secuencias de emails y mensajes que se disparan automáticamente según el comportamiento del lead. Si no responde en 24 horas, recibe un recordatorio. Si visita tu página de precios, el vendedor recibe una alerta." },
      { type: "h3", text: "Calificación de leads (Lead Scoring)" },
      { type: "paragraph", text: "Asigna puntos automáticamente basándote en el perfil del lead y su interacción con tu contenido. Tu equipo solo invierte tiempo en los prospectos con mayor probabilidad de cierre." },
      { type: "h3", text: "Reportes y pronósticos" },
      { type: "paragraph", text: "Dashboards que se actualizan en tiempo real mostrando el estado del pipeline, tasas de conversión por etapa y pronósticos de cierre. La gerencia tiene visibilidad completa sin pedir reportes manuales." },
      { type: "h2", text: "Herramientas de automatización más utilizadas" },
      { type: "list", items: [
        "HubSpot: CRM + automatización todo-en-uno, ideal para empresas en crecimiento",
        "ActiveCampaign: Potente en email automation y scoring a precios accesibles",
        "Zapier / Make: Conectan cientos de herramientas sin necesidad de programar",
        "WhatsApp Business API: Automatiza respuestas y seguimientos por WhatsApp",
        "Calendly: Automatiza la programación de llamadas y demos"
      ]},
      { type: "h2", text: "Cómo implementar automatización paso a paso" },
      { type: "ordered-list", items: [
        "Mapea tu proceso de ventas actual e identifica cuellos de botella",
        "Prioriza: empieza automatizando la captura de leads y el primer contacto",
        "Elige un CRM que soporte automatización nativa",
        "Configura flujos simples primero y complejiza gradualmente",
        "Capacita a tu equipo y mide la adopción",
        "Optimiza basándote en datos: tasa de respuesta, velocidad del pipeline, conversión"
      ]},
      { type: "h2", text: "Resultados reales de automatizar ventas" },
      { type: "paragraph", text: "Las empresas que implementan automatización de ventas correctamente reportan resultados significativos: reducción del 60% en tareas administrativas, aumento del 30% en productividad del equipo de ventas, mejora del 45% en tasas de conversión de lead a cliente, y reducción del 50% en tiempo de respuesta a nuevos leads." },
      { type: "paragraph", text: "En North diseñamos e implementamos sistemas de automatización que se integran con tu CRM y tu estrategia de marketing digital. El objetivo es crear una máquina de ventas predecible y escalable. Conoce nuestras soluciones de CRM y automatización o agenda una consulta con nuestro equipo." },
    ],
  },

  /* ═══════════════════════════════════════════════
     9. Cómo generar leads en Cancún (FEATURED)
     ═══════════════════════════════════════════════ */
  {
    slug: "como-generar-leads-para-mi-empresa-en-cancun",
    url: "/como-generar-leads-para-mi-empresa-en-cancun",
    title: "Cómo generar leads para tu empresa en Cancún: estrategias prácticas",
    seoTitle: "Cómo generar leads para tu empresa en Cancún | North",
    excerpt: "Estrategias probadas para generar clientes potenciales en Cancún: SEO, publicidad, funnels, CRM y automatización para convertir visitantes en ventas.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    tags: ["Leads", "Cancún", "Generación de Leads", "CRM", "Funnels", "Marketing Digital"],
    date: "16 Mar 2025",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    featured: true,
    content: [
      { type: "paragraph", text: "Generar leads (clientes potenciales) es el combustible de cualquier empresa. Sin un flujo constante de prospectos calificados, el crecimiento se detiene. En Cancún y la Riviera Maya, donde la competencia es intensa en prácticamente todos los sectores, dominar la generación de leads es una ventaja competitiva real." },
      { type: "h2", text: "¿Qué es un lead y por qué importa la calidad?" },
      { type: "paragraph", text: "Un lead es una persona que ha mostrado interés en tu producto o servicio y te ha dado sus datos de contacto. Pero no todos los leads son iguales: un lead calificado es alguien que tiene el perfil, la necesidad y la capacidad de comprar. Generar muchos leads de baja calidad es un desperdicio de recursos. El objetivo es generar leads que realmente se conviertan en clientes." },
      { type: "h2", text: "Las 5 estrategias más efectivas para generar leads en Cancún" },
      { type: "h3", text: "1. SEO local: que te encuentren cuando te buscan" },
      { type: "paragraph", text: "Cuando alguien busca en Google 'dentista en Cancún', 'inmobiliaria en Playa del Carmen' o 'tour en la Riviera Maya', debe encontrar tu negocio. El SEO local posiciona tu sitio web y tu perfil de Google Business para estas búsquedas de alta intención. Profundiza en nuestra guía de SEO en Cancún." },
      { type: "h3", text: "2. Publicidad digital segmentada" },
      { type: "paragraph", text: "Google Ads captura demanda existente (personas buscando activamente). Meta Ads (Facebook/Instagram) genera demanda nueva mostrando tu oferta a audiencias segmentadas. La combinación de ambos canales crea un flujo de leads predecible y escalable." },
      { type: "h3", text: "3. Funnels de conversión optimizados" },
      { type: "paragraph", text: "Un funnel es el recorrido que hace un prospecto desde que te descubre hasta que se convierte en cliente. Cada etapa debe estar optimizada: landing pages que conviertan, formularios simples, ofertas irresistibles y secuencias de seguimiento automatizadas." },
      { type: "list", items: [
        "Landing page con propuesta de valor clara y un solo call-to-action",
        "Lead magnet (guía, diagnóstico gratuito, cotización) que aporte valor real",
        "Formulario corto que capture solo la información necesaria",
        "Página de agradecimiento con siguiente paso claro",
        "Secuencia de email/WhatsApp de seguimiento automatizada"
      ]},
      { type: "h3", text: "4. Marketing de contenido que atrae y educa" },
      { type: "paragraph", text: "Crear contenido valioso (artículos, videos, guías) posiciona tu marca como experta y atrae tráfico orgánico de personas interesadas en tu área. Cada pieza de contenido debe incluir un call-to-action que capture leads." },
      { type: "h3", text: "5. CRM + automatización para no perder ni un lead" },
      { type: "paragraph", text: "Generar leads es solo la mitad del trabajo. Si no tienes un sistema para registrar, calificar y dar seguimiento a cada prospecto, estás tirando dinero. Un CRM conectado con automatización de seguimiento es lo que convierte leads en ventas reales. Conoce nuestra solución de CRM para empresas." },
      { type: "h2", text: "El error más costoso: generar leads sin sistema de seguimiento" },
      { type: "paragraph", text: "Hemos visto empresas invertir miles de pesos en publicidad para generar leads que luego se pierden en un WhatsApp sin respuesta o en una hoja de Excel olvidada. El problema no es la generación — es la gestión." },
      { type: "quote", text: "Cada lead que no contestas en los primeros 5 minutos tiene un 80% menos de probabilidad de convertirse en cliente. La velocidad de respuesta es tu ventaja competitiva." },
      { type: "h2", text: "Métricas de generación de leads que debes medir" },
      { type: "ordered-list", items: [
        "Costo por lead (CPL): ¿Cuánto te cuesta generar cada prospecto?",
        "Tasa de conversión de visitante a lead: ¿Qué porcentaje de visitantes se convierte en prospecto?",
        "Tasa de conversión de lead a cliente: ¿Cuántos prospectos se convierten en ventas?",
        "Tiempo de respuesta promedio: ¿Cuánto tardas en contactar a un nuevo lead?",
        "ROI por canal: ¿Qué canal genera leads que realmente compran?"
      ]},
      { type: "h2", text: "Un sistema integrado de generación de clientes" },
      { type: "paragraph", text: "La generación de leads más efectiva no depende de un solo canal — es un sistema integrado donde cada pieza trabaja en conjunto. El SEO atrae tráfico orgánico. La publicidad acelera la generación. Los funnels convierten visitantes en leads. El CRM organiza y califica. La automatización da seguimiento. Tu equipo de ventas cierra." },
      { type: "paragraph", text: "En North diseñamos estos sistemas completos para empresas en Cancún y la Riviera Maya. Desde la estrategia de marketing digital hasta la implementación de CRM y automatización — todo conectado para que cada peso invertido genere el máximo retorno. Agenda una consulta con nuestro equipo para diseñar tu sistema de generación de clientes." },
    ],
  },
];

/* ─── Helper: find article by slug ─── */
export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

/* ─── Helper: get featured articles ─── */
export const getFeaturedArticles = (): Article[] =>
  articles.filter((a) => a.featured);

/* ─── Helper: get articles for listing (excludes content for perf) ─── */
export type ArticleMeta = Omit<Article, "content">;
export const getArticlesMeta = (): ArticleMeta[] =>
  articles.map(({ content, ...meta }) => meta);
