const footerLinks = {
  Empresa: ["Nosotros", "Carreras", "Blog", "Contacto"],
  Soluciones: ["Sistemas", "Cloud", "Marketing"],
  Recursos: ["Casos de Éxito", "Docs", "Soporte", "FAQ"],
  Contacto: ["hola@northdigital.com", "+1 (555) 123-4567"],
};

const Footer = () => (
  <footer className="relative border-t border-border/30 py-14">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        <div className="lg:col-span-2">
          <span className="text-base font-bold font-display">
            <span className="gradient-text">North</span> Digital
          </span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Transformación digital a través de sistemas, cloud y marketing de crecimiento.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="font-semibold text-xs mb-3 font-display">{title}</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-divider mb-6" />
      <div className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} North Digital Solutions. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;