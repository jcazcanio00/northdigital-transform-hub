import { motion } from "framer-motion";
import { Brain, Cloud, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = [
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", color: "#10A37F" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg", color: "#D4A574" },
  { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg", color: "#8E75B2" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" },
  { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg", color: "#4285F4" },
  { name: "Microsoft 365", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg", color: "#F25022" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg", color: "#3FCF8E" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg", color: "#FF4F00" },
  { name: "Make", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/integromat.svg", color: "#6D00CC" },
];

const positions = [
  { x: "5%", y: "5%" },   { x: "30%", y: "0%" },   { x: "55%", y: "8%" },
  { x: "80%", y: "2%" },  { x: "0%", y: "35%" },    { x: "22%", y: "30%" },
  { x: "48%", y: "38%" }, { x: "72%", y: "32%" },   { x: "10%", y: "62%" },
  { x: "35%", y: "58%" }, { x: "60%", y: "65%" },   { x: "85%", y: "55%" },
  { x: "18%", y: "85%" }, { x: "55%", y: "88%" },
];

const highlights = [
  { icon: Brain, text: "Inteligencia Artificial avanzada" },
  { icon: Cloud, text: "Infraestructura cloud empresarial" },
  { icon: Zap, text: "Automatización y APIs modernas" },
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
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Construimos soluciones sobre tecnologías líderes de la industria para garantizar rendimiento, seguridad y escalabilidad.
          </p>
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                  <h.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm font-medium">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column - Floating cloud */}
        <TooltipProvider delayDuration={100}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[320px] flex items-center justify-center"
          >
            <div className="relative w-full h-[320px]">
              {technologies.map((tech, i) => {
                const pos = positions[i];
                const floatDuration = 4 + (i % 3) * 1.5;
                const floatDelay = i * 0.3;

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute group cursor-default"
                    style={{ left: pos.x, top: pos.y }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="w-14 h-14 rounded-xl bg-card border border-border/40 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_25px_-4px_hsl(var(--primary)/0.4)] group-hover:scale-110"
                          animate={{ y: [0, -6 - (i % 3) * 3, 0] }}
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
                            className="w-7 h-7 transition-opacity duration-300"
                            style={{
                              filter: `brightness(0) saturate(100%)`,
                              opacity: 0.5,
                            }}
                            loading="lazy"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.filter = "none";
                              e.currentTarget.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.filter = "brightness(0) saturate(100%)";
                              e.currentTarget.style.opacity = "0.5";
                            }}
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs font-medium">
                        {tech.name}
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </TooltipProvider>
      </div>
    </div>
  </section>
);

export default TrustSection;
