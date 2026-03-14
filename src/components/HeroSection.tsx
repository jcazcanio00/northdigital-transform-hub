import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, TrendingUp, Activity, Bell, CheckCircle2, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WhatsAppHeroButton } from "@/components/WhatsAppButton";

const FloatingParticles = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-primary/10 pointer-events-none"
        style={{
          width: 4 + Math.random() * 8,
          height: 4 + Math.random() * 8,
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 80}%`,
        }}
        animate={{
          y: [0, -20 - Math.random() * 30, 0],
          x: [0, (Math.random() - 0.5) * 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
    {/* Radial blue glow behind dashboard */}
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full bg-primary/8 blur-[180px] pointer-events-none" />
    <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />
    {/* Subtle gradient motion orbs */}
    <motion.div
      className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] rounded-full bg-primary/4 blur-[100px] pointer-events-none"
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    <FloatingParticles />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Socio en Transformación Digital
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 text-balance font-display">
          Automatiza, Escala y{" "}
          <span className="gradient-text">Crece</span>{" "}
          con Tecnología.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Somos una agencia de marketing digital en Cancún que combina software empresarial, infraestructura cloud y marketing de crecimiento para empresas modernas.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gradient" size="lg" className="text-base px-8 py-6" asChild>
            <Link to="/contacto">Iniciar un Proyecto <ArrowRight size={16} className="ml-1" /></Link>
          </Button>
          <Button
            variant="gradient-outline"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => {
              const el = document.getElementById("solutions");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Explorar Soluciones
          </Button>
        </div>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 50 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Stronger radial glow behind dashboard */}
        <div className="absolute -inset-12 bg-primary/8 rounded-[40px] blur-[60px] pointer-events-none" />
        <div className="absolute -inset-20 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative glass-card rounded-2xl border border-border/60 overflow-hidden shadow-2xl">
          {/* Chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-muted/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rounded-full bg-primary/30" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-muted/40 text-[10px] text-muted-foreground flex items-center gap-2">
                <Shield size={9} /> app.northdigital.io/dashboard
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex min-h-[380px] lg:min-h-[420px]">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col w-48 border-r border-border/20 p-4 bg-muted/5">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe size={14} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold font-display">North Digital</div>
                  <div className="text-[9px] text-muted-foreground">Panel Principal</div>
                </div>
              </div>
              <nav className="space-y-0.5">
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
                      item.active ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    <item.icon size={13} />
                    {item.label}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main area */}
            <div className="flex-1 p-5 space-y-4 overflow-hidden">
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
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { label: "Ingresos", value: "$128K", change: "+24%" },
                  { label: "Clientes", value: "1,284", change: "+12%" },
                  { label: "Leads", value: "342", change: "+8%" },
                  { label: "Cierre", value: "34%", change: "+2%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-muted/20 border border-border/20 p-3">
                    <div className="text-[9px] text-muted-foreground">{m.label}</div>
                    <div className="text-sm font-bold">{m.value}</div>
                    <div className="text-[9px] font-medium text-primary">
                      <TrendingUp size={9} className="inline mr-0.5" />{m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                <div className="lg:col-span-3 rounded-xl bg-muted/10 border border-border/20 p-4">
                  <div className="text-[11px] font-semibold mb-3">Ingresos Mensuales</div>
                  <div className="flex items-end gap-[3px] h-20">
                    {[35, 45, 30, 55, 48, 65, 58, 72, 68, 82, 75, 90, 85, 78, 92, 88, 95].map((h, i) => (
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
                <div className="lg:col-span-2 rounded-xl bg-muted/10 border border-border/20 p-4">
                  <div className="text-[11px] font-semibold mb-3">Pipeline</div>
                  <div className="space-y-2">
                    {[
                      { label: "Prospectos", pct: 100 },
                      { label: "Calificados", pct: 63 },
                      { label: "Propuesta", pct: 39 },
                      { label: "Cerrados", pct: 24 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-[9px] mb-1">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-bold">{item.pct}%</span>
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

              {/* Bottom */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap size={10} className="text-accent" />
                    <span className="text-[10px] font-semibold">Automatización</span>
                  </div>
                  {["Email Onboarding", "Lead Scoring", "Sync CRM"].map((f) => (
                    <div key={f} className="flex items-center justify-between text-[9px] py-0.5">
                      <span className="text-muted-foreground">{f}</span>
                      <CheckCircle2 size={8} className="text-primary" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="text-[10px] font-semibold mb-2">Actividad</div>
                  {[
                    { t: "Nuevo lead: María L.", time: "2m" },
                    { t: "Pipeline actualizado", time: "15m" },
                    { t: "3 deals cerrados", time: "2h" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-1.5 py-0.5">
                      <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-[9px]">{a.t}</div>
                        <div className="text-[8px] text-muted-foreground">{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-muted/10 border border-border/20 p-3">
                  <div className="text-[10px] font-semibold mb-2">Uptime</div>
                  <div className="flex items-end gap-0.5 h-10 mb-1">
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
                  <div className="flex justify-between">
                    <span className="text-[9px] text-muted-foreground">Status</span>
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
          className="absolute -left-6 top-[25%] glass-card rounded-xl p-3 shadow-lg animate-float-slow hidden lg:block"
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
          className="absolute -right-6 top-[30%] glass-card rounded-xl p-2.5 shadow-lg animate-float-delayed hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <Bell size={12} className="text-accent" />
            <div>
              <div className="text-[9px] font-semibold">Nuevo Lead</div>
              <div className="text-[8px] text-muted-foreground">Empresa Tech S.A.</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
