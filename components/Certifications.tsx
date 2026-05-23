"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const certsEn = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "ISO 14001", desc: "Environmental Management" },
  { name: "EASA Compliant", desc: "EU Aviation Safety" },
  { name: "ULC Certified", desc: "Polish Civil Aviation" },
  { name: "PANSA Registered", desc: "Air Navigation Services" },
  { name: "CE Marking", desc: "European Conformity" },
  { name: "ATEX Zone 1", desc: "Explosive Atmospheres" },
  { name: "IP67 Rated", desc: "Dust & Water Proof" },
];

const certsPl = [
  { name: "ISO 9001:2015", desc: "Zarządzanie jakością" },
  { name: "ISO 14001", desc: "Zarządzanie środowiskowe" },
  { name: "EASA", desc: "Bezpieczeństwo lotnicze UE" },
  { name: "ULC", desc: "Lotnictwo cywilne" },
  { name: "PANSA", desc: "Służby nawigacji powietrznej" },
  { name: "CE", desc: "Zgodność europejska" },
  { name: "ATEX Strefa 1", desc: "Atmosfery wybuchowe" },
  { name: "IP67", desc: "Pyło- i wodoszczelność" },
];

export default function Certifications() {
  const { locale } = useLang();
  const certs = locale === "pl" ? certsPl : certsEn;
  const label = locale === "pl" ? "Zgodność" : "Compliance";
  const title = locale === "pl" ? "Certyfikaty i Standardy" : "Certifications & Standards";

  return (
    <section className="py-16 md:py-24 relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 inline-block"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {label}
          </motion.span>
          <motion.h2
            className="mt-3 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.15)" }}
              className="relative p-4 md:p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center group overflow-hidden"
            >
              {/* Animated top line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 + 0.4, duration: 0.8 }}
              />
              
              {/* Shield shape using borders */}
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 relative">
                <motion.div
                  className="absolute inset-0 rounded-lg border border-white/[0.08] group-hover:border-cyan-400/30 transition-colors duration-700"
                  whileHover={{ rotate: 3 }}
                />
                <motion.div
                  className="absolute inset-[3px] rounded-md border border-white/[0.04] group-hover:border-cyan-400/15 transition-colors duration-700"
                  whileHover={{ rotate: -2 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9px] font-mono text-white/30 group-hover:text-cyan-400/60 transition-colors duration-500">✓</span>
                </div>
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
