import { motion } from "framer-motion";
import { Search, BarChart3, MousePointerClick, Gauge, TrendingUp, Eye, Target } from "lucide-react";

const services = [
  { icon: Search, title: "Estrategia SEO", desc: "SEO técnico, contenido y crecimiento orgánico." },
  { icon: MousePointerClick, title: "Google Ads", desc: "Campañas de alto rendimiento con ROI medible." },
  { icon: BarChart3, title: "Analítica", desc: "Insights basados en datos y conversiones." },
  { icon: Gauge, title: "Landing Pages", desc: "Páginas optimizadas para la conversión." },
];

const MarketingMockup = () => (
  <div className="glass-card rounded-2xl p-5 space-y-3">
    <div className="flex items-center gap-2 mb-1">
      <Target size={12} className="text-primary" />
      <span className="text-[10px] font-bold uppercase tracking-wider font-display">Dashboard de Marketing</span>
    </div>

    <div className="grid grid-cols-3 gap-2.5">
      {[
        { icon: Eye, label: "Impresiones", value: "124K", change: "+32%" },
        { icon: MousePointerClick, label: "Clics", value: "8.4K", change: "+18%" },
        { icon: TrendingUp, label: "Conversiones", value: "642", change: "+24%" },
      ].map((kpi) => (
        <div key={kpi.label} className="rounded-xl bg-muted/20 border border-border/20 p-3">
          <kpi.icon size={10} className="text-primary mb-1" />
          <div className="text-sm font-bold">{kpi.value}</div>
          <div className="flex items-center justify-between">
            <span className="text-[8px] text-muted-foreground">{kpi.label}</span>
            <span className="text-[8px] text-primary font-medium">{kpi.change}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
      <div className="text-[10px] font-semibold mb-2">Tráfico Orgánico</div>
      <svg viewBox="0 0 200 50" className="w-full h-12" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          d="M0,40 Q20,35 40,28 T80,24 T120,16 T160,12 T200,6"
          fill="none"
          stroke="hsl(210 100% 60%)"
          strokeWidth="1.5"
        />
        <path d="M0,40 Q20,35 40,28 T80,24 T120,16 T160,12 T200,6 V50 H0 Z" fill="url(#chartGrad)" opacity="0.5" />
      </svg>
    </div>

    <div className="space-y-1">
      {[
        { keyword: "consultoría empresarial", pos: 3, change: "↑2" },
        { keyword: "transformación digital", pos: 5, change: "↑4" },
        { keyword: "migración cloud", pos: 8, change: "↑1" },
      ].map((kw) => (
        <div key={kw.keyword} className="flex items-center justify-between text-[10px] px-2 py-1.5 rounded-lg bg-muted/20 border border-border/10">
          <span className="text-muted-foreground">{kw.keyword}</span>
          <div className="flex items-center gap-2">
            <span className="font-bold">#{kw.pos}</span>
            <span className="text-primary text-[9px]">{kw.change}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GrowthSection = () => (
  <section id="growth" className="relative py-28">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Marketing de Crecimiento</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display">
            Marketing que{" "}
            <span className="gradient-text">Impulsa Resultados</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            SEO, Google Ads y analítica para entregar resultados medibles. Te ayudamos a adquirir y convertir clientes.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((s) => (
              <div key={s.title} className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <s.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <MarketingMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export default GrowthSection;