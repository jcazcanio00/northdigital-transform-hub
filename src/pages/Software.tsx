import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, Zap, BarChart3, Plug, ArrowRight, CheckCircle2, ChevronRight,
  Database, Workflow, Monitor, FileCode2, Shield, TrendingUp,
  Layers, Settings, LineChart, Globe, Building2, GraduationCap,
  Search, PenTool, Code2, TestTube2, Rocket, Headphones, ArrowDown,
  Sun, Moon, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Footer from "@/components/Footer";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ─── Header (self-contained for internal pages) ─── */
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
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300 flex items-center ${
              isDark
                ? "bg-gradient-to-r from-primary to-primary/80"
                : "bg-muted/60 border border-border/40"
            }`}
            aria-label="Toggle theme"
          >
            <span className="absolute left-1.5 flex items-center justify-center">
              <Sun size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-40 text-white/60" : "opacity-0"}`} />
            </span>
            <span className="absolute right-1.5 flex items-center justify-center">
              <Moon size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40 text-foreground/60"}`} />
            </span>
            <span
              className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                isDark ? "translate-x-[30px]" : "translate-x-[3px]"
              }`}
            >
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ─── Code Block Component ─── */
const CodeBlock = ({ code, language = "json" }: { code: string; language?: string }) => (
  <div className="rounded-xl border border-border bg-card overflow-hidden font-mono text-xs sm:text-sm">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
      <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
      <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">{language}</span>
    </div>
    <pre className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-muted-foreground">
      <code>{code}</code>
    </pre>
  </div>
);

/* ─── Dashboard Mockup ─── */
const DashboardMockup = () => (
  <motion.div {...fade(0.2)} className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
      <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
      <span className="ml-3 text-xs text-muted-foreground">panel.northdigital.com</span>
    </div>
    <div className="p-5 space-y-4">
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Clientes Activos", value: "1,248", change: "+12%" },
          { label: "Automatizaciones", value: "86", change: "+8%" },
          { label: "Revenue MRR", value: "$142K", change: "+23%" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-background p-3">
            <p className="text-[10px] text-muted-foreground mb-1">{m.label}</p>
            <p className="text-lg font-bold font-display">{m.value}</p>
            <span className="text-[10px] text-green-500 font-medium">{m.change}</span>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium">Pipeline de Ventas</span>
          <span className="text-[10px] text-muted-foreground">Últimos 30 días</span>
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {[40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-primary/20"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div
                className="w-full rounded-sm bg-gradient-to-t from-primary to-primary/60"
                style={{ height: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pipeline rows */}
      <div className="space-y-2">
        {[
          { label: "Prospección", count: 42, color: "bg-primary/70" },
          { label: "Calificación", count: 28, color: "bg-primary/50" },
          { label: "Propuesta", count: 15, color: "bg-accent/60" },
          { label: "Cierre", count: 8, color: "bg-green-500/60" },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-3">
            <span className="text-[10px] text-muted-foreground w-20">{p.label}</span>
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${p.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${(p.count / 42) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <span className="text-[10px] font-medium w-6 text-right">{p.count}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Capability Code Blocks ─── */
const capabilityData = [
  {
    id: "crm",
    label: "CRM y Pipelines",
    icon: Users,
    description:
      "Sistema de gestión comercial con seguimiento de leads, oportunidades y pipeline de ventas automatizado.",
    code: `{
  "module": "crm_pipeline",
  "features": [
    "lead_tracking",
    "opportunity_management",
    "automated_followups",
    "sales_forecasting"
  ],
  "integrations": ["email", "whatsapp", "calendar"],
  "status": "production_ready"
}`,
  },
  {
    id: "automation",
    label: "Automatización",
    icon: Zap,
    description:
      "Workflows inteligentes que eliminan tareas manuales y conectan procesos internos de forma automática.",
    code: `{
  "module": "process_automation",
  "triggers": ["form_submit", "status_change", "schedule"],
  "actions": [
    "send_notification",
    "update_record",
    "generate_report",
    "assign_task"
  ],
  "execution": "real_time"
}`,
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: BarChart3,
    description:
      "Paneles ejecutivos en tiempo real con métricas operativas, comerciales y financieras.",
    code: `{
  "module": "analytics_dashboard",
  "data_sources": ["crm", "erp", "marketing", "finance"],
  "visualizations": [
    "kpi_cards",
    "time_series",
    "pipeline_funnel",
    "heatmaps"
  ],
  "refresh_rate": "real_time"
}`,
  },
  {
    id: "integrations",
    label: "Integraciones",
    icon: Plug,
    description:
      "Conexión con ERPs, APIs externas, servicios cloud y herramientas empresariales existentes.",
    code: `{
  "module": "api_integrations",
  "protocols": ["REST", "GraphQL", "webhooks"],
  "connectors": [
    "stripe_payments",
    "google_workspace",
    "erp_sync",
    "cloud_storage"
  ],
  "auth": "oauth2_jwt"
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
  {
    icon: TrendingUp,
    title: "Ventas y CRM",
    desc: "Seguimiento comercial, pipelines automatizados y forecasting para equipos de ventas.",
  },
  {
    icon: Settings,
    title: "Operaciones",
    desc: "Digitalización de procesos internos, control de inventarios y gestión de recursos.",
  },
  {
    icon: BarChart3,
    title: "Dirección y Analítica",
    desc: "Dashboards ejecutivos con KPIs en tiempo real para toma de decisiones informadas.",
  },
  {
    icon: GraduationCap,
    title: "Instituciones / Programas",
    desc: "Sistemas de beneficiarios, expedientes digitales y portales de gestión institucional.",
  },
];

