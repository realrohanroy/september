import type { Metadata } from "next";
import { Nunito_Sans, Hind } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Menu } from 'lucide-react';

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "September | We publish our book.",
  description: "Every rupee that comes in, every rupee that goes out, updated every Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${hind.variable} font-sans antialiased text-ink bg-paper`}
      >
        <header className="sticky top-0 z-10 bg-paper/95 backdrop-blur-sm border-b border-rule px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_1px_0_var(--rule)]">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-heading font-extrabold text-ink tracking-tight flex items-center gap-2">
              september
              {/* Brand line rule under logo */}
              <div className="absolute bottom-2 left-4 md:left-8 w-28 h-[1px] bg-sindoor hidden md:block" style={{ transform: 'translateY(12px)' }}></div>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-ink">
              <Link href="/causes" className="hover:text-sindoor transition-colors flex items-center gap-1">Causes</Link>
              <Link href="/khata" className="hover:text-sindoor transition-colors">The Khata</Link>
              <Link href="/your-date" className="hover:text-sindoor transition-colors">Monthly</Link>
              <Link href="/field-notes" className="hover:text-sindoor transition-colors">Field Notes</Link>
              <Link href="/who" className="hover:text-sindoor transition-colors">Accountability</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/give" className="bg-sindoor text-white rounded-[4px] px-5 py-2 text-sm font-bold transition-transform active:scale-[0.98] hover:opacity-90 hidden md:block">
              Give ₹51
            </Link>
            <button className="lg:hidden text-ink">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {children}

        {/* Universal Footer */}
        <footer className="bg-white border-t border-rule mt-24">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center">
            <p className="text-xs text-ink/60 font-bold uppercase tracking-widest mb-4">Accountability</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold text-ink mb-12">
              <Link href="/legal/terms" className="hover:text-sindoor transition-colors">Terms</Link>
              <Link href="/legal/privacy" className="hover:text-sindoor transition-colors">Privacy</Link>
              <Link href="/legal/refund" className="hover:text-sindoor transition-colors">Refund</Link>
              <Link href="/legal/grievance" className="hover:text-sindoor transition-colors">Grievance</Link>
              <Link href="/contact" className="hover:text-sindoor transition-colors">Contact</Link>
            </div>
            <div className="text-xs text-ink/60 space-y-2 font-medium">
              <p>September Welfare Trust. Reg No: E/21455/Ahmedabad</p>
              <p>12A: AACTS8899E1234 • 80G: AACTS8899E5678 • CSR-1: CSR00012345</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
