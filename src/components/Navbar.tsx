import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-ivory/90 backdrop-blur-md border-b border-espresso/10" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => (window.location.hash = "#home")}
        >
          <div className="w-10 h-10 rounded border border-espresso/20 flex items-center justify-center group-hover:bg-espresso group-hover:text-white transition-colors">
            <span className="text-[14px] font-serif font-bold tracking-tighter">L</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-espresso group-hover:text-rose transition-colors">
            LUXE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={closeMenu}
            className="btn-primary text-sm px-6 py-3"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden text-espresso"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-espresso border-t border-espresso/20 py-8 px-6 z-40"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white text-lg font-medium py-3 hover:text-rose transition-colors border-b border-espresso/20 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={closeMenu}
                className="btn-primary text-center text-sm px-6 py-3 mt-4"
              >
                Book Appointment
              </a>
              <div className="mt-8 pt-6 border-t border-espresso/20 flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-espresso/80 hover:text-rose transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium text-sm">WhatsApp: +91 98765 43210</span>
                </a>
                <a
                  href="https://instagram.com/luxebeautysalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-espresso/80 hover:text-rose transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="17.5" x2="19" y2="19" />
                  </svg>
                  <span className="font-medium text-sm">Instagram: @luxebeautysalon</span>
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-espresso/80 hover:text-rose transition-colors"
                >
                  <MapPin size={18} />
                  <span className="font-medium text-sm">Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};