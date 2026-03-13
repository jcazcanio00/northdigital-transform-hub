const words = [
  "AUTOMATION", "SYSTEMS", "CLOUD", "DATA", "MACHINE LEARNING",
  "ANALYTICS", "INTEGRATIONS", "AI", "SECURITY", "DEVOPS",
];

const MarqueeText = () => (
  <div className="relative py-8 overflow-hidden select-none pointer-events-none border-y border-border/30">
    <div className="flex whitespace-nowrap animate-marquee-slow">
      {[...words, ...words, ...words].map((w, i) => (
        <span
          key={i}
          className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-extrabold font-display text-foreground/[0.07] mx-4 leading-none"
        >
          {w}
          <span className="text-primary/10 mx-6">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeText;
