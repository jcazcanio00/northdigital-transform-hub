import { motion } from "framer-motion";
import { Shield, Server, Database, RefreshCw, Globe, Lock, HardDrive, Activity } from "lucide-react";

const features = [
  { icon: Globe, title: "Google Workspace", desc: "Full implementation, migration and team onboarding" },
  { icon: Server, title: "Secure Hosting & VPS", desc: "High-performance infrastructure management" },
  { icon: Database, title: "Data Migrations", desc: "Safe, zero-downtime migration services" },
  { icon: RefreshCw, title: "Backups & Monitoring", desc: "24/7 monitoring and automated backups" },
];

/* Inline cloud mockup */
const CloudMockup = () => (
  <div className="glass-card rounded-2xl p-5 space-y-4">
    <div className="flex items-center gap-2 mb-2">
      <Activity size={14} className="text-primary" />
      <span className="text-xs font-bold uppercase tracking-wider">Infrastructure Status</span>
      <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
    </div>

    {/* Servers */}
    <div className="space-y-2">
      {[
        { name: "Primary Server", status: "Running", cpu: 34, mem: 62 },
        { name: "Database Cluster", status: "Running", cpu: 28, mem: 45 },
        { name: "CDN Edge", status: "Running", cpu: 12, mem: 31 },
      ].map((srv) => (
        <div key={srv.name} className="glass-card rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <HardDrive size={12} className="text-primary" />
              <span className="text-xs font-semibold">{srv.name}</span>
            </div>
            <span className="text-[10px] text-primary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {srv.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] text-muted-foreground mb-1">CPU {srv.cpu}%</div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${srv.cpu}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-primary/60"
                />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground mb-1">Memory {srv.mem}%</div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${srv.mem}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-full rounded-full bg-accent/60"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Security badges */}
    <div className="flex gap-2 flex-wrap">
      {[
        { icon: Shield, label: "SSL Active" },
        { icon: Lock, label: "Firewall On" },
        { icon: Database, label: "Backup OK" },
      ].map((badge) => (
        <div key={badge.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/10">
          <badge.icon size={10} className="text-primary" />
          <span className="text-[10px] font-medium text-primary">{badge.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const CloudSection = () => (
  <section id="cloud" className="relative py-28 noise-overlay">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[140px]" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <CloudMockup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Cloud Infrastructure</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Secure and Scalable{" "}
            <span className="gradient-text">Cloud Infrastructure</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            From Google Workspace implementation to VPS management, we build and maintain the cloud
            infrastructure your business needs to operate securely and scale effortlessly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{f.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
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
