"use client";

export default function Features() {
  return (
    <section className="py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Core Infrastructure
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-colors">
            <h3 className="text-2xl font-bold mb-3 text-white">Tamper-Proof</h3>
            <p className="text-gray-400">
              Reviews cannot be edited once minted
            </p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-colors">
            <h3 className="text-2xl font-bold mb-3 text-white">Trust Score</h3>
            <p className="text-gray-400">On-chain reputation building</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-colors">
            <h3 className="text-2xl font-bold mb-3 text-white">Open Data</h3>
            <p className="text-gray-400">Publicly accessible ledger</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-purple/50 transition-colors">
            <h3 className="text-2xl font-bold mb-3 text-white">SDK Ready</h3>
            <p className="text-gray-400">Integrate in minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
