import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  Compass,
  FileText,
  Gauge,
  Layers3,
  Lightbulb,
  MapPin,
  MessageSquare,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeText from "@/components/MarqueeText";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20quiero%20cotizar%20una%20pagina%20web%20para%20mi%20empresa";

const benefits = [
  {
    icon: Shield,
    title: "Confianza inmediata",
    description: "Una presencia clara que explica tu oferta, eleva la percepción de tu marca y reduce dudas antes del primer contacto.",
    tag: "Marca",
  },
  {
    icon: Smartphone,
    title: "Experiencia mobile-first",
    description: "Diseño pensado para visitantes que descubren, comparan y deciden desde celular en mercados de alta competencia.",
    tag: "UX",
  },
  {
    icon: MessageSquare,
    title: "Contacto sin fricción",
    description: "CTAs, WhatsApp y formularios ubicados con intención para convertir interés en conversaciones comerciales reales.",
    tag: "Conversión",
  },
  {
    icon: Workflow,
    title: "Base para crecer",
    description: "Una web preparada para integrarse con campañas, CRM, analítica, SEO y nuevas etapas de crecimiento digital.",
    tag: "Sistema",
  },
];

const fundamentals = [
  {
    icon: FileText,
    title: "Copywriting con intención",
    description: "Mensajes que explican valor, diferencian tu servicio y llevan al usuario hacia una decisión clara.",
  },
  {
    icon: Layers3,
    title: "Estructura comercial",
    description: "Secciones ordenadas para responder preguntas, construir confianza y sostener campañas de adquisición.",
  },
  {
    icon: Gauge,
    title: "Velocidad y claridad",
    description: "Interfaz ligera, responsive y enfocada en que el visitante encuentre rápido lo que necesita.",
  },
  {
    icon: Search,
    title: "Base lista para SEO",
    description: "Jerarquía, contenido y arquitectura preparados para evolucionar hacia posicionamiento orgánico.",
  },
];

const regions = [
  {
    city: "Cancún",
    text: "Claridad inmediata para mercados con alta comparación: turismo, real estate, salud, servicios profesionales y marcas que necesitan verse confiables desde el primer contacto.",
  },
  {
    city: "Playa del Carmen",
    text: "Estructura comercial para negocios en crecimiento que dependen de campañas, reputación y una explicación rápida de su propuesta de valor.",
  },
  {
    city: "Tulum",
    text: "Presencia premium para proyectos boutique, hospitality y experiencias donde la percepción visual define confianza antes de solicitar información.",
  },
];

const process = [
  {
    icon: Compass,
    title: "Diagnóstico",
    description: "Entendemos tu oferta, mercado, cliente ideal y objetivos antes de proponer estructura o diseño.",
  },
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Definimos narrativa, jerarquía, secciones clave y acciones de conversión para la página.",
  },
  {
    icon: Layers3,
    title: "Diseño y desarrollo",
    description: "Construimos una experiencia responsive con estética premium, claridad comercial y base técnica sólida.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description: "Publicamos una web lista para recibir tráfico, generar contactos y conectar próximos sistemas.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda una página web?",
    a: "Depende del alcance, pero una página bien definida suele avanzar por etapas: diagnóstico, estructura, diseño, desarrollo, revisión y lanzamiento. Desde el inicio dejamos claro qué se entrega y en qué tiempos.",
  },
  {
    q: "¿Qué incluye exactamente?",
    a: "Incluye estrategia de estructura, diseño responsive, desarrollo web, CTAs de contacto, conexión con WhatsApp o formulario y una base preparada para campañas, medición y crecimiento posterior.",
  },
  {
    q: "¿La puedo administrar yo?",
    a: "Sí, si el proyecto lo requiere podemos plantear una estructura administrable. También podemos construir una web más ligera y controlada si la prioridad es velocidad, consistencia y menor mantenimiento.",
  },
  {
    q: "¿Funciona para SEO?",
    a: "Sí. La página se construye con jerarquía clara, contenido ordenado, buen rendimiento y estructura técnica preparada para trabajar posicionamiento después como una estrategia continua.",
  },
  {
    q: "¿Trabajan para Cancún, Playa del Carmen y Tulum?",
    a: "Sí. Diseñamos páginas web para empresas de la región que necesitan verse profesionales, explicar mejor su oferta y convertir visitas locales o de campañas en oportunidades reales.",
  },
];

