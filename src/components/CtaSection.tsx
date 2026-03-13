import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
    <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
    {/* Glow effects */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />
    <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
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
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 border-white/20 text-white/80 hover:bg-white/5 hover:border-white/30 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] transition-all duration-500"
          >
            <MessageCircle size={16} className="mr-1" /> Contactar Equipo
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
