import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { db } from '@/lib/db';
import { donations, donors } from '@/lib/db/schema';
import { nanoid } from 'nanoid';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { logger } from '@/lib/logger';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'test_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'test_secret',
});

const createOrderSchema = z.object({
  cause_id: z.string(),
  amount_paise: z.number().int().positive(),
  fee_cover_paise: z.number().int().nonnegative().optional(),
  frequency: z.enum(['once', 'monthly']),
  sankalp: z.string().optional(),
  name: z.string().min(1),
  contact: z.string().min(10), // Expecting phone/email
  requires_80g: z.boolean().optional(),
  idempotency_key: z.string().uuid(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createOrderSchema.safeParse(body);

    if (!parsed.success) {
      logger.warn('Create Order: Invalid payload', { issues: parsed.error.issues, body });
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error }, { status: 400 });
    }

    const { cause_id, amount_paise, fee_cover_paise, frequency, sankalp, name, contact, requires_80g, idempotency_key } = parsed.data;
    
    const idempotencyKey = idempotency_key;
    const causeId = cause_id;
    const amountPaise = amount_paise;

    // Check idempotency key - if already exists, return existing order
    const existingDonation = await db.select().from(donations).where(eq(donations.idempotencyKey, idempotencyKey)).limit(1);
    
    if (existingDonation.length > 0) {
      const orderId = existingDonation[0].razorpayOrderId;
      if (!orderId) {
        logger.error('Create Order: Idempotent order found but missing razorpayOrderId', undefined, { idempotencyKey });
        return NextResponse.json({ error: 'Order in invalid state' }, { status: 400 });
      }
      logger.info('Create Order: Returning existing idempotent order', { orderId, idempotencyKey });
      return NextResponse.json({ 
        orderId, 
        keyId: process.env.RAZORPAY_KEY_ID, 
        amountPaise: existingDonation[0].amountPaise 
      });
    }

    // Lookup or create donor (simple implementation)
    const newDonor = await db.insert(donors).values({ name, contact }).returning();
    const donorId = newDonor[0].id;

    // Create Razorpay Order
    const razorpayOrder = await razorpay.orders.create({
      amount: amountPaise,
      currency: 'INR',
      receipt: `rcpt_${nanoid(10)}`,
      notes: {
        cause_id: causeId,
        frequency,
        donor_contact: contact
      }
    });

    // Insert donation row with 'created' status
    const donationId = nanoid(22);
    await db.insert(donations).values({
      id: donationId,
      donorId: donorId,
      causeId: causeId,
      amountPaise: amountPaise,
      frequency: frequency,
      sankalp: sankalp,
      status: 'created',
      razorpayOrderId: razorpayOrder.id,
      idempotencyKey: idempotencyKey,
    });

    logger.info('Create Order: Successfully created new order', { 
      orderId: razorpayOrder.id, 
      donationId,
      causeId, 
      amountPaise 
    });

    return NextResponse.json({
      orderId: razorpayOrder.id,
      keyId: process.env.RAZORPAY_KEY_ID,
      amountPaise: amountPaise,
      donationId: donationId
    });

  } catch (error: any) {
    logger.error('Create Order: Unhandled Exception', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
