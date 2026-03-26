import { memo, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type RevealState = "measuring" | "hidden" | "animate" | "shown";

interface BlogRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const BlogRevealComponent = ({ children, className = "", delay = 0 }: BlogRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const [state, setState] = useState<RevealState>("measuring");

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const rect = node.getBoundingClientRect();
    const isInitiallyVisible = rect.top < viewportHeight && rect.bottom > 0;

    if (isInitiallyVisible) {
      hasAnimated.current = true;
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setState("animate");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const isHidden = state === "hidden" || state === "measuring";
  const shouldAnimate = state === "animate" && !hasAnimated.current;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={shouldAnimate ? { duration: 0.5, delay, ease: EASE } : undefined}
      onAnimationComplete={() => {
        if (state === "animate") {
          hasAnimated.current = true;
          setState("shown");
        }
      }}
      className={["blog-motion-reveal", className].filter(Boolean).join(" ")}
      style={isHidden ? { opacity: 0, transform: "translate3d(0,20px,0)" } : undefined}
    >
      {children}
    </motion.div>
  );
};

const BlogReveal = memo(BlogRevealComponent);

export default BlogReveal;