import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search, Target, BarChart3, ArrowRight, Globe, TrendingUp,
  CheckCircle2, MapPin, Eye, FileText, Link2, Settings,
  Zap, Users, Shield, MessageSquare, LineChart, Activity,
  ArrowUpRight, Layers, Code, Monitor,
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
  { icon: Search, title: "Auditoría SEO Técnica", desc: "Análisis completo de la salud técnica de tu sitio: velocidad, indexación, errores, arquitectura y Core Web Vitals.", items: ["Rastreo e indexación", "Core Web Vitals", "Errores técnicos"] },
  { icon: FileText, title: "Estrategia de Contenido", desc: "Investigación de keywords y creación de contenido optimizado para capturar tráfico cualificado con intención de búsqueda.", items: ["Keyword research", "Contenido optimizado", "Calendario editorial"] },
  { icon: Link2, title: "Link Building", desc: "Estrategias de autoridad de dominio con backlinks de calidad, menciones y relaciones públicas digitales.", items: ["Backlinks de calidad", "Digital PR", "Autoridad de dominio"] },
  { icon: MapPin, title: "SEO Local", desc: "Optimización de Google Business Profile, citations y estrategias de posicionamiento para búsquedas locales.", items: ["Google Business Profile", "Citations locales", "Reseñas y reputación"] },
  { icon: Code, title: "SEO Técnico On-Page", desc: "Optimización de títulos, meta descripciones, encabezados, schema markup y estructura semántica del sitio.", items: ["Meta tags optimizados", "Schema markup", "Estructura semántica"] },
  { icon: LineChart, title: "Analytics y Reportes", desc: "Dashboards con métricas clave: posiciones, tráfico orgánico, conversiones y ROI del canal SEO.", items: ["Tracking de posiciones", "Reportes mensuales", "Análisis de conversiones"] },
];

const processSteps = [
  { icon: Eye, title: "Diagnóstico", desc: "Auditoría técnica y análisis competitivo para identificar oportunidades." },
  { icon: Target, title: "Estrategia", desc: "Definimos keywords, arquitectura y plan de contenido alineado a objetivos." },
  { icon: Settings, title: "Implementación", desc: "Ejecutamos optimizaciones técnicas, on-page y off-page." },
  { icon: BarChart3, title: "Monitoreo", desc: "Tracking de posiciones, tráfico y conversiones en tiempo real." },
  { icon: TrendingUp, title: "Optimización", desc: "Iteración continua basada en datos para mejorar resultados." },
];

const cities = [
  { name: "Cancún", desc: "Posicionamiento SEO para empresas turísticas, inmobiliarias, restaurantes y servicios profesionales en la zona hotelera y alrededores.", href: "/marketing-digital-cancun", icon: "🏖️" },
  { name: "Mérida", desc: "SEO para negocios locales, clínicas, despachos y empresas en crecimiento en la capital yucateca.", icon: "🏛️" },
  { name: "Playa del Carmen", desc: "Estrategias de posicionamiento para bienes raíces, servicios turísticos y comercios de la Riviera Maya.", href: "/marketing-digital-playa-del-carmen", icon: "🌊" },
  { name: "Tulum", desc: "SEO especializado para hoteles boutique, marcas wellness, restaurantes y experiencias de lujo.", href: "/marketing-digital-tulum", icon: "🌿" },
  { name: "Campeche", desc: "Posicionamiento web para empresas locales, servicios profesionales y negocios en expansión en el estado.", icon: "⚓" },
];

const results = [
  { value: "+180%", label: "Crecimiento de tráfico orgánico", desc: "Incremento promedio en visitas orgánicas durante los primeros 6 meses de estrategia." },
  { value: "Top 5", label: "Posiciones en keywords objetivo", desc: "Keywords principales posicionadas en las primeras 5 posiciones de Google." },
  { value: "3.5x", label: "Más leads orgánicos", desc: "Multiplicación de leads provenientes de búsquedas orgánicas vs. inversión en SEO." },
  { value: "-40%", label: "Menor dependencia de pauta", desc: "Reducción en gasto de publicidad pagada al crecer el canal orgánico." },
];

const reasons = [
  { icon: Globe, title: "Enfoque regional", desc: "Conocemos el mercado de la Península de Yucatán: competencia, comportamiento de búsqueda y oportunidades específicas por ciudad." },
  { icon: Layers, title: "SEO integral", desc: "No solo optimizamos keywords. Trabajamos técnica, contenido, autoridad y experiencia de usuario como un sistema completo." },
  { icon: BarChart3, title: "Reportes transparentes", desc: "Dashboards en tiempo real con métricas claras: posiciones, tráfico, conversiones y ROI del canal orgánico." },
  { icon: Zap, title: "Resultados medibles", desc: "Cada acción está orientada a generar más tráfico cualificado y más leads, no solo mejorar posiciones." },
  { icon: Shield, title: "White-hat SEO", desc: "Solo utilizamos prácticas aprobadas por Google. Sin atajos, sin riesgos de penalización." },
  { icon: Users, title: "Equipo especializado", desc: "Consultores certificados con experiencia real en SEO para distintas industrias y mercados." },
];

