import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
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

      <div className="relative z-10 w-full max-w-[600px] mx-auto px-4 py-16 md:py-24 flex-1 flex flex-col">
        <div className="mb-10 text-center">
          {/* <!-- DRAFT: needs September sign-off --> */}
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-3">Contact Us</h1>
          <p className="text-sm text-ink/70 font-medium max-w-[40ch] mx-auto">We are here to help. Reach out to us for any queries regarding donations, 80G receipts, or our causes.</p>
        </div>

        <div className="bg-card border border-rule p-8 md:p-12 flex flex-col gap-8 shadow-sm rounded-[2px]">
          
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-paper border border-rule rounded-full text-sindoor shrink-0">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col mt-1">
              <h2 className="text-sm font-bold tracking-wide uppercase text-ink/80 mb-1">Email</h2>
              <a href="mailto:namaste@septembercharity.in" className="text-lg font-bold text-ink hover:text-sindoor transition-colors">namaste@septembercharity.in</a>
              <p className="text-sm text-ink/60 mt-1">We typically reply within 24 hours.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start pt-6 border-t border-rule">
            <div className="p-3 bg-paper border border-rule rounded-full text-sindoor shrink-0">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col mt-1">
              <h2 className="text-sm font-bold tracking-wide uppercase text-ink/80 mb-1">Phone</h2>
              <a href="tel:+919876543210" className="text-lg font-bold text-ink hover:text-sindoor transition-colors">+91 98765 43210</a>
              <p className="text-sm text-ink/60 mt-1">Mon-Fri, 10:00 AM to 5:00 PM IST</p>
            </div>
          </div>

          <div className="flex gap-4 items-start pt-6 border-t border-rule">
            <div className="p-3 bg-paper border border-rule rounded-full text-sindoor shrink-0">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col mt-1">
              <h2 className="text-sm font-bold tracking-wide uppercase text-ink/80 mb-1">Registered Address</h2>
              <address className="not-italic text-base font-medium leading-relaxed text-ink/90">
                September Charitable Trust<br/>
                12th Floor, Trust Bhavan<br/>
                SG Highway, Ahmedabad<br/>
                Gujarat - 380015, India
              </address>
              <p className="text-sm text-ink/60 mt-2 font-semibold">Reg No: E/12345/Ahmedabad</p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-ink/60 font-medium">
          <p>For data deletion requests or payment disputes, please contact our <Link href="/legal/grievance" className="text-sindoor hover:underline">Grievance Officer</Link>.</p>
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
