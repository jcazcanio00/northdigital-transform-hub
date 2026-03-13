import { motion } from "framer-motion";

const companies = ["TechCorp", "DataFlow", "CloudBase", "ScaleUp", "InnovateCo", "GrowthLab"];

const TrustSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[10px] text-muted-foreground mb-10 uppercase tracking-[0.3em] font-medium"
      >
        Empresas que Confían en Nosotros
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="text-lg font-bold font-display text-muted-foreground/25 select-none hover:text-primary/40 transition-all duration-500 cursor-default"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
