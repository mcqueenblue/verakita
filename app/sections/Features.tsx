"use client";

import { useRef } from "react";
import { Database, FileCode, LayoutDashboard, Globe } from "lucide-react";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Immutable Storage",
      description:
        "Reviews are permanently stored on-chain and cannot be altered or deleted",
      icon: Database,
    },
    {
      title: "Smart Contract Verification",
      description: "Automated verification through transparent smart contracts",
      icon: FileCode,
    },
    {
      title: "Merchant Dashboard",
      description:
        "Comprehensive analytics and review management for businesses",
      icon: LayoutDashboard,
    },
    {
      title: "Public Explorer",
      description:
        "Anyone can verify and explore reviews on the public blockchain",
      icon: Globe,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative min-h-screen bg-deep-black py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-20">
          TRUST
          <br />
          LAYER
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-cream rounded-[2rem] border-6 border-white p-10 hover:scale-105 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]"
              >
                <div className="w-20 h-20 bg-neon-blue rounded-2xl border-6 border-deep-black flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-deep-black" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-xl font-bold text-deep-black/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
