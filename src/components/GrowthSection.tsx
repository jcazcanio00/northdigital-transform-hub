import { motion } from "framer-motion";
import { TrendingUp, Search, Target, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GrowthSection = () => (
  <section id="growth" className="py-24 relative overflow-hidden bg-card">
    <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Marketing</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Marketing que Impulsa <span className="gradient-text">Resultados</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          SEO, Google Ads y analítica avanzada para generar leads cualificados y escalar tu negocio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          { icon: Search, title: "SEO Técnico", desc: "Optimización on-page y off-page para máxima visibilidad." },
          { icon: Target, title: "Google Ads", desc: "Campañas PPC con alto ROI y segmentación precisa." },
          { icon: BarChart3, title: "Analítica", desc: "Dashboards con métricas de rendimiento en tiempo real." },
          { icon: TrendingUp, title: "Crecimiento", desc: "Estrategias basadas en datos para escalar resultados." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-6 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-sm font-bold font-display mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold font-display">Tráfico Orgánico</div>
            <div className="flex items-center gap-1 text-[10px] text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" /> +67% este mes
            </div>
          </div>
          <div className="flex items-end gap-1 h-28">
            {[20, 25, 18, 35, 30, 42, 38, 50, 45, 58, 52, 65, 60, 72, 68, 80, 75, 85, 78, 92, 88, 95, 90, 98].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary/70"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-10">
        <Button variant="gradient" size="lg">
          Ver Estrategias <ArrowRight size={16} className="ml-1" />
        </Button>
      </div>
    </div>
  </section>
);

export default GrowthSection;
