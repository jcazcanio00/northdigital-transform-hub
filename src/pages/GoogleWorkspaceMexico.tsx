import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail, HardDrive, Video, CalendarDays, FileText,
  Shield, Globe, Zap, ArrowRight, CheckCircle2,
  Users, Settings, Lock, Cloud, Layers, RefreshCw,
  AlertTriangle, Search, Headphones, Monitor,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

/* ─── Constants ─── */
const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20me%20interesa%20la%20implementaci%C3%B3n%20de%20Google%20Workspace%20para%20mi%20empresa";
const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF";

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
];

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  style: { willChange: "transform, opacity" } as React.CSSProperties,
});

/* ─── Section Badge ─── */
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

/* ─── Google product colors for icons ─── */
const GoogleIcon = ({ type, size = 18 }: { type: "gmail" | "drive" | "meet" | "calendar" | "docs"; size?: number }) => {
  const icons = { gmail: Mail, drive: HardDrive, meet: Video, calendar: CalendarDays, docs: FileText };
  const colors = {
    gmail: "text-red-500",
    drive: "text-yellow-500",
    meet: "text-green-500",
    calendar: "text-blue-500",
    docs: "text-blue-400",
  };
  const Icon = icons[type];
  return <Icon size={size} className={colors[type]} />;
};

