import { ScrollReveal } from "./ScrollReveal";
import { Star, Shield, Users, CheckCircle, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Experienced Beauty Professionals",
    text: "Our team brings years of expertise in hair, makeup, and skincare, trained in the latest techniques and trends.",
  },
  {
    icon: Shield,
    title: "Premium Products",
    text: "We use only salon-grade, cruelty-free products that nourish and protect your hair and skin.",
  },
  {
    icon: Star,
    title: "Personalized Consultations",
    text: "Every service begins with a one-on-one consultation to understand your goals and customize your experience.",
  },
  {
    icon: CheckCircle,
    title: "Hygienic Environment",
    text: "Strict sanitation protocols and sterilized tools ensure a clean, safe space for every client.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    text: "Your happiness is our priority. We don't consider a service complete until you love the result.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <ScrollReveal className="mb-16 text-center">
          <span className="text-rose text-xs font-sans font-medium tracking-widest uppercase mb-4 block">
            Why Luxe
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6 leading-tight">
            The Difference Is in the Details
          </h2>
          <p className="text-lg text-espresso/80 max-w-2xl mx-auto leading-relaxed">
            From the products we choose to the way we welcome you, every element is intentional.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={idx * 100} className="p-8 border border-beige hover:border-rose transition-all duration-300 group">
                <div className="w-12 h-12 rounded border border-beige flex items-center justify-center text-rose mb-6 group-hover:bg-rose group-hover:text-white transition-colors">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h4 className="font-serif text-xl font-bold text-espresso mb-4">
                  {feature.title}
                </h4>
                <p className="text-espresso/60 leading-relaxed text-sm">
                  {feature.text}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};