import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Soluciones", href: "#solutions" },
  { label: "Sistemas", href: "#systems" },
  { label: "Cloud", href: "#cloud" },
  { label: "Crecimiento", href: "#growth" },
  { label: "Contacto", href: "#contact" },
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
        scrolled ? "glass-card border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight font-display relative z-10">
          <span className="gradient-text">North</span>{" "}
          <span className="text-foreground">Digital</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary/60"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 relative z-10">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors duration-200"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button variant="gradient" size="sm" className="hidden sm:inline-flex text-xs">
            Agendar Consulta
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
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
              Agendar Consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;