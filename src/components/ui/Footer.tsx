import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0d12] relative overflow-hidden text-stone-400">
      {/* Subtle Luxury Top Hairline with Champagne Gold Glow */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a86a]/35 to-transparent" />

      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-9 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Minimalist Brand Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-xs border border-[#c5a86a]/40 bg-[#14181f] text-[#c5a86a] group-hover:border-[#c5a86a] group-hover:text-[#0a0d12] group-hover:bg-[#c5a86a] transition-all duration-300 flex items-center justify-center font-serif font-bold text-xs tracking-wider shadow-xs">
            S
          </div>
          <div>
            <span className="font-serif font-semibold text-white/95 text-[13px] tracking-[1.5px] uppercase block transition-colors group-hover:text-[#c5a86a]">
              Adv. Shweta
            </span>
            <p className="text-[10px] text-stone-400 font-medium tracking-[1.5px] uppercase">
              High Court & Appellate Practice
            </p>
          </div>
        </a>

        {/* Minimalist Legal & Copyright Line */}
        <p className="text-[11.5px] text-stone-400 font-normal tracking-wide text-center sm:text-right">
          © {new Date().getFullYear()} Adv. Shweta. All Rights Reserved. Attorney-Client Privilege Maintained.
        </p>
      </div>
    </footer>
  );
}
