"use client";

import { useState, useRef } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative min-h-screen bg-deep-black py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-cream rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[5rem] border-8 border-white p-12 md:p-16 lg:p-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-deep-black">
              JOIN THE
              <br />
              TRUST
              <br />
              REVOLUTION
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-deep-black/70">
              Be part of the movement to eliminate fake reviews and restore
              trust in online commerce
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-8 py-6 text-xl font-bold rounded-2xl border-6 border-deep-black focus:outline-none focus:ring-4 focus:ring-neon-blue"
                />
                <button
                  type="submit"
                  className="px-12 py-6 bg-punchy-orange text-white font-black text-xl rounded-2xl border-6 border-deep-black hover:bg-deep-black transition-all shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </div>
            </form>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lime-green rounded-full border-4 border-deep-black flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg font-black text-deep-black">
                  Free Beta Access
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neon-blue rounded-full border-4 border-deep-black flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg font-black text-deep-black">
                  No Credit Card
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-punchy-orange rounded-full border-4 border-deep-black flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg font-black text-deep-black">
                  Early Bird Perks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center">
        <p className="text-white/60 font-bold text-lg">
          © 2024 Verakita. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
