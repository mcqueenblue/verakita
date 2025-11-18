/**
 * Settings Dashboard Page
 * Essential account and notification settings
 */
"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
        <p className="text-gray-400">
          Manage your account and notification preferences.
        </p>
      </div>

      {/* Account Settings */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-6">
          Account Settings
        </h3>

        <div className="space-y-6">
          <SettingRow
            label="Company Name"
            description="This is your company's visible name"
            value="Verakita Inc."
          />
          <SettingRow
            label="Email Address"
            description="Your primary contact email"
            value="admin@verakita.com"
          />
          <SettingRow
            label="Website"
            description="Your company website URL"
            value="https://verakita.com"
          />
          <div className="pt-4 border-t border-white/10">
            <button className="px-6 py-2 bg-linear-to-r from-purple to-blue rounded-lg text-white font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-6">Security</h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-white font-medium">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Add an extra layer of security to your account
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>

          <div className="pt-4 border-t border-white/10">
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-6">Notifications</h3>

        <div className="space-y-4">
          <NotificationSetting
            title="New Reviews"
            description="Get notified when someone submits a new review"
            enabled={true}
          />
          <NotificationSetting
            title="Weekly Summary"
            description="Receive a weekly summary of your review analytics"
            enabled={true}
          />
          <NotificationSetting
            title="Security Alerts"
            description="Important security updates and alerts"
            enabled={true}
          />
        </div>
      </div>

      {/* API Settings */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors">
        <h3 className="text-lg font-semibold text-white mb-6">API Settings</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
            <div>
              <p className="text-white font-medium">API Key</p>
              <p className="text-sm text-gray-400 mt-1">
                Use this key to authenticate API requests
              </p>
            </div>
            <button className="px-4 py-2 bg-purple/20 text-purple hover:bg-purple/30 rounded-lg text-sm font-medium transition-colors">
              Generate New Key
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-dark-card border border-red-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h3>
        <p className="text-sm text-gray-400 mb-4">
          These actions are irreversible. Please proceed with caution.
        </p>
        <div className="space-y-3">
          <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 font-medium transition-colors w-full text-left">
            Delete Account
          </button>
        </div>
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
    <div className="space-y-2">
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
