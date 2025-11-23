/**
 * Sui Wallet Hooks
 * Custom hooks for wallet interaction
 */

"use client";

import { useWalletKit } from "@mysten/wallet-kit";
import { useCallback, useEffect, useState } from "react";
import { getBalance } from "@/lib/sui/client";

/**
 * Hook to get current wallet connection status
 */
export function useWallet() {
  const { currentWallet, currentAccount, connect, disconnect, wallets } =
    useWalletKit();

  const isConnected = !!currentAccount;
  const address = currentAccount?.address;

  return {
    wallet: currentWallet,
    account: currentAccount,
    address,
    isConnected,
    connect,
    disconnect,
    wallets,
  };
}

/**
 * Hook to get wallet balance
 */
export function useWalletBalance() {
  const { address } = useWallet();
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = useCallback(async () => {
    if (!address) {
      setBalance(null);
      return;
    }

    setLoading(true);
    try {
      const balanceData = await getBalance(address);
      if (balanceData) {
        // Convert MIST to SUI (1 SUI = 1,000,000,000 MIST)
        const suiBalance = (
          Number(balanceData.totalBalance) / 1_000_000_000
        ).toFixed(4);
        setBalance(suiBalance);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance(null);
    } finally {
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return {
    balance,
    loading,
    refetch: fetchBalance,
  };
}

/**
 * Hook for signing and executing transactions
 */
export function useTransaction() {
  const { currentWallet, currentAccount } = useWalletKit();
  const [loading, setLoading] = useState(false);

  const signAndExecute = useCallback(
    async (transaction: any) => {
      if (!currentWallet || !currentAccount) {
        throw new Error("Wallet not connected");
      }

      setLoading(true);
      try {
        // Use the features API to sign and execute
        const result = await currentWallet.features[
          "sui:signAndExecuteTransactionBlock"
        ]?.signAndExecuteTransactionBlock({
          transactionBlock: transaction,
          account: currentAccount,
          chain: `sui:${currentAccount.chains[0].split(':')[1] || 'testnet'}`,
          options: {
            showEffects: true,
            showObjectChanges: true,
          },
        });
        return result;
      } catch (error) {
        console.error("Transaction failed:", error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [currentWallet, currentAccount]
  );

  return {
    signAndExecute,
    loading,
  };
}
