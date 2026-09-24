import { z } from 'zod';

export const CreateOrderSchema = z.object({
  cause_id: z.string().min(1),
  amount_paise: z.number().int().min(5000).max(1000000), // Min ₹50, Max ₹10,000
  frequency: z.enum(['once', 'monthly']),
  name: z.string().min(2),
  contact: z.string().min(5), // Simple length check, can be email or phone
  sankalp: z.string().max(60).optional(),
  idempotency_key: z.string().uuid(),
  fee_cover_paise: z.number().int().min(0).default(0),
  requires_80g: z.boolean().default(false),
});

export const EnvSchema = z.object({
  RAZORPAY_KEY_ID: z.string().min(1),
  RAZORPAY_KEY_SECRET: z.string().min(1),
  RAZORPAY_WEBHOOK_SECRET: z.string().min(1),
  // Upstash credentials for rate limiting
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
});
