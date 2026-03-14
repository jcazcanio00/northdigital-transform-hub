import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Target, BarChart3, TrendingUp, Zap, ArrowRight, ArrowDown,
  MousePointerClick, LineChart, Globe, Eye, Users, DollarSign,
  Sun, Moon, Menu, X, ChevronRight, Layers, Megaphone,
  PieChart, Gauge, ShoppingCart, FileText, Mail, Repeat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ─── Header ─── */
const MarketingHeader = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Canales", href: "#channels" },
    { label: "Framework", href: "#framework" },
    { label: "Contacto", href: "/#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card py-3 shadow-lg" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-display">N</span>
          </div>
          <span className="text-lg font-bold font-display">North Digital</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) =>
            l.href.startsWith("/") && !l.href.includes("#") ? (
              <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(!isDark)} className={`relative w-14 h-7 rounded-full transition-all duration-300 flex items-center ${isDark ? "bg-gradient-to-r from-primary to-primary/80" : "bg-muted/60 border border-border/40"}`} aria-label="Toggle theme">
            <span className="absolute left-1.5 flex items-center justify-center"><Sun size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-40 text-white/60" : "opacity-0"}`} /></span>
            <span className="absolute right-1.5 flex items-center justify-center"><Moon size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40 text-foreground/60"}`} /></span>
            <span className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${isDark ? "translate-x-[30px]" : "translate-x-[3px]"}`}>
              {isDark ? <Moon size={10} className="text-primary" /> : <Sun size={10} className="text-amber-500" />}
            </span>
          </button>
          <Button variant="gradient" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="/#contact">Agendar Consulta</a>
          </Button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-border mt-2 p-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ─── Growth Dashboard Mockup ─── */
const GrowthMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="rounded-2xl border border-border overflow-hidden bg-card shadow-xl"
  >
    <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      <span className="ml-2 text-[10px] text-muted-foreground font-mono">growth-analytics.north.dev</span>
    </div>
    <div className="p-4 space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Conversiones", value: "1,247", change: "+18%", icon: Target, color: "text-green-500" },
          { label: "CTR", value: "4.8%", change: "+0.6%", icon: MousePointerClick, color: "text-primary" },
          { label: "ROAS", value: "5.2x", change: "+1.1x", icon: DollarSign, color: "text-yellow-500" },
          { label: "Tráfico", value: "84.3K", change: "+22%", icon: TrendingUp, color: "text-accent" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-3 text-center">
            <m.icon size={14} className={`mx-auto mb-1.5 ${m.color}`} />
            <p className="text-lg font-bold font-display">{m.value}</p>
            <p className="text-[9px] text-green-500 font-medium">{m.change}</p>
            <p className="text-[8px] text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Mini chart representation */}
      <div className="rounded-lg border border-border p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Revenue Growth</p>
          <span className="text-[9px] text-green-500 font-medium">+34% YoY</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[30, 35, 28, 42, 38, 52, 48, 58, 55, 68, 62, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/20 hover:bg-primary/40 transition-colors" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[7px] text-muted-foreground">Ene</span>
          <span className="text-[7px] text-muted-foreground">Dic</span>
        </div>
      </div>

      {/* Channel breakdown */}
      <div className="rounded-lg border border-border p-3">
        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Top Channels</p>
        <div className="space-y-2">
          {[
            { name: "Google Ads", pct: 42, color: "bg-primary" },
            { name: "SEO Orgánico", pct: 31, color: "bg-green-500" },
            { name: "Landing Pages", pct: 18, color: "bg-accent" },
            { name: "Email", pct: 9, color: "bg-yellow-500" },
          ].map((ch) => (
            <div key={ch.name} className="flex items-center gap-2">
              <span className="text-[9px] text-foreground/70 w-20 shrink-0">{ch.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-muted/50 overflow-hidden">
                <div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
              </div>
              <span className="text-[9px] text-muted-foreground font-mono w-8 text-right">{ch.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Data ─── */
const channels = [
  { icon: Search, title: "SEO Estratégico", desc: "Posicionamiento orgánico basado en análisis de keywords, arquitectura web y contenido técnico optimizado." },
  { icon: Target, title: "Google Ads", desc: "Campañas de búsqueda, display y remarketing con optimización continua de ROAS y coste por conversión." },
  { icon: Layers, title: "Landing Pages Optimizadas", desc: "Diseño y desarrollo de páginas de aterrizaje con A/B testing y optimización de conversión." },
  { icon: LineChart, title: "Analítica Avanzada", desc: "Configuración de GA4, tag management, dashboards personalizados y atribución multicanal." },
  { icon: MousePointerClick, title: "Optimización de Conversiones", desc: "CRO basado en datos: heatmaps, tests A/B, análisis de embudos y mejoras iterativas." },
  { icon: Mail, title: "Automatización de Marketing", desc: "Secuencias de email, lead nurturing y workflows que convierten prospectos en clientes." },
];

const frameworkSteps = [
  { icon: Megaphone, title: "Adquisición", desc: "Atraer tráfico cualificado a través de SEO, SEM y canales pagados.", color: "text-blue-500" },
  { icon: MousePointerClick, title: "Conversión", desc: "Optimizar cada punto de contacto para maximizar la tasa de conversión.", color: "text-green-500" },
  { icon: Repeat, title: "Retención", desc: "Estrategias de engagement y nurturing para retener y fidelizar clientes.", color: "text-yellow-500" },
  { icon: TrendingUp, title: "Escala", desc: "Amplificar los canales rentables y escalar la inversión de forma predecible.", color: "text-primary" },
];

const marketingLogos = [
  { name: "Google Ads", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg" },
  { name: "Tag Manager", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googletagmanager.svg" },
  { name: "Semrush", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/semrush.svg" },
  { name: "HubSpot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg" },
  { name: "Mailchimp", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" },
  { name: "Hotjar", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hotjar.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" },
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

const metrics = [
  { icon: DollarSign, title: "ROAS", desc: "Retorno sobre inversión publicitaria: cada dólar invertido genera resultados medibles.", value: "5.2x" },
  { icon: MousePointerClick, title: "Tasa de conversión", desc: "Porcentaje de visitantes que completan la acción objetivo en cada canal.", value: "4.8%" },
  { icon: Eye, title: "CTR", desc: "Click-through rate en campañas de búsqueda, display y redes sociales.", value: "+62%" },
  { icon: Users, title: "Coste por Lead", desc: "Optimización continua del costo de adquisición por lead cualificado.", value: "-34%" },
  { icon: TrendingUp, title: "Tráfico orgánico", desc: "Crecimiento sostenido de visitas desde búsqueda orgánica sin dependencia de pauta.", value: "+120%" },
  { icon: Gauge, title: "Velocidad de carga", desc: "Optimización de Core Web Vitals para mejorar posicionamiento y experiencia.", value: "<1.5s" },
];

const useCases = [
  { icon: ShoppingCart, title: "E-commerce y retail", desc: "Estrategias de adquisición y retención para tiendas online con optimización de embudo completo." },
  { icon: Globe, title: "SaaS y plataformas", desc: "Growth loops, onboarding optimizado y estrategias de activación para productos digitales." },
  { icon: FileText, title: "Generación de leads B2B", desc: "Campañas de búsqueda y contenido técnico para capturar leads cualificados en mercados B2B." },
  { icon: Users, title: "Servicios profesionales", desc: "Posicionamiento local, Google Ads y landing pages para firmas de consultoría y servicios." },
  { icon: PieChart, title: "Startups en crecimiento", desc: "Frameworks de growth para startups que necesitan validar canales y escalar rápidamente." },
  { icon: BarChart3, title: "Empresas con equipos internos", desc: "Consultoría y ejecución especializada para potenciar equipos de marketing existentes." },
];

/* ─── Main Page ─── */
const MarketingPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MarketingHeader />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <TrendingUp size={12} className="text-primary" />
                GROWTH MARKETING
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Marketing de{" "}
                <span className="gradient-text">Crecimiento</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Estrategias de adquisición, analítica avanzada y optimización de conversiones para escalar ingresos de forma predecible y sostenible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#channels">Canales de Crecimiento <ArrowDown size={16} className="ml-2" /></a>
                </Button>
                <Button variant="outline" size="lg" className="gradient-btn-outline" asChild>
                  <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
                </Button>
              </div>
            </motion.div>
            <GrowthMockup />
          </div>
        </div>
      </section>

      {/* ═══ CANALES DE CRECIMIENTO ═══ */}
      <section id="channels" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Canales de <span className="gradient-text">Crecimiento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada canal está optimizado para generar tráfico cualificado, leads y conversiones medibles.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((s, i) => (
              <motion.div
                key={s.title}
                {...fade(i * 0.07)}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <s.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FRAMEWORK DE CRECIMIENTO ═══ */}
      <section id="framework" className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Framework de <span className="gradient-text">Crecimiento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un sistema probado que cubre cada etapa del funnel: desde atraer visitantes hasta escalar los canales más rentables.
            </p>
          </motion.div>

          {/* Desktop pipeline */}
          <div className="hidden lg:block relative max-w-4xl mx-auto">
            <div className="absolute top-[56px] left-[12%] right-[12%] h-[2px] bg-border/50 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[56px] left-[12%] right-[12%] h-[2px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.6), hsl(var(--primary)), hsl(var(--primary)/0.6))" }}
            />
            <div className="grid grid-cols-4 gap-6">
              {frameworkSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <span className="text-[10px] font-bold text-primary/40 mb-2 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <div className="w-[80px] h-[80px] rounded-2xl border-2 border-border bg-card flex items-center justify-center shadow-md group-hover:border-primary/40 group-hover:shadow-[0_0_35px_-8px_hsl(var(--primary)/0.35)] transition-all duration-500">
                      <step.icon size={28} className={`${step.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40 border-2 border-card group-hover:bg-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-bold font-display mt-5 mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile pipeline */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {frameworkSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 mb-8 last:mb-0 relative group"
              >
                <div className="relative z-10 w-10 h-10 rounded-xl border-2 border-primary/20 bg-card flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/40 transition-colors">
                  <step.icon size={16} className={step.color} />
                </div>
                <div className="pt-0.5">
                  <span className="text-[9px] font-bold text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-sm font-bold font-display group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH SLIDER ═══ */}
      <section className="py-14 relative overflow-hidden border-y border-border/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-6">
          <p className="text-center text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-medium">
            Tecnologías y plataformas que utilizamos para growth marketing
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[scroll_35s_linear_infinite] w-max gap-14 px-6">
            {[...marketingLogos, ...marketingLogos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex flex-col items-center gap-2 min-w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src={logo.icon} alt={logo.name} className="w-8 h-8 object-contain dark:invert dark:brightness-200 dark:contrast-200" loading="lazy" />
                <span className="text-[9px] text-muted-foreground tracking-wider uppercase whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MÉTRICAS ═══ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Métricas que <span className="gradient-text">optimizamos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos enfocamos en los indicadores que realmente impactan el crecimiento y la rentabilidad de tu negocio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {metrics.map((m, i) => (
              <motion.div
                key={m.title}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_15px_50px_-12px_hsl(var(--primary)/0.2)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.02]" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <m.icon size={22} className="text-primary" />
                    </div>
                    <span className="text-xl font-extrabold font-display gradient-text">{m.value}</span>
                  </div>
                  <h3 className="text-base font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASOS DE USO ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-transparent to-muted/20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Casos de uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Growth marketing <span className="gradient-text">en acción</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estrategias adaptadas a cada tipo de negocio para maximizar el retorno de cada canal.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div key={u.title} {...fade(i * 0.07)} className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/25 hover:shadow-[0_15px_50px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <u.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-display group-hover:text-primary transition-colors">{u.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white">
              Escala tus ingresos con{" "}
              <span className="gradient-text">growth marketing</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Estrategias de adquisición y conversión diseñadas para empresas que quieren crecer de forma medible y sostenible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/#contact">Empezar ahora <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white hover:text-foreground text-white border border-white/20 transition-all" asChild>
                <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingPage;
