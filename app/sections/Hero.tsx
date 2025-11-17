"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Shield, Search } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
    })
      .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(
        visualRef.current,
        { scale: 0.8, opacity: 0, duration: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-cream overflow-hidden"
    >
      <nav className="relative z-20 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            verakita<span className="text-neon-blue">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <a
              href="#how-it-works"
              className="text-lg font-bold text-deep-black hover:text-neon-blue transition-colors"
            >
              How it works
            </a>
            <a
              href="#features"
              className="text-lg font-bold text-deep-black hover:text-neon-blue transition-colors"
            >
              Features
            </a>
            <a
              href="#verify"
              className="text-lg font-bold text-deep-black hover:text-neon-blue transition-colors"
            >
              Verify
            </a>
          </div>

          <Link
            href="/dashboard"
            className="px-8 py-4 bg-deep-black text-cream font-black text-lg rounded-2xl border-4 border-deep-black hover:bg-neon-blue hover:border-neon-blue transition-all shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]"
          >
            Launch App
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight"
            >
              STOP <span className="text-punchy-orange">FAKE</span>
              <br />
              REVIEWS.
            </h1>
            <p
              ref={subtitleRef}
              className="text-2xl md:text-3xl font-bold text-deep-black/80 max-w-xl"
            >
              Web3-Powered Review Transparency.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/dashboard"
                className="group px-10 py-6 bg-punchy-orange text-white font-black text-xl rounded-2xl border-4 border-deep-black hover:bg-deep-black transition-all shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
              >
                Get Started
              </Link>
              <a
                href="#how-it-works"
                className="px-10 py-6 bg-cream text-deep-black font-black text-xl rounded-2xl border-4 border-deep-black hover:bg-lime-green transition-all shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div ref={visualRef} className="relative">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-neon-blue rounded-[3rem] border-8 border-deep-black shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  <Shield
                    className="w-48 h-48 md:w-64 md:h-64 text-cream"
                    strokeWidth={3}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-lime-green rounded-full border-6 border-deep-black flex items-center justify-center">
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 text-deep-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-punchy-orange rounded-full border-6 border-deep-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] animate-bounce">
                <Search className="w-16 h-16 text-cream" strokeWidth={3} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-lime-green rounded-full border-4 border-deep-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 px-8 py-4 bg-white rounded-2xl border-4 border-deep-black shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hidden lg:block">
        <p className="text-lg font-black">
          <span className="text-lime-green"></span> Blockchain Verified
        </p>
      </div>
    </section>
  );
}
