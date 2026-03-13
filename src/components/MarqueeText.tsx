const words = [
  "AUTOMATION", "CLOUD", "SYSTEMS", "AI", "DATA", "INFRASTRUCTURE",
  "DEVOPS", "ANALYTICS", "SECURITY", "INTEGRATIONS",
];

const MarqueeText = () => (
  <div className="relative py-4 overflow-hidden select-none pointer-events-none border-y border-border/20 bg-muted/20" style={{ height: 90 }}>
    <div className="flex whitespace-nowrap animate-marquee-slow items-center h-full">
      {[...words, ...words, ...words].map((w, i) => (
        <span
          key={i}
          className="text-[3rem] sm:text-[3.5rem] font-extrabold font-display text-foreground/[0.04] mx-2 leading-none"
        >
          {w}
          <span className="text-primary/[0.06] mx-3">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeText;
