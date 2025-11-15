"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * FadeUp Component - GSAP Animation Example
 *
 * A reusable component that animates children with a fade-up effect
 * Uses GSAP ScrollTrigger for scroll-based animations
 *
 * @param children - Content to animate
 * @param delay - Animation delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 0.8)
 * @param y - Y-axis distance to animate from (default: 60)
 * @param triggerOnScroll - Whether to trigger on scroll (default: true)
 *
 * @example
 * <FadeUp delay={0.2}>
 *   <h2>This will fade up on scroll</h2>
 * </FadeUp>
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  y = 60,
  triggerOnScroll = true,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  triggerOnScroll?: boolean;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  // GSAP animation hook
  useGSAP(() => {
    if (!elementRef.current) return;

    // Base animation properties
    const animationProps = {
      y,
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
    };

    if (triggerOnScroll) {
      // Scroll-triggered animation
      gsap.from(elementRef.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%", // Start when element is 85% from the top
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });
    } else {
      // Immediate animation (no scroll trigger)
      gsap.from(elementRef.current, animationProps);
    }
  }, [delay, duration, y, triggerOnScroll]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

/**
 * StaggerFadeUp Component - GSAP Stagger Animation Example
 *
 * Animates multiple children with a staggered fade-up effect
 * Each child animates one after another with a delay
 *
 * @param children - Content to animate
 * @param stagger - Delay between each child animation (default: 0.15)
 *
 * @example
 * <StaggerFadeUp>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggerFadeUp>
 */
export function StaggerFadeUp({
  children,
  stagger = 0.15,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Get all direct children
    const items = containerRef.current.children;

    // Stagger animation for all children
    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, [stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

/**
 * ParallaxSection Component - GSAP Parallax Example
 *
 * Creates a parallax scrolling effect on the element
 * Element moves at a different speed than the scroll
 *
 * @param children - Content to apply parallax effect
 * @param speed - Parallax speed (default: 0.5, range: 0-1)
 *
 * @example
 * <ParallaxSection speed={0.3}>
 *   <img src="/hero.jpg" alt="Hero" />
 * </ParallaxSection>
 */
export function ParallaxSection({
  children,
  speed = 0.5,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Parallax scroll effect
    gsap.to(sectionRef.current, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Smooth scrubbing effect
      },
    });
  }, [speed]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

/**
 * ScaleOnScroll Component - GSAP Scale Animation
 *
 * Scales element on scroll with smooth transition
 * Great for cards, images, and feature highlights
 *
 * @example
 * <ScaleOnScroll>
 *   <Card />
 * </ScaleOnScroll>
 */
export function ScaleOnScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.from(elementRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
