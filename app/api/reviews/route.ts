import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/reviews
 * Fetch all reviews or filter by query params
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const target = searchParams.get('target'); // Filter by target address
    const limit = searchParams.get('limit') || '10';
    
    // TODO: Implement actual blockchain query
    // const reviews = await getReviewsForTarget(target);
    
    return NextResponse.json({
      success: true,
      data: {
        reviews: [],
        total: 0,
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/reviews
 * Create a new review on-chain
 * 
 * Body:
 * {
 *   target: string,
 *   rating: number,
 *   content: string,
 *   walletAddress: string,
 *   signature: string
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { target, rating, content, walletAddress, signature } = body;

    // Validation
    if (!target || !rating || !content || !walletAddress) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // TODO: Implement review creation flow:
    // 1. Upload content to Walrus
    // 2. Create transaction on Sui
    // 3. Return transaction hash and blob ID

    return NextResponse.json({
      success: true,
      data: {
        reviewId: 'placeholder-id',
        transactionHash: 'placeholder-tx',
        blobId: 'placeholder-blob',
      },
    });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
