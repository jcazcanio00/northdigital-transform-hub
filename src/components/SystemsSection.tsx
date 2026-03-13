import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.png";

const bullets = [
  "Custom CRM platforms tailored to your workflow",
  "Internal operational dashboards and reporting tools",
  "Business process automation and integrations",
  "Scalable web applications and SaaS products",
  "API development and third-party integrations",
];

const SystemsSection = () => (
  <section id="systems" className="py-24 surface-sunken">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Custom Business Systems Built for{" "}
            <span className="gradient-text">Efficiency</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We design and develop internal systems, CRM platforms, operational dashboards and automation tools 
            that streamline your business operations and help you scale with confidence.
          </p>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glow-accent"
        >
          <img
            src={dashboardImg}
            alt="Custom business dashboard interface"
            className="w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemsSection;
