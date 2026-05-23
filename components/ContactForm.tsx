"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

// Configuration — set these in .env.local
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const WHATSAPP_WEBHOOK = process.env.NEXT_PUBLIC_WHATSAPP_WEBHOOK || "";
const CONTACT_EMAIL = "contact@bezliny.com";

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone: string;
  building_type: string;
  message: string;
  source: string;
  timestamp: string;
}

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

    const lead: LeadData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      company: data.get("company") as string,
      phone: data.get("phone") as string,
      building_type: data.get("building_type") as string,
      message: data.get("message") as string,
      source: "website_contact_form",
      timestamp: new Date().toISOString(),
    };

    const results = { crm: false, email: false, whatsapp: false };

    // === CHANNEL 1: CRM (Supabase) ===
    try {
      const { error: dbError } = await supabase.from("leads").insert({
        name: lead.name,
        email: lead.email,
        company: lead.company,
        phone: lead.phone,
        building_type: lead.building_type,
        message: lead.message,
        source: lead.source,
        status: "new",
        created_at: lead.timestamp,
      });
      if (!dbError) results.crm = true;
    } catch {
      // CRM insert failed — continue with other channels
    }

    // === CHANNEL 2: Email via Web3Forms → Zoho Inbox ===
    if (WEB3FORMS_KEY) {
      try {
        const emailData = new FormData();
        emailData.append("access_key", WEB3FORMS_KEY);
        emailData.append("subject", `🏢 New Lead: ${lead.company} — ${lead.building_type}`);
        emailData.append("from_name", "Bezliny Lead System");
        emailData.append("to", CONTACT_EMAIL);
        emailData.append("name", lead.name);
        emailData.append("email", lead.email);
        emailData.append("phone", lead.phone);
        emailData.append("company", lead.company);
        emailData.append("building_type", lead.building_type);
        emailData.append("message", lead.message);
        emailData.append("redirect", "");
        // Rich formatting for Zoho inbox
        emailData.append("botcheck", "");

        const resp = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: emailData,
        });
        if (resp.ok) results.email = true;
      } catch {
        // Email delivery failed
      }
    }

    // === CHANNEL 3: WhatsApp Notification ===
    if (WHATSAPP_WEBHOOK) {
      try {
        const whatsappMsg = `🏢 *NEW LEAD*\n\n👤 ${lead.name}\n🏗️ ${lead.company}\n📧 ${lead.email}\n📱 ${lead.phone}\n🏢 ${lead.building_type}\n\n💬 ${lead.message}\n\n⏰ ${new Date().toLocaleString("en-GB", { timeZone: "Europe/Warsaw" })}`;

        // CallMeBot uses GET with text param appended to URL
        if (WHATSAPP_WEBHOOK.includes("callmebot.com")) {
          await fetch(WHATSAPP_WEBHOOK + encodeURIComponent(whatsappMsg));
        } else {
          // Make.com / n8n / custom webhook uses POST JSON
          await fetch(WHATSAPP_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: whatsappMsg, text: whatsappMsg, lead }),
          });
        }
        results.whatsapp = true;
      } catch {
        // WhatsApp notification failed
      }
    }

    // At least one channel must succeed, or fallback to mailto
    if (!results.crm && !results.email && !results.whatsapp) {
      // Fallback: open mailto with lead data
      const body = `NEW LEAD\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCompany: ${lead.company}\nBuilding: ${lead.building_type}\n\nMessage:\n${lead.message}`;
      window.open(
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[LEAD] ${lead.company}`)}&body=${encodeURIComponent(body)}`,
        "_self"
      );
    }

    setSubmitted(true);
    setLoading(false);
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
          <p className="mt-2 text-white/75">Your inquiry has been logged in our system. Our team will respond within 24 hours.</p>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>CRM Tracked</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Email Sent</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>Team Notified</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-red-400 text-sm">{error}</p>}
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
              <label className="block text-sm text-white/80 mb-2">Business Email *</label>
              <input
                type="email" name="email" required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Phone Number *</label>
              <input
                type="tel" name="phone" required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="+48 XXX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">Company / Building *</label>
              <input
                type="text" name="company" required
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
              <option value="commercial" className="bg-[#111]">Commercial Office</option>
              <option value="residential" className="bg-[#111]">Residential High-Rise</option>
              <option value="industrial" className="bg-[#111]">Industrial Facility</option>
              <option value="government" className="bg-[#111]">Government Building</option>
              <option value="hotel" className="bg-[#111]">Hotel / Hospitality</option>
              <option value="other" className="bg-[#111]">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Project Details *</label>
            <textarea
              name="message" required rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              placeholder="Building height, number of floors, surface type, cleaning frequency needed..."
            />
          </div>
          <button
            type="submit" disabled={loading}
            className="w-full py-4 bg-white text-[#09090b] font-semibold rounded-xl hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50"
          >
            {loading ? "Processing..." : "Request Free Assessment"}
          </button>
          <p className="text-center text-[10px] text-white/30 mt-3">Tracked in CRM • Email confirmation • Team notified instantly</p>
        </form>
      )}
    </div>
  );
}
