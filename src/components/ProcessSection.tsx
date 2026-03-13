import { motion } from "framer-motion";
import { Compass, Target, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discovery", desc: "We analyze your business, goals and challenges." },
  { icon: Target, title: "Strategy", desc: "We design a tailored technology roadmap." },
  { icon: Code2, title: "Development", desc: "We build, test and deploy your solution." },
  { icon: Rocket, title: "Growth", desc: "We optimize, scale and measure results." },
];

const ProcessSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our <span className="gradient-text">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A proven methodology that takes you from idea to impact.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative mx-auto mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto glow-primary">
                <s.icon size={28} className="text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
