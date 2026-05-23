"use client";

import { motion } from "framer-motion";

const certs = [
  { name: "ISO 9001:2015", desc: "Quality Management", type: "certified" },
  { name: "ISO 14001", desc: "Environmental Management", type: "certified" },
  { name: "EASA Compliant", desc: "EU Aviation Safety", type: "compliant" },
  { name: "ULC Certified", desc: "Polish Civil Aviation", type: "certified" },
  { name: "PANSA Registered", desc: "Air Navigation Services", type: "registered" },
  { name: "CE Marking", desc: "European Conformity", type: "certified" },
  { name: "ATEX Zone 1", desc: "Explosive Atmospheres", type: "rated" },
  { name: "IP67 Rated", desc: "Dust & Water Proof", type: "rated" },
];

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Compliance</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]">Certifications & Standards</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-4 md:p-6 rounded-xl border border-white/[0.04] hover:border-white/[0.1] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500 text-center group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-cyan-400/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xs md:text-sm font-semibold text-white/80">{cert.name}</h4>
              <p className="text-[10px] md:text-xs text-white/40 mt-1">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
