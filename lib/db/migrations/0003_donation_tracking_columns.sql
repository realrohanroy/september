-- Migration: 0003_donation_tracking_columns
-- Adds three tracking columns to the donations table:
--   failure_reason   — Razorpay error code/description when payment fails
--   ip_address       — Donor IP captured at order creation (fraud signal)
--   referrer_source  — UTM source or page referrer for campaign tracking

ALTER TABLE donations
  ADD COLUMN IF NOT EXISTS failure_reason   text,
  ADD COLUMN IF NOT EXISTS ip_address       text,
  ADD COLUMN IF NOT EXISTS referrer_source  text;

-- Add an index on status for admin dashboard queries
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations (status);

-- Add an index on created_at for date-range filtering in admin
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations (created_at DESC);
