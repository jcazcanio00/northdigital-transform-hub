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
    <section id="contact" className="relative py-28 noise-overlay">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">Contacto</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            ¿Listo para comenzar tu proyecto? Completa el formulario y nuestro equipo te responderá en 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card card-shine rounded-2xl p-8 space-y-5">
            <Input
              placeholder="Nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] transition-all"
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] transition-all"
            />
            <Input
              placeholder="Empresa"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              maxLength={100}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] transition-all"
            />
            <Textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={4}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] transition-all"
            />
            <Button type="submit" variant="gradient" className="w-full shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]" size="lg">
              <Send size={16} className="mr-2" /> Enviar Mensaje
            </Button>
          </form>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 glass-card rounded-full px-5 py-2.5 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <MessageCircle size={16} className="text-primary" />
              Chatea con nosotros por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
