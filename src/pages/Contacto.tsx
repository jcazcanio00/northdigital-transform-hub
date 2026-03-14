import { motion } from "framer-motion";
import { Send, Mail, Phone, User, Building2, FileText, MessageCircle, Loader2 } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactForm } from "@/hooks/useContactForm";

const projectTypes = [
  "Desarrollo Web",
  "Sistema / CRM",
  "Automatización de Procesos",
  "Infraestructura Cloud",
  "Marketing Digital",
  "Integraciones / APIs",
  "Otro",
];

const budgets = [
  "$100,000 – $250,000 MXN",
  "$250,000 – $500,000 MXN",
  "$500,000 – $1,000,000 MXN",
  "$1,000,000+ MXN",
];

const timelines = [
  "Lo antes posible",
  "1–2 meses",
  "3–6 meses",
  "Explorando opciones",
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/northmkt?mibextid=LQQJ4d", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/northmkt?igsh=MWlsNHVlZWp2ZXVxNA", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/north-marketing/", label: "LinkedIn" },
];

const Contacto = () => {
  const { form, loading, updateField, handleSubmit } = useContactForm();

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.span
            {...fade()}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Contacto
          </motion.span>
          <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl font-extrabold font-display mb-5">
            Hablemos de tu próximo <span className="gradient-text">proyecto</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-muted-foreground text-lg leading-relaxed">
            Cuéntanos qué necesitas construir y un especialista de nuestro equipo te ayudará a definir la mejor solución.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              {...fade(0.1)}
              className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-4 shadow-xl border-border/40"
            >
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Nombre</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Tu nombre" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input type="email" placeholder="tu@email.com" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" />
                  </div>
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Empresa</label>
                  <div className="relative">
                    <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Nombre de tu empresa" value={form.company} onChange={(e) => updateField("company", e.target.value)} className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Teléfono / WhatsApp</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input type="tel" placeholder="+52 998 351 3337" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" />
                  </div>
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Tipo de Proyecto</label>
                  <Select onValueChange={(v) => updateField("projectType", v)}>
                    <SelectTrigger className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block">Presupuesto Estimado</label>
                  <Select onValueChange={(v) => updateField("budget", v)}>
                    <SelectTrigger className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-xs font-medium mb-1.5 block">Tiempo Estimado</label>
                <Select onValueChange={(v) => updateField("timeline", v)}>
                  <SelectTrigger className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]">
                    <SelectValue placeholder="Seleccionar..." />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium mb-1.5 block">Mensaje</label>
                <div className="relative">
                  <FileText size={14} className="absolute left-3 top-3 text-muted-foreground" />
                  <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" />
                </div>
              </div>

              <Button variant="gradient" size="lg" type="submit" className="w-full group">
                Enviar solicitud <Send size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </motion.form>

            {/* Info sidebar */}
            <motion.div {...fade(0.2)} className="lg:col-span-2 space-y-8">
              <div className="glass-card rounded-2xl p-6 border-border/40 space-y-5">
                <h3 className="text-lg font-bold font-display">Información de contacto</h3>
                <div className="space-y-4">
                  <a href="mailto:info@northmkt.com.mx" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    info@northmkt.com.mx
                  </a>
                  <a href="tel:+529983513337" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    +52 998 351 3337
                  </a>
                  <a
                    href="https://wa.me/529983513337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-green-500 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-green-500" />
                    </div>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-border/40 space-y-4">
                <h3 className="text-lg font-bold font-display">Síguenos</h3>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "hsl(220 60% 8%)" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-2xl">
          <motion.h2 {...fade()} className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-6">
            Construyamos algo <span className="gradient-text">grande juntos</span>
          </motion.h2>
          <motion.div {...fade(0.1)}>
            <Button variant="gradient" size="lg" asChild>
              <a href="https://wa.me/529983513337" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default Contacto;
