const footerLinks = {
  Company: ["About", "Careers", "Blog", "Contact"],
  Solutions: ["Business Systems", "Cloud Infrastructure", "Growth Marketing"],
  Resources: ["Case Studies", "Documentation", "Support", "FAQ"],
  Contact: ["hello@northdigital.com", "+1 (555) 123-4567"],
};

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div className="lg:col-span-2">
          <span className="text-xl font-bold">
            <span className="gradient-text">North</span> Digital Solutions
          </span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Digital transformation through systems, cloud infrastructure and growth marketing.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="font-semibold text-sm mb-4">{title}</p>
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
      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} North Digital Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
