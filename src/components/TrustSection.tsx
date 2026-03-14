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

const nodes = [
  { x: "18%", y: "18%", icon: Cpu, size: 48 },
  { x: "68%", y: "12%", icon: Cloud, size: 46 },
  { x: "46%", y: "46%", icon: Shield, size: 58 },
  { x: "12%", y: "72%", icon: Zap, size: 42 },
  { x: "78%", y: "68%", icon: Network, size: 46 },
  { x: "46%", y: "82%", icon: Brain, size: 42 },
];

const connections = [
  { x1: 24, y1: 24, x2: 50, y2: 50 },
  { x1: 72, y1: 18, x2: 50, y2: 50 },
  { x1: 50, y1: 50, x2: 18, y2: 76 },
  { x1: 50, y1: 50, x2: 82, y2: 72 },
  { x1: 50, y1: 50, x2: 50, y2: 86 },
  { x1: 24, y1: 24, x2: 72, y2: 18 },
  { x1: 18, y1: 76, x2: 50, y2: 86 },
  { x1: 82, y1: 72, x2: 50, y2: 86 },
];

const TrustSection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Stack Tecnológico</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-5">
          La Plataforma Tecnológica que{" "}
          <span className="gradient-text">Utilizamos</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-6 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:pl-4"
        >
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
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

        {/* Right column - Enhanced tech node visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] rounded-3xl" />
          <div className="absolute inset-0 bg-dot-grid opacity-20 rounded-3xl pointer-events-none" />

          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-primary/8 blur-[40px] pointer-events-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Connection lines with data flow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {connections.map((c, i) => (
              <g key={i}>
                <line
                  x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.12"
                  strokeWidth="0.4"
                />
                <circle r="0.8" fill="hsl(var(--primary))" opacity="0.4">
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M${c.x1},${c.y1} L${c.x2},${c.y2}`}
                  />
                  <animate attributeName="opacity" values="0;0.6;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>

          {/* Glowing nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: node.x, top: node.y }}
              animate={{ y: [0, -6 - (i % 3) * 3, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <div
                className={`rounded-2xl bg-card/80 border border-border/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_-6px_hsl(var(--primary)/0.5)] hover:scale-115 ${
                  i === 2 ? "shadow-[0_0_25px_-8px_hsl(var(--primary)/0.3)]" : ""
                }`}
                style={{ width: node.size, height: node.size }}
              >
                <node.icon size={node.size * 0.4} className={i === 2 ? "text-primary" : "text-primary/60"} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
