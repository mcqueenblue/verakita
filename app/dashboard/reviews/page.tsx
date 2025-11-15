"use client";

/**
 * Reviews Page
 * Displays and manages user reviews
 */
export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-800 mb-2">Reviews</h2>
        <p className="text-zinc-600">Manage and respond to customer reviews.</p>
      </div>

      {/* Filter/Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#2563eb] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            All Reviews
          </button>
          <button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            Pending
          </button>
          <button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            Responded
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563eb]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#2563eb] font-semibold text-sm">
                    U{i}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-zinc-800">User {i}</p>
                  <p className="text-xs text-zinc-500">2 days ago</p>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-[#f97316]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-zinc-600 mb-4">
              Excellent service and product quality. The team was very
              responsive and helpful throughout the entire process.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-[#2563eb] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Respond
              </button>
              <button className="px-3 py-2 border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
