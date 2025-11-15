"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis Smooth Scroll Provider
 * Wraps the landing page to enable smooth scrolling with Lenis
 *
 * Usage: Wrap your landing page content with this provider
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (smoothness)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical", // Scroll direction
      gestureOrientation: "vertical",
      smoothWheel: true, // Enable smooth wheel scrolling
      wheelMultiplier: 1, // Wheel scroll speed
      touchMultiplier: 2, // Touch scroll speed
      infinite: false, // Disable infinite scroll
    });

    // Add Lenis class to html element for CSS targeting
    document.documentElement.classList.add("lenis");

    // Request animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}

/**
 * Hook to access Lenis instance
 * Use this to programmatically control scrolling
 */
export function useLenis() {
  useEffect(() => {
    // You can extend this hook to return the Lenis instance if needed
    // For now, it's a placeholder for future functionality
  }, []);
}
