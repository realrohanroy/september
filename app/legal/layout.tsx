import Link from 'next/link';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full min-h-screen bg-paper font-sans">
      <header className="sticky top-0 z-50 bg-card shadow-[0_1px_0_var(--rule)] px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-extrabold text-sindoor tracking-tight">
          september
        </Link>
        <Link href="/give" className="bg-sindoor text-paper px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-colors">
          Give Now
        </Link>
      </header>
      <div className="w-full max-w-[800px] mx-auto px-4 py-12 md:py-20 flex-1 flex flex-col">
        <div className="bg-card rounded-none shadow-[0_1px_0_var(--rule)] border border-rule p-8 md:p-12 prose prose-gray max-w-none">
          {children}
        </div>
      </div>
    </main>
  );
}
