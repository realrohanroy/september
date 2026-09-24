import Link from 'next/link';
import { ArrowLeft, FileText, Check } from 'lucide-react';

export default function GiveCheckout() {
  return (
    <main className="relative flex flex-col w-full min-h-[100dvh] bg-paper font-sans text-ink">
      
      {/* Khata Ruled Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, var(--rule) 23px, var(--rule) 24px)',
          backgroundSize: '100% 24px',
          backgroundPosition: '0 0'
        }}
        aria-hidden="true"
      />

      {/* Top Nav (Mobile & Desktop) */}
      <header className="sticky top-0 z-50 bg-paper border-b border-rule px-4 py-4 md:px-8 flex items-center justify-between shadow-[0_1px_0_var(--rule)]">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-ink hover:text-sindoor transition-colors"
          aria-label="Go back to homepage"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span className="text-sm font-bold hidden sm:inline-block">Back</span>
        </Link>
        
        <Link href="/" className="text-2xl font-heading font-extrabold text-sindoor tracking-tight absolute left-1/2 -translate-x-1/2">
          september
        </Link>
        
        <div className="w-[60px]" aria-hidden="true" />
      </header>

      {/* Checkout column */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-4 py-12 flex-1 flex flex-col">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-sindoor mb-3">Give</h1>
          <p className="text-sm text-ink/70 font-medium">A ledger entry starts here.</p>
        </div>
        
        <form className="bg-card border border-rule p-6 md:p-10 flex flex-col gap-10">
          
          {/* 1. Cause */}
          <div className="flex flex-col gap-3">
            <label htmlFor="cause" className="text-sm font-bold tracking-wide uppercase text-ink/80">Select Cause</label>
            <div className="relative">
              <select 
                id="cause" 
                defaultValue="gau-seva" 
                className="appearance-none w-full border border-rule rounded-none] bg-paper px-4 py-3 text-base font-semibold text-ink focus:outline-none focus:border-ink transition-colors cursor-pointer"
              >
                <option value="gau-seva">Gau Seva (Cow Shelter)</option>
                <option value="food">Anna Daan (Food Distribution)</option>
                <option value="education">Vidya Daan (Education)</option>
                <option value="temple-repair">Mandir Seva (Temple Upkeep)</option>
                <option value="river">Nadi Seva (River Clean-up)</option>
                <option value="elderly">Vriddha Seva (Elder Care)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                ▼
              </div>
            </div>
          </div>

          {/* 2. Amount */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold tracking-wide uppercase text-ink/80">Amount (₹)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button 
                type="button" 
                className="border border-rule rounded-none] bg-paper py-3 text-sm font-bold text-ink hover:border-ink transition-colors"
              >
                51
              </button>
              <button 
                type="button" 
                className="border-2 border-sindoor rounded-none] bg-paper py-3 text-sm font-bold text-sindoor"
              >
                101
              </button>
              <button 
                type="button" 
                className="border border-rule rounded-none] bg-paper py-3 text-sm font-bold text-ink hover:border-ink transition-colors"
              >
                251
              </button>
              <button 
                type="button" 
                className="border border-rule rounded-none] bg-paper py-3 text-sm font-bold text-ink hover:border-ink transition-colors"
              >
                501
              </button>
              <div className="col-span-2 sm:col-span-4 relative mt-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/50 font-bold">₹</span>
                <input 
                  type="number" 
                  placeholder="Other amount" 
                  className="w-full border border-rule rounded-none] bg-paper pl-8 pr-4 py-3 text-base font-bold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors" 
                />
              </div>
            </div>
          </div>

          {/* 3. Frequency */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold tracking-wide uppercase text-ink/80">Frequency</label>
            <div className="flex border border-sindoor rounded-none] p-1 bg-paper">
              <button 
                type="button" 
                className="flex-1 bg-sindoor text-paper rounded-none] py-2.5 text-sm font-bold shadow-[0_1px_0_var(--rule)]"
              >
                Once
              </button>
              <button 
                type="button" 
                className="flex-1 bg-transparent text-sindoor hover:bg-sindoor/10 rounded-none] py-2.5 text-sm font-bold transition-colors"
              >
                Monthly
              </button>
            </div>
          </div>

          {/* 4. Details */}
          <div className="flex flex-col gap-6 pt-4 border-t border-rule">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-ink">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="As it appears on your PAN" 
                required 
                className="w-full border border-rule rounded-none] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="text-sm font-bold text-ink">Phone or email</label>
              <input 
                type="text" 
                id="contact" 
                placeholder="For your receipt" 
                required 
                className="w-full border border-rule rounded-none] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sankalp" className="text-sm font-bold text-ink">Give in someone's name <span className="font-normal text-ink/60">(optional)</span></label>
              <input 
                type="text" 
                id="sankalp" 
                maxLength={60} 
                placeholder="e.g. In memory of Amma" 
                className="w-full border border-rule rounded-none] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-4 pt-4 border-t border-rule">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border border-rule rounded-none] bg-paper checked:bg-sindoor checked:border-sindoor transition-colors cursor-pointer" />
                <Check size={14} strokeWidth={3} className="absolute inset-0 m-auto text-paper opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm font-semibold text-ink group-hover:text-sindoor transition-colors">I want an 80G tax receipt</span>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border border-rule rounded-none] bg-paper checked:bg-sindoor checked:border-sindoor transition-colors cursor-pointer" />
                <Check size={14} strokeWidth={3} className="absolute inset-0 m-auto text-paper opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm font-semibold text-ink group-hover:text-sindoor transition-colors">Cover the transaction fee (₹2.42)</span>
            </label>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-5">
            <button 
              type="submit" 
              className="w-full bg-sindoor text-paper py-4 rounded-none] font-bold text-lg hover:opacity-90 active:translate-y-[1px] transition-all"
            >
              Give ₹103.42
            </button>
            <div className="flex flex-col gap-2 text-center text-xs text-ink/60 font-semibold uppercase tracking-wider">
              <span>80G: AABCD1234E80G</span>
              <span className="flex items-center justify-center gap-1.5"><FileText size={12}/> Receipt via WhatsApp</span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer compliance line */}
      <footer className="w-full py-6 px-4 bg-paper border-t border-rule text-center mt-auto z-10">
        <p className="text-xs text-ink/60 font-semibold">
          September Charitable Trust. Reg. No: E/12345/Ahmedabad. <br className="sm:hidden"/>
          <Link href="/legal/terms" className="hover:text-ink transition-colors ml-1 sm:ml-0">Terms</Link> &middot; <Link href="/legal/privacy" className="hover:text-ink transition-colors">Privacy</Link> &middot; <Link href="/legal/refund" className="hover:text-ink transition-colors">Refund</Link>
        </p>
      </footer>
    </main>
  );
}
