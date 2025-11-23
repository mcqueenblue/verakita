/**
 * Sui Network Configuration
 */

import { getFullnodeUrl } from '@mysten/sui/client';

export const SUI_NETWORK = (process.env.NEXT_PUBLIC_SUI_NETWORK || 'testnet') as 'mainnet' | 'testnet' | 'devnet' | 'localnet';

export const SUI_CONFIG = {
  network: SUI_NETWORK,
  rpcUrl: process.env.NEXT_PUBLIC_SUI_RPC_URL || getFullnodeUrl(SUI_NETWORK),
  faucetUrl: process.env.NEXT_PUBLIC_SUI_FAUCET_URL,
};

export const WALRUS_CONFIG = {
  publisherUrl: process.env.NEXT_PUBLIC_WALRUS_PUBLISHER_URL || 'https://publisher.walrus-testnet.walrus.space',
  aggregatorUrl: process.env.NEXT_PUBLIC_WALRUS_AGGREGATOR_URL || 'https://aggregator.walrus-testnet.walrus.space',
};

export const CONTRACT_ADDRESSES = {
  reviewPackageId: process.env.NEXT_PUBLIC_REVIEW_PACKAGE_ID || '',
  reviewRegistryId: process.env.NEXT_PUBLIC_REVIEW_REGISTRY_ID || '',
};

// Feature flags
export const FEATURES = {
  enableBlockchain: process.env.NEXT_PUBLIC_ENABLE_BLOCKCHAIN === 'true',
  enableWalrus: process.env.NEXT_PUBLIC_ENABLE_WALRUS === 'true',
};
