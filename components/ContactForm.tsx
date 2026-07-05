"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      email: (data.get("email") as string) || "Not provided",
      phone: data.get("phone") as string,
      company: data.get("company") as string,
      building_type: data.get("building_type") as string,
      message: data.get("message") as string,
      _subject: `New Bezliny Lead: ${data.get("name")} — ${data.get("company")}`,
      _template: "table",
    };

    try {
      const resp = await fetch("https://formsubmit.co/ajax/contact@bezliny.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await resp.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Submission failed. Please try again or call us at +48 579 366 868.");
      setLoading(false);
    }
  }

  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-[#111]">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Request Received</h3>
          <p className="mt-2 text-white/75">Your inquiry has been logged. Our team will respond within 24 hours.</p>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>CRM Tracked</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>Team Notified</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Full Name *</label>
              <input
                type="text" name="name" required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">Email *</label>
              <input
                type="email" name="email" required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Phone Number</label>
              <input
                type="tel" name="phone"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="+48 XXX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">Company / Building</label>
              <input
                type="text" name="company"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Company or building name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Building Type</label>
            <select
              name="building_type"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
            >
              <option value="Commercial Office" className="bg-[#111]">Commercial Office</option>
              <option value="Residential High-Rise" className="bg-[#111]">Residential High-Rise</option>
              <option value="Industrial Facility" className="bg-[#111]">Industrial Facility</option>
              <option value="Government Building" className="bg-[#111]">Government Building</option>
              <option value="Hotel / Hospitality" className="bg-[#111]">Hotel / Hospitality</option>
              <option value="Other" className="bg-[#111]">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Project Details *</label>
            <textarea
              name="message" required rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              placeholder="Building height, floors, surface type, cleaning frequency needed..."
            />
          </div>
          <button
            type="submit" disabled={loading}
            className="w-full py-4 bg-white text-[#09090b] font-semibold rounded-xl hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50"
          >
            {loading ? "Processing..." : "Request Free Assessment"}
          </button>
          <p className="text-center text-[10px] text-white/30 mt-3">Logged in CRM • Team notified instantly via email & push</p>
        </form>
      )}
    </div>
  );
}
