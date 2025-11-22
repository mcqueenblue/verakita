"use client";

import { useState } from "react";

/**
 * API Keys Management Page
 * For non-dev team members to manage API access
 */
export default function ApiKeysPage() {
  const [keys, setKeys] = useState([
    {
      id: 1,
      name: "Production API Key",
      key: "vk_prod_••••••••••••3f2a",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      permissions: ["read", "write"],
      status: "active",
    },
    {
      id: 2,
      name: "Development Key",
      key: "vk_dev_••••••••••••7b9c",
      created: "2024-01-10",
      lastUsed: "1 day ago",
      permissions: ["read"],
      status: "active",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">API Keys</h2>
          <p className="text-gray-400">
            Manage API keys for system access and integrations
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-linear-to-r from-purple to-blue rounded-lg text-white font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
        >
          + Create New Key
        </button>
      </div>

      {/* API Keys List */}
      <div className="space-y-4">
        {keys.map((apiKey) => (
          <div
            key={apiKey.id}
            className="bg-dark-card border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {apiKey.name}
                  </h3>
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
                <p className="text-sm text-gray-400 font-mono mb-3">
                  {apiKey.key}
                </p>
                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <span>Created: {apiKey.created}</span>
                  <span>Last used: {apiKey.lastUsed}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <CopyIcon />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <EditIcon />
                </button>
                <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            {/* Permissions */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <span className="text-xs text-gray-400">Permissions:</span>
              {apiKey.permissions.map((perm) => (
                <span
                  key={perm}
                  className="px-2 py-1 bg-purple/20 text-purple text-xs rounded"
                >
                  {perm}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Usage Guidelines */}
      <div className="bg-dark-card border border-blue/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          📘 API Key Guidelines
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue">•</span>
            <span>Never share API keys publicly or commit them to version control</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue">•</span>
            <span>Rotate keys regularly for security (recommended: every 90 days)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue">•</span>
            <span>Use separate keys for development, staging, and production</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue">•</span>
            <span>Monitor key usage and revoke if suspicious activity detected</span>
          </li>
        </ul>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark-card border border-white/10 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">
              Create New API Key
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Key Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Production API Key"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Permissions
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/10"
                    />
                    <span className="text-sm text-gray-300">Read</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/10"
                    />
                    <span className="text-sm text-gray-300">Write</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/10"
                    />
                    <span className="text-sm text-gray-300">Delete</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-linear-to-r from-purple to-blue rounded-lg text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
                  Create Key
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Icons
function CopyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}
