import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "CRM y pipelines de ventas personalizados",
  "Dashboards de métricas en tiempo real",
  "Automatización de workflows internos",
  "Integraciones con ERP y herramientas existentes",
];

const SystemsSection = () => (
  <section id="systems" className="py-24 relative overflow-hidden">
    {/* Light background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />
    <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Sistemas</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-display leading-tight">
            Software a Medida para la <span className="gradient-text">Eficiencia</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Desarrollamos sistemas empresariales que automatizan operaciones, centralizan datos
            y potencian la toma de decisiones con dashboards inteligentes.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm group">
                <CheckCircle2 size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button variant="gradient" size="lg">
            Ver Más <ArrowRight size={16} className="ml-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="glass-card rounded-2xl p-6 relative">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: Users, label: "Usuarios", val: "1,284" },
                { icon: Zap, label: "Automations", val: "56" },
                { icon: BarChart3, label: "Revenue", val: "$128K" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3 text-center transition-all duration-300 hover:border-primary/20 hover:bg-muted/30">
                  <m.icon size={16} className="text-primary mx-auto mb-1" />
                  <div className="text-xs font-bold">{m.val}</div>
                  <div className="text-[9px] text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-muted/10 border border-border/20 p-4">
              <div className="text-[11px] font-semibold mb-3">Rendimiento Semanal</div>
              <div className="flex items-end gap-1 h-24">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary/60"
                  />
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
