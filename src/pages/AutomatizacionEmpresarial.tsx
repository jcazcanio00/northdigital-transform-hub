import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap, ArrowRight, Settings, BarChart3, Users, Bell,
  Activity, Globe, Shield, Target, AlertTriangle,
  Workflow, Database, LineChart, MessageSquare, Calendar,
  CheckCircle2, TrendingUp, Clock, Layers, Monitor,
  FileSpreadsheet, Cpu, Link2, RefreshCw, Mail, Search,
  ArrowUpRight, GitBranch, Play, Filter, Eye,
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

const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20automatizar%20procesos%20en%20mi%20empresa";
const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

/* ─── JSON-LD ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización Empresarial",
  provider: { "@type": "Organization", name: "North", url: "https://northmkt.com.mx" },
  description: "Automatizamos procesos, seguimiento comercial e integración de sistemas para que tu empresa opere con más eficiencia.",
  url: "https://northmkt.com.mx/automatizacion-empresarial",
  areaServed: { "@type": "Country", name: "México" },
  serviceType: "Automatización de Procesos Empresariales",
};

/* ─── Data ─── */
const problems = [
  { icon: AlertTriangle, text: "Leads sin seguimiento" },
  { icon: Database, text: "Datos duplicados" },
  { icon: RefreshCw, text: "Procesos manuales repetitivos" },
  { icon: Link2, text: "Sistemas que no se comunican" },
  { icon: Clock, text: "Reportes lentos" },
  { icon: Eye, text: "Equipos trabajando sin visibilidad" },
];

const automationModules = [
  {
    title: "Ventas y Leads",
    icon: Target,
    items: ["Captación automática", "Asignación de leads", "Seguimiento comercial"],
  },
  {
    title: "Operaciones",
    icon: Settings,
    items: ["Tareas internas", "Procesos repetitivos", "Flujos de aprobación"],
  },
  {
    title: "Marketing",
    icon: BarChart3,
    items: ["Automatización de campañas", "Scoring de leads", "Seguimiento posterior"],
  },
  {
    title: "Atención y Notificaciones",
    icon: Bell,
    items: ["Emails automáticos", "Alertas internas", "Recordatorios y seguimiento"],
  },
];

const flowSteps = [
  { icon: Play, title: "Evento", desc: "Se dispara un trigger" },
  { icon: Filter, title: "Validación", desc: "Se filtran condiciones" },
  { icon: GitBranch, title: "Regla de negocio", desc: "Lógica personalizada" },
  { icon: Zap, title: "Automatización", desc: "Ejecución del flujo" },
  { icon: CheckCircle2, title: "Acción", desc: "Tarea completada" },
  { icon: LineChart, title: "Reporte", desc: "Registro y métricas" },
];

const benefits = [
  { value: "–70%", label: "Menos tiempo en tareas manuales" },
  { value: "3×", label: "Más velocidad operativa" },
  { value: "–85%", label: "Menos errores humanos" },
  { value: "+60%", label: "Mejor seguimiento de clientes" },
  { value: "100%", label: "Más visibilidad del negocio" },
  { value: "∞", label: "Procesos escalables" },
];

const useCases = [
  { icon: Target, title: "Automatización de leads", desc: "Captura, asigna y da seguimiento sin intervención manual." },
  { icon: Workflow, title: "Flujos comerciales", desc: "Pipeline de ventas con etapas, tareas y alertas automáticas." },
  { icon: Bell, title: "Notificaciones automáticas", desc: "Emails, SMS y alertas internas en momentos clave." },
  { icon: FileSpreadsheet, title: "Procesos administrativos", desc: "Aprobaciones, reportes y tareas recurrentes automatizadas." },
  { icon: Link2, title: "Integración entre áreas", desc: "Conecta ventas, marketing, soporte y operaciones." },
  { icon: LineChart, title: "Automatización de reportes", desc: "Dashboards y reportes generados en tiempo real." },
];

const techLogos = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/228BE6" },
  { name: "Webhooks", icon: "https://cdn.simpleicons.org/webhook/228BE6" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Make", icon: "https://cdn.simpleicons.org/make/6D00CC" },
];