/* ─── Process Steps ─── */
const processSteps = [
  { icon: Search, label: "Descubrimiento", desc: "Análisis de procesos y objetivos" },
  { icon: Layers, label: "Arquitectura", desc: "Diseño técnico y roadmap" },
  { icon: PenTool, label: "Diseño UX/UI", desc: "Interfaces centradas en el usuario" },
  { icon: Code2, label: "Desarrollo", desc: "Construcción iterativa con feedback" },
  { icon: TestTube2, label: "QA", desc: "Testing y validación completa" },
  { icon: Rocket, label: "Lanzamiento", desc: "Despliegue y migración segura" },
  { icon: Headphones, label: "Soporte Evolutivo", desc: "Mejora continua post-lanzamiento" },
];

/* ═══════════════════════════════════════════════ */
/*                   PAGE                          */
/* ═══════════════════════════════════════════════ */

const Software = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SoftwareHeader />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground mb-6">
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
                  <a href="#capabilities">
                    Ver Capacidades <ArrowDown size={16} className="ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Dashboard */}
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── SECTION 1: CAPABILITIES ── */}
      <section id="capabilities" className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Plataforma</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Capacidades de la <span className="gradient-text">Plataforma</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada módulo está diseñado para resolver problemas reales de operación empresarial.
            </p>
          </motion.div>

          <Tabs defaultValue="crm" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-muted/30 border border-border h-auto p-1 mb-8">
              {capabilityData.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="flex items-center gap-2 text-xs sm:text-sm py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
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
                  className="grid md:grid-cols-2 gap-6 items-start"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <c.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display">{c.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.description}</p>
                    <Button variant="gradient-outline" size="sm" asChild>
                      <a href="/#contact">
                        Consultar <ArrowRight size={14} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                  <CodeBlock code={c.code} />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Soluciones</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Qué <span className="gradient-text">Construimos</span>
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

      {/* ── SECTION 3: ARCHITECTURE ── */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Arquitectura</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Flujo de <span className="gradient-text">Arquitectura</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada sistema sigue un flujo estructurado desde la captura de datos hasta la toma de decisiones.
            </p>
          </motion.div>

          {/* Flow */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {["Captura de datos", "Lógica de negocio", "Automatización", "Dashboard", "Reportes"].map(
                (step, i, arr) => (
                  <div key={step} className="flex items-center">
                    <motion.div
                      {...fade(i * 0.1)}
                      className="px-4 py-2.5 rounded-lg border border-border bg-card text-xs sm:text-sm font-medium"
                    >
                      {step}
                    </motion.div>
                    {i < arr.length - 1 && (
                      <ChevronRight size={16} className="text-primary mx-1 hidden sm:block" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <motion.div {...fade(0.3)} className="max-w-2xl mx-auto">
            <CodeBlock
              language="yaml"
              code={`workflow:
  input:
    - leads
    - forms
    - internal_data
    - external_apis

  process:
    - validation
    - business_rules
    - automation_triggers
    - data_enrichment

  output:
    - dashboards
    - reports
    - notifications
    - api_responses`}
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: BUSINESS BENEFITS ── */}
      <section className="py-20 surface-sunken relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Beneficios</p>
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Casos de uso</p>
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

      {/* ── SECTION 6: DEVELOPMENT PROCESS ── */}
      <section id="process" className="py-20 surface-sunken relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Proceso</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Proceso de <span className="gradient-text">Desarrollo</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {processSteps.slice(0, 4).map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fade(i * 0.08)}
                  className="relative p-5 rounded-xl border border-border bg-card group hover:border-primary/20 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-2.5 -left-1 w-6 h-6 rounded-full gradient-btn flex items-center justify-center text-[10px] font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-bold font-display mb-1">{s.label}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {processSteps.slice(4).map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fade((i + 4) * 0.08)}
                  className="relative p-5 rounded-xl border border-border bg-card group hover:border-primary/20 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-2.5 -left-1 w-6 h-6 rounded-full gradient-btn flex items-center justify-center text-[10px] font-bold text-white">
                    {i + 5}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-bold font-display mb-1">{s.label}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
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
