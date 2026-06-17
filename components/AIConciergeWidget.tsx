"use client";

import { useState } from "react";

const CAPABILITIES = [
  { icon: "home", label: "Property Recommendations" },
  { icon: "directions_car", label: "Vehicle Recommendations" },
  { icon: "flight", label: "Private Jet Requests" },
  { icon: "security", label: "Security Bookings" },
  { icon: "concierge_service", label: "Concierge Requests" },
  { icon: "explore", label: "Experience Planning" },
  { icon: "map", label: "Travel Planning" },
  { icon: "support_agent", label: "Booking Support" },
];

export default function AIConciergeWidget() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", request: "", service: "Property Recommendations" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "concierge_request",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.request,
          payload: { service: form.service },
        }),
      });
      setSubmitted(true);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        {!open && (
          <div className="glass-panel border border-secondary/40 px-3 py-1.5 text-secondary font-label-caps text-[10px] uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            AI Concierge Online
          </div>
        )}
        <button
          onClick={() => { setOpen(!open); setFormOpen(false); setSubmitted(false); }}
          className="w-14 h-14 rounded-full bg-primary border border-secondary/60 flex items-center justify-center shadow-lg hover:bg-secondary transition-colors duration-300 group"
          aria-label="AI Concierge"
        >
          <span className="material-symbols-outlined text-on-primary text-xl">auto_awesome</span>
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-[360px] glass-panel border border-secondary/30 shadow-2xl">
          {/* Header */}
          <div className="border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-secondary text-base">auto_awesome</span>
                <span className="font-label-caps text-label-caps text-primary uppercase">AI Concierge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                <span className="font-sans text-xs text-on-surface-variant">Online — Ready to assist</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {!formOpen ? (
            <div className="p-6">
              <p className="font-sans text-sm text-on-surface-variant mb-5 leading-relaxed">
                Your personal AI-powered concierge — anticipating every need with precision. How may I assist you today?
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {CAPABILITIES.map((cap) => (
                  <button
                    key={cap.label}
                    onClick={() => { setForm((f) => ({ ...f, service: cap.label })); setFormOpen(true); }}
                    className="flex items-center gap-2 border border-outline-variant/50 px-3 py-3 text-left hover:border-secondary/60 hover:bg-secondary-container/20 transition-all group"
                  >
                    <span className="material-symbols-outlined text-secondary text-sm">{cap.icon}</span>
                    <span className="font-sans text-xs text-on-surface leading-tight">{cap.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setFormOpen(true)}
                className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Start a Request
              </button>
            </div>
          ) : submitted ? (
            <div className="p-6 text-center">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block">check_circle</span>
              <p className="font-serif text-lg text-primary mb-2">Request Received</p>
              <p className="font-sans text-sm text-on-surface-variant">
                Your concierge request has been submitted. A member of the Opulent Vault team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="mb-2">
                <span className="font-label-caps text-[10px] text-secondary uppercase">{form.service}</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  className="w-full border-b border-outline-variant focus:border-secondary bg-transparent pb-2 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full border-b border-outline-variant focus:border-secondary bg-transparent pb-2 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full border-b border-outline-variant focus:border-secondary bg-transparent pb-2 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your request..."
                  value={form.request}
                  onChange={(e) => setForm((f) => ({ ...f, request: e.target.value }))}
                  required
                  rows={3}
                  className="w-full border-b border-outline-variant focus:border-secondary bg-transparent pb-2 font-sans text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none resize-none transition-colors"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="flex-1 border border-outline-variant font-label-caps text-label-caps py-3 uppercase hover:border-primary transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps py-3 uppercase tracking-widest hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
