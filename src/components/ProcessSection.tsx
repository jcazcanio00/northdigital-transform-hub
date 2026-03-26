import { motion } from "framer-motion";
import { Compass, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Descubrimiento", desc: "Analizamos tus procesos, necesidades y objetivos para diseñar la mejor solución." },
  { icon: Lightbulb, title: "Estrategia", desc: "Creamos un roadmap con arquitectura técnica, plazos y entregables claros." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos e implementamos con metodología ágil, iteraciones y feedback continuo." },
  { icon: Rocket, title: "Crecimiento", desc: "Lanzamos, optimizamos y escalamos con soporte continuo y mejora constante." },
];

const ProcessSection = () => (
  <section id="process" className="py-12 md:py-24 relative min-h-0 md:min-h-[500px]">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Metodología
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Nuestro <span className="gradient-text">Proceso</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-start gap-6 md:gap-12 group ${
                i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div className="flex-1 hidden md:block" />
              <div className="relative z-10 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_50px_-8px_hsl(var(--primary)/0.4)] group-hover:scale-105">
                  <step.icon size={24} className="text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-btn flex items-center justify-center text-[10px] font-bold text-white">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold font-display mb-2 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
