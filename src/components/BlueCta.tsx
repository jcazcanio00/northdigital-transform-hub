import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlueCta = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,40%,6%)] via-[hsl(220,50%,10%)] to-[hsl(228,45%,5%)]" />
    <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight text-white">
          Impulsa tu Empresa con{" "}
          <span className="gradient-text">Tecnología Inteligente</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Diseñamos sistemas, automatizaciones e infraestructuras cloud que permiten a las empresas escalar con eficiencia, seguridad y datos en tiempo real.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gradient" size="lg" className="text-base px-8 py-6">
            Explorar Soluciones <ArrowRight size={16} className="ml-1" />
          </Button>
          <button className="inline-flex items-center justify-center gap-2 text-base px-8 py-3 rounded-lg border border-white/30 text-white bg-transparent font-medium transition-all duration-300 hover:bg-white hover:text-[hsl(220,50%,10%)] hover:border-white">
            <Calendar size={16} /> Agendar Consulta
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BlueCta;
