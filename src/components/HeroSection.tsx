import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, TrendingUp, Activity, Bell, CheckCircle2, Globe, Shield, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
    {/* Background glows */}
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="absolute top-[50%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Socio en Transformación Digital
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] mb-8 text-balance font-display">
          Automatiza, Escala y{" "}
          <span className="gradient-text">Crece</span>{" "}
          con Tecnología.
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Sistemas digitales, infraestructura cloud y marketing de rendimiento para empresas modernas.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gradient" size="lg" className="text-base px-8 py-6">
            Iniciar un Proyecto <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button variant="gradient-outline" size="lg" className="text-base px-8 py-6">
            Explorar Soluciones
          </Button>
        </div>
      </motion.div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 50 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Glow behind */}
        <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-3xl pointer-events-none" />

        {/* Main container */}
        <div className="relative glass-card rounded-2xl lg:rounded-3xl border border-border/60 overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-muted/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rounded-full bg-primary/30" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="px-4 py-1 rounded-md bg-muted/40 text-[10px] text-muted-foreground flex items-center gap-2">
                <Shield size={9} /> app.northdigital.io/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="flex min-h-[400px] lg:min-h-[460px]">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col w-52 border-r border-border/20 p-4 bg-muted/5">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe size={14} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold font-display">North Digital</div>
                  <div className="text-[9px] text-muted-foreground">Panel Principal</div>
                </div>
              </div>
              <nav className="space-y-0.5 flex-1">
                {[
                  { icon: BarChart3, label: "Dashboard", active: true },
                  { icon: Users, label: "CRM Pipeline" },
                  { icon: Zap, label: "Automatización" },
                  { icon: Activity, label: "Analíticas" },
                  { icon: Globe, label: "Integraciones" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon size={13} />
                    {item.label}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 lg:p-6 space-y-4 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold font-display">Panel de Control</div>
                  <div className="text-[10px] text-muted-foreground">Marzo 2026 · Actualizado hace 2 min</div>
                </div>
                <div className="relative">
                  <Bell size={14} className="text-muted-foreground" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  { label: "Ingresos", value: "$128,450", change: "+24.5%" },
                  { label: "Clientes Activos", value: "1,284", change: "+12%" },
                  { label: "Leads Nuevos", value: "342", change: "+8.3%" },
                  { label: "Tasa de Cierre", value: "34.2%", change: "+2.1%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3">
                    <div className="text-[9px] text-muted-foreground mb-0.5">{m.label}</div>
                    <div className="text-sm font-bold">{m.value}</div>
                    <div className="text-[9px] font-medium text-primary mt-0.5">
                      <TrendingUp size={9} className="inline mr-0.5" />{m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-2.5">
                {/* Revenue chart */}
                <div className="lg:col-span-3 rounded-xl bg-muted/10 border border-border/20 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[11px] font-semibold">Ingresos Mensuales</div>
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> En vivo
                    </div>
                  </div>
                  <div className="flex items-end gap-[2px] h-24">
                    {[35, 45, 30, 55, 48, 65, 58, 72, 68, 82, 75, 90, 85, 78, 92, 88, 95, 82, 98, 90].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.03 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-primary/60"
                      />
                    ))}
                  </div>
                </div>

                {/* Pipeline */}
                <div className="lg:col-span-2 rounded-xl bg-muted/10 border border-border/20 p-4">
                  <div className="text-[11px] font-semibold mb-3">Pipeline CRM</div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Prospectos", value: 142, pct: 100 },
                      { label: "Calificados", value: 89, pct: 63 },
                      { label: "Propuesta", value: 56, pct: 39 },
                      { label: "Cerrados", value: 34, pct: 24 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-[9px] mb-1">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-bold">{item.value}</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-secondary/50">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary/40 to-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap size={10} className="text-accent" />
                    <span className="text-[10px] font-semibold">Automatización</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "Email Onboarding", status: true },
                      { name: "Lead Scoring", status: true },
                      { name: "Sync CRM → ERP", status: true },
                    ].map((f) => (
                      <div key={f.name} className="flex items-center justify-between text-[9px]">
                        <span className="text-muted-foreground">{f.name}</span>
                        <span className="flex items-center gap-1 text-primary">
                          <CheckCircle2 size={8} /> Activo
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="text-[10px] font-semibold mb-2">Actividad</div>
                  <div className="space-y-2">
                    {[
                      { text: "Nuevo lead: María López", time: "2 min" },
                      { text: "Pipeline actualizado", time: "15 min" },
                      { text: "3 deals cerrados", time: "2h" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                        <div>
                          <div className="text-[9px]">{a.text}</div>
                          <div className="text-[8px] text-muted-foreground">{a.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="text-[10px] font-semibold mb-2">Rendimiento</div>
                  <div className="flex items-end gap-0.5 h-12 mb-1.5">
                    {[60, 45, 70, 55, 80, 65, 90, 72, 85, 78, 92, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.4, delay: 1.2 + i * 0.04 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent/60"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground">Uptime</span>
                    <span className="text-[10px] font-bold text-primary">99.97%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating widgets */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute -left-4 lg:-left-10 top-[25%] glass-card rounded-xl p-3 shadow-lg animate-float-slow hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp size={12} className="text-primary" />
            </div>
            <div>
              <div className="text-[11px] font-bold gradient-text">+156%</div>
              <div className="text-[8px] text-muted-foreground">Crecimiento Q1</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute -right-4 lg:-right-8 top-[30%] glass-card rounded-xl p-2.5 shadow-lg animate-float-delayed hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <Bell size={12} className="text-accent" />
            <div>
              <div className="text-[9px] font-semibold">Nuevo Lead</div>
              <div className="text-[8px] text-muted-foreground">Empresa Tech S.A.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute -right-2 lg:-right-6 bottom-[12%] glass-card rounded-xl p-2.5 shadow-lg animate-float hidden lg:block"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-primary" />
            <div className="text-[9px] font-semibold">3 tareas completadas</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;