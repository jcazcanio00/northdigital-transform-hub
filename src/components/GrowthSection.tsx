import { motion } from "framer-motion";
import { Search, BarChart3, Target, Layout, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Search, title: "SEO Técnico", desc: "Rankings orgánicos que generan tráfico calificado" },
  { icon: Target, title: "Google Ads", desc: "Campañas de alto rendimiento con ROI comprobado" },
  { icon: BarChart3, title: "Analytics", desc: "Datos accionables para decisiones inteligentes" },
  { icon: Layout, title: "Landing Pages", desc: "Páginas optimizadas para conversión" },
];

const GrowthSection = () => (
  <section id="growth" className="relative py-28 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
    <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
    <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Marketing Digital</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display text-white">
          Marketing que Impulsa{" "}
          <span className="gradient-text">Resultados</span>
        </h2>
        <p className="text-white/50 max-w-lg mx-auto">
          Estrategias de adquisición y crecimiento basadas en datos para escalar tu negocio.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm group hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-bold text-sm font-display text-white mb-2">{s.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 lg:p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
        <div className="grid lg:grid-cols-3 gap-6 relative z-10">
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display text-white mb-4">Métricas Clave</h3>
            {[
              { label: "Impresiones", value: "2.4M", change: "+34%" },
              { label: "Clicks", value: "186K", change: "+28%" },
              { label: "Conversiones", value: "4,520", change: "+52%" },
              { label: "ROI", value: "8.2x", change: "+18%" },
            ].map((kpi) => (
              <div key={kpi.label} className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-white/50">{kpi.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{kpi.value}</span>
                  <span className="text-[10px] text-primary flex items-center">
                    <ArrowUpRight size={10} />{kpi.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold font-display text-white mb-4">Tráfico Orgánico</h3>
            <div className="flex items-end gap-1 h-32">
              {[20, 35, 28, 45, 38, 52, 48, 60, 55, 68, 62, 75, 70, 82, 78, 88, 85, 92, 88, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary/70"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-white/30">
              <span>Ene</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dic</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute -top-2 -right-2 rounded-xl p-3 border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-lg hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-primary" />
            <div>
              <div className="text-xs font-bold text-white">+52%</div>
              <div className="text-[8px] text-white/40">Conversiones</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default GrowthSection;
