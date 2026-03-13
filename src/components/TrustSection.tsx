import { motion } from "framer-motion";

const technologies = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const TrustSection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Stack Tecnológico</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
          Tecnologías que Impulsan Nuestros{" "}
          <span className="gradient-text">Sistemas</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group flex flex-col items-center gap-2 cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted/40 border border-border/30 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)] group-hover:border-primary/30 group-hover:bg-muted/60">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
