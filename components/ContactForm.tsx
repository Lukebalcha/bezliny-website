"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-[#111]">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#10b981]/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Message Sent</h3>
          <p className="mt-2 text-white/50">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <div>
            <label className="block text-sm text-white/60 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#10b981]/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#10b981]/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Company</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#10b981]/50 transition-colors"
              placeholder="Company name (optional)"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#10b981]/50 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-white text-[#09090b] font-semibold rounded-xl hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,199,255,0.3)]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
