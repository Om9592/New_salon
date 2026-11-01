

const FOOTER_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const SERVICES_LINKS = [
  "Haircut & Styling",
  "Hair Colour & Highlights",
  "Hair Spa & Treatment",
  "Bridal Makeup",
  "Party Makeup",
  "Facial & Skincare",
  "Manicure & Pedicure",
  "Nail Art",
];

const CONTACT_LINKS = [
  { label: "Phone", value: "+91 98765 43210" },
  { label: "WhatsApp", value: "+91 98765 43210" },
  { label: "Email", value: "hello@luxebeautysalon.com" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-white border-t border-espresso/20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded border border-champagne/30 flex items-center justify-center text-white text-[12px] font-serif font-bold">
                L
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">LUXE</span>
            </div>
            <p className="text-beige/60 text-sm leading-relaxed max-w-xs">
              A sanctuary of beauty, confidence, and creativity. Where every visit is a moment crafted just for you.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-beige/50 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-beige/50 text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {CONTACT_LINKS.map((item) => (
                <li key={item.label}>
                  <div className="flex items-start gap-3">
                    <span className="text-champagne text-sm shrink-0">{item.label}</span>
                    <span className="text-beige/50 text-sm">
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
              <li className="mt-4 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne shrink-0">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="17.5" x2="19" y2="19" />
                </svg>
                <a
                  href="https://instagram.com/luxebeautysalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige/50 text-sm hover:text-white transition-colors"
                >
                  @luxebeautysalon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-espresso/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-beige/40 text-xs">
            © {new Date().getFullYear()} Luxe Beauty Salon. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/luxebeautysalon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-beige/30 flex items-center justify-center text-beige/50 hover:text-white hover:border-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="17.5" x2="19" y2="19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};