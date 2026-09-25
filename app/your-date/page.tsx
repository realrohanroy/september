import Link from 'next/link';

export const metadata = {
  title: 'Pick Your Date | September',
  description: 'Monthly giving built around a date that matters to you.',
};

export default function YourDatePage() {
  const dates = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <main className="w-full min-h-screen bg-gray-50 pb-24">
      {/* 24px Ruled background */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, var(--rule) 23px, var(--rule) 24px)',
             backgroundSize: '100% 24px',
             opacity: 0.35
           }}>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-8 pt-20 md:pt-32">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            Don't just give monthly.<br />Give on a date that matters.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            Amma's tithi. Your daughter's birthday. Ekadashi. Pick a day of the month, an amount, and a cause. We'll send a WhatsApp reminder on that date before any debit happens.
          </p>
        </header>

        <div className="bg-white rounded-none border border-gray-200 shadow-[0_1px_0_var(--rule)] p-6 md:p-10 mb-12">
          <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">1. Pick your date</h2>
          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-10">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={`header-${i}`} className="text-center text-xs font-bold text-gray-400 pb-2">
                {day}
              </div>
            ))}
            {/* Empty slots for start of month alignment (visual only) */}
            <div className="col-span-2 hidden md:block"></div>
            
            {dates.map((date) => (
              <button
                key={date}
                className="aspect-square flex items-center justify-center text-sm md:text-base font-bold text-gray-700 border border-gray-200 rounded-sm hover:border-sindoor hover:text-sindoor transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary active:bg-gray-50"
              >
                {date}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">2. Choose the seva</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {['Gau Seva', 'Anna Daan', 'Vidya Daan'].map((cause) => (
              <label key={cause} className="flex items-start gap-3 p-4 border border-gray-200 rounded-sm cursor-pointer hover:border-gray-400 transition-colors">
                <input type="radio" name="cause" className="mt-1 border-gray-300 text-sindoor focus:ring-sindoor" />
                <span className="text-sm font-bold text-gray-900">{cause}</span>
              </label>
            ))}
          </div>

          <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">3. Set the amount</h2>
          <div className="flex flex-wrap gap-4 mb-10">
            {[101, 251, 501, 1100].map((amount) => (
              <button key={amount} className="px-6 py-3 border border-gray-200 rounded-sm text-sm font-bold text-gray-700 hover:border-sindoor hover:text-sindoor transition-colors">
                ₹{amount}
              </button>
            ))}
          </div>

          <div className="mb-10">
            <label className="block text-sm font-bold text-gray-900 mb-2">The reason (optional)</label>
            <input 
              type="text" 
              placeholder="e.g. In memory of..." 
              className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sindoor focus:ring-1 focus:ring-sindoor"
            />
            <p className="text-xs text-gray-500 mt-2">This will be printed on your receipt every month.</p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="text-sm text-gray-600">
              Cancel anytime with one tap on WhatsApp.
            </div>
            <Link href="/give" className="w-full md:w-auto text-center bg-sindoor text-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-colors shadow-[0_1px_0_var(--rule)]">
              Set up mandate
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
