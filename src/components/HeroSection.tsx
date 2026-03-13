import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Users, Zap, TrendingUp, Activity, Bell, CheckCircle2, Globe, Shield, Mail, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PulsingDot = ({ className }: { className?: string }) => (
  <span className={`relative flex h-2 w-2 ${className}`}>
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
  </span>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 overflow-hidden">
    {/* Layered background */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(215 90% 96% / 0.5) 40%, hsl(200 90% 94% / 0.3) 70%, hsl(var(--background)) 100%)" }} />
    <div className="dark:block hidden absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(215 50% 8% / 0.8) 40%, hsl(200 60% 6% / 0.5) 70%, hsl(var(--background)) 100%)" }} />
    
    {/* Radial glow effects */}
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/6 blur-[150px] pointer-events-none" />
    <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
    <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Hero text - centered */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
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

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold leading-[1.05] mb-8 text-balance tracking-tight">
          Sistemas Digitales e{" "}
          <span className="gradient-text">Infraestructura Cloud</span>{" "}
          para Empresas Modernas.
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Automatizamos operaciones, escalamos infraestructura y generamos crecimiento real a través de tecnología de vanguardia.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="gradient" size="lg" className="text-base px-8 py-6">
            Iniciar un Proyecto <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button variant="gradient-outline" size="lg" className="text-base px-8 py-6">
            Explorar Soluciones
          </Button>
        </div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-12 justify-center"
        >
          {[
            { value: "150+", label: "Proyectos Entregados" },
            { value: "98%", label: "Satisfacción" },
            { value: "24/7", label: "Soporte Técnico" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Large Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Dashboard glow behind */}
        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
        
        {/* Main dashboard container */}
        <div className="relative glass-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40 bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/50" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="px-4 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground flex items-center gap-2">
                <Shield size={10} /> app.northdigital.io/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="flex min-h-[420px] lg:min-h-[480px]">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col w-56 border-r border-border/30 p-4 bg-muted/10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">North Digital</div>
                  <div className="text-[10px] text-muted-foreground">Panel Principal</div>
                </div>
              </div>
              <nav className="space-y-1 flex-1">
                {[
                  { icon: BarChart3, label: "Dashboard", active: true },
                  { icon: Users, label: "CRM Pipeline" },
                  { icon: Zap, label: "Automatización" },
                  { icon: Mail, label: "Campañas" },
                  { icon: Activity, label: "Analíticas" },
                  { icon: Globe, label: "Integraciones" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon size={14} />
                    {item.label}
                  </div>
                ))}
              </nav>
              <div className="pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">N</div>
                  <span>admin@north.io</span>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 lg:p-6 space-y-5 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">Panel de Control</div>
                  <div className="text-xs text-muted-foreground">Marzo 2026 · Actualizado hace 2 min</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Bell size={16} className="text-muted-foreground" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Ingresos", value: "$128,450", change: "+24.5%", up: true },
                  { label: "Clientes Activos", value: "1,284", change: "+12%", up: true },
                  { label: "Leads Nuevos", value: "342", change: "+8.3%", up: true },
                  { label: "Tasa de Cierre", value: "34.2%", change: "+2.1%", up: true },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-muted/30 border border-border/30 p-3">
                    <div className="text-[10px] text-muted-foreground mb-1">{m.label}</div>
                    <div className="text-base font-bold">{m.value}</div>
                    <div className={`text-[10px] font-medium mt-0.5 ${m.up ? "text-primary" : "text-destructive"}`}>
                      <TrendingUp size={10} className="inline mr-0.5" />{m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                {/* Revenue chart */}
                <div className="lg:col-span-3 rounded-xl bg-muted/20 border border-border/30 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold">Ingresos Mensuales</div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <PulsingDot /> En vivo
                    </div>
                  </div>
                  {/* Chart visualization */}
                  <div className="flex items-end gap-[3px] h-28">
                    {[35, 45, 30, 55, 48, 65, 58, 72, 68, 82, 75, 90, 85, 78, 92, 88, 95, 82, 98, 90].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.04, type: "spring" }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary/70"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[9px] text-muted-foreground">
                    <span>Ene</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dic</span>
                  </div>
                </div>

                {/* CRM Pipeline */}
                <div className="lg:col-span-2 rounded-xl bg-muted/20 border border-border/30 p-4">
                  <div className="text-xs font-semibold mb-4">Pipeline CRM</div>
                  <div className="space-y-3">
                    {[
                      { label: "Prospectos", value: 142, pct: 100 },
                      { label: "Calificados", value: 89, pct: 63 },
                      { label: "Propuesta", value: 56, pct: 39 },
                      { label: "Negociación", value: 41, pct: 29 },
                      { label: "Cerrados", value: 34, pct: 24 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-bold">{item.value}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-secondary/50">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Automation */}
                <div className="rounded-xl bg-muted/20 border border-border/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={12} className="text-accent" />
                    <span className="text-xs font-semibold">Automatización</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Email Onboarding", status: true },
                      { name: "Lead Scoring", status: true },
                      { name: "Sync CRM → ERP", status: true },
                      { name: "Reportes Semanales", status: false },
                    ].map((f) => (
                      <div key={f.name} className="flex items-center justify-between text-[10px]">
                        <span className="text-muted-foreground">{f.name}</span>
                        <span className={`flex items-center gap-1 ${f.status ? "text-primary" : "text-muted-foreground"}`}>
                          {f.status ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                          {f.status ? "Activo" : "Pausado"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="rounded-xl bg-muted/20 border border-border/30 p-4">
                  <div className="text-xs font-semibold mb-3">Actividad Reciente</div>
                  <div className="space-y-2.5">
                    {[
                      { text: "Nuevo lead: María López", time: "Hace 2 min" },
                      { text: "Pipeline actualizado", time: "Hace 15 min" },
                      { text: "Reporte Q1 generado", time: "Hace 1 hora" },
                      { text: "3 deals cerrados", time: "Hace 2 horas" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                        <div>
                          <div className="text-[10px]">{a.text}</div>
                          <div className="text-[9px] text-muted-foreground">{a.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance */}
                <div className="rounded-xl bg-muted/20 border border-border/30 p-4">
                  <div className="text-xs font-semibold mb-3">Rendimiento</div>
                  <div className="flex items-end gap-1 h-16 mb-2">
                    {[60, 45, 70, 55, 80, 65, 90, 72, 85, 78, 92, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 1.4 + i * 0.05 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/30 to-accent/70"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Uptime</span>
                    <span className="text-xs font-bold text-primary">99.97%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating widgets around dashboard */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute -left-4 lg:-left-12 top-[20%] glass-card rounded-xl p-3 shadow-lg animate-float-slow hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold gradient-text">+156%</div>
              <div className="text-[9px] text-muted-foreground">Crecimiento Q1</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute -right-4 lg:-right-10 top-[35%] glass-card rounded-xl p-3 shadow-lg animate-float-delayed hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <Bell size={14} className="text-accent" />
            <div>
              <div className="text-[10px] font-semibold">Nuevo Lead</div>
              <div className="text-[9px] text-muted-foreground">Empresa Tech S.A.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute -right-2 lg:-right-8 bottom-[15%] glass-card rounded-xl p-3 shadow-lg animate-float hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-primary" />
            <div className="text-[10px] font-semibold">3 tareas completadas</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute -left-2 lg:-left-8 bottom-[10%] glass-card rounded-xl p-3 shadow-lg animate-float-delayed hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-primary" />
            <div>
              <div className="text-[10px] font-bold">99.9%</div>
              <div className="text-[9px] text-muted-foreground">Uptime</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
