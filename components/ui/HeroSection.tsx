'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideImage = {
  src: string;
  alt: string;
  caption: string;
};

const amounts = [
  { value: 51,  label: '₹51',  sub: 'feeds a cow, one day' },
  { value: 101, label: '₹101', sub: 'keeps a pujari fed' },
  { value: 251, label: '₹251', sub: 'cleans a ghat' },
];

const slides: SlideImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1677128912094-36d988ce198b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    alt: 'Anna Daan bhandara',
    caption: 'Anna Daan bhandara. Varanasi. 19 Sep 2026.',
  },
  {
    src: 'https://images.pexels.com/photos/38937794/pexels-photo-38937794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gau Seva gaushala',
    caption: 'Gau Seva, gaushala. Mathura. 18 Sep 2026.',
  },
  {
    src: 'https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Vidya Daan village school',
    caption: 'Vidya Daan, village school. Varanasi. 17 Sep 2026.',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [amount, setAmount] = useState(101);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next, isPaused]);

  return (
    <section className="w-full bg-paper">
      {/* ─── MOBILE LAYOUT (< lg) ─────────────────────────────── */}
      <div className="lg:hidden flex flex-col">

        {/* Full-bleed carousel image — no padding, no radius */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: '56vw', minHeight: 220, maxHeight: 380 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Caption bar — bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-ink/70 px-4 py-2">
            <p className="text-white text-[11px] font-medium font-body">
              {slides[current].caption}
            </p>
          </div>

          {/* Slide nav dots */}
          <div className="absolute top-3 right-3 flex gap-1.5 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="px-5 pt-6 pb-8 border-b border-rule">
          <h1 className="font-heading font-bold text-ink leading-tight mb-3 text-[1.75rem]">
            ₹3,86,000 deployed last week.
            <br />
            Every rupee named.
          </h1>
          <p className="text-ink/70 text-sm font-body leading-relaxed mb-6">
            We publish where every donation goes, every Sunday. No pooling. No vague reports.
          </p>

          {/* Amount chips — large, tap-friendly */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">Pick an amount</p>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {amounts.map((a) => (
              <button
                key={a.value}
                onClick={() => setAmount(a.value)}
                className={`flex flex-col items-center py-3 px-2 border rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sindoor ${
                  amount === a.value
                    ? 'border-sindoor bg-sindoor/5'
                    : 'border-rule bg-card hover:border-ink/40'
                }`}
              >
                <span className={`text-base font-bold leading-none font-body ${amount === a.value ? 'text-sindoor' : 'text-ink'}`}>
                  {a.label}
                </span>
                <span className="text-[9px] text-ink/40 mt-1 font-body text-center leading-snug">
                  {a.sub}
                </span>
              </button>
            ))}
          </div>

          {/* Full-width CTA */}
          <Link
            href={`/give?amount=${amount}`}
            className="block w-full text-center bg-sindoor text-white font-bold text-base py-4 rounded-[2px] hover:opacity-90 active:translate-y-[1px] transition-all"
          >
            Give ₹{amount}
          </Link>
          <p className="text-center text-[10px] text-ink/40 font-body mt-2">Any amount accepted · Receipt via WhatsApp</p>
        </div>

        {/* Ledger strip — BELOW the CTA on mobile */}
        <div className="px-5 py-5 bg-card border-b border-rule">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">Khata · Week 38</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-[11px] text-ink/50 font-body mb-0.5">Received</p>
              <p className="text-sm font-bold text-ink font-mono">₹4,18,210</p>
            </div>
            <div className="border-x border-rule">
              <p className="text-[11px] text-ink/50 font-body mb-0.5">Deployed</p>
              <p className="text-sm font-bold text-sindoor font-mono">₹3,86,000</p>
            </div>
            <div>
              <p className="text-[11px] text-ink/50 font-body mb-0.5">In hand</p>
              <p className="text-sm font-bold text-ink font-mono">₹32,210</p>
            </div>
          </div>
          <Link href="/khata" className="block text-center text-[11px] font-bold text-sindoor mt-3 hover:underline">
            View full Khata
          </Link>
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT (lg+) ─────────────────────────────── */}
      <div className="hidden lg:flex w-full max-w-[1400px] mx-auto" style={{ minHeight: 560 }}>

        {/* Left: editorial panel */}
        <div className="relative w-[42%] flex flex-col justify-between p-12 xl:p-16 border-r border-rule">
          {/* Sindoor accent bar */}
          <div className="absolute top-0 left-0 w-[3px] h-full bg-sindoor" />

          <div>
            <h1 className="font-heading font-bold text-ink leading-[1.1] mb-4 text-4xl xl:text-5xl">
              ₹3,86,000 deployed
              <br />last week.
              <br /><span className="text-sindoor">Every rupee named.</span>
            </h1>
            <p className="text-ink/70 text-base font-body leading-relaxed mb-8 max-w-[38ch]">
              We publish a full account of what came in and what was spent, every Sunday. Pick a seva. We show you where it lands.
            </p>

            {/* Amount selector */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">Pick an amount</p>
            <div className="flex gap-3 mb-6">
              {amounts.map((a) => (
                <button
                  key={a.value}
                  onClick={() => setAmount(a.value)}
                  className={`flex flex-col items-center py-3 px-5 border rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sindoor ${
                    amount === a.value
                      ? 'border-sindoor bg-sindoor/5'
                      : 'border-rule bg-card hover:border-ink/40'
                  }`}
                >
                  <span className={`text-lg font-bold leading-none font-body ${amount === a.value ? 'text-sindoor' : 'text-ink'}`}>
                    {a.label}
                  </span>
                  <span className="text-[10px] text-ink/40 mt-1 font-body">
                    {a.sub}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={`/give?amount=${amount}`}
                className="bg-sindoor text-white font-bold text-base px-8 py-3.5 rounded-[2px] hover:opacity-90 active:translate-y-[1px] transition-all"
              >
                Give ₹{amount}
              </Link>
              <span className="text-xs text-ink/40 font-body">Any amount · Receipt via WhatsApp</span>
            </div>
          </div>

          {/* Ledger strip at bottom of panel */}
          <div className="mt-10 pt-6 border-t border-rule">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-4">Khata · Week 38 · 14–20 Sep 2026</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-ink/50 font-body mb-1">Received</p>
                <p className="text-base font-bold text-ink font-mono">₹4,18,210</p>
              </div>
              <div>
                <p className="text-xs text-ink/50 font-body mb-1">Deployed</p>
                <p className="text-base font-bold text-sindoor font-mono">₹3,86,000</p>
              </div>
              <div>
                <p className="text-xs text-ink/50 font-body mb-1">In hand</p>
                <p className="text-base font-bold text-ink font-mono">₹32,210</p>
              </div>
            </div>
            <Link href="/khata" className="inline-block text-[11px] font-bold text-sindoor mt-3 hover:underline">
              Full Khata
            </Link>
          </div>
        </div>

        {/* Right: full-bleed carousel */}
        <div
          className="relative flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Caption bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-ink/70 px-6 py-3 flex items-center justify-between">
            <p className="text-white text-xs font-body font-medium">
              {slides[current].caption}
            </p>
            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-7 h-7 flex items-center justify-center border border-white/30 text-white hover:bg-white/20 transition-colors rounded-[2px]"
                aria-label="Previous photo"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                className="w-7 h-7 flex items-center justify-center border border-white/30 text-white hover:bg-white/20 transition-colors rounded-[2px]"
                aria-label="Next photo"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Slide dots */}
          <div className="absolute top-4 right-4 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