const WebsiteMockup = () => (
  <div className="relative mx-auto w-full max-w-[620px] animate-hero-slide-up lg:max-w-none">
    <div className="hidden lg:block absolute -inset-10 rounded-[40px] bg-primary/8 blur-[40px] pointer-events-none" />
    <div className="glass-card relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/30 bg-muted/20 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-primary/55" />
          <span className="h-3 w-3 rounded-full bg-accent/45" />
          <span className="h-3 w-3 rounded-full bg-primary/25" />
        </div>
        <div className="mx-auto hidden rounded-md bg-muted/40 px-4 py-1 text-[10px] text-muted-foreground sm:block">
          marca.com.mx
        </div>
      </div>

      <div className="bg-background p-3 sm:p-5">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="relative z-10 flex items-center justify-between border-b border-border/50 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10" />
              <div>
                <div className="h-2.5 w-24 rounded-full bg-foreground/25" />
                <div className="mt-1.5 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
              </div>
            </div>
            <div className="hidden items-center gap-5 md:flex">
              <span className="h-2 w-14 rounded-full bg-muted-foreground/25" />
              <span className="h-2 w-16 rounded-full bg-muted-foreground/25" />
              <span className="h-2 w-12 rounded-full bg-muted-foreground/25" />
            </div>
            <div className="h-9 w-24 rounded-lg bg-primary" />
          </div>

          <div className="relative z-10 grid min-h-[420px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <div className="mb-5 h-3 w-28 rounded-full bg-primary/25" />
              <div className="space-y-3">
                <div className="h-10 w-full max-w-[360px] rounded-xl bg-foreground/90" />
                <div className="h-10 w-10/12 rounded-xl bg-foreground/70" />
                <div className="h-10 w-7/12 rounded-xl bg-foreground/45" />
              </div>
              <div className="mt-7 max-w-[380px] space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-muted-foreground/24" />
                <div className="h-2.5 w-9/12 rounded-full bg-muted-foreground/18" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="h-11 w-36 rounded-lg bg-primary" />
                <div className="h-11 w-32 rounded-lg border border-border bg-background" />
              </div>
            </div>

            <div className="relative flex items-center border-t border-border/50 bg-muted/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative w-full space-y-4">
                <div className="aspect-[4/3] rounded-2xl border border-border/60 bg-gradient-to-br from-primary/18 via-accent/10 to-muted" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/60 bg-background/80 p-4">
                    <div className="mb-3 h-8 w-8 rounded-lg bg-primary/10" />
                    <div className="h-2.5 w-20 rounded-full bg-foreground/25" />
                    <div className="mt-2 h-2 w-full rounded-full bg-muted-foreground/18" />
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/80 p-4">
                    <div className="mb-3 h-8 w-8 rounded-lg bg-primary/10" />
                    <div className="h-2.5 w-16 rounded-full bg-foreground/25" />
                    <div className="mt-2 h-2 w-full rounded-full bg-muted-foreground/18" />
                  </div>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/80 p-4">
                  <div className="mb-3 h-2.5 w-24 rounded-full bg-foreground/25" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-lg bg-muted/60" />
                    <div className="h-14 rounded-lg bg-muted/60" />
                    <div className="h-14 rounded-lg bg-primary/12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SectionBadge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-muted-foreground">
    <span className="h-2 w-2 rounded-full bg-primary animate-status-pulse" />
    {children}
  </span>
);

const DisenoDePaginasWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Diseño de Páginas Web | North"
        description="Diseño de páginas web premium para empresas en Cancún, Playa del Carmen y Tulum. Landing pages y sitios modernos enfocados en conversión."
        url="https://northmkt.com.mx/diseno-de-paginas-web/"
        keywords="diseño de páginas web, diseño web cancún, páginas web playa del carmen, diseño web tulum"
      />
      <Header />

      <main>
        <section className="relative flex min-h-0 items-center overflow-hidden pb-8 pt-6 md:min-h-[calc(100vh-72px)] md:pb-16 md:pt-16">
          <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="hidden lg:block absolute top-[40%] left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] pointer-events-none will-change-transform" />
          <div className="hidden lg:block absolute top-[5%] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-[50px] pointer-events-none will-change-transform" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
              <div className="animate-hero-fade-in text-center lg:text-left">
                <div className="mb-8">
                  <SectionBadge>Diseño de páginas web</SectionBadge>
                </div>
                <h1 className="mb-4 text-3xl font-extrabold leading-[1.05] text-balance font-display sm:text-5xl lg:text-6xl xl:text-7xl md:mb-6">
                  Diseña, Conecta y <span className="gradient-text">Convierte</span> con tu Web
                </h1>
                <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-10 md:text-lg lg:mx-0">
                  Creamos páginas web para empresas en Cancún, Playa del Carmen y Tulum que comunican mejor, generan confianza y convierten visitas en conversaciones comerciales.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button variant="gradient" size="lg" className="px-8 py-6 text-base" asChild>
                    <Link to="/contacto">
                      Solicitar página web <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  <Button variant="gradient-outline" size="lg" className="px-8 py-6 text-base" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageSquare size={16} /> Hablar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <WebsiteMockup />
            </div>
          </div>
        </section>

        <section className="relative min-h-0 py-12 md:min-h-[480px] md:py-24">
          <div className="section-divider" />
          <div className="container mx-auto px-4 py-4 lg:px-8">
            <div className="mb-14 text-center">
              <div className="mb-4">
                <SectionBadge>Lo Que Hacemos</SectionBadge>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold font-display sm:text-4xl lg:text-5xl">
                Páginas web diseñadas para <span className="gradient-text">vender</span>
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Diseño, tecnología y estructura comercial para marcas que necesitan verse confiables y convertir mejor.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="glass-card group relative block overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/25 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)]">
                        <item.icon size={22} className="text-primary" />
                      </div>
                      <span className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-primary/60">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold font-display transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="section-divider mt-8" />
        </section>

        <section className="relative min-h-0 overflow-hidden py-12 md:min-h-[560px] md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <div className="mb-4">
                  <SectionBadge>Criterio Comercial</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Lo que hace que una web <span className="gradient-text">funcione</span>
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
                  Una página web premium no depende de adornos. Depende de claridad, intención, velocidad y una estructura capaz de convertir interés en acción.
                </p>
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/contacto">
                    Cotizar proyecto <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4">
                {fundamentals.map((item, index) => (
                  <article
                    key={item.title}
                    className="glass-card group grid gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-14px_hsl(var(--primary)/0.25)] sm:grid-cols-[auto_1fr] md:p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-500 group-hover:bg-primary/15">
                      <item.icon size={23} className="text-primary" />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-display text-xs font-extrabold text-primary/50">0{index + 1}</span>
                        <h3 className="text-xl font-bold font-display transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute left-1/2 top-1/2 h-[520px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Tu web no debe verse bien. Debe ayudar a <span className="gradient-text">vender mejor</span>.
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-brand-navy-foreground/60">
                Convertimos tu propuesta en una experiencia digital clara: qué haces, por qué confiar y cuál es el siguiente paso.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button variant="gradient" size="lg" className="px-8 py-6 text-base" asChild>
                  <Link to="/contacto">
                    Solicitar cotización <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-navy-foreground/40 bg-transparent px-8 py-3 text-base font-medium text-brand-navy-foreground transition-all duration-300 hover:border-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy"
                >
                  <MessageSquare size={16} /> Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border/60 bg-secondary/45 py-12 md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="mb-4">
                  <SectionBadge>Presencia Regional</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Páginas web que compiten en mercados reales
                </h2>
                <p className="max-w-xl leading-relaxed text-muted-foreground">
                  En la Riviera Maya, una web compite contra marcas locales, opciones internacionales y decisiones rápidas. Diseñamos páginas que explican con claridad, transmiten confianza y ayudan a que el cliente entienda por qué elegirte.
                </p>
              </div>

              <div className="glass-card overflow-hidden rounded-2xl border border-border/60 bg-background/70">
                <div className="divide-y divide-border/50">
                  {regions.map((region, index) => (
                    <div key={region.city} className="grid gap-5 p-6 transition-colors duration-300 hover:bg-primary/[0.025] sm:grid-cols-[auto_1fr] md:p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-display text-sm font-extrabold text-primary">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <MapPin size={18} className="text-primary" />
                          <h3 className="text-xl font-bold font-display">{region.city}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{region.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-0 py-12 md:min-h-[500px] md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <div className="mb-4">
                  <SectionBadge>Proceso</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  De la idea al lanzamiento, con dirección clara
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-muted-foreground lg:ml-auto">
                Un proceso consultivo para ordenar tu oferta, diseñar con intención y lanzar una página preparada para crecer.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gradient-to-b from-primary/15 via-primary/40 to-primary/15 md:block lg:left-1/2" />
              <div className="space-y-6 md:space-y-10">
                {process.map((step, index) => (
                  <article key={step.title} className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-3"}`}>
                      <div className="glass-card rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-14px_hsl(var(--primary)/0.25)] md:p-7">
                        <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <step.icon size={21} className="text-primary" />
                          <h3 className="text-xl font-bold font-display">{step.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-background font-display text-sm font-extrabold text-primary shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] md:flex">
                      0{index + 1}
                    </div>
                    <div className={`${index % 2 === 0 ? "hidden md:block" : "hidden md:col-start-1 md:row-start-1 md:block"}`} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
          <div className="hidden md:block absolute bottom-0 right-1/4 h-[200px] w-[300px] rounded-full bg-primary/6 blur-[40px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Convierte tu sitio web en una pieza real de <span className="gradient-text">crecimiento</span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-brand-navy-foreground/60">
                Cuéntanos qué vendes y diseñamos una experiencia clara, tecnológica y preparada para convertir visitas en oportunidades.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gradient" size="lg" className="px-8 py-6 text-base" asChild>
                  <Link to="/contacto">
                    Solicitar cotización <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-navy-foreground/40 bg-transparent px-8 py-3 text-base font-medium text-brand-navy-foreground transition-all duration-300 hover:border-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy"
                >
                  <MessageSquare size={16} /> Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-14 md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end md:mb-14">
                <div>
                  <div className="mb-4">
                    <SectionBadge>FAQ</SectionBadge>
                  </div>
                  <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">Preguntas antes de cotizar</h2>
                </div>
                <p className="max-w-xl leading-relaxed text-muted-foreground lg:ml-auto">
                  Respuestas directas sobre alcance, tiempos, administración y preparación para SEO antes de iniciar un proyecto web.
                </p>
              </div>
              <Accordion type="single" collapsible className="grid gap-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border border-border/60 px-5 py-1 transition-all duration-300 hover:border-primary/20 md:px-7"
                  >
                    <AccordionTrigger className="py-6 text-left text-base font-bold font-display hover:text-primary hover:no-underline md:text-xl">
                      <span className="pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:max-w-3xl md:text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default DisenoDePaginasWeb;
