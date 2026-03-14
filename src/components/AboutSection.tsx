import { motion } from "framer-motion";
import { Layers, Bot, Cloud, ArrowRight } from "lucide-react";

const blocks = [
  {
    icon: Layers,
    title: "Arquitectura Tecnológica",
    desc: "Diseñamos sistemas digitales escalables para empresas modernas. Desde la planificación hasta la implementación.",
    num: "01",
  },
  {
    icon: Bot,
    title: "Automatización Inteligente",
    desc: "Reducimos trabajo manual mediante workflows y procesos conectados. Operaciones inteligentes y eficientes.",
    num: "02",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    desc: "Implementamos entornos seguros, estables y preparados para crecer. Alta disponibilidad garantizada.",
    num: "03",
  },
];

const AboutSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.015] pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Cómo Ayudamos
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display leading-tight">
          Cómo Ayudamos a las Empresas a{" "}
          <span className="gradient-text">Escalar con Tecnología</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Transformamos operaciones empresariales mediante sistemas inteligentes, automatización de procesos e infraestructura cloud.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Visual flow connector */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 pointer-events-none -translate-y-1/2">
          <div className="mx-auto max-w-4xl flex items-center px-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/20" />
            <ArrowRight size={14} className="text-primary/20 mx-1 shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary/20 to-primary/20" />
            <ArrowRight size={14} className="text-primary/20 mx-1 shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary/20 to-transparent" />
          </div>
        </div>

        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative group cursor-default"
          >
            <div className="glass-card rounded-2xl p-10 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25 text-center h-full">
              {/* Step number */}
              <span className="absolute top-4 right-5 text-[10px] font-bold text-primary/30 font-display">{block.num}</span>

              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.35)] transition-all duration-500">
                <block.icon size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">
                {block.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {block.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
