/**
 * Sui Client Setup
 */

import { SuiClient } from '@mysten/sui/client';
import { SUI_CONFIG } from './config';

// Initialize Sui client
export const suiClient = new SuiClient({ url: SUI_CONFIG.rpcUrl });

/**
 * Get current epoch
 */
export async function getCurrentEpoch() {
  try {
    const epoch = await suiClient.getLatestSuiSystemState();
    return epoch.epoch;
  } catch (error) {
    console.error('Error fetching epoch:', error);
    return null;
  }
}

/**
 * Get account balance
 */
export async function getBalance(address: string) {
  try {
    const balance = await suiClient.getBalance({ owner: address });
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
}

/**
 * Get all objects owned by address
 */
export async function getOwnedObjects(address: string) {
  try {
    const objects = await suiClient.getOwnedObjects({ owner: address });
    return objects;
  } catch (error) {
    console.error('Error fetching owned objects:', error);
    return null;
  }
}
