import { NextRequest, NextResponse } from 'next/server';
import { uploadToWalrus } from '@/lib/walrus/storage';

/**
 * POST /api/walrus/upload
 * Upload file/data to Walrus storage
 * 
 * Accepts multipart/form-data with file
 * or JSON with data object
 */
export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');

    if (contentType?.includes('multipart/form-data')) {
      // File upload
      const formData = await request.formData();
      const file = formData.get('file') as File;
      const epochs = parseInt(formData.get('epochs') as string || '5');

      if (!file) {
        return NextResponse.json(
          { success: false, error: 'No file provided' },
          { status: 400 }
        );
      }

      const result = await uploadToWalrus(file, epochs);

      return NextResponse.json({
        success: true,
        data: result,
      });
    } else {
      // JSON data upload
      const body = await request.json();
      const { data, epochs = 5 } = body;

      if (!data) {
        return NextResponse.json(
          { success: false, error: 'No data provided' },
          { status: 400 }
        );
      }

      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      const result = await uploadToWalrus(blob, epochs);

      return NextResponse.json({
        success: true,
        data: result,
      });
    }
  } catch (error) {
    console.error('Error uploading to Walrus:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload to Walrus' },
      { status: 500 }
    );
  }
}
