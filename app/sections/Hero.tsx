"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8 })
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(orbRef.current, { scale: 0.8, opacity: 0, duration: 1 }, "-=0.6");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[100px]" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#protocol"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Protocol
              </a>
              <a
                href="#developers"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Developers
              </a>
              <a
                href="#community"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Community
              </a>
            </div>
            <Link
              href="/dashboard"
              className="group relative px-6 py-2.5 bg-linear-to-r from-purple to-blue rounded-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <span className="relative z-10 text-white">Launch App</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple to-blue"
            >
              Review Transparency,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                Immutable on Chain
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
            >
              The anti-fake review protocol powered by cryptographic proofs.
              Verifiable, transparent, and unbribable.
            </p>
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-linear-to-r from-purple to-blue rounded-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Start Verifying
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 text-white rounded-lg font-semibold border border-white/10 hover:border-purple/50 hover:bg-white/5 transition-all backdrop-blur-sm">
                Read Docs
              </button>
            </div>
          </div>

          <div ref={orbRef} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple to-blue opacity-20 blur-3xl animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-linear-to-br from-purple to-blue opacity-30 blur-2xl" />
              <div className="absolute inset-16 rounded-full border border-white/20 backdrop-blur-md bg-white/5">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple/40 to-blue/40" />
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-16 rounded-full border border-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple to-blue shadow-[0_0_80px_rgba(139,92,246,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
