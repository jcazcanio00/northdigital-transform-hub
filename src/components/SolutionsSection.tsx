import { motion } from "framer-motion";
import { Code2, Cloud, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Software Empresarial",
    description: "Desarrollo de CRM, dashboards y automatización de procesos internos a medida.",
    href: "#systems",
    tag: "Desarrollo",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description: "Google Workspace, hosting empresarial, VPS y gestión completa en la nube.",
    href: "#cloud",
    tag: "Cloud",
  },
  {
    icon: TrendingUp,
    title: "Marketing de Crecimiento",
    description: "SEO, Google Ads, analítica avanzada y landing pages optimizadas.",
    href: "#growth",
    tag: "Marketing",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="py-24 relative">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Lo Que Hacemos
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Nuestras <span className="gradient-text">Soluciones</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tecnología integral para acelerar tu negocio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {solutions.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-7 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)] hover:border-primary/25 relative overflow-hidden"
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">
                  <s.icon size={22} className="text-primary" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-medium text-primary/60 px-2.5 py-1 rounded-full border border-primary/15 bg-primary/5">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 font-display transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                Ver Solución <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
    <div className="section-divider mt-8" />
  </section>
);

export default SolutionsSection;
