import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InlineCtaProps {
  headline: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
}

const InlineCta = ({ headline, primaryLabel, secondaryLabel, primaryHref = "#contact", secondaryHref = "#solutions" }: InlineCtaProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="container mx-auto px-4 lg:px-8 py-6"
  >
    <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-[20%] w-[300px] h-[200px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold font-display">{headline}</h3>
      </div>

      <div className="flex flex-wrap gap-3 relative z-10 shrink-0">
        <Button variant="gradient" size="sm" asChild>
          <a href={primaryHref}>
            {primaryLabel} <ArrowRight size={14} className="ml-1" />
          </a>
        </Button>
        <Button variant="gradient-outline" size="sm" asChild>
          <a href={secondaryHref}>{secondaryLabel}</a>
        </Button>
      </div>
    </div>
  </motion.div>
);

export default InlineCta;
