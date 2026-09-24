import Link from 'next/link';

export const metadata = {
  title: 'Field Notes | September',
  description: 'Dated updates from the ground.',
};

export default function FieldNotesPage() {
  const notes = [
    {
      id: "fn-124",
      date: "19 Sep 2026",
      cause: "Anna Daan",
      headline: "Extra 200 plates served due to rain displacing workers in Kalupur.",
      place: "Kalupur",
    },
    {
      id: "fn-123",
      date: "17 Sep 2026",
      cause: "Gau Seva",
      headline: "Veterinary team cleared infections in 14 calves from the new rescue batch.",
      place: "Dholka Shelter",
    },
    {
      id: "fn-122",
      date: "15 Sep 2026",
      cause: "Temple Repair",
      headline: "Stone carving for the garbhagriha outer wall completed and installed.",
      place: "Ranchhodji Mandir, Dakor",
    },
    {
      id: "fn-121",
      date: "12 Sep 2026",
      cause: "Vidya Daan",
      headline: "Term 2 textbooks distributed to 45 children in the evening school.",
      place: "Vatva",
    },
    {
      id: "fn-120",
      date: "10 Sep 2026",
      cause: "Nadi Seva",
      headline: "Interception nets caught 80kg of floral waste; diverted to composting.",
      place: "Sabarmati Riverfront",
    },
    {
      id: "fn-119",
      date: "08 Sep 2026",
      cause: "Anna Daan",
      headline: "Kitchen shifted to emergency power after grid failure; lunch served on time.",
      place: "Sabarmati Kitchen",
    }
  ];

  const causes = ["All", "Anna Daan", "Gau Seva", "Temple Repair", "Vidya Daan", "Nadi Seva", "Elder Care"];

  return (
    <main className="w-full min-h-screen bg-paper pb-24">
      {/* 24px Ruled background */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, var(--rule) 23px, var(--rule) 24px)',
             backgroundSize: '100% 24px',
             opacity: 0.35
           }}>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-8 pt-16 md:pt-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6 leading-tight">
            Field Notes
          </h1>
          <p className="text-lg text-ink/80">
            Raw, dated updates from the ground. No marketing, no long stories. Just what happened and where.
          </p>
        </header>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {causes.map((cause, i) => (
            <button 
              key={cause} 
              className={`px-4 py-2 text-sm font-bold rounded-none transition-colors ${
                i === 0 
                  ? 'bg-sindoor text-paper shadow-[0_1px_0_var(--rule)]' 
                  : 'bg-card border border-rule text-ink/70 hover:border-gray-400'
              }`}
            >
              {cause}
            </button>
          ))}
        </div>

        {/* Notes List */}
        <div className="bg-card border border-rule shadow-[0_1px_0_var(--rule)]">
          {notes.map((note, index) => (
            <div key={note.id} className={`p-6 md:p-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-paper transition-colors cursor-pointer ${index !== notes.length - 1 ? 'border-b border-rule' : ''}`}>
              <div className="w-32 shrink-0">
                <span className="text-sm font-bold text-ink">{note.date}</span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/50 mt-1">{note.cause}</span>
              </div>
              <div className="flex-1">
                <p className="text-base text-ink font-medium mb-1">{note.headline}</p>
                <p className="text-sm text-ink/60">{note.place}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-card border border-rule text-ink/80 px-6 py-3 text-sm font-bold hover:border-gray-400 transition-colors shadow-[0_1px_0_var(--rule)]">
            Load more notes
          </button>
        </div>

      </div>
    </main>
  );
}
