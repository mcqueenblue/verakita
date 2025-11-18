/**
 * Dashboard Home Page - Morpho Dark Theme
 * Shows overview statistics and recent activity
 */
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome back! 👋</h2>
        <p className="text-gray-400">
          Here's what's happening with your reviews today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Reviews"
          value="1,234"
          change={"+12.5%"}
          positive
        />
        <StatCard title="Avg Rating" value="4.8" change={"+0.3"} positive />
        <StatCard title="Active Users" value="856" change={"+8.2%"} positive />
        <StatCard
          title="Response Rate"
          value="94%"
          change={"-2.1%"}
          positive={false}
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Reviews
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 bg-linear-to-r from-purple/20 to-blue/20 rounded-full flex items-center justify-center shrink-0 border border-purple/30">
                  <span className="text-purple font-semibold">U{i}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">
                    User {i} left a review
                  </p>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    Great service! Highly recommended for anyone looking for
                    quality and reliability.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-purple"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <QuickActionButton icon={<PlusIcon />} label="Create Review" />
            <QuickActionButton icon={<ExportIcon />} label="Export Data" />
            <QuickActionButton icon={<IntegrationIcon />} label="Integration" />
            <QuickActionButton icon={<CodeIcon />} label="API Key" />
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">
            Performance Overview
          </h3>
          <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none focus:border-purple/50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Mini Chart Visualization */}
        <div className="space-y-6">
          {[
            {
              label: "Review Submissions",
              value: 234,
              max: 300,
              color: "purple",
            },
            { label: "User Engagement", value: 178, max: 250, color: "blue" },
            {
              label: "API Requests",
              value: 892,
              max: 1000,
              color: "green-500",
            },
          ].map((metric, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{metric.label}</span>
                <span className="text-sm font-semibold text-white">
                  {metric.value.toLocaleString()} /{" "}
                  {metric.max.toLocaleString()}
                </span>
              </div>
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${metric.color}/50 to-${metric.color} rounded-full transition-all duration-500`}
                  style={{ width: `${(metric.value / metric.max) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-400">↑ 12%</span>
                <span className="text-xs text-gray-500">vs last period</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Stat Card Component with dark theme
 */
function StatCard({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-3xl font-bold text-white mb-2">{value}</p>
      <div className="flex items-center gap-1">
        <span
          className={`text-sm font-medium ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-gray-500">vs last month</span>
      </div>
    </div>
  );
}

/**
 * Quick Action Button Component
 */
function QuickActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple/30 transition-all group">
      <span className="text-purple group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="text-xs text-gray-300 group-hover:text-white transition-colors text-center">
        {label}
      </span>
    </button>
  );
}

// Icon Components
function PlusIcon() {
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
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function ExportIcon() {
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
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function IntegrationIcon() {
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function CodeIcon() {
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
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}
