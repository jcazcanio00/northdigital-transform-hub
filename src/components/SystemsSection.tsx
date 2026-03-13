import { motion } from "framer-motion";
import { BarChart3, Users, Zap, TrendingUp, Activity, CheckCircle2 } from "lucide-react";

const bullets = [
  "CRMs personalizados y pipelines de ventas",
  "Dashboards operativos en tiempo real",
  "Automatización de procesos internos",
  "Integración entre plataformas y APIs",
];

const DashboardMockup = () => (
  <div className="glass-card rounded-2xl border border-border/40 overflow-hidden shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/20 bg-muted/10">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
      </div>
      <div className="flex-1 text-center text-[9px] text-muted-foreground">enterprise-crm.northdigital.io</div>
    </div>
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Users, label: "Usuarios Activos", val: "1,284" },
          { icon: TrendingUp, label: "Revenue", val: "$128K" },
          { icon: Zap, label: "Automations", val: "47" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg bg-muted/15 border border-border/15 p-3 text-center">
            <m.icon size={12} className="text-primary mx-auto mb-1" />
            <div className="text-xs font-bold">{m.val}</div>
            <div className="text-[8px] text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-muted/10 border border-border/15 p-3">
        <div className="text-[10px] font-semibold mb-2">Performance</div>
        <div className="flex items-end gap-[3px] h-20">
          {[35, 50, 40, 65, 55, 72, 60, 80, 70, 90, 85, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/20 to-primary/60"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {["Prospecto", "Calificado", "Propuesta", "Cerrado"].map((s, i) => (
          <div key={s} className="text-center">
            <div className="h-1 rounded-full bg-primary/20 mb-1">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${100 - i * 20}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
            <span className="text-[7px] text-muted-foreground">{s}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SystemsSection = () => (
  <section id="systems" className="relative py-28 overflow-hidden">
    <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Sistemas Empresariales</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Software a Medida para la{" "}
            <span className="gradient-text">Eficiencia</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Construimos sistemas que transforman tu operación. CRMs, dashboards, 
            automatizaciones y plataformas internas diseñadas para tu negocio.
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemsSection;
