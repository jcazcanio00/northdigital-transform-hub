import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, Zap, BarChart3, Plug, ArrowRight, CheckCircle2,
  Database, Workflow, Monitor, FileCode2, Shield, TrendingUp,
  Layers, Settings, LineChart, Globe, Building2, GraduationCap,
  Search, PenTool, Code2, TestTube2, Rocket, Headphones, ArrowDown,
  Sun, Moon, Menu, X, Activity, Bell, Clock, GitBranch, Server,
  Table2, Eye, Cpu, MessageSquare, Calendar, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LogoSlider from "@/components/LogoSlider";
import Footer from "@/components/Footer";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ─── Header ─── */
const SoftwareHeader = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
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
    { label: "Capacidades", href: "#capabilities" },
    { label: "Proceso", href: "#process" },
    { label: "Contacto", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
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
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300 flex items-center ${isDark ? "bg-gradient-to-r from-primary to-primary/80" : "bg-muted/60 border border-border/40"}`}
            aria-label="Toggle theme"
          >
            <span className="absolute left-1.5 flex items-center justify-center">
              <Sun size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-40 text-white/60" : "opacity-0"}`} />
            </span>
            <span className="absolute right-1.5 flex items-center justify-center">
              <Moon size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40 text-foreground/60"}`} />
            </span>
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

