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
        {/* Top metrics */}
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

        {/* Pipeline visualization */}
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
  { icon: Database, title: "CRM personalizado para tu empresa", desc: "Configurado según tu modelo de negocio, industria y proceso comercial." },
  { icon: Layers, title: "Configuración de pipeline de ventas", desc: "Etapas definidas que reflejan tu ciclo de ventas real." },
  { icon: Zap, title: "Automatización de seguimiento de leads", desc: "Emails, recordatorios y tareas automáticas para no perder ninguna oportunidad." },
  { icon: Workflow, title: "Integración con marketing y formularios web", desc: "Captura leads desde tu sitio web, landing pages y campañas digitales." },
  { icon: LineChart, title: "Paneles de control y reportes en tiempo real", desc: "Dashboards con métricas clave para tomar decisiones basadas en datos." },
  { icon: Users, title: "Capacitación del equipo comercial", desc: "Entrenamiento completo para que tu equipo adopte el CRM desde el día uno." },
];

const benefits = [
  { icon: Target, title: "Mejor control de oportunidades", desc: "Visualiza cada oportunidad en tu pipeline y nunca pierdas un seguimiento." },
  { icon: Zap, title: "Seguimiento automático de clientes", desc: "Automatiza correos, recordatorios y tareas para cada etapa del proceso." },
  { icon: PieChart, title: "Visibilidad total del pipeline", desc: "Ve en tiempo real cuántas oportunidades tienes y en qué etapa están." },
  { icon: TrendingUp, title: "Equipos comerciales más eficientes", desc: "Tus vendedores se enfocan en vender, no en tareas administrativas." },
  { icon: BarChart3, title: "Decisiones basadas en datos", desc: "Reportes claros que te permiten ajustar estrategias con información real." },
];

const useCases = [
  { icon: Briefcase, title: "CRM para equipos comerciales", desc: "Organiza vendedores, territorios y metas con visibilidad completa." },
  { icon: Home, title: "CRM para inmobiliarias", desc: "Gestiona propiedades, prospectos e inventario desde una sola plataforma." },
  { icon: Headphones, title: "CRM para empresas de servicios", desc: "Controla clientes, proyectos y renovaciones de contratos." },
  { icon: Activity, title: "CRM para alto volumen de leads", desc: "Automatiza la calificación y distribución de leads a tu equipo." },
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
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/6 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                CRM & Automatización de Ventas
              </span>
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

      {/* ──────── PROBLEMAS ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-4">
              Problemas Comunes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Problemas que <span className="gradient-text">Resolvemos</span>
            </h2>
            <p className="text-muted-foreground">
              Si tu empresa enfrenta alguno de estos retos, un CRM bien implementado puede transformar tu operación comercial.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-soft)]"
              >
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <p.icon size={20} className="text-destructive group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── QUÉ INCLUYE ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Implementación Completa
            </span>
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
                className="group glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-soft)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── BENEFICIOS ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Resultados que puedes <span className="gradient-text">esperar</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="flex gap-4 p-5 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CASOS DE USO ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Casos de Uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              CRM adaptado a <span className="gradient-text">tu industria</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="group glass-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--glow-soft)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <u.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
