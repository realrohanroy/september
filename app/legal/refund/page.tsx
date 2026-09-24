import React from 'react';

export default function RefundPolicyPage() {
  return (
    <article className="prose prose-ink max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-sindoor">
      {/* <!-- DRAFT: needs September sign-off --> */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Refund Policy</h1>
      <p className="text-sm font-semibold text-ink/60 mb-8 uppercase tracking-widest border-b border-rule pb-4">Last Updated: October 2026</p>

      <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/90">
        <p>
          As a charitable organization, September Charitable Trust operates on strict budgeting and immediate deployment of funds to active causes. Therefore, we maintain a strict policy regarding the refund of donations.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">1. General Policy</h2>
        <p>
          <strong>All donations made to September Charitable Trust are final and non-refundable.</strong> Once a donation is successfully captured and processed, it is immediately allocated to the respective cause (Gau Seva, Anna Daan, etc.) and recorded in our immutable Khata (ledger).
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2">2. Exceptions (Duplicate Charges)</h2>
        <p>
          The only exception to our non-refundable policy is in the event of a proven technical error or a duplicate charge.
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li>If you are charged twice for the same transaction due to a network timeout or banking error, please contact us within <strong>7 days</strong> of the transaction.</li>
          <li>You must provide proof of the duplicate deduction (e.g., bank statement screenshot) along with your receipt number.</li>
          <li>Upon verification with our payment gateway (Razorpay), the duplicate amount will be refunded to the original source account within 5 to 7 business days.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">3. Monthly Subscriptions (Your Date)</h2>
        <p>
          If you have set up a recurring monthly donation (UPI Autopay or e-Mandate):
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
          <li>You can cancel your mandate at any time directly through your UPI app or by clicking the cancellation link sent to you before each charge.</li>
          <li>Once a monthly charge has been executed, it cannot be refunded. Cancellation applies only to future scheduled charges.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2">4. How to Request a Refund</h2>
        <p>
          For duplicate charge issues, please reach out to our grievance officer with your Receipt ID and transaction details at:
        </p>
        <div className="bg-paper p-4 border border-rule mt-2 font-semibold">
          <p>Email: grievance@septembercharity.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </article>
  );
}
