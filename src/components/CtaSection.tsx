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
        className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
        style={{ background: "var(--gradient-cta)" }}
      >
        {/* Glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        </div>
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-primary-foreground font-display leading-tight">
            ¿Listo para Transformar<br className="hidden sm:inline" /> tu Negocio con <span className="gradient-text">Tecnología</span>?
          </h2>
          <p className="text-primary-foreground/50 max-w-xl mx-auto mb-10">
            Agenda una consulta gratuita y descubre cómo nuestras soluciones pueden impulsar tu empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg" className="shadow-[0_0_40px_-8px_hsl(210_100%_60%/0.5)]">
              Agendar Consulta <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="gradient-outline" className="border-primary-foreground/10 text-primary-foreground hover:border-primary-foreground/25">
              <MessageCircle size={16} className="mr-1" /> Contactar al Equipo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;