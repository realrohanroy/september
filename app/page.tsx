import Link from 'next/link';
import { Menu, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Top bar / announcement strip */}
      <div className="w-full bg-[var(--haldi)] text-[var(--paper)] py-2 px-5 flex flex-col sm:flex-row justify-center items-center gap-4 text-small">
        <div className="font-semibold">Week 38 Ledger Published</div>
        <div className="hidden sm:block">·</div>
        <div>Received: ₹4,18,210</div>
        <Link href="/khata" className="font-semibold underline underline-offset-2 hover:text-[var(--sindoor)] transition-colors">
          Open the full book
        </Link>
      </div>

      {/* 2. Global navigation bar */}
      <nav className="w-full bg-[var(--paper)] shadow-line sticky top-0 z-[var(--z-sticky)] px-5">
        <div className="max-w-[1200px] mx-auto h-14 flex items-center justify-between">
          <Link href="/" className="text-h3 text-[var(--ink)] border-b border-[var(--ink)] pb-[1px] leading-none">
            september
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-body">
            <Link href="/causes" className="hover:text-[var(--ink-60)] transition-colors">Causes</Link>
            <Link href="/khata" className="hover:text-[var(--ink-60)] transition-colors">The Khata</Link>
            <Link href="/field-notes" className="hover:text-[var(--ink-60)] transition-colors">Field notes</Link>
            <Link href="/who" className="hover:text-[var(--ink-60)] transition-colors">Who</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/give" className="bg-[var(--sindoor)] text-[var(--paper)] px-4 py-2 rounded-[var(--radius-control)] font-semibold text-small transition-colors hover:bg-opacity-90">
              Give
            </Link>
            <button className="md:hidden">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero = this week's ledger line */}
      <section className="w-full px-5 py-[var(--spacing-3u)] sm:py-[var(--spacing-5u)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col">
            <h1 className="text-display text-[var(--ink)] mb-6">
              We publish our book. <br/>
              <span className="text-[var(--ink-60)]">Every rupee in, every rupee out, updated every Sunday.</span>
            </h1>

            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-6 mt-4 relative z-[var(--z-content)]">
              <div className="flex justify-between items-center border-b border-[var(--rule)] pb-4 mb-4">
                <div className="text-h3">Week 38 <span className="text-[var(--ink-60)] font-normal text-body">· 14–20 Sep 2026</span></div>
                <Link href="/give" className="bg-[var(--sindoor)] text-[var(--paper)] px-4 py-2 rounded-[var(--radius-control)] font-semibold text-small">
                  Give
                </Link>
              </div>
              
              <div className="flex flex-col gap-3 text-body font-medium">
                <div className="flex justify-between">
                  <span>Received</span>
                  <span className="text-num">₹ 4,18,210</span>
                </div>
                <div className="flex justify-between text-[var(--sindoor)]">
                  <span>Deployed</span>
                  <span className="text-num">₹ 3,86,000</span>
                </div>
                <div className="flex justify-between text-[var(--haldi)]">
                  <span>Not yet deployed</span>
                  <span className="text-num">₹ 32,210</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--rule)]">
                <Link href="/khata" className="text-body font-semibold underline underline-offset-2 hover:text-[var(--ink-60)] transition-colors">
                  Open the full book
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative z-[var(--z-content)]">
            <div className="w-full aspect-[3/2] border border-[var(--rule)] bg-[var(--rule)] overflow-hidden rounded-none">
              <img src="https://images.unsplash.com/photo-1593113560732-a81d1136b8e3?q=80&w=1200&auto=format&fit=crop" alt="Sabarmati kitchen" className="object-cover w-full h-full" />
            </div>
            <p className="text-small text-[var(--ink-60)]">Sabarmati kitchen, Ahmedabad. 19 Sep 2026.</p>
          </div>
        </div>
      </section>

      {/* 4. The gap */}
      <section className="w-full px-5 py-[var(--spacing-3u)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 mb-[var(--spacing-1u)]">The gap</h2>
          <div className="flex flex-col gap-[var(--spacing-1u)]">
            {/* Gap Item 1 */}
            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between relative z-[var(--z-content)]">
              <div className="flex-1 w-full">
                <div className="text-body font-medium mb-2">Kitchen, Sabarmati <span className="text-[var(--ink-60)] font-normal">· needs ₹38,000 this month · ₹22,400 in</span></div>
                <div className="w-full h-1 bg-[var(--rule)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--ink)] rounded-full" style={{ width: '58.9%' }}></div>
                </div>
              </div>
              <Link href="/give?cause=food&amount=1000" className="whitespace-nowrap border border-[var(--rule)] px-4 py-2 rounded-[var(--radius-control)] font-medium text-small hover:bg-[var(--rule)] transition-colors">
                Cover part of this
              </Link>
            </div>
            
            {/* Gap Item 2 */}
            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between relative z-[var(--z-content)]">
              <div className="flex-1 w-full">
                <div className="text-body font-medium mb-2">Goshala, Dholka <span className="text-[var(--ink-60)] font-normal">· needs ₹18,000 this week · ₹4,100 in</span></div>
                <div className="w-full h-1 bg-[var(--rule)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--ink)] rounded-full" style={{ width: '22.7%' }}></div>
                </div>
              </div>
              <Link href="/give?cause=gau-seva&amount=501" className="whitespace-nowrap border border-[var(--rule)] px-4 py-2 rounded-[var(--radius-control)] font-medium text-small hover:bg-[var(--rule)] transition-colors">
                Cover part of this
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Explore causes (Priced in units) */}
      <section className="w-full px-5 py-[var(--spacing-3u)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 mb-[var(--spacing-1u)]">Causes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-1u)]">
            {/* Cause: Gau Seva */}
            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-6 relative z-[var(--z-content)] flex flex-col">
              <h3 className="text-h3 border-b border-[var(--rule)] pb-3 mb-4">Gau seva</h3>
              <div className="flex flex-col gap-3 text-body mb-6 flex-1">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 51</span>
                  <span className="text-[var(--ink-60)] text-right">one cow, one day</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 351</span>
                  <span className="text-[var(--ink-60)] text-right">one cow, one week</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 1,500</span>
                  <span className="text-[var(--ink-60)] text-right">one cow, one month</span>
                </div>
              </div>
              <Link href="/give?cause=gau-seva&amount=351" className="bg-[var(--sindoor)] text-[var(--paper)] text-center px-4 py-3 rounded-[var(--radius-control)] font-semibold text-small">
                Give ₹ 351
              </Link>
            </div>

            {/* Cause: Food */}
            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-6 relative z-[var(--z-content)] flex flex-col">
              <h3 className="text-h3 border-b border-[var(--rule)] pb-3 mb-4">Food</h3>
              <div className="flex flex-col gap-3 text-body mb-6 flex-1">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 35</span>
                  <span className="text-[var(--ink-60)] text-right">one plate</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 850</span>
                  <span className="text-[var(--ink-60)] text-right">one family's ration, one week</span>
                </div>
              </div>
              <Link href="/give?cause=food&amount=850" className="bg-[var(--sindoor)] text-[var(--paper)] text-center px-4 py-3 rounded-[var(--radius-control)] font-semibold text-small">
                Give ₹ 850
              </Link>
            </div>

            {/* Cause: Education */}
            <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-card)] p-6 relative z-[var(--z-content)] flex flex-col">
              <h3 className="text-h3 border-b border-[var(--rule)] pb-3 mb-4">Education</h3>
              <div className="flex flex-col gap-3 text-body mb-6 flex-1">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 1,100</span>
                  <span className="text-[var(--ink-60)] text-right">one child's books, one year</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-num font-medium">₹ 6,500</span>
                  <span className="text-[var(--ink-60)] text-right">one month of a teacher's honorarium</span>
                </div>
              </div>
              <Link href="/give?cause=education&amount=1100" className="bg-[var(--sindoor)] text-[var(--paper)] text-center px-4 py-3 rounded-[var(--radius-control)] font-semibold text-small">
                Give ₹ 1,100
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Follow the rupee */}
      <section className="w-full px-5 py-[var(--spacing-3u)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 mb-[var(--spacing-1u)]">Follow the rupee</h2>
          <p className="text-body text-[var(--ink-60)] mb-6">₹100 given breaks down honestly.</p>
          
          <div className="w-full flex h-8 border border-[var(--rule)] rounded-[var(--radius-control)] overflow-hidden bg-[var(--paper)] mb-4">
            <div className="bg-[var(--haldi)] h-full border-r border-[var(--rule)]" style={{ width: '2.1%' }} title="₹2.10 payment gateway"></div>
            <div className="bg-[var(--ink-40)] h-full border-r border-[var(--rule)]" style={{ width: '6%' }} title="₹6 operations"></div>
            <div className="bg-[var(--sindoor)] h-full" style={{ width: '91.9%' }} title="₹91.90 to the ground"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-small font-num text-[var(--ink)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--haldi)] rounded-sm border border-[var(--rule)]"></div>
              <span>₹2.10 payment gateway</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--ink-40)] rounded-sm border border-[var(--rule)]"></div>
              <span>₹6 operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--sindoor)] rounded-sm border border-[var(--rule)]"></div>
              <span>₹91.90 to the ground</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Your date */}
      <section className="w-full px-5 py-[var(--spacing-4u)] bg-[var(--haldi)] text-[var(--paper)] mt-[var(--spacing-2u)] relative z-[var(--z-content)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-2u)] items-center">
          <div>
            <h2 className="text-h1 mb-4 text-[var(--paper)]">Your date</h2>
            <p className="text-body mb-8 text-[var(--paper)] opacity-90">
              Pick a day of the month that means something to you — a birthday, a tithi, an anniversary. Every month on that date, we'll send you a WhatsApp message acknowledging your reason, and then debit your chosen amount.
            </p>
            <Link href="/your-date" className="bg-[var(--paper)] text-[var(--haldi)] px-6 py-3 rounded-[var(--radius-control)] font-semibold text-body inline-flex items-center hover:bg-opacity-90 transition-colors">
              Pick your date
            </Link>
          </div>
          
          <div className="bg-[var(--paper)] rounded-[var(--radius-card)] p-6 text-[var(--ink)] shadow-line">
            <div className="text-h3 mb-4 border-b border-[var(--rule)] pb-4">Set your monthly mandate</div>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {Array.from({length: 31}, (_, i) => (
                <div key={i} className={`aspect-square flex items-center justify-center text-small font-medium rounded-sm ${i === 10 ? 'bg-[var(--sindoor)] text-[var(--paper)]' : 'bg-[var(--paper)] text-[var(--ink-60)] hover:bg-[var(--rule)] cursor-pointer border border-[var(--rule)] border-opacity-30'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-small border-t border-[var(--rule)] pt-4">
              <span className="font-medium">Selected: 11th of every month</span>
              <span className="text-[var(--ink-60)]">Cancel anytime via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. The Khata / Transparency Ledger */}
      <section className="w-full px-5 py-[var(--spacing-4u)] bg-[var(--ink)] text-[var(--paper)] relative z-[var(--z-content)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[var(--spacing-2u)] gap-6">
            <div>
              <h2 className="text-h1 mb-2 text-[var(--paper)]">The Khata</h2>
              <p className="text-body text-[var(--paper)] opacity-70">The bound book of accounts. Checked and published every Sunday.</p>
            </div>
            <div className="text-right">
              <div className="text-num text-h2 mb-1">₹ 1,42,85,100</div>
              <div className="text-small text-[var(--paper)] opacity-70">Lifetime deployed</div>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <caption className="sr-only">Ledger entries for the recent week, detailing received and deployed amounts by cause.</caption>
              <thead>
                <tr className="border-b border-[var(--rule)] border-opacity-30">
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70 w-24">Week</th>
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70 w-32">Dates</th>
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70">Cause</th>
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70 text-right">Received</th>
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70 text-right text-[var(--sindoor)]">Deployed</th>
                  <th scope="col" className="py-3 px-4 text-small font-medium opacity-70">Where</th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-[var(--rule)] border-opacity-20 hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-4 px-4 font-medium">38</td>
                  <td className="py-4 px-4">14–20 Sep</td>
                  <td className="py-4 px-4">Food</td>
                  <td className="py-4 px-4 text-right font-num">1,12,400</td>
                  <td className="py-4 px-4 text-right font-num text-[var(--sindoor)]">1,04,000</td>
                  <td className="py-4 px-4 text-[var(--paper)] opacity-90">Sabarmati kitchen</td>
                </tr>
                <tr className="border-b border-[var(--rule)] border-opacity-20 hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-4 px-4 font-medium">38</td>
                  <td className="py-4 px-4">14–20 Sep</td>
                  <td className="py-4 px-4">Gau seva</td>
                  <td className="py-4 px-4 text-right font-num">86,200</td>
                  <td className="py-4 px-4 text-right font-num text-[var(--sindoor)]">86,200</td>
                  <td className="py-4 px-4 text-[var(--paper)] opacity-90">Goshala, Dholka</td>
                </tr>
                <tr className="border-b border-[var(--rule)] border-opacity-20 hover:bg-white/5 transition-colors cursor-pointer text-[var(--haldi)]">
                  <td className="py-4 px-4 font-medium text-[var(--paper)]">38</td>
                  <td className="py-4 px-4 text-[var(--paper)]">14–20 Sep</td>
                  <td className="py-4 px-4">Unallocated</td>
                  <td className="py-4 px-4 text-right font-num">79,610</td>
                  <td className="py-4 px-4 text-right font-num text-[var(--paper)] opacity-50">0</td>
                  <td className="py-4 px-4">held</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <Link href="/khata" className="inline-flex items-center gap-2 text-small font-semibold border border-[var(--rule)] border-opacity-30 px-4 py-2 rounded-[var(--radius-control)] hover:bg-white/10 transition-colors">
              Open the full book
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Field notes */}
      <section className="w-full px-5 py-[var(--spacing-3u)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 mb-[var(--spacing-1u)]">Field notes</h2>
          
          <div className="flex flex-col border-t border-[var(--rule)] relative z-[var(--z-content)] bg-[var(--paper)]">
            <Link href="/field-notes/kitchen-supplies" className="py-5 border-b border-[var(--rule)] flex flex-col sm:flex-row justify-between sm:items-center hover:bg-[var(--card)] transition-colors group">
              <span className="text-h3 group-hover:text-[var(--sindoor)] transition-colors mb-1 sm:mb-0">New grain delivery at the kitchen</span>
              <span className="text-small text-[var(--ink-60)]">Sabarmati, Ahmedabad. 18 Sep 2026.</span>
            </Link>
            <Link href="/field-notes/goshala-shed" className="py-5 border-b border-[var(--rule)] flex flex-col sm:flex-row justify-between sm:items-center hover:bg-[var(--card)] transition-colors group">
              <span className="text-h3 group-hover:text-[var(--sindoor)] transition-colors mb-1 sm:mb-0">Roof repairs completed before rain</span>
              <span className="text-small text-[var(--ink-60)]">Dholka. 15 Sep 2026.</span>
            </Link>
            <Link href="/field-notes/school-books" className="py-5 border-b border-[var(--rule)] flex flex-col sm:flex-row justify-between sm:items-center hover:bg-[var(--card)] transition-colors group">
              <span className="text-h3 group-hover:text-[var(--sindoor)] transition-colors mb-1 sm:mb-0">Term books distributed to 45 students</span>
              <span className="text-small text-[var(--ink-60)]">Viramgam. 12 Sep 2026.</span>
            </Link>
          </div>
          
          <div className="mt-8 relative z-[var(--z-content)]">
            <Link href="/field-notes" className="text-body font-semibold underline underline-offset-2 hover:text-[var(--ink-60)] transition-colors">
              Read all notes
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Accountability block */}
      <section className="w-full px-5 py-[var(--spacing-3u)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 mb-[var(--spacing-1u)]">Who is accountable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-[var(--z-content)]">
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-[3/2] border border-[var(--rule)] bg-[var(--rule)] overflow-hidden rounded-none">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="The Trustees" className="object-cover w-full h-full grayscale opacity-90" />
              </div>
              <p className="text-small text-[var(--ink-60)]">Ramesh Patel, Sunita Desai, Vikram Shah. 12 Jan 2026.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <p className="text-body bg-[var(--paper)]">
                September is governed by a registered public charitable trust. The trustees named above are legally responsible for every rupee.
              </p>
              
              <div className="flex flex-col border border-[var(--rule)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--card)]">
                <Link href="/reports/trust-deed.pdf" className="px-5 py-4 border-b border-[var(--rule)] flex justify-between items-center hover:bg-[var(--rule)] transition-colors">
                  <span className="font-medium">Trust Deed</span>
                  <Download size={16} className="text-[var(--ink-60)]" />
                </Link>
                <Link href="/reports/audit-2025.pdf" className="px-5 py-4 border-b border-[var(--rule)] flex justify-between items-center hover:bg-[var(--rule)] transition-colors">
                  <span className="font-medium">Audited Statement (2025-26)</span>
                  <Download size={16} className="text-[var(--ink-60)]" />
                </Link>
                <div className="px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="font-medium">Direct Bank Transfer</span>
                  <span className="text-small font-num bg-[var(--paper)] px-2 py-1 border border-[var(--rule)] rounded-[var(--radius-control)]">A/C 50200012345678 · HDFC0001234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="w-full px-5 py-[var(--spacing-3u)] bg-[var(--paper)] border-t border-[var(--rule)] mt-[var(--spacing-2u)] relative z-[var(--z-content)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Compliance block */}
          <div className="md:col-span-2 flex flex-col gap-4 text-small text-[var(--ink)]">
            <Link href="/" className="text-h3 border-b border-[var(--ink)] pb-[1px] w-max leading-none mb-2">
              september
            </Link>
            <p>September Charitable Trust</p>
            <p className="opacity-80">
              Reg. No: E/12345/Ahmedabad <br/>
              12A: AABCD1234E12A <br/>
              80G: AABCD1234E80G <br/>
              CSR-1: CSR12345678 <br/>
              Darpan ID: GJ/2026/123456 <br/>
              PAN: AABCD1234E
            </p>
            <p className="opacity-80 mt-2">
              401, Sapphire Towers, <br/>
              Navrangpura, Ahmedabad 380009 <br/>
              +91 79 2640 1234
            </p>
            <p className="opacity-80 mt-2">
              Grievance Officer: Sunita Desai <br/>
              grievance@september.org
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-small">
            <h4 className="font-bold mb-2 text-body">Links</h4>
            <Link href="/causes" className="hover:underline underline-offset-2">Causes</Link>
            <Link href="/khata" className="hover:underline underline-offset-2">The Khata</Link>
            <Link href="/your-date" className="hover:underline underline-offset-2">Monthly giving</Link>
            <Link href="/field-notes" className="hover:underline underline-offset-2">Field notes</Link>
            <Link href="/who" className="hover:underline underline-offset-2">Who is accountable</Link>
            <Link href="/reports" className="hover:underline underline-offset-2">Annual reports</Link>
          </div>
          
          <div className="flex flex-col gap-3 text-small">
            <h4 className="font-bold mb-2 text-body">Legal</h4>
            <Link href="/legal/refund" className="hover:underline underline-offset-2">Refund policy</Link>
            <Link href="/legal/privacy" className="hover:underline underline-offset-2">Privacy policy</Link>
            <Link href="/legal/terms" className="hover:underline underline-offset-2">Terms of service</Link>
            <Link href="/contact" className="hover:underline underline-offset-2">Contact us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
