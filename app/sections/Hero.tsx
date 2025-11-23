"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { WalletButton } from "@/components/WalletButton";
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
            <div className="flex items-center gap-4">
              <WalletButton />
              <Link
                href="/dashboard"
                className="group relative px-6 py-2.5 bg-linear-to-r from-purple to-blue rounded-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                <span className="relative z-10 text-white">Launch App</span>
              </Link>
            </div>
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
              <Link href="/dashboard">
              <button className="group relative px-8 py-4 bg-linear-to-r from-purple to-blue rounded-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Start Verifying
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              </Link>
              <Link href="#">
              <button className="px-8 py-4 text-white rounded-lg font-semibold border border-white/10 hover:border-purple/50 hover:bg-white/5 transition-all backdrop-blur-sm">
                Read Docs
              </button>
              </Link>
            </div>
          </div>

          {/* Planet Orb */}
          <div ref={orbRef} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple to-blue opacity-20 blur-3xl animate-pulse" />

              {/* Planet Sphere with 3D effect */}
              <div
                className="absolute inset-12 rounded-full overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.4)]"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6) 50%, rgba(30, 27, 75, 0.9))",
                  boxShadow:
                    "inset -20px -20px 50px rgba(0, 0, 0, 0.5), inset 20px 20px 50px rgba(139, 92, 246, 0.2)",
                }}
              >
                {/* Animated gradient overlay for rotation effect */}
                <div
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(139, 92, 246, 0.4) 50%, transparent 70%)",
                    animation: "rotate 8s linear infinite",
                  }}
                />

                {/* Surface details - rings/stripes */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-white/10 blur-sm" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-white/10 blur-sm" />
                </div>

                {/* Light spots (stars on planet) */}
                <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-white/60 blur-[1px]" />
                <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px]" />
                <div className="absolute bottom-[30%] left-[40%] w-1 h-1 rounded-full bg-white/50 blur-[1px]" />
              </div>

              {/* Orbital Ring */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: "rotateRing 20s linear infinite" }}
              >
                <div
                  className="w-[120%] h-[30%] border-2 border-purple/30 rounded-full"
                  style={{
                    transform: "rotateX(75deg)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                  }}
                />
              </div>

              {/* Floating particles around planet */}
              <div className="absolute inset-0">
                <div className="absolute top-[10%] right-[20%] w-1 h-1 rounded-full bg-purple/60 animate-ping" />
                <div
                  className="absolute bottom-[15%] left-[15%] w-1 h-1 rounded-full bg-blue/60 animate-ping"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-[50%] left-[5%] w-1 h-1 rounded-full bg-white/40 animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
