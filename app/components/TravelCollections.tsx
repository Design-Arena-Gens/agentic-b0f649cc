"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const collections = [
  {
    id: 1,
    title: "Tropical Paradise",
    description: "Escape to pristine beaches and crystal-clear waters in the world's most exclusive island resorts.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    price: "From $5,500/night",
    alt: "Luxury beach resort with palm trees and infinity pool overlooking ocean"
  },
  {
    id: 2,
    title: "Mountain Retreats",
    description: "Experience ultimate luxury in secluded alpine chalets with panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1605538810665-c4465f9aa757?q=80&w=2070",
    price: "From $4,200/night",
    alt: "Cozy mountain chalet with snow-covered peaks in background"
  },
  {
    id: 3,
    title: "Cultural Journeys",
    description: "Immerse yourself in ancient civilizations with private tours and exclusive access.",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2070",
    price: "From $8,900/person",
    alt: "Historic architecture and cultural landmarks in exotic destination"
  },
  {
    id: 4,
    title: "Culinary Excellence",
    description: "Savor Michelin-starred dining and private chef experiences in gastronomic capitals.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    price: "From $3,800/person",
    alt: "Gourmet fine dining experience with elegant table setting"
  },
  {
    id: 5,
    title: "Adventure Expeditions",
    description: "Embark on thrilling adventures with expert guides and luxury accommodations.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
    price: "From $6,500/person",
    alt: "Adventure travel scene with dramatic landscape"
  },
  {
    id: 6,
    title: "Wellness Sanctuaries",
    description: "Rejuvenate mind, body, and soul in world-class spas and wellness retreats.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070",
    price: "From $4,800/night",
    alt: "Luxurious spa setting with serene ambiance and natural elements"
  },
];

const TravelCollections = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-luxury-cream" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-luxury-blue mb-4">
            Curated Collections
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-2xl mx-auto">
            Handpicked experiences designed for the discerning traveler seeking the extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={collection.image}
                  alt={collection.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-luxury-blue mb-3">
                  {collection.title}
                </h3>
                <p className="text-luxury-navy/70 mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-semibold text-lg">
                    {collection.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-luxury-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-luxury-navy transition-colors"
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCollections;
