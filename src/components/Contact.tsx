import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

// Configurable contact info
const CONTACT_INFO = {
  address: "Luxe Beauty Salon, 42 Connaught Place, New Delhi, Delhi 110001",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@luxebeautysalon.com",
  instagram: "@luxebeautysalon",
  hours: {
    weekdays: "Tue - Sat: 10:00 AM – 8:00 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM",
    monday: "Monday: Closed",
  },
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl font-serif font-bold text-espresso mb-8 leading-tight">
              Visit Our Salon
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-espresso shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso mb-1">Visit Us</h4>
                  <p className="text-espresso/70 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-espresso shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso mb-1">Call Us</h4>
                  <p className="text-espresso/70 text-sm leading-relaxed">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-espresso shrink-0">
                  <Phone size={20} className="text-rose" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso mb-1">WhatsApp</h4>
                  <p className="text-espresso/70 text-sm leading-relaxed">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-espresso shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso mb-1">Opening Hours</h4>
                  <div className="text-espresso/70 text-sm leading-relaxed space-y-1">
                    <p>{CONTACT_INFO.hours.weekdays}</p>
                    <p>{CONTACT_INFO.hours.sunday}</p>
                    <p>{CONTACT_INFO.hours.monday}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-espresso shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="17.5" x2="19" y2="19" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso mb-1">Follow Us</h4>
                  <p className="text-espresso/70 text-sm leading-relaxed">{CONTACT_INFO.instagram}</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Luxe Beauty Salon, Connaught Place, New Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-espresso text-espresso px-8 py-4 text-sm font-medium hover:bg-espresso hover:text-white transition-all duration-300"
            >
              Get Directions <ArrowRight size={16} />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative aspect-[4/3] rounded-none border border-beige overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.138234409146!2d77.21979211457594!3d28.630788282967645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d041d3747fe85%3A0x506a37a831e0f994!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location on Google Maps"
              />
              <div className="absolute inset-0 bg-espresso/10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};