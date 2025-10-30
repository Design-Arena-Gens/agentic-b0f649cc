"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "Elite Escapes transformed our anniversary into an unforgettable experience. The attention to detail and personalized service exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    alt: "Portrait of satisfied luxury traveler Sarah Mitchell"
  },
  {
    id: 2,
    name: "James Chen",
    location: "Singapore",
    rating: 5,
    text: "From booking to return, every moment was seamlessly orchestrated. The exclusive access and VIP treatment made us feel truly special.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    alt: "Portrait of satisfied luxury traveler James Chen"
  },
  {
    id: 3,
    name: "Isabella Romano",
    location: "Milan, Italy",
    rating: 5,
    text: "The curated experiences and luxury accommodations were beyond compare. Elite Escapes understands what discerning travelers truly desire.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    alt: "Portrait of satisfied luxury traveler Isabella Romano"
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-luxury-blue relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-white mb-4">
            Traveler Testimonials
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from our distinguished clients about their extraordinary journeys
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-luxury-gold text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-luxury-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
