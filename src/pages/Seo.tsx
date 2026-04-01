import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search, Target, BarChart3, ArrowRight, Globe, TrendingUp,
  CheckCircle2, MapPin, Eye, FileText, Link2, Settings,
  Zap, Users, Shield, MessageSquare, LineChart, Activity,
  ArrowUpRight, Layers, Code, Monitor, Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

/* ─── Helpers ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay },
});

const SectionBadge = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "destructive" | "accent" }) => {
  const colors = {
    primary: "border-primary/20 bg-primary/5 text-muted-foreground",
    destructive: "border-destructive/20 bg-destructive/10 text-white/60",
    accent: "border-accent/20 bg-accent/10 text-white/60",
  };
  const dotColors = { primary: "bg-primary", destructive: "bg-destructive", accent: "bg-accent" };
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-4 ${colors[variant]}`}>
      <span className={`w-2 h-2 rounded-full animate-status-pulse ${dotColors[variant]}`} />
      {children}
    </span>
  );
};

const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20SEO%20para%20mi%20empresa";
const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

/* ─── JSON-LD ─── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO para Empresas en la Península de Yucatán",
    provider: { "@type": "Organization", name: "North", url: "https://northmkt.com.mx" },
    description: "Servicio de posicionamiento SEO para empresas en Cancún, Mérida, Playa del Carmen, Tulum y Campeche. Estrategias de SEO técnico, contenido y SEO local.",
    url: "https://northmkt.com.mx/seo",
    areaServed: [
      { "@type": "State", name: "Quintana Roo" },
      { "@type": "State", name: "Yucatán" },
      { "@type": "State", name: "Campeche" },
    ],
    serviceType: "SEO y Posicionamiento Web",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda en funcionar el SEO?",
        acceptedAnswer: { "@type": "Answer", text: "Los primeros resultados se ven entre 3 y 6 meses, dependiendo de la competencia del sector y el estado actual del sitio." },
      },
      {
        "@type": "Question",
        name: "¿El SEO local funciona para mi negocio?",
        acceptedAnswer: { "@type": "Answer", text: "Sí. Si tu empresa atiende clientes en una zona geográfica específica, el SEO local te permite aparecer en búsquedas con intención de compra en tu ciudad." },
      },
    ],
  },
];

/* ─── Data ─── */
const services = [
  { icon: Search, title: "Auditoría SEO Técnica", desc: "Análisis completo de la salud técnica de tu sitio: velocidad de carga, indexación, errores de rastreo, arquitectura de URLs y Core Web Vitals.", items: ["Rastreo e indexación", "Core Web Vitals", "Detección de errores técnicos"] },
  { icon: FileText, title: "Estrategia de Contenido", desc: "Keyword research avanzado y creación de contenido optimizado para capturar tráfico con intención de búsqueda real.", items: ["Keyword research", "Contenido SEO optimizado", "Calendario editorial estratégico"] },
  { icon: Link2, title: "Link Building & Autoridad", desc: "Construcción de autoridad de dominio con backlinks de calidad, digital PR y estrategias de outreach segmentadas.", items: ["Backlinks de alta autoridad", "Digital PR", "Crecimiento de Domain Authority"] },
  { icon: MapPin, title: "SEO Local", desc: "Optimización de Google Business Profile, gestión de citations y estrategias de posicionamiento para búsquedas con intención local.", items: ["Google Business Profile", "Citations y directorios", "Gestión de reseñas"] },
  { icon: Code, title: "SEO Técnico On-Page", desc: "Optimización de meta tags, encabezados, schema markup, estructura semántica y experiencia de usuario para mejorar rankings.", items: ["Meta tags y encabezados", "Schema markup (JSON-LD)", "Arquitectura semántica"] },
  { icon: LineChart, title: "Analytics & Reportes", desc: "Dashboards ejecutivos con métricas clave: posiciones orgánicas, tráfico, conversiones y retorno de inversión del canal SEO.", items: ["Tracking de posiciones", "Reportes mensuales ejecutivos", "Análisis de ROI orgánico"] },
];

