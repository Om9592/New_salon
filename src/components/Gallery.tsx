import { GALLERY } from "../data/gallery";
import { ScrollReveal } from "./ScrollReveal";
import { Camera } from "lucide-react";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-espresso/20 flex items-center justify-center text-espresso">
                <Camera size={20} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-espresso leading-tight">
                Our Work
              </h2>
            </div>
            <p className="text-espresso/60 max-w-md">
              A curated look at transformations, bridal looks, and the artistry behind Luxe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href="#booking"
              className="btn-primary px-6 py-3 text-sm"
            >
              Book Appointment
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 100} className="group relative overflow-hidden rounded-none border border-beige bg-espresso aspect-[4/5]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/40 transition-opacity duration-500 group-hover:bg-espresso/20" />
              <div className="absolute bottom-6 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <span className="text-champagne text-xs font-sans font-medium uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};