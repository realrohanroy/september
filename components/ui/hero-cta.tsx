'use client';

import { useState } from 'react';
import Link from 'next/link';

const amounts = [
  { value: 51,  label: '₹51',  sublabel: 'feeds a cow, one day' },
  { value: 101, label: '₹101', sublabel: 'keeps a pujari fed' },
  { value: 251, label: '₹251', sublabel: 'cleans a ghat' },
];

export default function HeroCTA() {
  const [selected, setSelected] = useState(101);

  return (
    <div>
      {/* Amount chips */}
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
        Pick an amount
      </p>
      <div className="flex gap-2 mb-5 flex-wrap">
        {amounts.map((a) => (
          <button
            key={a.value}
            onClick={() => setSelected(a.value)}
            className={`flex flex-col items-center rounded-xl px-4 py-2.5 border-2 text-left transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
              selected === a.value
                ? 'border-sindoor bg-sindoor/5 shadow-sm'
                : 'border-gray-200 bg-white hover:border-gray-400'
            }`}
          >
            <span className={`text-base font-bold leading-none ${selected === a.value ? 'text-sindoor' : 'text-gray-800'}`}>
              {a.label}
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5 font-medium">
              {a.sublabel}
            </span>
          </button>
        ))}
      </div>

      {/* Primary CTA */}
      <div className="flex items-center gap-4">
        <Link
          href={`/give?amount=${selected}`}
          className="inline-block bg-sindoor text-white rounded-full px-8 py-3.5 font-bold hover:opacity-90 transition-colors shadow-md shadow-sindoor/30 active:scale-[0.98]"
        >
          Give ₹{selected}
        </Link>
        <span className="text-xs text-gray-400">Any amount accepted</span>
      </div>
    </div>
  );
}
