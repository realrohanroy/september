import Link from 'next/link';

export const metadata = {
  title: 'All Causes | September',
  description: 'Open ledgers for six causes. Pick a seva, see the unit economics, and follow the rupee.',
};

export default function CausesPage() {
  const causes = [
    {
      id: "gau-seva",
      title: "Gau Seva",
      sanskrit: "गौ सेवा",
      blurb: "Fodder, medical care, and shelter maintenance for stray and abandoned cattle.",
      unitInr: 51,
      unitLabel: "one cow, one day",
    },
    {
      id: "anna-daan",
      title: "Anna Daan",
      sanskrit: "अन्न दान",
      blurb: "Free daily bhandaras for sadhus, pilgrims, and the homeless.",
      unitInr: 501,
      unitLabel: "one bhandara, 50 plates",
    },
    {
      id: "vidya-daan",
      title: "Vidya Daan",
      sanskrit: "विद्या दान",
      blurb: "Textbooks, uniforms, and tuition support for children from low-income families.",
      unitInr: 351,
      unitLabel: "one child's books, one term",
    },
    {
      id: "temple-repair",
      title: "Temple Repair",
      sanskrit: "मन्दिर जीर्णोद्धार",
      blurb: "Restoring dilapidated heritage temples and supporting local pujaris.",
      unitInr: 1100,
      unitLabel: "one sq ft of stone flooring",
    },
    {
      id: "nadi",
      title: "Nadi Seva",
      sanskrit: "नदी सेवा",
      blurb: "Ghat clean-ups, waste interception nets, and river-bank restoration.",
      unitInr: 251,
      unitLabel: "one ghat cleaned, one day",
    },
    {
      id: "old-age",
      title: "Elder Care",
      sanskrit: "वृद्ध सेवा",
      blurb: "Medicines, warm clothing, and daily meals for abandoned elders.",
      unitInr: 850,
      unitLabel: "one elder's monthly ration",
    },
  ];

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

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 pt-16 md:pt-24">
        
        <header className="mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Six causes.<br />Six open ledgers.
            </h1>
            <p className="text-lg text-gray-700">
              We price every seva in verifiable units. You pick what to cover, and we show you exactly where the money landed.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <div key={cause.id} className="bg-white border border-gray-200 p-8 flex flex-col hover:border-gray-300 transition-colors shadow-[0_1px_0_var(--rule)]">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold tracking-widest uppercase rounded-full">
                  {cause.sanskrit}
                </span>
              </div>
              
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{cause.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">{cause.blurb}</p>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{cause.unitLabel}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-heading font-bold text-gray-900">₹{cause.unitInr}</p>
                  <Link
                    href={`/give?cause=${cause.id}`}
                    className="bg-primary text-white px-5 py-2 text-sm font-bold shadow-md shadow-primary/30 transition-all hover:bg-primary-hover active:scale-[0.98] rounded-full"
                  >
                    Give ₹{cause.unitInr}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
