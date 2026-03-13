const Footer = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs font-display">N</span>
          </div>
          <span className="text-sm font-bold font-display">North Digital Solutions</span>
        </div>
        <nav className="flex flex-wrap gap-6">
          {["Soluciones", "Servicios", "Proceso", "Contacto"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © 2026 North Digital Solutions
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
