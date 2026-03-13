import { motion } from "framer-motion";
import { Compass, Target, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Descubrimiento", desc: "Analizamos tu negocio, objetivos y desafíos." },
  { icon: Target, title: "Estrategia", desc: "Diseñamos una hoja de ruta tecnológica." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos, probamos y desplegamos." },
  { icon: Rocket, title: "Crecimiento", desc: "Optimizamos, escalamos y medimos." },
];

const ProcessSection = () => (
  <section className="relative py-28">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Cómo Trabajamos</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Nuestro <span className="gradient-text">Proceso</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          De la idea al impacto en cuatro pasos.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2" style={{ background: "var(--divider-glow)" }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center relative"
            >
              <div className="relative mx-auto mb-5 w-14 h-14">
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center">
                  <s.icon size={24} className="text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-btn text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-base mb-2 font-display">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;