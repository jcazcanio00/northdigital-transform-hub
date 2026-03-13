const words = [
  "AUTOMATION", "SYSTEMS", "CLOUD", "DATA", "MACHINE LEARNING",
  "ANALYTICS", "INTEGRATIONS", "AI", "SECURITY", "DEVOPS",
];

const MarqueeText = () => (
  <div className="relative py-10 overflow-hidden select-none pointer-events-none">
    <div className="flex whitespace-nowrap animate-marquee-slow">
      {[...words, ...words, ...words].map((w, i) => (
        <span
          key={i}
          className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold font-display text-foreground/[0.03] dark:text-foreground/[0.04] mx-4 leading-none"
        >
          {w}
          <span className="text-primary/10 mx-6">•</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeText;
