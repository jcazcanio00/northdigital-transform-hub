import { motion } from "framer-motion";
import { TrendingUp, Search, Target, BarChart3, ArrowRight, Eye, MousePointerClick, Users, Globe, ArrowUpRight, DollarSign, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const GrowthSection = () => (
  <section id="growth" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/80 to-card pointer-events-none" />
    <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Marketing
        </span>
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 group cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.25)] hover:border-primary/20"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-sm font-bold font-display mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Analytics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative"
      >
        <div className="absolute -inset-8 bg-primary/3 rounded-3xl blur-3xl pointer-events-none" />
        <div className="glass-card rounded-2xl p-5 relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 size={14} className="text-primary" />
              </div>
              <div>
                <div className="text-xs font-bold font-display">Analytics Dashboard</div>
                <div className="text-[9px] text-muted-foreground">Marzo 2026 · En vivo</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status-pulse" />
              <span className="text-[9px] text-primary font-medium">Live</span>
            </div>
          </div>

          {/* Top metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              { icon: Eye, label: "Sesiones", value: "48.2K", change: "+24%", up: true },
              { icon: Users, label: "Usuarios", value: "12.8K", change: "+18%", up: true },
              { icon: MousePointerClick, label: "Conv. Rate", value: "3.42%", change: "+0.8%", up: true },
              { icon: Globe, label: "Tráfico Org.", value: "67%", change: "+12%", up: true },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3.5 transition-all duration-300 hover:border-primary/15">
                <div className="flex items-center justify-between mb-2">
                  <m.icon size={14} className="text-muted-foreground" />
                  <span className="flex items-center gap-0.5 text-[10px] font-medium text-primary">
                    <ArrowUpRight size={10} />{m.change}
                  </span>
                </div>
                <div className="text-lg font-bold font-display">{m.value}</div>
                <div className="text-[10px] text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Main chart */}
            <div className="lg:col-span-2 rounded-xl bg-muted/10 border border-border/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] font-semibold font-display">Tráfico & Conversiones</div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-0.5 bg-primary rounded" /> Tráfico</span>
                  <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-0.5 bg-accent rounded" /> Conv.</span>
                </div>
              </div>
              <div className="flex items-end gap-[2px] h-32">
                {[25, 32, 28, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 88, 82, 92, 86, 95, 90, 97, 93, 98].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.02 }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary/60 relative"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 0.35}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.02 }}
                      className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-accent/50"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Channels breakdown */}
            <div className="rounded-xl bg-muted/10 border border-border/20 p-4">
              <div className="text-[11px] font-semibold font-display mb-4">Canales</div>
              <div className="space-y-3">
                {[
                  { label: "Orgánico", pct: 67, color: "from-primary/40 to-primary" },
                  { label: "Directo", pct: 18, color: "from-accent/40 to-accent" },
                  { label: "Referral", pct: 10, color: "from-primary/20 to-primary/60" },
                  { label: "Social", pct: 5, color: "from-accent/20 to-accent/60" },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-muted-foreground">{c.label}</span>
                      <span className="font-bold">{c.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom widgets */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              { icon: Percent, label: "Bounce Rate", value: "32.1%", trend: "-4.2%" },
              { icon: Clock, label: "Avg. Session", value: "4m 12s", trend: "+18%" },
              { icon: Eye, label: "Pages/Session", value: "3.8", trend: "+0.6" },
              { icon: DollarSign, label: "CPC Promedio", value: "$0.42", trend: "-12%" },
              { icon: Target, label: "CTR", value: "4.8%", trend: "+1.2%" },
              { icon: TrendingUp, label: "ROAS", value: "5.2x", trend: "+0.8x" },
            ].map((w) => (
              <div key={w.label} className="rounded-xl bg-muted/15 border border-border/15 p-3 transition-all duration-300 hover:border-primary/15">
                <w.icon size={11} className="text-muted-foreground mb-1.5" />
                <div className="text-[9px] text-muted-foreground mb-0.5">{w.label}</div>
                <div className="text-sm font-bold">{w.value}</div>
                <div className="text-[9px] font-medium text-primary">{w.trend}</div>
              </div>
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
