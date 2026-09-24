import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-ink max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-sindoor">
      {/* <!-- DRAFT: needs September sign-off --> */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Privacy Policy</h1>
      <p className="text-sm font-semibold text-ink/60 mb-8 uppercase tracking-widest border-b border-rule pb-4">Last Updated: October 2026</p>

      <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/90">
        <p>
          September Charitable Trust ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a donation, in compliance with the Digital Personal Data Protection (DPDP) Act, 2023.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">1. Information We Collect</h2>
        <p>
          We only collect information that is strictly necessary to process your donation, issue receipts, and maintain our legally required ledger.
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li><strong>Identity Data:</strong> Your full name as it appears on your PAN card.</li>
          <li><strong>Contact Data:</strong> Your phone number or email address (used solely to send your receipt).</li>
          <li><strong>Tax Data:</strong> Your PAN (Permanent Account Number), collected strictly if you request an 80G tax exemption receipt.</li>
          <li><strong>Payment Metadata:</strong> Transaction IDs and status provided by our payment gateway (Razorpay). <em>We never collect or store your credit card numbers, CVV, or UPI PINs.</em> All payment processing happens directly on Razorpay's secure servers.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">2. How We Use Your Information</h2>
        <p>
          Your data is used for the following purposes:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li>To process and record your donation securely.</li>
          <li>To generate and deliver your donation receipt via WhatsApp or email.</li>
          <li>To issue 80G tax exemption certificates to the Income Tax Department of India.</li>
          <li>To maintain our public Khata (ledger). <em>Note: Our public ledger displays donation amounts and purposes, but never your personal identifying information.</em></li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">3. Data Retention</h2>
        <p>
          Under Indian tax laws and the DPDP Act, we are required to retain donation records, including your PAN (if provided) and contact details, for a minimum period of 8 years. We do not retain this data longer than legally mandated.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal data. We only share your data with:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li><strong>Razorpay:</strong> To process your payment securely.</li>
          <li><strong>Government Authorities:</strong> The Income Tax Department of India, to file our mandatory 80G returns.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">5. Your Rights and Grievances</h2>
        <p>
          Under the DPDP Act, you have the right to access, correct, or request the deletion of your personal data (subject to our legal retention requirements for tax purposes). 
        </p>
        <p>
          To exercise these rights, please contact our Data Protection and Grievance Officer:
        </p>
        <div className="bg-paper p-4 border border-rule mt-2 font-semibold">
          <p>Email: grievance@septembercharity.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </article>
  );
}
