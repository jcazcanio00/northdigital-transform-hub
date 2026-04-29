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

const WhatsAppGlyph = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

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
    title: "Diseño + Desarrollo",
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
  <div className="group relative mx-auto w-full max-w-[700px] animate-hero-slide-up lg:max-w-none lg:[perspective:1400px]">
    <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-primary/10 opacity-80 blur-[52px] transition-opacity duration-500 group-hover:opacity-100" />
    <div className="glass-card relative overflow-visible rounded-2xl border border-border/60 shadow-2xl transition-transform duration-500 lg:rotate-[-1.5deg] lg:[transform-style:preserve-3d] lg:group-hover:rotate-0">
      <div className="overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-border/30 bg-muted/25 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-primary/55" />
            <span className="h-3 w-3 rounded-full bg-accent/45" />
            <span className="h-3 w-3 rounded-full bg-primary/25" />
          </div>
          <div className="mx-auto hidden rounded-full border border-border/50 bg-background/70 px-5 py-1 text-[10px] font-medium text-muted-foreground sm:block">
            casamare.mx · experiencia lista para convertir
          </div>
        </div>

        <div className="relative bg-background p-3 sm:p-5">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-[0_24px_80px_-40px_hsl(var(--primary)/0.65)]">
            <div className="absolute inset-0 bg-dot-grid opacity-15" />
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />

            <div className="relative z-10 flex items-center justify-between border-b border-border/45 bg-background/72 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <span className="h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.65)]" />
                </div>
                <span className="font-display text-xs font-extrabold tracking-tight sm:text-sm">Casa Maré</span>
              </div>
              <nav className="hidden items-center gap-5 text-[11px] font-semibold text-muted-foreground md:flex">
                <span>Suites</span>
                <span>Experiencias</span>
                <span>Ubicación</span>
              </nav>
              <div className="rounded-lg bg-primary px-4 py-2 text-[10px] font-bold text-primary-foreground sm:text-xs">
                Reservar
              </div>
            </div>

            <div className="relative z-10 grid min-h-[450px] lg:grid-cols-[1.04fr_0.96fr]">
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-status-pulse" />
                  Boutique stay · Tulum
                </div>
                <h3 className="max-w-[390px] text-3xl font-extrabold leading-tight text-foreground font-display sm:text-4xl">
                  Hospedaje privado frente al Caribe
                </h3>
                <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-muted-foreground">
                  Suites con concierge, experiencias locales y reserva directa para viajeros que comparan antes de decidir.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-lg bg-primary px-5 py-3 text-[11px] font-bold text-primary-foreground shadow-[0_18px_40px_-22px_hsl(var(--primary)/0.8)]">Consultar fechas</div>
                  <div className="rounded-lg border border-border bg-background/80 px-5 py-3 text-[11px] font-bold text-foreground">Ver suites</div>
                </div>
                <div className="mt-8 grid max-w-[360px] grid-cols-3 gap-3 border-t border-border/50 pt-5">
                  <div>
                    <div className="font-display text-lg font-extrabold text-foreground">4.9</div>
                    <div className="text-[10px] font-medium text-muted-foreground">reviews</div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-extrabold text-foreground">24h</div>
                    <div className="text-[10px] font-medium text-muted-foreground">respuesta</div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-extrabold text-foreground">+37%</div>
                    <div className="text-[10px] font-medium text-muted-foreground">reservas</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center border-t border-border/50 bg-muted/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
                <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
                <div className="relative w-full space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/25 via-accent/15 to-muted">
                      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-border/40 bg-background/80 p-4 shadow-2xl">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-bold font-display">Suite Ocean View</span>
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-[9px] font-bold text-primary">Disponible</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="rounded-lg bg-muted/70 px-2 py-2 text-center text-[9px] font-semibold text-muted-foreground">Spa</span>
                          <span className="rounded-lg bg-muted/70 px-2 py-2 text-center text-[9px] font-semibold text-muted-foreground">Vista mar</span>
                          <span className="rounded-lg bg-muted/70 px-2 py-2 text-center text-[9px] font-semibold text-muted-foreground">Transfer</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-border/50 border-t border-border/50">
                      <div className="p-4">
                        <Shield size={17} className="mb-3 text-primary" />
                        <div className="text-xs font-bold font-display">Confianza</div>
                        <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">Prueba social visible.</p>
                      </div>
                      <div className="p-4">
                        <MessageSquare size={17} className="mb-3 text-primary" />
                        <div className="text-xs font-bold font-display">Conversión</div>
                        <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">CTA directo a reserva.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-20 z-20 hidden rounded-2xl border border-primary/20 bg-background/90 p-4 shadow-2xl shadow-primary/10 md:block">
        <div className="text-[10px] font-semibold uppercase text-muted-foreground">conversiones</div>
        <div className="mt-1 font-display text-2xl font-extrabold text-primary">+128%</div>
        <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[78%] rounded-full bg-primary" />
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
                  Crear páginas web que comuniquen, generen confianza y conviertan visitas en oportunidades reales.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button variant="gradient" size="lg" className="px-8 py-6 text-base" asChild>
                    <Link to="/contacto">
                      Solicitar página web <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  <Button variant="gradient-outline" size="lg" className="px-8 py-6 text-base" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <WhatsAppGlyph size={16} /> Hablar por WhatsApp
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
                  <WhatsAppGlyph size={16} /> Hablar por WhatsApp
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

        <section className="relative min-h-0 overflow-hidden py-12 md:min-h-[560px] md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <SectionBadge>Proceso</SectionBadge>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                Roadmap para construir una web con dirección
              </h2>
              <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
                Un proceso consultivo para pasar de una idea comercial a una página clara, premium y lista para convertir.
              </p>
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/45 to-primary/10 md:left-1/2" />
              <div className="space-y-8 md:space-y-12">
                {process.map((step, index) => (
                  <article key={step.title} className="relative grid gap-6 pl-20 md:grid-cols-[1fr_96px_1fr] md:items-center md:gap-8 md:pl-0">
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-3"}`}>
                      <div className="glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_60px_-16px_hsl(var(--primary)/0.35)] md:p-8">
                        <div className={`mb-5 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <step.icon size={22} className="text-primary" />
                          <h3 className="text-xl font-bold font-display md:text-2xl">{step.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 top-1 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-background font-display text-base font-extrabold text-primary shadow-[0_0_46px_-12px_hsl(var(--primary)/0.45)] md:static md:h-20 md:w-20">
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
                  <WhatsAppGlyph size={16} /> Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-14 md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
                <div className="mb-4 flex justify-center">
                  <SectionBadge>FAQ</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">Preguntas antes de cotizar</h2>
                <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
                  Respuestas directas sobre alcance, tiempos, administración y preparación para SEO antes de iniciar un proyecto web.
                </p>
              </div>
              <Accordion type="single" collapsible className="mx-auto grid max-w-3xl gap-5">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border border-border/60 px-5 py-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_45px_-18px_hsl(var(--primary)/0.3)] md:px-7"
                  >
                    <AccordionTrigger className="py-6 text-left text-base font-bold font-display hover:text-primary hover:no-underline md:text-lg">
                      <span className="pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
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
