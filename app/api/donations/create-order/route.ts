import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cause_id, amount_paise, frequency, sankalp, name, contact, idempotency_key } = body;

    // TODO: 1. Validate amount_paise (bounds check)
    // TODO: 2. Look up or create the donor record
    // TODO: 3. Insert a donations row, status = 'created'

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: amount_paise,
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      // notes: { donation_id: inserted_id }
    });

    // TODO: 5. Store the returned razorpay order_id on the donation row

    return NextResponse.json({
      order_id: order.id,
      key_id: process.env.RAZORPAY_KEY_ID,
      amount_paise: order.amount,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
