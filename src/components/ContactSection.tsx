import { motion } from "framer-motion";
import { Send, MessageCircle, User, Mail, Building2, Phone, FileText, Layers, Bot, Cloud, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const highlights = [
  {
    icon: Layers,
    title: "Arquitectura de Sistemas",
    desc: "Diseño de plataformas digitales seguras y escalables.",
  },
  {
    icon: Bot,
    title: "Automatización Empresarial",
    desc: "Eliminamos procesos manuales mediante tecnología inteligente.",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    desc: "Implementamos entornos estables, monitoreados y de alto rendimiento.",
  },
];

const trustMetrics = [
  "150+ proyectos implementados",
  "Empresas en múltiples industrias",
  "Infraestructura cloud segura",
];

const ContactSection = () => {
  const { form, loading, updateField, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.04] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 font-display">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo diseña soluciones tecnológicas para empresas que buscan automatizar procesos, escalar operaciones y tomar decisiones basadas en datos.
            </p>

            {/* Highlight blocks */}
            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <h.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-0.5 group-hover:text-primary transition-colors">{h.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust metrics */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
              {trustMetrics.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={13} className="text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/529983513337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 glass-card rounded-xl px-6 py-5 border-green-500/20 hover:border-green-500/40 hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.3)] transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center group-hover:bg-green-500/25 group-hover:shadow-[0_0_20px_-4px_rgba(34,197,94,0.4)] transition-all duration-300">
                <MessageCircle size={22} className="text-green-500" />
              </div>
              <div>
                <div className="text-sm font-bold">Chat por WhatsApp</div>
                <div className="text-xs text-muted-foreground">Respuesta inmediata · Soporte directo</div>
              </div>
            </a>
          </motion.div>

          {/* Right column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 space-y-4 shadow-xl border-border/40"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block">Nombre</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Company & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block">Empresa</label>
                <div className="relative">
                  <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Nombre de tu empresa"
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block">Teléfono / WhatsApp</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                  />
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
                <Select onValueChange={(v) => setForm({ ...form, budget: v })}>
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
              <Select onValueChange={(v) => setForm({ ...form, timeline: v })}>
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
                <Textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="pl-9 transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                />
              </div>
            </div>

            <Button variant="gradient" size="lg" type="submit" className="w-full group">
              Enviar Mensaje <Send size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
