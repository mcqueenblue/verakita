"use client";

import { useRef } from "react";
import { Pen, Lock, Link2, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "WRITE",
      description: "User submits an authentic review for a product or service",
      icon: Pen,
      color: "bg-neon-blue",
    },
    {
      number: "02",
      title: "HASH",
      description: "System generates SHA-256 cryptographic hash of the review",
      icon: Lock,
      color: "bg-punchy-orange",
    },
    {
      number: "03",
      title: "MINT",
      description: "Proof of review is permanently stored on the blockchain",
      icon: Link2,
      color: "bg-lime-green",
    },
    {
      number: "04",
      title: "VERIFY",
      description: "Anyone can publicly verify the review authenticity",
      icon: CheckCircle,
      color: "bg-neon-blue",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative min-h-screen bg-deep-black py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-cream rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[5rem] border-8 border-white p-12 md:p-16 lg:p-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-deep-black mb-20 text-center">
            HOW IT
            <br />
            WORKS
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-[2rem] border-6 border-deep-black p-8 lg:p-10 hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)]"
                >
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-deep-black text-cream rounded-2xl border-6 border-deep-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                    <span className="text-2xl font-black">{step.number}</span>
                  </div>
                  <div
                    className={`w-20 h-20 ${step.color} rounded-2xl border-6 border-deep-black flex items-center justify-center mb-6`}
                  >
                    <Icon
                      className="w-10 h-10 text-deep-black"
                      strokeWidth={3}
                    />
                  </div>
                  <h3 className="text-4xl font-black text-deep-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl font-bold text-deep-black/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-4 bg-deep-black text-cream rounded-2xl border-6 border-deep-black">
              <span className="text-2xl font-black"></span>
              <span className="text-xl md:text-2xl font-black">
                Immutable Transparent Trustworthy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
