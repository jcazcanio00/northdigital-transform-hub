import { motion } from "framer-motion";
import { Code2, Cloud, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Business Systems",
    description: "Custom business software, CRM systems, dashboards, internal platforms and operational tools.",
    href: "#systems",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Google Workspace setup, data migrations, secure hosting, VPS infrastructure and cloud management.",
    href: "#cloud",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "SEO strategies, Google Ads campaigns and performance analytics.",
    href: "#growth",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Core <span className="gradient-text">Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          End-to-end technology solutions designed to accelerate your business growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 group hover:glow-primary transition-shadow duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Learn More <ArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
