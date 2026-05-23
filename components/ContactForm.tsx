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

    // Send via Web3Forms (free, no backend needed)
    data.append("access_key", "YOUR_KEY_PLACEHOLDER");
    data.append("subject", "New inquiry from bezliny.com");
    data.append("from_name", "Bezliny Website");

    try {
      // Fallback: open mailto with form data
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const company = data.get("company") as string;
      const message = data.get("message") as string;

      const mailtoBody = `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      const mailtoLink = `mailto:contact@bezliny.com?subject=Website Inquiry from ${encodeURIComponent(name)}&body=${mailtoBody}`;
      
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
          <h3 className="text-xl font-semibold">Message Sent</h3>
          <p className="mt-2 text-white/75">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-white/80 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Company</label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors"
              placeholder="Company name (optional)"
            />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8cdd3]/50 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-[#09090b] font-semibold rounded-xl hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,199,255,0.3)] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
