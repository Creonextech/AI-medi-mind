export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Roadmap"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Disclaimer", "Compliance"],
    },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">MediMind AI</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Making healthcare accessible through artificial intelligence.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-primary hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">© 2025 MediMind AI. All rights reserved.</p>
            <p className="text-xs text-foreground/40 text-center sm:text-right">
              Disclaimer: MediMind AI is for informational purposes only and should not replace professional medical
              advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
