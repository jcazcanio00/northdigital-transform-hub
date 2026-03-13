import { motion } from "framer-motion";
import { Cpu, Cloud, BarChart3 } from "lucide-react";

const AboutSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
            Sobre Nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-display leading-tight">
            Socio en{" "}
            <span className="gradient-text">Transformación Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
            Ayudamos a las empresas a modernizar sus operaciones a través de sistemas inteligentes,
            infraestructura cloud y automatización de procesos para impulsar el crecimiento sostenible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "Sistemas Inteligentes", desc: "Automatización y software a medida para operaciones eficientes." },
            { icon: Cloud, title: "Cloud Empresarial", desc: "Infraestructura segura y escalable en la nube." },
            { icon: BarChart3, title: "Crecimiento Medible", desc: "Estrategias basadas en datos y analítica avanzada." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-sm font-bold font-display mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
