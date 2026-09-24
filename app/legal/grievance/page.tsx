import React from 'react';

export default function GrievancePage() {
  return (
    <article className="prose prose-ink max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-sindoor">
      {/* <!-- DRAFT: needs September sign-off --> */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Grievance Officer</h1>
      <p className="text-sm font-semibold text-ink/60 mb-8 uppercase tracking-widest border-b border-rule pb-4">Digital Personal Data Protection Act, 2023</p>

      <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/90">
        <p>
          In accordance with the Digital Personal Data Protection (DPDP) Act, 2023 and the Information Technology Act, 2000, September Charitable Trust has appointed a Data Protection and Grievance Officer.
        </p>

        <p>
          If you have any discrepancies, grievances, or requests regarding the processing of your personal data, or if you wish to report a duplicate payment issue, please contact our Grievance Officer at the details below.
        </p>

        <div className="bg-paper p-6 border border-rule mt-4 flex flex-col gap-3">
          <h2 className="text-lg font-bold m-0 text-ink">Mr. Alok Sharma</h2>
          <p className="m-0 text-ink/80 text-sm font-semibold uppercase tracking-wider">Grievance & Nodal Officer</p>
          <div className="flex flex-col gap-1 mt-4">
            <p className="m-0 font-medium"><strong>Email:</strong> grievance@septembercharity.in</p>
            <p className="m-0 font-medium"><strong>Phone:</strong> +91 98765 43210 <span className="text-ink/50 text-sm font-normal">(Mon-Fri, 10 AM to 5 PM IST)</span></p>
          </div>
          <div className="mt-4 pt-4 border-t border-rule">
            <p className="m-0 text-sm font-medium"><strong>Registered Address:</strong></p>
            <p className="m-0 text-sm text-ink/80 mt-1">
              September Charitable Trust<br/>
              12th Floor, Trust Bhavan<br/>
              SG Highway, Ahmedabad, Gujarat - 380015
            </p>
          </div>
        </div>

        <p className="text-sm text-ink/70 mt-4">
          Please note: All grievances will be acknowledged within 24 hours of receipt, and we aim to resolve them within 15 days as mandated by law.
        </p>
      </div>
    </article>
  );
}
