import { motion } from "framer-motion";
import { Search, BarChart3, MousePointerClick, Gauge } from "lucide-react";
import marketingImg from "@/assets/marketing-visual.png";

const services = [
  { icon: Search, title: "SEO Strategy", desc: "Technical SEO, content optimization and organic growth." },
  { icon: MousePointerClick, title: "Google Ads", desc: "High-performance paid campaigns with measurable ROI." },
  { icon: BarChart3, title: "Analytics", desc: "Data-driven insights and conversion tracking." },
  { icon: Gauge, title: "Landing Pages", desc: "Conversion-optimized pages designed for performance." },
];

const GrowthSection = () => (
  <section id="growth" className="py-24 surface-sunken">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Performance Marketing That{" "}
            <span className="gradient-text">Drives Growth</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our growth marketing team combines SEO, Google Ads and analytics to deliver 
            measurable results. From strategy to execution, we help you acquire and convert customers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={marketingImg}
            alt="Marketing analytics dashboard"
            className="w-full rounded-2xl glow-accent"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default GrowthSection;
