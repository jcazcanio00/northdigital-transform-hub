import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Cloud,
  TrendingUp,
  Lightbulb,
  PenTool,
  Rocket,
  BarChart3,
  Zap,
  Target,
  Database,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.55, delay },
});

/* ─── Counter ─── */
const Counter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(ease * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString("es-MX")}{suffix}
    </span>
  );
};

/* ─── Solutions ─── */
const solutions = [
  {
    icon: Code2,
    title: "Software Empresarial",
    desc: "Plataformas, CRMs y sistemas internos diseñados para automatizar operaciones y escalar tu negocio.",
    href: "/software",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    desc: "Entornos seguros, monitoreados y de alto rendimiento con Google Workspace, hosting y migraciones.",
    href: "/cloud",
  },
  {
    icon: TrendingUp,
    title: "Marketing de Crecimiento",
    desc: "SEO, Google Ads y analítica avanzada para generar demanda cualificada y escalar ingresos.",
    href: "/marketing",
  },
];

/* ─── Process ─── */
const process = [
  { icon: Lightbulb, title: "Entendimiento estratégico", desc: "Analizamos tu negocio, objetivos y entorno competitivo para definir prioridades claras." },
  { icon: PenTool, title: "Diseño de solución", desc: "Arquitectura técnica, flujos y prototipos alineados a resultados medibles." },
  { icon: Rocket, title: "Implementación", desc: "Desarrollo ágil con entregas incrementales, pruebas continuas y comunicación transparente." },
  { icon: BarChart3, title: "Escalamiento", desc: "Optimización continua, soporte dedicado y evolución basada en datos reales." },
];

/* ─── Metrics ─── */
const metrics = [
  { value: 8, suffix: "+", label: "Años de experiencia", prefix: "" },
  { value: 8, suffix: "M+", label: "Pesos gestionados en campañas", prefix: "$" },
  { value: 24, suffix: "M+", label: "Pesos generados para clientes", prefix: "$" },
];

const Acerca = () => (
  <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
    <Header />

    {/* ═══ HERO ═══ */}
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/6 blur-[140px] pointer-events-none" />
      {/* Grid dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl text-center">
        <motion.span {...fade()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Acerca de North Digital
        </motion.span>

        <motion.h1 {...fade(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
          Construimos soluciones digitales que hacen{" "}
          <span className="gradient-text">crecer empresas</span>
        </motion.h1>

        <motion.p {...fade(0.1)} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Nos especializamos en software empresarial, infraestructura cloud y estrategias de crecimiento digital para empresas que necesitan tecnología real, no promesas.
        </motion.p>

        <motion.div {...fade(0.15)}>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/contacto">
              Hablar con un especialista <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ═══ NUESTRA HISTORIA ═══ */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fade()}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
              Nuestra Historia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-6">
              De agencia digital a empresa de{" "}
              <span className="gradient-text">tecnología</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                North nació como una agencia de marketing digital y desarrollo web, ayudando a empresas a construir su presencia en línea y generar sus primeros clientes digitales.
              </p>
              <p>
                Con el tiempo, las necesidades de nuestros clientes evolucionaron. Ya no bastaba con una página web o una campaña de ads — necesitaban <strong className="text-foreground">sistemas internos, infraestructura cloud segura y estrategias de crecimiento basadas en datos.</strong>
              </p>
              <p>
                Esa demanda nos llevó a evolucionar. Hoy somos una empresa de tecnología que combina desarrollo de software, infraestructura cloud y growth marketing para ayudar a empresas a operar mejor, crecer más rápido y tomar decisiones inteligentes.
              </p>
            </div>
          </motion.div>

          <motion.div {...fade(0.15)} className="relative">
            <div className="glass-card rounded-2xl p-8 border-border/40 space-y-6">
              {[
                { year: "2018", text: "Fundación como agencia de marketing digital y desarrollo web." },
                { year: "2020", text: "Primeros proyectos de software empresarial y CRMs internos." },
                { year: "2022", text: "Expansión hacia infraestructura cloud y Google Workspace." },
                { year: "2024", text: "Consolidación como empresa de tecnología y crecimiento digital." },
              ].map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xs font-bold text-primary font-display shrink-0">
                      {item.year}
                    </span>
                    {i < 3 && <div className="w-px flex-1 bg-border/60 mt-2" />}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2.5">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-[40px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══ QUÉ HACEMOS ═══ */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Qué <span className="gradient-text">hacemos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div key={s.title} {...fade(i * 0.08)}>
              <Link
                to={s.href}
                className="group glass-card rounded-2xl p-7 border-border/40 block h-full hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver más <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ RESULTADOS ═══ */}
    <section className="py-24 relative overflow-hidden" style={{ background: "hsl(220 60% 8%)" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-5">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Números que respaldan nuestro trabajo
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fade(i * 0.1)}
              className="text-center glass-card rounded-2xl p-8 border-white/10 bg-white/[0.03]"
            >
              <p className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-2">
                <Counter end={m.value} suffix={m.suffix} prefix={m.prefix} />
              </p>
              <p className="text-sm text-white/50">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ PROCESO ═══ */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Nuestro <span className="gradient-text">proceso</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal */}
          <div className="hidden md:grid grid-cols-4 gap-0 relative">
            {/* Connection line */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {process.map((step, i) => (
              <motion.div key={step.title} {...fade(i * 0.1)} className="text-center relative px-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative z-10 border-4 border-background">
                  <step.icon size={22} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1 block">Paso {i + 1}</span>
                <h3 className="text-sm font-bold font-display mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-6">
            {process.map((step, i) => (
              <motion.div key={step.title} {...fade(i * 0.08)} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon size={20} className="text-primary" />
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-border/60 mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Paso {i + 1}</span>
                  <h3 className="text-sm font-bold font-display mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══ FILOSOFÍA ═══ */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10 text-center">
        <motion.div {...fade()}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-5">
            Filosofía
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-6">
            Tecnología + Datos + <span className="gradient-text">Estrategia</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Creemos que el crecimiento real no viene de una sola táctica — viene de combinar tecnología sólida, datos accionables y una estrategia clara de negocio. Cada solución que construimos integra estos tres pilares para generar impacto medible y sostenible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Database, label: "Datos accionables" },
              { icon: Zap, label: "Tecnología sólida" },
              { icon: Target, label: "Estrategia clara" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2.5 glass-card rounded-xl px-5 py-3 border-border/40">
                <p.icon size={18} className="text-primary" />
                <span className="text-sm font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ FINAL CTA ═══ */}
    <section className="py-28 relative overflow-hidden" style={{ background: "hsl(220 60% 8%)" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
        <motion.h2 {...fade()} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-[1.15] mb-8">
          Construyamos la infraestructura digital que tu empresa{" "}
          <span className="gradient-text">necesita</span>
        </motion.h2>
        <motion.div {...fade(0.1)} className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/contacto">
              Hablar con un especialista <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
          <Button size="lg" className="border-white/20 text-white hover:bg-white/10 bg-transparent border" asChild>
            <a href="https://wa.me/529983513337" target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Acerca;
