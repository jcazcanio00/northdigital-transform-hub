import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  Gauge,
  Layers3,
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

const WHATSAPP_LINK =
  "https://wa.me/529982127561?text=Hola%2C%20quiero%20cotizar%20una%20pagina%20web%20para%20mi%20empresa";

const WhatsAppGlyph = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const SectionBadge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-muted-foreground">
    <span className="h-2 w-2 rounded-full bg-primary animate-status-pulse" />
    {children}
  </span>
);

const WhatsAppButton = ({ dark = false }: { dark?: boolean }) => (
  <Button
    variant="gradient-outline"
    size="lg"
    className={
      dark
        ? "border-brand-navy-foreground/30 px-8 py-6 text-base text-brand-navy-foreground hover:border-brand-navy-foreground/70 hover:bg-brand-navy-foreground/10"
        : "px-8 py-6 text-base"
    }
    asChild
  >
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
      <WhatsAppGlyph size={16} /> Hablar por WhatsApp
    </a>
  </Button>
);

const benefits = [
  {
    icon: Shield,
    title: "Confianza inmediata",
    description:
      "Una presencia clara y profesional para que tu empresa genere seguridad desde el primer vistazo.",
  },
  {
    icon: Smartphone,
    title: "Experiencia mobile-first",
    description:
      "Diseño pensado para usuarios que comparan, deciden y contactan desde el celular.",
  },
  {
    icon: MessageSquare,
    title: "Contacto sin fricción",
    description:
      "CTAs, WhatsApp y formularios visibles para convertir visitas en conversaciones comerciales.",
  },
  {
    icon: Workflow,
    title: "Base para crecer",
    description:
      "Una estructura lista para campañas, medición, SEO, CRM y siguientes etapas de crecimiento.",
  },
];

const strategyItems = [
  { icon: FileText, title: "Copywriting con intención" },
  { icon: Layers3, title: "Estructura comercial" },
  { icon: Gauge, title: "Velocidad y claridad" },
  { icon: Search, title: "SEO base" },
];

const markets = [
  {
    city: "Cancún",
    description:
      "Empresas que necesitan destacar en mercados saturados y captar clientes con decisiones rápidas.",
  },
  {
    city: "Playa del Carmen",
    description:
      "Negocios que dependen de imagen, experiencia y diferenciación frente a competencia internacional.",
  },
  {
    city: "Tulum",
    description:
      "Marcas que requieren estética, narrativa y posicionamiento aspiracional.",
  },
];

const process = [
  {
    icon: Compass,
    title: "Diagnóstico",
    description:
      "Entendemos tu negocio, tu oferta, tus clientes y el objetivo comercial de la web.",
  },
  {
    icon: FileText,
    title: "Estrategia",
    description:
      "Definimos mensaje, estructura, secciones y recorrido para guiar la decisión.",
  },
  {
    icon: Layers3,
    title: "Diseño + Desarrollo",
    description:
      "Construimos una experiencia responsive, clara, rápida y consistente con tu marca.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Publicamos la página, revisamos detalles técnicos y dejamos lista la base para crecer.",
  },
];

const faqs = [
  {
    question: "¿Cuánto tarda una página web?",
    answer:
      "Depende del alcance, pero normalmente trabajamos por etapas: diagnóstico, estructura, diseño, desarrollo, revisión y lanzamiento.",
  },
  {
    question: "¿Qué incluye exactamente?",
    answer:
      "Incluye estructura estratégica, diseño responsive, desarrollo web, llamadas a la acción, integración de contacto y base preparada para medición.",
  },
  {
    question: "¿La puedo administrar?",
    answer:
      "Sí. Podemos plantear una estructura administrable cuando el proyecto lo requiere, manteniendo orden visual y consistencia.",
  },
  {
    question: "¿Funciona para SEO?",
    answer:
      "Sí. La página se construye con jerarquía clara, estructura técnica y contenido ordenado para trabajar posicionamiento después.",
  },
  {
    question: "¿Trabajan en Cancún, Playa del Carmen y Tulum?",
    answer:
      "Sí. Diseñamos páginas web para empresas de estos mercados que necesitan competir con mejor imagen, claridad y conversión.",
  },
];

