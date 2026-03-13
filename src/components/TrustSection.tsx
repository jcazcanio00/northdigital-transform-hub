import { motion } from "framer-motion";
import { Brain, Cloud, Zap, Cpu, Shield, Network } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Inteligencia Artificial avanzada",
    desc: "Modelos y herramientas para asistentes, análisis y automatización.",
  },
  {
    icon: Cloud,
    title: "Infraestructura cloud empresarial",
    desc: "Arquitectura segura y escalable para sistemas críticos.",
  },
  {
    icon: Zap,
    title: "Automatización y APIs modernas",
    desc: "Integraciones, procesos inteligentes y flujos conectados.",
  },
];

const TrustSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Stack Tecnológico</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-5">
          La Plataforma Tecnológica que{" "}
          <span className="gradient-text">Utilizamos</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Construimos soluciones tecnológicas sobre plataformas líderes para garantizar seguridad, escalabilidad y rendimiento empresarial.
          </p>
          <div className="space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                  <f.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column - Abstract tech visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[360px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] rounded-3xl" />
          <div className="absolute inset-0 bg-dot-grid opacity-20 rounded-3xl pointer-events-none" />

          {/* Glowing nodes */}
          {[
            { x: "20%", y: "20%", icon: Cpu, size: 48 },
            { x: "65%", y: "15%", icon: Cloud, size: 44 },
            { x: "45%", y: "50%", icon: Shield, size: 52 },
            { x: "15%", y: "70%", icon: Zap, size: 40 },
            { x: "75%", y: "65%", icon: Network, size: 44 },
            { x: "45%", y: "85%", icon: Brain, size: 40 },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: node.x, top: node.y }}
              animate={{ y: [0, -8 - (i % 3) * 4, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <div
                className="rounded-2xl bg-card/80 border border-border/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-6px_hsl(var(--primary)/0.4)] hover:scale-110"
                style={{ width: node.size, height: node.size }}
              >
                <node.icon size={node.size * 0.4} className="text-primary/60" />
              </div>
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="25" y1="25" x2="50" y2="55" stroke="hsl(var(--primary))" strokeOpacity="0.08" strokeWidth="0.3" />
            <line x1="70" y1="20" x2="50" y2="55" stroke="hsl(var(--primary))" strokeOpacity="0.08" strokeWidth="0.3" />
            <line x1="50" y1="55" x2="20" y2="75" stroke="hsl(var(--primary))" strokeOpacity="0.08" strokeWidth="0.3" />
            <line x1="50" y1="55" x2="80" y2="70" stroke="hsl(var(--primary))" strokeOpacity="0.08" strokeWidth="0.3" />
            <line x1="50" y1="55" x2="50" y2="90" stroke="hsl(var(--primary))" strokeOpacity="0.08" strokeWidth="0.3" />
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
