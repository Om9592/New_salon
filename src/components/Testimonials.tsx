import { TESTIMONIALS } from "../data/testimonials";
import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal className="mb-16 text-center">
          <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-8 leading-tight">
            Trusted by Those Who<br />Know Beauty Best.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <ScrollReveal key={testimonial.id} delay={idx * 100} className="group relative p-8 bg-white border border-beige rounded-none hover:border-rose transition-colors">
              <div className="absolute top-6 left-6 text-champagne/30 text-4xl font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                "
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-beige"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-espresso">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-espresso/60 font-light">
                    {testimonial.role} · {testimonial.service}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={star <= testimonial.rating ? "text-champagne fill-champagne" : "text-beige"}
                  />
                ))}
              </div>
              <p className="text-espresso/80 leading-relaxed text-sm font-light italic">
                "{testimonial.content}"
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};