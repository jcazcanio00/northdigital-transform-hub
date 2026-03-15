import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users, Zap, BarChart3, ArrowRight,
  Database, Workflow, Monitor, Settings, LineChart,
  Activity, Bell, MessageSquare, Calendar,
  Target, AlertTriangle, FileSpreadsheet,
  PieChart, UserCheck, Briefcase, Home, Headphones, Layers,
  TrendingUp, CheckCircle2, ArrowUpRight, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const crmJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM para Empresas",
  provider: { "@type": "Organization", name: "North Digital", url: "https://northmkt.com.mx" },
  description:
    "Implementamos sistemas CRM para empresas que organizan clientes, automatizan el seguimiento de leads y mejoran el control de ventas.",
  url: "https://northmkt.com.mx/crm-empresas",
  areaServed: { "@type": "Country", name: "México" },
  serviceType: "Implementación de CRM",
};

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
  const dotColors = {
    primary: "bg-primary",
    destructive: "bg-destructive",
    accent: "bg-accent",
  };
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-4 ${colors[variant]}`}>
      <span className={`w-2 h-2 rounded-full animate-status-pulse ${dotColors[variant]}`} />
      {children}
    </span>
  );
};

/* ─── CRM Dashboard Mockup ─── */
const CrmMockup = () => (
  <div className="relative rounded-2xl border border-border bg-white shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)] overflow-hidden">
    {/* Title bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-[hsl(220,20%,98%)]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[9px] text-muted-foreground/50 ml-1 font-mono">crm.northmkt.com</span>
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
          { icon: Users, label: "Contactos" },
          { icon: Target, label: "Pipeline" },
          { icon: Calendar, label: "Actividades" },
          { icon: BarChart3, label: "Reportes" },
          { icon: Settings, label: "Config" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium ${item.active ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground/50"}`}>
            <item.icon size={12} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 space-y-2.5 bg-[hsl(220,14%,97%)]">
        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Leads Activos", value: "247", change: "+18%", icon: Users, color: "text-primary" },
            { label: "Oportunidades", value: "$1.2M", change: "+24%", icon: TrendingUp, color: "text-emerald-500" },
            { label: "Tasa Cierre", value: "32%", change: "+5%", icon: Target, color: "text-accent" },
            { label: "Resp. Promedio", value: "2.4h", change: "-15%", icon: Clock, color: "text-amber-500" },
          ].map((m, i) => (
            <div key={i} className="rounded-lg bg-white border border-border/40 p-2 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[8px] text-muted-foreground/50 font-medium">{m.label}</p>
                <m.icon size={10} className="text-muted-foreground/30" />
              </div>
              <p className={`text-sm font-bold ${m.color} leading-none`}>{m.value}</p>
              <p className="text-[8px] text-emerald-500 font-medium mt-0.5">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Two-column: Pipeline + Lead Cards */}
        <div className="grid grid-cols-5 gap-2">
          {/* Pipeline Kanban */}
          <div className="col-span-3 rounded-lg bg-white border border-border/40 p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[9px] text-muted-foreground/60 font-semibold">Pipeline de Ventas</p>
              <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-primary/8 text-primary font-medium">$1.2M total</span>
            </div>
            <div className="flex gap-1.5">
              {[
                { stage: "Prospecto", count: 84, pct: "100%", deals: ["Grupo MX", "Tech Corp"] },
                { stage: "Calificado", count: 52, pct: "62%", deals: ["Inmob. Sur", "LogiPack"] },
                { stage: "Propuesta", count: 31, pct: "37%", deals: ["Farma+"] },
                { stage: "Cierre", count: 12, pct: "14%", deals: ["RetailPro"] },
              ].map((s, i) => (
                <div key={i} className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[7px] text-muted-foreground/40 font-medium">{s.stage}</p>
                    <p className="text-[7px] font-semibold text-foreground/50">{s.count}</p>
                  </div>
                  <div className="h-1 bg-primary/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary/30 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: s.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                  </div>
                  {/* Mini deal cards */}
                  <div className="space-y-0.5">
                    {s.deals.map((d, j) => (
                      <div key={j} className="rounded bg-[hsl(220,14%,97%)] border border-border/30 px-1.5 py-1 text-[7px] text-foreground/50 font-medium truncate">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Cards */}
          <div className="col-span-2 space-y-2">
            <div className="rounded-lg bg-white border border-border/40 p-2.5 shadow-sm">
              <p className="text-[9px] text-muted-foreground/60 font-semibold mb-2">Leads Recientes</p>
              <div className="space-y-1.5">
                {[
                  { name: "María González", company: "Grupo Inmob.", status: "Calificado", statusColor: "bg-emerald-500" },
                  { name: "Carlos Ruiz", company: "Tech Solutions", status: "Nuevo", statusColor: "bg-primary" },
                  { name: "Ana Mendoza", company: "LogiPack MX", status: "Propuesta", statusColor: "bg-amber-500" },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center gap-2 p-1.5 rounded-md bg-[hsl(220,14%,97%)] border border-border/20">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-[7px] font-bold text-primary">{lead.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-semibold text-foreground/70 truncate">{lead.name}</p>
                      <p className="text-[7px] text-muted-foreground/40 truncate">{lead.company}</p>
                    </div>
                    <span className={`w-1.5 h-1.5 rounded-full ${lead.statusColor} shrink-0`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mini chart */}
            <div className="rounded-lg bg-white border border-border/40 p-2.5 shadow-sm">
              <p className="text-[9px] text-muted-foreground/60 font-semibold mb-1.5">Conversiones</p>
              <div className="flex items-end gap-[3px] h-10">
                {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 55, 75].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-primary/25 to-primary/10"
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
          </div>
        </div>

        {/* Activity bar */}
        <div className="rounded-lg bg-white border border-border/40 p-2 shadow-sm">
          <div className="flex items-center gap-3">
            {[
              { icon: UserCheck, text: "Lead calificado: Grupo Inmobiliario", time: "5 min" },
              { icon: MessageSquare, text: "12 seguimientos enviados", time: "22 min" },
              { icon: Bell, text: "Propuesta aceptada: $45K", time: "1 hr" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-1.5 flex-1 text-[8px]">
                <div className="w-4 h-4 rounded bg-primary/8 flex items-center justify-center shrink-0">
                  <a.icon size={8} className="text-primary" />
                </div>
                <span className="text-foreground/50 truncate">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Data ─── */
const problems = [
  { icon: AlertTriangle, title: "Leads sin seguimiento", desc: "Oportunidades que se pierden por falta de un proceso claro de contacto y seguimiento." },
  { icon: FileSpreadsheet, title: "Información dispersa", desc: "Datos de clientes repartidos en Excel, WhatsApp, correos y notas personales." },
  { icon: Users, title: "Vendedores sin control", desc: "Equipos comerciales trabajando sin visibilidad de sus actividades ni rendimiento." },
  { icon: BarChart3, title: "Falta de reportes", desc: "Sin datos claros sobre ventas, conversiones ni el estado real del pipeline." },
  { icon: Workflow, title: "Procesos manuales", desc: "Seguimientos, recordatorios y tareas que dependen de la memoria del equipo." },
];

const modules = [
  { icon: Database, title: "CRM Core", desc: "Configurado según tu modelo de negocio, industria y proceso comercial.", items: ["Gestión de contactos", "Historial de interacciones", "Campos personalizados"] },
  { icon: Layers, title: "Pipeline Engine", desc: "Etapas definidas que reflejan tu ciclo de ventas real.", items: ["Etapas configurables", "Probabilidad de cierre", "Forecasting automático"] },
  { icon: Zap, title: "Automatización", desc: "Emails, recordatorios y tareas automáticas para no perder ninguna oportunidad.", items: ["Secuencias de email", "Tareas automáticas", "Alertas inteligentes"] },
  { icon: Workflow, title: "Integraciones", desc: "Captura leads desde tu sitio web, landing pages y campañas digitales.", items: ["Formularios web", "WhatsApp Business", "Google Ads & Meta"] },
  { icon: LineChart, title: "Analytics & Reportes", desc: "Dashboards con métricas clave para tomar decisiones basadas en datos.", items: ["Reportes en tiempo real", "KPIs de ventas", "Exportación de datos"] },
  { icon: Users, title: "Capacitación", desc: "Entrenamiento completo para que tu equipo adopte el CRM desde el día uno.", items: ["Onboarding guiado", "Documentación interna", "Soporte post-lanzamiento"] },
];

const impacts = [
  { value: "3x", label: "más oportunidades gestionadas", desc: "Centraliza y controla cada lead desde el primer contacto hasta el cierre." },
  { value: "60%", label: "menos tiempo en tareas manuales", desc: "Automatiza seguimientos, recordatorios y asignación de leads." },
  { value: "100%", label: "visibilidad del pipeline", desc: "Dashboard en tiempo real con el estado de cada oportunidad." },
  { value: "2.5x", label: "mejor tasa de conversión", desc: "Seguimiento oportuno y procesos estandarizados que cierran más ventas." },
];

const industries = [
  { icon: Briefcase, title: "Equipos Comerciales", desc: "Organiza vendedores, territorios y metas con visibilidad completa.", color: "from-primary/20 to-primary/5" },
  { icon: Home, title: "Inmobiliarias", desc: "Gestiona propiedades, prospectos e inventario desde una sola plataforma.", color: "from-accent/20 to-accent/5" },
  { icon: Headphones, title: "Empresas de Servicios", desc: "Controla clientes, proyectos y renovaciones de contratos.", color: "from-primary/15 to-accent/10" },
  { icon: Activity, title: "Alto Volumen de Leads", desc: "Automatiza la calificación y distribución de leads a tu equipo.", color: "from-accent/15 to-primary/10" },
];

const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20una%20implementaci%C3%B3n%20de%20CRM%20para%20mi%20empresa";
const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

/* ═══════════════════════════════════════════════════════════ */

const CrmEmpresas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="CRM para Empresas | Implementación de CRM y Automatización de Ventas"
        description="Implementamos sistemas CRM para empresas que organizan clientes, automatizan el seguimiento de leads y mejoran el control de ventas. Soluciones CRM personalizadas para negocios en crecimiento."
        url="https://northmkt.com.mx/crm-empresas"
        jsonLd={crmJsonLd}
      />
      <Header />

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/6 blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <SectionBadge>CRM &amp; Automatización de Ventas</SectionBadge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
                CRM para{" "}
                <span className="gradient-text">Empresas</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Implementamos sistemas CRM que organizan tus ventas, automatizan el seguimiento de clientes y te permiten tener control total de tu pipeline comercial.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 max-w-lg">
                Muchas empresas pierden oportunidades porque sus leads se gestionan en Excel, WhatsApp o correos desordenados. Diseñamos e implementamos CRM que centralizan toda la información de clientes y automatizan el proceso de ventas.
              </p>
              {/* Benefit highlights */}
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: Zap, text: "Seguimiento automático de leads" },
                  { icon: Target, text: "Control total del pipeline de ventas" },
                  { icon: BarChart3, text: "Reportes en tiempo real" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Hablar con un especialista <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                    <Calendar size={16} className="mr-1" /> Agendar Consulta
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <CrmMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* spacer — marquee removed */}

      {/* ──────── PROBLEMAS — Two-column problem list (light grey) ──────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(220, 20%, 97%)" }}>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fade()} className="lg:sticky lg:top-32">
              <SectionBadge>Problemas Comunes</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-5 text-foreground leading-tight">
                Problemas que <span className="gradient-text">Resolvemos</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                Si tu empresa enfrenta alguno de estos retos, un CRM bien implementado puede transformar tu operación comercial.
              </p>
              <div className="hidden lg:flex items-center gap-3 mt-4">
                <div className="w-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Diagnóstico</span>
              </div>
            </motion.div>

            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.08)}
                  className="group flex items-start gap-5 p-5 rounded-xl border border-border/60 bg-white shadow-sm hover:border-primary/25 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/15 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <p.icon size={18} className="text-destructive/90 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-[15px] leading-snug">{p.title}</h3>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{p.desc}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground/20 group-hover:text-primary/50 transition-colors shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── QUÉ INCLUYE — Module architecture ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Arquitectura del Sistema</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Qué incluye nuestra{" "}
              <span className="gradient-text">implementación de CRM</span>
            </h2>
            <p className="text-muted-foreground">
              Cada implementación es integral: módulos conectados que trabajan como un sistema unificado.
            </p>
          </motion.div>

          {/* Module grid — 2 cols with connected feel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="group bg-background p-7 hover:bg-primary/[0.02] transition-colors duration-300 relative"
              >
                {/* Module header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <m.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{m.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                {/* Sub-items */}
                <div className="space-y-1.5">
                  {m.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground/70">
                      <CheckCircle2 size={12} className="text-primary/40 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                {/* Connector line hint */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── RESULTADOS — Impact metrics ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,47%,6%)] via-[hsl(228,50%,12%)] to-[hsl(224,47%,6%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-20">
            <SectionBadge variant="accent">Impacto Real</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
              Resultados que puedes <span className="gradient-text">esperar</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impacts.map((item, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="text-center group"
              >
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

      {/* ──────── INDUSTRIAS — Visual industry grid ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Industrias</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              CRM adaptado a <span className="gradient-text">tu industria</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Cada negocio es diferente. Implementamos CRM configurados para las necesidades específicas de tu sector.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.2)]"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)] transition-all duration-500">
                    <ind.icon size={36} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── TECNOLOGÍAS ──────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "hsl(220, 20%, 97%)" }}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
            <SectionBadge>Stack Tecnológico</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Tecnologías que <span className="gradient-text">utilizamos</span>
            </h2>
            <p className="text-muted-foreground">
              Implementamos CRM utilizando tecnologías modernas, seguras y escalables.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
              { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
              { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
              { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/228BE6" },
              { name: "Webhooks", icon: "https://cdn.simpleicons.org/webhook/228BE6" },
              { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            ].map((tech, i) => (
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
                />
                <span className="text-[10px] font-medium text-muted-foreground/60 group-hover:text-foreground/80 transition-colors">{tech.name}</span>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
              Organiza tus ventas y deja de{" "}
              <span className="gradient-text">perder oportunidades</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Implementamos CRM adaptados a tu proceso comercial para que tu empresa tenga control total sobre clientes, oportunidades y resultados.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/contacto">
                  Solicitar diagnóstico CRM <ArrowRight size={16} className="ml-1" />
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

export default CrmEmpresas;
