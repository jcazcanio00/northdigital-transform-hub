import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCard = ({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`glass-card rounded-2xl p-4 shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

const MiniChart = () => (
  <div className="flex items-end gap-1 h-8">
    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
        className="w-2 rounded-full bg-primary/60"
        style={{ minHeight: 4 }}
      />
    ))}
  </div>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden noise-overlay">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute inset-0 bg-grid pointer-events-none" />

    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
      <div className="animate-orbit">
        <div className="w-2 h-2 rounded-full bg-primary/30" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8"
          >
            <Layers size={14} className="text-primary" />
            <span>Socio en Transformación Digital</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
        </motion.div>

        <div className="relative min-h-[420px] lg:min-h-[480px] hidden md:block">
          <FloatingCard className="absolute top-4 left-4 right-4 animate-float" delay={0.3}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Resumen de Ingresos</span>
              <span className="text-xs text-primary font-medium">+24.5%</span>
            </div>
            <div className="text-2xl font-bold mb-1">$128,450</div>
            <MiniChart />
          </FloatingCard>

          <FloatingCard className="absolute top-40 left-0 w-48 animate-float-slow" delay={0.5}>
            <div className="flex items-center gap-2 mb-2">
              <Users size={14} className="text-primary" />
              <span className="text-xs font-semibold">Pipeline CRM</span>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Prospectos", value: 142, color: "bg-primary/60" },
                { label: "Calificados", value: 89, color: "bg-accent/60" },
                { label: "Cerrados", value: 34, color: "bg-primary/40" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-8 h-1.5 rounded-full ${item.color}`} />
                    <span className="font-medium w-6 text-right">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </FloatingCard>

          <FloatingCard className="absolute top-44 right-2 w-44 animate-float-delayed" delay={0.7}>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-accent" />
              <span className="text-xs font-semibold">Automatización</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">12 flujos activos</div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-12 left-8 w-52 animate-float" delay={0.9}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 size={14} className="text-primary" />
              <span className="text-xs font-semibold">Analíticas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg font-bold">4.2K</div>
              <div className="flex items-center text-xs text-primary">
                <TrendingUp size={12} className="mr-0.5" /> +18%
              </div>
            </div>
            <div className="mt-2 flex gap-0.5">
              {[30, 50, 35, 70, 55, 85, 60, 75, 90, 65].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.05 }}
                  className="flex-1 rounded-sm bg-primary/40 min-h-[2px]"
                  style={{ maxHeight: 24 }}
                />
              ))}
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-8 right-4 w-40 animate-float-slow" delay={1.1}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Crecimiento</div>
                <div className="text-sm font-bold">+156%</div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
