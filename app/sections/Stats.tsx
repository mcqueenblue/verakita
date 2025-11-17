"use client";

export default function Stats() {
  return (
    <section className="relative py-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">All Reviews</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">100% Verified</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">L2 Optimized</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">On-Base Network</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">Forever</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Immutable Proofs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
