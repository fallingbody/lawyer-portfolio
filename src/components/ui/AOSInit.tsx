"use client";

import { useEffect } from "react";
// AOS stylesheet supplies the `data-aos-delay` stagger rules; the
// animation states/physics themselves are overridden in globals.css.
import "aos/dist/aos.css";

// Distance (px) an element's top must travel past the viewport bottom to trigger.
const ENTRY_OFFSET = 40;
// Max distance (px) an element's bottom must be below the viewport top to trigger
// on upward scroll, so the animation plays while the element is visible.
const MAX_TOP_ENTRY = 110;
// Margin (px) beyond the viewport at which an element resets for re-animation.
const RESET_MARGIN = 15;

/**
 * Lightweight bidirectional scroll-reveal driver.
 * Toggles `.aos-animate` on every `[data-aos]` element as it enters/leaves
 * the viewport, so animations replay on both downward and upward scroll.
 */
export default function AOSInit() {
  useEffect(() => {
    let ticking = false;

    const updateElements = () => {
      const winH = window.innerHeight;

      document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
        const isAnimated = el.classList.contains("aos-animate");
        const rect = el.getBoundingClientRect();
        const bottomThreshold = Math.min(
          MAX_TOP_ENTRY,
          Math.max(30, (rect.height || 100) * 0.35)
        );

        const inView =
          rect.top < winH - ENTRY_OFFSET && rect.bottom > bottomThreshold;

        if (inView) {
          if (!isAnimated) el.classList.add("aos-animate");
          return;
        }

        if (!isAnimated || el.dataset.aosOnce === "true") return;

        const fullyOut =
          rect.bottom < -RESET_MARGIN || rect.top > winH + RESET_MARGIN;
        if (fullyOut) el.classList.remove("aos-animate");
      });
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateElements();
        ticking = false;
      });
    };

    updateElements();
    // Re-check after images/fonts settle layout.
    const timer = setTimeout(updateElements, 200);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return null;
}
