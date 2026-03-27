import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, HardDrive, Video, CalendarDays, FileText,
  Shield, Globe, Zap, ArrowRight, CheckCircle2,
  Users, Settings, Lock, Layers, RefreshCw,
  Headphones, ChevronDown, MonitorSmartphone,
  ArrowUpRight, Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";

/* ─── Google product icons ─── */
import gmailIcon from "@/assets/google/gmail.svg";
import driveIcon from "@/assets/google/drive.svg";
import calendarIcon from "@/assets/google/calendar.svg";
import meetIcon from "@/assets/google/meet.svg";
import docsIcon from "@/assets/google/docs.svg";
import sheetsIcon from "@/assets/google/sheets.svg";
import slidesIcon from "@/assets/google/slides.svg";
import chatIcon from "@/assets/google/chat-new.svg";
import formsIcon from "@/assets/google/forms.svg";
import sitesIcon from "@/assets/google/sites.svg";
import currentsIcon from "@/assets/google/currents.png";
import jamboardIcon from "@/assets/google/jamboard.png";
import geminiIcon from "@/assets/google/gemini.png";
import appsheetIcon from "@/assets/google/appsheet.svg";
import vidsIcon from "@/assets/google/vids.svg";
import tasksIcon from "@/assets/google/tasks.svg";
import notebooklmIcon from "@/assets/google/notebooklm.svg";
import keepIcon from "@/assets/google/notes.svg";
import googleShieldIcon from "@/assets/google/google-shield.svg";

/* ─── Constants ─── */
const WA = "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20la%20implementaci%C3%B3n%20de%20Google%20Workspace%20para%20mi%20empresa";
const CAL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

/* ─── JSON-LD ─── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implementación de Google Workspace para Empresas",
    provider: { "@type": "Organization", name: "North", url: "https://northmkt.com.mx" },
    description: "Implementamos y migramos Google Workspace para empresas en México. Configuración profesional, seguridad y soporte especializado.",
    url: "https://northmkt.com.mx/google-workspace-mexico",
    areaServed: { "@type": "Country", name: "México" },
    serviceType: "Google Workspace Implementation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "North",
    url: "https://northmkt.com.mx",
    logo: "https://northmkt.com.mx/favicon.webp",
    sameAs: ["https://www.facebook.com/northmkt", "https://www.instagram.com/northmkt"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuánto tarda una migración a Google Workspace?", acceptedAnswer: { "@type": "Answer", text: "Dependiendo del volumen de datos y cantidad de usuarios, una migración típica tarda entre 3 y 10 días hábiles." } },
      { "@type": "Question", name: "¿Pueden migrar correos existentes?", acceptedAnswer: { "@type": "Answer", text: "Sí, migramos correos, contactos, calendarios y archivos desde cualquier plataforma sin pérdida de datos." } },
      { "@type": "Question", name: "¿Incluyen configuración de seguridad?", acceptedAnswer: { "@type": "Answer", text: "Sí, configuramos autenticación de dos factores, políticas de contraseñas, DLP y gestión de dispositivos." } },
      { "@type": "Question", name: "¿Pueden dar soporte mensual?", acceptedAnswer: { "@type": "Answer", text: "Sí, ofrecemos planes de soporte y administración continua para mantener tu entorno seguro y actualizado." } },
      { "@type": "Question", name: "¿Pueden integrar Google Workspace con otros sistemas?", acceptedAnswer: { "@type": "Answer", text: "Sí, conectamos Google Workspace con CRM, ERP, herramientas de automatización y otros sistemas." } },
    ],
  },
];

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  style: { willChange: "transform, opacity" } as React.CSSProperties,
});

/* ─── Data ─── */
const heroApps = [
  { icon: gmailIcon, name: "Gmail", primary: true },
  { icon: calendarIcon, name: "Calendar", primary: true },
  { icon: driveIcon, name: "Drive", primary: true },
  { icon: meetIcon, name: "Meet", primary: false },
  { icon: docsIcon, name: "Docs", primary: false },
  { icon: sheetsIcon, name: "Sheets", primary: false },
  { icon: slidesIcon, name: "Slides", primary: false },
];

