import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cloud, Server, Shield, Activity, Database, Cpu, Globe, Zap,
  ArrowRight, CheckCircle2, BarChart3, Lock, RefreshCw, Eye,
  HardDrive, Layers, GitBranch, Terminal, Workflow, Monitor,
  Sun, Moon, Menu, X, ChevronRight, ArrowDown,
  Search, Palette, Code2, Bug, Rocket, Headphones
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
const CloudHeader = () => {
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
    { label: "Arquitectura", href: "#architecture" },
    { label: "Servicios", href: "#services" },
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

/* ─── Infrastructure Mockup ─── */
const InfraMockup = () => {
  const metrics = [
    { label: "Uptime", value: "99.99%", icon: Activity, color: "text-green-500" },
    { label: "CPU", value: "23%", icon: Cpu, color: "text-primary" },
    { label: "Memory", value: "4.2 GB", icon: HardDrive, color: "text-accent" },
    { label: "Requests", value: "12.4K/s", icon: Zap, color: "text-yellow-500" },
  ];

  const servers = [
    { name: "prod-api-01", status: "running", cpu: 18, region: "us-east-1" },
    { name: "prod-api-02", status: "running", cpu: 24, region: "eu-west-1" },
    { name: "prod-db-main", status: "running", cpu: 31, region: "us-east-1" },
    { name: "prod-worker-01", status: "running", cpu: 12, region: "ap-south-1" },
    { name: "staging-api", status: "idle", cpu: 3, region: "us-west-2" },
  ];

  const logs = [
    { time: "12:04:32", msg: "Deploy v2.14.0 completed", type: "success" },
    { time: "12:03:18", msg: "Health check passed — all nodes", type: "info" },
    { time: "12:01:45", msg: "Auto-scale: +1 instance (us-east)", type: "warning" },
    { time: "11:59:12", msg: "SSL certificate renewed", type: "success" },
    { time: "11:57:01", msg: "CDN cache purged — 14 assets", type: "info" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="rounded-2xl border border-border overflow-hidden bg-card shadow-xl"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-[10px] text-muted-foreground font-mono">infrastructure-panel.north.cloud</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Metrics */}
        <div className="grid grid-cols-4 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-3 text-center">
              <m.icon size={14} className={`mx-auto mb-1.5 ${m.color}`} />
              <p className="text-lg font-bold font-display">{m.value}</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Servers table */}
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-4 gap-2 text-[8px] text-muted-foreground uppercase tracking-wider px-3 py-2 bg-muted/40 border-b border-border">
            <span>Server</span><span>Status</span><span>CPU</span><span>Region</span>
          </div>
          {servers.map((s) => (
            <div key={s.name} className="grid grid-cols-4 gap-2 text-[10px] px-3 py-1.5 border-b border-border/50 last:border-0 items-center">
              <span className="font-mono text-foreground/80">{s.name}</span>
              <span className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${s.status === "running" ? "bg-green-500" : "bg-muted-foreground/40"}`} />
                <span className={s.status === "running" ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>{s.status}</span>
              </span>
              <span className="font-mono">{s.cpu}%</span>
              <span className="text-muted-foreground">{s.region}</span>
            </div>
          ))}
        </div>

        {/* Activity log */}
        <div className="rounded-lg border border-border p-3">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Activity Log</p>
          <div className="space-y-1">
            {logs.map((l, i) => (
              <div key={i} className="flex items-start gap-2 text-[10px]">
                <span className="text-muted-foreground font-mono shrink-0">{l.time}</span>
                <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${l.type === "success" ? "bg-green-500" : l.type === "warning" ? "bg-yellow-500" : "bg-primary/60"}`} />
                <span className="text-foreground/70">{l.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status footer */}
        <div className="flex items-center justify-between text-[9px] text-muted-foreground pt-1 border-t border-border/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> API</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> DB</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> CDN</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> DNS</span>
          </div>
          <span className="font-mono">Last deploy: 4m ago</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Cloud Tech Slider ─── */
const cloudLogos = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const CloudSlider = () => (
  <section className="py-10 relative overflow-hidden border-y border-border/10">
    <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-6">
      <p className="text-center text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-medium">
        Tecnologías que utilizamos para construir infraestructura cloud moderna
      </p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex animate-[scroll_30s_linear_infinite] w-max gap-12 px-6">
        {[...cloudLogos, ...cloudLogos].map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex flex-col items-center gap-2 min-w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-300">
            <img src={logo.icon} alt={logo.name} className="w-8 h-8 object-contain dark:invert dark:brightness-200 dark:contrast-200" loading="lazy" />
            <span className="text-[9px] text-muted-foreground tracking-wider uppercase whitespace-nowrap">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Data ─── */
const services = [
  { icon: Layers, title: "Arquitectura Cloud", desc: "Diseño de infraestructura escalable con alta disponibilidad y tolerancia a fallos." },
  { icon: RefreshCw, title: "Migraciones Cloud", desc: "Migración segura y planificada desde servidores legacy a infraestructura moderna." },
  { icon: Server, title: "Hosting Empresarial", desc: "Infraestructura optimizada para aplicaciones críticas de negocio." },
  { icon: Eye, title: "Monitoreo y Observabilidad", desc: "Métricas en tiempo real, alertas inteligentes y dashboards operativos." },
  { icon: Shield, title: "Seguridad Cloud", desc: "Protección de datos, firewalls avanzados y auditorías de seguridad." },
  { icon: Database, title: "Backups y Recuperación", desc: "Sistemas de respaldo automatizados con recuperación ante desastres." },
];

const benefits = [
  { icon: Activity, title: "Alta disponibilidad", desc: "Arquitectura redundante con balanceo de carga y failover automático para mantener los sistemas siempre activos." },
  { icon: Zap, title: "Escalabilidad automática", desc: "La infraestructura se adapta dinámicamente al tráfico y crecimiento del sistema sin intervención manual." },
  { icon: Lock, title: "Seguridad avanzada", desc: "Protección multicapa con firewalls, cifrado, control de accesos y monitoreo continuo de amenazas." },
  { icon: BarChart3, title: "Optimización de costos", desc: "Uso eficiente de recursos cloud que permite escalar infraestructura sin desperdicio de capacidad." },
  { icon: Monitor, title: "Monitoreo continuo", desc: "Observabilidad completa del sistema con métricas, logs y alertas en tiempo real." },
];

const processSteps = [
  { icon: Search, title: "Descubrimiento", desc: "Análisis de requerimientos y auditoría de infraestructura actual." },
  { icon: Layers, title: "Arquitectura", desc: "Diseño de la arquitectura cloud óptima para el proyecto." },
  { icon: Palette, title: "Diseño UX/UI", desc: "Interfaces de monitoreo y dashboards operativos." },
  { icon: Code2, title: "Desarrollo", desc: "Implementación de servicios, APIs y automatización." },
  { icon: Bug, title: "QA", desc: "Testing de carga, seguridad y rendimiento." },
  { icon: Rocket, title: "Lanzamiento", desc: "Deploy progresivo con zero-downtime." },
  { icon: Headphones, title: "Soporte Evolutivo", desc: "Monitoreo continuo y mejoras iterativas." },
];

const archSteps = [
  { label: "Usuarios", icon: Globe },
  { label: "Load Balancer", icon: Workflow },
  { label: "API Layer", icon: Terminal },
  { label: "Microservices", icon: GitBranch },
  { label: "Database Cluster", icon: Database },
  { label: "Analytics", icon: BarChart3 },
];

const devopsTools = [
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const useCases = [
  { icon: Server, title: "Sistemas empresariales", desc: "Infraestructura robusta para aplicaciones críticas como ERP, CRM y plataformas operativas." },
  { icon: Globe, title: "Plataformas SaaS", desc: "Arquitectura cloud diseñada para escalar usuarios, servicios y tráfico global." },
  { icon: BarChart3, title: "Dashboards analíticos", desc: "Procesamiento de datos en tiempo real para plataformas de análisis e inteligencia de negocio." },
  { icon: Workflow, title: "Automatización de procesos", desc: "Workflows y microservicios que integran sistemas y eliminan tareas manuales." },
  { icon: Terminal, title: "APIs empresariales", desc: "Infraestructura preparada para exponer APIs seguras, rápidas y escalables." },
];

/* ─── Main Page ─── */
const CloudPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CloudHeader />

      {/* HERO */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <Cloud size={12} className="text-primary" />
                CLOUD EMPRESARIAL
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Infraestructura Cloud{" "}
                <span className="gradient-text">Segura y Escalable</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos, implementamos y gestionamos infraestructura cloud moderna para empresas que necesitan rendimiento, seguridad y escalabilidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#architecture">Arquitectura Cloud <ArrowDown size={16} className="ml-2" /></a>
                </Button>
                <Button variant="outline" size="lg" className="gradient-btn-outline" asChild>
                  <a href="/#contact">Hablar con un Ingeniero <ArrowRight size={16} className="ml-2" /></a>
                </Button>
              </div>
            </motion.div>
            <InfraMockup />
          </div>
        </div>
      </section>

      {/* TECH SLIDER */}
      <CloudSlider />

      {/* ARCHITECTURE */}
      <section id="architecture" className="py-24 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Arquitectura
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Arquitectura diseñada para <span className="gradient-text">escalar</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada sistema se construye sobre una arquitectura cloud diseñada para alta disponibilidad, rendimiento y resiliencia.
            </p>
          </motion.div>

          {/* Architecture flow */}
          <motion.div {...fade(0.15)} className="flex flex-wrap justify-center items-center gap-2 sm:gap-0 mb-8">
            {archSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-border bg-card flex items-center justify-center shadow-sm glass-card-hover cursor-default">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-foreground/80 text-center max-w-[80px]">{step.label}</span>
                </div>
                {i < archSteps.length - 1 && (
                  <ChevronRight size={18} className="text-primary/40 mx-1 sm:mx-3 shrink-0" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 surface-sunken">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Servicios de <span className="gradient-text">Infraestructura Cloud</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-border bg-card p-6 glass-card glass-card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Por qué usar infraestructura <span className="gradient-text">cloud moderna</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fade(i * 0.07)} className="flex gap-4 items-start p-5 rounded-2xl border border-border bg-card glass-card glass-card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold font-display mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOPS STACK */}
      <section className="py-24 surface-sunken">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Stack <span className="gradient-text">DevOps y Cloud</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {devopsTools.map((t, i) => (
              <motion.div key={t.name} {...fade(i * 0.05)} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-card glass-card glass-card-hover">
                <img src={t.icon} alt={t.name} className="w-10 h-10 object-contain dark:invert dark:brightness-200 dark:contrast-200" loading="lazy" />
                <span className="text-xs font-medium text-muted-foreground">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div key={u.title} {...fade(i * 0.07)} className="rounded-2xl border border-border bg-card p-6 glass-card glass-card-hover">
                <u.icon size={22} className="text-primary mb-3" />
                <h3 className="font-bold font-display mb-2">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white">
              Construyamos la infraestructura que tu empresa{" "}
              <span className="gradient-text">necesita</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Diseñamos plataformas cloud modernas preparadas para escalar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/#contact">Arquitectura Cloud <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white hover:text-foreground text-white border border-white/20 transition-all" asChild>
                <a href="/#contact">Hablar con un Ingeniero <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudPage;
