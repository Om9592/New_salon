import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ivory"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559552159-81d5d0e688f2?w=1920&q=80"
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="inline-block mb-6 px-4 py-1.5 border border-champagne/30 text-champagne text-xs font-sans font-medium tracking-widest uppercase">
            Luxe Beauty Salon · Delhi
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 text-balance"
          >
            Beauty is an Art.<br />Make It Yours.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-beige/90 max-w-2xl leading-relaxed mb-10 font-light"
          >
            Discover a space where beauty, confidence and creativity come together.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="btn-secondary text-center"
            >
              Explore Our Services
            </a>
            <a
              href="#booking"
              className="btn-primary text-center"
            >
              Book Your Appointment
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/60"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};