/* ─── Syntax-highlighted Code Block ─── */
const CodeBlock = ({ code, language = "json" }: { code: string; language?: string }) => {
  const highlightJSON = (raw: string) => {
    return raw.split('\n').map((line, i) => {
      const highlighted = line
        .replace(/"([^"]+)"(?=\s*:)/g, '<span class="text-sky-300">"$1"</span>')
        .replace(/:\s*"([^"]+)"/g, ': <span class="text-emerald-400">"$1"</span>')
        .replace(/:\s*(true|false|null)/g, ': <span class="text-amber-300">$1</span>')
        .replace(/:\s*(\d+)/g, ': <span class="text-amber-300">$1</span>')
        .replace(/\/\/.*/g, (m) => `<span class="text-muted-foreground/60">${m}</span>`);
      return <span key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
    });
  };

  const highlightYAML = (raw: string) => {
    return raw.split('\n').map((line, i) => {
      const highlighted = line
        .replace(/^(\s*)([\w_]+):/gm, '$1<span class="text-sky-300">$2</span>:')
        .replace(/#.*/g, (m) => `<span class="text-muted-foreground/60">${m}</span>`)
        .replace(/- (.+)/g, '- <span class="text-emerald-400">$1</span>');
      return <span key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
    });
  };

  const lines = language === "yaml" ? highlightYAML(code) : highlightJSON(code);

  return (
    <div className="rounded-xl overflow-hidden border border-primary/20 shadow-[0_0_40px_-12px_hsl(var(--primary)/0.2)]">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-[hsl(228,45%,12%)]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-[10px] uppercase tracking-wider text-white/40 font-mono">{language}</span>
      </div>
      <pre className="p-5 overflow-x-auto leading-relaxed text-sm font-mono bg-[hsl(228,45%,8%)] text-white/80">
        <code className="flex flex-col gap-0.5">
          {lines.map((line, i) => (
            <span key={i} className="flex">
              <span className="w-8 text-right mr-4 text-white/20 select-none text-xs">{i + 1}</span>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

/* ─── Advanced Dashboard Mockup ─── */
const DashboardMockup = () => (
  <motion.div {...fade(0.2)} className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      <span className="ml-3 text-[10px] text-muted-foreground font-mono">panel.northdigital.com</span>
      <div className="ml-auto flex items-center gap-2">
        <Bell size={11} className="text-muted-foreground" />
        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-[8px] font-bold text-primary">N</span>
        </div>
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="hidden sm:flex flex-col w-36 border-r border-border bg-muted/20 p-3 gap-1">
        {[
          { icon: BarChart3, label: "Dashboard", active: true },
          { icon: Users, label: "Clientes" },
          { icon: Workflow, label: "Pipelines" },
          { icon: Zap, label: "Automación" },
          { icon: Database, label: "Datos" },
          { icon: Settings, label: "Config" },
        ].map((item) => (
          <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${item.active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
            <item.icon size={12} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 space-y-3 min-w-0">
        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Clientes Activos", value: "1,248", change: "+12%", icon: Users },
            { label: "Automations", value: "86", change: "+8%", icon: Zap },
            { label: "Revenue MRR", value: "$142K", change: "+23%", icon: TrendingUp },
            { label: "Uptime", value: "99.9%", change: "Stable", icon: Activity },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-background p-2.5">
              <div className="flex items-center justify-between mb-1">
                <m.icon size={10} className="text-muted-foreground" />
                <span className="text-[8px] text-green-500 font-medium">{m.change}</span>
              </div>
              <p className="text-sm font-bold font-display">{m.value}</p>
              <p className="text-[8px] text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {/* Chart */}
          <div className="col-span-3 rounded-lg border border-border bg-background p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium">Pipeline de Ventas</span>
              <div className="flex gap-1">
                {["7d", "30d", "90d"].map(p => (
                  <span key={p} className={`text-[8px] px-1.5 py-0.5 rounded ${p === "30d" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 70, 88, 72, 94].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary to-primary/40"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div className="col-span-2 rounded-lg border border-border bg-background p-3">
            <span className="text-[10px] font-medium mb-2 block">Actividad Reciente</span>
            <div className="space-y-2">
              {[
                { icon: CheckCircle2, text: "Pipeline actualizado", time: "2m", color: "text-green-500" },
                { icon: MessageSquare, text: "Nuevo lead asignado", time: "8m", color: "text-primary" },
                { icon: GitBranch, text: "Deploy completado", time: "15m", color: "text-accent" },
                { icon: Calendar, text: "Reunión agendada", time: "1h", color: "text-amber-400" },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <a.icon size={9} className={`${a.color} mt-0.5 shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-[8px] truncate">{a.text}</p>
                    <p className="text-[7px] text-muted-foreground">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-background p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium">Últimos Leads</span>
            <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
              <Eye size={9} /> <span>Ver todos</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="grid grid-cols-5 gap-2 text-[7px] text-muted-foreground uppercase tracking-wider pb-1 border-b border-border">
              <span>Empresa</span><span>Contacto</span><span>Etapa</span><span>Valor</span><span>Status</span>
            </div>
            {[
              { co: "TechCorp MX", name: "Carlos R.", stage: "Propuesta", val: "$85K", status: "Activo" },
              { co: "InnovaLab", name: "María G.", stage: "Calificación", val: "$42K", status: "Nuevo" },
              { co: "DataSync SA", name: "Jorge L.", stage: "Cierre", val: "$120K", status: "Hot" },
            ].map((r, i) => (
              <div key={i} className="grid grid-cols-5 gap-2 text-[8px] py-1 border-b border-border/50">
                <span className="font-medium truncate">{r.co}</span>
                <span className="text-muted-foreground truncate">{r.name}</span>
                <span>{r.stage}</span>
                <span className="font-medium">{r.val}</span>
                <span className={`text-[7px] px-1.5 py-0.5 rounded-full text-center ${r.status === "Hot" ? "bg-red-500/10 text-red-400" : r.status === "Nuevo" ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-500"}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-background p-2.5">
            <span className="text-[10px] font-medium mb-2 block">Integraciones</span>
            <div className="flex gap-2">
              {[
                { name: "Stripe", color: "bg-purple-500/10" },
                { name: "Slack", color: "bg-green-500/10" },
                { name: "GCP", color: "bg-blue-500/10" },
                { name: "API", color: "bg-amber-500/10" },
              ].map(int => (
                <div key={int.name} className={`${int.color} px-2 py-1 rounded text-[7px] font-medium`}>{int.name}</div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background p-2.5">
            <span className="text-[10px] font-medium mb-1 block">Sistema</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Server size={9} className="text-green-500" />
                <span className="text-[8px]">API: OK</span>
              </div>
              <div className="flex items-center gap-1">
                <Cpu size={9} className="text-primary" />
                <span className="text-[8px]">CPU: 23%</span>
              </div>
              <div className="flex items-center gap-1">
                <Database size={9} className="text-accent" />
                <span className="text-[8px]">DB: 4ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Capability Data (expanded) ─── */
const capabilityData = [
  {
    id: "crm",
    label: "CRM y Pipelines",
    icon: Users,
    description: "Sistema de gestión comercial con seguimiento completo del ciclo de ventas.",
    features: [
      "Tracking de leads y scoring automático",
      "Gestión de oportunidades por etapa",
      "Automatización de seguimiento",
      "Forecast de ventas con IA",
      "Integración con WhatsApp y email",
      "Dashboards comerciales en tiempo real",
    ],
    integrations: ["WhatsApp Business", "Gmail / Outlook", "Calendly", "Stripe"],
    code: `{
  "module": "crm_pipeline",
  "features": [
    "lead_tracking",
    "opportunity_management",
    "automated_followups",
    "sales_forecasting"
  ],
  "integrations": [
    "whatsapp_business",
    "email_sync",
    "calendar_api",
    "payment_gateway"
  ],
  "scoring": "ml_based",
  "status": "production_ready"
}`,
  },
  {
    id: "automation",
    label: "Automatización",
    icon: Zap,
    description: "Workflows inteligentes que eliminan tareas manuales y conectan procesos internos automáticamente.",
    features: [
      "Triggers basados en eventos o schedule",
      "Acciones encadenadas multi-paso",
      "Notificaciones automáticas",
      "Generación de reportes programados",
      "Validación automática de datos",
      "Escalamiento inteligente de tareas",
    ],
    integrations: ["Zapier", "Make", "Webhooks", "Cloud Functions"],
    code: `{
  "module": "process_automation",
  "triggers": [
    "form_submit",
    "status_change",
    "cron_schedule",
    "webhook_event"
  ],
  "actions": [
    "send_notification",
    "update_record",
    "generate_report",
    "assign_task",
    "call_external_api"
  ],
  "execution": "real_time",
  "retry_policy": "exponential_backoff"
}`,
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: BarChart3,
    description: "Paneles ejecutivos en tiempo real con métricas operativas, comerciales y financieras.",
    features: [
      "KPIs en tiempo real con refresh automático",
      "Gráficas interactivas y filtros dinámicos",
      "Funnels de conversión y pipelines",
      "Heatmaps de actividad operativa",
      "Exportación a PDF y Excel",
      "Control de acceso por rol",
    ],
    integrations: ["Google Analytics", "Stripe", "CRM interno", "ERP"],
    code: `{
  "module": "analytics_dashboard",
  "data_sources": [
    "crm_database",
    "erp_connector",
    "marketing_apis",
    "financial_system"
  ],
  "visualizations": [
    "kpi_cards",
    "time_series_charts",
    "pipeline_funnel",
    "geo_heatmaps",
    "cohort_analysis"
  ],
  "refresh_rate": "real_time",
  "export": ["pdf", "xlsx", "csv"]
}`,
  },
  {
    id: "integrations",
    label: "Integraciones",
    icon: Plug,
    description: "Conexión con ERPs, APIs externas, servicios cloud y herramientas empresariales existentes.",
    features: [
      "APIs REST y GraphQL personalizadas",
      "Webhooks bidireccionales",
      "Sync con ERPs y sistemas legacy",
      "OAuth2 y JWT para autenticación",
      "Rate limiting y circuit breakers",
      "Monitoreo de integraciones en tiempo real",
    ],
    integrations: ["Stripe", "Google Workspace", "SAP", "Salesforce"],
    code: `{
  "module": "api_integrations",
  "protocols": [
    "REST",
    "GraphQL",
    "webhooks",
    "gRPC"
  ],
  "connectors": [
    "stripe_payments",
    "google_workspace",
    "erp_bidirectional_sync",
    "cloud_storage_s3",
    "messaging_queue"
  ],
  "auth": "oauth2_jwt",
  "monitoring": "real_time_health_checks"
}`,
  },
];

/* ─── What We Build Cards ─── */
const buildItems = [
  { icon: Users, title: "CRM empresariales", desc: "Gestión de clientes y pipeline de ventas." },
  { icon: Settings, title: "Sistemas administrativos", desc: "Control de operaciones internas." },
  { icon: Layers, title: "Plataformas internas", desc: "Herramientas para equipos y procesos." },
  { icon: Monitor, title: "Portales operativos", desc: "Interfaces para operación en tiempo real." },
  { icon: LineChart, title: "Dashboards ejecutivos", desc: "Métricas y KPIs para toma de decisiones." },
  { icon: Plug, title: "Integraciones con APIs", desc: "Conexión con servicios externos y ERPs." },
  { icon: Database, title: "Sistemas de beneficiarios", desc: "Expedientes y gestión de registros." },
  { icon: Workflow, title: "Automatización de procesos", desc: "Workflows que eliminan tareas manuales." },
];

/* ─── Business Benefits ─── */
const benefits = [
  { icon: Zap, title: "Menos trabajo manual", desc: "Automatiza procesos repetitivos." },
  { icon: Shield, title: "Mayor control operativo", desc: "Visibilidad total de operaciones." },
  { icon: Database, title: "Datos centralizados", desc: "Una sola fuente de verdad." },
  { icon: LineChart, title: "Mejor visibilidad", desc: "Dashboards y reportes en tiempo real." },
  { icon: TrendingUp, title: "Procesos escalables", desc: "Crece sin aumentar complejidad." },
  { icon: CheckCircle2, title: "Menos errores", desc: "Validación y reglas automáticas." },
];

/* ─── Use Cases ─── */
const useCases = [
  { icon: TrendingUp, title: "Ventas y CRM", desc: "Seguimiento comercial, pipelines automatizados y forecasting para equipos de ventas." },
  { icon: Settings, title: "Operaciones", desc: "Digitalización de procesos internos, control de inventarios y gestión de recursos." },
  { icon: BarChart3, title: "Dirección y Analítica", desc: "Dashboards ejecutivos con KPIs en tiempo real para toma de decisiones informadas." },
  { icon: GraduationCap, title: "Instituciones / Programas", desc: "Sistemas de beneficiarios, expedientes digitales y portales de gestión institucional." },
];

/* ─── Process Steps ─── */
const processSteps = [
  { icon: Search, label: "Descubrimiento", desc: "Análisis de procesos y objetivos" },
  { icon: Layers, label: "Arquitectura", desc: "Diseño técnico y roadmap" },
  { icon: PenTool, label: "Diseño UX/UI", desc: "Interfaces centradas en el usuario" },
  { icon: Code2, label: "Desarrollo", desc: "Construcción iterativa" },
  { icon: TestTube2, label: "QA", desc: "Testing y validación" },
  { icon: Rocket, label: "Lanzamiento", desc: "Despliegue seguro" },
  { icon: Headphones, label: "Soporte Evolutivo", desc: "Mejora continua" },
];

/* ─── Architecture Flow Steps ─── */
const flowSteps = [
  { icon: Database, label: "Captura de datos", color: "from-primary/20 to-primary/5" },
  { icon: Cpu, label: "Lógica de negocio", color: "from-primary/20 to-primary/5" },
  { icon: Zap, label: "Automatización", color: "from-accent/20 to-accent/5" },
  { icon: BarChart3, label: "Dashboard", color: "from-primary/20 to-primary/5" },
  { icon: FileCode2, label: "Reportes", color: "from-accent/20 to-accent/5" },
];

/* ═══════════════════════════════════════════════ */
/*                   PAGE                          */
/* ═══════════════════════════════════════════════ */

const Software = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SoftwareHeader />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <FileCode2 size={12} className="text-primary" />
                SOFTWARE EMPRESARIAL
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Software Empresarial a Medida para{" "}
                <span className="gradient-text">Operaciones Modernas</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos sistemas, CRM, dashboards e integraciones para empresas que
                necesitan automatizar procesos, centralizar información y escalar con
                tecnología.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="gradient" size="lg" asChild>
                  <a href="/#contact">Agendar Consulta</a>
                </Button>
                <Button variant="gradient-outline" size="lg" asChild>
                  <a href="#capabilities">Ver Capacidades <ArrowDown size={16} className="ml-1" /></a>
                </Button>
              </div>
            </motion.div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── TECH LOGO SLIDER ── */}
      <LogoSlider />

      {/* ── SECTION 1: CAPABILITIES ── */}
      <section id="capabilities" className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Plataforma
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Capacidades de la <span className="gradient-text">Plataforma</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada módulo está diseñado para resolver problemas reales de operación empresarial.
            </p>
          </motion.div>

          <Tabs defaultValue="crm" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-muted/30 border border-border h-auto p-1 mb-8">
              {capabilityData.map((c) => (
                <TabsTrigger key={c.id} value={c.id} className="flex items-center gap-2 text-xs sm:text-sm py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <c.icon size={14} />
                  <span className="hidden sm:inline">{c.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {capabilityData.map((c) => (
              <TabsContent key={c.id} value={c.id}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-stretch"
                >
                  {/* Left: Expanded content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        <c.icon size={22} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-display mb-2">{c.label}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">{c.description}</p>

                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">Funcionalidades</p>
                        <div className="space-y-2">
                          {c.features.map((f) => (
                            <div key={f} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">Integraciones</p>
                        <div className="flex flex-wrap gap-2">
                          {c.integrations.map((int) => (
                            <span key={int} className="px-2.5 py-1 rounded-md bg-muted border border-border text-xs text-muted-foreground">{int}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button variant="gradient-outline" size="sm" className="w-fit" asChild>
                      <a href="/#contact">Consultar <ArrowRight size={14} className="ml-1" /></a>
                    </Button>
                  </div>

                  {/* Right: Code block */}
                  <div className="flex items-stretch">
                    <div className="w-full">
                      <CodeBlock code={c.code} />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── SECTION 2: QUÉ CONSTRUIMOS ── */}
      <section className="py-20 surface-sunken relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Soluciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Plataformas Empresariales que <span className="gradient-text">Desarrollamos</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fade(i * 0.06)}
                className="glass-card glass-card-hover rounded-xl p-5 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.3)]">
                  <item.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold font-display mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ARCHITECTURE FLOW (Visual Pipeline) ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Arquitectura
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Flujo de <span className="gradient-text">Arquitectura</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada sistema sigue un flujo estructurado desde la captura de datos hasta la toma de decisiones.
            </p>
          </motion.div>

          {/* Visual Pipeline */}
          <div className="max-w-5xl mx-auto">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
              {/* Connection line (desktop) */}
              <div className="hidden sm:block absolute top-1/2 left-[10%] right-[10%] h-0.5 -translate-y-1/2">
                <div className="w-full h-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
                  animate={{ left: ["0%", "85%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  {...fade(i * 0.1)}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} border border-border bg-card flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] group-hover:border-primary/30`}>
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-display text-center">{step.label}</span>
                  {i < flowSteps.length - 1 && (
                    <ChevronRight size={16} className="text-primary absolute -right-3 top-7 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Sub-detail cards */}
            <motion.div {...fade(0.4)} className="mt-12 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Input", items: ["Leads", "Forms", "APIs externas", "Datos internos"] },
                { label: "Process", items: ["Validación", "Business Rules", "Automation Triggers", "Data Enrichment"] },
                { label: "Output", items: ["Dashboards", "Reportes", "Notificaciones", "API Responses"] },
              ].map((block) => (
                <div key={block.label} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-3 font-mono">{block.label}</p>
                  <div className="space-y-1.5">
                    {block.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BUSINESS BENEFITS ── */}
      <section className="py-20 surface-sunken relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Resultados de <span className="gradient-text">Negocio</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...fade(i * 0.07)}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.15)] hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: USE CASES ── */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Casos de uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Casos de <span className="gradient-text">Uso</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                {...fade(i * 0.1)}
                className="glass-card glass-card-hover rounded-xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)]">
                  <uc.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HORIZONTAL TIMELINE PROCESS ── */}
      <section id="process" className="py-20 surface-sunken relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Proceso de <span className="gradient-text">Desarrollo</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-10 left-[7%] right-[7%] h-0.5 bg-border">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-3">
              {processSteps.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fade(i * 0.1)}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl border-2 border-border bg-card flex flex-col items-center justify-center mb-3 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)] group-hover:-translate-y-1 relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[9px] font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <s.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xs font-bold font-display mb-0.5">{s.label}</h3>
                  <p className="text-[10px] text-muted-foreground leading-tight">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white mb-5">
              Construyamos el sistema que tu{" "}
              <span className="gradient-text">operación necesita</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Te ayudamos a definir, diseñar y desarrollar la plataforma adecuada para tu empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/#contact">Solicitar Diagnóstico</a>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300"
                asChild
              >
                <a href="/#contact">Hablar con un Especialista</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Software;
