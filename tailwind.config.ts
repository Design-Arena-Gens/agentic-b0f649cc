import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-blue': '#0A2540',
        'luxury-gold': '#D4AF37',
        'luxury-cream': '#F8F6F0',
        'luxury-navy': '#1A3A52',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
