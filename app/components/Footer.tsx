"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-luxury-blue text-white py-16 sticky bottom-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-luxury-gold">
              Elite Escapes
            </h3>
            <p className="text-white/70 leading-relaxed">
              Crafting extraordinary journeys for discerning travelers since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2">
              {["Maldives", "Swiss Alps", "Santorini", "Bali", "French Riviera"].map((dest) => (
                <li key={dest}>
                  <a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Careers", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe for exclusive offers and travel inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-luxury-gold outline-none transition-colors"
                aria-label="Email for newsletter subscription"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-luxury-gold text-luxury-blue px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Elite Escapes. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Visit our Facebook page" },
                { name: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z", label: "Visit our Instagram page" },
                { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Visit our Twitter page" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={social.path}
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
