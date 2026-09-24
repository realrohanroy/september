import Link from 'next/link';

export default function GiveCheckout() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50 font-sans">
      
      {/* Checkout simplified nav */}
      <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-8 py-4 flex justify-center">
        <Link href="/" className="text-2xl font-heading font-extrabold text-primary tracking-tight">
          september
        </Link>
      </header>

      {/* Checkout column */}
      <div className="w-full max-w-[440px] mx-auto px-4 py-10 flex-1 flex flex-col">
        <h1 className="text-2xl font-heading font-bold text-gray-900 text-center mb-8">Give</h1>
        
        <form className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 sm:p-8 flex flex-col gap-6">
          
          {/* 1. Cause */}
          <div className="flex flex-col gap-2">
            <label htmlFor="cause" className="text-sm font-semibold text-gray-700">Cause</label>
            <select id="cause" defaultValue="gau-seva" className="w-full border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
              <option value="gau-seva">Gau seva</option>
              <option value="food">Food</option>
              <option value="education">Education</option>
              <option value="temple-repair">Temple repair</option>
            </select>
          </div>

          {/* 2. Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Amount</label>
            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="border border-gray-200 rounded-lg py-2.5 text-sm font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">
                ₹ 501
              </button>
              <button type="button" className="border-2 border-primary bg-primary/10 rounded-lg py-2.5 text-sm font-bold text-primary">
                ₹ 1,100
              </button>
              <button type="button" className="border border-gray-200 rounded-lg py-2.5 text-sm font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">
                ₹ 2,100
              </button>
              <button type="button" className="border border-gray-200 rounded-lg py-2.5 text-sm font-bold text-gray-600 hover:border-primary hover:text-primary transition-colors">
                ₹ 5,100
              </button>
              <div className="col-span-2 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                <input type="number" placeholder="Other amount" className="w-full border border-gray-200 rounded-lg bg-gray-50 pl-8 pr-4 py-2.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
          </div>

          {/* 3. Frequency */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Frequency</label>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button type="button" className="flex-1 bg-white shadow-sm text-gray-900 rounded-md py-2 text-sm font-bold">
                Once
              </button>
              <button type="button" className="flex-1 text-gray-500 rounded-md py-2 text-sm font-semibold hover:text-gray-700 transition-colors">
                Every month
              </button>
            </div>
          </div>

          {/* 4. Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
            <input type="text" id="name" placeholder="Full name" required className="w-full border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>

          {/* 5. Phone or email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact" className="text-sm font-semibold text-gray-700">Phone or email</label>
            <input type="text" id="contact" placeholder="To send your receipt" required className="w-full border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>

          {/* 6. Sankalp line */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sankalp" className="text-sm font-semibold text-gray-700">Give in someone's name (optional)</label>
            <input type="text" id="sankalp" maxLength={60} placeholder="e.g. In memory of Amma" className="w-full border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-4 mt-2">
            {/* 7. 80G */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">I want an 80G tax receipt</span>
            </label>
            
            {/* 8. Fee coverage */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Cover the transaction fee (₹24.00)</span>
            </label>
          </div>

          {/* 9. Button */}
          <div className="mt-2 flex flex-col gap-4">
            <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
              GIVE ₹ 1,124
            </button>
            <div className="flex flex-col gap-1.5 text-center text-xs text-gray-400 font-medium">
              <span>80G: AABCD1234E80G</span>
              <span>Book last updated Sunday 20 Sep</span>
              <span className="text-green-600">Receipt on WhatsApp in under a minute</span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer compliance line */}
      <footer className="w-full py-6 px-4 bg-white border-t border-gray-200 text-center mt-auto">
        <p className="text-xs text-gray-400 font-medium">
          September Charitable Trust. Reg. No: E/12345/Ahmedabad. <br className="sm:hidden"/>
          <Link href="/legal/terms" className="hover:text-gray-600 transition-colors">Terms</Link> &middot; <Link href="/legal/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link> &middot; <Link href="/legal/refund" className="hover:text-gray-600 transition-colors">Refund</Link>
        </p>
      </footer>
    </main>
  );
}
