import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-champagne/20 blur-xl rounded-2xl transition-all group-hover:scale-105 duration-500" />
              <img
                src="https://images.unsplash.com/photo-1541442733073-cde9c4a437f2?w=800&q=80"
                alt="Salon interior styling station"
                className="relative rounded-2xl shadow-2xl border border-espresso/10 object-cover w-full h-[500px] object-center"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-6 bg-white p-6 shadow-xl border border-beige transform -rotate-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center text-white text-xs font-bold">
                    L
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-espresso">Personal Consultation</h4>
                    <p className="text-sm text-espresso/70 font-light">Every service begins with understanding you.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="order-1 md:order-2">
            <div className="flex flex-col justify-center">
              <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
                The Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-8 leading-tight">
                More Than a Salon.<br />It's Your Beauty Destination.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-beige rounded flex-shrink-0 flex items-center justify-center text-espresso font-serif font-bold text-lg">
                    "
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">Our Philosophy</h3>
                    <p className="text-espresso/80 leading-relaxed">
                      Beauty is not about conforming to a standard — it's about enhancing what already makes you unique. At Luxe, we believe every client deserves a personalized experience that celebrates their individuality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-beige rounded flex-shrink-0 flex items-center justify-center text-espresso font-serif font-bold text-lg">
                    "
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">Professional Approach</h3>
                    <p className="text-espresso/80 leading-relaxed">
                      Our team of experienced beauty professionals combines technical expertise with artistic vision. We use only premium, salon-grade products to ensure your hair and skin receive the care they deserve.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-beige rounded flex-shrink-0 flex items-center justify-center text-espresso font-serif font-bold text-lg">
                    "
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">Customer Experience</h3>
                    <p className="text-espresso/80 leading-relaxed">
                      From the moment you step through our doors, every detail is designed for your comfort. From complimentary consultations to our tranquil treatment rooms, your visit is about more than beauty — it's about restoration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-beige rounded flex-shrink-0 flex items-center justify-center text-espresso font-serif font-bold text-lg">
                    "
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">Attention to Detail</h3>
                    <p className="text-espresso/80 leading-relaxed">
                      Precision is our promise. Every cut, every stroke, every application is executed with intention. Because true luxury lives in the details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};