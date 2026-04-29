import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
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
import heroTravelImage from "@/assets/diseno-web-hero-travel.jpg";

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

const DarkWhatsAppLink = ({
  children = "Hablar por WhatsApp",
}: {
  children?: ReactNode;
}) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-navy-foreground/30 bg-transparent px-8 py-3 text-base font-medium text-brand-navy-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy"
  >
    <WhatsAppGlyph size={16} /> {children}
  </a>
);

const HeroWhatsAppButton = () => (
  <Button
    variant="gradient-outline"
    size="lg"
    className="px-8 py-6 text-base"
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
      "Una web clara, profesional y consistente para que tu empresa se perciba confiable desde el primer contacto.",
  },
  {
    icon: Smartphone,
    title: "Experiencia mobile-first",
    description:
      "Diseño pensado para usuarios que descubren, comparan y deciden desde celular en pocos segundos.",
  },
  {
    icon: MessageSquare,
    title: "Contacto sin fricción",
    description:
      "WhatsApp, formularios y CTAs visibles para convertir interés en conversaciones comerciales reales.",
  },
  {
    icon: Workflow,
    title: "Base para crecer",
    description:
      "Una página preparada para campañas, analítica, SEO, CRM y siguientes etapas de crecimiento digital.",
  },
];

const strategy = [
  {
    icon: FileText,
    title: "Mensaje claro",
    description:
      "Explica qué haces, para quién y por qué confiar en tu negocio.",
  },
  {
    icon: Layers3,
    title: "Estructura comercial",
    description:
      "Ordena la información para guiar al visitante hacia una decisión.",
  },
  {
    icon: Gauge,
    title: "Velocidad",
    description: "Reduce fricción y mejora la experiencia en mobile y desktop.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Construye una base ordenada para posicionamiento y contenidos futuros.",
  },
  {
    icon: MessageSquare,
    title: "Contacto visible",
    description:
      "Facilita cotizaciones, mensajes y solicitudes desde puntos clave.",
  },
  {
    icon: BadgeCheck,
    title: "Confianza",
    description:
      "Refuerza credibilidad con jerarquía, prueba y claridad visual.",
  },
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
    description: "Entendemos tu negocio, cliente ideal y oportunidades reales.",
  },
  {
    icon: FileText,
    title: "Estrategia",
    description: "Definimos estructura, mensaje y flujo de conversión.",
  },
  {
    icon: Layers3,
    title: "Diseño + Desarrollo",
    description: "Creamos una experiencia visual clara, rápida y optimizada.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description: "Publicamos, medimos y dejamos todo listo para crecer.",
  },
];

const faqs = [
  {
    question: "¿Cuánto tarda una página web?",
    answer:
      "Depende del alcance, pero trabajamos por etapas claras: diagnóstico, estructura, diseño, desarrollo, revisión y lanzamiento.",
  },
  {
    question: "¿Qué incluye exactamente?",
    answer:
      "Incluye estrategia de estructura, diseño responsive, desarrollo web, CTAs, contacto por WhatsApp o formulario y base lista para medición.",
  },
  {
    question: "¿La puedo administrar yo?",
    answer:
      "Sí. Podemos plantear una estructura administrable si el proyecto lo requiere, o una web más controlada si la prioridad es velocidad y consistencia.",
  },
  {
    question: "¿Funciona para SEO?",
    answer:
      "Sí. La página se construye con jerarquía clara, contenido ordenado y estructura técnica preparada para trabajar SEO después.",
  },
  {
    question: "¿Trabajan para Cancún, Playa del Carmen y Tulum?",
    answer:
      "Sí. Diseñamos páginas web para empresas de estos mercados que necesitan verse profesionales y convertir visitas en oportunidades reales.",
  },
];

