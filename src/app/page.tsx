import React from "react";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import AboutMe from "@/components/ui/AboutMe";
import PracticeAreas from "@/components/ui/PracticeAreas";
import NotableCases from "@/components/ui/NotableCases";
import Achievements from "@/components/ui/Achievements";
import Testimonials from "@/components/ui/Testimonials";
import Connect from "@/components/ui/Connect";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1e24] relative overflow-x-clip">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Section with portrait, play video, services grid, and counter strip */}
        <AboutMe />

        {/* 4. Practice Areas (What We Cover - Compact, Single Clean Circle, White Background) */}
        <PracticeAreas />

        {/* 5. Notable Cases (Recent Case Studies with briefs) */}
        <NotableCases />

        {/* 6. Achievements & Bar Honors */}
        <Achievements />

        {/* 7. Auto-Moving Testimonials (1 Single Row, Draggable, Clean Light Cards) */}
        <Testimonials />

        {/* 8. Connect & Consultation Touchpoints */}
        <Connect />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
