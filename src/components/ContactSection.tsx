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
    console.log("Lead submitted:", form);
  };

  return (
    <section id="contact" className="relative py-28 surface-sunken noise-overlay">
      <div className="section-divider" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to start your project? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
            />
            <Input
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              maxLength={100}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={4}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
            />
            <Button type="submit" variant="gradient" className="w-full" size="lg">
              <Send size={16} className="mr-2" /> Send Message
            </Button>
          </form>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 glass-card rounded-full px-5 py-2.5"
            >
              <MessageCircle size={16} className="text-primary" />
              Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
