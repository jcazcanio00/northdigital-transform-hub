import { motion } from "framer-motion";
import { Users, Zap, BarChart3, Puzzle, ArrowRight, TrendingUp, Bell, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Users, title: "CRM Empresarial", desc: "Gestión de clientes, oportunidades y seguimiento comercial." },
  { icon: Zap, title: "Automatización de Procesos", desc: "Workflows internos para eliminar tareas manuales." },
  { icon: BarChart3, title: "Dashboards en Tiempo Real", desc: "Visualización de métricas y operación del negocio." },
  { icon: Puzzle, title: "Integraciones con APIs", desc: "Conecta tu sistema con herramientas externas, ERPs y servicios cloud." },
];

const SystemsSection = () => (
  <section id="systems" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />
    <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
            Plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 font-display leading-tight">
            Software Empresarial que <span className="gradient-text">Automatiza tu Negocio</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Diseñamos plataformas digitales que centralizan información, automatizan procesos y permiten tomar decisiones con datos en tiempo real.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 group transition-all duration-400 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_0_25px_-8px_hsl(var(--primary)/0.25)]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-all duration-300">
                  <c.icon size={18} className="text-primary" />
                </div>
                <h4 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button variant="gradient" size="lg">
            Ver Más <ArrowRight size={16} className="ml-1" />
          </Button>
        </motion.div>

        {/* SaaS dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="glass-card rounded-2xl p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] font-bold font-display">Panel Empresarial</div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-primary font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" /> Live
                </span>
                <Bell size={12} className="text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Users, label: "Clientes", val: "1,284", change: "+12%" },
                { icon: Zap, label: "Automations", val: "56", change: "+8%" },
                { icon: BarChart3, label: "Revenue", val: "$128K", change: "+24%" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3 text-center transition-all duration-300 hover:border-primary/20">
                  <m.icon size={14} className="text-primary mx-auto mb-1" />
                  <div className="text-sm font-bold">{m.val}</div>
                  <div className="text-[9px] text-muted-foreground">{m.label}</div>
                  <div className="text-[9px] text-primary font-medium">
                    <TrendingUp size={8} className="inline mr-0.5" />{m.change}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-muted/10 border border-border/20 p-4 mb-3">
              <div className="text-[11px] font-semibold mb-3">Rendimiento Semanal</div>
              <div className="flex items-end gap-1 h-24">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary/60"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                <div className="text-[10px] font-semibold mb-2 flex items-center gap-1">
                  <Activity size={10} className="text-primary" /> Pipeline
                </div>
                {[
                  { label: "Prospectos", pct: 100 },
                  { label: "Calificados", pct: 63 },
                  { label: "Cerrados", pct: 24 },
                ].map((item) => (
                  <div key={item.label} className="mb-1.5">
                    <div className="flex justify-between text-[9px] mb-0.5">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-bold">{item.pct}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-secondary/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary/40 to-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                <div className="text-[10px] font-semibold mb-2">Actividad Reciente</div>
                {[
                  { t: "Nuevo lead: María L.", time: "2m" },
                  { t: "Deal cerrado: $12K", time: "15m" },
                  { t: "Pipeline actualizado", time: "1h" },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-1.5 py-0.5">
                    <CheckCircle2 size={8} className="text-primary mt-1 shrink-0" />
                    <div>
                      <div className="text-[9px]">{a.t}</div>
                      <div className="text-[8px] text-muted-foreground">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SystemsSection;
