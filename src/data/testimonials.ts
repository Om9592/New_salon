export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  content: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aanya Kapoor",
    role: "Entrepreneur",
    service: "Bridal Makeup",
    rating: 5,
    content: "The bridal makeup experience was nothing short of magical. Every detail was perfect, and I felt like the most beautiful version of myself on my wedding day.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "2",
    name: "Riya Sharma",
    role: "Architect",
    service: "Hair Colour & Highlights",
    rating: 5,
    content: "I've never felt more confident about my hair. The colourists here truly understand tone and texture. The balayage looks completely natural.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    id: "3",
    name: "Kabir Mehta",
    role: "Creative Director",
    service: "Haircut & Styling",
    rating: 5,
    content: "A precision cut that actually suits my face shape. The styling team listened carefully and delivered exactly what I envisioned.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "4",
    name: "Sanya Verma",
    role: "Fashion Stylist",
    service: "Facial & Skincare",
    rating: 5,
    content: "The facial treatment left my skin glowing for weeks. The products used are premium, and the therapists are incredibly skilled.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    id: "5",
    name: "Ishaan Arora",
    role: "Photographer",
    service: "Nail Art",
    rating: 5,
    content: "Intricate, elegant nail art that lasted weeks without chipping. The attention to detail is unmatched in the city.",
    image: "https://images.unsplash.com/photo-1544006541-76195b9e71d7?w=400&q=80",
  },
  {
    id: "6",
    name: "Neha Desai",
    role: "Interior Designer",
    service: "Hair Spa & Treatment",
    rating: 5,
    content: "A sanctuary for hair care. The spa treatment revived my damaged hair, and the ambiance is incredibly relaxing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];