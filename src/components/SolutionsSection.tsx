import { motion } from "framer-motion";
import { Code2, Cloud, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Sistemas Empresariales",
    description: "Software empresarial a medida, sistemas CRM, dashboards, plataformas internas y herramientas operativas.",
    href: "#systems",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description: "Configuración de Google Workspace, migraciones de datos, hosting seguro, infraestructura VPS y gestión en la nube.",
    href: "#cloud",
  },
  {
    icon: TrendingUp,
    title: "Marketing de Crecimiento",
    description: "Estrategias de SEO, campañas de Google Ads y analítica de rendimiento.",
    href: "#growth",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="relative py-28 noise-overlay">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[160px]" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Lo Que Hacemos</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
          Nuestras <span className="gradient-text">Soluciones</span> Principales
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Soluciones tecnológicas integrales diseñadas para acelerar el crecimiento de tu negocio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card glass-card-hover rounded-2xl p-8 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
              <s.icon size={26} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
              Más Información <ArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
