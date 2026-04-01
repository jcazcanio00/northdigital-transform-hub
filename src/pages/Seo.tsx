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
  { name: "Cancún", desc: "Posicionamiento SEO para empresas turísticas, inmobiliarias, restaurantes y servicios profesionales en la zona hotelera y alrededores.", href: "/marketing-digital-cancun", icon: "🏖️", industries: ["Turismo", "Inmobiliaria", "Gastronomía"] },
  { name: "Mérida", desc: "SEO para negocios locales, clínicas, despachos profesionales y empresas en crecimiento en la capital yucateca.", icon: "🏛️", industries: ["Salud", "Legal", "Servicios"] },
  { name: "Playa del Carmen", desc: "Estrategias de posicionamiento para bienes raíces, servicios turísticos y comercios de la Riviera Maya.", href: "/marketing-digital-playa-del-carmen", icon: "🌊", industries: ["Bienes raíces", "Turismo", "Retail"] },
  { name: "Tulum", desc: "SEO especializado para hoteles boutique, marcas wellness, restaurantes de autor y experiencias de lujo.", href: "/marketing-digital-tulum", icon: "🌿", industries: ["Wellness", "Hotelería", "Experiencias"] },
  { name: "Campeche", desc: "Posicionamiento web para empresas locales, servicios profesionales y negocios en expansión en el estado.", icon: "⚓", industries: ["Comercio", "Servicios", "Industria"] },
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

/* ─── SEO Dashboard Mockup ─── */
const SeoMockup = () => (
  <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-border bg-background shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)]">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-card">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />
        </div>
        <span className="ml-1 text-[9px] font-mono text-muted-foreground/50">seo-analytics.north.dev</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
          <Bell size={8} className="text-primary" />
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15">
          <span className="text-[7px] font-bold text-primary">N</span>
        </div>
      </div>
    </div>

    <div className="flex">
      <div className="hidden w-36 space-y-0.5 border-r border-border/40 bg-card px-2 py-3 md:block">
        {[
          { icon: Monitor, label: "Dashboard", active: true },
          { icon: Search, label: "Keywords" },
          { icon: TrendingUp, label: "Rankings" },
          { icon: Link2, label: "Backlinks" },
          { icon: Activity, label: "Auditoría" },
          { icon: Settings, label: "Config" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[10px] font-medium ${item.active ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground/50"}`}>
            <item.icon size={12} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 space-y-2.5 bg-secondary p-2.5 sm:p-3">
        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Tráfico Orgánico", value: "24.8K", change: "+32%", icon: TrendingUp, color: "text-primary" },
            { label: "Keywords Top 10", value: "142", change: "+18", icon: Target, color: "text-emerald-500" },
            { label: "Domain Authority", value: "48", change: "+6", icon: Shield, color: "text-accent" },
            { label: "Conv. Orgánicas", value: "312", change: "+45%", icon: BarChart3, color: "text-amber-500" },
          ].map((m, i) => (
            <div key={i} className="rounded-lg border border-border/40 bg-background p-2 shadow-sm">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[8px] font-medium text-muted-foreground/50">{m.label}</p>
                <m.icon size={10} className="text-muted-foreground/30" />
              </div>
              <p className={`text-sm font-bold leading-none sm:text-base ${m.color}`}>{m.value}</p>
              <p className="mt-0.5 text-[8px] font-medium text-emerald-500">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
          <div className="rounded-lg border border-border/40 bg-background p-2.5 shadow-sm sm:col-span-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[9px] font-semibold text-muted-foreground/60">Tráfico Orgánico (12m)</p>
              <span className="rounded-full bg-primary/8 px-1.5 py-0.5 text-[7px] font-medium text-primary">+32% YoY</span>
            </div>
            <div className="flex items-end gap-[3px] h-16">
              {[30, 35, 38, 42, 48, 52, 58, 65, 62, 70, 75, 82].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-primary/60"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[6px] text-muted-foreground/30">Ene</span>
              <span className="text-[6px] text-muted-foreground/30">Jun</span>
              <span className="text-[6px] text-muted-foreground/30">Dic</span>
            </div>
          </div>

          <div className="space-y-2 sm:col-span-2">
            <div className="rounded-lg border border-border/40 bg-background p-2.5 shadow-sm">
              <p className="text-[9px] font-semibold text-muted-foreground/60 mb-2">Top Keywords</p>
              <div className="space-y-1.5">
                {[
                  { kw: "seo cancún", pos: "#1", change: "↑2" },
                  { kw: "agencia seo mérida", pos: "#3", change: "↑4" },
                  { kw: "posicionamiento web", pos: "#4", change: "↑3" },
                  { kw: "seo empresas méxico", pos: "#5", change: "↑6" },
                ].map((k, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md border border-border/20 bg-secondary p-1.5">
                    <span className="text-[8px] text-foreground/70 truncate flex-1">{k.kw}</span>
                    <span className="font-bold text-primary text-[8px]">{k.pos}</span>
                    <span className="text-emerald-500 font-medium text-[8px]">{k.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom activity bar */}
        <div className="hidden rounded-lg border border-border/40 bg-background p-2 shadow-sm sm:block">
          <div className="flex items-center gap-3">
            {[
              { icon: CheckCircle2, text: "15 keywords nuevas en Top 10", time: "Hoy" },
              { icon: TrendingUp, text: "Tráfico orgánico +12% vs. mes anterior", time: "7d" },
              { icon: Link2, text: "8 backlinks nuevos adquiridos", time: "30d" },
            ].map((a, i) => (
              <div key={i} className="flex flex-1 items-center gap-1.5 text-[8px]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-primary/8">
                  <a.icon size={8} className="text-primary" />
                </div>
                <span className="truncate text-foreground/50">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
      <section className="pt-6 md:pt-20 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/6 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <Search size={12} className="text-primary" />
                SEO &amp; POSICIONAMIENTO WEB
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
                Posiciona tu Empresa en{" "}
                <img src="/images/google-logo.png" alt="Google" className="inline-block h-[0.85em] align-baseline relative -top-[0.02em]" />{" "}
                y Genera Más Clientes
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                Diseñamos estrategias SEO para empresas en la Península de Yucatán que buscan crecer con tráfico orgánico, autoridad digital y más oportunidades de venta.
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: TrendingUp, text: "Crecimiento orgánico sostenido y medible" },
                  { icon: MapPin, text: "SEO local adaptado a tu ciudad y mercado" },
                  { icon: BarChart3, text: "Reportes ejecutivos con métricas reales" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <Link to="/contacto">
                    Solicitar diagnóstico SEO <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6 gradient-btn-outline" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="mr-1" /> Hablar con un especialista
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SeoMockup />
            </motion.div>
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
                      <span className="text-2xl">{city.icon}</span>
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
