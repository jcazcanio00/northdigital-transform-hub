const footerLinks = {
  Empresa: ["Nosotros", "Carreras", "Blog", "Contacto"],
  Soluciones: ["Sistemas Empresariales", "Infraestructura Cloud", "Marketing de Crecimiento"],
  Recursos: ["Casos de Éxito", "Documentación", "Soporte", "Preguntas Frecuentes"],
  Contacto: ["hola@northdigital.com", "+1 (555) 123-4567"],
};

const Footer = () => (
  <footer className="relative border-t border-border/50 py-16 noise-overlay">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div className="lg:col-span-2">
          <span className="text-lg font-bold">
            <span className="gradient-text">North</span> Digital Solutions
          </span>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
            Transformación digital a través de sistemas, infraestructura cloud y marketing de crecimiento.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="font-semibold text-sm mb-4 tracking-tight">{title}</p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-divider mb-8" />
      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} North Digital Solutions. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
