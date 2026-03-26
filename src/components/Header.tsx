import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoNorthDark from "@/assets/logo-north-dark-new.webp";
import logoNorthLight from "@/assets/logo-north-light-new.webp";
import { Button } from "@/components/ui/button";

const solutions = [
  { label: "Software Empresarial", href: "/software" },
  { label: "Cloud Services", href: "/cloud" },
  { label: "Marketing de Crecimiento", href: "/marketing" },
  { label: "CRM para Empresas", href: "/crm-empresas" },
];


const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-[background,border,box-shadow] duration-300 ${
        scrolled ? "glass-header shadow-lg" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={isDark ? logoNorthLight : logoNorthDark} alt="North" className="h-7 w-auto" width={120} height={28} fetchPriority="high" decoding="async" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
          >
            Inicio
          </Link>

          <Link
            to="/acerca"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
          >
            Acerca de
          </Link>

          {/* Soluciones dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setSolOpen(!solOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              Soluciones
              <ChevronDown size={14} className={`transition-transform duration-200 ${solOpen ? "rotate-180" : ""}`} />
            </button>
            {solOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-border bg-card shadow-xl p-2 space-y-0.5">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-border bg-card" />
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setSolOpen(false)}
                    className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
          >
            Blog
          </Link>

          <Link
            to="/contacto"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300 flex items-center ${
              isDark
                ? "bg-gradient-to-r from-primary to-primary/80"
                : "bg-muted/60 border border-border/40"
            }`}
            aria-label="Toggle theme"
          >
            <span className="absolute left-1.5 flex items-center justify-center">
              <Sun size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-40 text-white/60" : "opacity-0"}`} />
            </span>
            <span className="absolute right-1.5 flex items-center justify-center">
              <Moon size={12} className={`transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40 text-foreground/60"}`} />
            </span>
            <span
              className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                isDark ? "translate-x-[30px]" : "translate-x-[3px]"
              }`}
            >
              {isDark ? (
                <Moon size={10} className="text-primary" />
              ) : (
                <Sun size={10} className="text-amber-500" />
              )}
            </span>
          </button>
          <Button variant="gradient" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-50 bg-background border-t border-border overflow-y-auto">
          <div className="p-5 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/acerca" onClick={() => setMobileOpen(false)} className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
              Acerca de
            </Link>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider pt-4 pb-1 font-semibold">Soluciones</p>
            {solutions.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-base text-foreground hover:text-primary transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contacto" onClick={() => setMobileOpen(false)} className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
            <Button variant="gradient" size="sm" className="w-full mt-4" asChild>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3zBYcC4sEwgevqpE4iQ66kD86CbDLcacZwVv1nghaXxdPbtFP3F8Kl3dm8495z0PmBRDVlbLiF" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
