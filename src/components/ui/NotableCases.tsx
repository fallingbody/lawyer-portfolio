import React from "react";
import Image from "next/image";

interface CaseItem {
  id: string;
  category: string;
  title: string;
  forum: string;
  year: string;
  image: string;
  summary: string;
}

export default function NotableCases() {
  const cases: CaseItem[] = [
    {
      id: "case-1",
      category: "Corporate & Insolvency",
      title: "₹1,850 Cr. Infrastructure Consortium Resolution",
      forum: "NCLAT Principal Appellate Bench, New Delhi",
      year: "2024",
      image: "/images/case-1.jpg",
      summary:
        "Successfully defended an unprecedented ₹1,850 Crore resolution plan involving consortium lenders and international infrastructure developers against non-cooperative promoters.",
    },
    {
      id: "case-2",
      category: "Constitutional Law",
      title: "Fundamental Liberties Against Arbitrary State Action",
      forum: "High Court of Delhi (Division Bench)",
      year: "2023",
      image: "/images/case-2.jpg",
      summary:
        "Successfully argued landmark Article 226 writ petition protecting fundamental rights and striking down arbitrary retrospective penalties against corporate entities.",
    },
    {
      id: "case-3",
      category: "Economic Offenses & PMLA",
      title: "Quashing of Provisional Attachment of Commercial Assets",
      forum: "High Court of Delhi (Appellate Jurisdiction)",
      year: "2024",
      image: "/images/case-3.jpg",
      summary:
        "Secured complete stay and quashing of high-profile provisional attachment orders issued under Prevention of Money Laundering Act (PMLA).",
    },
    {
      id: "case-4",
      category: "Commercial Arbitration",
      title: "EPC Engineering Cross-Border Dispute Enforcement",
      forum: "Arbitral Tribunal & Delhi High Court (Section 34)",
      year: "2023",
      image: "/images/case-4.jpg",
      summary:
        "Represented premier infrastructure engineering contractor in multi-year arbitration arising from contractual termination and delay claims.",
    },
  ];

  return (
    <section id="cases" className="w-full bg-[#f8f7f4] py-16 sm:py-24 scroll-mt-6 border-t border-stone-200">
      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with AOS */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2.5">
            Notable Precedents
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e1217] tracking-tight">
            Case Studies & Judicial Decrees
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c5a86a] to-transparent mx-auto mt-4" />
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal leading-relaxed">
            Demonstrated courtroom victories and decisive legal solutions across high-stakes appellate and trial forums.
          </p>
        </div>

        {/* 4 Editorial Case Cards with AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-[370px] sm:h-[400px] rounded-sm overflow-hidden border border-stone-300/80 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 120}
              data-aos-duration="750"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Obsidian Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1217] via-[#0e1217]/65 to-transparent transition-opacity group-hover:from-[#0e1217]/95" />

              {/* Bottom Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                <div>
                  <span className="text-[#dfc384] text-xs font-bold tracking-wider uppercase block mb-1.5">
                    {item.category} • {item.forum} • {item.year}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-white group-hover:text-[#dfc384] transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
                    {item.summary}
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
