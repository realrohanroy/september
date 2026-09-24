import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
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

      <header className="sticky top-0 z-50 bg-paper border-b border-rule px-4 py-4 md:px-8 flex items-center justify-between shadow-[0_1px_0_var(--rule)]">
        <Link href="/" className="flex items-center gap-2 text-ink hover:text-sindoor transition-colors">
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span className="text-sm font-bold hidden sm:inline-block">Home</span>
        </Link>
        <Link href="/" className="text-xl font-heading font-extrabold text-sindoor tracking-tight absolute left-1/2 -translate-x-1/2">
          september
        </Link>
        <div className="w-[60px]" aria-hidden="true" />
      </header>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-24 flex-1 flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-48 shrink-0 flex flex-col gap-4">
          <p className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-2">Legal & Info</p>
          <ul className="flex flex-col gap-3 font-semibold text-[15px]">
            <li>
              <Link href="/legal/privacy" className="text-ink/70 hover:text-sindoor transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal/terms" className="text-ink/70 hover:text-sindoor transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link href="/legal/refund" className="text-ink/70 hover:text-sindoor transition-colors">Refund Policy</Link>
            </li>
            <li>
              <Link href="/legal/grievance" className="text-ink/70 hover:text-sindoor transition-colors">Grievance Officer</Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink/70 hover:text-sindoor transition-colors">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 max-w-[68ch]">
          <div className="bg-card border border-rule p-6 md:p-12 shadow-sm rounded-[2px]">
            {children}
          </div>
        </div>
      </div>

      <footer className="w-full py-6 px-4 bg-paper border-t border-rule text-center mt-auto z-10">
        <p className="text-xs text-ink/60 font-semibold">
          September Charitable Trust. Reg. No: E/12345/Ahmedabad. <br className="sm:hidden"/>
          <Link href="/legal/terms" className="hover:text-ink transition-colors ml-1 sm:ml-0">Terms</Link> &middot; <Link href="/legal/privacy" className="hover:text-ink transition-colors">Privacy</Link> &middot; <Link href="/legal/refund" className="hover:text-ink transition-colors">Refund</Link>
        </p>
      </footer>
    </main>
  );
}
