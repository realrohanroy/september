import { db } from '@/lib/db';
import { donations, donors, paymentEvents } from '@/lib/db/schema';
import { eq, sql, and, gte } from 'drizzle-orm';
import Link from 'next/link';
import { formatINR } from '@/lib/format';

// This is a Server Component — reads live DB, no client JS needed.
export const revalidate = 60; // Revalidate every 60 seconds

async function getDashboardStats() {
  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const [
    totalCaptured,
    totalDonors,
    failedToday,
    recentDonations,
  ] = await Promise.all([
    // Total captured amount (all time)
    db
      .select({
        total: sql<number>`coalesce(sum(amount_paise), 0)`,
        count: sql<number>`count(*)`,
      })
      .from(donations)
      .where(eq(donations.status, 'captured')),

    // Total unique donors
    db
      .select({ count: sql<number>`count(*)` })
      .from(donors),

    // Failed donations today
    db
      .select({ count: sql<number>`count(*)` })
      .from(donations)
      .where(and(
        eq(donations.status, 'failed'),
        gte(donations.createdAt, todayStart),
      )),

    // Last 10 donations (any status)
    db
      .select({
        id: donations.id,
        status: donations.status,
        amountPaise: donations.amountPaise,
        causeId: donations.causeId,
        createdAt: donations.createdAt,
        capturedAt: donations.capturedAt,
        razorpayPaymentId: donations.razorpayPaymentId,
        failureReason: donations.failureReason,
        donorName: donors.name,
      })
      .from(donations)
      .leftJoin(donors, eq(donations.donorId, donors.id))
      .orderBy(sql`${donations.createdAt} desc`)
      .limit(10),
  ]);

  return {
    totalAmountPaise: Number(totalCaptured[0].total),
    totalCount: Number(totalCaptured[0].count),
    totalDonors: Number(totalDonors[0].count),
    failedToday: Number(failedToday[0].count),
    recentDonations,
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    captured: 'bg-sindoor/10 text-sindoor',
    failed:   'bg-ink/10 text-ink/60',
    created:  'bg-haldi/10 text-haldi',
    refunded: 'bg-ink/10 text-ink/40',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${styles[status] ?? 'bg-ink/5 text-ink/40'}`}>
      {status}
    </span>
  );
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  const summaryCards = [
    { label: 'Total received (all time)', value: formatINR(stats.totalAmountPaise), sub: `${stats.totalCount} captured donations` },
    { label: 'Unique donors', value: stats.totalDonors.toLocaleString('en-IN'), sub: 'Across all time' },
    { label: 'Failed payments today', value: stats.failedToday.toLocaleString('en-IN'), sub: 'Since midnight IST', highlight: stats.failedToday > 0 },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-1">Overview</p>
        <h1 className="text-2xl font-bold text-ink font-heading">Dashboard</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="bg-card border border-rule p-6"
          >
            <p className="text-xs text-ink/50 font-body mb-2">{card.label}</p>
            <p className={`text-2xl font-bold font-mono ${card.highlight ? 'text-sindoor' : 'text-ink'}`}>
              {card.value}
            </p>
            <p className="text-xs text-ink/40 font-body mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent donations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-ink uppercase tracking-wide">Recent donations</h2>
          <Link href="/admin/donations" className="text-xs font-bold text-sindoor hover:underline">
            View all
          </Link>
        </div>

        <div className="border border-rule overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-rule bg-card">
              <tr>
                {['Date', 'Donor', 'Amount', 'Cause', 'Status', 'Payment ID'].map((h) => (
                  <th key={h} className="text-left text-[11px] font-bold uppercase tracking-wide text-ink/50 px-4 py-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {stats.recentDonations.map((d) => (
                <tr key={d.id} className="hover:bg-card transition-colors">
                  <td className="px-4 py-3 text-xs text-ink/60 font-mono whitespace-nowrap">
                    {new Date(d.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
                      timeZone: 'Asia/Kolkata',
                    })}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-ink">
                    <Link href={`/admin/donations/${d.id}`} className="hover:text-sindoor transition-colors">
                      {d.donorName ?? '—'}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm font-bold font-mono text-ink">
                    {formatINR(d.amountPaise)}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink/70">{d.causeId}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={d.status} />
                    {d.failureReason && (
                      <p className="text-[10px] text-ink/40 mt-0.5 max-w-[160px] truncate" title={d.failureReason}>
                        {d.failureReason}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[11px] font-mono text-ink/50">
                    {d.razorpayPaymentId ?? '—'}
                  </td>
                </tr>
              ))}
              {stats.recentDonations.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-ink/40">
                    No donations yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
