"use client";
import { useState } from "react";
import AIConciergeSection from "@/components/AIConciergeSection";

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      full_name: (form.querySelector("#full_name") as HTMLInputElement)?.value,
      company_name: (form.querySelector("#company_name") as HTMLInputElement)?.value,
      industry: (form.querySelector("#industry") as HTMLSelectElement)?.value,
      email: (form.querySelector("#email") as HTMLInputElement)?.value,
      message: (form.querySelector("#message") as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch("/api/partner", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALLVulWd6MKGpl2qtIbwnWT6VuBFbkaTkfTP_-g-FhQasHV3ELs0fDNl6zg_mSk40bxWaVDCI6e69Hlqj1pHRHBjclXN_8tstq_KYUoy28GV6ynfPNFTlREvMnPoXZP00eZXRq2AFbGXnBe3WiMnn6H2REmQtedF377Apuu515IUL3QquP6aD49R-HHyyUI0mMgWTYBQaaX9UdW9fFXKiFt0yoUAyvV6isuVZVnoWaXs9idp4rlwy2DvLUJELhgB-wkMu46PhDSC1v" alt="Partners" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block uppercase">Global Partnerships</span>
          <h1 className="font-serif text-headline-lg text-white">Expand Your Reach with Opulent Vault.</h1>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-headline-md mb-4">The Partnership Ecosystem</h2>
          <div className="w-20 h-px bg-secondary mx-auto" />
        </div>
        <div className="grid grid-cols-12 gap-gutter">
          {[
            { cols: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", title: "Property Partners", desc: "Villas, chalets, and boutique hotels that define architectural excellence and bespoke service.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALLVulWd6MKGpl2qtIbwnWT6VuBFbkaTkfTP_-g-FhQasHV3ELs0fDNl6zg_mSk40bxWaVDCI6e69Hlqj1pHRHBjclXN_8tstq_KYUoy28GV6ynfPNFTlREvMnPoXZP00eZXRq2AFbGXnBe3WiMnn6H2REmQtedF377Apuu515IUL3QquP6aD49R-HHyyUI0mMgWTYBQaaX9UdW9fFXKiFt0yoUAyvV6isuVZVnoWaXs9idp4rlwy2DvLUJELhgB-wkMu46PhDSC1v" },
            { cols: "col-span-12 md:col-span-4", aspect: "aspect-square", title: "Vehicle Partners", desc: "Elite fleets for mobility on any terrain.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwNziuYtbYqw-_Xx8O0L1yjIUZrARN6aMXrqH7aC3zNkStKCtR-0yXOKxEQuH1O3dmgVbgn9Pm38gymYMT715pyRXCUUm8EFSGGS38nVKioT09OuOkY9aQWncp3hYyWCGuEFwkWdj_zsLBd8bEiekww9s20wJY2PUsfAwqhBUs0Ho9xul7syEU1FhKmC2AEgFwZJdZQkZe6WeuiTf38rwpcnwHyB6ZMlyAuvoC6K4PVPgQfR1CsHlxhbvQq_7Nz2FLHANfEDgJDzE0" },
            { cols: "col-span-12 md:col-span-4", aspect: "aspect-square", title: "Aviation", desc: "Private charters and bespoke sky journeys.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4B_8B4dOLvv5-TCmEtw0VewkfYFDXr42y0TjInUiR7m5kfIKSuNrvNFnrjH-YAuRlt31BMcBLImAjv5FfDmBo4-uHyOzpky8gi3vNouFuiMiBEuQ4fXYijW8K8FG4n_FcDQozQzDKqMgsk-_2ZBZjsyLhM2RFaN84UpIj0E5h7QDmMtDutdda_6yp21-BwNMIo7NoFrp98RukeH5WW1m0P1yqyrMV5rvJ8pnoGMtSc-hnIMZgySjOZD7qx_M6vDHgc-Ok48887t4d" },
            { cols: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]", title: "Security", desc: "Discreet, high-level protection and logistical support for absolute peace of mind.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOGY2stkND1piKL4aBRc6JlWwCqTI0nKPgfQl-gQk_UiaUgcRhsa6o4upGuiy1DS3YcLYy6wP3nkSTn96ODQvLVIjO_eNV8CsagMZWhIL6La-Z04VHNx3NcjUSItORq2DtAP5wyfM5UCcBqoHQtrhSyYXzqTGLneK8VJ8vzHb9hncpYmg1dkDyb-dsAr0uxWy-b1Di2FwFmkL7LEGP9HAoFdHIfufTJIEgaY1MgWCF3Pl2B6XqE8F-_ZdUB4m_8_gv94I6fj" },
          ].map((card) => (
            <div key={card.title} className={"group overflow-hidden relative " + card.cols + " " + card.aspect}>
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={card.src} alt={card.title} data-placeholder="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="font-serif text-headline-md mb-2">{card.title}</h3>
                <p className="font-sans text-body-md opacity-80 max-w-md">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-container py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="font-serif text-headline-lg mb-8">Unrivaled Benefits for Elite Partners.</h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-8">We do not just provide a platform; we build long-term strategic alliances that elevate your brand and optimise your operations.</p>
              <div className="space-y-6">
                {[
                  { icon: "public", title: "Global Reach", desc: "Instant access to our network of high-net-worth individuals and corporate clients worldwide." },
                  { icon: "integration_instructions", title: "Seamless Integration", desc: "Direct API access and dedicated support to sync your inventory and booking flows effortlessly." },
                  { icon: "verified_user", title: "Trusted Ecosystem", desc: "Operate within a vetted environment where excellence is the baseline and security is paramount." },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">{b.icon}</span>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-primary mb-1">{b.title}</h4>
                      <p className="font-sans text-body-md text-on-surface-variant">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="aspect-square p-8 bg-surface border border-outline-variant/20">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLIdwEPRy7sYU3BplHHfX_QQFN7N6NmZalx42hx69RYDNaT4eM7Po2VsLJuHanUCFiEduafs2zo9AmkkChi9FPijoSfs20PVV3M7a8T002KUre9SYk-pt_JGa0QQWhrr6ifwZmWoy5YzDSE3EVWa3w3ZVvNbQBVUWh5likJ3uc5TF0ijbbi01TBO2r5QOAKcuHK3kK4uLfavE9Q46CsJgjqbkkTImBMBXNXW1O_UVd4q8t8HWQiQpVj_pmSNs_hnObpHzUbcwOa4CE" alt="Partnership meeting" data-placeholder="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="apply">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <h2 className="font-serif text-headline-md mb-6">Partner Application</h2>
            <p className="font-sans text-body-md text-on-surface-variant mb-8">Ready to elevate your business? Complete our professional application form. Our partnerships team will review your submission and contact you within 48 hours.</p>
            <div className="p-8 bg-surface-container-low border border-outline-variant/20">
              <h4 className="font-label-caps text-label-caps text-primary mb-4">Contact Team</h4>
              <p className="font-sans text-body-md text-on-surface-variant">partnerships@opulentvault.com</p>
              <p className="font-sans text-body-md text-on-surface-variant">+44 (0) 20 7946 0123</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            {submitted ? (
              <div className="bg-surface-container-low border border-secondary/30 p-16 text-center">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">check_circle</span>
                <h3 className="font-serif text-headline-md text-primary mb-4">Application Received</h3>
                <p className="font-sans text-body-lg text-on-surface-variant">Thank you for your interest. Our partnerships team will review your application and contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 bg-white p-12 border border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input id="full_name" className="w-full bg-transparent border-b border-outline/30 py-4 font-sans placeholder:text-outline focus:ring-0 outline-none" placeholder="Full Name" type="text" required />
                  <input id="company_name" className="w-full bg-transparent border-b border-outline/30 py-4 font-sans placeholder:text-outline focus:ring-0 outline-none" placeholder="Company Name" type="text" required />
                  <select id="industry" className="w-full bg-transparent border-b border-outline/30 py-4 font-sans text-on-surface-variant focus:ring-0 appearance-none outline-none">
                    <option value="">Industry</option>
                    <option value="property">Property &amp; Real Estate</option>
                    <option value="aviation">Aviation &amp; Jets</option>
                    <option value="mobility">Luxury Mobility</option>
                    <option value="security">Security &amp; Protection</option>
                    <option value="experience">Concierge &amp; Experiences</option>
                  </select>
                  <input id="email" className="w-full bg-transparent border-b border-outline/30 py-4 font-sans placeholder:text-outline focus:ring-0 outline-none" placeholder="Professional Email" type="email" required />
                </div>
                <textarea id="message" className="w-full bg-transparent border-b border-outline/30 py-4 font-sans placeholder:text-outline focus:ring-0 resize-none outline-none" placeholder="How can we help you grow?" rows={4} />
                <button className="w-full md:w-auto bg-primary text-on-primary px-16 py-4 font-label-caps text-label-caps hover:bg-secondary transition-all" type="submit" disabled={loading}>
                  {loading ? "Processing..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}