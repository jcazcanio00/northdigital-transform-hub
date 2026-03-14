import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "North Digital transformó nuestra infraestructura tecnológica. El equipo es excepcional.", name: "Carlos Méndez", role: "CTO · Fintech Solutions", avatar: "CM" },
  { quote: "La migración al cloud fue impecable. Cero downtime y ahora tenemos una infraestructura de primer nivel.", name: "Ana Rodríguez", role: "CTO · DataFlow", avatar: "AR" },
  { quote: "Nuestro tráfico orgánico creció 200% en 6 meses gracias a su estrategia de marketing digital.", name: "Luis García", role: "CMO · ScaleUp", avatar: "LG" },
  { quote: "El dashboard de analíticas que nos construyeron es increíble. Decisiones basadas en datos reales.", name: "María Torres", role: "VP Ops · InnovateCo", avatar: "MT" },
  { quote: "Automatizamos el 80% de nuestros procesos manuales. El ROI fue evidente desde el primer mes.", name: "Jorge Ramírez", role: "Director · GrowthLab", avatar: "JR" },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-[340px] shrink-0 rounded-2xl p-6 mx-3 border border-white/10 bg-gradient-to-br from-[hsl(250,35%,14%)] to-[hsl(240,30%,10%)] shadow-lg hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_0_30px_-8px_hsl(var(--brand-purple)/0.3)] hover:border-brand-purple/20">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="text-primary fill-primary" />
      ))}
    </div>
    <Quote size={16} className="text-primary/30 mb-2" />
    <p className="text-sm text-white/70 leading-relaxed mb-5">{t.quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
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
    {/* Dark blue gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,30%,5%)] via-[hsl(260,35%,8%)] to-[hsl(240,30%,4%)]" />
    <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-brand-purple/8 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
          Testimonios
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display text-white">
          Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
        </h2>
      </motion.div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(240,30%,5%)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(240,30%,4%)] to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
