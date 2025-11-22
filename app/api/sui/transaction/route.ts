import { NextRequest, NextResponse } from 'next/server';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { suiClient } from '@/lib/sui/client';

/**
 * POST /api/sui/transaction
 * Execute a transaction on Sui blockchain
 * 
 * Body:
 * {
 *   transaction: object, // Transaction data
 *   sender: string,      // Wallet address
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transaction, sender } = body;

    if (!transaction || !sender) {
      return NextResponse.json(
        { success: false, error: 'Missing transaction or sender' },
        { status: 400 }
      );
    }

    // Note: In production, transactions should be signed on client-side
    // This endpoint is for creating transaction blocks that client will sign

    return NextResponse.json({
      success: true,
      message: 'Transactions must be signed client-side',
      data: {
        // Return transaction data for client to sign
      },
    });
  } catch (error) {
    console.error('Error processing transaction:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process transaction' },
      { status: 500 }
    );
  }
}
