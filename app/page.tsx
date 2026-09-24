import Link from 'next/link';
import { Menu, Search, Heart, User, ArrowRight, CheckCircle2, ShieldCheck, FileText, Building2, Smartphone, Building } from 'lucide-react';
import ImageCarousel from '@/components/ui/image-carousel';
import HeroCTA from '@/components/ui/hero-cta';

export default function Home() {
  const causes = [
    {
      id: "nadi",
      title: "Nadi Seva",
      sanskrit: "नदी सेवा",
      blurb: "Ghat clean-ups, waste interception nets, and river-bank restoration on the sacred rivers of India.",
      image: "https://images.unsplash.com/photo-1779518079988-882219cd24db?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
      unitInr: 251,
      unitLabel: "one day of ghat cleaning",
    },
    {
      id: "mandir",
      title: "Mandir Seva",
      sanskrit: "मन्दिर सेवा",
      blurb: "Restoring neglected village temples and sustaining the pujaris, musicians, and cooks who keep them alive.",
      image: "https://images.unsplash.com/photo-1665003725647-3ae0f01140b1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
      unitInr: 1100,
      unitLabel: "one month of temple upkeep",
    },
    {
      id: "gau",
      title: "Gau Seva",
      sanskrit: "गौ सेवा",
      blurb: "Green fodder, veterinary care, and shelter for abandoned and injured cows in partner gaushalas.",
      image: "https://images.pexels.com/photos/38937794/pexels-photo-38937794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      unitInr: 51,
      unitLabel: "one cow, one day",
    },
    {
      id: "anna",
      title: "Anna Daan",
      sanskrit: "अन्न दान",
      blurb: "Hot, freshly cooked sattvik meals served every day at ghats, hospitals, and temple courtyards.",
      image: "https://images.unsplash.com/photo-1677128912094-36d988ce198b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
      unitInr: 501,
      unitLabel: "one bhandara, serves 50",
    },
    {
      id: "vidya",
      title: "Vidya Daan",
      sanskrit: "विद्या दान",
      blurb: "Books, slates, uniforms, and after-school teachers for children in riverside and temple-town schools.",
      image: "https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      unitInr: 351,
      unitLabel: "one child's books, one term",
    },
    {
      id: "vriddha",
      title: "Vriddha Seva",
      sanskrit: "वृद्ध सेवा",
      blurb: "Medicines, spectacles, and monthly ration for elders living alone in pilgrimage towns.",
      image: "https://images.pexels.com/photos/14225230/pexels-photo-14225230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      unitInr: 751,
      unitLabel: "one elder's monthly ration",
    },
  ];

  return (
    <main className="flex flex-col w-full bg-paper min-h-screen font-sans">
      

      {/* Hero Carousel Area */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row rounded-none overflow-hidden  bg-card">
          <div className="w-full lg:w-[45%] bg-gradient-to-br from-orange-50 to-orange-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-sindoor"></div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-ink leading-tight mb-4">
              Give once. <br/><span className="text-sindoor">See it reach.</span>
            </h1>
            <p className="text-ink/80 text-lg md:text-xl font-medium mb-8 max-w-md">
              ₹51 feeds a cow for a day. ₹251 cleans a ghat. We publish every rupee in the Khata, every Sunday.
            </p>
            <div className="bg-card rounded-none p-6 shadow-[0_1px_0_var(--rule)] border border-sindoor/20 mb-6">
              <h3 className="font-heading font-bold text-ink mb-4 text-lg">Week 38 Ledger (14–20 Sep 2026)</h3>
              <div className="space-y-2 text-sm font-medium">
                <div className="flex justify-between"><span className="text-ink/70">Received</span><span className="text-ink">₹ 4,18,210</span></div>
                <div className="flex justify-between"><span className="text-ink/70">Deployed</span><span className="text-sindoor font-bold">₹ 3,86,000</span></div>
                <div className="flex justify-between pt-2 border-t border-rule"><span className="text-ink/70">Not yet deployed</span><span className="text-sindoor">₹ 32,210</span></div>
              </div>
            </div>
            <HeroCTA />
          </div>
          <div className="w-full lg:w-[55%] lg:min-h-[500px]">
            <ImageCarousel images={[
              { src: 'https://images.unsplash.com/photo-1677128912094-36d988ce198b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', alt: 'Anna Daan', caption: 'Anna Daan bhandara. 19 Sep 2026.' },
              { src: 'https://images.pexels.com/photos/38937794/pexels-photo-38937794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Gau Seva', caption: 'Gau Seva, gaushala. 18 Sep 2026.' },
              { src: 'https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Vidya Daan', caption: 'Vidya Daan, village school. 17 Sep 2026.' }
            ]} />
          </div>
        </div>
      </section>

      {/* Sevas Section */}
      <section className="w-full bg-card py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="inline-block rounded-full border border-rule px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-ink/60 mb-4">
                Six causes. Six open ledgers.
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink leading-tight">
                Pick a seva.<br/>See where it lands.
              </h2>
            </div>
            <p className="text-ink/60 text-base max-w-sm leading-relaxed">
              Every seva has its own account. A gift to Gau Seva can never be spent on anything else — no pooling, no internal transfers.
            </p>
          </div>

          {/* "Where needed most" featured card */}
          <div className="p-1.5 rounded-none] bg-ink ring-1 ring-black/10 mb-8">
            <div className="rounded-none(2rem-0.375rem)] bg-ink overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[260px] max-h-[1000px]">
                <div className="w-full md:w-[50%] relative overflow-hidden min-h-[240px] md:min-h-0">
                  <img
                    src={causes[3].image}
                    alt="Where needed most"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 hidden md:block pointer-events-none" />
                </div>
                <div className="w-full md:w-[50%] p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block rounded-full bg-sindoor/20 border border-sindoor/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-sindoor mb-6 w-max">
                    Most urgent right now
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-paper mb-3">
                    Give where it is needed most
                  </h3>
                  <p className="text-ink/50 text-sm leading-relaxed mb-8">
                    Not sure which seva to pick? Give to the fund. We deploy it to the cause with the largest shortfall that week, publish the allocation in The Khata, and send you a receipt.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/give?cause=urgent"
                      className="group inline-flex items-center gap-2 bg-sindoor text-paper rounded-full px-7 py-3 text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 active:scale-[0.98]"
                    >
                      Give to the urgent fund
                    </Link>
                    <span className="text-ink/60 text-xs">Any amount from ₹51</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Six causa cards — asymmetric bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="p-1.5 rounded-none.5rem] bg-paper ring-1 ring-black/5 group transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
              >
                <div className="rounded-none(1.5rem-0.375rem)] bg-card overflow-hidden flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                  {/* Image */}
                  <div className="h-[200px] relative overflow-hidden">
                    <img
                      src={cause.image}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      alt={cause.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-paper/60 text-[11px] font-medium tracking-wide">{cause.sanskrit}</p>
                      <p className="text-paper font-heading font-bold text-lg leading-tight">{cause.title}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-ink/90 backdrop-blur-sm text-paper text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        80G
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-ink/70 leading-relaxed mb-5 flex-1">{cause.blurb}</p>

                    <div className="border-t border-rule pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-ink/50 uppercase tracking-wider">{cause.unitLabel}</p>
                        <p className="text-xl font-heading font-bold text-ink">₹{cause.unitInr}</p>
                      </div>
                      <Link
                        href={`/give?cause=${cause.id}`}
                        className="group/btn inline-flex items-center justify-center gap-2 bg-sindoor text-paper rounded-full px-5 py-2 text-sm font-bold  shadow-sindoor/30 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 active:scale-[0.98]"
                      >
                        Give ₹{cause.unitInr}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Your Date (Donate Monthly style) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="text-center mb-10">
          <p className="text-ink/60 font-medium text-sm tracking-wide uppercase mb-2">Give on a day that matters</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Your date, every month</h2>
          <p className="text-ink/70 max-w-2xl mx-auto mt-4">Pick a birthday, anniversary, or punya tithi. We send a WhatsApp reminder, debit your chosen amount, and publish the receipt in that week's Khata.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {title: "In Memory", sub: "Honor a departed loved one every month on their punya tithi."},
            {title: "Birthdays", sub: "Celebrate the gift of life by giving back on a birthday."},
            {title: "Festival Giving", sub: "Commit to monthly support on a day of religious significance."}
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-none shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-rule overflow-hidden flex flex-col">
              <div className="h-[180px] relative bg-paper overflow-hidden">
                <img src={i === 0 ? causes[0].image : i === 1 ? causes[4].image : causes[2].image} className="w-full h-full object-cover opacity-80" alt={item.title} />
              </div>
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="font-heading font-bold text-ink text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-ink/60 mb-6">{item.sub}</p>
                <div className="w-full border-t border-rule pt-5 mt-auto flex justify-between items-center">
                  <div className="text-left">
                    <p className="text-xs text-ink/60">Starts from</p>
                    <p className="font-bold text-sindoor text-lg">₹500<span className="text-xs font-normal text-ink/60">/monthly</span></p>
                  </div>
                  <Link href="/your-date" className="bg-sindoor text-paper rounded-full px-5 py-2 text-sm font-bold  shadow-secondary/30 hover:bg-sindoor-hover transition-colors">
                    Set my date
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Gap (Medical Emergencies style) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16 bg-paper">
        <div className="text-center mb-10">
          <p className="text-ink/60 font-medium text-sm tracking-wide uppercase mb-2">Needs that are short right now</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Close the gap this week</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gap Card 1 */}
          <div className="bg-card rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-rule overflow-hidden flex flex-col sm:flex-row group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto relative">
              <img src={causes[3].image} className="w-full h-full object-cover" alt="Kitchen" />
              <div className="absolute top-0 left-0 bg-sindoor text-paper text-[10px] font-bold px-3 py-1 rounded-none-lg uppercase tracking-wider">
                Urgent Shortfall
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 w-full sm:w-[60%]">
              <h3 className="font-heading font-bold text-ink text-lg mb-2">Anna Daan needs support this month</h3>
              <p className="text-xs text-ink/60 flex items-center gap-1 mb-4">Daily bhandara · shortfall this week</p>
              
              <div className="mt-auto w-full">
                <div className="w-full h-1.5 bg-rule rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-sindoor rounded-full" style={{ width: '58.9%' }}></div>
                </div>
                <div className="flex justify-between items-center text-xs font-medium">
                  <div className="flex flex-col"><span className="text-ink font-bold">₹22,400</span><span className="text-ink/60">Received</span></div>
                  <div className="flex flex-col text-right"><span className="text-sindoor font-bold">₹38,000</span><span className="text-ink/60">Needed</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gap Card 2 */}
          <div className="bg-card rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-rule overflow-hidden flex flex-col sm:flex-row group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto relative">
              <img src={causes[2].image} className="w-full h-full object-cover" alt="Goshala" />
              <div className="absolute top-0 left-0 bg-sindoor text-paper text-[10px] font-bold px-3 py-1 rounded-none-lg uppercase tracking-wider">
                Urgent Shortfall
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 w-full sm:w-[60%]">
              <h3 className="font-heading font-bold text-ink text-lg mb-2">Gau Seva gaushala is short this week</h3>
              <p className="text-xs text-ink/60 flex items-center gap-1 mb-4">Gaushala feed & care · veterinary shortfall</p>
              
              <div className="mt-auto w-full">
                <div className="w-full h-1.5 bg-rule rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-sindoor rounded-full" style={{ width: '22.7%' }}></div>
                </div>
                <div className="flex justify-between items-center text-xs font-medium">
                  <div className="flex flex-col"><span className="text-ink font-bold">₹4,100</span><span className="text-ink/60">Received</span></div>
                  <div className="flex flex-col text-right"><span className="text-sindoor font-bold">₹18,000</span><span className="text-ink/60">Needed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Khata (Most Trusted Platform blue section) */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[45%] text-paper text-center lg:text-left">
            <p className="text-paper/60 font-medium text-sm tracking-wide uppercase mb-3">Open ledger, published every Sunday</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">The Khata</h2>
            <p className="text-paper/80 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Every rupee received, every rupee deployed, and where it went. Verified by a chartered firm. Check it yourself.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="bg-card/10 backdrop-blur-md border border-paper/20 rounded-none p-4 text-center">
                <p className="text-2xl font-bold text-paper">₹ 1.42 Cr+</p>
                <p className="text-xs text-paper/60 uppercase tracking-wider mt-1">Lifetime Deployed</p>
              </div>
              <div className="bg-card/10 backdrop-blur-md border border-paper/20 rounded-none p-4 text-center">
                <p className="text-2xl font-bold text-paper">100%</p>
                <p className="text-xs text-paper/60 uppercase tracking-wider mt-1">Transparent</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <div className="bg-card rounded-none  overflow-hidden p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading font-bold text-ink text-xl">Recent Ledger Entries</h3>
                <Link href="/khata" className="text-sm font-semibold text-sindoor hover:underline">Open the full Khata</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-paper border-b border-rule">
                      <th className="py-3 px-4 font-semibold text-ink/80 rounded-none-lg">Cause</th>
                      <th className="py-3 px-4 font-semibold text-ink/80 text-right">Received</th>
                      <th className="py-3 px-4 font-semibold text-ink/80 text-right text-sindoor">Deployed</th>
                      <th className="py-3 px-4 font-semibold text-ink/80 rounded-none-lg">Where</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-rule hover:bg-paper/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-ink">Food</td>
                      <td className="py-4 px-4 text-right font-medium">₹1,12,400</td>
                      <td className="py-4 px-4 text-right font-bold text-sindoor">₹1,04,000</td>
                      <td className="py-4 px-4 text-ink/70 text-xs">Sabarmati kitchen</td>
                    </tr>
                    <tr className="border-b border-rule hover:bg-paper/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-ink">Gau seva</td>
                      <td className="py-4 px-4 text-right font-medium">₹86,200</td>
                      <td className="py-4 px-4 text-right font-bold text-sindoor">₹86,200</td>
                      <td className="py-4 px-4 text-ink/70 text-xs">Goshala, Dholka</td>
                    </tr>
                    <tr className="border-b border-rule hover:bg-paper/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-ink">Temple repair</td>
                      <td className="py-4 px-4 text-right font-medium">₹1,40,000</td>
                      <td className="py-4 px-4 text-right font-bold text-sindoor">₹96,000</td>
                      <td className="py-4 px-4 text-ink/70 text-xs">Ranchhodji, Dakor</td>
                    </tr>
                    <tr className="bg-sindoor/10/50 border-b border-sindoor/20 hover:bg-sindoor/10 transition-colors">
                      <td className="py-4 px-4 font-medium text-sindoor">Unallocated</td>
                      <td className="py-4 px-4 text-right font-medium text-sindoor">₹79,610</td>
                      <td className="py-4 px-4 text-right font-bold text-sindoor">₹0</td>
                      <td className="py-4 px-4 text-sindoor text-xs">held</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow the rupee (How it works?) */}
      <section className="w-full relative py-16 md:py-24 bg-ink">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center md:text-left mb-12">
            <p className="text-ink/50 font-medium text-sm tracking-wide uppercase mb-2">Of every ₹100 you give</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-paper">₹91.90 reaches the ground</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-none p-8 ">
              <h3 className="font-heading font-bold text-ink text-2xl mb-8">Where your money goes</h3>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="bg-sindoor/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor">₹</div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Payment Gateway</h4>
                    <p className="text-sm text-ink/70">₹2.10 goes to processing fees for secure transactions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-sindoor/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><Building2 size={20}/></div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Operations</h4>
                    <p className="text-sm text-ink/70">₹6.00 covers our operational costs and logistics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-sindoor/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><Heart size={20}/></div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">To the ground</h4>
                    <p className="text-sm text-ink/70">₹91.90 goes directly to the cause you selected.</p>
                  </div>
                </div>
              </div>
              <Link href="/khata" className="block w-full text-center bg-sindoor text-paper py-3 rounded-full font-bold  shadow-sindoor/30 hover:opacity-90 transition-colors">
                Open the Khata
              </Link>
            </div>
            
            <div className="bg-card rounded-none p-8 ">
              <h3 className="font-heading font-bold text-ink text-2xl mb-8">Why it matters</h3>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="bg-paper w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><FileText size={20}/></div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Full Accountability</h4>
                    <p className="text-sm text-ink/70">Every single rupee is tracked, documented, and published.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-paper w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><ShieldCheck size={20}/></div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Verified Impact</h4>
                    <p className="text-sm text-ink/70">We personally verify every end-destination of your funds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-paper w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><Smartphone size={20}/></div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Direct Updates</h4>
                    <p className="text-sm text-ink/70">Receive WhatsApp updates on how your donation is used.</p>
                  </div>
                </div>
              </div>
              <Link href="/field-notes" className="block w-full text-center bg-sindoor text-paper py-3 rounded-full font-bold  shadow-secondary/30 hover:bg-sindoor-hover transition-colors">
                Read this week's field notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Field notes (Testimonials) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-ink/60 font-medium text-sm tracking-wide uppercase mb-2">Dispatches from the field, this week</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-8">Where the money landed</h2>
        
        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-sindoor text-paper px-6 py-2 rounded-full text-sm font-bold  shadow-sindoor/30 transition-colors hover:opacity-90">Latest</button>
          <button className="bg-paper text-ink/80 px-6 py-2 rounded-full text-sm font-bold transition-colors hover:bg-rule hover:text-ink">Food</button>
          <button className="bg-paper text-ink/80 px-6 py-2 rounded-full text-sm font-bold transition-colors hover:bg-rule hover:text-ink">Education</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-card border border-rule  shadow-gray-200/50 rounded-none p-6 flex flex-col">
            <span className="text-4xl text-ink/40 font-serif leading-none mb-2">"</span>
            <p className="text-ink/80 text-sm mb-6 flex-1">New grain delivery arrived safely at the Sabarmati kitchen this morning. Ready for the week's meals.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rule rounded-full flex items-center justify-center text-ink/60"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-ink">Sabarmati Kitchen</p>
                <p className="text-xs text-ink/60">Ahmedabad, 18 Sep 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-rule  shadow-gray-200/50 rounded-none p-6 flex flex-col">
            <span className="text-4xl text-ink/40 font-serif leading-none mb-2">"</span>
            <p className="text-ink/80 text-sm mb-6 flex-1">Roof repairs completed just before the heavy rains. The cows are dry and safe.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rule rounded-full flex items-center justify-center text-ink/60"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-ink">Dholka Goshala</p>
                <p className="text-xs text-ink/60">Dholka, 15 Sep 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-rule  shadow-gray-200/50 rounded-none p-6 flex flex-col">
            <span className="text-4xl text-ink/40 font-serif leading-none mb-2">"</span>
            <p className="text-ink/80 text-sm mb-6 flex-1">Term books successfully distributed to 45 students across three classes today.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rule rounded-full flex items-center justify-center text-ink/60"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-ink">Viramgam School</p>
                <p className="text-xs text-ink/60">Viramgam, 12 Sep 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability (Why Donatekart? style) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-paper border-t border-rule">
        <div className="text-center mb-12">
          <p className="text-ink/60 font-medium text-sm tracking-wide uppercase mb-2">Trust is a document, not a promise</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Verify us yourself</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-none border border-rule p-6 flex items-start gap-4">
            <div className="bg-sindoor/10 text-sindoor p-3 rounded-none"><FileText size={24}/></div>
            <div>
              <h3 className="font-bold text-ink mb-1">Trust Deed</h3>
              <p className="text-xs text-ink/60 mb-2">September is governed by a registered public charitable trust.</p>
              <Link href="/reports/trust-deed.pdf" className="text-sindoor text-xs font-semibold hover:underline">Download PDF</Link>
            </div>
          </div>
          
          <div className="bg-card rounded-none border border-rule p-6 flex items-start gap-4">
            <div className="bg-sindoor/10 text-sindoor p-3 rounded-none"><ShieldCheck size={24}/></div>
            <div>
              <h3 className="font-bold text-ink mb-1">Audited Statement</h3>
              <p className="text-xs text-ink/60 mb-2">Verified finances for 2025-26 by independent auditors.</p>
              <Link href="/reports/audit-2025.pdf" className="text-sindoor text-xs font-semibold hover:underline">Download PDF</Link>
            </div>
          </div>
          
          <div className="bg-card rounded-none border border-rule p-6 flex items-start gap-4">
            <div className="bg-sindoor/10 text-sindoor p-3 rounded-none"><Building2 size={24}/></div>
            <div>
              <h3 className="font-bold text-ink mb-1">Bank Transfer</h3>
              <p className="text-xs text-ink/60">A/C 50200012345678</p>
              <p className="text-xs text-ink/60">IFSC HDFC0001234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-sindoor p-12 md:p-20 flex flex-col justify-center text-paper">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-4">
              ₹51 feeds a cow.<br/>₹251 cleans a ghat.<br/>₹501 serves a meal.
            </h2>
            <p className="text-paper/80 text-lg mb-8 max-w-md">Pick a seva. We publish where it went.</p>
            <div>
              <Link href="/give" className="inline-block bg-card text-sindoor px-8 py-3 rounded-full font-bold  hover:bg-paper transition-colors">
                Give ₹51
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-auto">
            <img src={causes[4].image} alt="Impact" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

    </main>
  );
}
