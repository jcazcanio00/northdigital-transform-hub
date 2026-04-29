import { useEffect } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Code2,
  Compass,
  Gauge,
  Globe,
  Layers3,
  Lightbulb,
  MapPin,
  MessageSquare,
  MousePointerClick,
  Rocket,
  Search,
  Shield,
  Smartphone,
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

const solutions = [
  {
    icon: Code2,
    title: "Arquitectura Web",
    description: "Sitios y landing pages construidos como activos digitales para explicar valor, convertir tráfico y sostener campañas.",
    tag: "Sistema",
  },
  {
    icon: TrendingUp,
    title: "Conversión y Crecimiento",
    description: "Estructura, mensajes y CTAs diseñados para generar solicitudes reales en Cancún, Playa del Carmen y Tulum.",
    tag: "Growth",
  },
  {
    icon: Workflow,
    title: "Base para Integraciones",
    description: "Una web preparada para conectar formularios, WhatsApp, CRM, automatización, analítica y optimización posterior.",
    tag: "Tech",
  },
];

const features = [
  {
    icon: MousePointerClick,
    title: "UX enfocada en acción",
    desc: "Jerarquía clara, navegación simple y puntos de contacto visibles para convertir mejor.",
  },
  {
    icon: Gauge,
    title: "Rendimiento y claridad",
    desc: "Experiencias rápidas, ordenadas y fáciles de entender en mobile y desktop.",
  },
  {
    icon: Shield,
    title: "Presencia premium",
    desc: "Diseño consistente con una empresa seria, moderna y lista para competir por confianza.",
  },
];

const serviceCards = [
  { icon: Smartphone, title: "Diseño mobile-first", desc: "Interfaces pensadas primero para el usuario que llega desde celular y necesita actuar rápido." },
  { icon: Layers3, title: "Landing pages y sitios", desc: "Estructuras comerciales para servicios, campañas, empresas locales y marcas premium." },
  { icon: Search, title: "Base lista para SEO", desc: "Arquitectura ordenada para trabajar contenido, posicionamiento y optimización técnica después." },
  { icon: MessageSquare, title: "CTAs conectados", desc: "WhatsApp, contacto y rutas de conversión integradas al flujo natural del visitante." },
];

const cities = [
  { city: "Cancún", desc: "Para empresas turísticas, servicios profesionales, real estate y marcas que necesitan verse confiables desde el primer contacto." },
  { city: "Playa del Carmen", desc: "Para negocios en crecimiento que requieren una presencia digital moderna, clara y lista para campañas." },
  { city: "Tulum", desc: "Para proyectos boutique, wellness, hospitality y experiencias de alto valor que dependen de percepción premium." },
];

