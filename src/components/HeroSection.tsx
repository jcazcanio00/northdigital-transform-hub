import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-mockup.png";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            <Layers size={14} className="text-primary" />
            Digital Transformation Partner
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-balance">
            Digital Systems, Cloud Infrastructure and{" "}
            <span className="gradient-text">Growth Strategies</span> for Modern Businesses.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            We help companies automate operations, scale their infrastructure and generate growth through technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
              Start a Project <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Solutions
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glow-primary animate-float">
            <img
              src={dashboardImg}
              alt="Modern business dashboard with CRM pipeline and analytics"
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
