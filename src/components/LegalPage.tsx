import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: Section[];
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.45, delay },
});

const LegalPage = ({ title, subtitle, lastUpdated, sections }: LegalPageProps) => (
  <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
    <Header />

    {/* Hero */}
    <section className="pt-32 pb-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
        <motion.div {...fade()} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText size={20} className="text-primary" />
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Documento Legal</span>
        </motion.div>

        <motion.h1 {...fade(0.05)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-3">
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p {...fade(0.1)} className="text-muted-foreground text-lg leading-relaxed mb-4">
            {subtitle}
          </motion.p>
        )}

        <motion.p {...fade(0.15)} className="text-xs text-muted-foreground/70">
          Última actualización: {lastUpdated}
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="space-y-0">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              {...fade(0.05)}
              className="py-8 border-b border-border/40 last:border-b-0"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary font-display">
                  {i + 1}
                </span>
                <h2 className="text-lg sm:text-xl font-bold font-display pt-0.5">
                  {section.title}
                </h2>
              </div>
              <div className="pl-12 text-[15px] text-muted-foreground leading-[1.8] space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary/80 [&_a]:transition-colors">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default LegalPage;
