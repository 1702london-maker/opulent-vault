import Link from "next/link";
import AIConciergeSection from "@/components/AIConciergeSection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS4cLtPQI76KAWTUP2hOixbBx1qIHoUqwpiaqOiqLlpSNU-ImCaBVkyROsmJ9Fe9t55VzysDHPVGkqZzwDiTYDTTWtJaeWBDX8c9VgFKNHmUHaor3peq9Yw9w5ViAOVcI9TIYWsWd4PdWWOjs5a0Q9Lcbu74useb7_BcMnXnB0kpiGqo-5-hGKXQqCntiYQQW2BI5k_XKYAZSmpr2LUq_hIVx85R2LMod5_mhNh7N0SYMIWmJaAXJD1rCdZuoIjGc8QhQyV8yATih2"
            alt="Luxury villa at sunset"
            data-placeholder="true"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-6 block tracking-[0.3em] uppercase">
            Elegance Redefined
          </span>
          <h1 className="font-serif text-5xl md:text-display-xl text-white mb-8 leading-none" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
            Because Every Day Deserves a Touch of Luxury.
          </h1>
          <div className="glass-panel mt-12 p-2 md:p-4 border border-white/20 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-4 border-b md:border-b-0 md:border-r border-primary/10 py-4 md:py-0">
              <div className="flex flex-col items-start gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Destination</span>
                <input className="bg-transparent border-none p-0 focus:ring-0 font-sans text-body-md text-primary placeholder:text-on-surface-variant/50 w-full outline-none" placeholder="Where to?" type="text" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Dates</span>
                <input className="bg-transparent border-none p-0 focus:ring-0 font-sans text-body-md text-primary placeholder:text-on-surface-variant/50 w-full outline-none" placeholder="When?" type="text" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Guests</span>
                <input className="bg-transparent border-none p-0 focus:ring-0 font-sans text-body-md text-primary placeholder:text-on-surface-variant/50 w-full outline-none" placeholder="How many?" type="number" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Vehicle</span>
                <select className="bg-transparent border-none p-0 focus:ring-0 font-sans text-body-md text-primary appearance-none w-full outline-none">
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Supercar</option>
                </select>
              </div>
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all whitespace-nowrap w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Luxury Stays */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">The Collections</span>
            <h2 className="font-serif text-headline-lg text-primary">Featured Luxury Stays</h2>
          </div>
          <Link href="/stays" className="font-label-caps text-label-caps border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all hidden md:block">
            View All Properties
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "EXCLUSIVE", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuClvcHo3OJVZREZ0W2NcU1FefgxDjQPW-ZbTlbS9ZOhnF_P1Lw6w1fZgenkG1sl6tTWeLl-lPF6FSMiiiTVdWdQOIWPUAfpn0yPlov9ztAvXmDJjXvbyK9f-3C9UOX2PYoYIo3A-p0BnKcO3gG_tlHXyn6liaFJlkKTAS55Nd_ZytNFgR7hzwNJmiXKm_ddAuV8hfsKyK17c9RtP6-mAAnli2sDL-yXzid9y4Jvaoqp5-lizCYzU87WhjoJRRccWyCOSdt-S8cNVXie", title: "The Glass Pavilion", location: "Palm Springs, California", guests: 6, beds: 4, price: "From $2,400 / night" },
            { label: "HERITAGE", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTwJz6XdlVeWAnLPUNz-JWkyq04b9fdc6endsGyMSD7jF4NSmVsjTf4aCgnnm1KezqFFOE6e6-8dYli-wXtXb39_otZh8Qgnlb3xBSZ67oyfckfR3Jkw3hIF3G1YNuqYBDku095aXgfKsKDwYA2_QH5bqzt4YiBIaOgk7zSiYkfatGIcWpABgxMUaT5DZ4KJdyh7eYsHY4eNUzRSWtbD-bpO3S-4psNRtjXieB5CUlqCvGaK3OzmkNHKj6VoSiDccmyr7vivV0fNuG", title: "Chateau de Lumiere", location: "Provence, France", guests: 12, beds: 8, price: "From $5,800 / night" },
            { label: "TROPICAL", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLqzp5cQSJLWz4cbNcnRWWr-xHkgHDvh9utINDKB8mVz33v7I_C1htKCuPRCL00IW5jKfoNdcY7kU5Lau2Ak3c-VOnRRvn2GH1JpvtIrvOA965QJOM7pgCgg2C4KxzDXejCLyNusbqSk_aoJTZ2X-kTkEDuMDrM71EssIicVGbav42tWGyxxaUOdo66a6Ix01S6meas0VHFARVrYHib61S3zq70j8TmcotVfygKYQyr4UO8VyY1b6BiyYMfo8_Utxi9grFcoCWvgS", title: "Azure Haven", location: "Baa Atoll, Maldives", guests: 2, beds: 1, price: "From $3,200 / night" },
          ].map((stay) => (
            <div key={stay.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={stay.src} alt={stay.title} data-placeholder="true" />
                <div className="absolute top-4 left-4 bg-surface/90 px-4 py-1">
                  <span className="font-label-caps text-[10px] text-primary">{stay.label}</span>
                </div>
              </div>
              <h3 className="font-serif text-headline-md mb-2">{stay.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-4">{stay.location} &bull; {stay.guests} Guests &bull; {stay.beds} Bedrooms</p>
              <p className="font-label-caps text-label-caps text-primary">{stay.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vehicles Bento */}
      <section className="bg-primary py-section-gap text-on-primary">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block uppercase tracking-widest">The Fleet</span>
            <h2 className="font-serif text-headline-lg mb-8">Arrive in Unmatched Style</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8x8cQTVxSzDweUbqrEDz2apHEpx54KdVGIxfJrVp5tbMdCDCLp3eHIWq1726D0cthCP4m0JAMBKE9sjNwLRPx7a0vTAiymxQ-leCH8Iv2ArmG5Tju_-MTqLVClZUfKiBWQKCn2gUZ7JyvmazVV8aMb70PweB8NcvD1ENhdSvdsb7haGT-ZoNJOgqSPhbuci9J2XmWEopl4a8daWPXkA_RNA4nxsz4ALiz-sA38GXx-1kook8HaCxEPV13Sl_JBwGtNbGjdEHqZmgQ" alt="Supercar Selection" data-placeholder="true" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="font-serif text-headline-md">Supercar Selection</h4>
                <p className="font-sans text-body-md text-on-primary-container">Self-drive the world&apos;s most desired performance vehicles.</p>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjhq94o1BOiHkUSia-hXi9s4AxGUd718Dh8XqZLwpA3tOvDW9Dxs5Obhx0oypvH2oyz9OtYyFkeQ1wID4HKOTMcXUJFRrK0UNh43D3V1akDxmNW4q4kzuCwbiNBqKk5d7L_rMZ0IANuYDcvju8VVwOmfeHTsNpoFNz7jyoF1KJEg-TIhmDYR5AyNZM9wRDgxWRlB670GHWN8iajxjQJU4uJtcwSkhHDskyWekFQWOLmEmqETm9ZeXMMUdVr9CqA44H_bHL2aPSpQEH" alt="Chauffeur Service" data-placeholder="true" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                <div className="text-center">
                  <h4 className="font-serif text-headline-md">Chauffeur Service</h4>
                  <span className="font-label-caps text-label-caps border-b border-on-primary">Learn More</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArsOJRZ3XLem0EYaM_bDd3mGgNst44kDfm8vvzuIvbgBjKlVocc1Ayck0lc_lJjFak_b1a-0NyKzu1y8ebQcyZWcjHbbK1lRNdRTocXYVTJ5LGQY6UpXlycgJWC_NhrxeHlRqxEkrHqh60aRa-4Rdu_6PuLXPclalJwDD5FVzULDpAMWoaMLSxOd9hrAEePtorMyOLUw_-L7Uuw_6VX_h4QcBCQ4y-w_qm6SJwpDex7I_j4--Sukei4RQJQ3y6sa8BheOKMUCgRJY" alt="Luxury SUVs" data-placeholder="true" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6"><h4 className="font-sans text-body-lg font-bold">Luxury SUVs</h4></div>
            </div>
            <div className="group relative overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdObuheOO3wQo_nervxzmRiid16cbqbpEkWRJGHuK4dFL-ALdjmWl5uh9S3vnhPTsvAJSjlp0w9dgKPvLpGT2c2VanbRMIusBm0sXwD9OBL8fapvXqkrB8V48NZIQi3rlEfOHN7sbshKxQZeAgIGdOJS4nPYO5QHULk2guKY9lqAyCWgoGC2pVKYFS2un50RSAN27XsxEH9QaCce09JIdxC_PIHzLwfR4VmRp2wZtrzqRCNGxQtj1o9m5FqRaNfuGGOwT9xr1PqqRG" alt="Vintage Classics" data-placeholder="true" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6"><h4 className="font-sans text-body-lg font-bold">Vintage Classics</h4></div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Highlights */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <img className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9wPblxS_9h851VduYKdXpNLrL4sldnk-KoZYFvomJN4BL-QCvHKRqHcQRrjwX5Jt6GbIfXGV6ZR8h_CnottiheyLj0gpzAyz4UsoBwoZzL2VzWU7VKI3b-HSaCzCZBQBJ2QUQURnQBv4ClChRbaE34h4NN9SzVbC4GdeX2qjdl8XUEsZtU3bnWMJrAWWi0PiXkPfnzUMhsdMTmIZs3XoElzHh3K8RatqvVV_-1cXEQCLJulxbcvxSYYeqpcyfT3KkR1oGJNVJNXb" alt="Private Chef" data-placeholder="true" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container p-8 hidden md:block">
              <span className="font-label-caps text-label-caps text-on-secondary-container mb-4 block">Bespoke</span>
              <p className="font-serif text-headline-md leading-tight text-on-secondary-container">Your wish is our command.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">Concierge Services</span>
            <h2 className="font-serif text-headline-lg text-primary mb-8 leading-tight">Effortless Living, Curated For You.</h2>
            <p className="font-sans text-body-lg text-on-surface-variant mb-12">From Michelin-starred private chefs to seamless airport transfers and exclusive event planning, our concierge team handles every detail so you can focus on the experience.</p>
            <ul className="space-y-6">
              {[
                { icon: "restaurant", title: "Private Chefs", desc: "Bespoke culinary experiences in the comfort of your villa.", border: true },
                { icon: "flight_takeoff", title: "Seamless Logistics", desc: "VIP airport pickup and luggage handling globally.", border: true },
                { icon: "event", title: "Event Curators", desc: "Exclusive access and planning for life biggest milestones.", border: false },
              ].map((item) => (
                <li key={item.title} className={"flex items-start gap-4 " + (item.border ? "border-b border-outline-variant pb-6" : "pb-6")}>
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary mb-1">{item.title}</h4>
                    <p className="font-sans text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-serif text-headline-lg text-primary">Voices of Excellence</h2>
        </div>
        <div className="flex flex-nowrap overflow-x-auto gap-8 pb-8 snap-x" style={{ scrollbarWidth: "thin", scrollbarColor: "#775a19 transparent" }}>
          {[
            { quote: "The attention to detail was beyond anything I have experienced. From the villa selection to the chauffeur, everything was flawless.", name: "Julianne V.", role: "Tech CEO, San Francisco" },
            { quote: "Opulent Vault is not just a service; it is a partner in crafting my family memories. Truly exceptional concierge team.", name: "Marcus H.", role: "Venture Capitalist" },
            { quote: "Seamless from start to finish. The supercars are maintained to a standard I have never seen in the rental market.", name: "Elena R.", role: "Professional Athlete" },
          ].map((t) => (
            <div key={t.name} className="min-w-[300px] md:min-w-[450px] snap-center bg-white p-12 border border-outline-variant/30 flex-shrink-0">
              <div className="flex gap-1 mb-6 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (<span key={i} className="material-symbols-outlined">star</span>))}
              </div>
              <p className="font-sans text-body-lg text-primary mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary">{t.name}</h4>
                <span className="font-sans text-body-md text-on-surface-variant text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Split */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 max-w-container-max mx-auto border border-outline-variant/20">
          <div className="bg-surface p-16 md:p-24 text-center hover:bg-surface-container-low transition-all">
            <h3 className="font-serif text-headline-md text-primary mb-6">Become an Affiliate</h3>
            <p className="font-sans text-body-md text-on-surface-variant mb-10">Refer your elite network and earn exclusive rewards and commissions.</p>
            <Link href="/affiliates" className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 uppercase tracking-widest hover:text-secondary hover:border-secondary transition-all">Apply Now</Link>
          </div>
          <div className="bg-surface p-16 md:p-24 text-center hover:bg-surface-container-low transition-all">
            <h3 className="font-serif text-headline-md text-primary mb-6">Partner With Us</h3>
            <p className="font-sans text-body-md text-on-surface-variant mb-10">List your ultra-luxury assets on our global platform of high-net-worth clients.</p>
            <Link href="/partners" className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 uppercase tracking-widest hover:text-secondary hover:border-secondary transition-all">Contact Partnerships</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-4 block uppercase tracking-widest">The Insider List</span>
            <h2 className="font-serif text-headline-lg text-on-primary mb-4">Stay Inspired</h2>
            <p className="font-sans text-body-lg text-on-primary/70">Receive early access to new property listings and exclusive event invitations before they hit the market.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input className="bg-transparent border-b border-on-primary/30 p-4 focus:border-on-primary focus:ring-0 outline-none flex-1 text-on-primary placeholder:text-on-primary/50" placeholder="Email Address" type="email" />
            <button className="bg-on-primary text-primary px-12 py-4 font-label-caps text-label-caps hover:bg-secondary-fixed transition-all uppercase tracking-widest">Subscribe</button>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}
