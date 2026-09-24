import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/db';
import { donations, paymentEvents, subscriptions } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { logger } from '@/lib/logger';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret) {
      logger.error('Webhook: Secret not configured in environment');
      return NextResponse.json({ error: 'Configuration Error' }, { status: 500 });
    }

    if (!signature) {
      logger.warn('Webhook: Missing signature header');
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // 1. Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      logger.warn('Webhook: Invalid signature detected', { provided: signature, expected: expectedSignature });
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Parse payload
    const event = JSON.parse(rawBody);
    const razorpayEventId = event.header ? event.header.id : event.id;
    const eventType = event.event;

    // 3. Idempotency Check & Save Event
    const existingEvent = await db.select().from(paymentEvents).where(eq(paymentEvents.razorpayEventId, razorpayEventId)).limit(1);
    
    if (existingEvent.length > 0 && existingEvent[0].processedAt !== null) {
      logger.info('Webhook: Skipping already processed event', { razorpayEventId });
      return NextResponse.json({ status: 'ok' });
    }

    if (existingEvent.length === 0) {
      await db.insert(paymentEvents).values({
        razorpayEventId: razorpayEventId,
        eventType: eventType,
        payloadJson: rawBody,
      });
    }

    // 4. Handle Specific Events
    try {
      if (eventType === 'payment.captured') {
        const paymentEntity = event.payload.payment.entity;
        const orderId = paymentEntity.order_id;
        const paymentId = paymentEntity.id;

        // Find the donation using orderId
        const existingDonationList = await db.select().from(donations).where(eq(donations.razorpayOrderId, orderId)).limit(1);
        
        if (existingDonationList.length > 0) {
          const donation = existingDonationList[0];
          if (donation.status !== 'captured') {
            await db.update(donations)
              .set({
                status: 'captured',
                razorpayPaymentId: paymentId,
                capturedAt: new Date(),
              })
              .where(eq(donations.id, donation.id));
              
            // NOTE: Here is where the ledger update mechanism and receipt generation would hook in
            // For now, we update the status, which satisfies the fundamental requirement.
            logger.info('Webhook: Donation marked as captured', { donationId: donation.id, orderId, paymentId });
          } else {
            logger.info('Webhook: Donation already captured, ignoring', { donationId: donation.id });
          }
        } else {
          logger.warn('Webhook: payment.captured received but donation order not found', { orderId });
        }
      } else if (eventType === 'payment.failed') {
        const paymentEntity = event.payload.payment.entity;
        const orderId = paymentEntity.order_id;

        await db.update(donations)
          .set({ status: 'failed' })
          .where(eq(donations.razorpayOrderId, orderId));
          
      } else if (eventType === 'subscription.charged') {
        // Handle recurring charge logic (creates a new donation row)
        // Implementation for subscriptions can be expanded later
      } else if (eventType === 'subscription.cancelled' || eventType === 'subscription.halted') {
        // Handle subscription status changes
      }

      // Mark event as processed
      await db.update(paymentEvents)
        .set({ processedAt: new Date() })
        .where(eq(paymentEvents.razorpayEventId, razorpayEventId));

      logger.info('Webhook: Event successfully processed', { razorpayEventId, eventType });

    } catch (handlerError: any) {
      // Update event with error
      await db.update(paymentEvents)
        .set({ error: handlerError.message || 'Unknown error' })
        .where(eq(paymentEvents.razorpayEventId, razorpayEventId));
      
      logger.error('Webhook: Processing error', handlerError, { razorpayEventId });
      throw handlerError; // Rethrow to return 500 so Razorpay retries
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error: any) {
    logger.error('Webhook: Unhandled Exception', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
