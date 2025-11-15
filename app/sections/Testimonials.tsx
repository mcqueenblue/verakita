"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Section
 * Customer testimonials with staggered card animations
 */
export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    // Create timeline for staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate cards with stagger
    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "👩‍💼",
      rating: 5,
      text: "Verakita has completely transformed how we handle customer feedback. The blockchain verification gives our customers confidence, and we've seen a 40% increase in review submissions.",
    },
    {
      name: "Michael Chen",
      role: "E-commerce Director",
      image: "👨‍💼",
      rating: 5,
      text: "The integration was seamless, and the analytics dashboard provides insights we never had before. Our conversion rate improved by 25% after implementing Verakita.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "👩",
      rating: 5,
      text: "Finally, a review platform that customers actually trust! The verified badge on our reviews has made a huge difference in building credibility.",
    },
    {
      name: "David Park",
      role: "Founder, RetailHub",
      image: "👨",
      rating: 5,
      text: "Best decision we made this year. The custom widgets look amazing on our site, and customer support is outstanding. Highly recommended!",
    },
    {
      name: "Lisa Anderson",
      role: "Product Manager",
      image: "👩‍🦰",
      rating: 5,
      text: "The AI-powered moderation saves us hours every week. No more spam reviews, and the multi-language support helped us expand internationally.",
    },
    {
      name: "James Wilson",
      role: "COO, GlobalShop",
      image: "👨‍🦱",
      rating: 5,
      text: "Verakita's real-time analytics help us respond to customer concerns instantly. The ROI has been incredible - worth every penny!",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2563eb] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f97316] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            Loved by <span className="text-gradient">Thousands</span> of
            Businesses
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say about their experience with Verakita.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-[#2563eb] transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#f97316]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-zinc-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-zinc-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Customer
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "1M+", label: "Reviews Verified" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#f97316] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
