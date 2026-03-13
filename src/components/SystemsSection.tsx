import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Users, Workflow } from "lucide-react";

const bullets = [
  "Plataformas CRM personalizadas para tu flujo de trabajo",
  "Dashboards operativos internos y reportes",
  "Automatización de procesos e integraciones",
  "Aplicaciones web escalables y productos SaaS",
  "Desarrollo de APIs e integraciones con terceros",
];

const DashboardMockup = () => (
  <div className="glass-card rounded-2xl p-5 space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
      </div>
      <div className="h-4 w-28 rounded bg-secondary/50" />
    </div>

    <div className="grid grid-cols-3 gap-2.5">
      {[
        { icon: Users, label: "Usuarios Activos", value: "2,847", change: "+12%" },
        { icon: BarChart3, label: "Ingresos", value: "$48.2K", change: "+24%" },
        { icon: Workflow, label: "Automatizaciones", value: "156", change: "+8%" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-xl bg-muted/20 border border-border/20 p-3">
          <div className="flex items-center gap-1 mb-1">
            <stat.icon size={10} className="text-primary" />
            <span className="text-[9px] text-muted-foreground">{stat.label}</span>
          </div>
          <div className="text-sm font-bold">{stat.value}</div>
          <span className="text-[9px] text-primary">{stat.change}</span>
        </div>
      ))}
    </div>

    <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold">Rendimiento</span>
        <div className="flex gap-1.5">
          {["7D", "30D", "90D"].map((p) => (
            <span key={p} className={`text-[9px] px-1.5 py-0.5 rounded ${p === "30D" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{p}</span>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-[2px] h-16">
        {[35, 55, 40, 70, 50, 85, 60, 90, 65, 80, 95, 75, 88, 70, 92].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="flex-1 rounded-sm bg-primary/40"
          />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5">
      {[
        { label: "Prospecto", count: 48 },
        { label: "Calificado", count: 32 },
        { label: "Propuesta", count: 18 },
        { label: "Cerrado", count: 12 },
      ].map((stage, i) => (
        <div key={stage.label} className="text-center">
          <div className="h-1 rounded-full bg-primary mb-1" style={{ opacity: 0.3 + i * 0.2 }} />
          <div className="text-[9px] text-muted-foreground">{stage.label}</div>
          <div className="text-[10px] font-bold">{stage.count}</div>
        </div>
      ))}
    </div>
  </div>
);

const SystemsSection = () => (
  <section id="systems" className="relative py-28">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Sistemas Empresariales</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Software a Medida para la{" "}
            <span className="gradient-text">Eficiencia</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Diseñamos sistemas internos, CRM, dashboards y herramientas de automatización
            que optimizan tu negocio.
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemsSection;