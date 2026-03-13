import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
        style={{ background: "var(--gradient-cta)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how our solutions can accelerate your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule a Consultation <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <MessageSquare size={16} className="mr-2" /> Contact Our Team
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
