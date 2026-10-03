import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import AOSInit from "@/components/ui/AOSInit";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adv. Shweta — Advocate & Legal Counsel | High Court Practice",
  description:
    "Distinguished legal practice of Adv. Shweta. Fierce courtroom advocacy, constitutional writs, corporate dispute resolution, and appellate litigation across High Courts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans antialiased selection:bg-[#c5a86a] selection:text-[#0e1217]">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
