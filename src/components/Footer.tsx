import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/northmkt?mibextid=LQQJ4d", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/northmkt?igsh=MWlsNHVlZWp2ZXVxNA", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/north-marketing/", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="border-t border-border/30 bg-card">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-display">N</span>
            </div>
            <span className="text-base font-bold font-display">North Digital</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Software empresarial, infraestructura cloud y marketing de crecimiento para empresas modernas.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Soluciones */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Soluciones</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Software Empresarial", href: "/software" },
              { label: "Infraestructura Cloud", href: "/cloud" },
              { label: "Marketing de Crecimiento", href: "/marketing" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Empresa</h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Acerca de</Link>
            </li>
            <li>
              <a href="/#process" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Proceso</a>
            </li>
            <li>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@northmkt.com.mx" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary shrink-0" />
                info@northmkt.com.mx
              </a>
            </li>
            <li>
              <a href="tel:+529983513337" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} className="text-primary shrink-0" />
                +52 998 351 3337
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © 2026 North Digital Solutions. Todos los derechos reservados.
        </p>
        <div className="flex gap-5">
          <Link to="/terminos" className="text-xs text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link>
          <Link to="/privacidad" className="text-xs text-muted-foreground hover:text-primary transition-colors">Aviso de Privacidad</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
