import { motion } from "framer-motion";

const companies = [
  "TechCorp", "DataFlow", "CloudBase", "ScaleUp", "InnovateCo", "GrowthLab"
];

const TrustSection = () => (
  <section className="py-16 border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest"
      >
        Trusted by Modern Businesses
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-xl font-bold text-muted-foreground/40 select-none"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
