/**
 * Analytics Dashboard Page
 * Shows detailed analytics and metrics
 */
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Analytics</h2>
        <p className="text-gray-400">
          Track your performance metrics and insights.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$12,458"
          trend="+18.2%"
          positive
        />
        <MetricCard
          title="Conversion Rate"
          value="3.24%"
          trend="+2.1%"
          positive
        />
        <MetricCard
          title="Avg. Review Score"
          value="4.7/5.0"
          trend="+0.3"
          positive
        />
      </div>

      {/* Performance Overview */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-4">
          Performance Overview
        </h3>
        <div className="space-y-4">
          <PerformanceBar label="Review Completion" value={87} color="purple" />
          <PerformanceBar label="User Engagement" value={92} color="blue" />
          <PerformanceBar label="Response Time" value={76} color="green" />
          <PerformanceBar
            label="Customer Satisfaction"
            value={94}
            color="purple"
          />
        </div>
      </div>

      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-3">
            {[
              { source: "Direct", percentage: 45, value: "1,245" },
              { source: "Organic Search", percentage: 30, value: "832" },
              { source: "Social Media", percentage: 15, value: "416" },
              { source: "Referral", percentage: 10, value: "277" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.source}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-purple to-blue"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Reviews */}
        <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-4">
            Top Performing Reviews
          </h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-linear-to-r from-purple/20 to-blue/20 rounded-full flex items-center justify-center border border-purple/30">
                    <span className="text-purple text-sm font-semibold">
                      {i}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">
                      Review #{1000 + i}
                    </p>
                    <p className="text-xs text-gray-400">Product Category</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-purple font-semibold">★ 5.0</p>
                  <p className="text-xs text-gray-400">{45 - i * 5} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  trend,
  positive,
}: {
  title: string;
  value: string;
  trend: string;
  positive: boolean;
}) {
  return (
    <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all">
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p
        className={`text-sm font-medium ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {trend} from last period
      </p>
    </div>
  );
}

function PerformanceBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-medium">{value}%</span>
      </div>
      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${
            color === "purple"
              ? "from-purple to-purple/60"
              : color === "blue"
              ? "from-blue to-blue/60"
              : "from-green-500 to-green-400"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
