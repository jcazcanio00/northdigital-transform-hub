import { motion } from "framer-motion";
import { Compass, Target, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discovery", desc: "We analyze your business, goals and challenges." },
  { icon: Target, title: "Strategy", desc: "We design a tailored technology roadmap." },
  { icon: Code2, title: "Development", desc: "We build, test and deploy your solution." },
  { icon: Rocket, title: "Growth", desc: "We optimize, scale and measure results." },
];

const ProcessSection = () => (
  <section className="relative py-28 noise-overlay">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[140px]" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">How We Work</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
          Our <span className="gradient-text">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          A proven methodology that takes you from idea to impact.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card glass-card-hover rounded-2xl p-6 text-center"
          >
            <div className="relative mx-auto mb-5 w-16 h-16">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <s.icon size={28} className="text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-btn text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 tracking-tight">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