/* ─── SEO Dashboard Mockup ─── */
const SeoMockup = () => (
  <div className="relative rounded-2xl border border-border bg-card shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)] overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-muted/50">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[9px] text-muted-foreground/50 ml-1 font-mono">seo-analytics.north.dev</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-status-pulse" />
        <span className="text-[8px] text-green-500 font-medium uppercase tracking-wider">Live</span>
      </div>
    </div>

    <div className="flex">
      <div className="w-36 border-r border-border/40 py-3 px-2 space-y-0.5 hidden md:block bg-muted/30">
        {[
          { icon: Monitor, label: "Dashboard", active: true },
          { icon: Search, label: "Keywords" },
          { icon: TrendingUp, label: "Rankings" },
          { icon: Link2, label: "Backlinks" },
          { icon: Activity, label: "Auditoría" },
          { icon: Settings, label: "Config" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium ${item.active ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground/50"}`}>
            <item.icon size={12} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 p-3 space-y-2.5 bg-secondary">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "Tráfico Orgánico", value: "24.8K", change: "+32%", color: "text-primary" },
            { label: "Keywords Top 10", value: "142", change: "+18", color: "text-emerald-500" },
            { label: "Domain Authority", value: "48", change: "+6", color: "text-accent" },
            { label: "Conv. Orgánicas", value: "312", change: "+45%", color: "text-amber-500" },
          ].map((m, i) => (
            <div key={i} className="rounded-lg border border-border/40 bg-background p-2 shadow-sm">
              <p className="text-[8px] font-medium text-muted-foreground/50 mb-1">{m.label}</p>
              <p className={`text-sm font-bold leading-none sm:text-base ${m.color}`}>{m.value}</p>
              <p className="mt-0.5 text-[8px] font-medium text-emerald-500">{m.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="rounded-lg border border-border/40 bg-background p-2.5 shadow-sm">
            <p className="text-[9px] font-semibold text-muted-foreground/60 mb-2">Tráfico Orgánico (12m)</p>
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

          <div className="rounded-lg border border-border/40 bg-background p-2.5 shadow-sm">
            <p className="text-[9px] font-semibold text-muted-foreground/60 mb-2">Top Keywords</p>
            <div className="space-y-1.5">
              {[
                { kw: "crm para empresas", pos: "#2", change: "↑3" },
                { kw: "software empresarial", pos: "#4", change: "↑5" },
                { kw: "automatización ventas", pos: "#3", change: "↑2" },
                { kw: "marketing digital cancún", pos: "#1", change: "—" },
              ].map((k, i) => (
                <div key={i} className="flex items-center justify-between text-[8px]">
                  <span className="text-foreground/70 truncate flex-1">{k.kw}</span>
                  <span className="font-bold text-primary mx-2">{k.pos}</span>
                  <span className="text-emerald-500 font-medium">{k.change}</span>
                </div>
              ))}
            </div>
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

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <Search size={12} className="text-primary" />
                SEO &amp; POSICIONAMIENTO WEB
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Posiciona tu Empresa en{" "}
                <span className="gradient-text">Google</span>{" "}
                y Genera Más Clientes
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Estrategias de SEO diseñadas para empresas en la Península de Yucatán. Más tráfico orgánico, más leads cualificados y menos dependencia de publicidad pagada.
              </p>

              <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: TrendingUp, text: "Crecimiento de tráfico orgánico sostenido" },
                  { icon: MapPin, text: "SEO local para tu ciudad y zona de servicio" },
                  { icon: BarChart3, text: "Reportes y métricas en tiempo real" },
                ].map((b, i) => (
                  <motion.div key={i} {...fade(i * 0.08)} className="group flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:scale-110 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.3)] transition-all duration-300">
                      <b.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{b.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <Link to="/contacto">
                    Solicitar diagnóstico SEO <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
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
              Un enfoque integral que cubre cada aspecto del posicionamiento orgánico para generar resultados reales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border">
            {services.map((m, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="group bg-background p-7 hover:bg-primary/[0.02] transition-colors duration-300 relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <m.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{m.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                <div className="space-y-1.5">
                  {m.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground/70">
                      <CheckCircle2 size={12} className="text-primary/40 shrink-0" />
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
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Proceso</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Cómo trabajamos el{" "}
              <span className="gradient-text">SEO</span>
            </h2>
          </motion.div>

          {/* Desktop flow */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between max-w-5xl mx-auto">
              <div className="absolute top-8 left-[10%] right-[10%] h-[2px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.1)}
                  className="flex flex-col items-center text-center w-1/5 relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 shadow-md flex items-center justify-center mb-3 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <step.icon size={22} className="text-primary" />
                  </div>
                  <div className="text-xs font-bold font-display mb-1">{step.title}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight max-w-[140px]">{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden space-y-4">
            {processSteps.map((step, i) => (
              <motion.div key={i} {...fade(i * 0.06)} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background border border-border/50 shadow-sm flex items-center justify-center shrink-0">
                  <step.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display">{step.title}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
                {i < processSteps.length - 1 && (
                  <ArrowRight size={14} className="text-primary/30 shrink-0 ml-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SEO LOCAL POR CIUDAD ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>SEO Local</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              SEO local por <span className="gradient-text">ciudad</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Estrategias de posicionamiento adaptadas al mercado y la competencia de cada ciudad de la Península de Yucatán.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <span className="text-xl">{city.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display group-hover:text-primary transition-colors">{city.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                        <MapPin size={10} />
                        Península de Yucatán
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{city.desc}</p>
                  {city.href && (
                    <Link
                      to={city.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,47%,6%)] via-[hsl(228,50%,12%)] to-[hsl(224,47%,6%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-20">
            <SectionBadge variant="accent">Resultados</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
              Resultados que puedes <span className="gradient-text">esperar</span>
            </h2>
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
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>North</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Por qué elegir <span className="gradient-text">North</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              No somos una agencia SEO genérica. Somos tu socio estratégico de posicionamiento orgánico.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <r.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeText />

      {/* ──────── CTA FINAL ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[40px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
              Posiciona tu empresa en Google y genera{" "}
              <span className="gradient-text">más clientes</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Te ayudamos a diseñar e implementar una estrategia SEO que genere tráfico cualificado y leads de forma constante.
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
