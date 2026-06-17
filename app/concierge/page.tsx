import AIConciergeSection from "@/components/AIConciergeSection";

const CARD_SERVICES = [
  { icon: "celebration", title: "Event Planning", desc: "From intimate dinners to grand celebrations — managed to perfection with access to the world's most exclusive venues." },
  { icon: "sailing", title: "Yacht Charter", desc: "Mediterranean and Caribbean yacht charters sourced from our vetted fleet of superyachts, with crew and itinerary arranged." },
  { icon: "star_rate", title: "VIP Reservations", desc: "Priority access to Michelin-starred restaurants, sold-out shows, members clubs, and cultural events worldwide." },
  { icon: "workspace_premium", title: "Luxury Requests", desc: "Have an extraordinary request? Our team specialises in sourcing the impossible — from rare collectibles to once-in-a-lifetime experiences." },
];

const SERVICE_SECTIONS = [
  {
    label: "Housekeeping",
    title: "Impeccable Interiors.",
    desc: "Our household management service ensures every property under your care operates at hotel standard. We place vetted, discreet housekeeping teams who become an invisible yet essential part of your home.",
    icon: "home",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcgMbzx3g3SZsd-0IqLQT9qiBGwoVEXb-dK6kU1mbTUF8nunhwJBrM4bVITjCLm1B7HTW67XGlye9ciV-nv9oPPUC0PdcQ2Cme7cDTjUNoY9oN8zRgahorlLM402ghmSNIYmWPx6LZIC5Uh78iFY_9JtOjQ0dsVRwsJkDtUb_45dGkO_eyNzZTj9psRbPoZLcBhNgM9GKcm9v55o70pBVyYBYnfxUfxshw8iRH_SxDcn32gkO-QryZVhtUTd-thpjuMo3pWIKwKVGi",
  },
  {
    label: "Photography",
    title: "Moments Preserved in Luxury.",
    desc: "Commission our exclusive editorial photographers for private portraits, property documentation, event coverage, and brand content. Every frame crafted with artistic precision.",
    icon: "photo_camera",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD64G6fh7cj5KYz-TTku5yLv7c7HvLIEBdXEBEqAoULMGFHCYdgP0YLxi3LrnM-pU7ImYJPJAS4K9jjKjq0sFQIiA5UeW_PSNB2YtaIyjz4yN6_-7YURGxLNyVB12JvzdQft58MMX434L90YTWqe8TAmBaC2givSOsiJmHuyz-DTgp9u43byMoEKSJ6swrB2QWaZ6xfZP_k7ul1DTULWRvqMFZ5UKjEDXvL2T6QSyGl5Dc_iq6F4BuL_tHCwUW6t0slLnicIrcpR4UU",
  },
  {
    label: "Personal Shopping",
    title: "Curated for You Alone.",
    desc: "Access private showrooms, pre-launch collections, and dedicated luxury brand relationships. Our personal shoppers source, negotiate, and present only what aligns perfectly with your aesthetic.",
    icon: "shopping_bag",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm4LzX8oNBw0P4GJR_MqTZPRZMG7M0bwlQj7G6WJVzJkPK0FiXtGjO1cQWEJV-H0L9oU3bRrLmkv4K5m3OP96DGiPcVL23XkMlsZ3QzJjMfEbIXFwxhLi31ZxAlC47dFMkAkTGCHuJIiWCaLFJIr9NrdNJwvz0J8X4bN2cS0X3sLx3oB3w5ieMPTB-vhV3D0bpK7i5AYdnqPjBrZv0bHnqS_Nq6dZWkRvb7mWi_BNpWD_1f4v6tOMhvJl4dh5QqiGSfqwZ_U",
  },
  {
    label: "Wellness",
    title: "Restoration on Your Terms.",
    desc: "Private yoga instruction, in-villa spa treatments, nutritionist consultations, and retreat planning — your wellness regimen designed and delivered around your schedule.",
    icon: "spa",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcgMbzx3g3SZsd-0IqLQT9qiBGwoVEXb-dK6kU1mbTUF8nunhwJBrM4bVITjCLm1B7HTW67XGlye9ciV-nv9oPPUC0PdcQ2Cme7cDTjUNoY9oN8zRgahorlLM402ghmSNIYmWPx6LZIC5Uh78iFY_9JtOjQ0dsVRwsJkDtUb_45dGkO_eyNzZTj9psRbPoZLcBhNgM9GKcm9v55o70pBVyYBYnfxUfxshw8iRH_SxDcn32gkO-QryZVhtUTd-thpjuMo3pWIKwKVGi",
  },
];