const workspaceTools = [
  { name: "Gmail", label: "Correo empresarial personalizado con tu dominio", icon: gmailIcon },
  { name: "Google Drive", label: "Almacenamiento seguro en la nube para tu equipo", icon: driveIcon },
  { name: "Google Calendar", label: "Calendario compartido y gestión de eventos", icon: calendarIcon },
  { name: "Google Meet", label: "Videollamadas HD con hasta 500 participantes", icon: meetIcon },
  { name: "Google Docs", label: "Documentos colaborativos en tiempo real", icon: docsIcon },
  { name: "Google Sheets", label: "Hojas de cálculo con análisis avanzado", icon: sheetsIcon },
  { name: "Google Slides", label: "Presentaciones profesionales colaborativas", icon: slidesIcon },
  { name: "Google Chat", label: "Mensajería instantánea para equipos", icon: chatIcon },
  { name: "Google Forms", label: "Formularios y encuestas inteligentes", icon: formsIcon },
  { name: "Google Sites", label: "Sitios web internos sin código", icon: sitesIcon },
  { name: "Gemini", label: "IA integrada para productividad avanzada", icon: geminiIcon },
  { name: "AppSheet", label: "Crea apps empresariales sin código", icon: appsheetIcon },
  { name: "Google Vids", label: "Creación de videos colaborativa", icon: vidsIcon },
  { name: "Google Tasks", label: "Gestión de tareas y pendientes", icon: tasksIcon },
  { name: "NotebookLM", label: "Asistente de investigación con IA", icon: notebooklmIcon },
  { name: "Currents", label: "Comunicación interna empresarial", icon: currentsIcon },
  { name: "Google Keep", label: "Notas y listas rápidas para tu equipo", icon: keepIcon },
];

const benefitsData = [
  {
    icon: Mail,
    title: "Correo profesional y colaboración",
    desc: "Correo con tu dominio, calendario compartido y herramientas de productividad integradas para que tu equipo opere con una imagen profesional.",
    highlights: ["Correo @tuempresa.com", "30 GB – ilimitado por usuario", "Filtros y etiquetas inteligentes"],
  },
  {
    icon: Shield,
    title: "Seguridad empresarial",
    desc: "Protege la información de tu empresa con cifrado, autenticación avanzada y control centralizado de accesos y dispositivos.",
    highlights: ["Autenticación de dos factores", "Prevención de pérdida de datos", "Gestión de dispositivos"],
  },
  {
    icon: Users,
    title: "Trabajo en tiempo real",
    desc: "Tu equipo edita documentos simultáneamente, se comunica al instante y mantiene la información siempre sincronizada.",
    highlights: ["Edición simultánea", "Comentarios y sugerencias", "Historial de versiones"],
  },
  {
    icon: Globe,
    title: "Acceso desde cualquier lugar",
    desc: "Trabaja desde oficina, casa o cualquier ubicación. Todas tus herramientas y archivos disponibles en la nube.",
    highlights: ["Apps móviles nativas", "Sincronización automática", "Sin VPN ni servidores"],
  },
];

const services = [
  { icon: RefreshCw, title: "Migración a Google Workspace", desc: "Migramos correos, contactos, calendarios y archivos desde cualquier plataforma sin pérdida de datos ni tiempo de inactividad." },
  { icon: Layers, title: "Implementación completa", desc: "Configuramos desde cero: dominio, cuentas de usuario, políticas de seguridad y estructura organizacional completa." },
  { icon: Shield, title: "Configuración de seguridad", desc: "Autenticación de dos factores, políticas de contraseñas, control de acceso y prevención de pérdida de datos (DLP)." },
  { icon: Workflow, title: "Integración con sistemas", desc: "Conectamos Google Workspace con tu CRM, ERP, herramientas de automatización y sistemas empresariales." },
  { icon: Headphones, title: "Soporte y administración", desc: "Gestionamos tu consola de administración, resolvemos incidencias y mantenemos tu entorno actualizado." },
  { icon: MonitorSmartphone, title: "Administración continua", desc: "Monitoreamos, optimizamos y damos soporte a tu entorno de Google Workspace para asegurar estabilidad y rendimiento continuo." },
];

