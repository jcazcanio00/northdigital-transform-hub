import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const trustItems = [
  "Respuesta en menos de 24h",
  "+150 proyectos implementados",
  "Infraestructura cloud segura",
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Contacto</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-display">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución tecnológica para tu empresa.
            </p>

            {/* Trust indicators */}
            <div className="space-y-3 mb-8">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 glass-card rounded-xl px-6 py-5 border-green-500/20 hover:border-green-500/40 hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.3)] transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center group-hover:bg-green-500/25 transition-all duration-300">
                <MessageCircle size={22} className="text-green-500" />
              </div>
              <div>
                <div className="text-sm font-bold">Chat por WhatsApp</div>
                <div className="text-xs text-muted-foreground">Respuesta en minutos</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block">Nombre</label>
                <Input
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block">Empresa</label>
              <Input
                placeholder="Nombre de tu empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
              />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block">Mensaje</label>
              <Textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="transition-all duration-300 focus:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]"
              />
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
