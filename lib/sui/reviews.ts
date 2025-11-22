/**
 * Review Smart Contract Interactions
 * Functions to interact with Verakita review contracts on Sui
 */

import { TransactionBlock } from '@mysten/sui.js/transactions';
import { CONTRACT_ADDRESSES } from '../sui/config';
import { suiClient } from '../sui/client';

export interface Review {
  id: string;
  author: string;
  target: string;
  rating: number;
  content: string;
  timestamp: number;
  walrusBlobId?: string;
}

/**
 * Create a new review on-chain
 */
export async function createReview(
  target: string,
  rating: number,
  contentBlobId: string
) {
  const tx = new TransactionBlock();

  tx.moveCall({
    target: `${CONTRACT_ADDRESSES.reviewPackageId}::review::create_review`,
    arguments: [
      tx.pure(CONTRACT_ADDRESSES.reviewRegistryId),
      tx.pure(target),
      tx.pure(rating),
      tx.pure(contentBlobId),
    ],
  });

  return tx;
}

/**
 * Get all reviews for a target
 */
export async function getReviewsForTarget(target: string): Promise<Review[]> {
  try {
    // This is a placeholder - actual implementation depends on your contract structure
    const response = await suiClient.getDynamicFields({
      parentId: CONTRACT_ADDRESSES.reviewRegistryId,
    });

    // Filter and parse reviews
    // This will need to be customized based on your contract
    return [];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

/**
 * Verify review authenticity
 */
export async function verifyReview(reviewId: string): Promise<boolean> {
  try {
    const object = await suiClient.getObject({
      id: reviewId,
      options: {
        showContent: true,
        showOwner: true,
      },
    });

    return !!object.data;
  } catch (error) {
    console.error('Error verifying review:', error);
    return false;
  }
}

/**
 * Get review statistics for a target
 */
export async function getReviewStats(target: string) {
  const reviews = await getReviewsForTarget(target);
  
  if (reviews.length === 0) {
    return {
      totalReviews: 0,
      averageRating: 0,
      ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    };
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const ratingDistribution = reviews.reduce((dist, review) => {
    dist[review.rating] = (dist[review.rating] || 0) + 1;
    return dist;
  }, {} as Record<number, number>);

  return {
    totalReviews: reviews.length,
    averageRating: totalRating / reviews.length,
    ratingDistribution,
  };
}
