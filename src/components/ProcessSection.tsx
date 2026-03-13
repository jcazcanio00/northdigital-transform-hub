import { motion } from "framer-motion";
import { Compass, Target, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, objetivos y desafíos para entender el panorama completo.",
    detail: "Auditoría técnica + diagnóstico",
  },
  {
    icon: Target,
    title: "Estrategia",
    desc: "Diseñamos una hoja de ruta tecnológica alineada con tus metas de crecimiento.",
    detail: "Roadmap + arquitectura técnica",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    desc: "Construimos, probamos y desplegamos con metodología ágil e iteración continua.",
    detail: "Sprints + QA + deploy",
  },
  {
    icon: Rocket,
    title: "Crecimiento",
    desc: "Optimizamos, escalamos y medimos resultados para asegurar el impacto real.",
    detail: "Analytics + optimización continua",
  },
];

const ProcessSection = () => (
  <section className="relative py-28 overflow-hidden">
    {/* Background depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="section-divider" />

    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Cómo Trabajamos
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Nuestro <span className="gradient-text">Proceso</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          De la idea al impacto en cuatro pasos.
        </p>
      </motion.div>

      {/* Timeline layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
          <div className="h-full w-full" style={{ background: "var(--divider-glow)" }} />
        </div>

        <div className="space-y-8 lg:space-y-12">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`relative flex items-start gap-6 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } pl-16 lg:pl-0`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isLeft ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 inline-block text-left w-full group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <s.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base font-display">{s.title}</h3>
                        <p className="text-[10px] text-primary font-medium">{s.detail}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-sm font-extrabold font-display gradient-text">{i + 1}</span>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* End node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute left-6 lg:left-1/2 -translate-x-1/2 -bottom-4 w-8 h-8 rounded-full gradient-btn flex items-center justify-center shadow-lg"
        >
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
