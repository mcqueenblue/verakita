/**
 * API Dashboard Page
 * Manage API keys and documentation
 */
export default function ApiPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">API</h2>
        <p className="text-gray-400">
          Manage your API keys and access documentation.
        </p>
      </div>

      {/* API Keys */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">API Keys</h3>
          <button className="px-4 py-2 bg-linear-to-r from-purple to-blue rounded-lg text-white font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
            + Generate New Key
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Production Key",
              key: "vk_prod_••••••••••••3f2a",
              created: "2024-01-15",
              status: "active",
            },
            {
              name: "Development Key",
              key: "vk_dev_••••••••••••7b9c",
              created: "2024-01-10",
              status: "active",
            },
            {
              name: "Test Key",
              key: "vk_test_••••••••••••1d4e",
              created: "2023-12-20",
              status: "inactive",
            },
          ].map((apiKey, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple/30 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-white font-medium">{apiKey.name}</p>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      apiKey.status === "active"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {apiKey.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-mono">{apiKey.key}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Created: {apiKey.created}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <CopyIcon />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Documentation Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DocCard
          title="Getting Started"
          description="Learn how to authenticate and make your first API call"
          icon={<BookIcon />}
        />
        <DocCard
          title="API Reference"
          description="Complete reference for all available endpoints"
          icon={<CodeIcon />}
        />
        <DocCard
          title="Webhooks"
          description="Set up webhooks to receive real-time notifications"
          icon={<WebhookIcon />}
        />
      </div>

      {/* Usage Stats */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-6">
          API Usage (Last 30 Days)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <UsageStat label="Total Requests" value="124,582" />
          <UsageStat label="Successful" value="123,891" />
          <UsageStat label="Failed" value="691" />
          <UsageStat label="Avg Response" value="142ms" />
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300 mb-3">
            Top Endpoints
          </h4>
          {[
            { endpoint: "POST /api/v1/reviews", calls: 45230, percentage: 36 },
            { endpoint: "GET /api/v1/reviews", calls: 38120, percentage: 31 },
            {
              endpoint: "PUT /api/v1/reviews/:id",
              calls: 24680,
              percentage: 20,
            },
            {
              endpoint: "DELETE /api/v1/reviews/:id",
              calls: 16552,
              percentage: 13,
            },
          ].map((endpoint, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 font-mono">
                  {endpoint.endpoint}
                </span>
                <span className="text-white font-medium">
                  {endpoint.calls.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-purple to-blue"
                  style={{ width: `${endpoint.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all group cursor-pointer">
      <div className="mb-4 text-purple group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function UsageStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

// Icons
function CopyIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
