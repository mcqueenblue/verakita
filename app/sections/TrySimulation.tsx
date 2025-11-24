'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ShoppingCart, Star, Package, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TrySimulation() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = [titleRef.current, subtitleRef.current, cardsRef.current, ctaRef.current];
    
    gsap.from(elements, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-dark-bg overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-purple to-blue"
          >
            See It In Action
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Experience the complete review workflow from purchase to blockchain verification
          </p>
        </div>

        {/* Demo Steps */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="group relative bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-all">
            <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShoppingCart className="w-8 h-8 text-purple-400" />
            </div>
            <div className="absolute top-8 right-8 text-6xl font-bold text-white">1</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Browse & Purchase</h3>
            <p className="text-gray-400">
              Explore our demo marketplace and select from 6 different products to simulate a purchase
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-blue/50 transition-all">
            <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute top-8 right-8 text-6xl font-bold text-white">2</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Write Review</h3>
            <p className="text-gray-400">
              Share your experience with a rating and detailed review that will be stored on-chain
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-all">
            <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Package className="w-8 h-8 text-purple-400" />
            </div>
            <div className="absolute top-8 right-8 text-6xl font-bold text-white">3</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Blockchain Magic</h3>
            <p className="text-gray-400">
              Watch your review get uploaded to Walrus and recorded permanently on Sui blockchain
            </p>
          </div>
        </div>

        {/* Preview Card */}
        <div className="bg-linear-to-br from-purple/10 to-blue/10 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Interactive Demo</h3>
              <p className="text-gray-400 mb-6">
                Perfect for hackathon judges and developers to understand the complete review verification workflow without needing real transactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Connect your Sui wallet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Simulate product purchases</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Submit blockchain-verified reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">See live transaction confirmations</span>
                </li>
              </ul>
            </div>
            
            {/* Mock Product Card */}
            <div className="bg-dark-card border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-square bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-8xl">
                🎧
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg text-white">Wireless Headphones Pro</h4>
                  <div className="text-xl font-bold text-purple-400">$299</div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">4.5 (124 reviews)</span>
                </div>
                <button className="w-full py-3 bg-purple-500/20 text-purple-400 rounded-lg font-medium hover:bg-purple-500/30 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Try Demo Purchase
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <Link href="/marketplace">
            <button className="group relative px-10 py-5 bg-linear-to-r from-purple to-blue rounded-xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105">
              <span className="relative z-10 flex items-center gap-3 text-white cursor-pointer">
                Launch Marketplace Simulation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
