"use client";

/**
 * Integrations Page
 * Connect third-party services and platforms
 */
export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Shopify",
      description: "Sync reviews with your Shopify store",
      icon: "🛍️",
      connected: true,
    },
    {
      name: "WooCommerce",
      description: "Integrate with WooCommerce products",
      icon: "🛒",
      connected: false,
    },
    {
      name: "Google Reviews",
      description: "Import Google Business reviews",
      icon: "🔍",
      connected: true,
    },
    {
      name: "Trustpilot",
      description: "Connect your Trustpilot account",
      icon: "⭐",
      connected: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-800 mb-2">Integrations</h2>
        <p className="text-zinc-600">
          Connect Verakita with your favorite platforms and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg transition-shadow relative"
          >
            {integration.connected && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Connected
                </span>
              </div>
            )}

            <div className="text-4xl mb-4">{integration.icon}</div>
            <h3 className="text-lg font-semibold text-zinc-800 mb-2">
              {integration.name}
            </h3>
            <p className="text-sm text-zinc-600 mb-4">
              {integration.description}
            </p>

            <button
              className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-opacity ${
                integration.connected
                  ? "bg-zinc-100 text-zinc-700 hover:opacity-80"
                  : "bg-[#2563eb] text-white hover:opacity-90"
              }`}
            >
              {integration.connected ? "Manage" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
