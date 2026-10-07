import { NextRequest, NextResponse } from 'next/server';
import { fetchOrderFromServer } from '@/lib/database/orders';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ orderNumber: string }> }
) {
  try {
    const { orderNumber } = await params;

    if (!orderNumber) {
      return NextResponse.json(
        { error: 'Order number or tracking code is required.' },
        { status: 400 }
      );
    }

    const order = await fetchOrderFromServer(orderNumber);

    if (!order) {
      return NextResponse.json(
        { error: `No discreet order record found matching identifier '${orderNumber}'.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.error('[API Fetch Order Exception]', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error retrieving order.' },
      { status: 500 }
    );
  }
}
