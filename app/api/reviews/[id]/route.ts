import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/reviews/[id]
 * Fetch a specific review by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // TODO: Implement blockchain query
    // const review = await getReviewById(id);

    return NextResponse.json({
      success: true,
      data: {
        id,
        // review data will be here
      },
    });
  } catch (error) {
    console.error('Error fetching review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch review' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/reviews/[id]
 * Note: On blockchain, reviews are immutable
 * This endpoint should only mark as "deleted" if needed
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    return NextResponse.json({
      success: false,
      error: 'Reviews on blockchain are immutable and cannot be deleted',
    }, { status: 403 });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete review' },
      { status: 500 }
    );
  }
}
