import { pgTable, text, timestamp, integer, uuid, uniqueIndex } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const donors = pgTable('donors', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  contact: text('contact').notNull(),
  pan: text('pan'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const donations = pgTable('donations', {
  id: text('id').primaryKey(), // 22-char nanoid
  donorId: uuid('donor_id').references(() => donors.id).notNull(),
  causeId: text('cause_id').notNull(),
  amountPaise: integer('amount_paise').notNull(),
  feeCoverPaise: integer('fee_cover_paise').default(0).notNull(),
  frequency: text('frequency').notNull(), // 'once' | 'monthly'
  sankalp: text('sankalp'),
  status: text('status').notNull(), // 'created' | 'captured' | 'failed' | 'refunded'
  razorpayOrderId: text('razorpay_order_id'),
  razorpayPaymentId: text('razorpay_payment_id'),
  idempotencyKey: uuid('idempotency_key').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  capturedAt: timestamp('captured_at'),
}, (t) => [
  uniqueIndex('idx_donations_razorpay_order_id').on(t.razorpayOrderId),
]);

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  donorId: uuid('donor_id').references(() => donors.id).notNull(),
  causeId: text('cause_id').notNull(),
  amountPaise: integer('amount_paise').notNull(),
  razorpaySubId: text('razorpay_sub_id').notNull(),
  status: text('status').notNull(), // 'active' | 'cancelled' | 'halted'
  createdAt: timestamp('created_at').defaultNow().notNull(),
  nextChargeAt: timestamp('next_charge_at'),
});

export const paymentEvents = pgTable('payment_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  razorpayEventId: text('razorpay_event_id').notNull(),
  eventType: text('event_type').notNull(),
  payloadJson: text('payload_json').notNull(),
  receivedAt: timestamp('received_at').defaultNow().notNull(),
  processedAt: timestamp('processed_at'),
  error: text('error'),
}, (t) => [
  uniqueIndex('idx_payment_events_razorpay_event_id').on(t.razorpayEventId),
]);

export const auditLog = pgTable('audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  actor: text('actor').notNull(),
  action: text('action').notNull(),
  entityId: text('entity_id').notNull(),
  payloadJson: text('payload_json'),
  ip: text('ip'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
