import { db } from '@/lib/db';
import { donations, donors, paymentEvents, auditLog } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatINR } from '@/lib/format';

export const revalidate = 0; // Always fresh for detail view

interface PageProps {
  params: Promise<{ id: string }>;
}

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-bold uppercase tracking-wide text-ink/40">{label}</span>
      <span className="text-sm text-ink font-medium font-mono break-all">{value ?? '—'}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    captured: 'bg-sindoor/10 text-sindoor',
    failed:   'bg-ink/10 text-ink/60',
    created:  'bg-haldi/10 text-haldi',
    refunded: 'bg-ink/5 text-ink/40',
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${styles[status] ?? 'bg-ink/5 text-ink/40'}`}>
      {status}
    </span>
  );
}

export default async function DonationDetailPage({ params }: PageProps) {
  const { id } = await params;

  const [donationRow] = await db
    .select({
      id: donations.id,
      status: donations.status,
      amountPaise: donations.amountPaise,
      feeCoverPaise: donations.feeCoverPaise,
      causeId: donations.causeId,
      frequency: donations.frequency,
      sankalp: donations.sankalp,
      createdAt: donations.createdAt,
      capturedAt: donations.capturedAt,
      razorpayOrderId: donations.razorpayOrderId,
      razorpayPaymentId: donations.razorpayPaymentId,
      failureReason: donations.failureReason,
      ipAddress: donations.ipAddress,
      referrerSource: donations.referrerSource,
      idempotencyKey: donations.idempotencyKey,
      donorName: donors.name,
      donorContact: donors.contact,
      donorPan: donors.pan,
    })
    .from(donations)
    .leftJoin(donors, eq(donations.donorId, donors.id))
    .where(eq(donations.id, id))
    .limit(1);

  if (!donationRow) notFound();

  // Webhook events related to this order
  const events = await db
    .select()
    .from(paymentEvents)
    .where(eq(paymentEvents.razorpayEventId, donationRow.razorpayOrderId ?? ''))
    .orderBy(paymentEvents.receivedAt);

  // Audit log entries for this donation
  const auditEntries = await db
    .select()
    .from(auditLog)
    .where(eq(auditLog.entityId, id))
    .orderBy(auditLog.createdAt);

  const istFormat = (d: Date | null) =>
    d
      ? new Date(d).toLocaleString('en-IN', {
          day: '2-digit', month: 'short', year: 'numeric',
          hour: '2-digit', minute: '2-digit', second: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      : '—';

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/admin/donations" className="text-xs font-bold text-sindoor hover:underline">
          Donations
        </Link>
        <span className="text-ink/30">/</span>
        <span className="text-xs text-ink/50 font-mono">{id}</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink font-heading">{formatINR(donationRow.amountPaise)}</h1>
          <p className="text-sm text-ink/50 mt-1 font-body">{donationRow.causeId} · {donationRow.frequency}</p>
        </div>
        <StatusBadge status={donationRow.status} />
      </div>

      {donationRow.failureReason && (
        <div className="border border-rule bg-card px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wide text-ink/40 mb-1">Failure reason</p>
          <p className="text-sm text-ink font-medium">{donationRow.failureReason}</p>
        </div>
      )}

      {/* Donation details */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4 border-b border-rule pb-2">Donation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <Field label="Donation ID" value={donationRow.id} />
          <Field label="Status" value={donationRow.status} />
          <Field label="Amount" value={formatINR(donationRow.amountPaise)} />
          <Field label="Fee cover" value={formatINR(donationRow.feeCoverPaise ?? 0)} />
          <Field label="Cause" value={donationRow.causeId} />
          <Field label="Frequency" value={donationRow.frequency} />
          <Field label="Sankalp / dedication" value={donationRow.sankalp} />
          <Field label="Created at (IST)" value={istFormat(donationRow.createdAt)} />
          <Field label="Captured at (IST)" value={istFormat(donationRow.capturedAt)} />
          <Field label="IP address" value={donationRow.ipAddress} />
          <Field label="Referrer" value={donationRow.referrerSource} />
          <Field label="Idempotency key" value={donationRow.idempotencyKey} />
        </div>
      </section>

      {/* Razorpay details */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4 border-b border-rule pb-2">Razorpay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Order ID" value={donationRow.razorpayOrderId} />
          <Field label="Payment ID" value={donationRow.razorpayPaymentId} />
        </div>
      </section>

      {/* Donor details */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4 border-b border-rule pb-2">Donor</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <Field label="Name" value={donationRow.donorName} />
          <Field label="Contact" value={donationRow.donorContact} />
          <Field label="PAN" value={donationRow.donorPan ?? 'Not provided'} />
        </div>
      </section>

      {/* Webhook events */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4 border-b border-rule pb-2">
          Webhook events ({events.length})
        </h2>
        {events.length === 0 ? (
          <p className="text-sm text-ink/40">No webhook events recorded for this order ID.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {events.map((ev) => (
              <div key={ev.id} className="border border-rule bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-ink">{ev.eventType}</span>
                  <span className="text-[11px] font-mono text-ink/40">{istFormat(ev.receivedAt)}</span>
                </div>
                {ev.error && (
                  <p className="text-xs text-sindoor font-medium mb-2">Error: {ev.error}</p>
                )}
                <details className="text-[11px] text-ink/50">
                  <summary className="cursor-pointer font-bold hover:text-ink transition-colors">Raw payload</summary>
                  <pre className="mt-2 overflow-x-auto text-[10px] font-mono bg-paper p-3 border border-rule">
                    {JSON.stringify(JSON.parse(ev.payloadJson), null, 2)}
                  </pre>
                </details>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Audit log */}
      {auditEntries.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4 border-b border-rule pb-2">
            Audit log ({auditEntries.length})
          </h2>
          <div className="flex flex-col gap-2">
            {auditEntries.map((entry) => (
              <div key={entry.id} className="flex items-start gap-4 text-xs">
                <span className="font-mono text-ink/40 whitespace-nowrap">{istFormat(entry.createdAt)}</span>
                <span className="font-bold text-ink">{entry.actor}</span>
                <span className="text-ink/60">{entry.action}</span>
                {entry.ip && <span className="font-mono text-ink/30">{entry.ip}</span>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
