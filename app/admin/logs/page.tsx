"use client";

import { useState } from "react";

/**
 * System Logs Page
 * View and filter system logs for debugging and monitoring
 */
export default function LogsPage() {
  const [filter, setFilter] = useState("all");
  const [logs] = useState([
    {
      id: 1,
      timestamp: "2024-11-21 14:32:15",
      level: "info",
      service: "API",
      message: "Review created successfully",
      details: { reviewId: "0x123", user: "0x456" },
    },
    {
      id: 2,
      timestamp: "2024-11-21 14:30:42",
      level: "error",
      service: "Walrus",
      message: "Failed to upload file to Walrus",
      details: { error: "Network timeout", blobId: null },
    },
    {
      id: 3,
      timestamp: "2024-11-21 14:28:10",
      level: "warning",
      service: "Sui",
      message: "Transaction took longer than expected",
      details: { txHash: "0xabc", duration: "5.2s" },
    },
    {
      id: 4,
      timestamp: "2024-11-21 14:25:33",
      level: "info",
      service: "API",
      message: "User profile updated",
      details: { userId: "user_123" },
    },
  ]);

  const filteredLogs = logs.filter(
    (log) => filter === "all" || log.level === filter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">System Logs</h2>
          <p className="text-gray-400">
            Monitor system activity and debug issues
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 bg-dark-card border border-white/10 rounded-lg p-1">
          {["all", "info", "warning", "error"].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === level
                  ? "bg-purple text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-card border border-white/10 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Logs</p>
          <p className="text-2xl font-bold text-white mt-1">{logs.length}</p>
        </div>
        <div className="bg-dark-card border border-green-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-400">Info</p>
          <p className="text-2xl font-bold text-green-400 mt-1">
            {logs.filter((l) => l.level === "info").length}
          </p>
        </div>
        <div className="bg-dark-card border border-yellow-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-400">Warnings</p>
          <p className="text-2xl font-bold text-yellow-400 mt-1">
            {logs.filter((l) => l.level === "warning").length}
          </p>
        </div>
        <div className="bg-dark-card border border-red-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-400">Errors</p>
          <p className="text-2xl font-bold text-red-400 mt-1">
            {logs.filter((l) => l.level === "error").length}
          </p>
        </div>
      </div>

      {/* Logs List */}
      <div className="bg-dark-card border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                  Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        log.level === "info"
                          ? "bg-green-500/20 text-green-400"
                          : log.level === "warning"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {log.service}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {log.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-purple hover:text-white transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-dark-card border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Export Logs
        </h3>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all">
            Export as CSV
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all">
            Export as JSON
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all">
            Download Last 24h
          </button>
        </div>
      </div>
    </div>
  );
}
