import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PrintButton } from './PrintButton';
import { formatINR } from '@/lib/format';
import { headers } from 'next/headers';

async function getReceipt(id: string, reqHost: string) {
  // Call our own API route or query DB directly. Since it's a server component, querying DB directly is faster.
  // But to reuse the logic and not duplicate, we can import DB here.
  // Let's just query directly here to avoid network hop.
  const { db } = await import('@/lib/db');
  const { donations, donors } = await import('@/lib/db/schema');
  const { eq } = await import('drizzle-orm');

  const rows = await db
    .select({
      id: donations.id,
      amountPaise: donations.amountPaise,
      feeCoverPaise: donations.feeCoverPaise,
      causeId: donations.causeId,
      status: donations.status,
      capturedAt: donations.capturedAt,
      donorName: donors.name,
      donorPan: donors.pan,
      frequency: donations.frequency,
    })
    .from(donations)
    .leftJoin(donors, eq(donations.donorId, donors.id))
    .where(eq(donations.id, id))
    .limit(1);

  if (rows.length === 0 || (rows[0].status !== 'captured' && rows[0].status !== 'refunded')) {
    return null;
  }
  return rows[0];
}

export default async function ReceiptPage({ params }: { params: Promise<{ id: string }> }) {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  
  const resolvedParams = await params;
  const receipt = await getReceipt(resolvedParams.id, host);

  if (!receipt) {
    notFound();
  }

  const totalAmount = receipt.amountPaise + receipt.feeCoverPaise;
  const dateStr = receipt.capturedAt 
    ? new Date(receipt.capturedAt).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
      })
    : 'Unknown Date';

  return (
    <main className="relative flex flex-col w-full min-h-[100dvh] bg-paper font-sans text-ink print:bg-white">
      {/* Khata Ruled Background (hidden in print) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 print:hidden" 
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, var(--rule) 23px, var(--rule) 24px)',
          backgroundSize: '100% 24px',
          backgroundPosition: '0 0'
        }}
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 bg-paper border-b border-rule px-4 py-4 md:px-8 flex items-center justify-between shadow-[0_1px_0_var(--rule)] print:hidden">
        <Link href="/" className="flex items-center gap-2 text-ink hover:text-sindoor transition-colors">
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span className="text-sm font-bold hidden sm:inline-block">Home</span>
        </Link>
        <span className="text-xl font-heading font-extrabold text-ink absolute left-1/2 -translate-x-1/2">
          Receipt
        </span>
        <PrintButton />
      </header>

      <div className="relative z-10 w-full max-w-[480px] mx-auto px-4 py-12 flex-1 flex flex-col items-center">
        
        {/* The torn edge device, B.2 */}
        <div className="w-full bg-card filter drop-shadow-sm border border-rule relative overflow-hidden print:border-ink/20 print:drop-shadow-none">
          {/* SVG Clip Path for torn edge */}
          <div className="h-4 w-full bg-paper print:bg-white relative">
            <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-card fill-current">
              <path d="M0,10 L0,0 L5,10 L10,0 L15,10 L20,0 L25,10 L30,0 L35,10 L40,0 L45,10 L50,0 L55,10 L60,0 L65,10 L70,0 L75,10 L80,0 L85,10 L90,0 L95,10 L100,0 L100,10 Z"></path>
            </svg>
          </div>

          <div className="p-8 flex flex-col gap-8">
            <div className="text-center border-b border-rule pb-8 print:border-ink/20">
              <h1 className="text-3xl font-heading font-extrabold text-sindoor mb-1 tracking-tight">september</h1>
              <p className="text-xs font-semibold text-ink/60 uppercase tracking-widest">Charitable Trust</p>
              <p className="text-xs text-ink/50 mt-2">Reg: E/12345/Ahmedabad</p>
              {receipt.donorPan && (
                <p className="text-xs text-ink/50">80G Reg: AABCD1234E80G</p>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-ink/60 font-bold uppercase tracking-wider mb-1">Receipt No.</p>
                  <p className="font-mono text-sm">{receipt.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink/60 font-bold uppercase tracking-wider mb-1">Date</p>
                  <p className="text-sm font-semibold">{dateStr}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-ink/60 font-bold uppercase tracking-wider mb-1">Received with thanks from</p>
                <p className="text-lg font-bold">{receipt.donorName}</p>
                {receipt.donorPan && (
                  <p className="text-sm text-ink/70 mt-1">PAN: {receipt.donorPan}</p>
                )}
              </div>

              <div className="border-t border-b border-rule py-4 my-2 print:border-ink/20 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-ink/80">Donation towards {receipt.causeId}</span>
                  <span className="font-mono text-sm">{formatINR(receipt.amountPaise)}</span>
                </div>
                {receipt.feeCoverPaise > 0 && (
                  <div className="flex justify-between">
                    <span className="text-sm text-ink/60">Transaction fee cover</span>
                    <span className="font-mono text-sm text-ink/60">{formatINR(receipt.feeCoverPaise)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end">
                <span className="text-xs text-ink/60 font-bold uppercase tracking-wider">Total</span>
                <span className="text-3xl font-heading font-extrabold text-ink">{formatINR(totalAmount)}</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-rule print:border-ink/20 text-center">
              <p className="text-xs text-ink/50 leading-relaxed max-w-[280px] mx-auto">
                {receipt.donorPan 
                  ? "This receipt is valid for tax exemption under section 80G of the Income Tax Act." 
                  : "Thank you for your generous contribution."}
              </p>
              <div className="mt-6">
                <img src="/september-stamp.svg" alt="" className="w-16 h-16 opacity-20 mx-auto" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
