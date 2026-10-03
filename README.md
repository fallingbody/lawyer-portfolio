# Advocate Shweta | High Court Chambers

A modern, high-performance, and luxury legal portfolio web application built with **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Lucide Icons**. Designed specifically for high-stakes litigation, corporate insolvency, appellate disputes, and constitutional law advisory.

---

## ⚖️ Features

- **Luxury Legal Aesthetics**: Deep onyx dark-mode palette (`#080a0f`, `#0d1117`) paired with champagne gold accents (`#c5a86a`).
- **Smooth Bidirectional Animations**: Curated scroll-reactive motion powered by custom CSS transitions and AOS.
- **Interactive Chamber Metrics**: Viewport-triggered animated counters for cases argued, high court wins, and years of practice.
- **Client Consultation Intake**: Validated direct chamber consultation booking form with strict character and phone number limits.
- **Client Testimonials Carousel**: Horizontal scroll-snap and drag-interactive testimonials with custom navigation controls.
- **Optimized Server & Client Architecture**:
  - Pure presentational components render as **React Server Components (RSC)** for minimal client bundle size.
  - Interactive islands (`Navbar`, `AboutMe` counter, `Connect` form, `Testimonials`) hydrate seamlessly on the client.
  - Fully responsive across mobile, tablet, desktop, and ultra-wide screens.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [AOS](https://michalsnik.github.io/aos/) + Custom CSS keyframes
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
├── public/
│   └── images/               # Optimized case studies, precedents & portrait assets
├── src/
│   ├── app/
│   │   ├── favicon.ico       # Chamber favicon
│   │   ├── globals.css       # Tailwind CSS v4 setup & bespoke animations
│   │   ├── layout.tsx        # Root layout, metadata & typography
│   │   └── page.tsx          # Homepage stitching all legal sections
│   └── components/
│       └── ui/
│           ├── AOSInit.tsx         # Scroll animation observer & rAF throttle
│           ├── AboutMe.tsx         # Professional bio & animated metrics counter
│           ├── Achievements.tsx    # Major court milestones & publications (RSC)
│           ├── Connect.tsx         # Validated chamber consultation intake
│           ├── Footer.tsx          # Minimalist luxury footer (RSC)
│           ├── HeroSection.tsx     # Hero banner & practice pillars (RSC)
│           ├── Navbar.tsx          # Sticky glassmorphic navigation
│           ├── NotableCases.tsx    # Landmark rulings & case briefs (RSC)
│           ├── PracticeAreas.tsx   # Core legal specializations (RSC)
│           └── Testimonials.tsx    # Client & corporate endorsements carousel
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd law
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

- `npm run dev` - Starts the development server with Turbopack.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Runs the built production application.
- `npm run lint` - Runs ESLint code quality checks.

---

## 📄 License

Private & Confidential. All rights reserved.
