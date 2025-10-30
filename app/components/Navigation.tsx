"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = ["Maldives", "Swiss Alps", "Santorini", "Bali", "French Riviera"];
  const travelStyles = ["Adventure", "Relaxation", "Culinary", "Wellness", "Cultural"];
  const exclusiveOffers = ["Last Minute", "Early Bird", "VIP Packages", "Seasonal Deals"];

  const renderDropdown = (items: string[]) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-lg py-3 min-w-[200px] z-50"
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href="#"
          className="block px-6 py-2 text-luxury-blue hover:bg-luxury-cream transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </motion.div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-luxury-blue/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-playfair font-bold text-white tracking-wide"
          >
            Elite Escapes
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["Destinations", "Travel Styles", "Exclusive Offers", "About", "Contact"].map((item) => {
              const key = item.toLowerCase().replace(" ", "-");
              const hasDropdown = ["Destinations", "Travel Styles", "Exclusive Offers"].includes(item);

              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(key)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    className="text-white hover:text-luxury-gold transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                  <AnimatePresence>
                    {activeDropdown === key && hasDropdown && (
                      <>
                        {key === "destinations" && renderDropdown(destinations)}
                        {key === "travel-styles" && renderDropdown(travelStyles)}
                        {key === "exclusive-offers" && renderDropdown(exclusiveOffers)}
                      </>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-luxury-gold text-luxury-blue px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
