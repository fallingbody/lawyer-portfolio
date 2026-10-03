"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const startCounting = () => {
      startTime = null;
      const duration = 1800; // 1.8s smooth counting

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic: brisk initial ramp-up with silky settling
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          } else {
            // Reset when completely scrolled off-screen so it counts up again on scroll re-entry
            cancelAnimationFrame(animationFrameId);
            setCount(0);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function AboutMe() {

  const stats = [
    {
      target: 1200,
      suffix: "+",
      label: "Trusted Clients",
      icon: (
        <svg
          className="w-10 h-10 text-[#c5a86a]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      target: 25,
      suffix: "+",
      label: "Honors & Awards",
      icon: (
        <svg
          className="w-10 h-10 text-[#c5a86a]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
    },
    {
      target: 12,
      suffix: "+",
      label: "Years Court Experience",
      icon: (
        <svg
          className="w-10 h-10 text-[#c5a86a]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      target: 1850,
      suffix: "+",
      label: "Cases Handled",
      icon: (
        <svg
          className="w-10 h-10 text-[#c5a86a]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M9 10h6" />
          <path d="M9 14h6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="w-full bg-[#fcfbfa] pt-8 sm:pt-12 pb-16 sm:pb-24 scroll-mt-6 border-b border-stone-200/60">
      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* 
          ======================================================================
          1. ABOUT SECTION: 2-Column Editorial Card with AOS
          ======================================================================
        */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-sm shadow-xl border border-stone-200/90 bg-white"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          {/* Left Column: Portrait */}
          <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[500px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/about_shweta.jpg"
              alt="Advocate Shweta Courtroom Chamber"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Editorial Bio Box */}
          <div className="lg:col-span-6 bg-[#ffffff] text-[#1c1917] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            {/* Heading */}
            <div className="mb-8">
              <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2.5">
                About Adv. Shweta
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0e1217] tracking-tight leading-[1.2] mb-4">
                Why Put Your Trust in My Advocacy
              </h2>
              <div className="w-14 h-[2px] bg-gradient-to-r from-[#c5a86a] to-transparent mb-5" />
              <p className="text-[15px] sm:text-base text-stone-600 leading-relaxed font-normal">
                Advocate Shweta brings strategic courtroom excellence, thorough
                jurisprudential acumen, and unyielding personal integrity to every
                mandate. Whether defending constitutional rights, commercial disputes,
                or complex civil litigation, she champions client interests with fearless dedication.
              </p>
            </div>

            {/* 4 Pillars in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Service 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfbfa] border border-[#c5a86a]/30 shadow-xs flex items-center justify-center shrink-0 text-[#b8964e]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[#0e1217] text-[17px] font-bold mb-1">
                    Direct Advocacy
                  </h3>
                  <p className="text-stone-600 text-[13px] leading-relaxed">
                    Personalized trial preparation and courtroom counsel without junior dilution.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfbfa] border border-[#c5a86a]/30 shadow-xs flex items-center justify-center shrink-0 text-[#b8964e]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m15 9-6 6" />
                    <path d="M9 9h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[#0e1217] text-[17px] font-bold mb-1">
                    Clear Retainers
                  </h3>
                  <p className="text-stone-600 text-[13px] leading-relaxed">
                    Transparent, ethical fee schedules with zero unexpected costs or hidden retainers.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfbfa] border border-[#c5a86a]/30 shadow-xs flex items-center justify-center shrink-0 text-[#b8964e]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
                    <path d="m16 16 6-6" />
                    <path d="m21.5 10.5-8-8" />
                    <path d="m8 8 6-6" />
                    <path d="m8.5 7.5 8 8" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[#0e1217] text-[17px] font-bold mb-1">
                    Legal Advisory
                  </h3>
                  <p className="text-stone-600 text-[13px] leading-relaxed">
                    Proactive legal risk mitigation and strategic advice to resolve disputes early.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfbfa] border border-[#c5a86a]/30 shadow-xs flex items-center justify-center shrink-0 text-[#b8964e]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[#0e1217] text-[17px] font-bold mb-1">
                    Urgent Relief
                  </h3>
                  <p className="text-stone-600 text-[13px] leading-relaxed">
                    Fast-track drafting and appearance for interim stay orders, bails, and injunctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          2. COUNTER STATS SECTION: 4 Clean Elevated Cards with Staggered AOS
          ======================================================================
        */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-sm border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#c5a86a]/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div>
                <strong className="font-serif block text-3xl sm:text-[38px] font-bold text-[#0e1217] tracking-tight">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </strong>
                <span className="block text-[12px] text-stone-500 font-bold uppercase tracking-wider mt-1.5">
                  {item.label}
                </span>
              </div>
              <div className="shrink-0 pl-4">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