export default function ConciergePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-end pb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64G6fh7cj5KYz-TTku5yLv7c7HvLIEBdXEBEqAoULMGFHCYdgP0YLxi3LrnM-pU7ImYJPJAS4K9jjKjq0sFQIiA5UeW_PSNB2YtaIyjz4yN6_-7YURGxLNyVB12JvzdQft58MMX434L90YTWqe8TAmBaC2givSOsiJmHuyz-DTgp9u43byMoEKSJ6swrB2QWaZ6xfZP_k7ul1DTULWRvqMFZ5UKjEDXvL2T6QSyGl5Dc_iq6F4BuL_tHCwUW6t0slLnicIrcpR4UU" alt="Concierge" data-placeholder="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-background" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">Opulent Vault Concierge</span>
          <h1 className="font-serif text-display-xl text-on-primary max-w-3xl leading-[1.1]">Your Vision,<br />Our Expertise.</h1>
          <p className="font-sans text-body-lg text-on-primary/70 mt-6 max-w-xl">Every request handled with discretion, precision, and an unwavering commitment to the extraordinary.</p>
        </div>
      </section>

      {/* Private Chef 2-col */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Private Chef</span>
              <h2 className="font-serif text-headline-lg mb-8">Michelin Calibre.<br />Your Private Table.</h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-6">Our private chef service connects you with culinary artists trained in the finest kitchens across Europe. From a romantic tasting menu for two to a 40-cover gala dinner, every plate reflects the same obsession with perfection.</p>
              <p className="font-sans text-body-md text-on-surface-variant mb-10">We manage everything from menu consultation and ingredient sourcing to kitchen preparation and tableside service — leaving you entirely free to enjoy the experience.</p>
              <div className="flex gap-8">
                <div>
                  <div className="font-serif text-headline-lg text-secondary mb-1">200+</div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Partner Chefs</p>
                </div>
                <div>
                  <div className="font-serif text-headline-lg text-secondary mb-1">48h</div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Min. Advance Notice</p>
                </div>
                <div>
                  <div className="font-serif text-headline-lg text-secondary mb-1">30+</div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Cuisines Available</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <img className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4LzX8oNBw0P4GJR_MqTZPRZMG7M0bwlQj7G6WJVzJkPK0FiXtGjO1cQWEJV-H0L9oU3bRrLmkv4K5m3OP96DGiPcVL23XkMlsZ3QzJjMfEbIXFwxhLi31ZxAlC47dFMkAkTGCHuJIiWCaLFJIr9NrdNJwvz0J8X4bN2cS0X3sLx3oB3w5ieMPTB-vhV3D0bpK7i5AYdnqPjBrZv0bHnqS_Nq6dZWkRvb7mWi_BNpWD_1f4v6tOMhvJl4dh5QqiGSfqwZ_U" alt="Private Chef" data-placeholder="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICE_SECTIONS.map((s, i) => (
        <section key={s.label} className={"py-section-gap " + (i % 2 === 0 ? "bg-surface-container-low" : "")}>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className={"grid grid-cols-12 gap-gutter items-center " + (i % 2 !== 0 ? "direction-rtl" : "")}>
              <div className={"col-span-12 md:col-span-5 " + (i % 2 !== 0 ? "md:col-start-8 md:order-2" : "")}>
                <span className="font-label-caps text-label-caps text-secondary mb-4 block">{s.label}</span>
                <h2 className="font-serif text-headline-lg mb-6">{s.title}</h2>
                <p className="font-sans text-body-lg text-on-surface-variant">{s.desc}</p>
              </div>
              <div className={"col-span-12 md:col-span-6 " + (i % 2 !== 0 ? "md:col-start-1 md:order-1" : "md:col-start-7")}>
                <img className="w-full aspect-video object-cover" src={s.img} alt={s.label} data-placeholder="true" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Card Grid */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Additional Services</span>
            <h2 className="font-serif text-headline-lg">Beyond the Expected.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {CARD_SERVICES.map((c) => (
              <div key={c.title} className="flex gap-8 p-12 border border-outline-variant/30 hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-secondary">
                  <span className="material-symbols-outlined text-secondary">{c.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-headline-md mb-3">{c.title}</h3>
                  <p className="font-sans text-body-md text-on-surface-variant">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Services CTA */}
      <section className="py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">Bespoke Services</span>
          <h2 className="font-serif text-headline-lg text-on-primary mb-6 max-w-2xl mx-auto">No Request Is Beyond Our Reach.</h2>
          <p className="font-sans text-body-lg text-on-primary/70 max-w-xl mx-auto mb-10">Whether you require something entirely unique or simply wish to discuss how we can enhance your lifestyle, our senior concierge team is available now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-secondary text-on-secondary font-label-caps text-label-caps px-12 py-5 hover:opacity-90 transition-all">Make a Bespoke Request</a>
            <a href="tel:+442079460958" className="inline-block border border-white/30 text-on-primary font-label-caps text-label-caps px-12 py-5 hover:bg-white hover:text-primary transition-all">+44 20 7946 0958</a>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}