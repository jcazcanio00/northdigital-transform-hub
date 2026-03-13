import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-display">N</span>
            </div>
            <span className="text-base font-bold font-display">North Digital</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Automatización, infraestructura cloud y estrategias de crecimiento para empresas modernas.
          </p>
          <div className="flex gap-3">
            {[Globe, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-muted/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Soluciones */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Soluciones</h4>
          <ul className="space-y-2.5">
            {["Sistemas Empresariales", "Infraestructura Cloud", "Marketing Digital", "Automatización"].map((l) => (
              <li key={l}>
                <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Empresa</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Sobre Nosotros", href: "#about" },
              { label: "Proceso", href: "#process" },
              { label: "Testimonios", href: "#" },
              { label: "Contacto", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-bold font-display mb-4">Contacto</h4>
          <ul className="space-y-3">
            {[
              { icon: Mail, text: "info@northdigital.io" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "Ciudad de México, MX" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <item.icon size={14} className="text-primary shrink-0" />
                {item.text}
              </li>
            ))}
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
          {["Privacidad", "Términos"].map((l) => (
            <a key={l} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
