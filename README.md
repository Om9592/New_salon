# Luxe Beauty Salon

A premium, luxury beauty salon website built with React.js, Vite, Tailwind CSS, and Framer Motion. Designed with a high-end editorial aesthetic inspired by luxury beauty brands and fashion magazines.

## Live Demo

[Insert your Vercel URL here after deployment]

## Design Features

- **Color Palette**: Warm ivory (#F8F4EF), deep espresso (#29201D), muted rose (#C58F88), champagne gold (#C5A477), soft beige (#E9DED3)
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Layouts**: Asymmetric editorial compositions, masonry gallery, custom service cards
- **Animations**: Scroll reveals, hover zoom effects, smooth transitions, mobile menu
- **Fully Responsive**: Mobile, tablet, and desktop optimized

## Sections

1. Hero — Editorial beauty campaign with CTA buttons
2. Navigation — Sticky premium navbar with mobile menu
3. About — Asymmetric layout with brand story
4. Services — 8 services with custom layouts, prices, and booking
5. Signature Experience — Full-width visual brand section
6. Our Work — Masonry-style gallery with hover effects
7. Why Choose Us — Elegant feature highlights
8. Testimonials — Editorial client testimonials with ratings
9. Booking — WhatsApp-integrated appointment form
10. Contact — Address, phone, hours, Google Maps, social links
11. Footer — Premium dark footer with links and contact info

## How to Edit

### Salon Name & Branding

Edit the logo text in `src/components/Navbar.tsx` and `src/components/Footer.tsx`:
```tsx
<span className="font-serif text-2xl font-bold tracking-tight text-espresso">
  LUXE
</span>
```

### Contact Information

**WhatsApp Number**: Edit `WHATSAPP_NUMBER` constant in `src/components/Booking.tsx`:
```tsx
const WHATSAPP_NUMBER = "919876543210";
```

**Contact Details**: Edit `CONTACT_INFO` object in `src/components/Contact.tsx` and `CONTACT_LINKS` in `src/components/Footer.tsx`.

**Phone Number**: Update in `src/components/Booking.tsx` (contact info section) and `src/components/Contact.tsx`.

### Address

Edit `CONTACT_INFO.address` in `src/components/Contact.tsx`:
```tsx
address: "Luxe Beauty Salon, 42 Connaught Place, New Delhi, Delhi 110001",
```

Also update the Google Maps embed URL in the same file and the "Get Directions" link.

### Prices

Edit service prices in `src/data/services.ts`:
```tsx
price: "₹2,500",
```

### Images

All images use Unsplash source URLs. To replace with your own:

1. Add your images to the `public/` folder
2. Update the `image` property in `src/data/services.ts`, `src/data/gallery.ts`, and `src/data/testimonials.ts`
3. Update hero image in `src/components/Hero.tsx`
4. Update about image in `src/components/About.tsx`
5. Update signature experience image in `src/components/SignatureExperience.tsx`

### Opening Hours

Edit `CONTACT_INFO.hours` in `src/components/Contact.tsx`.

### Instagram

Update the Instagram handle in:
- `src/components/Navbar.tsx` (mobile menu)
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### WhatsApp Booking

The booking form submits to WhatsApp. Configure the number in `src/components/Booking.tsx`:
```tsx
const WHATSAPP_NUMBER = "919876543210";
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for deployment on Vercel:

1. Push code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel auto-detects Vite and configures build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Tech Stack

- React.js (TypeScript)
- Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## License

MIT