/* ─── Workspace Dashboard Mockup ─── */
const WorkspaceMockup = () => (
  <motion.div
    {...fade(0.2)}
    className="relative rounded-2xl border border-border bg-background shadow-[0_8px_60px_-15px_hsl(228,69%,55%/0.12),0_2px_12px_-3px_hsl(0,0%,0%/0.06)] overflow-hidden"
  >
    {/* Title bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-card">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <span className="text-xs text-muted-foreground/60 ml-2 font-mono">workspace.google.com</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
        <span className="text-[10px] text-green-500 font-medium">Active</span>
      </div>
    </div>

    <div className="flex min-h-[280px] md:min-h-[340px]">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-14 border-r border-border/40 bg-card/50 py-4 items-center gap-4">
        <GoogleIcon type="gmail" size={20} />
        <GoogleIcon type="drive" size={20} />
        <GoogleIcon type="meet" size={20} />
        <GoogleIcon type="calendar" size={20} />
        <GoogleIcon type="docs" size={20} />
        <div className="mt-auto">
          <Settings size={16} className="text-muted-foreground/40" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 space-y-4">
        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Usuarios", value: "48", icon: Users, color: "text-blue-500" },
            { label: "Almacenamiento", value: "2.4 TB", icon: HardDrive, color: "text-yellow-500" },
            { label: "Emails Hoy", value: "1,247", icon: Mail, color: "text-red-500" },
            { label: "Reuniones", value: "23", icon: Video, color: "text-green-500" },
          ].map((m, i) => (
            <div key={i} className="p-3 rounded-lg border border-border/40 bg-card/50">
              <div className="flex items-center gap-2 mb-1">
                <m.icon size={12} className={m.color} />
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">{m.label}</span>
              </div>
              <p className="text-lg font-bold font-display text-foreground">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="rounded-lg border border-border/40 bg-card/30 p-3">
          <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider mb-2">Actividad Reciente</p>
          <div className="space-y-2">
            {[
              { icon: Mail, msg: "Migración completada — 48 cuentas", color: "text-green-500" },
              { icon: Shield, msg: "2FA activado para todos los usuarios", color: "text-blue-500" },
              { icon: HardDrive, msg: "Drive compartido creado — Equipo Ventas", color: "text-yellow-500" },
              { icon: Lock, msg: "Política de seguridad actualizada", color: "text-primary" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-2">
                <l.icon size={12} className={l.color} />
                <span className="text-xs text-muted-foreground/70 truncate">{l.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Data ─── */
const problems = [
  { icon: AlertTriangle, title: "Correos no profesionales", desc: "Usar @gmail.com o @hotmail.com reduce la confianza de tus clientes y afecta la imagen de tu empresa." },
  { icon: Search, title: "Pérdida de información", desc: "Archivos dispersos en USB, computadoras personales o chats de WhatsApp sin respaldo centralizado." },
  { icon: Users, title: "Falta de colaboración", desc: "Tu equipo no puede trabajar en documentos al mismo tiempo ni compartir información de forma organizada." },
  { icon: Lock, title: "Sin control de seguridad", desc: "No tienes visibilidad sobre quién accede a qué información ni puedes gestionar permisos de forma centralizada." },
  { icon: Settings, title: "Trabajo manual innecesario", desc: "Procesos que podrían automatizarse siguen dependiendo de correos, llamadas y archivos adjuntos." },
];

const solutions = [
  { icon: Mail, title: "Gmail Empresarial", desc: "Correo profesional con tu dominio, 30 GB+ de almacenamiento y búsqueda avanzada. Sin anuncios, con soporte 24/7.", color: "text-red-500" },
  { icon: HardDrive, title: "Google Drive", desc: "Almacenamiento en la nube seguro y compartido. Organiza archivos por equipo con permisos granulares.", color: "text-yellow-500" },
  { icon: Video, title: "Google Meet", desc: "Videollamadas HD para hasta 500 participantes. Grabación, subtítulos en vivo y pantalla compartida.", color: "text-green-500" },
  { icon: CalendarDays, title: "Google Calendar", desc: "Agenda compartida del equipo. Programa reuniones, reserva salas y sincroniza con otros calendarios.", color: "text-blue-500" },
  { icon: FileText, title: "Documentos Colaborativos", desc: "Docs, Sheets y Slides con edición en tiempo real. Múltiples personas en el mismo archivo simultáneamente.", color: "text-blue-400" },
];

const services = [
  { icon: RefreshCw, title: "Migración a Google Workspace", desc: "Migramos tus correos, contactos, calendarios y archivos desde cualquier plataforma sin pérdida de datos ni tiempo de inactividad." },
  { icon: Layers, title: "Implementación completa", desc: "Configuramos Google Workspace desde cero: dominio, cuentas de usuario, políticas de seguridad y estructura organizacional." },
  { icon: Headphones, title: "Administración y soporte", desc: "Gestionamos tu consola de administración, resolvemos incidencias y mantenemos tu entorno actualizado y optimizado." },
  { icon: Shield, title: "Configuración de seguridad", desc: "Implementamos autenticación de dos factores, políticas de contraseñas, control de acceso y prevención de pérdida de datos (DLP)." },
  { icon: Zap, title: "Integración con sistemas", desc: "Conectamos Google Workspace con tu CRM, ERP, herramientas de automatización y otros sistemas empresariales." },
];

const benefits = [
  { icon: Users, title: "Trabajo en tiempo real", desc: "Tu equipo colabora simultáneamente en documentos, hojas de cálculo y presentaciones desde cualquier dispositivo." },
  { icon: Shield, title: "Seguridad empresarial", desc: "Cifrado de datos, autenticación de dos factores, gestión de dispositivos y cumplimiento de normativas de seguridad." },
  { icon: Globe, title: "Acceso desde cualquier lugar", desc: "Trabaja desde oficina, casa o cualquier ubicación con acceso a todos tus archivos y herramientas en la nube." },
  { icon: Zap, title: "Escalabilidad inmediata", desc: "Agrega o elimina usuarios en minutos. Tu infraestructura crece al ritmo de tu empresa sin inversión en hardware." },
];

/* ─── Component ─── */
const GoogleWorkspaceMexico = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-0 md:min-h-[90vh] flex items-center pt-6 md:pt-20 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/8 blur-[60px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/6 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()} className="text-center lg:text-left">
              <SectionBadge>Google Workspace</SectionBadge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
                Google Workspace para{" "}
                <span className="gradient-text">Empresas en México</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Implementamos, migramos y administramos Google Workspace para empresas que necesitan operar mejor, colaborar en tiempo real y escalar sin fricción.
              </p>
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: Mail, text: "Correo profesional con tu dominio" },
                  { icon: Shield, text: "Seguridad empresarial avanzada" },
                  { icon: Globe, text: "Acceso desde cualquier dispositivo" },
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
                  <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                    Solicitar implementación <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Hablar con un especialista
                  </a>
                </Button>
              </div>
            </motion.div>
            <WorkspaceMockup />
          </div>
        </div>
      </section>

      {/* ──────── PROBLEMA ──────── */}
      <section className="py-24 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="hidden md:block absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fade()} className="lg:sticky lg:top-32">
              <SectionBadge variant="destructive">Problema</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-5 text-foreground leading-tight">
                ¿Tu empresa sigue usando correos desordenados o <span className="gradient-text">sistemas ineficientes</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                La falta de herramientas profesionales de colaboración frena el crecimiento de tu empresa y pone en riesgo tu información.
              </p>
            </motion.div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div key={i} {...fade(i * 0.08)} className="group flex items-start gap-5 p-5 rounded-xl border border-border/60 bg-background shadow-sm hover:border-primary/25 hover:shadow-md transition-all duration-300">
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

      {/* ──────── SOLUCIÓN — Google Workspace Tools ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <SectionBadge>Solución</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Centraliza tu empresa con <span className="gradient-text">Google Workspace</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Una suite completa de herramientas profesionales que conectan a tu equipo y optimizan cada proceso de tu empresa.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="group p-6 rounded-xl border border-border/60 bg-card hover:border-primary/25 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon size={22} className={s.color} />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SERVICIOS ──────── */}
      <section className="py-24 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <SectionBadge>Servicios</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Lo que hacemos por <span className="gradient-text">tu empresa</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desde la migración inicial hasta el soporte continuo, nos encargamos de todo para que tu equipo solo se enfoque en trabajar.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="group p-6 rounded-xl border border-border/60 bg-background hover:border-primary/25 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── BENEFICIOS ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-primary/[0.03] blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <SectionBadge>Beneficios</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-foreground leading-tight">
              Por qué implementar <span className="gradient-text">Google Workspace</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fade(i * 0.1)} className="flex items-start gap-5 p-6 rounded-xl border border-border/60 bg-card hover:border-primary/25 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── AUTORIDAD ──────── */}
      <section className="py-20 relative overflow-hidden bg-[hsl(var(--surface-sunken))]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="max-w-3xl mx-auto text-center">
            <SectionBadge>Experiencia</SectionBadge>
            <blockquote className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-snug mb-6">
              "Hemos implementado soluciones de Google Workspace para empresas que necesitan operar con{" "}
              <span className="gradient-text">eficiencia y seguridad</span>."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Desde startups hasta empresas con más de 200 colaboradores, configuramos entornos de trabajo que funcionan desde el primer día.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────── CTA FINAL ──────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="max-w-2xl mx-auto text-center">
            <SectionBadge>Siguiente Paso</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-foreground leading-tight">
              Implementa Google Workspace{" "}
              <span className="gradient-text">sin complicaciones</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Te ayudamos a migrar, configurar y administrar Google Workspace para que tu equipo trabaje mejor desde el primer día.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-base px-10 py-6" asChild>
                <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                  Agenda una llamada <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>
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
