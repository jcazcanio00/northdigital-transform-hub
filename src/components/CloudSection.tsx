import { motion } from "framer-motion";
import { Shield, Server, Database, RefreshCw } from "lucide-react";
import cloudImg from "@/assets/cloud-visual.png";

const features = [
  { icon: Shield, title: "Google Workspace", desc: "Full implementation and team onboarding" },
  { icon: Server, title: "Secure Hosting & VPS", desc: "High-performance infrastructure management" },
  { icon: Database, title: "Data Migrations", desc: "Safe, zero-downtime migration services" },
  { icon: RefreshCw, title: "Backups & Monitoring", desc: "24/7 monitoring and automated backups" },
];

const CloudSection = () => (
  <section id="cloud" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <img
            src={cloudImg}
            alt="Cloud infrastructure visualization"
            className="w-full rounded-2xl glow-primary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Secure and Scalable{" "}
            <span className="gradient-text">Cloud Infrastructure</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From Google Workspace implementation to VPS management, we build and maintain the cloud 
            infrastructure your business needs to operate securely and scale effortlessly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CloudSection;
