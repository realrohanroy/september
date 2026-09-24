'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Check } from 'lucide-react';

// Dynamically load Razorpay Checkout script
function useRazorpay() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (document.getElementById('razorpay-checkout-js')) {
      setIsLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);
  }, []);
  return isLoaded;
}

type CheckoutState = 
  | { phase: 'idle' }
  | { phase: 'pending' }
  | { phase: 'done'; donationId: string }
  | { phase: 'error'; message: string };

export default function GiveCheckout() {
  const isRazorpayLoaded = useRazorpay();
  const [state, setState] = useState<CheckoutState>({ phase: 'idle' });
  
  // Form State
  const [cause, setCause] = useState('gau-seva');
  const [amountType, setAmountType] = useState<'preset' | 'other'>('preset');
  const [presetAmount, setPresetAmount] = useState(101); // in rupees
  const [otherAmount, setOtherAmount] = useState(''); // string to handle empty input
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [sankalp, setSankalp] = useState('');
  const [requires80g, setRequires80g] = useState(false);
  const [coverFee, setCoverFee] = useState(true);

  // Compute total paise
  const baseRupees = amountType === 'preset' ? presetAmount : (parseFloat(otherAmount) || 0);
  const basePaise = Math.round(baseRupees * 100);
  const feeCoverPaise = coverFee ? Math.ceil(basePaise * 0.0236) : 0;
  const totalPaise = basePaise + feeCoverPaise;
  const displayTotalRupees = (totalPaise / 100).toFixed(2);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isRazorpayLoaded) {
      setState({ phase: 'error', message: 'Payment system is loading, please wait.' });
      return;
    }
    if (basePaise < 5000) {
      setState({ phase: 'error', message: 'Minimum donation amount is ₹50.' });
      return;
    }

    setState({ phase: 'pending' });
    const idempotencyKey = crypto.randomUUID();

    try {
      const res = await fetch('/api/donations/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cause_id: cause,
          amount_paise: basePaise,
          fee_cover_paise: feeCoverPaise,
          frequency,
          name,
          contact,
          sankalp: sankalp || undefined,
          requires_80g: requires80g,
          idempotency_key: idempotencyKey,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create order');

      const options = {
        key: data.key_id,
        amount: data.amount_paise,
        currency: 'INR',
        name: 'September Charitable Trust',
        description: `Donation towards ${cause}`,
        order_id: data.order_id,
        prefill: {
          name: name,
          contact: contact,
        },
        theme: {
          color: '#F06918', // sindoor
        },
        handler: function (response: any) {
          // Success! State is set to done. Receipt logic follows later.
          // In Razorpay docs, `response.razorpay_payment_id` is available here.
          // But our webhook is the source of truth for capture.
          setState({ phase: 'done', donationId: data.order_id });
        },
      };

      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        setState({ phase: 'error', message: response.error.description });
      });
      rzp.open();

      // Reset to idle if user closes modal without paying
      // There is no robust onClose event in older Razorpay checkout, 
      // but if the form remains visible, we can let the user click again
      // We will revert pending to idle shortly after opening
      setTimeout(() => {
        if (state.phase === 'pending') setState({ phase: 'idle' });
      }, 2000);

    } catch (err: any) {
      setState({ phase: 'error', message: err.message || 'Something went wrong.' });
    }
  };

  if (state.phase === 'done') {
    return (
      <main className="flex flex-col w-full min-h-[100dvh] bg-paper font-sans text-ink items-center justify-center p-4">
        <div className="bg-card border border-rule p-8 md:p-12 text-center max-w-md w-full shadow-sm rounded-[2px]">
          <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-ink mb-4">Given</h1>
          <p className="text-ink/80 mb-8 leading-relaxed">
            Thank you for your trust. Your donation has been recorded. You will receive your receipt via WhatsApp shortly.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-sindoor font-bold uppercase tracking-wide hover:underline"
          >
            Make another donation
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col w-full min-h-[100dvh] bg-paper font-sans text-ink">
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
          <span className="text-sm font-bold hidden sm:inline-block">Back</span>
        </Link>
        <Link href="/" className="text-2xl font-heading font-extrabold text-sindoor tracking-tight absolute left-1/2 -translate-x-1/2">
          september
        </Link>
        <div className="w-[60px]" aria-hidden="true" />
      </header>

      <div className="relative z-10 w-full max-w-[480px] mx-auto px-4 py-12 flex-1 flex flex-col">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-sindoor mb-3">Give</h1>
          <p className="text-sm text-ink/70 font-medium">A ledger entry starts here.</p>
        </div>
        
        {state.phase === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-[2px] mb-6 text-sm font-medium text-center">
            {state.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-card border border-rule p-6 md:p-10 flex flex-col gap-10 shadow-sm relative">
          
          {/* 1. Cause */}
          <div className="flex flex-col gap-3">
            <label htmlFor="cause" className="text-sm font-bold tracking-wide uppercase text-ink/80">Select Cause</label>
            <div className="relative">
              <select 
                id="cause" 
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="appearance-none w-full border border-rule rounded-[2px] bg-paper px-4 py-3 text-base font-semibold text-ink focus:outline-none focus:border-ink transition-colors cursor-pointer"
              >
                <option value="gau-seva">Gau Seva (Cow Shelter)</option>
                <option value="food">Anna Daan (Food Distribution)</option>
                <option value="education">Vidya Daan (Education)</option>
                <option value="temple-repair">Mandir Seva (Temple Upkeep)</option>
                <option value="river">Nadi Seva (River Clean-up)</option>
                <option value="elderly">Vriddha Seva (Elder Care)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
            </div>
          </div>

          {/* 2. Amount */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold tracking-wide uppercase text-ink/80">Amount (₹)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[51, 101, 251, 501].map((amt) => (
                <button 
                  key={amt}
                  type="button" 
                  onClick={() => { setAmountType('preset'); setPresetAmount(amt); }}
                  className={`border rounded-[2px] bg-paper py-3 text-sm font-bold transition-colors ${
                    amountType === 'preset' && presetAmount === amt 
                    ? 'border-[2px] border-sindoor text-sindoor' 
                    : 'border-rule text-ink hover:border-ink'
                  }`}
                >
                  {amt}
                </button>
              ))}
              <div className="col-span-2 sm:col-span-4 relative mt-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/50 font-bold">₹</span>
                <input 
                  type="number" 
                  placeholder="Other amount" 
                  value={amountType === 'other' ? otherAmount : ''}
                  onChange={(e) => {
                    setAmountType('other');
                    setOtherAmount(e.target.value);
                  }}
                  min="50"
                  className={`w-full border rounded-[2px] bg-paper pl-8 pr-4 py-3 text-base font-bold transition-colors focus:outline-none ${
                    amountType === 'other' ? 'border-[2px] border-sindoor text-sindoor focus:border-sindoor' : 'border-rule text-ink placeholder:text-ink/30 hover:border-ink focus:border-ink'
                  }`} 
                />
              </div>
            </div>
          </div>

          {/* 3. Frequency */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold tracking-wide uppercase text-ink/80">Frequency</label>
            <div className="flex border border-sindoor rounded-[2px] p-1 bg-paper">
              <button 
                type="button" 
                onClick={() => setFrequency('once')}
                className={`flex-1 rounded-[2px] py-2.5 text-sm font-bold transition-colors ${
                  frequency === 'once' ? 'bg-sindoor text-white shadow-sm' : 'bg-transparent text-sindoor hover:bg-sindoor/10'
                }`}
              >
                Once
              </button>
              <button 
                type="button" 
                onClick={() => setFrequency('monthly')}
                className={`flex-1 rounded-[2px] py-2.5 text-sm font-bold transition-colors ${
                  frequency === 'monthly' ? 'bg-sindoor text-white shadow-sm' : 'bg-transparent text-sindoor hover:bg-sindoor/10'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* 4. Details */}
          <div className="flex flex-col gap-6 pt-4 border-t border-rule">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-ink">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="As it appears on your PAN" 
                required 
                className="w-full border border-rule rounded-[2px] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="text-sm font-bold text-ink">Phone or email</label>
              <input 
                type="text" 
                id="contact" 
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="For your receipt" 
                required 
                className="w-full border border-rule rounded-[2px] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sankalp" className="text-sm font-bold text-ink">Give in someone's name <span className="font-normal text-ink/60">(optional)</span></label>
              <input 
                type="text" 
                id="sankalp" 
                value={sankalp}
                onChange={(e) => setSankalp(e.target.value)}
                maxLength={60} 
                placeholder="e.g. In memory of Amma" 
                className="w-full border border-rule rounded-[2px] bg-paper px-4 py-3 text-base font-semibold focus:outline-none focus:border-ink transition-colors placeholder:font-normal" 
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-4 pt-4 border-t border-rule">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input 
                  type="checkbox" 
                  checked={requires80g}
                  onChange={(e) => setRequires80g(e.target.checked)}
                  className="peer appearance-none w-5 h-5 border border-rule rounded-[2px] bg-paper checked:bg-sindoor checked:border-sindoor transition-colors cursor-pointer" 
                />
                <Check size={14} strokeWidth={3} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm font-semibold text-ink group-hover:text-sindoor transition-colors">I want an 80G tax receipt</span>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5">
                <input 
                  type="checkbox" 
                  checked={coverFee}
                  onChange={(e) => setCoverFee(e.target.checked)}
                  className="peer appearance-none w-5 h-5 border border-rule rounded-[2px] bg-paper checked:bg-sindoor checked:border-sindoor transition-colors cursor-pointer" 
                />
                <Check size={14} strokeWidth={3} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm font-semibold text-ink group-hover:text-sindoor transition-colors">Cover the transaction fee (₹{(feeCoverPaise/100).toFixed(2)})</span>
            </label>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-5">
            <button 
              type="submit" 
              disabled={state.phase === 'pending' || !isRazorpayLoaded}
              className="w-full bg-sindoor text-white py-4 rounded-[2px] font-bold text-lg hover:opacity-90 active:translate-y-[1px] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:active:translate-y-0"
            >
              {state.phase === 'pending' ? 'Processing…' : `Give ₹${displayTotalRupees}`}
            </button>
            <div className="flex flex-col gap-2 text-center text-xs text-ink/60 font-semibold uppercase tracking-wider">
              {requires80g && <span>80G: AABCD1234E80G</span>}
              <span className="flex items-center justify-center gap-1.5"><FileText size={12}/> Receipt via WhatsApp</span>
            </div>
          </div>
        </form>
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