const HeroWebsiteMockup = () => (
  <div className="group relative mx-auto w-full max-w-[720px] animate-hero-slide-up lg:ml-0 lg:[perspective:1400px]">
    <div className="hidden lg:block absolute -inset-10 rounded-[40px] bg-primary/10 blur-[40px] pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />

    <div className="relative overflow-visible rounded-2xl border border-border/60 bg-card shadow-2xl transition-transform duration-500 lg:origin-bottom-left lg:rotate-[1.5deg] lg:-skew-x-[3deg] lg:group-hover:rotate-[0.5deg] lg:group-hover:-skew-x-[1deg]">
      <div className="overflow-hidden rounded-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-border/50 bg-background px-4 py-3 sm:px-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/35" />
          </div>
          <div className="mx-auto hidden rounded-md bg-muted/40 px-4 py-1 text-[10px] font-medium text-muted-foreground sm:block">
            costa-prime.mx
          </div>
        </div>

        <div className="bg-background">
          {/* Site navbar */}
          <div className="flex items-center justify-between border-b border-border/30 px-5 py-3.5 sm:px-8">
            <div className="flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-wide text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Costa Prime
            </div>
            <nav className="hidden items-center gap-5 text-[10px] font-bold text-muted-foreground md:flex">
              <span>Suites</span>
              <span>Experiencias</span>
              <span>Ubicación</span>
            </nav>
            <span className="rounded-lg bg-primary px-4 py-2 text-[10px] font-extrabold text-primary-foreground">
              Reservar
            </span>
          </div>

          {/* Hero image area */}
          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[420px]">
            <img
              src={heroTravelImage}
              alt="Mockup de landing premium para hotel boutique en la Riviera Maya"
              width={1024}
              height={768}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/60 to-brand-navy/10" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/80 to-transparent" />

            {/* Hero content */}
            <div className="relative z-10 flex min-h-[340px] flex-col justify-center p-5 text-brand-navy-foreground sm:min-h-[420px] sm:p-8">
              <div className="max-w-[370px]">
                <span className="mb-3 inline-flex rounded-full border border-brand-navy-foreground/20 bg-brand-navy-foreground/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-brand-navy-foreground/75">
                  Hotel boutique · Riviera Maya
                </span>
                <h3 className="font-display text-[26px] font-extrabold leading-tight text-white sm:text-[32px]">
                  Estancias privadas frente al Caribe
                </h3>
                <p className="mt-2.5 max-w-[290px] text-[11px] leading-relaxed text-brand-navy-foreground/70 sm:text-[13px]">
                  Suites exclusivas, playa privada y servicio personalizado en la Riviera Maya.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex rounded-xl bg-white px-5 py-2.5 text-[10px] font-extrabold text-brand-navy shadow-lg">
                    Solicitar disponibilidad
                  </div>
                  <div className="inline-flex rounded-xl border border-white/25 px-4 py-2.5 text-[10px] font-semibold text-white/85">
                    Ver suites
                  </div>
                </div>
                {/* Social proof strip */}
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <span className="h-6 w-6 rounded-full border-2 border-white/20 bg-primary/70" />
                    <span className="h-6 w-6 rounded-full border-2 border-white/20 bg-accent/60" />
                    <span className="h-6 w-6 rounded-full border-2 border-white/20 bg-primary/50" />
                  </div>
                  <span className="text-[10px] font-medium text-white/70">
                    4.9 · 120+ huéspedes satisfechos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust / features strip */}
          <div className="grid grid-cols-3 divide-x divide-border/40 border-t border-border/50 bg-background">
            {[
              { label: "Playa privada", Icon: Shield },
              { label: "Traslado gratis", Icon: CheckCircle2 },
              { label: "100% verificado", Icon: BadgeCheck },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center justify-center gap-1.5 px-2 py-3">
                <Icon size={11} className="shrink-0 text-primary" />
                <span className="hidden text-[9px] font-semibold text-muted-foreground sm:block">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating conversion card */}
      <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border/60 bg-background p-4 shadow-2xl md:block lg:skew-x-[3deg]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingUp size={18} />
          </div>
          <div>
            <p className="font-display text-lg font-extrabold leading-none text-foreground">
              +128%
            </p>
            <p className="mt-0.5 text-[10px] font-medium text-muted-foreground">
              más solicitudes
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp lead card */}
      <div className="absolute -right-4 top-[38%] hidden rounded-xl border border-border/60 bg-background p-4 shadow-2xl md:block lg:skew-x-[3deg]">
        <div className="mb-2 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <WhatsAppGlyph size={14} />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
              Nuevo lead
            </p>
            <p className="text-xs font-extrabold text-foreground">
              Cotización recibida
            </p>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground">Hace 2 min · WhatsApp</p>
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
        <section className="relative flex min-h-0 items-center overflow-hidden bg-brand-navy pb-10 pt-8 md:min-h-[calc(100vh-72px)] md:pb-16 md:pt-16">
          <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="hidden lg:block absolute right-0 top-[10%] h-[420px] w-[560px] rounded-full bg-primary/12 blur-[60px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
              <div className="animate-hero-fade-in text-center lg:text-left">
                <div className="mb-8">
                  <SectionBadge>Diseño de páginas web</SectionBadge>
                </div>
                <h1 className="mb-5 text-3xl font-extrabold leading-[1.05] text-balance text-brand-navy-foreground font-display sm:text-5xl lg:text-6xl xl:text-7xl">
                  Diseña, Conecta y{" "}
                  <span className="gradient-text">Convierte</span> con tu Web
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-brand-navy-foreground/68 md:text-lg lg:mx-0">
                  Creamos páginas web para empresas en Cancún, Playa del Carmen
                  y Tulum que comunican mejor, generan confianza y convierten
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
                      Solicitar página web{" "}
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  <HeroWhatsAppButton />
                </div>
              </div>

              <HeroWebsiteMockup />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="section-divider" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 py-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl animate-fade-in text-center">
              <div className="mb-4 flex justify-center">
                <SectionBadge>Beneficios</SectionBadge>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold font-display sm:text-4xl lg:text-5xl">
                Páginas web diseñadas para{" "}
                <span className="gradient-text">vender</span>
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Diseño, tecnología y estructura comercial para marcas que
                necesitan verse confiables y convertir mejor.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="glass-card group relative block overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/25 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent group-hover:opacity-100" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
              <div className="animate-fade-in lg:sticky lg:top-28">
                <div className="mb-4">
                  <SectionBadge>Estrategia</SectionBadge>
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Lo que hace que una web{" "}
                  <span className="gradient-text">funcione</span>
                </h2>
                <p className="mb-8 max-w-xl leading-relaxed text-muted-foreground">
                  Una página no vende por verse bonita. Vende cuando el mensaje,
                  la estructura, la velocidad y el contacto trabajan juntos.
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-8 py-6 text-base"
                  asChild
                >
                  <Link to="/contacto">
                    Cotizar proyecto <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {strategy.map((item) => (
                  <article
                    key={item.title}
                    className="glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_50px_-14px_hsl(var(--primary)/0.25)]"
                  >
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15">
                        <item.icon size={22} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold font-display transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-20">
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-cta)" }}
          />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl animate-fade-in text-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Tu web no debe verse bien. Debe ayudar a{" "}
                <span className="gradient-text">vender mejor</span>.
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-brand-navy-foreground/60">
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
                    Solicitar cotización{" "}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <DarkWhatsAppLink />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border/60 py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/35 to-background pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16">
              <div className="animate-fade-in">
                <div className="mb-4">
                  <SectionBadge>Mercado</SectionBadge>
                </div>
                <h2 className="mb-5 max-w-xl text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                  Páginas web que compiten en mercados reales
                </h2>
                <p className="max-w-xl leading-relaxed text-muted-foreground">
                  Diseñamos sitios para empresas que necesitan destacar en
                  mercados competitivos como Cancún, Playa del Carmen y Tulum.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 md:p-7">
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-border/50 pb-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-primary">
                        Riviera Maya
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold font-display">
                        3 mercados clave
                      </h3>
                    </div>
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div className="space-y-5">
                    {markets.map((market, index) => (
                      <article
                        key={market.city}
                        className="group grid gap-4 border-b border-border/50 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[64px_1fr]"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-extrabold text-primary transition-all duration-300 group-hover:bg-primary/15">
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold font-display transition-colors duration-300 group-hover:text-primary">
                            {market.city}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {market.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl animate-fade-in text-center md:mb-16">
              <div className="mb-4 flex justify-center">
                <SectionBadge>Proceso</SectionBadge>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight font-display sm:text-4xl lg:text-5xl">
                De la idea al lanzamiento, con dirección clara
              </h2>
              <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
                Un flujo limpio para pasar de una idea comercial a una página
                clara, premium y lista para convertir.
              </p>
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-primary/10 via-primary/45 to-primary/10 md:left-1/2" />
              <div className="space-y-8 md:space-y-12">
                {process.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative grid gap-6 pl-20 md:grid-cols-[1fr_96px_1fr] md:items-center md:gap-8 md:pl-0"
                  >
                    <div
                      className={
                        index % 2 === 0 ? "md:text-right" : "md:col-start-3"
                      }
                    >
                      <div className="glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_0_60px_-16px_hsl(var(--primary)/0.35)] md:p-8">
                        <div
                          className={`relative z-10 mb-5 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}
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

                    <div className="absolute left-0 top-1 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-background font-display text-base font-extrabold text-primary shadow-[0_0_46px_-12px_hsl(var(--primary)/0.45)] md:static md:col-start-2 md:row-start-1 md:mx-auto md:h-20 md:w-20">
                      0{index + 1}
                    </div>

                    <div
                      className={
                        index % 2 === 0
                          ? "hidden md:block"
                          : "hidden md:col-start-1 md:row-start-1 md:block"
                      }
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-24">
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-cta)" }}
          />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="hidden md:block absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl animate-fade-in text-center">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-brand-navy-foreground font-display sm:text-4xl lg:text-5xl">
                Convierte tu sitio web en una pieza real de{" "}
                <span className="gradient-text">crecimiento</span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-brand-navy-foreground/60">
                Cuéntanos qué vendes y diseñamos una experiencia clara,
                tecnológica y preparada para convertir visitas en oportunidades.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-8 py-6 text-base"
                  asChild
                >
                  <Link to="/contacto">
                    Solicitar cotización{" "}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <DarkWhatsAppLink />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-14 md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />
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
                  Respuestas directas sobre alcance, tiempos, administración y
                  preparación para SEO antes de iniciar un proyecto web.
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
