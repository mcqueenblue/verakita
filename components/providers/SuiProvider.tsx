/**
 * Sui Wallet Provider Component
 * Wraps app with Sui wallet connectivity
 */

'use client';

import { WalletKitProvider } from '@mysten/wallet-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface SuiProviderProps {
  children: ReactNode;
}

export function SuiProvider({ children }: SuiProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <WalletKitProvider>{children}</WalletKitProvider>
    </QueryClientProvider>
  );
}
