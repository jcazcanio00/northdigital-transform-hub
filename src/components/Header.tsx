import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Systems", href: "#systems" },
  { label: "Cloud", href: "#cloud" },
  { label: "Growth", href: "#growth" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight relative z-10">
          <span className="gradient-text">North</span>{" "}
          <span className="text-foreground">Digital Solutions</span>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 rounded-lg hover:bg-secondary/60 relative z-10"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-secondary/80 transition-all duration-200 border border-transparent hover:border-border"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button variant="gradient" size="sm" className="hidden sm:inline-flex">
            Schedule a Consultation
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-border/50">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60"
              >
                {l.label}
              </a>
            ))}
            <Button variant="gradient" size="sm" className="mt-3">
              Schedule a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
