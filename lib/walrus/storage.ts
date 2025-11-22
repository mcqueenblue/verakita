/**
 * Walrus Storage Utilities
 * For decentralized storage of review content and media
 */

import { WALRUS_CONFIG } from '../sui/config';

export interface WalrusUploadResponse {
  blobId: string;
  endEpoch: number;
  cost: number;
}

/**
 * Upload file to Walrus storage
 */
export async function uploadToWalrus(
  file: File | Blob,
  epochs: number = 5
): Promise<WalrusUploadResponse> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(
      `${WALRUS_CONFIG.publisherUrl}/v1/store?epochs=${epochs}`,
      {
        method: 'PUT',
        body: file,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.alreadyCertified) {
      return {
        blobId: data.alreadyCertified.blobId,
        endEpoch: data.alreadyCertified.endEpoch,
        cost: 0,
      };
    }

    if (data.newlyCreated) {
      return {
        blobId: data.newlyCreated.blobObject.blobId,
        endEpoch: data.newlyCreated.blobObject.storage.endEpoch,
        cost: data.newlyCreated.cost || 0,
      };
    }

    throw new Error('Unexpected response format');
  } catch (error) {
    console.error('Error uploading to Walrus:', error);
    throw error;
  }
}

/**
 * Get file URL from Walrus
 */
export function getWalrusUrl(blobId: string): string {
  return `${WALRUS_CONFIG.aggregatorUrl}/v1/${blobId}`;
}

/**
 * Fetch file from Walrus
 */
export async function fetchFromWalrus(blobId: string): Promise<Blob> {
  try {
    const response = await fetch(getWalrusUrl(blobId));
    
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText}`);
    }

    return await response.blob();
  } catch (error) {
    console.error('Error fetching from Walrus:', error);
    throw error;
  }
}

/**
 * Upload JSON data to Walrus
 */
export async function uploadJsonToWalrus(
  data: object,
  epochs: number = 5
): Promise<WalrusUploadResponse> {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  return uploadToWalrus(blob, epochs);
}

/**
 * Fetch JSON from Walrus
 */
export async function fetchJsonFromWalrus<T = any>(blobId: string): Promise<T> {
  const blob = await fetchFromWalrus(blobId);
  const text = await blob.text();
  return JSON.parse(text);
}
