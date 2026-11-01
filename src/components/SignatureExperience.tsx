import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const SignatureExperience: React.FC = () => {
  return (
    <section
      id="signature"
      className="relative overflow-hidden bg-espresso"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-96d43a19560f?w=1920&q=80"
          alt="Luxury salon experience"
          className="w-full h-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso/30" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 text-center">
        <ScrollReveal className="mb-8">
          <span className="text-champagne text-xs font-sans font-medium tracking-widest uppercase block mb-4">
            The Luxe Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Your Moment.<br />Your Glow. Your Style.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg text-beige/80 max-w-xl mx-auto leading-relaxed mb-12 font-light">
            Step into a world where time slows down and beauty takes center stage. Your appointment at Luxe is more than a service — it's a ritual of care, craftsmanship, and confidence, designed entirely around you.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-espresso transition-all duration-300"
          >
            Book Your Moment <ArrowRight size={18} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};