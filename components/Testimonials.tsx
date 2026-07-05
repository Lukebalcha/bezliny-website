"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Bezliny transformed our maintenance schedule. What took scaffolding teams a week, their drones complete in hours.",
    author: "Operations Director",
    company: "Property Management Firm",
    sector: "Commercial Real Estate",
  },
  {
    quote: "The precision and safety record is unmatched. Zero incidents across all our contracted operations.",
    author: "Facility Manager",
    company: "Energy Sector Client",
    sector: "Renewable Energy",
  },
  {
    quote: "Cost reduction exceeded projections. We've allocated the savings into additional preventive maintenance cycles.",
    author: "Infrastructure Lead",
    company: "Municipal Authority",
    sector: "Government",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0b0e] to-[#09090b]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Client Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-[#111113]/50"
            >
              <svg className="w-8 h-8 text-white/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/80 text-sm md:text-base leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-white/[0.04]">
                <div className="text-sm font-medium text-white/70">{t.author}</div>
                <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{t.sector}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
