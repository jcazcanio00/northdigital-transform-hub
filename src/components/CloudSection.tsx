import { motion } from "framer-motion";
import { Shield, Server, Database, Globe, ArrowRight, Activity, Wifi, HardDrive, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusRows = [
  { icon: Globe, label: "Google Workspace", status: "Configurado" },
  { icon: Server, label: "VPS Principal", status: "Monitoreado" },
  { icon: HardDrive, label: "Backups", status: "Activos" },
  { icon: RefreshCw, label: "Migraciones", status: "Seguras" },
];

const providerLogos = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

const CloudSection = () => (
  <section id="cloud" className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-primary/[0.08] to-accent/[0.04] pointer-events-none" />
    <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: infrastructure panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="glass-card rounded-2xl p-5 relative">
            <div className="text-[11px] font-semibold mb-4 font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
              Cloud Services
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Server, label: "VPS", uptime: "99.99%" },
                { icon: Database, label: "DB", uptime: "99.97%" },
                { icon: Shield, label: "Firewall", uptime: "100%" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-muted/15 border border-border/20 p-2.5 text-center transition-all duration-300 hover:border-primary/20">
                  <m.icon size={14} className="text-primary mx-auto mb-1" />
                  <div className="text-xs font-bold">{m.uptime}</div>
                  <div className="text-[9px] text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {statusRows.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between rounded-lg bg-muted/10 border border-border/15 px-3 py-2.5 transition-all duration-300 hover:border-primary/20"
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon size={13} className="text-primary/70" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
                    {item.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-3 self-start">
            <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
            Cloud
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-display leading-tight">
            Cloud Segura y <span className="gradient-text">Escalable</span>
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { icon: Activity, label: "Uptime 99.99%" },
              { icon: Wifi, label: "Monitoreo 24/7" },
              { icon: Globe, label: "Escalabilidad Cloud" },
            ].map((m) => (
              <span key={m.label} className="inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/15">
                <m.icon size={11} /> {m.label}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
            Implementamos y gestionamos infraestructura cloud empresarial con Google Workspace,
            hosting dedicado, VPS y migraciones seguras con monitoreo continuo.
          </p>

          {/* Provider logos */}
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Infraestructura soportada por</p>
            <div className="flex items-center gap-4">
              {providerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="w-11 h-11 rounded-xl bg-card border border-border/30 flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.3)] hover:scale-110"
                  title={logo.name}
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <Button variant="gradient" size="lg" className="self-start">
            Conocer Más <ArrowRight size={16} className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CloudSection;
