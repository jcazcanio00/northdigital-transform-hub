const words = [
  "AUTOMATION", "CLOUD", "SYSTEMS", "AI", "DATA", "INFRASTRUCTURE",
  "DEVOPS", "ANALYTICS", "SECURITY", "INTEGRATIONS",
];

const MarqueeText = () => (
  <div className="relative py-6 overflow-hidden select-none pointer-events-none border-y border-border/20 bg-muted/20">
    <div className="flex whitespace-nowrap animate-marquee-slow">
      {[...words, ...words, ...words].map((w, i) => (
        <span
          key={i}
          className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-extrabold font-display text-foreground/[0.04] mx-2 leading-none"
        >
          {w}
          <span className="text-primary/[0.06] mx-4">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeText;
