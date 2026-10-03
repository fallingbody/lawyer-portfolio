"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappNumber = "919665658240";
    const text = `*New Legal Consultation Request*%0A%0A` +
      `*Full Name:* ${encodeURIComponent(formData.name.trim())}%0A` +
      `*Email:* ${encodeURIComponent(formData.email.trim())}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone.trim())}%0A` +
      `*Legal Subject:* ${encodeURIComponent(formData.subject.trim())}%0A%0A` +
      `*Case Summary:*%0A${encodeURIComponent(formData.message.trim())}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="w-full bg-[#fcfbfa] py-20 lg:py-24 scroll-mt-24 border-t border-stone-200">
      <div className="max-w-[1620px] 2xl:max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with AOS */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-[#b8964e] text-xs font-bold tracking-[3px] uppercase block mb-2.5">
            Contact Chambers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e1217] tracking-tight">
            Schedule a Confidential Legal Consultation
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c5a86a] to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Balanced Grid: Left = Chamber Info & Compact Map | Right = Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (lg:col-span-5): Direct Contacts & Compact Location Preview */}
          <div className="lg:col-span-5 space-y-4" data-aos="fade-right" data-aos-duration="750">
            {/* Direct Contact Options */}
            <div className="space-y-3">
              {/* Direct Phone */}
              <a
                href="tel:+919665658240"
                className="bg-white p-4 rounded-sm border border-stone-200/90 shadow-sm hover:border-[#c5a86a]/60 hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#c5a86a]/15 text-[#b8964e] flex items-center justify-center shrink-0 border border-[#c5a86a]/30 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-[#b8964e]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#b8964e] uppercase tracking-wider block">
                    Direct Chamber Desk
                  </span>
                  <h4 className="text-sm font-bold text-[#0e1217] font-serif group-hover:text-[#b8964e] transition-colors">
                    +91 96656 58240
                  </h4>
                  <p className="text-stone-500 text-[11px]">
                    Mon – Sat: 10:00 AM – 7:00 PM IST
                  </p>
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:adv.shweta@legalchamber.in"
                className="bg-white p-4 rounded-sm border border-stone-200/90 shadow-sm hover:border-[#c5a86a]/60 hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#c5a86a]/15 text-[#b8964e] flex items-center justify-center shrink-0 border border-[#c5a86a]/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 text-[#b8964e]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#b8964e] uppercase tracking-wider block">
                    Direct Email & Filings
                  </span>
                  <h4 className="text-sm font-bold text-[#0e1217] font-serif group-hover:text-[#b8964e] transition-colors truncate">
                    adv.shweta@legalchamber.in
                  </h4>
                  <p className="text-stone-500 text-[11px]">
                    Prioritized for urgent listings & filings
                  </p>
                </div>
              </a>

              {/* Social Channels: LinkedIn & Instagram */}
              <div className="grid grid-cols-2 gap-3 pt-0.5 max-w-[420px]">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 sm:p-3.5 rounded-sm border border-stone-200/90 shadow-sm hover:border-[#0A66C2]/50 hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#0A66C2]/20 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      Connect
                    </span>
                    <h4 className="text-xs font-bold text-[#0e1217] font-serif group-hover:text-[#0A66C2] transition-colors truncate">
                      LinkedIn
                    </h4>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 sm:p-3.5 rounded-sm border border-stone-200/90 shadow-sm hover:border-[#E1306C]/50 hover:shadow-md transition-all flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center shrink-0 border border-[#E1306C]/20 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      Follow
                    </span>
                    <h4 className="text-xs font-bold text-[#0e1217] font-serif group-hover:text-[#E1306C] transition-colors truncate">
                      Instagram
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            {/* Compact WhatsApp-Style Location Preview Box */}
            <div className="rounded-sm border border-stone-200/90 bg-white shadow-md overflow-hidden max-w-[420px] transition-all hover:border-[#c5a86a]/60">
              {/* Card Header with Location Details */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Delhi+High+Court+Sher+Shah+Road+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 sm:p-3.5 bg-[#fcfbfa] border-b border-stone-200/80 transition-colors hover:bg-[#faf7f2] group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#c5a86a]/15 text-[#b8964e] flex items-center justify-center shrink-0 border border-[#c5a86a]/30">
                    <MapPin className="w-4 h-4 text-[#b8964e]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0e1217] truncate font-serif group-hover:text-[#b8964e] transition-colors">
                      Chamber 418, Delhi High Court
                    </h4>
                    <p className="text-stone-500 text-[11px] truncate">
                      Sher Shah Road, India Gate, New Delhi
                    </p>
                  </div>
                </div>
              </a>

              {/* Compact Map Preview (Height ~140px) */}
              <div className="relative w-full h-[140px] bg-stone-100">
                <iframe
                  title="Delhi High Court Chambers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.765104618788!2d77.2335193754972!3d28.63842188402513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd258b688d01%3A0xc34cc4a055d0458b!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1727974797000!5m2!1sen!2sin"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[1.05] hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-7): Case Consultation Form */}
          <div className="lg:col-span-7 flex flex-col" data-aos="fade-left" data-aos-duration="750">
            <div className="bg-white p-7 sm:p-9 rounded-sm border border-stone-200/90 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0e1217] mb-2">
                  Request a Consultation
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mb-7">
                  All communications are treated with strict attorney-client privilege.
                </p>

                {submitted ? (
                  <div className="p-8 rounded bg-[#fcfbfa] border border-[#c5a86a]/40 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#c5a86a] mx-auto" />
                    <h4 className="font-serif text-xl font-bold text-[#0e1217]">
                      Consultation Request Received
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Opening WhatsApp to connect directly with Advocate Shweta&apos;s chamber desk (+91 96656 58240).
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-4 px-5 py-2.5 rounded-xs bg-[#c5a86a] text-[#0e1217] text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-105 transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={50}
                          value={formData.name}
                          onChange={(e) => {
                            // Only allow alphabetic characters, spaces, dots, hyphens
                            const val = e.target.value.replace(/[^a-zA-Z\s.'-]/g, "");
                            setFormData({ ...formData, name: val.slice(0, 50) });
                          }}
                          placeholder="e.g. Ankit Sharma"
                          className="w-full px-4 py-3 rounded-xs bg-[#faf9f6] border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a]/30 transition-all"
                        />
                      </div>

                      {/* Contact Email */}
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          Contact Email *
                        </label>
                        <input
                          type="email"
                          required
                          maxLength={80}
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                          title="Please enter a valid email address (e.g. name@domain.com)"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value.trim().slice(0, 80) })
                          }
                          placeholder="you@domain.com"
                          className="w-full px-4 py-3 rounded-xs bg-[#faf9f6] border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a]/30 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-3.5 text-xs text-stone-500 font-medium select-none pointer-events-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            minLength={10}
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => {
                              // Strip non-digit characters and strictly limit to 10 digits
                              const digitsOnly = e.target.value.replace(/\D/g, "");
                              setFormData({ ...formData, phone: digitsOnly.slice(0, 10) });
                            }}
                            placeholder="9876543210"
                            className="w-full pl-12 pr-4 py-3 rounded-xs bg-[#faf9f6] border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a]/30 transition-all tabular-nums"
                          />
                        </div>
                      </div>

                      {/* Subject / Matter Domain */}
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          Subject / Matter Domain
                        </label>
                        <input
                          type="text"
                          maxLength={60}
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value.slice(0, 60) })
                          }
                          placeholder="e.g. Commercial Dispute / Writ"
                          className="w-full px-4 py-3 rounded-xs bg-[#faf9f6] border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Brief Case Summary */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Brief Case Summary *
                      </label>
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value.slice(0, 500) })
                        }
                        placeholder="Please describe the core dispute, current court stage, or relief sought..."
                        className="w-full px-4 py-3 rounded-xs bg-[#faf9f6] border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a]/30 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xs bg-gradient-to-r from-[#c5a86a] to-[#b6934c] hover:brightness-110 text-[#0e1217] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Submit Consultation Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
