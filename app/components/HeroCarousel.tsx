"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2070",
    title: "Discover Paradise",
    subtitle: "Luxury Overwater Villas in the Maldives",
    alt: "Luxury overwater villas in Maldives with crystal clear turquoise waters"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    title: "Alpine Elegance",
    subtitle: "Exclusive Swiss Chalets with Breathtaking Views",
    alt: "Scenic mountain peaks in Swiss Alps with snow-covered chalets"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070",
    title: "Mediterranean Dreams",
    subtitle: "Private Villas in Santorini's Most Coveted Locations",
    alt: "White-washed buildings and blue domed churches in Santorini Greece"
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4"
        >
          {heroSlides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-luxury-gold text-luxury-blue px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
        >
          Explore Destinations
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-luxury-gold w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
