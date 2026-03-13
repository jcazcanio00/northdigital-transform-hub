import { motion } from "framer-motion";
import { Shield, Server, Database, RefreshCw, Globe, Lock, HardDrive, Activity } from "lucide-react";

const features = [
  { icon: Globe, title: "Google Workspace", desc: "Implementación, migración y capacitación" },
  { icon: Server, title: "Hosting y VPS", desc: "Infraestructura de alto rendimiento" },
  { icon: Database, title: "Migración de Datos", desc: "Migraciones seguras sin downtime" },
  { icon: RefreshCw, title: "Respaldos 24/7", desc: "Monitoreo y respaldos automatizados" },
];

const CloudMockup = () => (
  <div className="glass-card rounded-2xl p-5 space-y-3">
    <div className="flex items-center gap-2 mb-1">
      <Activity size={12} className="text-primary" />
      <span className="text-[10px] font-bold uppercase tracking-wider font-display">Estado de Infraestructura</span>
      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    </div>

    <div className="space-y-2">
      {[
        { name: "Servidor Principal", cpu: 34, mem: 62 },
        { name: "Clúster de BD", cpu: 28, mem: 45 },
        { name: "CDN Edge", cpu: 12, mem: 31 },
      ].map((srv) => (
        <div key={srv.name} className="rounded-xl bg-muted/20 border border-border/20 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <HardDrive size={10} className="text-primary" />
              <span className="text-[10px] font-semibold">{srv.name}</span>
            </div>
            <span className="text-[8px] text-primary flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-primary" /> Activo
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-[8px] text-muted-foreground mb-0.5">CPU {srv.cpu}%</div>
              <div className="h-1 rounded-full bg-secondary/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${srv.cpu}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-full rounded-full bg-primary/50"
                />
              </div>
            </div>
            <div>
              <div className="text-[8px] text-muted-foreground mb-0.5">Mem {srv.mem}%</div>
              <div className="h-1 rounded-full bg-secondary/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${srv.mem}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="h-full rounded-full bg-accent/50"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex gap-2 flex-wrap">
      {[
        { icon: Shield, label: "SSL Activo" },
        { icon: Lock, label: "Firewall On" },
        { icon: Database, label: "Respaldo OK" },
      ].map((badge) => (
        <div key={badge.label} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/5 border border-primary/10">
          <badge.icon size={8} className="text-primary" />
          <span className="text-[8px] font-medium text-primary">{badge.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const CloudSection = () => (
  <section id="cloud" className="relative py-28">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <CloudMockup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Infraestructura Cloud</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Cloud{" "}
            <span className="gradient-text">Segura y Escalable</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Construimos y mantenemos la infraestructura en la nube que tu negocio necesita para operar de forma segura y escalar.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <f.icon size={16} className="text-primary" />
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