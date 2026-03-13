import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead enviado:", form);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="section-divider" />
      <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Contacto</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ¿Listo para comenzar? Nuestro equipo te responderá en 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
            <Input
              placeholder="Nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary/30 border-border/30 focus:border-primary/40 transition-all"
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-secondary/30 border-border/30 focus:border-primary/40 transition-all"
            />
            <Input
              placeholder="Empresa"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              maxLength={100}
              className="bg-secondary/30 border-border/30 focus:border-primary/40 transition-all"
            />
            <Textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={4}
              className="bg-secondary/30 border-border/30 focus:border-primary/40 transition-all"
            />
            <Button type="submit" variant="gradient" className="w-full" size="lg">
              <Send size={16} className="mr-2" /> Enviar Mensaje
            </Button>
          </form>

          <div className="text-center mt-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors glass-card rounded-full px-5 py-2"
            >
              <MessageCircle size={14} className="text-primary" />
              Chatea por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;