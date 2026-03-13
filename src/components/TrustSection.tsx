import { motion } from "framer-motion";
import { Brain, Cloud, Briefcase, Zap, Code2 } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    techs: [
      { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
      { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
      { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg" },
    ],
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    ],
  },
  {
    icon: Briefcase,
    title: "Productividad Empresarial",
    techs: [
      { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
      { name: "Microsoft 365", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
    ],
  },
  {
    icon: Zap,
    title: "Automatización",
    techs: [
      { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
      { name: "Make", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/integromat.svg" },
      { name: "API Integrations", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fastapi.svg" },
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo",
    techs: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg" },
    ],
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
        className="text-center mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Stack Tecnológico</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-5">
          La Plataforma Tecnológica que{" "}
          <span className="gradient-text">Utilizamos</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Herramientas líderes de la industria para construir soluciones robustas y escalables.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08 }}
            className="glass-card rounded-2xl p-5 group transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.2)]"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon size={15} className="text-primary" />
              </div>
              <h3 className="text-xs font-bold font-display">{cat.title}</h3>
            </div>
            <div className="space-y-2.5">
              {cat.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-muted/20 border border-border/15 transition-all duration-300 hover:border-primary/20 hover:bg-muted/30 group/tech cursor-default"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-4 h-4 opacity-50 group-hover/tech:opacity-80 transition-opacity duration-300 dark:invert dark:brightness-200"
                    loading="lazy"
                  />
                  <span className="text-[11px] font-medium text-muted-foreground group-hover/tech:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
