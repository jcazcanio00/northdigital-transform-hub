import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "North Digital transformó completamente nuestra operación. El CRM personalizado nos ayudó a cerrar un 40% más de deals.",
    name: "María González",
    role: "CEO, TechVentures",
    avatar: "MG",
  },
  {
    quote: "La migración al cloud fue impecable. Cero downtime y ahora nuestros costos de infraestructura bajaron un 35%.",
    name: "Carlos Mendoza",
    role: "CTO, DataFlow Solutions",
    avatar: "CM",
  },
  {
    quote: "Su estrategia de Google Ads nos generó un ROI de 8x en el primer trimestre. Resultados reales y medibles.",
    name: "Ana Ruiz",
    role: "Marketing Director, ScaleUp",
    avatar: "AR",
  },
  {
    quote: "El dashboard operativo que construyeron nos permite tomar decisiones en tiempo real. Game changer total.",
    name: "Roberto Silva",
    role: "COO, InnovateCo",
    avatar: "RS",
  },
  {
    quote: "Profesionales de primer nivel. Entregaron antes de tiempo y el producto superó nuestras expectativas.",
    name: "Laura Vega",
    role: "Founder, GrowthLab",
    avatar: "LV",
  },
  {
    quote: "Automatizaron procesos que nos tomaban horas. Ahora nuestro equipo se enfoca en lo que realmente importa.",
    name: "Diego Torres",
    role: "VP Operations, CloudBase",
    avatar: "DT",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="glass-card glass-card-hover rounded-2xl p-6 w-[340px] shrink-0 mx-3">
    <div className="relative z-10">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="text-accent fill-accent" />
        ))}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed mb-5 line-clamp-4">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold font-display">{t.name}</p>
          <p className="text-[11px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Testimonios
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 font-display">
          Empresas que <span className="gradient-text">Confían</span> en Nosotros
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Lo que dicen nuestros clientes sobre trabajar con North Digital.
        </p>
      </motion.div>
    </div>

    {/* Marquee container */}
    <div className="relative group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {/* Duplicate for seamless loop */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
