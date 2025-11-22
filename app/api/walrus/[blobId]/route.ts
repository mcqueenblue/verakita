import { NextRequest, NextResponse } from 'next/server';
import { fetchFromWalrus, getWalrusUrl } from '@/lib/walrus/storage';

/**
 * GET /api/walrus/[blobId]
 * Fetch content from Walrus by blob ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { blobId: string } }
) {
  try {
    const { blobId } = params;

    if (!blobId) {
      return NextResponse.json(
        { success: false, error: 'Blob ID is required' },
        { status: 400 }
      );
    }

    const blob = await fetchFromWalrus(blobId);
    const contentType = blob.type || 'application/octet-stream';

    // Return the blob directly
    return new NextResponse(blob, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching from Walrus:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch from Walrus' },
      { status: 500 }
    );
  }
}
