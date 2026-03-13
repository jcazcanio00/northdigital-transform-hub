import { motion } from "framer-motion";
import { Code2, Cloud, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Sistemas Empresariales",
    description: "Software empresarial a medida, sistemas CRM, dashboards, plataformas internas y herramientas operativas.",
    href: "#systems",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description: "Configuración de Google Workspace, migraciones de datos, hosting seguro, infraestructura VPS y gestión en la nube.",
    href: "#cloud",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Marketing de Crecimiento",
    description: "Estrategias de SEO, campañas de Google Ads y analítica de rendimiento.",
    href: "#growth",
    gradient: "from-primary/15 to-accent/15",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="relative py-28 noise-overlay">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[180px]" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">Lo Que Hacemos</p>
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
            className="glass-card card-shine glass-card-hover rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
          >
            {/* Gradient accent bg */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
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
