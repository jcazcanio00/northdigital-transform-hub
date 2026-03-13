import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden noise-overlay"
        style={{ background: "var(--gradient-cta)" }}
      >
        {/* Glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-primary-foreground tracking-tight leading-tight">
            Ready to Transform Your Business<br className="hidden sm:inline" /> with Technology?
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how our solutions can accelerate your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Schedule a Consultation <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="gradient-outline" className="border-primary-foreground/15 text-primary-foreground hover:border-primary-foreground/30">
              <MessageSquare size={16} className="mr-1" /> Contact Our Team
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
