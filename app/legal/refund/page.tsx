export default function RefundPage() {
  return (
    <>
      <h1 className="text-3xl font-heading font-bold text-gray-900 mb-6">Refund Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: 24 September 2026</p>
      
      <h2 className="text-xl font-heading font-bold text-gray-900 mt-8 mb-4">1. General Policy</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Donations made to September Charitable Trust are generally non-refundable. We urge you to verify the amount before completing the transaction.
      </p>

      <h2 className="text-xl font-heading font-bold text-gray-900 mt-8 mb-4">2. Erroneous Transactions</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        If you have made a donation in error (e.g., entered the wrong amount or were charged twice due to technical issues), please contact us within 7 days at our grievance desk to initiate a refund request.
      </p>
      
      {/* Policy content managed by September administration */}
    </>
  );
}
