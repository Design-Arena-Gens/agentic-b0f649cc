"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const suggestions = [
  "Maldives Luxury Resorts",
  "Swiss Alps Ski Chalets",
  "Santorini Private Villas",
  "Bali Beach Retreats",
  "French Riviera Estates",
  "Safari Lodges Kenya",
  "Tokyo Luxury Hotels",
  "Patagonia Adventure Tours",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative -mt-12 z-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Where would you like to go?"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-luxury-gold outline-none transition-colors"
              aria-label="Search destinations"
            />
            {showSuggestions && query && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-60 overflow-y-auto z-30">
                {filteredSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                    className="w-full text-left px-6 py-3 hover:bg-luxury-cream transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1">
            <input
              type="date"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-luxury-gold outline-none transition-colors"
              aria-label="Check-in date"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-luxury-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-luxury-navy transition-colors"
          >
            Search
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;
