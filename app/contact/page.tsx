import Link from 'next/link';

export default function ContactPage() {
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
        <div className="bg-card rounded-none shadow-[0_1px_0_var(--rule)] border border-rule p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-6">Contact Us</h1>
          <p className="text-ink/70 mb-8 text-lg">
            We are here to help. Reach out to us for any queries regarding your donations, receipts, or our causes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-ink mb-2">Email Support</h3>
              <p className="text-ink/80 mb-1">hello@september.org</p>
              <p className="text-sm text-ink/60">We typically reply within 24 hours.</p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-ink mb-2">Registered Address</h3>
              <p className="text-ink/80">
                September Charitable Trust,<br />
                Ahmedabad, Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
