import React from "react";
import Image from "next/image";

interface Achievement {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  venue: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "precedent-article32",
      title: "Supreme Court Article 32 Precedent Judgment",
      image: "/images/achievement_scotus.jpg",
      description:
        "Secured a milestone judgment before the Supreme Court bench protecting individual liberty and nullifying ultra-vires executive notifications.",
      year: "2024",
      venue: "Supreme Court of India",
    },
    {
      id: "commercial-resolution",
      title: "Cross-Border Commercial Resolution Approval",
      image: "/images/achievement_merger.jpg",
      description:
        "Lead counsel defending a ₹1,850 Cr. resolution plan against multiple appellate challenges, securing unconditional clearance.",
      year: "2024",
      venue: "NCLAT Principal Bench",
    },
    {
      id: "white-collar-discharge",
      title: "Complete Discharge in High-Profile Economic Offense",
      image: "/images/achievement_jury.jpg",
      description:
        "Persuaded trial court to discharge corporate directors in multi-agency investigation, exonerating leadership without trial stigma.",
      year: "2023",
      venue: "Special Court (CBI & PMLA)",
    },
    {
      id: "legal500-honor",
      title: "Distinguished Appellate Advocate Recognition",
      image: "/images/achievement_award.jpg",
      description:
        "Felicitation for exceptional courtroom advocacy and pioneering constitutional contributions across High Courts and appellate tribunals.",
      year: "2023",
      venue: "National Bar & Judiciary Forum",
    },
  ];

  return (
    <section id="achievements" className="w-full bg-[#fcfbfa] py-16 sm:py-24 scroll-mt-6 border-t border-stone-200">
      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with AOS */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2.5">
            Judicial Standing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e1217] tracking-tight">
            Honors, Precedents & Bar Standing
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c5a86a] to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Clean Static Achievement Cards with Staggered AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-sm overflow-hidden border border-stone-200/90 hover:border-[#c5a86a]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              data-aos-duration="700"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative w-full h-48 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="text-[#b8964e] text-[11px] font-bold uppercase block mb-2 tracking-wider">
                    {item.venue} • {item.year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0e1217] group-hover:text-[#b8964e] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
