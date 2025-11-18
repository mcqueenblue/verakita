"use client";

/**
 * Integrations Page
 * Manage connected apps and available integrations
 */
export default function IntegrationsPage() {
  const connectedApps = [
    {
      name: "Shopify",
      description: "Sync reviews with your Shopify store",
      icon: "🛍️",
      connected: true,
      lastSync: "2 hours ago",
    },
    {
      name: "Google Reviews",
      description: "Import Google Business reviews",
      icon: "🔍",
      connected: true,
      lastSync: "1 day ago",
    },
  ];

  const availableApps = [
    {
      name: "WooCommerce",
      description: "Integrate with WooCommerce products",
      icon: "🛒",
      connected: false,
    },
    {
      name: "Trustpilot",
      description: "Connect your Trustpilot account",
      icon: "⭐",
      connected: false,
    },
    {
      name: "Amazon",
      description: "Sync Amazon product reviews",
      icon: "�",
      connected: false,
    },
    {
      name: "Facebook",
      description: "Import Facebook page reviews",
      icon: "👥",
      connected: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Integrations</h2>
        <p className="text-gray-400">
          Connect and manage your integrated apps to sync reviews automatically.
        </p>
      </div>

      {/* Connected Apps */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            Connected Apps ({connectedApps.length})
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectedApps.map((app, i) => (
            <div
              key={i}
              className="bg-dark-card rounded-xl border border-green-500/30 p-6 hover:border-green-500/50 transition-all relative"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
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
                  Active
                </span>
              </div>

              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {app.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{app.description}</p>
              <p className="text-xs text-gray-500 mb-4">
                Last synced: {app.lastSync}
              </p>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg text-sm font-medium transition-all">
                  Configure
                </button>
                <button className="px-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-medium transition-all">
                  Disconnect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Apps */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            Available Integrations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableApps.map((app, i) => (
            <div
              key={i}
              className="bg-dark-card rounded-xl border border-white/10 p-6 hover:border-purple/30 transition-all"
            >
              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {app.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{app.description}</p>

              <button className="w-full px-4 py-2 bg-linear-to-r from-purple to-blue text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] rounded-lg text-sm font-medium transition-all">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
