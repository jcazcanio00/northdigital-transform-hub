import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users, Zap, BarChart3, ArrowRight, CheckCircle2,
  Database, Workflow, Monitor, Shield, TrendingUp,
  Layers, Settings, LineChart, Building2,
  Activity, Bell, Clock, MessageSquare, Calendar,
  Target, AlertTriangle, FileSpreadsheet, Search,
  PieChart, UserCheck, Briefcase, Home, Headphones
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

/* ─── Badge Component (matches homepage style) ─── */
const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
    <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
    {children}
  </span>
);

/* ─── CRM Dashboard Mockup ─── */
const CrmMockup = () => (
  <div className="relative rounded-2xl border border-border bg-[hsl(228,45%,8%)] shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <span className="text-[10px] text-muted-foreground ml-2 font-mono">crm.northmkt.com</span>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-48 border-r border-border/20 p-3 space-y-1 hidden md:block">
        {[
          { icon: Monitor, label: "Dashboard", active: true },
          { icon: Users, label: "Contactos" },
          { icon: Target, label: "Pipeline" },
          { icon: Calendar, label: "Actividades" },
          { icon: BarChart3, label: "Reportes" },
          { icon: Settings, label: "Config" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
              item.active
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon size={14} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Leads Activos", value: "247", change: "+18%", color: "text-primary" },
            { label: "Oportunidades", value: "$1.2M", change: "+24%", color: "text-emerald-400" },
            { label: "Tasa Cierre", value: "32%", change: "+5%", color: "text-accent" },
            { label: "Tiempo Respuesta", value: "2.4h", change: "-15%", color: "text-amber-400" },
          ].map((m, i) => (
            <div key={i} className="rounded-xl bg-muted/10 border border-border/20 p-3">
              <p className="text-[10px] text-muted-foreground">{m.label}</p>
              <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
              <p className="text-[9px] text-emerald-400">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
          <p className="text-[10px] text-muted-foreground mb-3">Pipeline de Ventas</p>
          <div className="flex gap-2">
            {[
              { stage: "Prospecto", count: 84, width: "100%" },
              { stage: "Calificado", count: 52, width: "62%" },
              { stage: "Propuesta", count: 31, width: "37%" },
              { stage: "Negociación", count: 18, width: "21%" },
              { stage: "Cerrado", count: 12, width: "14%" },
            ].map((s, i) => (
              <div key={i} className="flex-1 space-y-1">
                <p className="text-[9px] text-muted-foreground text-center">{s.stage}</p>
                <div className="h-16 bg-primary/5 rounded-lg relative overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/40 to-primary/10 rounded-lg"
                    initial={{ height: 0 }}
                    whileInView={{ height: s.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
                <p className="text-[10px] font-semibold text-center text-foreground">{s.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
          <p className="text-[10px] text-muted-foreground mb-2">Actividad Reciente</p>
          <div className="space-y-2">
            {[
              { icon: UserCheck, text: "Nuevo lead calificado: Grupo Inmobiliario MX", time: "Hace 5 min" },
              { icon: MessageSquare, text: "Seguimiento automático enviado a 12 contactos", time: "Hace 22 min" },
              { icon: Bell, text: "Propuesta aceptada: $45,000 MXN", time: "Hace 1 hora" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px]">
                <a.icon size={12} className="text-primary shrink-0" />
                <span className="text-foreground/80 flex-1">{a.text}</span>
                <span className="text-muted-foreground whitespace-nowrap">{a.time}</span>
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

const features = [
  { icon: Database, title: "CRM personalizado para tu empresa", desc: "Configurado según tu modelo de negocio, industria y proceso comercial.", num: "01" },
  { icon: Layers, title: "Configuración de pipeline de ventas", desc: "Etapas definidas que reflejan tu ciclo de ventas real.", num: "02" },
  { icon: Zap, title: "Automatización de seguimiento de leads", desc: "Emails, recordatorios y tareas automáticas para no perder ninguna oportunidad.", num: "03" },
  { icon: Workflow, title: "Integración con marketing y formularios web", desc: "Captura leads desde tu sitio web, landing pages y campañas digitales.", num: "04" },
  { icon: LineChart, title: "Paneles de control y reportes en tiempo real", desc: "Dashboards con métricas clave para tomar decisiones basadas en datos.", num: "05" },
  { icon: Users, title: "Capacitación del equipo comercial", desc: "Entrenamiento completo para que tu equipo adopte el CRM desde el día uno.", num: "06" },
];

const benefits = [
  { icon: Target, title: "Mejor control de oportunidades", desc: "Visualiza cada oportunidad en tu pipeline y nunca pierdas un seguimiento." },
  { icon: Zap, title: "Seguimiento automático de clientes", desc: "Automatiza correos, recordatorios y tareas para cada etapa del proceso." },
  { icon: PieChart, title: "Visibilidad total del pipeline", desc: "Ve en tiempo real cuántas oportunidades tienes y en qué etapa están." },
  { icon: TrendingUp, title: "Equipos comerciales más eficientes", desc: "Tus vendedores se enfocan en vender, no en tareas administrativas." },
  { icon: BarChart3, title: "Decisiones basadas en datos", desc: "Reportes claros que te permiten ajustar estrategias con información real." },
];

const useCases = [
  { icon: Briefcase, title: "CRM para equipos comerciales", desc: "Organiza vendedores, territorios y metas con visibilidad completa.", num: "01" },
  { icon: Home, title: "CRM para inmobiliarias", desc: "Gestiona propiedades, prospectos e inventario desde una sola plataforma.", num: "02" },
  { icon: Headphones, title: "CRM para empresas de servicios", desc: "Controla clientes, proyectos y renovaciones de contratos.", num: "03" },
  { icon: Activity, title: "CRM para alto volumen de leads", desc: "Automatiza la calificación y distribución de leads a tu equipo.", num: "04" },
];

const WHATSAPP_LINK =
  "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20una%20implementaci%C3%B3n%20de%20CRM%20para%20mi%20empresa";
const CALENDAR_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

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
        {/* Rich background layers */}
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
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 max-w-lg">
                Muchas empresas pierden oportunidades porque sus leads se gestionan en Excel, WhatsApp o correos desordenados. Diseñamos e implementamos CRM que centralizan toda la información de clientes y automatizan el proceso de ventas.
              </p>
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

      <MarqueeText />

      {/* ──────── PROBLEMAS (dark section) ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,47%,6%)] via-[hsl(228,45%,10%)] to-[hsl(224,47%,6%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-destructive/5 blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-destructive/20 bg-destructive/10 text-xs text-white/60 mb-4">
              <span className="w-2 h-2 rounded-full bg-destructive animate-status-pulse" />
              Problemas Comunes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
              Problemas que <span className="gradient-text">Resolvemos</span>
            </h2>
            <p className="text-white/50">
              Si tu empresa enfrenta alguno de estos retos, un CRM bien implementado puede transformar tu operación comercial.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]"
              >
                <div className="w-11 h-11 rounded-xl bg-destructive/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <p.icon size={20} className="text-destructive group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── QUÉ INCLUYE (light section) ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Implementación Completa</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Qué incluye nuestra{" "}
              <span className="gradient-text">implementación de CRM</span>
            </h2>
            <p className="text-muted-foreground">
              Cada implementación es integral: desde la configuración técnica hasta la capacitación de tu equipo.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="relative group cursor-default"
              >
                <div className="glass-card rounded-2xl p-8 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25 h-full">
                  <span className="absolute top-4 right-5 text-[10px] font-bold text-primary/30 font-display">{f.num}</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.35)] transition-all duration-500">
                    <f.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── BENEFICIOS (dark section) ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,47%,6%)] via-[hsl(228,50%,12%)] to-[hsl(224,47%,6%)]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-xs text-white/60 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-status-pulse" />
              Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
              Resultados que puedes <span className="gradient-text">esperar</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Un CRM bien implementado transforma la forma en que tu equipo comercial trabaja y genera resultados.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CASOS DE USO (light section) ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge>Casos de Uso</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              CRM adaptado a <span className="gradient-text">tu industria</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Cada negocio es diferente. Implementamos CRM configurados para las necesidades específicas de tu industria.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="relative group cursor-default"
              >
                <div className="glass-card rounded-2xl p-8 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25 h-full">
                  <span className="absolute top-4 right-5 text-[10px] font-bold text-primary/30 font-display">{u.num}</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.35)] transition-all duration-500">
                    <u.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors duration-300">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CTA FINAL (dark premium) ──────── */}
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

export default CrmEmpresas;
