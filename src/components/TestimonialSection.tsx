import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  { quote: "North Digital transformó nuestra operación. El CRM que desarrollaron nos dio visibilidad total del pipeline.", name: "Carlos Méndez", role: "CEO, TechCorp", avatar: "CM" },
  { quote: "La migración al cloud fue impecable. Cero downtime y ahora tenemos una infraestructura de primer nivel.", name: "Ana Rodríguez", role: "CTO, DataFlow", avatar: "AR" },
  { quote: "Nuestro tráfico orgánico creció 200% en 6 meses gracias a su estrategia de marketing digital.", name: "Luis García", role: "CMO, ScaleUp", avatar: "LG" },
  { quote: "El dashboard de analíticas que nos construyeron es increíble. Decisiones basadas en datos reales.", name: "María Torres", role: "VP Ops, InnovateCo", avatar: "MT" },
  { quote: "Automatizamos el 80% de nuestros procesos manuales. El ROI fue evidente desde el primer mes.", name: "Jorge Ramírez", role: "Director, GrowthLab", avatar: "JR" },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Testimonios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Premium dark gradient card */}
          <div className="relative rounded-3xl p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-card via-muted/60 to-card border border-border/40">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <Quote size={32} className="text-primary/20 mb-6" />

              <div className="min-h-[100px] flex items-center">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg lg:text-xl leading-relaxed text-foreground/90 font-medium"
                >
                  "{t.quote}"
                </motion.p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold font-display">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </motion.div>

                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
