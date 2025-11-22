"use client";
import { Hash, Link2, Shield } from "lucide-react";
export default function HowItWorks() {
  const steps = [
    {
      icon: Hash,
      title: "Submit",
      description: "Review hashed client-side using SHA-256",
    },
    {
      icon: Link2,
      title: "Mint",
      description: "Hash stored on Smart Contract immutably",
    },
    {
      icon: Shield,
      title: "Verify",
      description: "Instant cryptographic proof generation",
    },
  ];
  return (
    <section id="how-it-works" className="relative py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
          The Verification Mechanism
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-purple/20 to-blue/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
