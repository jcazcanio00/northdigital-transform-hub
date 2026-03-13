import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Rocket, Heart, Headphones, Briefcase } from "lucide-react";

const stats = [
  { icon: Rocket, value: 150, suffix: "+", label: "Proyectos Implementados" },
  { icon: Heart, value: 98, suffix: "%", label: "Satisfacción del Cliente" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Soporte Técnico" },
  { icon: Briefcase, value: 40, suffix: "+", label: "Empresas Atendidas" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="section-divider" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">En Números</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Resultados que <span className="gradient-text">Respaldan</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 80 }}
            className="glass-card rounded-2xl p-6 lg:p-8 text-center group cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.3)] hover:border-primary/25"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)] transition-all duration-500">
              <s.icon size={22} className="text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display mb-2 gradient-text">
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="section-divider mt-8" />
  </section>
);

export default StatsSection;
