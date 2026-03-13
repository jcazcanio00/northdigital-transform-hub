import { motion } from "framer-motion";
import { Code2, Cloud, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Sistemas Empresariales",
    description: "Software empresarial a medida, CRM, dashboards y herramientas operativas internas.",
    href: "#systems",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description: "Google Workspace, migraciones, hosting seguro, VPS y gestión en la nube.",
    href: "#cloud",
  },
  {
    icon: TrendingUp,
    title: "Marketing de Crecimiento",
    description: "SEO, Google Ads, analítica de rendimiento y landing pages optimizadas.",
    href: "#growth",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="relative py-28">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Lo Que Hacemos</p>
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
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8 group cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)] transition-all duration-500">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                Más Información <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;