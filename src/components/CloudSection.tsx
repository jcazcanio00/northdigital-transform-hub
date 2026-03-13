import { motion } from "framer-motion";
import { Shield, Server, Database, Globe, CheckCircle2, ArrowRight, Activity, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const CloudSection = () => (
  <section id="cloud" className="py-20 relative overflow-hidden">
    <div className="section-divider" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-primary/[0.08] to-accent/[0.04] pointer-events-none" />
    <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Top metrics strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        {[
          { icon: Activity, label: "Uptime", value: "99.99%" },
          { icon: Wifi, label: "Monitoreo", value: "24/7" },
          { icon: Globe, label: "Escalabilidad", value: "Cloud" },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-3 glass-card rounded-xl px-5 py-3 border-primary/10">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <m.icon size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold">{m.value}</div>
              <div className="text-[9px] text-muted-foreground">{m.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: infrastructure panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="glass-card rounded-2xl p-5 relative">
            <div className="text-[11px] font-semibold mb-3 font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
              Infraestructura Cloud
            </div>
            <div className="space-y-2.5">
              {[
                { icon: Server, label: "VPS Principal", uptime: "99.99%" },
                { icon: Database, label: "Base de Datos", uptime: "99.97%" },
                { icon: Shield, label: "Firewall", uptime: "100%" },
                { icon: Globe, label: "CDN Global", uptime: "99.98%" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-xl bg-muted/15 border border-border/20 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-muted/25"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                      <item.icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="text-[9px] text-muted-foreground">Uptime: {item.uptime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
                    Activo
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Cloud</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 font-display leading-tight">
            Cloud Segura y <span className="gradient-text">Escalable</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Implementamos y gestionamos infraestructura cloud empresarial con Google Workspace,
            hosting dedicado, VPS y migraciones seguras con monitoreo 24/7.
          </p>
          <ul className="space-y-2.5 mb-6">
            {["Google Workspace empresarial", "Hosting y VPS de alto rendimiento", "Migración de datos segura", "Monitoreo y soporte continuo"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm group">
                <CheckCircle2 size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button variant="gradient" size="lg">
            Conocer Más <ArrowRight size={16} className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
    <div className="section-divider mt-8" />
  </section>
);

export default CloudSection;