const process = [
  { icon: Compass, title: "Descubrimiento", desc: "Analizamos oferta, audiencia, mercado local y objetivos comerciales antes de definir la estructura." },
  { icon: Lightbulb, title: "Estrategia", desc: "Creamos un mapa de secciones, mensajes, CTAs y tecnología necesaria para convertir visitas en oportunidades." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos una experiencia responsive, rápida y alineada al sistema visual de North." },
  { icon: Rocket, title: "Crecimiento", desc: "Dejamos una base preparada para medir, optimizar, conectar CRM, automatizar y escalar." },
];

const conversionItems = [
  "Mensaje comercial claro desde el primer scroll.",
  "Rutas de contacto visibles para cotización y WhatsApp.",
  "Estructura preparada para campañas, SEO y analítica.",
  "Base tecnológica compatible con CRM y automatización.",
];

const faqs = [
  { q: "¿Esto es solo diseño visual?", a: "No. La página se plantea como una pieza de tecnología comercial: estructura, mensaje, rendimiento, conversión y base para integraciones futuras." },
  { q: "¿Sirve para empresas en Cancún, Playa del Carmen y Tulum?", a: "Sí. El enfoque está pensado para empresas de la región que necesitan verse premium, generar confianza y convertir tráfico local en oportunidades reales." },
  { q: "¿Puede conectarse con WhatsApp, formularios o CRM?", a: "Sí. La estructura permite conectar rutas de contacto, formularios, WhatsApp, CRM, automatización y medición según el alcance del proyecto." },
  { q: "¿La web puede crecer después?", a: "Sí. Se construye como una base escalable para nuevas secciones, campañas, contenido SEO, automatizaciones e integraciones." },
];

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

            <div className="relative max-w-5xl mx-auto animate-hero-slide-up">
              <div className="hidden lg:block absolute -inset-12 bg-primary/8 rounded-[40px] blur-[40px] pointer-events-none" />
              <div className="relative glass-card rounded-2xl border border-border/60 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-muted/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/40" />
                    <div className="w-3 h-3 rounded-full bg-primary/30" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-muted/40 text-[10px] text-muted-foreground flex items-center gap-2">
                      <Shield size={9} /> northmkt.com.mx/web-system
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[380px] lg:min-h-[420px]">
                  <div className="hidden lg:flex flex-col w-48 border-r border-border/20 p-4 bg-muted/5">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe size={14} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-display">North</div>
                        <div className="text-[9px] text-muted-foreground">Web System</div>
                      </div>
                    </div>
                    <nav className="space-y-0.5">
                      {[
                        { icon: BarChart3, label: "Conversión", active: true },
                        { icon: Users, label: "Audiencia" },
                        { icon: Zap, label: "Automatización" },
                        { icon: Activity, label: "Analítica" },
                        { icon: Globe, label: "SEO Base" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] transition-colors ${
                            item.active ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"
                          }`}
                        >
                          <item.icon size={13} />
                          {item.label}
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="flex-1 p-5 space-y-4 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold font-display">Panel de Conversión</div>
                        <div className="text-[10px] text-muted-foreground">Cancún · Playa del Carmen · Tulum</div>
                      </div>
                      <div className="relative">
                        <Bell size={14} className="text-muted-foreground" />
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {[
                        { label: "Leads", value: "+42%", change: "web" },
                        { label: "Velocidad", value: "98", change: "score" },
                        { label: "Mobile", value: "A+", change: "UX" },
                        { label: "CTA", value: "24/7", change: "activo" },
                      ].map((m) => (
                        <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3">
                          <div className="text-[9px] text-muted-foreground">{m.label}</div>
                          <div className="text-sm font-bold">{m.value}</div>
                          <div className="text-[9px] font-medium text-primary">
                            <TrendingUp size={9} className="inline mr-0.5" />{m.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                      <div className="lg:col-span-3 rounded-xl bg-muted/10 border border-border/20 p-4">
                        <div className="text-[11px] font-semibold mb-3">Solicitudes Mensuales</div>
                        <div className="flex items-end gap-[3px] h-20">
                          {[35, 45, 30, 55, 48, 65, 58, 72, 68, 82, 75, 90, 85, 78, 92, 88, 95].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-primary/60 animate-bar-grow"
                              style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.03}s` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-2 rounded-xl bg-muted/10 border border-border/20 p-4">
                        <div className="text-[11px] font-semibold mb-3">Sistema</div>
                        <div className="space-y-2">
                          {[
                            { label: "Tráfico", pct: 100 },
                            { label: "Interés", pct: 63 },
                            { label: "Contacto", pct: 39 },
                            { label: "Oportunidad", pct: 24 },
                          ].map((item) => (
                            <div key={item.label}>
                              <div className="flex justify-between text-[9px] mb-1">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className="font-bold">{item.pct}%</span>
                              </div>
                              <div className="w-full h-1 rounded-full bg-secondary/50">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-primary/40 to-primary animate-bar-width"
                                  style={{ width: `${item.pct}%`, animationDelay: "1s" }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: Zap, title: "Automatización", items: ["WhatsApp", "Formularios", "CRM"] },
                        { icon: Target, title: "Conversión", items: ["Oferta", "CTA", "Confianza"] },
                        { icon: CheckCircle2, title: "Base", items: ["SEO", "Analítica", "Escala"] },
                      ].map((block) => (
                        <div key={block.title} className="rounded-xl bg-muted/10 border border-border/20 p-3">
                          <div className="flex items-center gap-1.5 mb-2">
                            <block.icon size={10} className="text-accent" />
                            <span className="text-[10px] font-semibold">{block.title}</span>
                          </div>
                          {block.items.map((item) => (
                            <div key={item} className="flex items-center justify-between text-[9px] py-0.5">
                              <span className="text-muted-foreground">{item}</span>
                              <CheckCircle2 size={8} className="text-primary" />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Webs como <span className="gradient-text">Sistemas</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tecnología visual, comercial y operativa para acelerar la forma en que tu empresa convierte oportunidades.
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
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-status-pulse" />
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
                  <div key={item} className="rounded-2xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy-foreground/[0.12]">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-brand-navy-foreground font-display text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-brand-navy-foreground/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/45 py-12 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Presencia Regional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
                Diseño web para Cancún, Playa del Carmen y Tulum
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Una presencia premium para mercados donde la confianza, velocidad y claridad comercial definen la primera decisión.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {cities.map((item) => (
                <article key={item.city} className="glass-card rounded-2xl p-7 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25">
                  <MapPin size={22} className="mb-5 text-primary" />
                  <h3 className="text-lg font-bold mb-3 font-display group-hover:text-primary transition-colors duration-300">{item.city}</h3>
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
                Metodología
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
                Nuestro <span className="gradient-text">Proceso</span>
              </h2>
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
                    <div className="flex-1">
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

        <section className="bg-background py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">Preguntas frecuentes</h2>
              </div>
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
