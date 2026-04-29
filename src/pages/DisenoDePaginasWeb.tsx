import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  Gauge,
  Layers3,
  Lightbulb,
  MapPin,
  MessageSquare,
  MousePointerClick,
  Rocket,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
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

const solutions = [
  {
    icon: MousePointerClick,
    title: "Claridad desde el primer scroll",
    description: "El visitante entiende qué vendes, por qué confiar y cuál es el siguiente paso sin tener que buscar demasiado.",
    tag: "Mensaje",
  },
  {
    icon: Smartphone,
    title: "Experiencia mobile-first",
    description: "Diseño pensado para usuarios que comparan, deciden y contactan desde celular en mercados competitivos.",
    tag: "UX",
  },
  {
    icon: Workflow,
    title: "Contacto sin fricción",
    description: "CTAs, WhatsApp y formularios ubicados donde aportan valor, no como elementos decorativos.",
    tag: "Tech",
  },
];

const functionCards = [
  {
    icon: Shield,
    title: "Confianza antes que decoración",
    desc: "Una página efectiva reduce dudas: muestra autoridad, explica el servicio y presenta la marca con orden profesional.",
  },
  {
    icon: Layers3,
    title: "Contenido con intención comercial",
    desc: "Cada bloque debe ayudar a tomar una decisión: entender, comparar, confiar o contactar.",
  },
  {
    icon: Gauge,
    title: "Rendimiento que sostiene campañas",
    desc: "Una web lenta o confusa desperdicia tráfico. Construimos una base rápida, clara y preparada para medir.",
  },
  {
    icon: Search,
    title: "Estructura lista para crecer",
    desc: "Dejamos una arquitectura ordenada para trabajar SEO, nuevas secciones, campañas e integraciones después.",
  },
];

const cities = [
  { city: "Cancún", desc: "Para empresas turísticas, servicios profesionales, real estate y marcas que necesitan verse confiables desde el primer contacto." },
  { city: "Playa del Carmen", desc: "Para negocios en crecimiento que requieren una presencia digital moderna, clara y lista para campañas." },
  { city: "Tulum", desc: "Para proyectos boutique, wellness, hospitality y experiencias de alto valor que dependen de percepción premium." },
];

const process = [
  { icon: Compass, title: "Diagnóstico", desc: "Entendemos tu oferta, tus clientes y el contexto competitivo de Cancún, Playa del Carmen o Tulum." },
  { icon: Lightbulb, title: "Dirección", desc: "Definimos narrativa, secciones, jerarquía visual y acciones clave antes de diseñar pantallas." },
  { icon: Code2, title: "Producción", desc: "Diseñamos y construimos una experiencia responsive con criterios de claridad, velocidad y confianza." },
  { icon: Rocket, title: "Lanzamiento", desc: "Publicamos una web lista para recibir tráfico, medir comportamiento y conectar próximos sistemas." },
];

const faqs = [
  { q: "¿Cuánto tarda una página web?", a: "Depende del alcance, pero una landing o sitio institucional bien definido normalmente avanza por etapas: diagnóstico, estructura, diseño, desarrollo, revisión y lanzamiento. Desde el inicio dejamos claro qué se entrega y en qué tiempos." },
  { q: "¿Qué incluye exactamente?", a: "Incluye estructura de contenido, diseño responsive, desarrollo web, CTAs de contacto, conexión a WhatsApp o formulario, criterios de rendimiento y una base ordenada para medición, campañas y crecimiento posterior." },
  { q: "¿La puedo administrar yo?", a: "Sí, si el proyecto lo requiere podemos plantear una estructura administrable. En otros casos conviene una web más ligera y controlada para mantener velocidad, consistencia visual y menor mantenimiento." },
  { q: "¿Funciona para SEO?", a: "Sí. Se construye con una base técnica ordenada para SEO: estructura clara, contenido jerarquizado, rendimiento y buenas prácticas. El posicionamiento continuo puede trabajarse después como estrategia de contenido y optimización." },
  { q: "¿También sirve para Cancún, Playa del Carmen y Tulum?", a: "Sí. La página se plantea para empresas de la región que necesitan competir por confianza, explicar su propuesta con claridad y convertir visitas locales o de campañas en contactos reales." },
];

