import Link from 'next/link';

export default function KhataPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-paper font-sans">


      <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex-1 flex flex-col">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-4">The Khata</h1>
          <p className="text-xl text-ink/70 font-medium leading-relaxed">
            Every rupee that comes in, every rupee that goes out. Published every Sunday. Honest accounting for every cause.
          </p>
        </div>

        {/* Ledger Table Mockup */}
        <div className="bg-card rounded-none shadow-[0_1px_0_var(--rule)] border border-rule overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-paper border-b border-rule text-sm font-semibold text-ink/80">
                  <th className="p-4 md:p-6">Week</th>
                  <th className="p-4 md:p-6 text-right">Received</th>
                  <th className="p-4 md:p-6 text-right">Deployed</th>
                  <th className="p-4 md:p-6 text-right">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-sm">
                <tr className="hover:bg-paper transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-ink">Week 38 (14–20 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-ink/70">₹ 4,18,210</td>
                  <td className="p-4 md:p-6 text-right text-sindoor font-semibold">₹ 3,86,000</td>
                  <td className="p-4 md:p-6 text-right text-ink font-bold">₹ 32,210</td>
                </tr>
                <tr className="hover:bg-paper transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-ink">Week 37 (7–13 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-ink/70">₹ 3,92,400</td>
                  <td className="p-4 md:p-6 text-right text-sindoor font-semibold">₹ 3,90,000</td>
                  <td className="p-4 md:p-6 text-right text-ink font-bold">₹ 2,400</td>
                </tr>
                <tr className="hover:bg-paper transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-ink">Week 36 (31 Aug–6 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-ink/70">₹ 5,10,000</td>
                  <td className="p-4 md:p-6 text-right text-sindoor font-semibold">₹ 4,95,000</td>
                  <td className="p-4 md:p-6 text-right text-ink font-bold">₹ 15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
