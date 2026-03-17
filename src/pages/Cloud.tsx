import { useEffect } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  Cloud, Server, Shield, Activity, Database, Cpu, Globe, Zap,
  ArrowRight, CheckCircle2, BarChart3, Lock, RefreshCw, Eye,
  HardDrive, Layers, GitBranch, Terminal, Workflow, Monitor,
  ChevronRight, ArrowDown,
  Search, Palette, Code2, Bug, Rocket, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay },
});

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
        Tecnologías que utilizamos para construir cloud services moderna
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
  { icon: Lock, title: "Seguridad avanzada", desc: "Protección multicapa con cifrado, firewalls y control de accesos." },
  { icon: BarChart3, title: "Optimización de costos", desc: "Uso eficiente de recursos cloud sin desperdicio de capacidad." },
  { icon: Monitor, title: "Monitoreo continuo", desc: "Métricas, logs y alertas en tiempo real." },
  { icon: RefreshCw, title: "Recuperación ante desastres", desc: "Backups automatizados y planes de recuperación rápida." },
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
  { icon: Cpu, title: "Plataformas de datos y AI", desc: "Infraestructura optimizada para procesamiento de datos, machine learning y pipelines analíticos." },
];

/* ─── Main Page ─── */
const CloudPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Infraestructura Cloud para Empresas | North"
        description="Diseño, implementación y operación de infraestructura cloud segura y escalable. Hosting empresarial, migraciones, monitoreo y Google Workspace para operaciones críticas."
        url="https://northmkt.com.mx/cloud"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Infraestructura Cloud Empresarial",
          "provider": { "@type": "Organization", "name": "North", "url": "https://northmkt.com.mx" },
          "description": "Infraestructura cloud segura y escalable, hosting empresarial, migraciones y monitoreo para empresas con operaciones críticas.",
          "url": "https://northmkt.com.mx/cloud",
          "areaServed": { "@type": "Country", "name": "México" },
          "serviceType": "Infraestructura cloud"
        }}
      />
      <Header />
      

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
                Cloud Services{" "}
                <span className="gradient-text">Segura y Escalable</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos, implementamos y operamos plataformas cloud de alto rendimiento para empresas con operaciones críticas y crecimiento acelerado.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#architecture">Arquitectura Cloud <ArrowDown size={16} className="ml-2" /></a>
                </Button>
                <Button variant="outline" size="lg" className="gradient-btn-outline" asChild>
                  <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
                </Button>
              </div>
            </motion.div>
            <InfraMockup />
          </div>
        </div>
      </section>

      {/* TECH SLIDER */}
      <CloudSlider />

      {/* SERVICES — Premium Cards */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Servicios de <span className="gradient-text">Cloud Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desde la arquitectura inicial hasta la operación continua, cubrimos cada capa de tu ecosistema cloud.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
                    Activo
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — 3x2 Grid */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Por qué usar infraestructura <span className="gradient-text">cloud moderna</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reducir costos, eliminar caídas y escalar sin fricciones: esto es lo que una infraestructura bien diseñada hace por tu negocio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_15px_50px_-12px_hsl(var(--primary)/0.2)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.02]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <b.icon size={22} className="text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent group-hover:from-primary/20 transition-colors duration-500" />
                  </div>
                  <h3 className="text-base font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA — Binary Data Flow */}
      <section className="py-28 relative overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 60% 8%), hsl(220 70% 14%), hsl(220 60% 8%))" }} />
        
        {/* Binary stream layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Row 1 */}
          <div className="absolute top-[6%] left-0 whitespace-nowrap text-[12px] font-mono tracking-[0.3em] opacity-[0.07] text-blue-400 animate-[scroll_40s_linear_infinite]">
            {"01001011 10110100 01101001 11001010 00101101 10011100 01110010 10101011 01001110 11010010 00110101 10100111 01011010 11001001 00101110 10110101 01001011 10110100 01101001 11001010 00101101 10011100 01110010 10101011 01001110 11010010 00110101 10100111 01011010 11001001 00101110 10110101 "}
          </div>
          <div className="absolute top-[16%] left-0 whitespace-nowrap text-[10px] font-mono tracking-[0.25em] opacity-[0.05] text-blue-300 animate-[scroll_55s_linear_infinite_reverse]">
            {"10110010 01001101 11010110 00101011 10011001 01110100 11001011 00100110 10101100 01011011 10010111 01101010 11000101 00110100 10111001 01010010 10110010 01001101 11010110 00101011 10011001 01110100 11001011 00100110 10101100 01011011 10010111 01101010 11000101 00110100 10111001 01010010 "}
          </div>
          <div className="absolute top-[28%] left-0 whitespace-nowrap text-[14px] font-mono tracking-[0.35em] opacity-[0.06] text-blue-400 animate-[scroll_45s_linear_infinite]">
            {"00101101 10100110 01011001 11010011 00110100 10011010 01101011 10101100 01001011 11010010 10010110 01100101 11001011 00101010 10110100 01010011 00101101 10100110 01011001 11010011 00110100 10011010 01101011 10101100 01001011 11010010 10010110 01100101 11001011 00101010 10110100 01010011 "}
          </div>
          <div className="absolute top-[42%] left-0 whitespace-nowrap text-[9px] font-mono tracking-[0.2em] opacity-[0.04] text-blue-300 animate-[scroll_60s_linear_infinite_reverse]">
            {"11001010 00110101 10101001 01010110 11001101 00101010 10010011 01101100 11010101 00100110 10110011 01011010 11001001 00101110 10100101 01010010 11001010 00110101 10101001 01010110 11001101 00101010 10010011 01101100 11010101 00100110 10110011 01011010 11001001 00101110 10100101 01010010 "}
          </div>
          <div className="absolute top-[56%] left-0 whitespace-nowrap text-[13px] font-mono tracking-[0.3em] opacity-[0.07] text-blue-400 animate-[scroll_50s_linear_infinite]">
            {"01101001 10010110 11010100 00101011 10110010 01001101 11001010 00110101 10011001 01100100 11010011 00101110 10101001 01011010 10010100 01101011 01101001 10010110 11010100 00101011 10110010 01001101 11001010 00110101 10011001 01100100 11010011 00101110 10101001 01011010 10010100 01101011 "}
          </div>
          <div className="absolute top-[70%] left-0 whitespace-nowrap text-[11px] font-mono tracking-[0.25em] opacity-[0.05] text-blue-300 animate-[scroll_65s_linear_infinite_reverse]">
            {"10011100 01100101 11010010 00101101 10110100 01001011 10101010 00110011 11001001 01010110 10010100 01101011 11010110 00101001 10011010 01010101 10011100 01100101 11010010 00101101 10110100 01001011 10101010 00110011 11001001 01010110 10010100 01101011 11010110 00101001 10011010 01010101 "}
          </div>
          <div className="absolute top-[84%] left-0 whitespace-nowrap text-[12px] font-mono tracking-[0.3em] opacity-[0.06] text-blue-400 animate-[scroll_42s_linear_infinite]">
            {"01010011 10101100 00110010 11001011 01101010 10010101 11010100 00101011 10110001 01001110 11001010 00110101 10011001 01100100 11010011 00101110 01010011 10101100 00110010 11001011 01101010 10010101 11010100 00101011 10110001 01001110 11001010 00110101 10011001 01100100 11010011 00101110 "}
          </div>
        </div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,60%,8%)] via-transparent to-[hsl(220,60%,8%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,60%,8%)]/60 via-transparent to-[hsl(220,60%,8%)]/60 pointer-events-none" />
        
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[150px] pointer-events-none" style={{ background: "radial-gradient(ellipse, hsl(var(--primary)/0.12), transparent 70%)" }} />

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Cloud Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white leading-tight">
              Construyamos la infraestructura que tu empresa{" "}
              <span className="gradient-text">necesita</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
              Diseñamos plataformas cloud modernas preparadas para escalar, seguras y optimizadas para operaciones críticas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="#architecture">Arquitectura Cloud <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/[0.07] hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300" asChild>
                <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section id="architecture" className="py-24 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Proceso de <span className="gradient-text">Desarrollo</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la idea al despliegue: siete etapas que aseguran una entrega sólida, probada y lista para producción.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            {/* Background line */}
            <div className="absolute top-[52px] left-[7%] right-[7%] h-[2px] bg-border/50 rounded-full" />
            {/* Animated progress line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[52px] left-[7%] right-[7%] h-[2px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.6), hsl(var(--primary)), hsl(var(--primary)/0.6))" }}
            />
            <div className="grid grid-cols-7 gap-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number */}
                  <span className="text-[10px] font-bold text-primary/40 mb-2 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  {/* Node with connector dot */}
                  <div className="relative z-10">
                    <div className="w-[72px] h-[72px] rounded-2xl border-2 border-border bg-card flex items-center justify-center shadow-md group-hover:border-primary/40 group-hover:shadow-[0_0_35px_-8px_hsl(var(--primary)/0.35)] transition-all duration-500">
                      <step.icon size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Dot on the line */}
                    <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40 border-2 border-card group-hover:bg-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-xs font-bold font-display mt-4 mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-snug max-w-[120px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile timeline (vertical) */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
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
                  <span className="text-[9px] font-bold text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-sm font-bold font-display group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOPS STACK */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Stack <span className="gradient-text">DevOps y Cloud</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-4xl mx-auto">
            {devopsTools.map((t, i) => (
              <motion.div key={t.name} {...fade(i * 0.05)} className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.15)] hover:-translate-y-1 transition-all duration-400">
                <img src={t.icon} alt={t.name} className="w-10 h-10 object-contain dark:invert dark:brightness-200 dark:contrast-200 group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-transparent to-muted/20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Casos de uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Casos de <span className="gradient-text">Uso</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proyectos reales donde los cloud services marcan la diferencia operativa y competitiva.
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white">
              Tu próximo paso hacia una operación{" "}
              <span className="gradient-text">más eficiente</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Agenda una sesión técnica sin compromiso y recibe un diagnóstico de tu infraestructura actual.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/#contact">Solicitar diagnóstico <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white hover:text-foreground text-white border border-white/20 transition-all" asChild>
                <a href="/#contact">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default CloudPage;
