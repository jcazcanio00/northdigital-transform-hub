import { motion } from "framer-motion";
import { Shield, Server, Database, Globe, ArrowRight, Activity, Wifi, HardDrive, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusRows = [
  { icon: Globe, label: "Google Workspace", status: "Configurado", color: "text-primary" },
  { icon: Server, label: "VPS Principal", status: "Monitoreado", color: "text-primary" },
  { icon: HardDrive, label: "Backups", status: "Activos", color: "text-primary" },
  { icon: RefreshCw, label: "Migraciones", status: "Seguras", color: "text-primary" },
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
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="glass-card rounded-2xl p-5 relative">
            <div className="text-[11px] font-semibold mb-4 font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
              Infraestructura Cloud
            </div>

            {/* Server metrics */}
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

            {/* Status rows */}
            <div className="space-y-2">
              {statusRows.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-3">Cloud</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-display leading-tight">
            Cloud Segura y <span className="gradient-text">Escalable</span>
          </h2>

          {/* Metric chips */}
          <div className="flex flex-wrap gap-2 mb-5">
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

          <Button variant="gradient" size="lg">
            Conocer Más <ArrowRight size={16} className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CloudSection;
