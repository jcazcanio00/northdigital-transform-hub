import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider" />
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
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-card glass-card-hover rounded-xl px-5 py-4"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-green-500" />
              </div>
              <div>
                <div className="text-sm font-semibold">Chat por WhatsApp</div>
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
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block">Empresa</label>
              <Input
                placeholder="Nombre de tu empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block">Mensaje</label>
              <Textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button variant="gradient" size="lg" type="submit" className="w-full">
              Enviar Mensaje <Send size={16} className="ml-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
