import Link from 'next/link';
import { Download, Building, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Who is accountable | September',
  description: 'Trustees, registration numbers, audited statements, and the trust bank account.',
};

export default function WhoPage() {
  return (
    <main className="w-full min-h-screen bg-paper pb-24">
      {/* 24px Ruled background */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, var(--rule) 23px, var(--rule) 24px)',
             backgroundSize: '100% 24px',
             opacity: 0.35
           }}>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-8 pt-16 md:pt-24">
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6 leading-tight">
            Who is accountable
          </h1>
          <p className="text-lg text-ink/80 max-w-xl">
            We operate as a registered charitable trust in India. Below is the legal entity, the people responsible, and where the money lands.
          </p>
        </header>

        {/* The People */}
        <section className="bg-card border border-rule shadow-[0_1px_0_var(--rule)] mb-12">
          <div className="p-8 md:p-10 border-b border-rule">
            <h2 className="text-2xl font-heading font-bold text-ink mb-2">The Trustees</h2>
            <p className="text-sm text-ink/70 mb-8">The three individuals legally responsible for the trust.</p>
            
            {/* Group Photo - Following the "no circles, single group photo" rule */}
            <div className="mb-6">
              <div className="w-full bg-paper aspect-[16/9] md:aspect-[21/9] flex items-center justify-center border border-rule">
                <p className="text-ink/50 text-sm italic">&lt;!-- DRAFT: Needs September team photo --&gt;</p>
              </div>
              <p className="text-xs text-ink/60 mt-3 font-medium">Left to right: Amit Desai (Managing Trustee), Priya Sharma (Treasurer), Rahul Verma.</p>
            </div>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-heading font-bold text-ink mb-4 flex items-center gap-2">
                <Building size={18} className="text-ink/50" /> Registrations
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <span className="block text-ink/60 text-xs font-bold uppercase tracking-wider mb-1">Entity Name</span>
                  <span className="font-medium text-ink">September Welfare Trust</span>
                </li>
                <li>
                  <span className="block text-ink/60 text-xs font-bold uppercase tracking-wider mb-1">Trust Registration</span>
                  <span className="font-medium text-ink">E/21455/Ahmedabad</span>
                </li>
                <li>
                  <span className="block text-ink/60 text-xs font-bold uppercase tracking-wider mb-1">12A (Tax Exemption)</span>
                  <span className="font-medium text-ink">AACTS8899E1234</span>
                </li>
                <li>
                  <span className="block text-ink/60 text-xs font-bold uppercase tracking-wider mb-1">80G (Donor Deduction)</span>
                  <span className="font-medium text-ink">AACTS8899E5678</span>
                </li>
                <li>
                  <span className="block text-ink/60 text-xs font-bold uppercase tracking-wider mb-1">CSR-1</span>
                  <span className="font-medium text-ink">CSR00012345</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-ink mb-4 flex items-center gap-2">
                <FileText size={18} className="text-ink/50" /> Documents
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 border border-rule hover:border-sindoor group transition-colors">
                  <span className="text-sm font-medium text-ink group-hover:text-sindoor transition-colors">Trust Deed (2021)</span>
                  <Download size={16} className="text-ink/50 group-hover:text-sindoor transition-colors" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 border border-rule hover:border-sindoor group transition-colors">
                  <span className="text-sm font-medium text-ink group-hover:text-sindoor transition-colors">Audited Statement (FY 24-25)</span>
                  <Download size={16} className="text-ink/50 group-hover:text-sindoor transition-colors" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 border border-rule hover:border-sindoor group transition-colors">
                  <span className="text-sm font-medium text-ink group-hover:text-sindoor transition-colors">Audited Statement (FY 23-24)</span>
                  <Download size={16} className="text-ink/50 group-hover:text-sindoor transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Account */}
        <section className="bg-card border border-rule shadow-[0_1px_0_var(--rule)] p-8 md:p-10">
          <h2 className="text-2xl font-heading font-bold text-ink mb-2">The Bank Account</h2>
          <p className="text-sm text-ink/70 mb-6">If you prefer to wire funds directly via NEFT/RTGS, this is the only account we operate. Please email us after transferring so we can issue your 80G receipt.</p>
          
          <div className="bg-paper border border-rule p-6 font-mono text-sm text-ink space-y-3">
            <div className="flex justify-between border-b border-rule pb-2">
              <span className="text-ink/60 font-sans text-xs font-bold uppercase tracking-wider">Account Name</span>
              <span>September Welfare Trust</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2 pt-1">
              <span className="text-ink/60 font-sans text-xs font-bold uppercase tracking-wider">Account Number</span>
              <span className="font-bold">50200067891234</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-2 pt-1">
              <span className="text-ink/60 font-sans text-xs font-bold uppercase tracking-wider">IFSC Code</span>
              <span>HDFC0001234</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-ink/60 font-sans text-xs font-bold uppercase tracking-wider">Bank & Branch</span>
              <span>HDFC Bank, CG Road, Ahmedabad</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
