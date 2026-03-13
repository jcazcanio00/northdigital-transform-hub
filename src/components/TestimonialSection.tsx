import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "North Digital transformó nuestra operación. El CRM que desarrollaron nos dio visibilidad total del pipeline.", name: "Carlos Méndez", role: "CEO, TechCorp", avatar: "CM" },
  { quote: "La migración al cloud fue impecable. Cero downtime y ahora tenemos una infraestructura de primer nivel.", name: "Ana Rodríguez", role: "CTO, DataFlow", avatar: "AR" },
  { quote: "Nuestro tráfico orgánico creció 200% en 6 meses gracias a su estrategia de marketing digital.", name: "Luis García", role: "CMO, ScaleUp", avatar: "LG" },
  { quote: "El dashboard de analíticas que nos construyeron es increíble. Decisiones basadas en datos reales.", name: "María Torres", role: "VP Ops, InnovateCo", avatar: "MT" },
  { quote: "Automatizamos el 80% de nuestros procesos manuales. El ROI fue evidente desde el primer mes.", name: "Jorge Ramírez", role: "Director, GrowthLab", avatar: "JR" },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-[340px] shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 mx-3">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="text-primary fill-primary" />
      ))}
    </div>
    <Quote size={16} className="text-primary/30 mb-2" />
    <p className="text-sm text-white/80 leading-relaxed mb-4">{t.quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
        {t.avatar}
      </div>
      <div>
        <div className="text-xs font-semibold text-white">{t.name}</div>
        <div className="text-[10px] text-white/50">{t.role}</div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[var(--gradient-cta)]" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">Testimonios</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display text-white">
          Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
        </h2>
      </motion.div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(222_47%_6%)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(222_47%_6%)] to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
