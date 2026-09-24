import Link from 'next/link';

export default function GiveCheckout() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--paper)]">
      {/* Checkout simplified nav */}
      <nav className="w-full bg-[var(--paper)] py-4 px-5 flex justify-center border-b border-[var(--rule)] relative z-[var(--z-sticky)]">
        <Link href="/" className="text-h3 text-[var(--ink)] border-b border-[var(--ink)] pb-[1px] leading-none">
          september
        </Link>
      </nav>

      {/* Checkout column */}
      <div className="w-full max-w-[440px] mx-auto px-5 py-[var(--spacing-2u)] flex-1 relative z-[var(--z-content)] flex flex-col">
        <h1 className="text-h2 mb-[var(--spacing-1u)] text-center">Give</h1>
        
        <form className="flex flex-col gap-6 bg-[var(--card)] p-6 border border-[var(--rule)] rounded-[var(--radius-card)]">
          
          {/* 1. Cause */}
          <div className="flex flex-col gap-2">
            <label htmlFor="cause" className="text-small font-medium text-[var(--ink-60)]">Cause</label>
            <select id="cause" defaultValue="gau-seva" className="w-full border border-[var(--rule)] rounded-[var(--radius-control)] bg-[var(--paper)] px-3 py-2 text-body focus:outline-none focus:border-[var(--ink)] transition-colors">
              <option value="gau-seva">Gau seva</option>
              <option value="food">Food</option>
              <option value="education">Education</option>
              <option value="temple-repair">Temple repair</option>
            </select>
          </div>

          {/* 2. Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-small font-medium text-[var(--ink-60)]">Amount</label>
            <div className="grid grid-cols-3 gap-2">
              <button type="button" className="border border-[var(--rule)] rounded-[var(--radius-control)] py-2 text-body font-num text-center hover:bg-[var(--rule)] transition-colors">
                ₹ 501
              </button>
              <button type="button" className="border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] rounded-[var(--radius-control)] py-2 text-body font-num text-center shadow-line">
                ₹ 1,100
              </button>
              <button type="button" className="border border-[var(--rule)] rounded-[var(--radius-control)] py-2 text-body font-num text-center hover:bg-[var(--rule)] transition-colors">
                ₹ 2,100
              </button>
              <button type="button" className="border border-[var(--rule)] rounded-[var(--radius-control)] py-2 text-body font-num text-center hover:bg-[var(--rule)] transition-colors">
                ₹ 5,100
              </button>
              <div className="col-span-2 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-60)] font-num">₹</span>
                <input type="number" placeholder="Other" className="w-full border border-[var(--rule)] rounded-[var(--radius-control)] bg-[var(--paper)] pl-7 pr-3 py-2 text-body font-num focus:outline-none focus:border-[var(--ink)] transition-colors" />
              </div>
            </div>
          </div>

          {/* 3. Frequency */}
          <div className="flex flex-col gap-2">
            <label className="text-small font-medium text-[var(--ink-60)]">Frequency</label>
            <div className="flex bg-[var(--paper)] border border-[var(--rule)] rounded-[var(--radius-control)] p-1">
              <button type="button" className="flex-1 bg-[var(--ink)] text-[var(--paper)] rounded-sm py-1.5 text-small font-medium shadow-line">
                Once
              </button>
              <button type="button" className="flex-1 text-[var(--ink-60)] rounded-sm py-1.5 text-small font-medium hover:bg-[var(--rule)] transition-colors">
                Every month
              </button>
            </div>
          </div>

          {/* 4. Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-small font-medium text-[var(--ink-60)]">Name</label>
            <input type="text" id="name" required className="w-full border border-[var(--rule)] rounded-[var(--radius-control)] bg-[var(--paper)] px-3 py-2 text-body focus:outline-none focus:border-[var(--ink)] transition-colors" />
          </div>

          {/* 5. Phone or email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact" className="text-small font-medium text-[var(--ink-60)]">Phone or email</label>
            <input type="text" id="contact" required className="w-full border border-[var(--rule)] rounded-[var(--radius-control)] bg-[var(--paper)] px-3 py-2 text-body focus:outline-none focus:border-[var(--ink)] transition-colors" />
          </div>

          {/* 6. Sankalp line */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sankalp" className="text-small font-medium text-[var(--ink-60)]">Give in someone's name (optional)</label>
            <input type="text" id="sankalp" maxLength={60} placeholder="e.g. In memory of Amma" className="w-full border border-[var(--rule)] rounded-[var(--radius-control)] bg-[var(--paper)] px-3 py-2 text-body focus:outline-none focus:border-[var(--ink)] transition-colors" />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 mt-2">
            {/* 7. 80G */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded-sm border-[var(--rule)] text-[var(--ink)] focus:ring-[var(--ink)]" />
              <span className="text-small">I want an 80G tax receipt</span>
            </label>
            
            {/* 8. Fee coverage */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded-sm border-[var(--rule)] text-[var(--ink)] focus:ring-[var(--ink)]" />
              <span className="text-small">Cover the transaction fee (₹24.00)</span>
            </label>
          </div>

          {/* 9. Button */}
          <div className="mt-4 flex flex-col gap-3">
            <button type="submit" className="w-full bg-[var(--sindoor)] text-[var(--paper)] py-3 rounded-[var(--radius-control)] font-semibold text-body hover:bg-opacity-90 transition-colors shadow-line">
              Give ₹ 1,124
            </button>
            <div className="flex flex-col gap-1 text-center text-small text-[var(--ink-60)]">
              <span>80G: AABCD1234E80G</span>
              <span>Book last updated Sunday 20 Sep</span>
              <span>Receipt on WhatsApp in under a minute</span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer compliance line */}
      <footer className="w-full py-6 px-5 border-t border-[var(--rule)] bg-[var(--paper)] relative z-[var(--z-content)] text-center">
        <p className="text-small text-[var(--ink-60)]">
          September Charitable Trust. Reg. No: E/12345/Ahmedabad. <br/>
          <Link href="/legal/terms" className="underline hover:text-[var(--ink)]">Terms</Link> · <Link href="/legal/privacy" className="underline hover:text-[var(--ink)]">Privacy</Link> · <Link href="/legal/refund" className="underline hover:text-[var(--ink)]">Refund</Link>
        </p>
      </footer>
    </main>
  );
}
