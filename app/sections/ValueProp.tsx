"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="value-prop"
      className="relative min-h-screen bg-deep-black flex items-center justify-center py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={textRef} className="space-y-8">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight">
              <span className="text-white">NO MORE.</span>
              <br />
              <span className="text-punchy-orange">FAKE.</span>
              <br />
              <span className="text-neon-blue">REVIEWS.</span>
            </h2>

            <p className="text-2xl md:text-3xl font-bold text-white/70 max-w-xl">
              Every review is cryptographically verified and stored on-chain. No
              fakes. No manipulation. Just truth.
            </p>
          </div>

          <div ref={cardRef} className="relative">
            <div className="relative bg-cream rounded-[3rem] border-8 border-white p-10 md:p-12 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-lime-green rounded-full border-6 border-deep-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                <CheckCircle
                  className="w-10 h-10 text-deep-black"
                  strokeWidth={3}
                />
              </div>

              <div className="space-y-6">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 fill-punchy-orange text-punchy-orange"
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-black text-deep-black">
                  Amazing Product!
                </h3>

                <p className="text-lg font-bold text-deep-black/70">
                  This product completely exceeded my expectations. The quality
                  is outstanding and delivery was super fast.
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center border-4 border-deep-black">
                    <span className="text-xl font-black text-white">JD</span>
                  </div>
                  <div>
                    <p className="font-black text-deep-black">John Doe</p>
                    <p className="text-sm font-bold text-deep-black/60">
                      Verified Buyer
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t-4 border-deep-black">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-green rounded-xl border-4 border-deep-black">
                    <CheckCircle
                      className="w-5 h-5 text-deep-black"
                      strokeWidth={3}
                    />
                    <span className="font-black text-deep-black">
                      Verified on-chain
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-punchy-orange rounded-full border-6 border-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
