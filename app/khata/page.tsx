import Link from 'next/link';

export default function KhataPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50 font-sans">
      <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-extrabold text-sindoor tracking-tight">
          september
        </Link>
        <Link href="/give" className="bg-sindoor text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-colors">
          Give Now
        </Link>
      </header>

      <div className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex-1 flex flex-col">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">The Khata</h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Every rupee that comes in, every rupee that goes out. Published every Sunday. Honest accounting for every cause.
          </p>
        </div>

        {/* Ledger Table Mockup */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                  <th className="p-4 md:p-6">Week</th>
                  <th className="p-4 md:p-6 text-right">Received</th>
                  <th className="p-4 md:p-6 text-right">Deployed</th>
                  <th className="p-4 md:p-6 text-right">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-gray-900">Week 38 (14–20 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-gray-600">₹ 4,18,210</td>
                  <td className="p-4 md:p-6 text-right text-green-600 font-semibold">₹ 3,86,000</td>
                  <td className="p-4 md:p-6 text-right text-gray-900 font-bold">₹ 32,210</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-gray-900">Week 37 (7–13 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-gray-600">₹ 3,92,400</td>
                  <td className="p-4 md:p-6 text-right text-green-600 font-semibold">₹ 3,90,000</td>
                  <td className="p-4 md:p-6 text-right text-gray-900 font-bold">₹ 2,400</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 md:p-6 font-sans font-medium text-gray-900">Week 36 (31 Aug–6 Sep 2026)</td>
                  <td className="p-4 md:p-6 text-right text-gray-600">₹ 5,10,000</td>
                  <td className="p-4 md:p-6 text-right text-green-600 font-semibold">₹ 4,95,000</td>
                  <td className="p-4 md:p-6 text-right text-gray-900 font-bold">₹ 15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
