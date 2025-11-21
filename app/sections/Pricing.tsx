"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out Verakita",
      features: [
        "Up to 100 reviews/month",
        "Basic verification",
        "Community support",
        "Public API access",
        "Standard response time",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 5,000 reviews/month",
        "Advanced verification",
        "Priority support",
        "Full API access",
        "Custom branding",
        "Analytics dashboard",
        "Webhooks integration",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited reviews",
        "Dedicated blockchain node",
        "24/7 Premium support",
        "Custom smart contracts",
        "White-label solution",
        "SLA guarantee",
        "Dedicated account manager",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32 bg-dark-bg overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include blockchain
            verification.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-dark-card border rounded-2xl p-8 transition-all hover:scale-105 ${
                plan.highlighted
                  ? "border-purple shadow-[0_0_50px_rgba(139,92,246,0.3)] md:scale-105"
                  : "border-white/10 hover:border-purple/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple to-blue px-4 py-1 rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-purple" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/dashboard"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-linear-to-r from-purple to-blue text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-purple/50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include blockchain verification and data immutability
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-purple" />
              No hidden fees
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-purple" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-purple" />
              14-day money back
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
