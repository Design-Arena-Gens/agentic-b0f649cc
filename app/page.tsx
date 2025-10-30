"use client";

import HeroCarousel from "./components/HeroCarousel";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import TravelCollections from "./components/TravelCollections";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <SearchBar />
      <TravelCollections />
      <Testimonials />
      <Footer />
    </main>
  );
}