const HeroMockup = () => (
  <div className="relative mx-auto w-full max-w-[680px] animate-hero-slide-up lg:max-w-5xl">
    <div className="hidden lg:block absolute -inset-12 rounded-[40px] bg-primary/8 blur-[40px] pointer-events-none" />
    <div className="absolute -right-2 top-10 z-20 hidden rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl md:block animate-float-slow">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <MessageSquare size={19} className="text-primary" />
        </div>
        <div>
          <div className="font-display text-base font-extrabold">Cotiza hoy</div>
          <div className="text-xs text-muted-foreground">CTA visible</div>
        </div>
      </div>
    </div>
    <div className="absolute -left-3 bottom-12 z-20 hidden rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl lg:block animate-float-delayed">
      <div className="flex items-center gap-2 text-xs font-semibold">
        <Shield size={16} className="text-primary" />
        Marca confiable desde el primer vistazo
      </div>
    </div>

    <div className="glass-card relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/30 bg-muted/20 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-primary/35" />
        <span className="ml-auto hidden rounded-md bg-muted/40 px-3 py-1 text-[10px] font-medium text-muted-foreground sm:block">empresa.com.mx</span>
      </div>

      <div className="bg-background p-3 sm:p-5">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
          <div className="relative z-10 flex items-center justify-between border-b border-border/50 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary/10" />
              <div className="h-2.5 w-24 rounded-full bg-foreground/20" />
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <div className="h-2 w-14 rounded-full bg-muted-foreground/25" />
              <div className="h-2 w-16 rounded-full bg-muted-foreground/25" />
              <div className="h-2 w-12 rounded-full bg-muted-foreground/25" />
            </div>
            <div className="h-9 w-28 rounded-full bg-primary" />
          </div>

          <div className="relative z-10 grid min-h-[420px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="mb-5 h-3 w-32 rounded-full bg-primary/25" />
              <div className="space-y-3">
                <div className="h-10 w-full max-w-[430px] rounded-xl bg-foreground/90" />
                <div className="h-10 w-10/12 rounded-xl bg-foreground/70" />
                <div className="h-10 w-7/12 rounded-xl bg-foreground/45" />
              </div>
              <div className="mt-7 max-w-[420px] space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-muted-foreground/25" />
                <div className="h-2.5 w-9/12 rounded-full bg-muted-foreground/18" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="h-11 w-36 rounded-xl bg-primary" />
                <div className="h-11 w-32 rounded-xl border border-border bg-background" />
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-border/50 bg-muted/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative grid h-full content-center gap-4">
                <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
                  <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-primary/18 via-accent/10 to-muted" />
                  <div className="space-y-2">
                    <div className="h-3 w-8/12 rounded-full bg-foreground/25" />
                    <div className="h-2.5 w-full rounded-full bg-muted-foreground/18" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Servicios", Layers3],
                    ["Reseñas", Shield],
                    ["Ubicación", MapPin],
                    ["Contacto", MessageSquare],
                  ].map(([label, Icon]) => (
                    <div key={label as string} className="rounded-xl border border-border/60 bg-background p-3">
                      <Icon size={17} className="mb-2 text-primary" />
                      <div className="text-[11px] font-bold">{label as string}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
          <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary/8 blur-[60px] pointer-events-none will-change-transform" />
          <div className="hidden lg:block absolute top-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-primary/5 blur-[50px] pointer-events-none will-change-transform" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16 animate-hero-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Diseño de páginas web
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 md:mb-6 text-balance font-display">
                Diseña, Conecta y <span className="gradient-text">Convierte</span> con tu Web.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
                Creamos páginas web para empresas en Cancún, Playa del Carmen y Tulum que funcionan como infraestructura comercial: conversión, sistemas, confianza y crecimiento.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <Link to="/contacto">Cotizar mi página web <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
                <Button variant="gradient-outline" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageSquare size={16} /> Hablar por WhatsApp</a>
                </Button>
              </div>
            </div>

            <HeroMockup />
          </div>
        </section>

        <section className="py-12 md:py-24 relative min-h-0 md:min-h-[480px]">
          <div className="section-divider" />
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Lo Que Hacemos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
                Páginas web diseñadas para <span className="gradient-text">vender</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Diseño profesional, tecnología y estructura comercial para empresas que quieren generar confianza, contactos y crecimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {solutions.map((s) => (
                <article
                  key={s.title}
                  className="glass-card rounded-2xl p-7 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)] hover:border-primary/25 relative overflow-hidden block"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">
                        <s.icon size={22} className="text-primary" />
                      </div>
                      <span className="text-[9px] uppercase tracking-wider font-medium text-primary/60 px-2.5 py-1 rounded-full border border-primary/15 bg-primary/5">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-display transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="section-divider mt-8" />
        </section>

        <section className="py-12 md:py-20 relative overflow-hidden min-h-0 md:min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Propuesta de Valor
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-5">
                Diseño web conectado a <span className="gradient-text">crecimiento</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-6 items-center">
              <div className="lg:pl-4">
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  North no construye páginas aisladas. Creamos interfaces comerciales integradas a la estrategia digital, preparadas para campañas, medición, automatización y confianza.
                </p>
                <div className="space-y-5">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                        <f.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">{f.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {serviceCards.map((card) => (
                  <article key={card.title} className="glass-card rounded-2xl p-6 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-500">
                      <card.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-display group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-navy-foreground/15 bg-brand-navy-foreground/10 text-xs text-brand-navy-foreground/75 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                  Conversión y Sistemas
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display leading-tight text-brand-navy-foreground">
                  Una web no debe verse bonita solamente. Debe integrarse a tu crecimiento.
                </h2>
                <p className="text-brand-navy-foreground/65 text-base leading-relaxed max-w-xl">
                  La página se convierte en una pieza del sistema comercial: atrae, explica, filtra, conecta y deja lista la base para escalar con tecnología.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {conversionItems.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-brand-navy-foreground/[0.12] hover:shadow-[0_0_40px_-14px_hsl(var(--primary)/0.45)]">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary font-display text-sm font-bold ring-1 ring-primary/20">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-brand-navy-foreground/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border/60 bg-secondary/45 py-12 md:py-20">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="mb-4 lg:mb-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Presencia Regional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display leading-tight">
                Presencia digital premium para mercados que compiten por confianza
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Una presencia premium para mercados donde la confianza, velocidad y claridad comercial definen la primera decisión.
              </p>
            </div>
              <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {["Cancún", "Playa del Carmen", "Tulum"].map((city) => (
                    <div key={city} className="rounded-xl border border-border/50 bg-muted/20 px-3 py-4">
                      <MapPin size={16} className="mx-auto mb-2 text-primary" />
                      <div className="font-display text-sm font-bold">{city}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-3">
              {cities.map((item) => (
                <article key={item.city} className="glass-card rounded-2xl p-7 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25">
                  <div className="mb-5 flex items-center justify-between">
                    <MapPin size={22} className="text-primary" />
                    <span className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-primary/70">Región</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors duration-300">{item.city}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 relative min-h-0 md:min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Consultoría y Ejecución
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
                De la idea al <span className="gradient-text">lanzamiento</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Un proceso claro para convertir una necesidad comercial en una página web lista para vender, medir y escalar.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />
              <div className="space-y-12">
                {process.map((step, i) => (
                  <div
                    key={step.title}
                    className={`flex items-start gap-6 md:gap-12 group ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_50px_-8px_hsl(var(--primary)/0.4)] group-hover:scale-105">
                        <step.icon size={24} className="text-primary transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-btn flex items-center justify-center text-[10px] font-bold text-white">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl border border-border/50 bg-card/70 p-5 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-[0_0_40px_-16px_hsl(var(--primary)/0.3)]">
                      <h3 className="text-lg font-bold font-display mb-2 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
          <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[40px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-brand-navy-foreground">
                Convierte tu sitio web en una pieza real de <span className="gradient-text">crecimiento</span>
              </h2>
              <p className="text-brand-navy-foreground/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Cuéntanos qué vendes y diseñamos una experiencia clara, tecnológica y preparada para convertir visitas en oportunidades.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <Link to="/contacto">Solicitar Cotización <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-base px-8 py-3 rounded-lg border border-white/40 text-brand-navy-foreground bg-transparent font-medium transition-all duration-300 hover:bg-white hover:text-[hsl(220,50%,10%)] hover:border-white">
                  <MessageSquare size={16} /> Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-14 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12 md:mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">Preguntas frecuentes</h2>
                <p className="mx-auto max-w-xl text-muted-foreground">
                  Respuestas rápidas para entender cómo planteamos una página web como activo comercial y tecnológico.
                </p>
              </div>
              <Accordion type="single" collapsible className="glass-card rounded-2xl border border-border/60 px-4 py-2 shadow-sm md:px-6 md:py-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`item-${index}`} className="border-border/50 px-1">
                    <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:text-primary hover:no-underline md:text-lg">{faq.q}</AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:max-w-3xl">{faq.a}</AccordionContent>
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
