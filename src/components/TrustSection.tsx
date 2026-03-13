import { motion } from "framer-motion";

const companies = [
  "TechCorp", "DataFlow", "CloudBase", "ScaleUp", "InnovateCo", "GrowthLab"
];

const TrustSection = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="section-divider" />
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-muted-foreground mb-12 uppercase tracking-[0.25em] font-medium"
      >
        Empresas que Confían en Nosotros
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-xl font-bold text-muted-foreground/25 select-none hover:text-primary/50 transition-all duration-500 cursor-default hover:scale-105"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
    <div className="section-divider" />
  </section>
);

export default TrustSection;
