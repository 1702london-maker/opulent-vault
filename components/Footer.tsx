"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source_page: "footer" }),
      });
      setSubscribed(true);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-primary text-on-primary">
      {/* Pre-footer */}
      <div className="border-b border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim block mb-3 uppercase">
              OPV Circle
            </span>
            <h2 className="font-serif text-headline-md text-on-primary mb-3">Stay Inspired</h2>
            <p className="font-sans text-body-md text-on-primary/70">
              Receive destination guides, luxury travel inspiration, member-only offers and exclusive
              experiences across the UK and Europe.
            </p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-3 text-secondary-fixed-dim font-label-caps text-label-caps uppercase">
              <span className="material-symbols-outlined">check_circle</span>
              Welcome to the OPV Circle.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-transparent border border-white/20 border-r-0 px-6 py-4 font-sans text-body-md text-on-primary placeholder:text-on-primary/40 focus:outline-none focus:border-secondary-fixed-dim w-full md:w-72"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-on-primary text-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors shrink-0 disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-on-primary flex items-center justify-center">
                <span className="text-primary font-serif text-[10px] font-bold tracking-widest">OPV</span>
              </div>
              <span className="font-serif text-lg font-semibold text-on-primary">Opulent Vault</span>
            </div>
            <p className="font-sans text-sm text-on-primary/60 mb-6 leading-relaxed">
              A curated luxury lifestyle ecosystem delivering world-class properties, private aviation,
              chauffeur services, and bespoke concierge across the UK and Europe.
            </p>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Our Story", href: "/about#story" },
                { label: "Luxury Standards", href: "/about#standards" },
                { label: "Careers", href: "/about#careers" },
                { label: "Press", href: "/about#press" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-sm text-on-primary/60 hover:text-on-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <p className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase mb-6">Explore</p>
            <ul className="space-y-2">
              {[
                { label: "Stays", href: "/stays" },
                { label: "Destinations", href: "/destinations" },
                { label: "Drive", href: "/drive" },
                { label: "Aviation", href: "/aviation" },
                { label: "Security", href: "/security" },
                { label: "Concierge", href: "/concierge" },
                { label: "Experiences", href: "/experiences" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-sm text-on-primary/60 hover:text-on-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase mb-6">Partners & Affiliates</p>
            <ul className="space-y-2">
              {[
                { label: "Become A Partner", href: "/partners#apply" },
                { label: "Property Partners", href: "/partners#property" },
                { label: "Vehicle Partners", href: "/partners#vehicle" },
                { label: "Aviation Partners", href: "/partners#aviation" },
                { label: "Security Partners", href: "/partners#security" },
                { label: "Affiliate Programme", href: "/affiliates#overview" },
                { label: "Partner Login", href: "/partners#login" },
                { label: "Affiliate Login", href: "/affiliates#login" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-sm text-on-primary/60 hover:text-on-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <p className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase mb-6">Join The OPV Circle</p>
            {subscribed ? (
              <p className="font-sans text-sm text-on-primary/60">You&apos;re subscribed. Thank you.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-white/20 pb-3 mb-3 font-sans text-sm text-on-primary placeholder:text-on-primary/40 focus:outline-none focus:border-secondary-fixed-dim transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="font-label-caps text-label-caps text-secondary-fixed-dim hover:text-on-primary transition-colors uppercase"
                >
                  Subscribe →
                </button>
              </form>
            )}
            <div className="flex gap-4">
              {["instagram", "facebook", "linkedin", "tiktok", "youtube"].map((s) => (
                <a
                  key={s}
                  href={`https://${s}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-secondary-fixed-dim transition-colors"
                  aria-label={s}
                >
                  <span className="material-symbols-outlined text-sm text-on-primary/60">link</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-on-primary/40">
            © Opulent Vault. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms and Conditions", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Sitemap", href: "/sitemap" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="font-sans text-xs text-on-primary/40 hover:text-on-primary/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
