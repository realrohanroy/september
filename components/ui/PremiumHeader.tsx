import Link from 'next/link';
import { Menu } from 'lucide-react';
import React from 'react';

export function PremiumHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-rule px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_1px_0_var(--rule)]">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-heading font-extrabold text-blue-600 tracking-tight flex items-center gap-2 relative">
          september
          {/* Brand line rule under logo */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-sindoor transform translate-y-3 hidden md:block"></div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-ink">
          <Link href="/causes" className="hover:text-sindoor transition-colors">Causes</Link>
          <Link href="/khata" className="hover:text-sindoor transition-colors">The Khata</Link>
          <Link href="/your-date" className="hover:text-sindoor transition-colors">Monthly</Link>
          <Link href="/field-notes" className="hover:text-sindoor transition-colors">Field Notes</Link>
          <Link href="/who" className="hover:text-sindoor transition-colors">Accountability</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/give" className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-8 py-2.5 text-[15px] font-extrabold tracking-wide overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 hidden md:flex group">
          <span className="relative z-10 flex items-center gap-2">Donate Now <span className="inline-block group-hover:animate-pulse">❤️</span></span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </Link>
        <button className="lg:hidden text-ink p-1">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
