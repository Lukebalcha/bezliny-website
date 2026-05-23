"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const certsEn = [
  { name: "ISO 9001:2015", desc: "Quality Management System", issuer: "International Organization for Standardization" },
  { name: "ISO 14001", desc: "Environmental Management", issuer: "International Organization for Standardization" },
  { name: "EASA Compliant", desc: "European Aviation Safety Certified", issuer: "European Union Aviation Safety Agency" },
  { name: "ULC Certified", desc: "Polish Civil Aviation Authority", issuer: "Urząd Lotnictwa Cywilnego" },
  { name: "PANSA Registered", desc: "Air Navigation & Operations Cleared", issuer: "Polish Air Navigation Services Agency" },
  { name: "CE Marking", desc: "European Conformity Declaration", issuer: "European Economic Area" },
  { name: "ATEX Zone 1", desc: "Explosive Atmosphere Rated", issuer: "EU Directive 2014/34/EU" },
  { name: "IP67 Rated", desc: "Full Dust & Water Immersion Proof", issuer: "IEC Standard 60529" },
];

const certsPl = [
  { name: "ISO 9001:2015", desc: "System zarządzania jakością", issuer: "Międzynarodowa Organizacja Normalizacyjna" },
  { name: "ISO 14001", desc: "Zarządzanie środowiskowe", issuer: "Międzynarodowa Organizacja Normalizacyjna" },
  { name: "EASA", desc: "Europejski certyfikat bezpieczeństwa lotniczego", issuer: "Europejska Agencja Bezpieczeństwa Lotniczego" },
  { name: "ULC", desc: "Urząd Lotnictwa Cywilnego", issuer: "Polska autoryzacja lotnicza" },
  { name: "PANSA", desc: "Zezwolenie na operacje nawigacyjne", issuer: "Polska Agencja Żeglugi Powietrznej" },
  { name: "CE", desc: "Deklaracja zgodności europejskiej", issuer: "Europejski Obszar Gospodarczy" },
  { name: "ATEX Strefa 1", desc: "Certyfikat atmosfer wybuchowych", issuer: "Dyrektywa UE 2014/34/UE" },
  { name: "IP67", desc: "Pełna pyło- i wodoszczelność", issuer: "Norma IEC 60529" },
];

export default function Certifications() {
  const { locale } = useLang();
  const certs = locale === "pl" ? certsPl : certsEn;
  const label = locale === "pl" ? "Zgodność i regulacje" : "Compliance & Regulatory";
  const title = locale === "pl" ? "Certyfikaty i Licencje" : "Certifications & Licenses";
  const subtitle = locale === "pl"
    ? "Pełna dokumentacja zgodności — każda operacja spełnia wymogi UE i krajowe"
    : "Full regulatory documentation — every operation meets EU and national requirements";

  return (
    <section className="py-20 md:py-32 relative border-t border-white/[0.03]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0c10] to-[#09090b]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 inline-block"
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
          <motion.p
            className="mt-4 text-white/50 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, borderColor: "rgba(34,211,238,0.2)" }}
              className="relative p-5 md:p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] group overflow-hidden transition-all duration-500"
            >
              {/* Top gradient line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 + 0.4, duration: 0.8 }}
              />
              
              {/* Shield icon */}
              <div className="w-10 h-10 md:w-11 md:h-11 mx-auto mb-3 relative flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-cyan-400/60 group-hover:text-cyan-400/90 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2l8 4v6c0 5.5-3.8 8.2-8 10-4.2-1.8-8-4.5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h4 className="text-xs md:text-sm font-bold text-white/90 text-center">{cert.name}</h4>
              <p className="text-[10px] md:text-[11px] text-white/50 mt-1.5 text-center leading-relaxed">{cert.desc}</p>
              <p className="text-[8px] md:text-[9px] text-white/25 mt-2 text-center uppercase tracking-wider">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
