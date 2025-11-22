/**
 * Wallet Connect Button Component
 * For connecting Sui wallets
 */

'use client';

import { useWallet, useWalletBalance } from '@/lib/sui/hooks';
import { useState } from 'react';

export function WalletButton() {
  const { isConnected, address, connect, disconnect, wallets } = useWallet();
  const { balance, loading: balanceLoading } = useWalletBalance();
  const [showWallets, setShowWallets] = useState(false);

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        {/* Balance Display */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
          <svg
            className="w-4 h-4 text-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-white">
            {balanceLoading ? '...' : `${balance || '0'} SUI`}
          </span>
        </div>

        {/* Address & Disconnect */}
        <button
          onClick={() => disconnect()}
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple/20 to-blue/20 hover:from-purple/30 hover:to-blue/30 rounded-lg border border-purple/30 transition-all group"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowWallets(!showWallets)}
        className="px-6 py-2.5 bg-linear-to-r from-purple to-blue hover:from-purple/90 hover:to-blue/90 rounded-lg font-medium text-white transition-all shadow-lg shadow-purple/25 hover:shadow-purple/40"
      >
        Connect Wallet
      </button>

      {/* Wallet Selection Dropdown */}
      {showWallets && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowWallets(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-dark-card border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="p-3 border-b border-white/10">
              <p className="text-sm font-semibold text-white">Select Wallet</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Choose your preferred wallet
              </p>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => {
                    connect(wallet.name);
                    setShowWallets(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors group"
                >
                  {wallet.icon && (
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-8 h-8 rounded-lg"
                    />
                  )}
                  <div className="text-left flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-purple transition-colors">
                      {wallet.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <div className="p-3 border-t border-white/10 bg-white/5">
              <p className="text-xs text-gray-400 text-center">
                New to Sui?{' '}
                <a
                  href="https://docs.sui.io/guides/developer/getting-started/sui-install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:text-blue transition-colors"
                >
                  Get a wallet
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