const HeroWebsiteMockup = () => (
  <div className="relative mx-auto w-full max-w-[660px] animate-fade-in lg:mx-0">
    <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-[56px]" />
    <div className="relative rounded-[1.75rem] border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.04] p-3 shadow-2xl transition-transform duration-500 hover:-translate-y-1 sm:p-4">
      <div className="overflow-hidden rounded-2xl border border-brand-navy-foreground/10 bg-background/95">
        <div className="grid min-h-[440px] bg-gradient-to-br from-background via-secondary/40 to-background sm:min-h-[500px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between border-b border-border/60 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-display text-xs font-extrabold uppercase text-foreground">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                  </span>
                  Marea Studio
                </div>
                <span className="rounded-lg border border-border bg-card px-3 py-2 text-[10px] font-bold text-muted-foreground">
                  Reservar
                </span>
              </div>

              <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase text-primary">
                Experiencia premium
              </span>
              <h3 className="max-w-sm font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                Una web que presenta valor antes de pedir contacto
              </h3>
              <p className="mt-4 max-w-[330px] text-sm leading-relaxed text-muted-foreground">
                Mensaje claro, prueba social, servicios visibles y un recorrido
                que guía la decisión sin saturar la pantalla.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Oferta", "Confianza", "CTA"].map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-3">
                  <CheckCircle2 size={13} className="mb-2 text-primary" />
                  <p className="text-[10px] font-extrabold uppercase text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-8 top-8 h-36 w-36 rounded-full bg-primary/8 blur-[45px]" />
            <div className="relative flex h-full min-h-[330px] flex-col justify-between rounded-2xl border border-border/70 bg-card p-5">
              <div className="space-y-4">
                <div className="h-44 rounded-xl bg-gradient-to-br from-primary/10 via-secondary to-background p-4">
                  <div className="flex h-full flex-col justify-end rounded-lg border border-border/60 bg-background/70 p-4">
                    <p className="text-[10px] font-bold uppercase text-primary">
                      Hero principal
                    </p>
                    <div className="mt-3 h-3 w-2/3 rounded-full bg-foreground/15" />
                    <div className="mt-2 h-3 w-1/2 rounded-full bg-foreground/10" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-background p-4">
                    <MessageSquare size={17} className="mb-3 text-primary" />
                    <p className="font-display text-sm font-extrabold text-foreground">
                      Lead directo
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      WhatsApp visible
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background p-4">
                    <Gauge size={17} className="mb-3 text-primary" />
                    <p className="font-display text-sm font-extrabold text-foreground">
                      Carga clara
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Sin fricción
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase text-muted-foreground">
                  <span>Ruta de conversión</span>
                  <span className="text-primary">Activa</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
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
        <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
          <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
          <div className="absolute inset-0 bg-dot-grid opacity-10" />
          <div className="absolute right-0 top-16 hidden h-[520px] w-[520px] rounded-full bg-primary/8 blur-[70px] lg:block" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="animate-fade-in text-center lg:text-left">
                <div className="mb-8">
                  <SectionBadge>Diseño de páginas web</SectionBadge>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-brand-navy-foreground font-display sm:text-5xl lg:text-6xl xl:text-7xl">
                  Diseña, Conecta y{" "}
                  <span className="gradient-text">Convierte</span> con tu Web
                </h1>
                <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-brand-navy-foreground/70 md:text-lg lg:mx-0">
                  Creamos páginas web para empresas en Cancún, Playa del Carmen y
                  Tulum que comunican mejor, generan confianza y convierten
                  visitas en oportunidades reales.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="px-8 py-6 text-base"
                    asChild
                  >
                    <Link to="/contacto">
                      Solicitar página web <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <WhatsAppButton dark />
                </div>
              </div>

              <HeroWebsiteMockup />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="section-divider" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background" />
          <div className="container relative z-10 mx-auto px-4 py-4 lg:px-8">
              <div className="mx-auto mb-14 max-w-4xl animate-fade-in text-center">
              <div className="mb-4 flex justify-center">
                <SectionBadge>Beneficios</SectionBadge>
              </div>
              <h2 className="mx-auto mb-5 max-w-3xl text-balance text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                Páginas web diseñadas para <span className="gradient-text">vender</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="glass-card group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)]"
                >
                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)]">
                      <benefit.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold font-display transition-colors duration-300 group-hover:text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="section-divider mt-8" />
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
          <div className="absolute inset-0 bg-dot-grid opacity-15" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div className="animate-fade-in lg:sticky lg:top-28">
                <div className="mb-4">
                  <SectionBadge>Estrategia</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Lo que hace que una web{" "}
                  <span className="gradient-text">funcione</span>
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
                  Una página funciona cuando cada sección responde una duda,
                  construye confianza y acerca al visitante al siguiente paso.
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-8 py-6 text-base"
                  asChild
                >
                  <Link to="/contacto">
                    Solicitar cotización <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {strategyItems.map((item) => (
                  <article
                    key={item.title}
                    className="glass-card group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-14px_hsl(var(--primary)/0.25)]"
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-display transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Decisión clara, lectura rápida y acción visible.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
          <div className="absolute inset-0 bg-dot-grid opacity-10" />
          <div className="absolute left-1/2 top-1/2 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] md:block" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl animate-fade-in text-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Tu web no debe verse bien. Debe ayudar a{" "}
                <span className="gradient-text">vender mejor</span>.
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-brand-navy-foreground/65">
                Convertimos tu propuesta en una experiencia digital clara: qué
                haces, por qué confiar y cuál es el siguiente paso.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-8 py-6 text-base"
                  asChild
                >
                  <Link to="/contacto">
                    Solicitar cotización <ArrowRight size={16} />
                  </Link>
                </Button>
                <WhatsAppButton dark />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border/60 py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/35 to-background" />
          <div className="absolute inset-0 bg-dot-grid opacity-15" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16">
              <div className="animate-fade-in">
                <div className="mb-4">
                  <SectionBadge>Mercados locales</SectionBadge>
                </div>
                <h2 className="mb-5 max-w-xl text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Páginas web que compiten en mercados reales
                </h2>
              </div>

              <div className="grid gap-5">
                {markets.map((market, index) => (
                  <article
                    key={market.city}
                    className="glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-14px_hsl(var(--primary)/0.25)] md:p-7"
                  >
                    <div className="relative z-10 grid gap-4 sm:grid-cols-[72px_1fr] sm:items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-extrabold text-primary transition-all duration-300 group-hover:bg-primary/15">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <MapPin size={17} className="text-primary" />
                          <h3 className="text-xl font-bold font-display transition-colors duration-300 group-hover:text-primary">
                            {market.city}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {market.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="absolute inset-0 bg-dot-grid opacity-10" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl animate-fade-in text-center md:mb-16">
              <div className="mb-4 flex justify-center">
                <SectionBadge>Proceso</SectionBadge>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                De la idea al lanzamiento, con dirección clara
              </h2>
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/45 to-primary/10" />
              <div className="space-y-10 md:space-y-12">
                {process.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative grid gap-5 md:grid-cols-[1fr_96px_1fr] md:items-center md:gap-8"
                  >
                    <div
                      className={`order-2 ${
                        index % 2 === 0
                          ? "md:order-1 md:text-right"
                          : "md:order-3 md:col-start-3"
                      }`}
                    >
                      <div className="glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_60px_-16px_hsl(var(--primary)/0.35)] md:p-8">
                        <div
                          className={`relative z-10 mb-4 flex items-center gap-3 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <step.icon size={22} className="text-primary" />
                          <h3 className="text-xl font-bold font-display md:text-2xl">
                            {step.title}
                          </h3>
                        </div>
                        <p className="relative z-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="order-1 z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-background font-display text-base font-extrabold text-primary shadow-[0_0_46px_-12px_hsl(var(--primary)/0.45)] md:order-2 md:col-start-2 md:row-start-1 md:h-20 md:w-20">
                      0{index + 1}
                    </div>

                    <div
                      className={`hidden md:row-start-1 md:block ${
                        index % 2 === 0 ? "md:order-3" : "md:order-1 md:col-start-1"
                      }`}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
          <div className="absolute inset-0 bg-dot-grid opacity-10" />
          <div className="absolute left-1/2 top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] md:block" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl animate-fade-in text-center">
              <h2 className="mb-8 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Convierte tu sitio web en una pieza real de{" "}
                <span className="gradient-text">crecimiento</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-8 py-6 text-base"
                  asChild
                >
                  <Link to="/contacto">
                    Solicitar cotización <ArrowRight size={16} />
                  </Link>
                </Button>
                <WhatsAppButton dark />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-14 md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl animate-fade-in">
              <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
                <div className="mb-4 flex justify-center">
                  <SectionBadge>FAQ</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Preguntas antes de cotizar
                </h2>
                <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
                  Respuestas directas sobre tiempos, alcance, administración y
                  preparación para SEO antes de iniciar tu proyecto web.
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="mx-auto grid max-w-3xl gap-5"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border border-border/60 px-5 py-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_45px_-18px_hsl(var(--primary)/0.3)] md:px-7"
                  >
                    <AccordionTrigger className="py-6 text-left text-base font-bold font-display hover:text-primary hover:no-underline md:text-lg">
                      <span className="pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {faq.answer}
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
