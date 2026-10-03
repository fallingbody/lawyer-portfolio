import React from "react";
import {
  BarChart3,
  Users,
  Lock,
  Home,
  Bandage,
  Gavel,
} from "lucide-react";

interface PracticeItem {
  id: string;
  title: string;
  tagline: string;
  IconComponent: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
}

export default function PracticeAreas() {
  const practices: PracticeItem[] = [
    {
      id: "business-law",
      title: "Business Law",
      tagline: "Corporate & Commercial Law",
      IconComponent: BarChart3,
      description:
        "Corporate governance, shareholder dispute litigation, cross-border commercial arbitration, and corporate insolvency resolution.",
    },
    {
      id: "family-law",
      title: "Family Law",
      tagline: "Matrimonial & Family Welfare",
      IconComponent: Users,
      description:
        "Compassionate, discreet advocacy in high-conflict divorce proceedings, child custody agreements, and matrimonial estate division.",
    },
    {
      id: "criminal-law",
      title: "Criminal Law",
      tagline: "Trial Advocacy & White Collar Defense",
      IconComponent: Lock,
      description:
        "Methodical defense in white-collar financial crimes, statutory investigations, anticipatory bail, and high-stakes criminal trials.",
    },
    {
      id: "real-estate-law",
      title: "Real Estate Law",
      tagline: "Property & Infrastructure Litigation",
      IconComponent: Home,
      description:
        "Specialized representation in land acquisition, title verification, builder-buyer disputes under RERA, and tenancy enforcement.",
    },
    {
      id: "personal-injury",
      title: "Personal Injury",
      tagline: "Torts & Civil Liability",
      IconComponent: Bandage,
      description:
        "Tenacious advocacy securing statutory accountability and maximum financial compensation for severe negligence and accidents.",
    },
    {
      id: "judicial-law",
      title: "Judicial Law",
      tagline: "Constitutional & Appellate Practice",
      IconComponent: Gavel,
      description:
        "High-impact constitutional litigation invoking Article 32 and Article 226, appellate review, and landmark precedent advocacy.",
    },
  ];

  return (
    <section
      id="practice-areas"
      className="w-full bg-white py-16 sm:py-24 scroll-mt-6 text-[#1a1e24] border-t border-stone-200/60"
    >
      {/* Wide Desktop Screen Container */}
      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with AOS */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2.5">
            Practice Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1217] tracking-tight">
            What We Cover
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c5a86a] to-transparent mx-auto mt-4" />
        </div>

        {/* 6 Clean Static Practice Cards with Staggered AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-8 lg:gap-x-12">
          {practices.map((item, index) => {
            const Icon = item.IconComponent;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-4 transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={(index % 3 + 1) * 100}
                data-aos-duration="700"
              >
                {/* Single Clean Circular Icon Badge with Luxury Obsidian & Gold Luster */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#0e1217] group-hover:bg-gradient-to-br group-hover:from-[#c5a86a] group-hover:to-[#a48139] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-[0_8px_25px_rgba(197,168,106,0.3)]">
                  <Icon
                    className="w-9 h-9 sm:w-10 sm:h-10 text-stone-200 group-hover:text-[#0e1217] transition-colors"
                    strokeWidth={1.4}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-[23px] font-bold text-[#0e1217] group-hover:text-[#b8964e] transition-colors mb-2.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-[320px] mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
