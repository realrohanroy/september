import React from 'react';

export default function TermsOfServicePage() {
  return (
    <article className="prose prose-ink max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-sindoor">
      {/* <!-- DRAFT: needs September sign-off --> */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Terms of Service</h1>
      <p className="text-sm font-semibold text-ink/60 mb-8 uppercase tracking-widest border-b border-rule pb-4">Last Updated: October 2026</p>

      <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/90">
        <p>
          Welcome to the September Charitable Trust website. By accessing our website or making a donation, you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">1. Donations</h2>
        <p>
          All donations made through the platform are voluntary. By completing a transaction, you confirm that the funds are your own and that you are authorized to make the payment.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">2. 80G Tax Exemptions</h2>
        <p>
          September Charitable Trust is registered under Section 80G of the Income Tax Act, 1961. 
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li>To receive an 80G tax receipt, you must provide a valid Indian PAN (Permanent Account Number) at the time of donation.</li>
          <li>If a PAN is not provided during the checkout process, the donation will be treated as an anonymous or non-80G donation, and a tax exemption certificate cannot be issued retroactively.</li>
          <li>The issuance of the certificate is subject to the verification of the funds hitting our bank account successfully.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">3. The Khata (Public Ledger)</h2>
        <p>
          Our organization operates on a principle of absolute transparency. 
          By donating, you acknowledge that the amount of your donation and the cause it was directed to will be recorded and published in our public Khata (ledger). 
          <strong>Your name, phone number, and PAN will never be published in the public ledger.</strong>
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">4. Platform Availability</h2>
        <p>
          We use Razorpay to process payments. We do not guarantee uninterrupted access to the payment gateway and are not liable for any transaction failures caused by banking networks, UPI downtimes, or Razorpay service interruptions.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">5. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes arising out of your donation or use of this website shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
        </p>
      </div>
    </article>
  );
}
