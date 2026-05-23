"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const cities = [
  { name: "Warsaw", x: 54, y: 32, active: true },
  { name: "Stockholm", x: 51, y: 24, active: false },
  { name: "Oslo", x: 48, y: 22, active: false },
  { name: "Berlin", x: 50, y: 33, active: false },
  { name: "London", x: 44, y: 33, active: false },
  { name: "Dubai", x: 62, y: 52, active: false },
  { name: "Singapore", x: 76, y: 62, active: false },
  { name: "Copenhagen", x: 49, y: 27, active: false },
  { name: "Amsterdam", x: 46, y: 32, active: false },
  { name: "Paris", x: 45, y: 36, active: false },
  { name: "Riyadh", x: 60, y: 52, active: false },
  { name: "Houston", x: 22, y: 48, active: false },
];

export default function GlobalMap() {
  const { locale } = useLang();
  const labelText = locale === "pl" ? "Mapa Ekspansji" : "Expansion Roadmap";
  const titleText = locale === "pl" ? "Ekspansja Globalna" : "Going Global";
  const descText = locale === "pl" ? "Siedziba w Warszawie — ekspansja na każdy główny hub przemysłowy na świecie" : "Headquartered in Warsaw — expanding to every major industrial hub worldwide";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0b0d] to-[#09090b]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/50 inline-block"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {labelText}
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {titleText}
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {descText}
          </motion.p>
        </motion.div>

        {/* Map container */}
        <div className="relative aspect-[2/1] max-w-5xl mx-auto">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "10% 10%"
          }} />

          {/* Radial expansion rings from Warsaw */}
          <motion.div
            className="absolute rounded-full border border-cyan-400/10"
            style={{ left: "54%", top: "32%", width: "20%", height: "40%", transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full border border-cyan-400/10"
            style={{ left: "54%", top: "32%", width: "20%", height: "40%", transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
          />
          <motion.div
            className="absolute rounded-full border border-cyan-400/10"
            style={{ left: "54%", top: "32%", width: "20%", height: "40%", transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2.6 }}
          />

          {/* City markers */}
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              className="absolute"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
            >
              {/* Pulse ring for HQ */}
              {city.active && (
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-cyan-400/40"
                  animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full ${city.active ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" : "bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.2)]"}`} />
              {/* Label */}
              <span className={`absolute left-4 top-[-2px] text-[10px] md:text-[11px] font-medium whitespace-nowrap ${city.active ? "text-cyan-400" : "text-white/50"}`}>
                {city.name}
                {city.active && <span className="ml-1 text-[8px] text-cyan-400/60">({locale === "pl" ? "Siedziba" : "HQ"})</span>}
              </span>
            </motion.div>
          ))}

          {/* Connection lines from HQ to expansion targets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60">
            {cities.filter(c => !c.active).map((city, i) => (
              <motion.line
                key={city.name}
                x1={54} y1={32}
                x2={city.x} y2={city.y}
                stroke="rgba(34,211,238,0.08)"
                strokeWidth="0.15"
                strokeDasharray="1 1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15, duration: 1.2 }}
              />
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <span className="text-[10px] text-white/60 uppercase tracking-wider">{locale === "pl" ? "Siedziba główna" : "Headquarters"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <span className="text-[10px] text-white/60 uppercase tracking-wider">{locale === "pl" ? "Cele ekspansji 2025–2027" : "Expansion Targets 2025–2027"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
