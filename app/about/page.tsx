import AIConciergeSection from "@/components/AIConciergeSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4LzX8oNBw0P4GJR_MqTZPRZMG7M0bwlQj7G6WJVzJkPK0FiXtGjO1cQWEJV-H0L9oU3bRrLmkv4K5m3OP96DGiPcVL23XkMlsZ3QzJjMfEbIXFwxhLi31ZxAlC47dFMkAkTGCHuJIiWCaLFJIr9NrdNJwvz0J8X4bN2cS0X3sLx3oB3w5ieMPTB-vhV3D0bpK7i5AYdnqPjBrZv0bHnqS_Nq6dZWkRvb7mWi_BNpWD_1f4v6tOMhvJl4dh5QqiGSfqwZ_U" alt="Opulent Vault story" data-placeholder="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">Our Story</span>
          <h1 className="font-serif text-display-xl text-on-primary max-w-3xl leading-[1.1]">Curating Luxury.<br />Defining Excellence.</h1>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Our Heritage</span>
              <h2 className="font-serif text-headline-lg mb-8">A Legacy Built on Bespoke Service.</h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-6">Opulent Vault was founded with a singular conviction: that the world&apos;s most discerning individuals deserve access to experiences of uncompromising quality — delivered with the discretion, speed, and precision that defines true luxury service.</p>
              <p className="font-sans text-body-md text-on-surface-variant">From our origins curating private residences in London to now operating across the United Kingdom and 24 European cities, we have built a network of properties, services, and connections that place the extraordinary within reach for those who will accept nothing less.</p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-10 col-span-2 md:col-span-1">
                  <div className="font-serif text-display-xl text-secondary mb-2">2009</div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Year Founded</p>
                </div>
                <div className="bg-surface-container-low p-10 col-span-2 md:col-span-1">
                  <div className="font-serif text-display-xl text-secondary mb-2">24+</div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Destinations</p>
                </div>
                <div className="bg-primary text-on-primary p-10 col-span-2">
                  <div className="font-serif text-display-xl mb-2">5,000+</div>
                  <p className="font-label-caps text-label-caps text-on-primary/70">Bespoke Experiences Arranged</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Standards */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Vision & Standards</span>
            <h2 className="font-serif text-headline-lg max-w-2xl mx-auto">The Principles That Define Every Decision.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: "verified_user", title: "Discretion Above All", desc: "The privacy of every client is sacrosanct. Our operations are built around absolute confidentiality and the highest data security protocols." },
              { icon: "diamond", title: "Uncompromising Curation", desc: "Every property, vehicle, and experience within the Opulent Vault portfolio is personally assessed against our 120-point quality standard." },
              { icon: "support_agent", title: "24/7 White-Glove Service", desc: "Our concierge team operates across every time zone, ensuring that no request goes unanswered and no moment is less than perfect." },
            ].map((v) => (
              <div key={v.title} className="bg-surface p-12 border border-outline/5">
                <div className="w-12 h-12 flex items-center justify-center border border-secondary mb-8">
                  <span className="material-symbols-outlined text-secondary">{v.icon}</span>
                </div>
                <h3 className="font-serif text-headline-md mb-4">{v.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Leadership</span>
            <h2 className="font-serif text-headline-lg">The Minds Behind the Vault.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { name: "James Harrington", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcgMbzx3g3SZsd-0IqLQT9qiBGwoVEXb-dK6kU1mbTUF8nunhwJBrM4bVITjCLm1B7HTW67XGlye9ciV-nv9oPPUC0PdcQ2Cme7cDTjUNoY9oN8zRgahorlLM402ghmSNIYmWPx6LZIC5Uh78iFY_9JtOjQ0dsVRwsJkDtUb_45dGkO_eyNzZTj9psRbPoZLcBhNgM9GKcm9v55o70pBVyYBYnfxUfxshw8iRH_SxDcn32gkO-QryZVhtUTd-thpjuMo3pWIKwKVGi" },
              { name: "Isabelle Laurent", role: "Chief Experience Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD64G6fh7cj5KYz-TTku5yLv7c7HvLIEBdXEBEqAoULMGFHCYdgP0YLxi3LrnM-pU7ImYJPJAS4K9jjKjq0sFQIiA5UeW_PSNB2YtaIyjz4yN6_-7YURGxLNyVB12JvzdQft58MMX434L90YTWqe8TAmBaC2givSOsiJmHuyz-DTgp9u43byMoEKSJ6swrB2QWaZ6xfZP_k7ul1DTULWRvqMFZ5UKjEDXvL2T6QSyGl5Dc_iq6F4BuL_tHCwUW6t0slLnicIrcpR4UU" },
              { name: "Marcus Webb", role: "Head of Properties", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm4LzX8oNBw0P4GJR_MqTZPRZMG7M0bwlQj7G6WJVzJkPK0FiXtGjO1cQWEJV-H0L9oU3bRrLmkv4K5m3OP96DGiPcVL23XkMlsZ3QzJjMfEbIXFwxhLi31ZxAlC47dFMkAkTGCHuJIiWCaLFJIr9NrdNJwvz0J8X4bN2cS0X3sLx3oB3w5ieMPTB-vhV3D0bpK7i5AYdnqPjBrZv0bHnqS_Nq6dZWkRvb7mWi_BNpWD_1f4v6tOMhvJl4dh5QqiGSfqwZ_U" },
              { name: "Amara Osei", role: "Global Partnerships Director", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcgMbzx3g3SZsd-0IqLQT9qiBGwoVEXb-dK6kU1mbTUF8nunhwJBrM4bVITjCLm1B7HTW67XGlye9ciV-nv9oPPUC0PdcQ2Cme7cDTjUNoY9oN8zRgahorlLM402ghmSNIYmWPx6LZIC5Uh78iFY_9JtOjQ0dsVRwsJkDtUb_45dGkO_eyNzZTj9psRbPoZLcBhNgM9GKcm9v55o70pBVyYBYnfxUfxshw8iRH_SxDcn32gkO-QryZVhtUTd-thpjuMo3pWIKwKVGi" },
            ].map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={p.img} alt={p.name} data-placeholder="true" />
                </div>
                <h3 className="font-serif text-headline-md mb-1">{p.name}</h3>
                <p className="font-label-caps text-label-caps text-secondary">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers/Press CTA */}
      <section className="py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border border-white/10 p-12">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">Careers</span>
            <h3 className="font-serif text-headline-md mb-6">Join the Vault.</h3>
            <p className="font-sans text-body-md text-on-primary/70 mb-8">We seek exceptional individuals who share our commitment to perfection. If you believe in the power of bespoke service, we want to hear from you.</p>
            <a href="/contact" className="inline-block border border-white/30 text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-white hover:text-primary transition-all">Get In Touch</a>
          </div>
          <div className="border border-white/10 p-12">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">Press</span>
            <h3 className="font-serif text-headline-md mb-6">Media Enquiries.</h3>
            <p className="font-sans text-body-md text-on-primary/70 mb-8">For press packs, interview requests, and brand partnership enquiries, our communications team is available to assist journalists and media professionals.</p>
            <a href="/contact" className="inline-block border border-white/30 text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-white hover:text-primary transition-all">Contact Press</a>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}