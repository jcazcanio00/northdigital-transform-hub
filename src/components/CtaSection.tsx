import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[var(--gradient-cta)]" />
    <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display text-white leading-tight">
          ¿Listo para Transformar tu Negocio con{" "}
          <span className="gradient-text">Tecnología</span>?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Agenda una consulta gratuita y descubre cómo podemos impulsar tu empresa al siguiente nivel.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gradient" size="lg" className="text-base px-8 py-6">
            Agendar Consulta <ArrowRight size={16} className="ml-1" />
          </Button>
          <Button variant="gradient-outline" size="lg" className="text-base px-8 py-6 text-white border-white/20 hover:border-white/40">
            <MessageCircle size={16} className="mr-1" /> Contactar Equipo
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
