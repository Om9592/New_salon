import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Configurable WhatsApp number
const WHATSAPP_NUMBER = "919876543210";

const SERVICES = [
  "Haircut & Styling",
  "Hair Colour & Highlights",
  "Hair Spa & Treatment",
  "Bridal Makeup",
  "Party Makeup",
  "Facial & Skincare",
  "Manicure & Pedicure",
  "Nail Art",
];

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
*New Appointment Request - Luxe Beauty Salon*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Date:* ${formData.date}
*Time:* ${formData.time}

Please confirm availability at your earliest convenience.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="bg-espresso py-24 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-rose flex items-center justify-center mx-auto mb-8">
            <CheckIcon size={32} strokeWidth={3} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Request Sent!
          </h2>
          <p className="text-beige/80 mb-8">
            Your appointment request has been opened in WhatsApp. Our team will confirm shortly.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-espresso transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="lg:pr-12">
            <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
              Book Your Visit
            </span>
            <h2 className="text-4xl font-serif font-bold text-espresso mb-6 leading-tight">
                            Reserve Your Appointment
            </h2>
            <p className="text-lg text-espresso/80 leading-relaxed mb-10">
              Ready to experience Luxe? Fill in your details and we'll send your request directly to our WhatsApp for confirmation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded border border-beige flex items-center justify-center text-rose">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-serif font-bold text-espresso text-sm">WhatsApp</p>
                  <p className="text-espresso/60 text-xs font-light">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded border border-beige flex items-center justify-center text-rose">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-serif font-bold text-espresso text-sm">Email</p>
                  <p className="text-espresso/60 text-xs font-light">hello@luxebeautysalon.com</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-ivory border border-beige">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-espresso/80 uppercase tracking-wider">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-beige bg-white text-espresso focus:border-rose focus:ring-0 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-espresso/80 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-beige bg-white text-espresso focus:border-rose focus:ring-0 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-espresso/80 uppercase tracking-wider">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-beige bg-white text-espresso focus:border-rose focus:ring-0 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Choose a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-espresso/80 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-beige bg-white text-espresso focus:border-rose focus:ring-0 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-espresso/80 uppercase tracking-wider">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-beige bg-white text-espresso focus:border-rose focus:ring-0 outline-none transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-center py-4"
              >
                {isSubmitting ? "Sending via WhatsApp..." : "Send via WhatsApp"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({ size = 24, strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);