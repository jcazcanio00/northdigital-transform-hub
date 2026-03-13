import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-28 relative">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden noise-overlay"
        style={{ background: "var(--gradient-cta)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-[150px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-primary-foreground tracking-tight leading-tight">
            ¿Listo para Transformar tu Negocio<br className="hidden sm:inline" /> con <span className="gradient-text">Tecnología</span>?
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-10 text-lg">
            Agenda una consulta gratuita y descubre cómo nuestras soluciones digitales pueden impulsar tu empresa al siguiente nivel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg" className="shadow-[0_0_40px_-8px_hsl(200_95%_55%/0.5)]">
              Agendar Consulta <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="gradient-outline" className="border-primary-foreground/15 text-primary-foreground hover:border-primary-foreground/30">
              <MessageCircle size={16} className="mr-1" /> Contactar al Equipo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="section-divider mt-0" />
  </section>
);

export default CtaSection;
