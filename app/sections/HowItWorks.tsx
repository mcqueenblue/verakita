"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * How It Works Section
 * Step-by-step guide with timeline animation
 */
export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean);
    if (!steps.length || !lineRef.current) return;

    // Animate connecting line
    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each step
    steps.forEach((step, index) => {
      const isEven = index % 2 === 0;

      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: isEven ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Sign Up & Integrate",
      description:
        "Create your account and integrate Verakita with your platform in minutes using our simple setup wizard.",
      icon: "🚀",
    },
    {
      number: "02",
      title: "Collect Reviews",
      description:
        "Automatically request reviews from customers after purchase. Our smart timing ensures maximum response rates.",
      icon: "⭐",
    },
    {
      number: "03",
      title: "Verify on Blockchain",
      description:
        "Every review is cryptographically verified and stored on the blockchain, ensuring authenticity and transparency.",
      icon: "🔐",
    },
    {
      number: "04",
      title: "Display & Grow",
      description:
        "Showcase verified reviews on your website with beautiful widgets. Build trust and boost conversions.",
      icon: "📈",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563eb] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            How <span className="text-gradient">Verakita</span> Works
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Get started in 4 simple steps and start building customer trust
            today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] to-[#f97316] transform -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepsRef.current[index] = el;
                  }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200 hover:border-[#2563eb] transition-all duration-300 hover:shadow-xl">
                      <div className="text-5xl mb-4">{step.icon}</div>
                      <div className="text-sm font-bold text-[#f97316] mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#2563eb] opacity-20 animate-ping" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-zinc-600 mb-6 text-lg">
            Ready to transform your customer reviews?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-800 font-semibold rounded-xl hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
