import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Users, Workflow } from "lucide-react";

const bullets = [
  "Plataformas CRM personalizadas para tu flujo de trabajo",
  "Dashboards operativos internos y herramientas de reportes",
  "Automatización de procesos empresariales e integraciones",
  "Aplicaciones web escalables y productos SaaS",
  "Desarrollo de APIs e integraciones con terceros",
];

const DashboardMockup = () => (
  <div className="glass-card rounded-2xl p-5 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-accent/50" />
        <div className="w-3 h-3 rounded-full bg-primary/40" />
      </div>
      <div className="h-5 w-32 rounded bg-secondary" />
    </div>

    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Users, label: "Usuarios Activos", value: "2,847", change: "+12%" },
        { icon: BarChart3, label: "Ingresos", value: "$48.2K", change: "+24%" },
        { icon: Workflow, label: "Automatizaciones", value: "156", change: "+8%" },
      ].map((stat) => (
        <div key={stat.label} className="glass-card rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <stat.icon size={12} className="text-primary" />
            <span className="text-[10px] text-muted-foreground">{stat.label}</span>
          </div>
          <div className="text-sm font-bold">{stat.value}</div>
          <span className="text-[10px] text-primary">{stat.change}</span>
        </div>
      ))}
    </div>

    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold">Rendimiento</span>
        <div className="flex gap-2">
          {["7D", "30D", "90D"].map((p) => (
            <span key={p} className={`text-[10px] px-2 py-0.5 rounded-md ${p === "30D" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{p}</span>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-[3px] h-20">
        {[35, 55, 40, 70, 50, 85, 60, 90, 65, 80, 95, 75, 88, 70, 92].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex-1 rounded-sm bg-primary/50"
          />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Prospecto", count: 48, color: "bg-primary/30" },
        { label: "Calificado", count: 32, color: "bg-primary/50" },
        { label: "Propuesta", count: 18, color: "bg-accent/50" },
        { label: "Cerrado", count: 12, color: "bg-primary/70" },
      ].map((stage) => (
        <div key={stage.label} className="text-center">
          <div className={`h-1.5 rounded-full ${stage.color} mb-1.5`} />
          <div className="text-[10px] text-muted-foreground">{stage.label}</div>
          <div className="text-xs font-bold">{stage.count}</div>
        </div>
      ))}
    </div>
  </div>
);

const SystemsSection = () => (
  <section id="systems" className="relative py-28 surface-sunken noise-overlay">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Sistemas Empresariales</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Sistemas Empresariales a Medida para la{" "}
            <span className="gradient-text">Eficiencia</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Diseñamos y desarrollamos sistemas internos, plataformas CRM, dashboards operativos y herramientas de automatización
            que optimizan las operaciones de tu negocio y te ayudan a escalar con confianza.
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
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemsSection;