const processSteps = [
  { icon: Eye, title: "Diagnóstico", desc: "Auditoría técnica completa y análisis competitivo para identificar oportunidades reales de crecimiento.", num: "01" },
  { icon: Target, title: "Estrategia", desc: "Definimos keywords objetivo, arquitectura de contenido y plan de acción alineado a tus metas de negocio.", num: "02" },
  { icon: Settings, title: "Implementación", desc: "Ejecutamos optimizaciones técnicas, on-page y off-page con prioridades claras y medibles.", num: "03" },
  { icon: BarChart3, title: "Monitoreo", desc: "Tracking continuo de posiciones, tráfico orgánico, conversiones y métricas de rendimiento.", num: "04" },
  { icon: TrendingUp, title: "Optimización", desc: "Iteración constante basada en datos para escalar resultados y mantener ventaja competitiva.", num: "05" },
];

const cities = [
  { name: "Cancún", desc: "Posicionamiento SEO para empresas turísticas, inmobiliarias, restaurantes y servicios profesionales en la zona hotelera y alrededores.", href: "/marketing-digital-cancun", icon: Globe, industries: ["Turismo", "Inmobiliaria", "Gastronomía"] },
  { name: "Mérida", desc: "SEO para negocios locales, clínicas, despachos profesionales y empresas en crecimiento en la capital yucateca.", icon: Target, industries: ["Salud", "Legal", "Servicios"] },
  { name: "Playa del Carmen", desc: "Estrategias de posicionamiento para bienes raíces, servicios turísticos y comercios de la Riviera Maya.", href: "/marketing-digital-playa-del-carmen", icon: TrendingUp, industries: ["Bienes raíces", "Turismo", "Retail"] },
  { name: "Tulum", desc: "SEO especializado para hoteles boutique, marcas wellness, restaurantes de autor y experiencias de lujo.", href: "/marketing-digital-tulum", icon: Layers, industries: ["Wellness", "Hotelería", "Experiencias"] },
  { name: "Campeche", desc: "Posicionamiento web para empresas locales, servicios profesionales y negocios en expansión en el estado.", icon: MapPin, industries: ["Comercio", "Servicios", "Industria"] },
];

const results = [
  { value: "+180%", label: "Crecimiento de tráfico orgánico", desc: "Incremento promedio en visitas orgánicas durante los primeros 6 meses de estrategia SEO." },
  { value: "Top 5", label: "Posiciones en keywords objetivo", desc: "Keywords principales posicionadas en las primeras 5 posiciones de Google." },
  { value: "3.5x", label: "Más leads orgánicos", desc: "Multiplicación de leads provenientes de búsquedas orgánicas vs. inversión en SEO." },
  { value: "-40%", label: "Menor dependencia de pauta", desc: "Reducción en gasto de publicidad pagada al crecer el canal orgánico de forma sostenida." },
];

const reasons = [
  { icon: Globe, title: "Conocimiento regional profundo", desc: "Entendemos el comportamiento de búsqueda, la competencia y las oportunidades específicas de cada ciudad de la Península de Yucatán." },
  { icon: Layers, title: "SEO como sistema, no como tarea", desc: "Integramos técnica, contenido, autoridad y experiencia de usuario en una estrategia unificada que genera resultados compuestos." },
  { icon: BarChart3, title: "Transparencia total en resultados", desc: "Dashboards en tiempo real con posiciones, tráfico, conversiones y ROI. Sin métricas de vanidad, solo datos que importan." },
  { icon: Zap, title: "Orientación a negocio, no a rankings", desc: "Cada acción SEO está diseñada para generar tráfico que convierte, no solo para mejorar posiciones en keywords sin impacto." },
  { icon: Shield, title: "Prácticas 100% white-hat", desc: "Seguimos las directrices de Google al pie de la letra. Sin atajos, sin riesgos de penalización, sin técnicas manipulativas." },
  { icon: Users, title: "Equipo senior dedicado", desc: "Consultores con experiencia real en SEO para distintas industrias. Sin rotación, sin juniors, sin intermediarios." },
];

/* ═══════════════════════════════════════════════════════════ */

const SeoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="SEO para Empresas | Posicionamiento Web | North"
        description="Servicio de SEO para empresas en la Península de Yucatán. Posicionamiento orgánico, SEO técnico, contenido y SEO local en Cancún, Mérida, Playa del Carmen y Tulum."
        url="https://northmkt.com.mx/seo"
        keywords="seo para empresas, posicionamiento web, seo cancun, seo merida, seo playa del carmen, seo tulum, seo local, agencia seo"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-0 md:min-h-[calc(100vh-72px)] flex items-center pt-6 md:pt-16 pb-8 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary/8 blur-[60px] pointer-events-none will-change-transform" />
        <div className="hidden lg:block absolute top-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-primary/5 blur-[50px] pointer-events-none will-change-transform" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Text content — centered like Home */}
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16 animate-hero-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              <Search size={12} className="text-primary" />
              SEO &amp; Posicionamiento Web
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 md:mb-6 text-balance font-display">
              Posiciona tu Empresa en{" "}
              <img src="/images/google-logo.png" alt="Google" className="inline-block h-[1.1em] align-middle relative -top-[0.04em]" />{" "}
              y Convierte{" "}
              <span className="gradient-text">Búsquedas</span>{" "}
              en Clientes
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
              SEO estratégico para empresas en la Península de Yucatán que buscan crecer con tráfico orgánico, autoridad digital y más oportunidades de venta.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 md:mb-12 justify-center">
              {[
                { icon: TrendingUp, text: "Crecimiento orgánico sostenible" },
                { icon: Target, text: "SEO local enfocado en conversión" },
                { icon: BarChart3, text: "Estrategia basada en datos reales" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon size={12} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/70">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/contacto">Solicitar diagnóstico SEO <ArrowRight size={16} className="ml-1" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 gradient-btn-outline" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={16} className="mr-1" /> Hablar con un especialista
                </a>
              </Button>
            </div>
          </div>

          {/* Dashboard mockup — full width, same pattern as Home */}
          <div className="relative max-w-5xl mx-auto animate-hero-slide-up">
            <div className="hidden lg:block absolute -inset-12 bg-primary/8 rounded-[40px] blur-[40px] pointer-events-none" />

            <div className="relative glass-card rounded-2xl border border-border/60 overflow-hidden shadow-2xl">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-muted/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-muted/40 text-[10px] text-muted-foreground flex items-center gap-2">
                    <Shield size={9} /> seo-analytics.north.dev
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex min-h-[380px] lg:min-h-[420px]">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-48 border-r border-border/20 p-4 bg-muted/5">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Search size={14} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-display">North SEO</div>
                      <div className="text-[9px] text-muted-foreground">Analytics</div>
                    </div>
                  </div>
                  <nav className="space-y-0.5">
                    {[
                      { icon: Monitor, label: "Dashboard", active: true },
                      { icon: Search, label: "Keywords" },
                      { icon: TrendingUp, label: "Rankings" },
                      { icon: Link2, label: "Backlinks" },
                      { icon: Activity, label: "Auditoría" },
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

                {/* Main area */}
                <div className="flex-1 p-5 space-y-4 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold font-display">SEO Dashboard</div>
                      <div className="text-[10px] text-muted-foreground">Marzo 2026 · Actualizado hace 2 min</div>
                    </div>
                    <div className="relative">
                      <Bell size={14} className="text-muted-foreground" />
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {[
                      { label: "Tráfico Orgánico", value: "24.8K", change: "+32%" },
                      { label: "Keywords Top 10", value: "142", change: "+18" },
                      { label: "Domain Authority", value: "48", change: "+6" },
                      { label: "Conv. Orgánicas", value: "312", change: "+45%" },
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

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                    <div className="lg:col-span-3 rounded-xl bg-muted/10 border border-border/20 p-4">
                      <div className="text-[11px] font-semibold mb-3">Tráfico Orgánico (12 meses)</div>
                      <div className="flex items-end gap-[3px] h-20">
                        {[30, 35, 38, 42, 48, 52, 58, 65, 62, 70, 75, 82, 78, 85, 88, 92, 95].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-primary/60 animate-bar-grow"
                            style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.03}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-2 rounded-xl bg-muted/10 border border-border/20 p-4">
                      <div className="text-[11px] font-semibold mb-3">Top Keywords</div>
                      <div className="space-y-2">
                        {[
                          { kw: "seo cancún", pos: "#1", pct: 100 },
                          { kw: "agencia seo mérida", pos: "#3", pct: 72 },
                          { kw: "posicionamiento web", pos: "#4", pct: 58 },
                          { kw: "seo empresas méxico", pos: "#5", pct: 45 },
                        ].map((item) => (
                          <div key={item.kw}>
                            <div className="flex justify-between text-[9px] mb-1">
                              <span className="text-muted-foreground">{item.kw}</span>
                              <span className="font-bold text-primary">{item.pos}</span>
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

                  {/* Bottom */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Link2 size={10} className="text-accent" />
                        <span className="text-[10px] font-semibold">Backlinks</span>
                      </div>
                      {["Alta autoridad", "Digital PR", "Guest posting"].map((f) => (
                        <div key={f} className="flex items-center justify-between text-[9px] py-0.5">
                          <span className="text-muted-foreground">{f}</span>
                          <CheckCircle2 size={8} className="text-primary" />
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                      <div className="text-[10px] font-semibold mb-2">Actividad SEO</div>
                      {[
                        { t: "15 keywords nuevas en Top 10", time: "Hoy" },
                        { t: "Tráfico +12% vs. mes anterior", time: "7d" },
                        { t: "8 backlinks adquiridos", time: "30d" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-start gap-1.5 py-0.5">
                          <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                          <div>
                            <div className="text-[9px]">{a.t}</div>
                            <div className="text-[8px] text-muted-foreground">{a.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                      <div className="text-[10px] font-semibold mb-2">Core Web Vitals</div>
                      <div className="flex items-end gap-0.5 h-10 mb-1">
                        {[60, 45, 70, 55, 80, 65, 90, 72, 85, 78, 92, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent/60 animate-bar-grow"
                            style={{ height: `${h}%`, animationDelay: `${1.2 + i * 0.04}s` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[9px] text-muted-foreground">LCP</span>
                        <span className="text-[10px] font-bold text-primary">1.2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating widgets — desktop only */}
            <div className="absolute -left-6 top-[25%] glass-card rounded-xl p-3 shadow-lg animate-float-slow hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={12} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold gradient-text">+180%</div>
                  <div className="text-[8px] text-muted-foreground">Tráfico Orgánico</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-[30%] glass-card rounded-xl p-2.5 shadow-lg animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-2">
                <Target size={12} className="text-accent" />
                <div>
                  <div className="text-[9px] font-semibold">Top 5 en Google</div>
                  <div className="text-[8px] text-muted-foreground">seo cancún</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── QUÉ INCLUYE ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Servicios SEO</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Qué incluye nuestro{" "}
              <span className="gradient-text">servicio de SEO</span>
            </h2>
            <p className="text-muted-foreground">
              Un enfoque integral que cubre cada aspecto del posicionamiento orgánico para generar resultados reales y medibles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border">
            {services.map((m, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="group bg-background p-8 hover:bg-primary/[0.02] transition-colors duration-300 relative"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <m.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-[15px] group-hover:text-primary transition-colors">{m.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.desc}</p>
                <div className="space-y-2">
                  {m.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground/70">
                      <CheckCircle2 size={14} className="text-primary/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CÓMO TRABAJAMOS ──────── */}
      <section className="py-24 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Proceso</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Cómo trabajamos el{" "}
              <span className="gradient-text">SEO</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Un proceso estructurado y transparente que convierte tu inversión en resultados orgánicos predecibles.
            </p>
          </motion.div>

          {/* Desktop flow — matching Marketing.tsx framework style */}
          <div className="hidden lg:block relative max-w-5xl mx-auto">
            {/* Background line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-border/40 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-[60px] left-[10%] right-[10%] h-[3px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(var(--primary)), hsl(198 93% 55%), hsl(var(--primary)))" }}
            />
            {/* Glow */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-[58px] left-[10%] right-[10%] h-[7px] rounded-full origin-left blur-sm opacity-40"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))" }}
            />

            <div className="grid grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <span className="text-[10px] font-bold text-primary/40 mb-2 group-hover:text-primary transition-colors">{step.num}</span>
                  <div className="relative z-10">
                    <div className="w-[88px] h-[88px] rounded-2xl border-2 border-border bg-card flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">
                      <step.icon size={30} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary/50 border-2 border-card group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300" />
                  </div>
                  <h4 className="text-sm font-bold font-display mt-5 mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[160px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile flow — vertical timeline */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 mb-8 last:mb-0 relative group"
              >
                <div className="relative z-10 w-10 h-10 rounded-xl border-2 border-primary/20 bg-card flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/40 transition-colors">
                  <step.icon size={16} className="text-primary" />
                </div>
                <div className="pt-0.5">
                  <span className="text-[9px] font-bold text-primary/50">{step.num}</span>
                  <h4 className="text-sm font-bold font-display group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SEO LOCAL POR CIUDAD ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>SEO Local</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              SEO local por <span className="gradient-text">ciudad</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Cada mercado es diferente. Diseñamos estrategias adaptadas a la competencia y oportunidades de cada ciudad de la Península de Yucatán.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className={`group relative rounded-2xl border border-border overflow-hidden hover:border-primary/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.2)] ${i >= 3 ? "sm:col-span-1" : ""}`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <city.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors duration-300">{city.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                        <MapPin size={10} />
                        Península de Yucatán
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{city.desc}</p>
                  {/* Industry tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {city.industries.map((ind, j) => (
                      <span key={j} className="text-[10px] font-medium text-primary/60 px-2 py-0.5 rounded-full border border-primary/15 bg-primary/5">
                        {ind}
                      </span>
                    ))}
                  </div>
                  {city.href && (
                    <Link
                      to={city.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      Ver servicios en {city.name} <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── RESULTADOS ESPERADOS (Dark) ──────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,47%,6%)] via-[hsl(228,50%,12%)] to-[hsl(224,47%,6%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[40px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-20">
            <SectionBadge variant="accent">Impacto Real</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
              Resultados que puedes <span className="gradient-text">esperar</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              Métricas reales de clientes que han implementado una estrategia SEO integral con North.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {results.map((item, i) => (
              <motion.div key={i} {...fade(i * 0.1)} className="text-center group">
                <div className="relative mb-5">
                  <motion.span
                    className="block text-5xl sm:text-6xl font-extrabold font-display gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
                  >
                    {item.value}
                  </motion.span>
                  <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <p className="text-sm font-semibold text-white mb-2">{item.label}</p>
                <p className="text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── POR QUÉ ELEGIRNOS ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="hidden md:block absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>North</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Por qué elegir <span className="gradient-text">North</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              No somos una agencia genérica. Somos tu socio estratégico de posicionamiento orgánico en la Península de Yucatán.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.35)] transition-all duration-500">
                    <r.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeText />

      {/* ──────── CTA FINAL ──────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[40px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Posicionamiento Orgánico
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
              Deja de depender de la pauta y crece con{" "}
              <span className="gradient-text">SEO estratégico</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
              Te ayudamos a construir un canal orgánico que genere tráfico cualificado, leads y ventas de forma constante y predecible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/contacto">
                  Solicitar diagnóstico SEO <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base px-8 py-3 rounded-lg border border-white/30 text-white bg-transparent font-medium transition-all duration-300 hover:bg-white hover:text-[hsl(220,50%,10%)] hover:border-white"
              >
                <MessageSquare size={16} /> Hablar con un especialista
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SeoPage;
