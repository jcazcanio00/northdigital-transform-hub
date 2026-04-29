import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MessageSquare,
  MousePointerClick,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
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

const SectionBadge = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium ${dark ? "border-brand-navy-foreground/15 bg-brand-navy-foreground/10 text-brand-navy-foreground/75" : "border-primary/20 bg-primary/5 text-muted-foreground"}`}>
    <span className={`h-2 w-2 rounded-full animate-status-pulse ${dark ? "bg-brand-red" : "bg-primary"}`} />
    {children}
  </span>
);

const SectionHeader = ({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
    <SectionBadge dark={dark}>{eyebrow}</SectionBadge>
    <h2 className={`mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-brand-navy-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {copy && <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-brand-navy-foreground/65" : "text-muted-foreground"}`}>{copy}</p>}
  </div>
);

const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-5xl animate-hero-slide-up">
    <div className="hidden lg:block absolute -inset-12 rounded-[40px] bg-primary/8 blur-[40px] pointer-events-none" />
    <div className="absolute -right-2 top-8 z-20 hidden rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl md:block animate-float-slow">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <TrendingUp size={19} className="text-primary" />
        </div>
        <div>
          <div className="font-display text-base font-extrabold">+42%</div>
          <div className="text-xs text-muted-foreground">más contactos</div>
        </div>
      </div>
    </div>
    <div className="absolute -left-3 bottom-10 z-20 hidden rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl lg:block animate-float-delayed">
      <div className="flex items-center gap-2 text-xs font-semibold">
        <ShieldCheck size={16} className="text-brand-red" />
        Diseño listo para vender
      </div>
    </div>

    <div className="glass-card relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/30 bg-muted/20 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-brand-red/80" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="ml-auto hidden rounded-md bg-muted/40 px-3 py-1 text-[10px] font-medium text-muted-foreground sm:block">north.website/system</span>
      </div>

      <div className="grid min-h-[460px] grid-cols-1 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="relative overflow-hidden bg-brand-navy p-5 text-brand-navy-foreground sm:p-7">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-brand-navy-foreground/12" />
                  <div className="h-2.5 w-24 rounded-full bg-brand-navy-foreground/28" />
                </div>
                <div className="h-9 w-28 rounded-full bg-brand-red" />
              </div>
              <div className="mb-5 h-3 w-32 rounded-full bg-brand-navy-foreground/25" />
              <div className="space-y-3">
                <div className="h-9 w-full max-w-[330px] rounded-lg bg-brand-navy-foreground/90" />
                <div className="h-9 w-11/12 rounded-lg bg-brand-navy-foreground/70" />
                <div className="h-9 w-8/12 rounded-lg bg-brand-navy-foreground/45" />
              </div>
              <div className="mt-7 space-y-2.5">
                <div className="h-2.5 w-11/12 rounded-full bg-brand-navy-foreground/25" />
                <div className="h-2.5 w-8/12 rounded-full bg-brand-navy-foreground/18" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                ["UX", MousePointerClick],
                ["SEO", Search],
                ["CRM", Workflow],
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/10 p-3">
                  <Icon size={18} className="mb-3 text-brand-red" />
                  <div className="text-xs font-bold">{label as string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted/10 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-display text-sm font-bold">Conversion OS</div>
              <div className="text-[11px] text-muted-foreground">Sitio web empresarial</div>
            </div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary">Live</div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              ["Leads", "124"],
              ["Speed", "98"],
              ["Mobile", "A+"],
              ["Conv.", "6.8%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border/60 bg-background p-3">
                <div className="text-[10px] text-muted-foreground">{label}</div>
                <div className="font-display text-xl font-extrabold">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border/60 bg-background p-4">
            <div className="mb-4 flex items-center justify-between text-xs font-semibold">
              <span>Solicitudes</span>
              <LineChart size={15} className="text-primary" />
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {[34, 48, 42, 60, 54, 69, 76, 68, 86, 80, 94, 90].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/25 to-primary transition-transform duration-300 hover:scale-y-105" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            {["CTA visible", "WhatsApp conectado", "Base lista para SEO"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-border/50 bg-background px-3 py-2.5 text-xs">
                <span className="font-medium">{item}</span>
                <CheckCircle2 size={14} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const trustItems = [
  "Empresas de servicios",
  "Real estate",
  "Hospitality",
  "Consultorías",
  "Clínicas",
  "Marcas premium",
];

const services = [
  { icon: PenTool, title: "Diseño web a medida", desc: "Estructura visual creada alrededor de tu oferta, tu marca y el tipo de cliente que quieres atraer." },
  { icon: Smartphone, title: "Experiencia mobile-first", desc: "Pantallas claras, botones cómodos y navegación fluida para convertir desde celular, tablet y desktop." },
  { icon: Gauge, title: "Rendimiento y claridad", desc: "Sitios rápidos, ordenados y fáciles de escanear para reducir fricción en cada visita." },
  { icon: Layers3, title: "Landing pages y sitios", desc: "Páginas comerciales, sitios corporativos y estructuras listas para campañas o SEO posterior." },
  { icon: MessageSquare, title: "CTAs conectados", desc: "WhatsApp, formularios y rutas de contacto pensadas para generar oportunidades reales." },
  { icon: Code2, title: "Base tecnológica sólida", desc: "Desarrollo moderno integrado al ecosistema de North, sin plantillas genéricas ni piezas aisladas." },
];

const benefits = [
  { icon: Users, title: "Más confianza desde el primer scroll", desc: "Una presencia premium hace que el visitante entienda rápido que tu empresa es seria y confiable." },
  { icon: Target, title: "Mensajes que guían a comprar", desc: "Priorizamos jerarquía, claridad y argumentos comerciales para mover al usuario hacia el contacto." },
  { icon: BarChart3, title: "Mejor desempeño comercial", desc: "La página funciona como activo de ventas: presenta, filtra, educa y genera solicitudes." },
  { icon: Rocket, title: "Lista para escalar después", desc: "Dejamos una base clara para SEO, campañas, CRM, automatización y crecimiento digital." },
];

const cities = [
  { city: "Cancún", desc: "Para empresas turísticas, servicios profesionales, real estate y marcas que compiten por confianza." },
  { city: "Playa del Carmen", desc: "Para negocios en crecimiento que necesitan una imagen moderna, clara y preparada para convertir." },
  { city: "Tulum", desc: "Para proyectos boutique, wellness, hospitality y experiencias de alto valor que requieren percepción premium." },
];

const process = [
  { step: "01", icon: Target, title: "Estrategia", desc: "Definimos objetivos, audiencia, oferta y el mensaje principal que debe comunicar la página." },
  { step: "02", icon: PenTool, title: "UX/UI", desc: "Diseñamos jerarquía, secciones, CTAs y una experiencia visual premium alineada a North." },
  { step: "03", icon: Code2, title: "Construcción", desc: "Desarrollamos una interfaz responsive, rápida y consistente con el sistema actual del sitio." },
  { step: "04", icon: Rocket, title: "Lanzamiento", desc: "Revisamos la experiencia final y dejamos la página lista para publicar y optimizar SEO después." },
];

const differentiators = [
  "No diseñamos una página aislada: construimos una pieza comercial dentro de tu sistema digital.",
  "Conectamos diseño, mensaje, tecnología y conversión desde la primera versión.",
  "Mantenemos un look premium, limpio y corporativo sin caer en estilos genéricos.",
  "La estructura queda preparada para campañas, contenido, SEO y CRM cuando decidas escalar.",
];

const faqs = [
  { q: "¿Esta página ya queda lista para SEO?", a: "Queda lista como base visual y estructural para que después se trabaje la optimización SEO técnica, contenido y metadata sin rehacer el diseño." },
  { q: "¿El diseño funciona bien en móvil?", a: "Sí. La página está pensada mobile-first: botones grandes, secciones escaneables y cards apiladas correctamente en pantallas pequeñas." },
  { q: "¿Pueden integrar WhatsApp y formularios?", a: "Sí. La experiencia puede incluir CTAs a WhatsApp, formularios de contacto y rutas claras hacia ventas o agenda." },
  { q: "¿Es para negocios locales o empresas más grandes?", a: "Está pensada para empresas en Cancún, Playa del Carmen y Tulum que quieren verse premium, no como una página local básica." },
  { q: "¿Se puede ampliar después?", a: "Sí. La estructura permite crecer hacia más secciones, landings, CRM, automatización, campañas o contenido SEO." },
];

const DisenoDePaginasWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Diseño de Páginas Web | North"
        description="Diseño de páginas web premium para empresas en Cancún, Playa del Carmen y Tulum. Landing pages y sitios modernos enfocados en conversión."
        url="https://northmkt.com.mx/diseno-de-paginas-web/"
        keywords="diseño de páginas web, diseño web cancún, páginas web playa del carmen, diseño web tulum"
      />
      <Header />

      <main>
        <section className="relative overflow-hidden bg-background pb-10 pt-6 md:pb-16 md:pt-14 lg:pt-16">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="hidden lg:block absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary/8 blur-[60px] pointer-events-none will-change-transform" />
          <div className="hidden lg:block absolute top-[4%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-primary/5 blur-[50px] pointer-events-none will-change-transform" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl animate-hero-fade-in text-center">
                <SectionBadge>Diseño de páginas web</SectionBadge>
                <h1 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
                  Páginas web premium diseñadas para convertir y crecer
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Creamos sitios modernos para empresas en Cancún, Playa del Carmen y Tulum que necesitan confianza visual, claridad comercial y tecnología lista para generar oportunidades reales.
                </p>
                <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Button variant="gradient" size="lg" className="px-8 py-6 text-base" asChild>
                    <Link to="/contacto">Solicitar cotización <ArrowRight size={18} /></Link>
                  </Button>
                  <Button variant="gradient-outline" size="lg" className="px-8 py-6 text-base" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> Hablar por WhatsApp</a>
                  </Button>
                </div>
                <div className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
                  {["Mobile-first", "UX de conversión", "Lista para SEO"].map((item) => (
                    <div key={item} className="rounded-xl border border-border/20 bg-muted/20 p-3 text-xs font-semibold text-foreground/75 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <CheckCircle2 size={15} className="mb-2 text-primary" />{item}
                    </div>
                  ))}
                </div>
            </div>
              <div className="mt-10 md:mt-14">
                <HeroVisual />
              </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/55 py-9 md:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="font-display text-lg font-extrabold">Diseño para empresas que necesitan vender mejor</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Confianza visual, claridad comercial y experiencia premium desde el primer contacto.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-xl border border-border/60 bg-background px-3 py-3 text-center text-xs font-bold text-muted-foreground shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader eyebrow="Servicio completo" title="Todo lo que necesita una página web para sentirse premium" copy="Diseñamos cada sección con una función clara: atraer atención, explicar valor, construir confianza y facilitar el contacto." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="glass-card glass-card-hover rounded-2xl p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-14 text-brand-navy-foreground md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <SectionBadge dark>Beneficios de negocio</SectionBadge>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Una web no debe verse bonita solamente. Debe ayudarte a vender.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-navy-foreground/65">
                  Convertimos tu sitio en una experiencia comercial: clara, rápida y diseñada para que el usuario sepa qué haces, por qué confiar y cómo contactarte.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <article key={benefit.title} className="rounded-2xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy-foreground/[0.12]">
                    <benefit.icon size={24} className="mb-5 text-brand-red" />
                    <h3 className="mb-2 font-display text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-navy-foreground/65">{benefit.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/45 py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader eyebrow="Presencia regional" title="Diseño web para empresas en Cancún, Playa del Carmen y Tulum" copy="Adaptamos la experiencia al mercado donde compite tu empresa, manteniendo una imagen moderna, corporativa y de alto valor." />
            <div className="grid gap-4 md:grid-cols-3">
              {cities.map((item) => (
                <article key={item.city} className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <MapPin size={22} className="mb-5 text-brand-red" />
                  <h3 className="font-display text-2xl font-extrabold">{item.city}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader eyebrow="Proceso claro" title="De idea a página lista para vender" copy="Un flujo simple, ordenado y enfocado en lanzar una experiencia que se vea bien y cumpla una función comercial." />
            <div className="grid gap-4 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon size={21} className="text-primary" />
                    </div>
                    <span className="font-display text-3xl font-extrabold text-primary/15">{item.step}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionBadge>Diferenciador North</SectionBadge>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Diseño, tecnología y conversión en una sola experiencia
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Una página premium no se mide solo por cómo se ve. Se mide por lo fácil que hace entender tu valor, confiar en tu empresa y dar el siguiente paso.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-navy p-6 text-brand-navy-foreground shadow-2xl md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red">
                    <Zap size={22} />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold">Sistema de conversión</div>
                    <div className="text-sm text-brand-navy-foreground/60">No solo una página informativa</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {differentiators.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-3 text-sm leading-relaxed text-brand-navy-foreground/75">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-navy py-14 text-center text-brand-navy-foreground md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-15" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <SectionBadge dark>Listo para avanzar</SectionBadge>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Haz que tu página trabaje como tu mejor vendedor digital
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-navy-foreground/65">
                Cuéntanos qué vendes y diseñamos una experiencia clara, premium y preparada para convertir visitantes en oportunidades.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="gradient" size="lg" className="h-14 px-8 text-base" asChild>
                  <Link to="/contacto">Solicitar cotización <ArrowRight size={18} /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 border-brand-navy-foreground/20 bg-brand-navy-foreground/10 px-8 text-base text-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> Hablar con North</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" />
              <Accordion type="single" collapsible className="rounded-2xl border border-border/60 bg-card px-4 md:px-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`item-${index}`} className="border-border/60">
                    <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline md:text-lg">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
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
