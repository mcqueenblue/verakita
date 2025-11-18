"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Dashboard Layout with Sidebar - Morpho Dark Theme
 * Used for app.verakita.com dashboard pages
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 256 : 80,
        }}
        className="fixed left-0 top-0 h-screen bg-dark-card border-r border-white/10 z-40 transition-all duration-300"
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
            <div
              style={{
                opacity: sidebarOpen ? 1 : 0,
              }}
              className="flex items-center gap-2 transition-opacity"
            >
              <div>
                <Logo compact={!sidebarOpen} />
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <svg
                className={cn(
                  "w-5 h-5 transition-transform",
                  !sidebarOpen && "rotate-180"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <NavItem
              href="/dashboard"
              icon={<DashboardIcon />}
              label="Overview"
              active={pathname === "/dashboard"}
              collapsed={!sidebarOpen}
            />
            <NavItem
              href="/dashboard/reviews"
              icon={<ReviewsIcon />}
              label="Reviews"
              active={pathname?.startsWith("/dashboard/reviews")}
              collapsed={!sidebarOpen}
            />
            <NavItem
              href="/dashboard/analytics"
              icon={<AnalyticsIcon />}
              label="Analytics"
              active={pathname?.startsWith("/dashboard/analytics")}
              collapsed={!sidebarOpen}
            />
            <NavItem
              href="/dashboard/integrations"
              icon={<IntegrationsIcon />}
              label="Integrations"
              active={pathname?.startsWith("/dashboard/integrations")}
              collapsed={!sidebarOpen}
            />
            <NavItem
              href="/dashboard/api"
              icon={<ApiIcon />}
              label="API"
              active={pathname?.startsWith("/dashboard/api")}
              collapsed={!sidebarOpen}
            />

            {/* Divider */}
            <div className="h-px bg-white/10 my-4" />

            <NavItem
              href="/dashboard/settings"
              icon={<SettingsIcon />}
              label="Settings"
              active={pathname?.startsWith("/dashboard/settings")}
              collapsed={!sidebarOpen}
            />
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-r from-purple to-blue rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    john@example.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        style={{
          marginLeft: sidebarOpen ? 256 : 80,
        }}
        className="min-h-screen transition-all duration-300"
      >
        {/* Top Bar */}
        <header className="h-16 bg-dark-card border-b border-white/10 sticky top-0 z-30 backdrop-blur-md">
          <div className="h-full px-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">
              {getPageTitle(pathname)}
            </h1>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative text-gray-400 hover:text-white">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-purple rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

/**
 * Navigation Item Component
 */
function NavItem({
  href,
  icon,
  label,
  active,
  collapsed,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
        active
          ? "bg-linear-to-r from-purple/20 to-blue/20 text-white border border-purple/30"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      )}
    >
      <span className="w-5 h-5 shrink-0">{icon}</span>
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}

/**
 * Helper function to get page title from pathname
 */
function getPageTitle(pathname: string | null): string {
  if (!pathname) return "Overview";
  if (pathname === "/dashboard") return "Overview";
  if (pathname.startsWith("/dashboard/reviews")) return "Reviews";
  if (pathname.startsWith("/dashboard/analytics")) return "Analytics";
  if (pathname.startsWith("/dashboard/integrations")) return "Integrations";
  if (pathname.startsWith("/dashboard/api")) return "API";
  if (pathname.startsWith("/dashboard/settings")) return "Settings";
  return "Dashboard";
}

// Icon components
function DashboardIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );
}

function ReviewsIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
