"use client";

import React, { useState, useEffect } from "react";

type Pillar = {
  title: string;
  description: string;
  /** Background + border classes (alternate per column for the grid seams). */
  variant: string;
  delay: number;
  icon: React.ReactNode;
};

const HERO_SLIDES = [
  {
    image: "/images/adv_shweta_hero.jpg",
    position: "bg-[center_right_-20px] sm:bg-[center_right] lg:bg-[82%_20%]",
    alt: "Advocate Shweta Legal Chamber",
  },
  {
    image: "/images/hero_court_hd.jpg",
    position: "bg-center",
    alt: "Judicial Court Architecture",
  },
  {
    image: "/images/hero_gavel_hd.jpg",
    position: "bg-center",
    alt: "Judicial Gavel & Bench",
  },
];

const PILLARS: Pillar[] = [
  {
    title: "Dedicated Counsel",
    description:
      "Direct advocate representation with deep individual mandate focus, no junior delegation.",
    variant: "bg-white border-r border-b lg:border-b-0",
    delay: 80,
    icon: (
      <>
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: "Case Strategy & Review",
    description:
      "Rigorous early diagnostic evaluation to identify vulnerabilities and secure early relief.",
    variant: "bg-[#fcfbfa] border-r border-b lg:border-b-0",
    delay: 160,
    icon: (
      <>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </>
    ),
  },
  {
    title: "Courtroom Advocacy",
    description:
      "Decisive oral arguments and authoritative cross-examinations across High Courts and Appellate Benches.",
    variant: "bg-white border-r border-b md:border-b-0",
    delay: 240,
    icon: (
      <>
        <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
        <path d="m16 16 6-6" />
        <path d="m21.5 10.5-8-8" />
        <path d="m8 8 6-6" />
        <path d="m8.5 7.5 8 8" />
      </>
    ),
  },
  {
    title: "Deep Legal Research",
    description:
      "Comprehensive statutory precedence mapping and constitutional doctrine formulation.",
    variant: "bg-[#fcfbfa]",
    delay: 320,
    icon: (
      <>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </>
    ),
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#11141a] flex flex-col justify-between min-h-screen">
      {/* 
        ========================================================================
        HERO SECTION: High-Status Editorial Lawyer Portfolio for Adv. Shweta
        Commanding Playfair Serif headline, radiant sunlit glow, gold accents
        ========================================================================
      */}
      <section className="relative w-full flex-1 flex items-center overflow-hidden bg-[#11141a] min-h-[580px] lg:min-h-[620px]">
        {/* Background Slideshow Layer: Cinematic Dissolve + Ken Burns Scale Effect */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 bg-cover bg-no-repeat ${slide.position} transition-all duration-1000 ease-out will-change-[transform,opacity,filter] ${
                isActive
                  ? "opacity-100 scale-100 blur-0 z-0"
                  : "opacity-0 scale-105 blur-[2px] z-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                filter: "brightness(1.08) contrast(1.03)",
              }}
            />
          );
        })}

        {/* Luminous Warm Sunlight & Amber Radial Bloom: Highlights Court & Chambers */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_78%_35%,rgba(255,238,195,0.30)_0%,rgba(223,195,132,0.15)_35%,transparent_65%)]" />
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_25%_25%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />

        {/* Soft Left Vignette: ONLY covers text area to keep typography crisp, leaving 60% of the image glowing */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0c0f14]/94 via-[#0c0f14]/65 via-40% to-transparent to-70% pointer-events-none" />

        {/* Subtle Top & Bottom Soft Warm Shading */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/55 via-black/25 to-transparent pointer-events-none z-1" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-1" />

        {/* Content Container: Wide Desktop Screen with top padding for transparent header */}
        <div className="relative z-10 w-full max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-8 lg:col-span-7" data-aos="fade-up" data-aos-duration="850">
              <div className="w-full max-w-xl text-left">
                {/* Gold Credential Badge */}
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-[2px] bg-gradient-to-r from-[#c5a86a] to-transparent" />
                  <span className="text-[#c5a86a] text-xs sm:text-[13px] font-bold tracking-[2.5px] uppercase">
                    Advocate • High Court Counsel
                  </span>
                </div>

                {/* Regal Playfair Serif Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-white leading-[1.14] mb-6 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                  THE RIGHT LAWYER <br />
                  <span className="italic font-normal text-stone-200">MAKES ALL THE DIFFERENCE</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-[17px] text-stone-200 leading-relaxed mb-9 max-w-lg font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                  Providing fearless courtroom advocacy, strategic legal counsel,
                  and relentless personal dedication to protecting your rights and achieving justice.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#contact"
                    className="inline-block px-7 py-3.5 rounded-xs bg-gradient-to-r from-[#c5a86a] to-[#b6934c] hover:brightness-110 text-[#0e1217] text-[14px] font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_24px_rgba(197,168,106,0.35)] hover:-translate-y-0.5"
                  >
                    Consult With Me
                  </a>
                  <a
                    href="#about"
                    className="inline-block px-7 py-3.5 rounded-xs bg-white/10 hover:bg-white/20 border border-white/30 text-white text-[14px] font-semibold uppercase tracking-wider transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 shadow-sm"
                  >
                    Read Bio & Mandate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        BOTTOM FEATURE BAR: 4 Luminous White Luxury Advocacy Pillars
        Clean white/ivory cards with champagne gold accents, transitioning
        seamlessly from the glowing hero to the white canvas
        ========================================================================
      */}
      <section className="w-full shrink-0 bg-[#faf9f6] border-t-2 border-[#c5a86a] border-b border-stone-200 shadow-sm">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`${pillar.variant} p-8 lg:p-7 flex items-start border-stone-200/90 transition-colors duration-200 hover:bg-[#faf7f2] group`}
              data-aos="fade-up"
              data-aos-delay={pillar.delay}
            >
              <div className="mr-5 shrink-0 pt-1 text-[#b8964e] group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {pillar.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0e1217] mb-1.5 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
