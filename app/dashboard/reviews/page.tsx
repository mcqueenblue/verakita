"use client";

import { useState } from "react";

/**
 * Reviews Page
 * Displays and manages user reviews
 */
export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      date: "2 days ago",
      rating: 5,
      comment:
        "Excellent service and product quality. The team was very responsive and helpful throughout the entire process.",
      platform: "Google",
      link: "https://google.com/review/1",
    },
    {
      id: 2,
      user: "Sarah Smith",
      date: "3 days ago",
      rating: 4,
      comment:
        "Great experience overall. Delivery was quick and the product exceeded my expectations.",
      platform: "Trustpilot",
      link: "https://trustpilot.com/review/2",
    },
    {
      id: 3,
      user: "Mike Johnson",
      date: "5 days ago",
      rating: 5,
      comment:
        "Outstanding quality and customer service. Will definitely recommend to others!",
      platform: "Shopify",
      link: "https://shopify.com/review/3",
    },
    {
      id: 4,
      user: "Emily Brown",
      date: "1 week ago",
      rating: 4,
      comment:
        "Very satisfied with my purchase. The support team was extremely helpful.",
      platform: "Google",
      link: "https://google.com/review/4",
    },
  ]);

  const refreshReviews = () => {
    // Simulate refresh
    console.log("Refreshing reviews...");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Reviews</h2>
          <p className="text-gray-400">View and manage customer reviews.</p>
        </div>
        <button
          onClick={refreshReviews}
          className="px-4 py-2 bg-white/10 border border-white/10 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <RefreshIcon />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-card border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Reviews</p>
          <p className="text-2xl font-bold text-white mt-1">{reviews.length}</p>
        </div>
        <div className="bg-dark-card border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-400">Avg Rating</p>
          <p className="text-2xl font-bold text-white mt-1">4.8</p>
        </div>
        <div className="bg-dark-card border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-400">This Week</p>
          <p className="text-2xl font-bold text-white mt-1">12</p>
        </div>
        <div className="bg-dark-card border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-400">This Month</p>
          <p className="text-2xl font-bold text-white mt-1">48</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-dark-card rounded-xl border border-white/10 p-6 hover:border-purple/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-r from-purple to-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {review.user.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{review.user}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">{review.date}</p>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-purple">
                      {review.platform}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating ? "text-[#f97316]" : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-4">{review.comment}</p>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple to-blue text-white rounded-lg text-sm font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
            >
              <LinkIcon />
              View on {review.platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Icon Components
function RefreshIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