const whyBlocks = [
  { icon: Zap, title: "Trabajo en tiempo real", desc: "Edición simultánea, videollamadas integradas y mensajería instantánea." },
  { icon: Shield, title: "Seguridad de nivel empresarial", desc: "Cifrado, 2FA, DLP y cumplimiento de normativas internacionales." },
  { icon: Globe, title: "Acceso desde cualquier lugar", desc: "Nube nativa — sin servidores, sin VPN, sin complicaciones." },
  { icon: ArrowUpRight, title: "Escalabilidad inmediata", desc: "Agrega usuarios en minutos. Tu infraestructura crece contigo." },
];

const plans = [
  {
    name: "Implementación básica",
    price: "Desde $8,000 MXN",
    desc: "Ideal para empresas pequeñas que necesitan correo profesional y herramientas básicas.",
    features: ["Configuración de dominio", "Hasta 10 cuentas de usuario", "Configuración de Gmail y Drive", "Capacitación básica"],
    cta: "Solicitar cotización",
    featured: false,
  },
  {
    name: "Migración y configuración",
    price: "Desde $18,000 MXN",
    desc: "Para empresas que necesitan migrar desde otra plataforma con configuración avanzada.",
    features: ["Migración completa de datos", "Configuración de seguridad", "Políticas de acceso", "Drive compartidos", "Capacitación del equipo"],
    cta: "Solicitar cotización",
    featured: true,
  },
  {
    name: "Soporte y administración",
    price: "Desde $5,000 MXN/mes",
    desc: "Administración continua para empresas que necesitan soporte especializado permanente.",
    features: ["Gestión de consola admin", "Soporte prioritario", "Monitoreo de seguridad", "Actualizaciones y optimización", "Reportes mensuales"],
    cta: "Solicitar cotización",
    featured: false,
  },
];

const faqs = [
  { q: "¿Cuánto tarda una migración a Google Workspace?", a: "Dependiendo del volumen de datos y cantidad de usuarios, una migración típica tarda entre 3 y 10 días hábiles. Planificamos cada paso para minimizar interrupciones." },
  { q: "¿Pueden migrar correos existentes?", a: "Sí, migramos correos, contactos, calendarios y archivos desde cualquier plataforma (Outlook, Yahoo, GoDaddy, cPanel, etc.) sin pérdida de datos." },
  { q: "¿Incluyen configuración de seguridad?", a: "Sí, todos nuestros planes incluyen configuración de autenticación de dos factores, políticas de contraseñas y control de acceso. Los planes avanzados incluyen DLP y gestión de dispositivos." },
  { q: "¿Pueden dar soporte mensual?", a: "Sí, ofrecemos planes de soporte y administración continua que incluyen gestión de consola, resolución de incidencias, monitoreo de seguridad y reportes mensuales." },
  { q: "¿Pueden integrar Google Workspace con otros sistemas?", a: "Sí, conectamos Google Workspace con CRM, ERP, herramientas de automatización y otros sistemas empresariales mediante APIs y conectores nativos." },
];

