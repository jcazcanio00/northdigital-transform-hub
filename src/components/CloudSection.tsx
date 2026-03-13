import { motion } from "framer-motion";
import { Server, Shield, Database, Cloud, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Server, title: "Servidores Optimizados", desc: "Infraestructura de alto rendimiento" },
  { icon: Shield, title: "Seguridad Avanzada", desc: "Firewalls, SSL, monitoreo 24/7" },
  { icon: Database, title: "Datos Protegidos", desc: "Backups automáticos y encriptados" },
];

const InfraMockup = () => (
  <div className="glass-card rounded-2xl border border-border/40 overflow-hidden shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/20 bg-muted/10">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
      </div>
      <div className="flex-1 text-center text-[9px] text-muted-foreground">cloud.northdigital.io/infrastructure</div>
    </div>
    <div className="p-5 space-y-4">
      {[
        { name: "Producción US-East", cpu: 34, mem: 62, status: "Online" },
        { name: "Staging EU-West", cpu: 18, mem: 41, status: "Online" },
        { name: "DB Primary", cpu: 52, mem: 78, status: "Online" },
      ].map((srv) => (
        <div key={srv.name} className="rounded-lg bg-muted/10 border border-border/15 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Server size={11} className="text-primary" />
              <span className="text-[10px] font-semibold">{srv.name}</span>
            </div>
            <span className="flex items-center gap-1 text-[9px] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
              {srv.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "CPU", val: srv.cpu },
              { label: "MEM", val: srv.mem },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-[8px] text-muted-foreground mb-1">
                  <span>{m.label}</span>
                  <span>{m.val}%</span>
                </div>
                <div className="w-full h-1 rounded-full bg-secondary/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`h-full rounded-full ${m.val > 70 ? "bg-accent" : "bg-primary"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        {["SSL Activo", "Firewall On", "DDoS Protected"].map((badge) => (
          <div key={badge} className="flex items-center gap-1 text-[8px] text-primary bg-primary/5 rounded-full px-2.5 py-1">
            <CheckCircle2 size={8} />
            {badge}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CloudSection = () => (
  <section id="cloud" className="relative py-28 overflow-hidden">
    <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <InfraMockup />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Infraestructura Cloud</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Cloud Segura y{" "}
            <span className="gradient-text">Escalable</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Migramos y optimizamos tu infraestructura con las mejores prácticas de 
            seguridad, rendimiento y escalabilidad.
          </p>
          <div className="grid sm:grid-cols-1 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display mb-0.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CloudSection;
