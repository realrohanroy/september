import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { donations, donors } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || 'http://localhost:8079',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || 'example_token',
});
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '60 s'),
});

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const { success } = await ratelimit.limit(`receipt_${ip}`);
      if (!success) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
      }
    }

    const resolvedParams = await params;
    const id = resolvedParams.id;

    const donationRows = await db
      .select({
        id: donations.id,
        amountPaise: donations.amountPaise,
        feeCoverPaise: donations.feeCoverPaise,
        causeId: donations.causeId,
        status: donations.status,
        capturedAt: donations.capturedAt,
        donorName: donors.name,
        donorPan: donors.pan,
      })
      .from(donations)
      .leftJoin(donors, eq(donations.donorId, donors.id))
      .where(eq(donations.id, id))
      .limit(1);

    if (donationRows.length === 0) {
      // 404 if not found, never leak whether an id exists for a different contact
      return NextResponse.json({ error: 'Receipt not found' }, { status: 404 });
    }

    const donation = donationRows[0];
    
    // Only captured or refunded donations should show receipts publicly
    if (donation.status !== 'captured' && donation.status !== 'refunded') {
      return NextResponse.json({ error: 'Receipt not found' }, { status: 404 });
    }

    return NextResponse.json(donation);
  } catch (error) {
    console.error('Fetch receipt error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