/* ─── Workspace Dashboard Mockup ─── */
const WorkspaceMockup = () => (
  <motion.div
    {...fade(0.2)}
    className="relative rounded-2xl border border-border bg-background shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)] overflow-hidden"
  >
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-card">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[hsl(0,70%,65%)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(45,80%,60%)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(140,60%,50%)]" />
        </div>
        <span className="text-xs text-muted-foreground/60 ml-2 font-mono">workspace.google.com</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[hsl(140,60%,50%)] animate-status-pulse" />
        <span className="text-[10px] text-muted-foreground font-medium">Active</span>
      </div>
    </div>
    <div className="flex min-h-[260px] md:min-h-[320px]">
      <div className="hidden md:flex flex-col w-14 border-r border-border/40 bg-card/50 py-4 items-center gap-4">
        {[gmailIcon, docsIcon, meetIcon, sheetsIcon, chatIcon].map((src, i) => (
          <img key={i} src={src} alt="" width={20} height={20} className="opacity-70" />
        ))}
        <div className="mt-auto"><Settings size={16} className="text-muted-foreground/40" /></div>
      </div>
      <div className="flex-1 p-4 space-y-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {[
            { label: "Usuarios", value: "48", icon: Users, color: "text-primary" },
            { label: "Almacenamiento", value: "2.4 TB", icon: HardDrive, color: "text-accent" },
            { label: "Emails Hoy", value: "1,247", icon: Mail, color: "text-destructive" },
            { label: "Reuniones", value: "23", icon: Video, color: "text-primary" },
          ].map((m, i) => (
            <div key={i} className="p-2.5 rounded-lg border border-border/40 bg-card/50">
              <div className="flex items-center gap-1.5 mb-1">
                <m.icon size={11} className={m.color} />
                <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">{m.label}</span>
              </div>
              <p className="text-base font-bold font-display text-foreground">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border/40 bg-card/30 p-3">
          <p className="text-[9px] text-muted-foreground/50 uppercase tracking-wider mb-2">Actividad Reciente</p>
          <div className="space-y-1.5">
            {[
              { icon: Mail, msg: "Migración completada — 48 cuentas", color: "text-primary" },
              { icon: Shield, msg: "2FA activado para todos los usuarios", color: "text-primary" },
              { icon: HardDrive, msg: "Drive compartido — Equipo Ventas", color: "text-accent" },
              { icon: Lock, msg: "Política de seguridad actualizada", color: "text-primary" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-2">
                <l.icon size={11} className={l.color} />
                <span className="text-xs text-muted-foreground/70 truncate">{l.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── FAQ Accordion Item ─── */
const FaqItem = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className="border border-border/60 rounded-xl overflow-hidden bg-card transition-colors">
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left gap-4">
      <span className="font-semibold text-foreground text-[15px] leading-snug">{q}</span>
      <ChevronDown size={18} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
    </button>
    <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="overflow-hidden">
        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
const GoogleWorkspaceMexico = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Google Workspace para Empresas en México | Implementación y Soporte"
        description="Implementamos y migramos Google Workspace para empresas en México. Configuración profesional, seguridad y soporte especializado."
        url="https://northmkt.com.mx/google-workspace-mexico"
        image="https://northmkt.com.mx/og-google-workspace.jpg"
        keywords="Google Workspace México, migración Google Workspace, implementación Google Workspace, soporte Google Workspace empresas, correo empresarial Google"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ══════════ 1. HERO ══════════ */}
      <section className="relative min-h-0 md:min-h-[92vh] flex items-center pt-8 md:pt-24 pb-16 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/[0.06] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fade()} className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Google Workspace Partner
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-display leading-[1.08] mb-6 tracking-tight">
                Google Workspace para{" "}
                <span className="gradient-text">Empresas en México</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Implementamos, migramos y administramos Google Workspace para empresas que necesitan colaborar mejor, operar con seguridad y escalar sin fricción.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={CAL} target="_blank" rel="noopener noreferrer">
                    Solicitar implementación <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-[#25D366]/40 text-[#25D366] font-semibold text-base transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
                >
                  Hablar con un especialista
                </a>
              </div>

              {/* Apps strip */}
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                {heroApps.map((app, i) => (
                  <div key={i} className={`rounded-xl bg-card border flex items-center justify-center transition-transform duration-300 hover:scale-110 ${app.primary ? "w-12 h-12 border-primary/25 shadow-sm" : "w-10 h-10 border-border/60"}`} title={app.name}>
                    <img src={app.icon} alt={app.name} width={app.primary ? 26 : 20} height={app.primary ? 26 : 20} />
                  </div>
                ))}
                <span className="text-xs text-muted-foreground ml-3">+9 más</span>
              </div>
            </motion.div>
            <WorkspaceMockup />
          </div>
        </div>
      </section>

      {/* ══════════ 2. INCLUDED TOOLS ══════════ */}
      <section className="py-28 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Ecosistema completo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Herramientas incluidas en <span className="gradient-text">Google Workspace</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Una suite completa de aplicaciones empresariales integradas que potencian la productividad de tu equipo.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {workspaceTools.map((tool, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.04)}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background hover:border-primary/20 hover:shadow-md transition-shadow transition-border duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <img src={tool.icon} alt={tool.name} width={28} height={28} loading="lazy" className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold font-display text-foreground leading-snug">{tool.name}</h3>
                  <p className="text-[11px] text-muted-foreground/70 leading-snug mt-0.5 line-clamp-2">{tool.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 3. BENEFITS ══════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="hidden md:block absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Todo lo que tu empresa necesita para <span className="gradient-text">trabajar mejor</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {benefitsData.map((b, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="group grid md:grid-cols-[1fr_1.2fr] gap-8 items-center p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/20 hover:shadow-lg transition-shadow transition-border duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {b.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/30">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-sm text-foreground font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 4. SERVICES ══════════ */}
      <section className="py-28 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Lo que hacemos por <span className="gradient-text">tu empresa</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desde la migración inicial hasta el soporte continuo, nos encargamos de todo para que tu equipo solo se enfoque en trabajar.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="group p-6 rounded-xl border border-border/60 bg-background hover:border-primary/25 hover:shadow-lg transition-shadow transition-border duration-300">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-bold font-display text-foreground mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 5. WHY IMPLEMENT ══════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-accent/[0.04] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div {...fade()}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                Ventajas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-5 text-foreground leading-tight">
                Por qué implementar <span className="gradient-text">Google Workspace</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Las empresas más productivas de México ya operan con Google Workspace. Centraliza tu operación, protege tu información y escala sin fricción.
              </p>
              <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
                <a href={CAL} target="_blank" rel="noopener noreferrer">
                  Agenda una consulta <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
            </motion.div>

            <div className="space-y-4">
              {whyBlocks.map((w, i) => {
                const isSecurityBlock = w.icon === Shield;
                return (
                  <motion.div key={i} {...fade(i * 0.1)} className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card hover:border-primary/20 hover:shadow-md transition-shadow transition-border duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {isSecurityBlock
                        ? <img src={googleShieldIcon} alt="Google Security" width={22} height={22} className="object-contain" />
                        : <w.icon size={18} className="text-primary" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-[15px] mb-1">{w.title}</h3>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 6. PLANS ══════════ */}
      <section className="py-28 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Inversión
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Planes de implementación para <span className="gradient-text">empresas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elige el plan que mejor se adapte a las necesidades de tu empresa. Todos incluyen acompañamiento personalizado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className={`relative flex flex-col p-7 rounded-2xl border transition-shadow duration-300 ${
                  plan.featured
                    ? "border-primary/40 bg-background shadow-[var(--glow-soft)]"
                    : "border-border/60 bg-background hover:shadow-lg"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Más popular
                  </span>
                )}
                <h3 className="text-lg font-bold font-display text-foreground mb-1">{plan.name}</h3>
                <p className="text-2xl font-extrabold font-display text-primary mb-3">{plan.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={15} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.featured ? "gradient" : "outline"} className="w-full py-5" asChild>
                  <a href={CAL} target="_blank" rel="noopener noreferrer">
                    {plan.cta} <ArrowRight size={14} className="ml-1" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 7. TRUST / SOCIAL PROOF ══════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                  Experiencia
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-5 text-foreground leading-tight">
                  Implementaciones pensadas para empresas que necesitan <span className="gradient-text">operar sin fricción</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Desde startups hasta empresas con más de 200 colaboradores, configuramos entornos de Google Workspace que funcionan desde el primer día — con seguridad, estructura y soporte real.
                </p>
                <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80 text-[15px] leading-relaxed">
                  "Necesitábamos un equipo que entendiera nuestra operación y nos ayudara a migrar sin perder un solo correo. North lo logró en 5 días."
                </blockquote>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Cuentas migradas" },
                  { value: "99.9%", label: "Uptime garantizado" },
                  { value: "5 días", label: "Migración promedio" },
                  { value: "24/7", label: "Soporte disponible" },
                ].map((s, i) => (
                  <motion.div key={i} {...fade(i * 0.1)} className="p-5 rounded-xl border border-border/60 bg-card text-center">
                    <p className="text-2xl font-extrabold font-display text-primary mb-1">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ 8. FAQ ══════════ */}
      <section className="py-28 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground leading-tight">
              Resolvemos tus <span className="gradient-text">dudas</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fade(i * 0.06)}>
                <FaqItem q={faq.q} a={faq.a} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 9. FINAL CTA ══════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/[0.06] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <img src="/favicon.webp" alt="North" className="w-8 h-8 object-contain" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-foreground leading-tight">
              Implementa Google Workspace{" "}
              <span className="gradient-text">sin complicaciones</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Te ayudamos a migrar, configurar y administrar Google Workspace para que tu equipo trabaje mejor desde el primer día.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-base px-10 py-6" asChild>
                <a href={CAL} target="_blank" rel="noopener noreferrer">
                  Agenda una llamada <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border border-[#25D366]/40 text-[#25D366] font-semibold text-base transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeText />
      <Footer />
    </>
  );
};

export default GoogleWorkspaceMexico;
