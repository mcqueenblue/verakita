"use client";

/**
 * Admin Settings Page
 * System configuration for non-technical users
 */
export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">System Settings</h2>
        <p className="text-gray-400">
          Configure system parameters and preferences
        </p>
      </div>

      {/* General Settings */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          General Settings
        </h3>
        <div className="space-y-6">
          <SettingRow
            label="System Name"
            description="Display name for your Verakita instance"
            value="Verakita Production"
          />
          <SettingRow
            label="Admin Email"
            description="Primary contact email for system notifications"
            value="admin@verakita.com"
          />
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="text-white font-medium">Maintenance Mode</p>
              <p className="text-sm text-gray-400 mt-1">
                Temporarily disable public access for maintenance
              </p>
            </div>
            <ToggleSwitch enabled={false} />
          </div>
        </div>
      </div>

      {/* Blockchain Settings */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          Blockchain Configuration
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Sui Network
            </label>
            <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple/50 focus:outline-none">
              <option value="mainnet">Mainnet</option>
              <option value="testnet" selected>
                Testnet
              </option>
              <option value="devnet">Devnet</option>
            </select>
            <p className="text-xs text-gray-500 mt-2">
              Current: Testnet (https://fullnode.testnet.sui.io)
            </p>
          </div>

          <SettingRow
            label="Review Package ID"
            description="Smart contract address for review system"
            value="0x..."
          />

          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="text-white font-medium">Auto Gas Management</p>
              <p className="text-sm text-gray-400 mt-1">
                Automatically optimize gas for transactions
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </div>
      </div>

      {/* Walrus Storage Settings */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          Walrus Storage
        </h3>
        <div className="space-y-6">
          <SettingRow
            label="Publisher URL"
            description="Walrus publisher endpoint"
            value="https://publisher.walrus-testnet.walrus.space"
          />
          <SettingRow
            label="Aggregator URL"
            description="Walrus aggregator endpoint"
            value="https://aggregator.walrus-testnet.walrus.space"
          />
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Default Storage Duration (Epochs)
            </label>
            <input
              type="number"
              defaultValue={5}
              min={1}
              max={100}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple/50 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Files will be stored for this many epochs by default
            </p>
          </div>
        </div>
      </div>

      {/* API Rate Limiting */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          API Rate Limiting
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Requests per Minute (per API Key)
            </label>
            <input
              type="number"
              defaultValue={100}
              min={10}
              max={1000}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple/50 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="text-white font-medium">Enable Rate Limiting</p>
              <p className="text-sm text-gray-400 mt-1">
                Protect API from abuse and overuse
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          Email Notifications
        </h3>
        <div className="space-y-4">
          <NotificationSetting
            title="System Errors"
            description="Get notified when critical errors occur"
            enabled={true}
          />
          <NotificationSetting
            title="Daily Summary"
            description="Receive daily activity summary"
            enabled={true}
          />
          <NotificationSetting
            title="Security Alerts"
            description="Important security notifications"
            enabled={true}
          />
          <NotificationSetting
            title="New API Keys"
            description="Alert when new API keys are created"
            enabled={false}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
          Reset to Defaults
        </button>
        <button className="px-6 py-2 bg-linear-to-r from-purple to-blue rounded-lg text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SettingRow({
  label,
  description,
  value,
}: {
  label: string;
  description: string;
  value: string;
}) {
  return (
    <div className="space-y-2 pb-4 border-b border-white/5">
      <label className="block text-sm font-medium text-white">{label}</label>
      <p className="text-xs text-gray-400">{description}</p>
      <input
        type="text"
        defaultValue={value}
        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple/50 focus:outline-none focus:ring-2 focus:ring-purple/20 transition-all"
      />
    </div>
  );
}

function ToggleSwitch({ enabled }: { enabled: boolean }) {
  return (
    <button
      className={`relative w-12 h-6 rounded-full transition-colors ${
        enabled ? "bg-linear-to-r from-purple to-blue" : "bg-white/20"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function NotificationSetting({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5">
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
      <ToggleSwitch enabled={enabled} />
    </div>
  );
}
