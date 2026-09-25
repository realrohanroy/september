import { db } from '@/lib/db';
import { donations, donors } from '@/lib/db/schema';
import { eq, sql, desc, and, like, inArray } from 'drizzle-orm';
import Link from 'next/link';
import { formatINR } from '@/lib/format';

export const revalidate = 30;

interface PageProps {
  searchParams: Promise<{ status?: string; cause?: string; search?: string; page?: string }>;
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    captured: 'bg-sindoor/10 text-sindoor',
    failed:   'bg-ink/10 text-ink/60',
    created:  'bg-haldi/10 text-haldi',
    refunded: 'bg-ink/5 text-ink/40',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${styles[status] ?? 'bg-ink/5 text-ink/40'}`}>
      {status}
    </span>
  );
}

export default async function AdminDonationsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const statusFilter = params.status ?? 'all';
  const causeFilter = params.cause ?? 'all';
  const search = params.search ?? '';
  const page = Math.max(1, parseInt(params.page ?? '1', 10));
  const limit = 50;
  const offset = (page - 1) * limit;

  // Build query conditions
  const conditions = [];
  if (statusFilter !== 'all') {
    conditions.push(eq(donations.status, statusFilter));
  }
  if (causeFilter !== 'all') {
    conditions.push(eq(donations.causeId, causeFilter));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const [rows, countResult, distinctCauses] = await Promise.all([
    db
      .select({
        id: donations.id,
        status: donations.status,
        amountPaise: donations.amountPaise,
        causeId: donations.causeId,
        frequency: donations.frequency,
        createdAt: donations.createdAt,
        capturedAt: donations.capturedAt,
        razorpayOrderId: donations.razorpayOrderId,
        razorpayPaymentId: donations.razorpayPaymentId,
        failureReason: donations.failureReason,
        ipAddress: donations.ipAddress,
        donorName: donors.name,
        donorContact: donors.contact,
      })
      .from(donations)
      .leftJoin(donors, eq(donations.donorId, donors.id))
      .where(whereClause)
      .orderBy(desc(donations.createdAt))
      .limit(limit)
      .offset(offset),

    db
      .select({ count: sql<number>`count(*)` })
      .from(donations)
      .where(whereClause),

    db
      .selectDistinct({ causeId: donations.causeId })
      .from(donations)
      .orderBy(donations.causeId),
  ]);

  const total = Number(countResult[0].count);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-1">Admin</p>
          <h1 className="text-2xl font-bold text-ink font-heading">All donations</h1>
          <p className="text-sm text-ink/50 font-body mt-1">{total.toLocaleString('en-IN')} total records</p>
        </div>
      </div>

      {/* Filters */}
      <form method="GET" className="flex flex-wrap items-center gap-3">
        <select
          name="status"
          defaultValue={statusFilter}
          className="border border-rule bg-card text-sm text-ink px-3 py-2 rounded-full focus:outline-none focus:border-ink"
        >
          <option value="all">All statuses</option>
          <option value="captured">Captured</option>
          <option value="failed">Failed</option>
          <option value="created">Created (pending)</option>
          <option value="refunded">Refunded</option>
        </select>

        <select
          name="cause"
          defaultValue={causeFilter}
          className="border border-rule bg-card text-sm text-ink px-3 py-2 rounded-full focus:outline-none focus:border-ink"
        >
          <option value="all">All causes</option>
          {distinctCauses.map((c) => (
            <option key={c.causeId} value={c.causeId}>{c.causeId}</option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-ink text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition-all"
        >
          Filter
        </button>

        {(statusFilter !== 'all' || causeFilter !== 'all') && (
          <Link href="/admin/donations" className="text-xs text-sindoor font-bold hover:underline">
            Clear filters
          </Link>
        )}
      </form>

      {/* Table */}
      <div className="border border-rule overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead className="border-b border-rule bg-card">
            <tr>
              {['Date (IST)', 'Donor', 'Contact', 'Amount', 'Cause', 'Freq.', 'Status', 'Order ID', 'Payment ID', 'IP', ''].map((h) => (
                <th key={h} className="text-left text-[11px] font-bold uppercase tracking-wide text-ink/50 px-4 py-3 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {rows.map((d) => (
              <tr key={d.id} className="hover:bg-card transition-colors group">
                <td className="px-4 py-3 text-xs font-mono text-ink/60 whitespace-nowrap">
                  {new Date(d.createdAt).toLocaleString('en-IN', {
                    day: '2-digit', month: 'short', year: '2-digit',
                    hour: '2-digit', minute: '2-digit',
                    timeZone: 'Asia/Kolkata',
                  })}
                </td>
                <td className="px-4 py-3 font-medium text-ink">
                  {d.donorName ?? '—'}
                </td>
                <td className="px-4 py-3 text-xs text-ink/60">
                  {d.donorContact ?? '—'}
                </td>
                <td className="px-4 py-3 font-bold font-mono text-ink whitespace-nowrap">
                  {formatINR(d.amountPaise)}
                </td>
                <td className="px-4 py-3 text-xs text-ink/70">{d.causeId}</td>
                <td className="px-4 py-3 text-xs text-ink/60">{d.frequency}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={d.status} />
                  {d.failureReason && (
                    <p className="text-[10px] text-ink/40 mt-0.5 max-w-[180px] truncate" title={d.failureReason}>
                      {d.failureReason}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3 text-[11px] font-mono text-ink/40 whitespace-nowrap">
                  {d.razorpayOrderId ?? '—'}
                </td>
                <td className="px-4 py-3 text-[11px] font-mono text-ink/40 whitespace-nowrap">
                  {d.razorpayPaymentId ?? '—'}
                </td>
                <td className="px-4 py-3 text-[11px] font-mono text-ink/40">
                  {d.ipAddress ?? '—'}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/donations/${d.id}`}
                    className="text-[11px] font-bold text-sindoor opacity-0 group-hover:opacity-100 transition-opacity hover:underline whitespace-nowrap"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={11} className="px-4 py-12 text-center text-sm text-ink/40">
                  No donations match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-3 justify-end text-sm">
          {page > 1 && (
            <Link
              href={`/admin/donations?status=${statusFilter}&cause=${causeFilter}&page=${page - 1}`}
              className="px-4 py-2 border border-rule rounded-full text-ink hover:border-ink transition-colors text-xs font-bold"
            >
              Previous
            </Link>
          )}
          <span className="text-xs text-ink/50">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/admin/donations?status=${statusFilter}&cause=${causeFilter}&page=${page + 1}`}
              className="px-4 py-2 border border-rule rounded-full text-ink hover:border-ink transition-colors text-xs font-bold"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
