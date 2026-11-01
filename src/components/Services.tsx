import { SERVICES } from "../data/services";
import { ArrowRight, Scissors, Droplets, Palette, Sparkles, User, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  hair: Scissors,
  colour: Palette,
  treatment: Droplets,
  makeup: Sparkles,
  skincare: User,
  nails: Award,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-rose/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal className="mb-16 text-center">
          <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6 leading-tight">
            Crafted for You.<br />Executed with Precision.
          </h2>
          <p className="text-lg text-espresso/80 max-w-2xl mx-auto leading-relaxed">
            A curated menu of beauty services designed to elevate your everyday.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.category] || Sparkles;
            const isFeatured = idx === 0 || idx === 3;
            return (
              <ScrollReveal
                key={service.id}
                delay={idx * 80}
                className={`group relative overflow-hidden rounded-none border border-beige bg-white transition-all duration-500 hover:border-rose hover:shadow-2xl hover:-translate-y-2 ${isFeatured ? "lg:col-span-2" : ""}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 z-10">
                    <Icon className="w-6 h-6 text-white drop-shadow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-espresso mb-2">
                    {service.name}
                  </h3>
                  <p className="text-espresso/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-lg font-bold text-espresso">
                      {service.price}
                    </span>
                    <span className="text-xs text-champagne font-sans font-medium uppercase tracking-wider">
                      {service.duration}
                    </span>
                  </div>
                  <button
                    className="w-full py-3 border border-espresso text-espresso text-sm font-medium hover:bg-espresso hover:text-white transition-all duration-300"
                  >
                    Book Now <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};