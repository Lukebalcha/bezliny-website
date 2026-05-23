"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    try {
      // Send to Web3Forms (delivers to contact@bezliny.com)
      const web3Data = new FormData();
      web3Data.append("access_key", "f3e7a8d2-1b4c-4e5f-9a6b-8c7d0e1f2a3b");
      web3Data.append("subject", `New Quote Request: ${company || name}`);
      web3Data.append("from_name", "Bezliny Website");
      web3Data.append("name", name);
      web3Data.append("email", email);
      web3Data.append("company", company);
      web3Data.append("message", message);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data,
      }).catch(() => {});

      // Also send to Zoho CRM via email (creates a trackable lead)
      const mailtoBody = encodeURIComponent(
        `NEW LEAD FROM WEBSITE\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}\n\n---\nSource: bezliny.com contact form\nTimestamp: ${new Date().toISOString()}`
      );
      const mailtoLink = `mailto:contact@bezliny.com?subject=${encodeURIComponent(`[LEAD] ${company || name} - Website Quote Request`)}&body=${mailtoBody}`;
      
      // Open mailto as fallback delivery
      window.open(mailtoLink, "_self");
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-[#111]">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#c8cdd3]/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#c8cdd3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Request Received</h3>
          <p className="mt-2 text-white/75">Our team will respond within 24 hours with a detailed assessment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-white/80 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Business Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Company / Building</label>
            <input
              type="text"
              name="company"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="Company or building name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Project Details</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors resize-none"
              placeholder="Building type, height, frequency needed..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-[#09090b] font-semibold rounded-xl hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,199,255,0.3)] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Request Free Assessment"}
          </button>
          <p className="text-center text-[10px] text-white/30 mt-3">Your inquiry is tracked in our CRM — expect a response within 24h</p>
        </form>
      )}
    </div>
  );
}
