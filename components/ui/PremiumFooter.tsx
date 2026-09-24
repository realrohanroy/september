import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export function PremiumFooter() {
  return (
    <footer className="bg-card border-t border-rule mt-auto">
      {/* Main Footer Body */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-rule">
        
        {/* Left section: Statement */}
        <div className="md:col-span-7 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-ink tracking-tight mb-6 max-w-[15ch] leading-[1.1]">
            The ledger is our product.
          </h2>
          <p className="text-lg text-ink/70 font-medium max-w-[42ch] mb-10 leading-relaxed">
            Every rupee that comes in, every rupee that goes out, updated every Sunday. We believe transparency isn't a feature; it's the foundation of everything we do.
          </p>
          <Link href="/give" className="group flex items-center gap-3 bg-sindoor text-white rounded-[2px] px-8 py-4 text-base font-bold transition-all active:translate-y-[1px] hover:opacity-90 shadow-sm">
            Give to the Khata
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right section: Links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-8 md:pt-4">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-1">Explore</p>
            <Link href="/causes" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Causes</Link>
            <Link href="/khata" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">The Khata</Link>
            <Link href="/your-date" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Monthly</Link>
            <Link href="/field-notes" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Field Notes</Link>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xs font-bold text-ink/40 uppercase tracking-widest mb-1">Organization</p>
            <Link href="/who" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Accountability</Link>
            <Link href="/contact" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Contact Us</Link>
            <a href="mailto:namaste@septembercharity.in" className="text-base font-bold text-ink/80 hover:text-sindoor transition-colors">Email Us</a>
          </div>
        </div>
      </div>

      {/* Compliance Block (Centered per AGENTS.md rules) */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-ink mb-6">
          <Link href="/legal/terms" className="hover:text-sindoor transition-colors">Terms</Link>
          <Link href="/legal/privacy" className="hover:text-sindoor transition-colors">Privacy</Link>
          <Link href="/legal/refund" className="hover:text-sindoor transition-colors">Refund</Link>
          <Link href="/legal/grievance" className="hover:text-sindoor transition-colors">Grievance</Link>
        </div>
        <div className="text-xs text-ink/60 space-y-2 font-medium">
          <p>September Charitable Trust. Reg No: E/12345/Ahmedabad</p>
          <p>12A: AACTS8899E1234 • 80G: AACTS8899E5678 • CSR-1: CSR00012345</p>
        </div>
      </div>
    </footer>
  );
}
