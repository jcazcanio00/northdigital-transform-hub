import { motion } from "framer-motion";
import { Layers, Bot, Cloud } from "lucide-react";

const blocks = [
  {
    icon: Layers,
    title: "Arquitectura Tecnológica",
    desc: "Diseñamos sistemas digitales escalables para empresas modernas. Desde la planificación hasta la implementación.",
  },
  {
    icon: Bot,
    title: "Automatización Inteligente",
    desc: "Reducimos trabajo manual mediante workflows automatizados. Operaciones inteligentes y eficientes.",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    desc: "Infraestructura segura y flexible para aplicaciones empresariales. Alta disponibilidad y rendimiento garantizado.",
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
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Sobre Nosotros
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display leading-tight">
          Socio en{" "}
          <span className="gradient-text">Transformación Digital</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Ayudamos a las empresas a modernizar sus operaciones a través de sistemas inteligentes,
          infraestructura cloud y automatización de procesos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 pointer-events-none" />

        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative group cursor-default"
          >
            <div className="glass-card rounded-2xl p-10 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] hover:border-primary/25 text-center">
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
