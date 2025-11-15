"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Hero Section Component
 * Features GSAP ScrollTrigger animations and brand colors
 * Animates on mount with fade-up effect
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // GSAP animation on component mount
  useGSAP(() => {
    // Create animation timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Animate elements in sequence
    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4" // Start 0.4s before previous animation ends
      )
      .from(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );

    // Parallax effect on scroll
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 150,
      opacity: 0.5,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brandBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brandOrange/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        {/* Main heading with gradient text */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Trust Through <span className="text-gradient">Transparency</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-12"
        >
          Verakita brings authenticity to online reviews. Verified ratings you
          can trust, powered by blockchain technology.
        </p>

        {/* Call to action button */}
        <div ref={buttonRef} className="flex gap-4 justify-center items-center">
          <Link
            href="/dashboard"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brandBlue hover:bg-brandBlue-dark rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

            <span className="relative flex items-center gap-2">
              Launch App
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="#learn-more"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brandBlue border-2 border-brandBlue hover:bg-brandBlue hover:text-white rounded-lg transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-brandOrange"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-brandBlue"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Blockchain Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-brandOrange"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>100% Transparent</span>
          </div>
        </div>
      </div>
    </section>
  );
}
