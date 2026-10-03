"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Notable Cases", href: "#cases" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  // Dynamic Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        { id: "contact", name: "Contact" },
        { id: "achievements", name: "Achievements" },
        { id: "cases", name: "Notable Cases" },
        { id: "practice-areas", name: "Practice Areas" },
        { id: "about", name: "About Me" },
      ];

      const scrollPos = window.scrollY + 200;

      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(section.name);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveNav("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0e1217]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#c5a86a]/25"
            : "bg-transparent py-5 sm:py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Identity: Regal Serif */}
          <a
            href="#"
            onClick={() => setActiveNav("Home")}
            className="flex items-center gap-3 group transition-opacity hover:opacity-95"
          >
            <span className="font-serif text-2xl sm:text-[25px] font-bold text-white tracking-wide group-hover:text-[#c5a86a] transition-colors">
              Adv. Shweta
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-[2.5px] text-[#c5a86a] border-l border-white/20 pl-3 font-semibold">
              Advocate
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setActiveNav(link.name)}
                      className={`relative block py-2 px-3.5 text-[13.5px] uppercase tracking-wider font-semibold transition-all duration-200 ${
                        isActive
                          ? "text-[#c5a86a]"
                          : "text-stone-300 hover:text-[#c5a86a]"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#c5a86a] to-[#dfc384] rounded-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pl-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#c5a86a] hover:bg-[#b59555] text-[#0e1217] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Consult</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-2 text-stone-200 hover:text-[#c5a86a] text-sm font-semibold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="uppercase text-xs tracking-wider">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#131920] border-t border-white/10 px-6 py-4 mt-2 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileOpen(false);
                }}
                className={`block py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeNav === link.name
                    ? "text-[#c5a86a]"
                    : "text-stone-300 hover:text-[#c5a86a]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center w-full py-2.5 rounded-xs bg-[#c5a86a] text-[#0e1217] text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
  );
}
