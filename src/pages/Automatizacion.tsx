import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap, ArrowRight, ArrowDown, CheckCircle2, AlertTriangle,
  Users, BarChart3, Mail, Bell, Settings, Workflow,
  Sun, Moon, Menu, X, GitBranch, Database,
  Clock, ShieldCheck, TrendingUp, Link2, Brain, FileText,
  ChevronRight, Play, Cog, Filter, Sparkles
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
const AutoHeader = () => {
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
    { label: "Procesos", href: "#processes" },
    { label: "Integraciones", href: "#integrations" },
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

/* ─── Automation Flow Mockup ─── */
const AutomationMockup = () => {
  const nodes = [
    { label: "CRM", icon: Users, color: "text-blue-500" },
    { label: "API", icon: GitBranch, color: "text-primary" },
    { label: "Automatización", icon: Zap, color: "text-yellow-500" },
    { label: "Dashboard", icon: BarChart3, color: "text-green-500" },
    { label: "Notificaciones", icon: Bell, color: "text-accent" },
  ];

  return (
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
        <span className="ml-2 text-[10px] text-muted-foreground font-mono">automation-flow.north.dev</span>
      </div>

      <div className="p-6">
        {/* Flow diagram */}
        <div className="flex items-center justify-between gap-2 mb-6">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-12 h-12 rounded-xl border border-border bg-muted/30 flex items-center justify-center">
                  <node.icon size={18} className={node.color} />
                </div>
                <span className="text-[8px] text-muted-foreground font-medium uppercase tracking-wider">{node.label}</span>
              </div>
              {i < nodes.length - 1 && (
                <ChevronRight size={12} className="text-primary/40 -mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="rounded-lg border border-border p-3 mb-4">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Automation Log</p>
          <div className="space-y-1.5">
            {[
              { time: "14:22:01", msg: "Lead capturado → CRM actualizado", type: "success" },
              { time: "14:21:45", msg: "Webhook recibido → Pipeline ejecutado", type: "info" },
              { time: "14:20:30", msg: "Reporte semanal generado → Slack notificado", type: "success" },
              { time: "14:19:12", msg: "Nuevo contacto → Secuencia email iniciada", type: "info" },
              { time: "14:18:03", msg: "Factura creada → Stripe sincronizado", type: "success" },
            ].map((l, i) => (
              <div key={i} className="flex items-start gap-2 text-[10px]">
                <span className="text-muted-foreground font-mono shrink-0">{l.time}</span>
                <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${l.type === "success" ? "bg-green-500" : "bg-primary/60"}`} />
                <span className="text-foreground/70">{l.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Tareas automatizadas", value: "2,847" },
            { label: "Tiempo ahorrado", value: "142h" },
            { label: "Integraciones activas", value: "18" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-muted/30 p-2.5 text-center">
              <p className="text-sm font-bold font-display">{s.value}</p>
              <p className="text-[8px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Data ─── */
const problems = [
  { icon: Database, title: "Datos duplicados", desc: "Información repetida entre sistemas que genera confusión y decisiones incorrectas." },
  { icon: Clock, title: "Tareas manuales repetitivas", desc: "Horas invertidas en copiar datos, enviar correos y actualizar registros a mano." },
  { icon: Link2, title: "Sistemas desconectados", desc: "Plataformas que no se comunican entre sí, creando silos de información." },
  { icon: AlertTriangle, title: "Errores humanos", desc: "Fallos por intervención manual que impactan la operación y la calidad del servicio." },
  { icon: TrendingUp, title: "Procesos lentos", desc: "Flujos de trabajo que frenan el crecimiento y retrasan la toma de decisiones." },
];

const automations = [
  { icon: Users, title: "Procesos de ventas", desc: "Automatización de leads, seguimiento y pipelines de conversión." },
  { icon: Mail, title: "Gestión de clientes", desc: "Integración entre CRM, correo y plataformas internas de atención." },
  { icon: BarChart3, title: "Reportes automáticos", desc: "Generación automática de dashboards, métricas y reportes periódicos." },
  { icon: GitBranch, title: "Integraciones entre sistemas", desc: "Conexión entre APIs, bases de datos y plataformas externas." },
  { icon: Bell, title: "Notificaciones y alertas", desc: "Automatización de mensajes, correos y eventos del sistema en tiempo real." },
  { icon: Settings, title: "Procesos administrativos", desc: "Automatización de tareas internas y workflows empresariales repetitivos." },
];

const integrationLogos = [
  { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "HubSpot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg" },
  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
  { name: "Microsoft 365", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "APIs Custom", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
];

const pipelineSteps = [
  { icon: Play, title: "Evento", desc: "Un trigger dispara el flujo: formulario, webhook, cron job o cambio en base de datos." },
  { icon: Cog, title: "Procesamiento", desc: "Los datos se transforman, validan y enriquecen automáticamente." },
  { icon: Filter, title: "Reglas de negocio", desc: "Condiciones y lógica personalizada determinan el siguiente paso." },
  { icon: Zap, title: "Automatización", desc: "Acciones ejecutadas sin intervención: crear registros, enviar datos, actualizar sistemas." },
  { icon: Sparkles, title: "Acción final", desc: "Notificaciones, reportes o sincronización con plataformas externas." },
];

const benefits = [
  { icon: Clock, title: "Ahorro de tiempo", desc: "Reducción drástica de tareas manuales y tiempo operativo." },
  { icon: ShieldCheck, title: "Menos errores", desc: "Procesos automatizados más confiables y consistentes." },
  { icon: TrendingUp, title: "Escalabilidad", desc: "Tu empresa crece sin multiplicar procesos manuales." },
  { icon: Link2, title: "Integración total", desc: "Todos los sistemas conectados en un ecosistema unificado." },
  { icon: Brain, title: "Decisiones con datos", desc: "Información centralizada, accesible y en tiempo real." },
];

const useCases = [
  { icon: Users, title: "Automatización de leads", desc: "Captura, calificación y distribución automática de leads desde múltiples fuentes de marketing." },
  { icon: Settings, title: "CRM con sistemas internos", desc: "Sincronización bidireccional entre CRM y plataformas operativas internas." },
  { icon: FileText, title: "Procesamiento de solicitudes", desc: "Recepción, validación y enrutamiento automático de solicitudes y formularios." },
  { icon: Bell, title: "Notificaciones a equipos", desc: "Alertas automáticas por Slack, email o SMS cuando ocurren eventos críticos del negocio." },
  { icon: Workflow, title: "Integración entre plataformas", desc: "Conexión de ERP, facturación, inventario y herramientas de productividad empresarial." },
  { icon: BarChart3, title: "Reportes y analytics", desc: "Generación automática de métricas, KPIs y dashboards actualizados en tiempo real." },
];

/* ─── Main Page ─── */
const AutomatizacionPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AutoHeader />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <Zap size={12} className="text-primary" />
                AUTOMATIZACIÓN EMPRESARIAL
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Automatiza Procesos y{" "}
                <span className="gradient-text">Conecta tus Sistemas</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos automatizaciones e integraciones que eliminan tareas manuales, conectan plataformas y permiten que tu empresa opere con mayor velocidad y eficiencia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#processes">Automatizar Procesos <ArrowDown size={16} className="ml-2" /></a>
                </Button>
                <Button variant="outline" size="lg" className="gradient-btn-outline" asChild>
                  <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
                </Button>
              </div>
            </motion.div>
            <AutomationMockup />
          </div>
        </div>
      </section>

      {/* ═══ PROBLEMA ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-destructive/20 bg-destructive/5 text-xs text-muted-foreground mb-4">
              <AlertTriangle size={12} className="text-destructive" />
              El problema
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Los procesos manuales <span className="gradient-text">frenan el crecimiento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada tarea repetitiva es tiempo perdido, cada sistema aislado es una oportunidad desperdiciada.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-destructive/10 bg-card p-6 text-center hover:border-destructive/25 hover:shadow-[0_10px_40px_-10px_hsl(var(--destructive)/0.1)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/15 transition-colors">
                  <p.icon size={22} className="text-destructive" />
                </div>
                <h3 className="text-sm font-bold font-display mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Resolution arrow */}
          <motion.div {...fade(0.5)} className="flex flex-col items-center mt-12 gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-destructive/30 to-primary/50" />
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
              <Zap size={14} />
              La automatización lo resuelve
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ QUÉ AUTOMATIZAMOS ═══ */}
      <section id="processes" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Soluciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Procesos que podemos <span className="gradient-text">automatizar</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desde la captura de leads hasta la generación de reportes, transformamos flujos manuales en sistemas inteligentes.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((s, i) => (
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

      {/* ═══ INTEGRACIONES SLIDER ═══ */}
      <section id="integrations" className="py-16 relative overflow-hidden border-y border-border/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-8">
          <motion.div {...fade()} className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Integraciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-3">
              Conectamos tus <span className="gradient-text">herramientas</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Integramos las plataformas que ya usas para crear un ecosistema unificado y eficiente.
            </p>
          </motion.div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[scroll_35s_linear_infinite] w-max gap-14 px-6">
            {[...integrationLogos, ...integrationLogos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex flex-col items-center gap-2.5 min-w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src={logo.icon} alt={logo.name} className="w-9 h-9 object-contain dark:invert dark:brightness-200 dark:contrast-200" loading="lazy" />
                <span className="text-[9px] text-muted-foreground tracking-wider uppercase whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FLUJO / PIPELINE ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Cómo funciona una <span className="gradient-text">automatización</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada flujo sigue una arquitectura clara: del evento inicial a la acción final, sin intervención manual.
            </p>
          </motion.div>

          {/* Desktop pipeline */}
          <div className="hidden lg:block relative max-w-5xl mx-auto">
            <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-border/50 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[52px] left-[10%] right-[10%] h-[2px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.6), hsl(var(--primary)), hsl(var(--primary)/0.6))" }}
            />
            <div className="grid grid-cols-5 gap-4">
              {pipelineSteps.map((step, i) => (
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
                    <div className="w-[72px] h-[72px] rounded-2xl border-2 border-border bg-card flex items-center justify-center shadow-md group-hover:border-primary/40 group-hover:shadow-[0_0_35px_-8px_hsl(var(--primary)/0.35)] transition-all duration-500">
                      <step.icon size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40 border-2 border-card group-hover:bg-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-xs font-bold font-display mt-4 mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-snug max-w-[140px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile pipeline */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 mb-8 last:mb-0 relative group"
              >
                <div className="relative z-10 w-10 h-10 rounded-xl border-2 border-primary/20 bg-card flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/40 transition-colors">
                  <step.icon size={16} className="text-primary" />
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

      {/* ═══ BENEFICIOS ═══ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Ventajas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Beneficios de <span className="gradient-text">automatizar procesos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Menos trabajo operativo, más capacidad estratégica para tu equipo.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...fade(i * 0.08)}
                className="group rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/25 hover:shadow-[0_15px_50px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-500">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold font-display mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASOS DE USO ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Casos de uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Automatización en <span className="gradient-text">acción</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escenarios reales donde nuestras automatizaciones generan impacto directo en la operación.
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
              Transforma tus procesos con{" "}
              <span className="gradient-text">automatización inteligente</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Diseñamos automatizaciones e integraciones para empresas que quieren operar con mayor eficiencia y menos fricción.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/#contact">Automatizar Procesos <ArrowRight size={16} className="ml-2" /></a>
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

export default AutomatizacionPage;
