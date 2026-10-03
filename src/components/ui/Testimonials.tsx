"use client";

import React, { useRef, useState, useEffect } from "react";
import { Quote, Star, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  forum: string;
  rating: number;
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isHoveredRef = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: "t-1",
      quote:
        "Advocate Shweta's command over statutory nuances and her courtroom composure before the High Court were decisive in securing our stay order within 24 hours in a ₹180 Cr dispute.",
      author: "Rajeshwar Singhania",
      role: "Managing Director",
      company: "Apex Infrastructure Ltd.",
      forum: "Commercial Division, High Court of Delhi",
      rating: 5,
    },
    {
      id: "t-2",
      quote:
        "Her meticulous preparation and fearless advocacy turned around an impossible tribunal appeal. Her direct, hands-on involvement made all the difference.",
      author: "Vikram Malhotra",
      role: "Chief Financial Officer",
      company: "Horizon Tech Group",
      forum: "NCLAT Appellate Tribunal",
      rating: 5,
    },
    {
      id: "t-3",
      quote:
        "A fierce defender of constitutional liberties. Her precision in formulating questions of law during our High Court Article 226 writ petition was truly exceptional.",
      author: "Dr. Ananya Sen",
      role: "Senior Policy Director",
      company: "Civil Liberty Council",
      forum: "High Court of Delhi (Division Bench)",
      rating: 5,
    },
    {
      id: "t-4",
      quote:
        "In commercial arbitrations, Shweta is ruthless on cross-examinations and unmatched on statutory research. She recovered our full contractual claim with interest.",
      author: "Meera Krishnan",
      role: "Managing Partner",
      company: "Veda Ventures India",
      forum: "International Commercial Arbitration (MCIA)",
      rating: 5,
    },
    {
      id: "t-5",
      quote:
        "Cross-border litigation in India can be daunting, but Adv. Shweta guided our overseas leadership with complete transparency, winning an unencumbered discharge.",
      author: "Sameer Al-Mansoor",
      role: "Director of Legal Affairs",
      company: "Gulf EPC Logistics Corp",
      forum: "High Court & Appellate Tribunal",
      rating: 5,
    },
    {
      id: "t-6",
      quote:
        "Her rapid intervention in our RERA and High Court builder dispute safeguarded our ₹340 Cr project from unlawful attachment. Invaluable legal judgment.",
      author: "Aditya Vardhan",
      role: "Senior Vice President",
      company: "Vardhan Urban Infra",
      forum: "RERA Appellate & High Court",
      rating: 5,
    },
  ];

  // Tripled array for continuous seamless infinite looping
  const allItems = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scrolling via requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start in the middle set to allow immediate bidirectional dragging
    const oneSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft === 0 && oneSetWidth > 0) {
      container.scrollLeft = oneSetWidth;
    }

    let animId: number;
    const speed = 0.8;

    const step = () => {
      if (container && !isDraggingRef.current && !isHoveredRef.current) {
        container.scrollLeft += speed;
        const currentOneSet = container.scrollWidth / 3;
        if (container.scrollLeft >= currentOneSet * 2) {
          container.scrollLeft -= currentOneSet;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += currentOneSet;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Global Mouse Drag Listeners for smooth reliable dragging anywhere on page
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const container = containerRef.current;
      if (!container) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      let newScroll = scrollLeftRef.current - walk;
      const oneSetWidth = container.scrollWidth / 3;

      if (newScroll < 0) {
        newScroll += oneSetWidth;
      } else if (newScroll >= oneSetWidth * 2) {
        newScroll -= oneSetWidth;
      }
      container.scrollLeft = newScroll;
    };

    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsGrabbing(false);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  // Mouse Drag Handlers on container
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // Wheel horizontal scroll support
  const handleWheel = (e: React.WheelEvent) => {
    const container = containerRef.current;
    if (!container) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      container.scrollLeft += e.deltaY;
      const oneSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= oneSetWidth * 2) {
        container.scrollLeft -= oneSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += oneSetWidth;
      }
    }
  };

  // Touch Support
  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 1200);
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#f8f7f4] py-16 sm:py-24 overflow-hidden scroll-mt-6 border-t border-stone-200"
    >
      {/* Clean Header: No buttons, no arrows */}
      <div
        className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16"
        data-aos="fade-up"
      >
        <div className="text-center">
          <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2">
            Testimonials & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e1217] tracking-tight">
            Client & Peer Judicial Accolades
          </h2>
          <div className="w-16 h-[2.5px] bg-gradient-to-r from-transparent via-[#c5a86a] to-transparent mx-auto mt-3.5" />
        </div>
      </div>

      {/* 
        ========================================================================
        ONLY 1 ROW: Auto-moving + Drag-to-move Interactive Track (Luxury Editorial)
        ========================================================================
      */}
      <div className="w-full relative" data-aos="fade-up" data-aos-duration="800">
        {/* Soft edge fade masks on both sides matching background */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8f7f4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8f7f4] to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-6 overflow-x-auto select-none py-3 px-6 sm:px-10 ${
            isGrabbing ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {allItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[380px] sm:w-[440px] shrink-0 bg-white p-8 rounded-sm border border-stone-200/90 hover:border-[#c5a86a]/70 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#c5a86a]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a86a]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#c5a86a]/30" />
                </div>

                {/* Testimonial Quote: Serif Italic */}
                <p className="font-serif italic text-stone-700 text-[15px] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Venue Footer */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-[#0e1217] text-base font-bold tracking-tight">
                    {item.author}
                  </h4>
                  <p className="text-[#b8964e] text-xs font-semibold mt-0.5">
                    {item.role}, {item.company}
                  </p>
                  <p className="text-stone-500 text-[11px] mt-0.5">
                    {item.forum}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#b8964e] text-[10px] uppercase font-bold bg-[#fcfbfa] px-2.5 py-1 rounded border border-[#c5a86a]/30 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
