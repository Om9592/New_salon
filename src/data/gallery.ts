export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "1",
    title: "Blonde Balayage Transformation",
    category: "Hair Colour",
    image: "https://images.unsplash.com/photo-1522335783227-795b99a0932a?w=600&q=80",
    width: 400,
    height: 500,
  },
  {
    id: "2",
    title: "Bridal Updo & Makeup",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1534754238277-c4a437748117?w=600&q=80",
    width: 300,
    height: 450,
  },
  {
    id: "3",
    title: "Salon Interior Detail",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1559552159-81d5d0e688f2?w=600&q=80",
    width: 400,
    height: 400,
  },
  {
    id: "4",
    title: "Summer Hair Colour",
    category: "Hair Colour",
    image: "https://images.unsplash.com/photo-1556228453-efd6d1cc05ee?w=600&q=80",
    width: 350,
    height: 480,
  },
  {
    id: "5",
    title: "Elegant Nail Art",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1603024383333-c24d1e959437?w=600&q=80",
    width: 300,
    height: 400,
  },
  {
    id: "6",
    title: "Precision Haircut",
    category: "Haircut",
    image: "https://images.unsplash.com/photo-1524131709402-5209c77b9feb?w=600&q=80",
    width: 450,
    height: 450,
  },
  {
    id: "7",
    title: "Evening Makeup Look",
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1488048202717-0777d97e06d1?w=600&q=80",
    width: 400,
    height: 500,
  },
  {
    id: "8",
    title: "Salon Ambiance",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1541442733073-cde9c4a437f2?w=600&q=80",
    width: 350,
    height: 350,
  },
];