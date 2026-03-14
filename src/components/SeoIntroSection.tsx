import { motion } from "framer-motion";

const SeoIntroSection = () => (
  <section className="py-12 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-muted-foreground leading-relaxed text-base">
          En <strong>North Digital</strong>, somos una <strong>agencia de marketing digital</strong> enfocada en impulsar el crecimiento de empresas a través de tecnología, datos y estrategia. Como <strong>agencia digital en Cancún</strong>, ofrecemos soluciones de software empresarial, infraestructura cloud y marketing de crecimiento para negocios que buscan escalar. También operamos como <strong>agencia digital en Playa del Carmen</strong> y <strong>agencia digital en Tulum</strong>, brindando servicios de <strong>marketing digital para empresas</strong> en toda la Riviera Maya y Quintana Roo.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SeoIntroSection;