/* ─── Hero Mockup ─── */
const AutomationMockup = () => (
  <div className="relative rounded-2xl border border-border bg-white shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)] overflow-hidden">
    {/* Title bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-[hsl(220,20%,98%)]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[9px] text-muted-foreground/50 ml-1 font-mono">automate.northmkt.com</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Bell size={8} className="text-primary" />
        </div>
        <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
          <span className="text-[7px] font-bold text-primary">N</span>
        </div>
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="w-36 border-r border-border/40 py-3 px-2 space-y-0.5 hidden md:block bg-[hsl(220,20%,98%)]">
        {[
          { icon: Monitor, label: "Dashboard", active: true },
          { icon: Workflow, label: "Workflows" },
          { icon: Zap, label: "Triggers" },
          { icon: Link2, label: "Integraciones" },
          { icon: Activity, label: "Logs" },
          { icon: Settings, label: "Config" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium ${item.active ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground/50"}`}>
            <item.icon size={12} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-3 space-y-2.5 bg-[hsl(220,14%,97%)]">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Automatizaciones", value: "48", change: "+12%" },
            { label: "Ejecuciones hoy", value: "1,204", change: "+34%" },
            { label: "Tasa de éxito", value: "99.2%", change: "+0.5%" },
          ].map((m, i) => (
            <div key={i} className="rounded-xl bg-white border border-border/40 p-2.5 shadow-sm">
              <div className="text-[8px] text-muted-foreground/60">{m.label}</div>
              <div className="text-sm font-bold text-foreground">{m.value}</div>
              <div className="text-[8px] font-medium text-primary"><TrendingUp size={8} className="inline mr-0.5" />{m.change}</div>
            </div>
          ))}
        </div>

        {/* Workflow builder */}
        <div className="rounded-xl bg-white border border-border/40 p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[10px] font-semibold">Workflow: Lead → CRM → Email</div>
            <span className="text-[8px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Activo</span>
          </div>
          {/* Flow nodes */}
          <div className="flex items-center gap-1 overflow-hidden">
            {[
              { icon: Globe, label: "Formulario", color: "bg-primary/10 text-primary" },
              { icon: Filter, label: "Validar", color: "bg-accent/10 text-accent" },
              { icon: Users, label: "CRM", color: "bg-primary/10 text-primary" },
              { icon: Mail, label: "Email", color: "bg-accent/10 text-accent" },
              { icon: Bell, label: "Notificar", color: "bg-primary/10 text-primary" },
            ].map((node, i, arr) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-border/40 ${node.color} bg-opacity-50`}>
                  <node.icon size={10} />
                  <span className="text-[8px] font-medium">{node.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <ArrowRight size={10} className="text-primary/40" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2">
          {/* Activity */}
          <div className="rounded-xl bg-white border border-border/40 p-2.5 shadow-sm">
            <div className="text-[9px] font-semibold mb-1.5">Actividad reciente</div>
            {[
              { t: "Lead asignado a Ventas", time: "2m" },
              { t: "Email de bienvenida enviado", time: "5m" },
              { t: "Workflow ejecutado: Onboarding", time: "12m" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-1.5 py-0.5">
                <motion.div
                  className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
                <div>
                  <div className="text-[8px] text-foreground/70">{a.t}</div>
                  <div className="text-[7px] text-muted-foreground/50">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-xl bg-white border border-border/40 p-2.5 shadow-sm">
            <div className="text-[9px] font-semibold mb-1.5">Ejecuciones (7d)</div>
            <div className="flex items-end gap-[2px] h-12">
              {[40, 55, 45, 70, 65, 80, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-primary/60"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════ */

const AutomatizacionEmpresarial = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Automatización Empresarial | Procesos y Ventas | North"
        description="Automatizamos procesos, seguimiento comercial e integración de sistemas para que tu empresa opere con más eficiencia."
        url="https://northmkt.com.mx/automatizacion-empresarial"
        keywords="automatizacion empresarial, automatizacion de procesos, automatizacion de ventas, integracion de sistemas"
        image="https://northmkt.com.mx/og-image.jpg"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-0 md:min-h-[90vh] flex items-center pt-6 md:pt-20 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/6 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()} className="text-center lg:text-left">
              <SectionBadge>AUTOMATIZACIÓN EMPRESARIAL</SectionBadge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
                Automatiza Procesos y Escala tu{" "}
                <span className="gradient-text">Empresa</span>{" "}
                con Tecnología
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                Diseñamos sistemas y flujos de automatización que eliminan tareas manuales, conectan herramientas y permiten a tu empresa operar con mayor velocidad, control y eficiencia.
              </p>
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: Zap, text: "Menos tareas manuales" },
                  { icon: Link2, text: "Integración entre sistemas" },
                  { icon: Activity, text: "Más control operativo en tiempo real" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <Link to="/contacto">
                    Solicitar diagnóstico <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="mr-1" /> Hablar con un especialista
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <AutomationMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────── SECTION 1: PROBLEMAS ──────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(220, 20%, 97%)" }}>
        <div className="hidden md:block absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fade()}>
              <SectionBadge>Diagnóstico</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-6">
                Problemas que{" "}
                <span className="gradient-text">resolvemos</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Muchas empresas dependen de procesos manuales, herramientas desconectadas y seguimiento inconsistente. Eso genera retrasos, errores y pérdida de oportunidades.
              </p>
            </motion.div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.06)}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <p.icon size={18} className="text-destructive/70" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{p.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SECTION 2: QUÉ PODEMOS AUTOMATIZAR ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Capacidades</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Qué podemos{" "}
              <span className="gradient-text">automatizar</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Diseñamos automatizaciones que conectan áreas críticas del negocio y reducen trabajo manual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationModules.map((mod, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <mod.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-display">{mod.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SECTION 3: CÓMO FUNCIONA ──────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(220, 20%, 97%)" }}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Proceso</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Cómo funciona una{" "}
              <span className="gradient-text">automatización</span>
            </h2>
          </motion.div>

          {/* Desktop flow */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between max-w-5xl mx-auto">
              {/* Connecting line */}
              <div className="absolute top-8 left-[8%] right-[8%] h-[2px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
              {flowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.1)}
                  className="flex flex-col items-center text-center w-1/6 relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-border/50 shadow-md flex items-center justify-center mb-3 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <step.icon size={22} className="text-primary" />
                  </div>
                  <div className="text-xs font-bold font-display mb-1">{step.title}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{step.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden space-y-4">
            {flowSteps.map((step, i) => (
              <motion.div key={i} {...fade(i * 0.06)} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center shrink-0">
                  <step.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display">{step.title}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight size={14} className="text-primary/30 shrink-0 ml-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SECTION 4: RESULTADOS — Dark ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge variant="accent">Impacto</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4 text-white">
              Resultados que puedes{" "}
              <span className="gradient-text">esperar</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-display gradient-text mb-2">{b.value}</div>
                <div className="text-sm text-white/60">{b.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SECTION 5: CASOS DE USO ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Aplicaciones</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Automatización adaptada a tu{" "}
              <span className="gradient-text">operación</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <uc.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold font-display mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SECTION 6: TECNOLOGÍAS ──────── */}
      <section className="py-24" style={{ backgroundColor: "hsl(220, 20%, 97%)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
            <SectionBadge>Stack Tecnológico</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Tecnologías que{" "}
              <span className="gradient-text">utilizamos</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos automatizaciones utilizando herramientas modernas, seguras y escalables.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techLogos.map((tech, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.04)}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  width={32}
                  height={32}
                />
                <span className="text-[10px] font-medium text-muted-foreground/60 group-hover:text-foreground/80 transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeText />

      {/* ──────── SECTION 7: CTA FINAL ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
              Automatiza tu empresa y recupera tiempo para{" "}
              <span className="gradient-text">crecer</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Te ayudamos a identificar procesos manuales, diseñar flujos más eficientes e implementar automatizaciones que generen resultados reales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/contacto">
                  Solicitar diagnóstico <ArrowRight size={16} className="ml-1" />
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

export default AutomatizacionEmpresarial;
