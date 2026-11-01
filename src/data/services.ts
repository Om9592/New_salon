export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: string;
}

export const SERVICES: Service[] = [
  {
    id: "haircut-styling",
    name: "Haircut & Styling",
    description: "Precision cuts tailored to your face shape and lifestyle, finished with a professional blow-dry.",
    price: "₹2,500",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1522337360788-96d43a19560f?w=800&q=80",
    category: "hair",
  },
  {
    id: "hair-colour-highlights",
    name: "Hair Colour & Highlights",
    description: "Custom colour formulation using premium ammonia-free dyes for vibrant, healthy-looking results.",
    price: "₹6,000",
    duration: "120 min",
    image: "https://images.unsplash.com/photo-1587620962725-abab776cf269?w=800&q=80",
    category: "colour",
  },
  {
    id: "hair-spa-treatment",
    name: "Hair Spa & Treatment",
    description: "Deep conditioning therapy to restore shine, strength, and moisture to damaged hair.",
    price: "₹3,500",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1f1a912?w=800&q=80",
    category: "treatment",
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Complete bridal look with trial session, long-wear makeup, and on-location service available.",
    price: "₹25,000",
    duration: "180 min",
    image: "https://images.unsplash.com/photo-1517728751678-42a9a6a4e90f?w=800&q=80",
    category: "makeup",
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Glamorous evening makeup designed to last through celebrations and photography.",
    price: "₹8,000",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1488048202717-0777d97e06d1?w=800&q=80",
    category: "makeup",
  },
  {
    id: "facial-skincare",
    name: "Facial & Skincare",
    description: "Customized facial treatments for glowing, refreshed skin using premium skincare products.",
    price: "₹4,000",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1570175787875-5a2f9398cb3e?w=800&q=80",
    category: "skincare",
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description: "Luxurious hand and foot care with exfoliation, massage, and professional nail shaping.",
    price: "₹2,000",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1604793647309-f299047a5306?w=800&q=80",
    category: "nails",
  },
  {
    id: "nail-art",
    name: "Nail Art",
    description: "Intricate nail designs and extensions crafted by our skilled nail technicians.",
    price: "₹1,500",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1621070561083-f366acbbfbf7?w=800&q=80",
    category: "nails",
  },
];