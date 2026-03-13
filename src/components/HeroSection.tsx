import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Users, Zap, TrendingUp, Activity, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCard = ({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    className={`glass-card card-shine rounded-2xl p-4 shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

const MiniChart = () => (
  <div className="flex items-end gap-1 h-10">
    {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.6, delay: 0.8 + i * 0.08, type: "spring" }}
        className="w-2 rounded-full bg-gradient-to-t from-primary/40 to-primary/80"
        style={{ minHeight: 4 }}
      />
    ))}
  </div>
);

const PulsingDot = ({ className }: { className?: string }) => (
  <span className={`relative flex h-2.5 w-2.5 ${className}`}>
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
  </span>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden noise-overlay">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

    {/* Enhanced atmospheric orbs */}
    <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[180px] animate-pulse-glow pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[150px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "4s" }} />

    {/* Orbiting particle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
      <div className="animate-orbit">
        <div className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
      </div>
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8 border border-primary/20"
          >
            <Layers size={14} className="text-primary" />
            <span>Socio en Transformación Digital</span>
            <PulsingDot />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.08] mb-7 text-balance tracking-tight">
            Sistemas Digitales, Infraestructura Cloud y{" "}
            <span className="gradient-text">Estrategias de Crecimiento</span>{" "}
            para Empresas Modernas.
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Ayudamos a las empresas a automatizar operaciones, escalar su infraestructura y generar crecimiento a través de la tecnología.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg">
              Iniciar un Proyecto <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button variant="gradient-outline" size="lg">
              Explorar Soluciones
            </Button>
          </div>

          {/* Trust mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border/40"
          >
            {[
              { value: "150+", label: "Proyectos" },
              { value: "98%", label: "Satisfacción" },
              { value: "24/7", label: "Soporte" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced floating dashboard composition */}
        <div className="relative min-h-[480px] lg:min-h-[540px] hidden md:block">
          {/* Main revenue card */}
          <FloatingCard className="absolute top-0 left-4 right-4 animate-float" delay={0.3}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 size={12} className="text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Resumen de Ingresos</span>
              </div>
              <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">+24.5%</span>
            </div>
            <div className="text-2xl font-bold mb-2">$128,450</div>
            <MiniChart />
          </FloatingCard>

          {/* CRM Pipeline */}
          <FloatingCard className="absolute top-40 left-0 w-52 animate-float-slow" delay={0.5}>
            <div className="flex items-center gap-2 mb-3">
              <Users size={14} className="text-primary" />
              <span className="text-xs font-semibold">Pipeline CRM</span>
              <PulsingDot className="ml-auto" />
            </div>
            <div className="space-y-2">
              {[
                { label: "Prospectos", value: 142, pct: 100, color: "from-primary/40 to-primary/70" },
                { label: "Calificados", value: 89, pct: 63, color: "from-accent/40 to-accent/70" },
                { label: "Cerrados", value: 34, pct: 24, color: "from-primary/30 to-primary/50" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.pct}%` }}
                      transition={{ duration: 1, delay: 1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FloatingCard>

          {/* Automation widget */}
          <FloatingCard className="absolute top-44 right-0 w-48 animate-float-delayed" delay={0.7}>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-accent" />
              <span className="text-xs font-semibold">Automatización</span>
            </div>
            <div className="space-y-2">
              {[
                { name: "Email Flow", status: "Activo" },
                { name: "CRM Sync", status: "Activo" },
                { name: "Reportes", status: "Pausado" },
              ].map((flow) => (
                <div key={flow.name} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{flow.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${flow.status === "Activo" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {flow.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
              <Activity size={10} /> 12 flujos configurados
            </div>
          </FloatingCard>

          {/* Analytics card */}
          <FloatingCard className="absolute bottom-16 left-4 w-56 animate-float" delay={0.9}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 size={14} className="text-primary" />
              <span className="text-xs font-semibold">Analíticas en Vivo</span>
              <PulsingDot className="ml-auto" />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg font-bold">4.2K</div>
              <div className="flex items-center text-xs text-primary font-medium">
                <TrendingUp size={12} className="mr-0.5" /> +18%
              </div>
            </div>
            <div className="mt-2 flex gap-0.5">
              {[30, 50, 35, 70, 55, 85, 60, 75, 90, 65, 80, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.04 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/20 to-primary/60 min-h-[2px]"
                  style={{ maxHeight: 28 }}
                />
              ))}
            </div>
          </FloatingCard>

          {/* Server status widget */}
          <FloatingCard className="absolute bottom-4 right-2 w-44 animate-float-slow" delay={1.1}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database size={14} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Servidores</div>
                <div className="text-sm font-bold flex items-center gap-1">
                  <Shield size={10} className="text-primary" /> 99.9% uptime
                </div>
              </div>
            </div>
          </FloatingCard>

          {/* Growth indicator */}
          <FloatingCard className="absolute top-28 right-20 w-28 animate-float-delayed" delay={1.3}>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <TrendingUp size={18} className="text-primary" />
              </div>
              <div className="text-lg font-bold gradient-text">+156%</div>
              <div className="text-[10px] text-muted-foreground">Crecimiento</div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
