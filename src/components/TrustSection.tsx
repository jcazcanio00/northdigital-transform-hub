import { motion } from "framer-motion";

const technologies = [
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
  { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Microsoft 365", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "Make", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/integromat.svg" },
];

// Predefined positions for an organic floating cloud layout
const positions = [
  { x: 0, y: 0 }, { x: 55, y: -10 }, { x: 110, y: 15 },
  { x: 165, y: -5 }, { x: 220, y: 10 }, { x: 30, y: 70 },
  { x: 85, y: 55 }, { x: 140, y: 75 }, { x: 195, y: 50 },
  { x: 250, y: 65 }, { x: 10, y: 130 }, { x: 70, y: 120 },
  { x: 130, y: 140 }, { x: 200, y: 125 },
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
        {/* Left column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Utilizamos tecnologías modernas e innovadoras de la industria para construir
            sistemas digitales escalables, seguros y de alto rendimiento.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Desde inteligencia artificial y automatización hasta infraestructura cloud empresarial,
            seleccionamos las mejores herramientas para cada proyecto.
          </p>
        </motion.div>

        {/* Right column - Floating cloud of logos */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[280px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[380px] h-[220px] mx-auto">
            {technologies.map((tech, i) => {
              const pos = positions[i];
              const floatDelay = i * 0.4;
              const floatDuration = 4 + (i % 3) * 1.5;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute group cursor-default"
                  style={{ left: pos.x, top: pos.y }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  animate={{
                    y: [0, -8, 0, 5, 0],
                  }}
                  // @ts-ignore
                  transition2={{
                    y: {
                      duration: floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelay,
                    },
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-card border border-border/40 flex items-center justify-center
                      transition-all duration-300
                      group-hover:border-primary/30 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.3)]
                      group-hover:scale-110 group-hover:-translate-y-1"
                    animate={{
                      y: [0, -6 - (i % 3) * 3, 0],
                    }}
                    transition={{
                      duration: floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelay,
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:brightness-200"
                      loading="lazy"
                    />
                  </motion.div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
