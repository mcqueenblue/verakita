/**
 * Admin Dashboard Home
 * Overview of system metrics and health
 */

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h2>
        <p className="text-gray-400">
          System overview and management tools
        </p>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <HealthCard
          title="API Status"
          value="Healthy"
          status="success"
          icon={<CheckCircleIcon />}
        />
        <HealthCard
          title="Sui Network"
          value="Connected"
          status="success"
          icon={<NetworkIcon />}
        />
        <HealthCard
          title="Walrus Storage"
          value="Online"
          status="success"
          icon={<StorageIcon />}
        />
        <HealthCard
          title="Response Time"
          value="142ms"
          status="warning"
          icon={<ClockIcon />}
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Reviews"
          value="1,234"
          change="+12.5%"
          positive
        />
        <StatCard
          title="Active Users"
          value="856"
          change="+8.2%"
          positive
        />
        <StatCard
          title="API Requests (24h)"
          value="45.2K"
          change="+15.3%"
          positive
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recent API Activity
        </h3>
        <div className="space-y-3">
          {[
            { endpoint: 'POST /api/reviews', status: 200, time: '2 min ago' },
            { endpoint: 'GET /api/reviews', status: 200, time: '5 min ago' },
            { endpoint: 'POST /api/walrus/upload', status: 201, time: '8 min ago' },
            { endpoint: 'GET /api/user/profile', status: 200, time: '12 min ago' },
          ].map((log, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-300">
                  {log.endpoint}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    log.status === 200 || log.status === 201
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {log.status}
                </span>
                <span className="text-xs text-gray-500">{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickAction
          title="Manage API Keys"
          description="Create, revoke, or rotate API keys"
          href="/admin/api-keys"
          icon={<KeyIcon />}
        />
        <QuickAction
          title="View Logs"
          description="Access system and error logs"
          href="/admin/logs"
          icon={<DocumentIcon />}
        />
        <QuickAction
          title="System Settings"
          description="Configure system parameters"
          href="/admin/settings"
          icon={<SettingsIcon />}
        />
      </div>
    </div>
  );
}

function HealthCard({
  title,
  value,
  status,
  icon,
}: {
  title: string;
  value: string;
  status: 'success' | 'warning' | 'error';
  icon: React.ReactNode;
}) {
  const colors = {
    success: 'border-green-500/30 bg-green-500/5',
    warning: 'border-yellow-500/30 bg-yellow-500/5',
    error: 'border-red-500/30 bg-red-500/5',
  };

  return (
    <div
      className={`bg-dark-card border rounded-xl p-6 ${colors[status]} transition-all`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-gray-400">{icon}</div>
        <div
          className={`w-2 h-2 rounded-full ${
            status === 'success'
              ? 'bg-green-400'
              : status === 'warning'
              ? 'bg-yellow-400'
              : 'bg-red-400'
          }`}
        />
      </div>
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
}

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
    <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all">
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p
        className={`text-sm font-medium ${
          positive ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {change} from yesterday
      </p>
    </div>
  );
}

function QuickAction({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all group cursor-pointer"
    >
      <div className="text-purple mb-4 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </a>
  );
}

// Icons
function CheckCircleIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function StorageIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
