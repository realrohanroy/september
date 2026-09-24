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
    <main className="flex flex-col w-full bg-gray-50 min-h-screen font-sans">
      

      {/* Hero Carousel Area */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex flex-col-reverse lg:flex-row rounded-[2px] overflow-hidden shadow-xl bg-card">
          <div className="w-full lg:w-[45%] bg-paper border-r border-rule p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-700"></div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
              Give once. <br/><span className="text-sindoor">See it reach.</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl font-medium mb-8 max-w-md">
              ₹51 feeds a cow for a day. ₹251 cleans a ghat. We publish every rupee in the Khata, every Sunday.
            </p>
            <div className="bg-card rounded-[2px] p-6 shadow-sm border border-rule mb-6">
              <h3 className="font-heading font-bold text-ink mb-4 text-lg">Week 38 Ledger (14–20 Sep 2026)</h3>
              <div className="space-y-2 text-sm font-medium">
                <div className="flex justify-between"><span className="text-ink/60">Received</span><span className="text-ink">₹ 4,18,210</span></div>
                <div className="flex justify-between"><span className="text-ink/60">Deployed</span><span className="text-sindoor font-bold">₹ 3,86,000</span></div>
                <div className="flex justify-between pt-2 border-t border-rule"><span className="text-ink/60">Not yet deployed</span><span className="text-haldi">₹ 32,210</span></div>
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
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="inline-block rounded-full border border-gray-200 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-4">
                Six causes. Six open ledgers.
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                Pick a seva.<br/>See where it lands.
              </h2>
            </div>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Every seva has its own account. A gift to Gau Seva can never be spent on anything else — no pooling, no internal transfers.
            </p>
          </div>

          {/* "Where needed most" featured card */}
          <div className="p-1.5 rounded-[2rem] bg-gray-900 ring-1 ring-black/10 mb-8">
            <div className="rounded-[calc(2rem-0.375rem)] bg-gray-900 overflow-hidden">
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
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                    Give where it is needed most
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Not sure which seva to pick? Give to the fund. We deploy it to the cause with the largest shortfall that week, publish the allocation in The Khata, and send you a receipt.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/give?cause=urgent"
                      className="group inline-flex items-center gap-2 bg-sindoor text-white rounded-full px-7 py-3 text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 active:scale-[0.98]"
                    >
                      Give to the urgent fund
                    </Link>
                    <span className="text-gray-500 text-xs">Any amount from ₹51</span>
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
                className="p-1.5 rounded-[1.5rem] bg-gray-50 ring-1 ring-black/5 group transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
              >
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white overflow-hidden flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                  {/* Image */}
                  <div className="h-[200px] relative overflow-hidden">
                    <img
                      src={cause.image}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      alt={cause.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-white/60 text-[11px] font-medium tracking-wide">{cause.sanskrit}</p>
                      <p className="text-white font-heading font-bold text-lg leading-tight">{cause.title}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-700/90 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        80G
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{cause.blurb}</p>

                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider">{cause.unitLabel}</p>
                        <p className="text-xl font-heading font-bold text-gray-900">₹{cause.unitInr}</p>
                      </div>
                      <Link
                        href={`/give?cause=${cause.id}`}
                        className="group/btn inline-flex items-center justify-center gap-2 bg-sindoor text-white rounded-full px-5 py-2 text-sm font-bold shadow-md shadow-sindoor/30 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-90 active:scale-[0.98]"
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
      <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-[11px] tracking-[0.15em] uppercase mb-3">Subscribe to Change</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1221]">Your Date (Monthly)</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            Pick a day of the month that means something to you — a birthday, an anniversary, or a punya tithi. We'll send you a WhatsApp message on your date, and then debit your chosen amount.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title: "In Memory", sub: "Honor a departed loved one every month on their punya tithi.", img: causes[0].image},
            {title: "Birthdays", sub: "Celebrate the gift of life by giving back on a birthday.", img: causes[4].image},
            {title: "Festival Giving", sub: "Commit to monthly support on a day of religious significance.", img: causes[2].image}
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="h-[200px] w-full relative bg-gray-100 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover opacity-90" alt={item.title} />
              </div>
              <div className="p-8 flex flex-col flex-1 items-center text-center">
                <h3 className="font-heading font-bold text-[#0B1221] text-lg mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-500 mb-8 leading-relaxed px-2">{item.sub}</p>
                <div className="w-full mt-auto flex justify-between items-end border-t border-gray-100/60 pt-6">
                  <div className="text-left">
                    <p className="text-[11px] text-gray-400 mb-0.5">Starts from</p>
                    <p className="font-bold text-secondary text-lg leading-none">₹500<span className="text-[11px] font-medium text-gray-400">/monthly</span></p>
                  </div>
                  <Link href="/your-date" className="bg-secondary text-white rounded-full px-6 py-2.5 text-[13px] font-bold shadow-md shadow-secondary/20 hover:bg-secondary-hover transition-colors">
                    PLEDGE NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Gap */}
      <section className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 pb-32">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-[11px] tracking-[0.15em] uppercase mb-3">Every. Rupee. Counts.</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1221]">The Gap</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Gap Card 1 */}
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[180px] group transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full sm:w-[45%] h-[200px] sm:h-full relative overflow-hidden">
              <img src={causes[3].image} className="w-full h-full object-cover scale-105" alt="Kitchen" />
              <div className="absolute top-0 left-0 bg-[#F43F5E] text-white text-[9px] font-bold px-3 py-1.5 rounded-br-lg uppercase tracking-widest shadow-sm">
                Urgent Shortfall
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 w-full sm:w-[55%] justify-center">
              <h3 className="font-heading font-bold text-[#0B1221] text-[15px] leading-tight mb-2">Kitchen, Sabarmati needs support this month</h3>
              <p className="text-[11px] text-gray-400 flex items-center gap-1 mb-6">
                <Search size={12} className="opacity-70" /> Ahmedabad
              </p>
              
              <div className="mt-auto w-full">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2.5">
                  <div className="h-full bg-[#F05B31] rounded-full" style={{ width: '58.9%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <div className="flex flex-col gap-0.5"><span className="text-[#0B1221] font-bold">₹22,400</span><span className="text-gray-400 font-medium">Received</span></div>
                  <div className="flex flex-col text-right gap-0.5"><span className="text-[#F05B31] font-bold">₹38,000</span><span className="text-gray-400 font-medium">Needed</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gap Card 2 */}
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[180px] group transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full sm:w-[45%] h-[200px] sm:h-full relative overflow-hidden">
              <img src={causes[2].image} className="w-full h-full object-cover scale-105" alt="Goshala" />
              <div className="absolute top-0 left-0 bg-[#F43F5E] text-white text-[9px] font-bold px-3 py-1.5 rounded-br-lg uppercase tracking-widest shadow-sm">
                Urgent Shortfall
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 w-full sm:w-[55%] justify-center">
              <h3 className="font-heading font-bold text-[#0B1221] text-[15px] leading-tight mb-2">Goshala, Dholka needs support this week</h3>
              <p className="text-[11px] text-gray-400 flex items-center gap-1 mb-6">
                <Search size={12} className="opacity-70" /> Dholka
              </p>
              
              <div className="mt-auto w-full">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2.5">
                  <div className="h-full bg-[#F05B31] rounded-full" style={{ width: '22.7%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <div className="flex flex-col gap-0.5"><span className="text-[#0B1221] font-bold">₹4,100</span><span className="text-gray-400 font-medium">Received</span></div>
                  <div className="flex flex-col text-right gap-0.5"><span className="text-[#F05B31] font-bold">₹18,000</span><span className="text-gray-400 font-medium">Needed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Khata */}
      <section className="w-full py-20 md:py-28 relative bg-[#1c397f]">
        {/* Very subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[42%] text-white">
            <p className="text-blue-100/70 font-bold text-[10px] tracking-[0.15em] uppercase mb-4">Turning Kindness in Action</p>
            <h2 className="text-[34px] md:text-[44px] font-heading font-extrabold mb-6 leading-[1.1] uppercase tracking-tight text-white drop-shadow-sm">
              The Khata: <br/>Most Trusted Book
            </h2>
            <p className="text-blue-50/80 text-[15px] mb-10 leading-relaxed max-w-sm">
              The bound book of accounts. Checked and published every Sunday. Track your donation, get regular updates.
            </p>
            
            <div className="flex gap-4 max-w-md">
              <div className="flex-1 bg-[#284693] border border-white/5 rounded-lg py-5 px-4 text-center shadow-inner">
                <p className="text-[17px] font-bold text-white leading-none mb-2">₹ 1.42 Cr+</p>
                <p className="text-[9px] text-blue-100/60 uppercase tracking-widest">Lifetime Deployed</p>
              </div>
              <div className="flex-1 bg-[#284693] border border-white/5 rounded-lg py-5 px-4 text-center shadow-inner">
                <p className="text-[17px] font-bold text-white leading-none mb-2">100%</p>
                <p className="text-[9px] text-blue-100/60 uppercase tracking-widest">Transparent</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[58%]">
            <div className="bg-white rounded-xl shadow-2xl p-7 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-heading font-bold text-gray-900 text-lg">Recent Ledger Entries</h3>
                <Link href="/khata" className="text-xs font-bold text-secondary hover:text-secondary-hover transition-colors">View All</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100/80">
                      <th className="pb-3 px-2 font-semibold text-gray-500 text-[11px] uppercase tracking-wide">Cause</th>
                      <th className="pb-3 px-2 font-semibold text-gray-500 text-[11px] uppercase tracking-wide">Received</th>
                      <th className="pb-3 px-2 font-semibold text-[#F05B31] text-[11px] uppercase tracking-wide">Deployed</th>
                      <th className="pb-3 px-2 font-semibold text-gray-500 text-[11px] uppercase tracking-wide">Where</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px]">
                    <tr className="border-b border-gray-100/50 hover:bg-gray-50/40 transition-colors">
                      <td className="py-4 px-2 font-medium text-gray-900">Food</td>
                      <td className="py-4 px-2 font-medium text-gray-900">₹1,12,400</td>
                      <td className="py-4 px-2 font-bold text-[#F05B31]">₹1,04,000</td>
                      <td className="py-4 px-2 text-gray-500 text-[11px]">Sabarmati kitchen</td>
                    </tr>
                    <tr className="border-b border-gray-100/50 hover:bg-gray-50/40 transition-colors">
                      <td className="py-4 px-2 font-medium text-gray-900">Gau seva</td>
                      <td className="py-4 px-2 font-medium text-gray-900">₹86,200</td>
                      <td className="py-4 px-2 font-bold text-[#F05B31]">₹86,200</td>
                      <td className="py-4 px-2 text-gray-500 text-[11px]">Goshala, Dholka</td>
                    </tr>
                    <tr className="border-b border-gray-100/50 hover:bg-gray-50/40 transition-colors">
                      <td className="py-4 px-2 font-medium text-gray-900">Temple repair</td>
                      <td className="py-4 px-2 font-medium text-gray-900">₹1,40,000</td>
                      <td className="py-4 px-2 font-bold text-[#F05B31]">₹96,000</td>
                      <td className="py-4 px-2 text-gray-500 text-[11px]">Ranchhodji, Dakor</td>
                    </tr>
                    <tr className="bg-orange-50/20 hover:bg-orange-50/40 transition-colors">
                      <td className="py-4 px-2 font-medium text-orange-800">Unallocated</td>
                      <td className="py-4 px-2 font-medium text-orange-800">₹79,610</td>
                      <td className="py-4 px-2 font-bold text-orange-400">₹0</td>
                      <td className="py-4 px-2 text-orange-600/70 text-[11px]">held</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow the rupee (How it works?) */}
      <section className="w-full relative py-16 md:py-24 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center md:text-left mb-12">
            <p className="text-gray-400 font-medium text-sm tracking-wide uppercase mb-2">Of every ₹100 you give</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">₹91.90 reaches the ground</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-heading font-bold text-gray-900 text-2xl mb-8">Where your money goes</h3>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor">₹</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Payment Gateway</h4>
                    <p className="text-sm text-gray-600">₹2.10 goes to processing fees for secure transactions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><Building2 size={20}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Operations</h4>
                    <p className="text-sm text-gray-600">₹6.00 covers our operational costs and logistics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sindoor"><Heart size={20}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">To the ground</h4>
                    <p className="text-sm text-gray-600">₹91.90 goes directly to the cause you selected.</p>
                  </div>
                </div>
              </div>
              <Link href="/khata" className="block w-full text-center bg-sindoor text-white py-3 rounded-full font-bold shadow-md shadow-sindoor/30 hover:opacity-90 transition-colors">
                Open the Khata
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-heading font-bold text-gray-900 text-2xl mb-8">Why it matters</h3>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-secondary"><FileText size={20}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Full Accountability</h4>
                    <p className="text-sm text-gray-600">Every single rupee is tracked, documented, and published.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-secondary"><ShieldCheck size={20}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Verified Impact</h4>
                    <p className="text-sm text-gray-600">We personally verify every end-destination of your funds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-secondary"><Smartphone size={20}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Direct Updates</h4>
                    <p className="text-sm text-gray-600">Receive WhatsApp updates on how your donation is used.</p>
                  </div>
                </div>
              </div>
              <Link href="/field-notes" className="block w-full text-center bg-secondary text-white py-3 rounded-full font-bold shadow-md shadow-secondary/30 hover:bg-secondary-hover transition-colors">
                Read this week's field notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Field notes (Testimonials) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-2">Dispatches from the field, this week</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Where the money landed</h2>
        
        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-sindoor text-white px-6 py-2 rounded-full text-sm font-bold shadow-md shadow-sindoor/30 transition-colors hover:opacity-90">Latest</button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-bold transition-colors hover:bg-gray-200 hover:text-gray-900">Food</button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-bold transition-colors hover:bg-gray-200 hover:text-gray-900">Education</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-6 flex flex-col">
            <span className="text-4xl text-gray-300 font-serif leading-none mb-2">"</span>
            <p className="text-gray-700 text-sm mb-6 flex-1">New grain delivery arrived safely at the Sabarmati kitchen this morning. Ready for the week's meals.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-gray-900">Sabarmati Kitchen</p>
                <p className="text-xs text-gray-500">Ahmedabad, 18 Sep 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-6 flex flex-col">
            <span className="text-4xl text-gray-300 font-serif leading-none mb-2">"</span>
            <p className="text-gray-700 text-sm mb-6 flex-1">Roof repairs completed just before the heavy rains. The cows are dry and safe.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-gray-900">Dholka Goshala</p>
                <p className="text-xs text-gray-500">Dholka, 15 Sep 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl p-6 flex flex-col">
            <span className="text-4xl text-gray-300 font-serif leading-none mb-2">"</span>
            <p className="text-gray-700 text-sm mb-6 flex-1">Term books successfully distributed to 45 students across three classes today.</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><User size={18}/></div>
              <div>
                <p className="font-bold text-sm text-gray-900">Viramgam School</p>
                <p className="text-xs text-gray-500">Viramgam, 12 Sep 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability (Why Donatekart? style) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-gray-50 border-t border-gray-200">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-2">Trust is a document, not a promise</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Verify us yourself</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
            <div className="bg-orange-50 text-sindoor p-3 rounded-xl"><FileText size={24}/></div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Trust Deed</h3>
              <p className="text-xs text-gray-500 mb-2">September is governed by a registered public charitable trust.</p>
              <Link href="/reports/trust-deed.pdf" className="text-sindoor text-xs font-semibold hover:underline">Download PDF</Link>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
            <div className="bg-orange-50 text-sindoor p-3 rounded-xl"><ShieldCheck size={24}/></div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Audited Statement</h3>
              <p className="text-xs text-gray-500 mb-2">Verified finances for 2025-26 by independent auditors.</p>
              <Link href="/reports/audit-2025.pdf" className="text-sindoor text-xs font-semibold hover:underline">Download PDF</Link>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
            <div className="bg-orange-50 text-sindoor p-3 rounded-xl"><Building2 size={24}/></div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Bank Transfer</h3>
              <p className="text-xs text-gray-500">A/C 50200012345678</p>
              <p className="text-xs text-gray-500">IFSC HDFC0001234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-sindoor p-12 md:p-20 flex flex-col justify-center text-white">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-4">
              ₹51 feeds a cow.<br/>₹251 cleans a ghat.<br/>₹501 serves a meal.
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md">Pick a seva. We publish where it went.</p>
            <div>
              <Link href="/give" className="inline-block bg-white text-sindoor px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors">
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
