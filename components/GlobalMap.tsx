"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

/* Properly spaced global cities on a world-map-style layout */
const cities = [
  { name: "Warsaw", x: 55, y: 28, active: true, region: "EU" },
  { name: "Stockholm", x: 53, y: 15, active: false, region: "EU" },
  { name: "Oslo", x: 49, y: 13, active: false, region: "EU" },
  { name: "Copenhagen", x: 51, y: 20, active: false, region: "EU" },
  { name: "Berlin", x: 52, y: 30, active: false, region: "EU" },
  { name: "London", x: 43, y: 27, active: false, region: "EU" },
  { name: "Amsterdam", x: 46, y: 25, active: false, region: "EU" },
  { name: "Paris", x: 44, y: 34, active: false, region: "EU" },
  { name: "Dubai", x: 68, y: 55, active: false, region: "ME" },
  { name: "Riyadh", x: 65, y: 58, active: false, region: "ME" },
  { name: "Singapore", x: 82, y: 72, active: false, region: "APAC" },
  { name: "Houston", x: 18, y: 52, active: false, region: "US" },
  { name: "New York", x: 24, y: 35, active: false, region: "US" },
  { name: "Tokyo", x: 88, y: 35, active: false, region: "APAC" },
  { name: "Sydney", x: 90, y: 82, active: false, region: "APAC" },
];

export default function GlobalMap() {
  const { locale } = useLang();
  const labelText = locale === "pl" ? "Zasięg Globalny" : "Global Reach";
  const titleText = locale === "pl" ? "Ekspansja na Skalę Światową" : "Worldwide Expansion";
  const descText =
    locale === "pl"
      ? "Z głównej siedziby w Warszawie docieramy do głównych hubów przemysłowych na 4 kontynentach"
      : "From our Warsaw headquarters, reaching major industrial hubs across 4 continents";

  const hqCity = cities.find((c) => c.active)!;

  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0c1825_0%,#050a0f_50%,#000000_100%)]" />
      {/* Subtle starfield dots */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.2) 0%, transparent 100%)`,
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/70 inline-block font-medium"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.35em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {labelText}
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-6xl font-bold font-[family-name:var(--font-space)] bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {titleText}
          </motion.h2>
          <motion.p
            className="mt-5 text-white/50 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {descText}
          </motion.p>
        </motion.div>

        {/* 3D Perspective Map Container */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          style={{ perspective: "1200px" }}
          initial={{ opacity: 0, rotateX: 8 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative aspect-[2.2/1] rounded-2xl border border-cyan-400/10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(6,20,35,0.9) 0%, rgba(3,10,18,0.95) 100%)",
              boxShadow: "0 0 80px rgba(34,211,238,0.05), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            {/* Animated grid with glow */}
            <div className="absolute inset-0 opacity-[0.07]" style={{
              backgroundImage: `linear-gradient(to right, rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.5) 1px, transparent 1px)`,
              backgroundSize: "8% 12%",
            }} />

            {/* Radial glow from HQ */}
            <div
              className="absolute"
              style={{
                left: `${hqCity.x}%`,
                top: `${hqCity.y}%`,
                width: "40%",
                height: "60%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Animated pulse rings from HQ */}
            {[0, 1.5, 3].map((delay, idx) => (
              <motion.div
                key={idx}
                className="absolute rounded-full border border-cyan-400/20"
                style={{
                  left: `${hqCity.x}%`,
                  top: `${hqCity.y}%`,
                  width: "12%",
                  height: "24%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ scale: [1, 3, 5], opacity: [0.4, 0.15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay }}
              />
            ))}

            {/* Connection lines - SVG with animated glowing arcs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.7)" />
                  <stop offset="50%" stopColor="rgba(34,211,238,0.3)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.7)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {cities.filter((c) => !c.active).map((city, i) => {
                const midX = (hqCity.x + city.x) / 2;
                const midY = Math.min(hqCity.y, city.y) - 8 - Math.abs(city.x - hqCity.x) * 0.12;
                return (
                  <motion.path
                    key={city.name}
                    d={`M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="0.25"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}
              {/* Animated traveling particles along the arcs */}
              {cities.filter((c) => !c.active).map((city, i) => {
                const midX = (hqCity.x + city.x) / 2;
                const midY = Math.min(hqCity.y, city.y) - 8 - Math.abs(city.x - hqCity.x) * 0.12;
                return (
                  <motion.circle
                    key={`particle-${city.name}`}
                    r="0.4"
                    fill="rgba(34,211,238,0.9)"
                    filter="url(#glow)"
                  >
                    <animateMotion
                      dur={`${3 + i * 0.3}s`}
                      repeatCount="indefinite"
                      path={`M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`}
                      begin={`${i * 0.4}s`}
                    />
                  </motion.circle>
                );
              })}
            </svg>

            {/* City markers */}
            {cities.map((city, i) => (
              <motion.div
                key={city.name}
                className="absolute z-10"
                style={{ left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, type: "spring", stiffness: 300 }}
              >
                {/* HQ outer glow */}
                {city.active && (
                  <>
                    <motion.div
                      className="absolute rounded-full bg-cyan-400/20"
                      style={{ width: 32, height: 32, left: -12, top: -12 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute rounded-full border-2 border-cyan-400/50"
                      style={{ width: 24, height: 24, left: -8, top: -8 }}
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </>
                )}
                {/* Dot */}
                <div
                  className={`rounded-full relative ${
                    city.active
                      ? "w-[10px] h-[10px] bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1),0_0_40px_rgba(34,211,238,0.5)]"
                      : "w-[7px] h-[7px] bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  }`}
                />
                {/* Label */}
                <span
                  className={`absolute whitespace-nowrap font-medium ${
                    city.active
                      ? "text-[11px] md:text-[13px] text-cyan-300 font-semibold left-5 top-[-4px]"
                      : "text-[9px] md:text-[11px] text-white/70 left-4 top-[-3px]"
                  }`}
                >
                  {city.name}
                  {city.active && (
                    <span className="ml-1.5 text-[9px] text-cyan-400/80 font-normal">
                      ({locale === "pl" ? "Siedziba" : "HQ"})
                    </span>
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend + Stats row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
              {locale === "pl" ? "Siedziba Główna" : "Headquarters"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
              {locale === "pl" ? "Cele Ekspansji 2025–2028" : "Expansion Targets 2025–2028"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-[2px] bg-gradient-to-r from-cyan-400/80 to-cyan-400/20 rounded" />
            <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
              {locale === "pl" ? "Trasy Operacyjne" : "Operational Routes"}
            </span>
          </div>
        </motion.div>

        {/* Continent count badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { label: locale === "pl" ? "Europa" : "Europe", count: 8 },
            { label: locale === "pl" ? "Bliski Wschód" : "Middle East", count: 2 },
            { label: locale === "pl" ? "Azja-Pacyfik" : "Asia-Pacific", count: 3 },
            { label: locale === "pl" ? "Ameryka Północna" : "North America", count: 2 },
          ].map((region) => (
            <div
              key={region.label}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm"
            >
              <span className="text-cyan-300 text-sm font-bold mr-2">{region.count}</span>
              <span className="text-white/50 text-[10px] uppercase tracking-wider">{region.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
