const footerLinks = [
  { label: "Services", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Process", href: "#process" },
  { label: "About", href: "#why-us" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#hero" className="text-xl font-display font-bold text-foreground">
              Indieverse Labs
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Enterprise-grade integrated LLM agents, built for real workflows and real data.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              contact@indieverse.studio
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Indieverse Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
