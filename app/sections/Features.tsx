"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Features Section
 * Displays key platform features with GSAP scroll animations
 */
export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: "🛡️",
      title: "Blockchain Verified",
      description:
        "Every review is cryptographically secured on the blockchain, ensuring authenticity and preventing tampering.",
    },
    {
      icon: "⚡",
      title: "Real-Time Analytics",
      description:
        "Get instant insights into customer sentiment with powerful analytics and reporting tools.",
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your existing platforms - Shopify, WooCommerce, and more.",
    },
    {
      icon: "🎯",
      title: "Smart Filtering",
      description:
        "AI-powered moderation automatically filters spam and inappropriate content.",
    },
    {
      icon: "📊",
      title: "Custom Widgets",
      description:
        "Beautiful, customizable review widgets that match your brand perfectly.",
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description:
        "Multi-language support and localization for customers worldwide.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-zinc-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            Powerful Features for{" "}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Everything you need to build trust and credibility with your
            customers through authentic, verified reviews.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-white rounded-2xl p-8 border border-zinc-200 hover:border-[#2563eb] transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-zinc-800 mb-3 group-hover:text-[#2563eb] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="mt-6 flex items-center gap-2 text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-600 mb-6">Ready to see it in action?</p>
          <button className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
