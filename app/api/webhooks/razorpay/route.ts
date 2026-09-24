import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) {
      console.error('RAZORPAY_WEBHOOK_SECRET is not configured');
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(bodyText);

    // TODO: Store raw event in payment_events table before processing

    switch (event.event) {
      case 'payment.captured':
        // Mark donation captured, trigger receipt generation
        break;
      case 'payment.failed':
        // Mark donation failed
        break;
      case 'subscription.charged':
        // Create new donations row for cycle
        break;
      case 'subscription.cancelled':
        // Update subscription status
        break;
      case 'subscription.halted':
        // Surface to admin dashboard
        break;
      case 'refund.processed':
        // Update donation status, handle ledger correction
        break;
      default:
        // Ignore unhandled events
        break;
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
