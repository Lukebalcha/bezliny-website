"use client";

import { motion } from "framer-motion";

const cities = [
  { name: "Warsaw", x: 54, y: 32, active: true },
  { name: "Stockholm", x: 51, y: 24, active: true },
  { name: "Oslo", x: 48, y: 22, active: true },
  { name: "Berlin", x: 50, y: 33, active: true },
  { name: "London", x: 44, y: 33, active: false },
  { name: "Dubai", x: 62, y: 52, active: false },
  { name: "Singapore", x: 76, y: 62, active: false },
  { name: "Copenhagen", x: 49, y: 27, active: true },
  { name: "Amsterdam", x: 46, y: 32, active: false },
  { name: "Paris", x: 45, y: 36, active: false },
  { name: "Riyadh", x: 60, y: 52, active: false },
  { name: "Houston", x: 22, y: 48, active: false },
];

export default function GlobalMap() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0b0d] to-[#09090b]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Global Presence</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Operational Network</h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto">Strategic positions across key industrial hubs worldwide</p>
        </div>

        {/* Map container */}
        <div className="relative aspect-[2/1] max-w-5xl mx-auto">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "10% 10%"
          }} />

          {/* World outline (simplified) */}
          <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
            <path
              d="M15,25 Q20,20 25,22 L30,20 Q35,18 38,22 L40,28 Q42,30 44,30 L48,28 Q50,26 52,26 L56,28 Q58,30 60,28 L62,26 Q65,24 68,26 L72,30 Q75,32 78,30 L82,28 Q85,30 86,34 L84,38 Q80,42 76,44 L70,46 Q65,48 60,46 L55,44 Q50,42 48,44 L44,46 Q40,48 36,46 L30,42 Q25,38 22,36 L18,32 Q15,28 15,25"
              fill="none"
              stroke="white"
              strokeWidth="0.15"
              opacity="0.2"
            />
          </svg>

          {/* City markers */}
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              className="absolute"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Pulse ring */}
              {city.active && (
                <motion.div
                  className="absolute -inset-3 rounded-full border border-cyan-400/30"
                  animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              )}
              {/* Dot */}
              <div className={`w-2 h-2 rounded-full ${city.active ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "bg-white/30"}`} />
              {/* Label */}
              <span className={`absolute left-3 top-[-4px] text-[9px] md:text-[10px] whitespace-nowrap ${city.active ? "text-cyan-400/80" : "text-white/30"}`}>
                {city.name}
              </span>
            </motion.div>
          ))}

          {/* Connection lines between active cities */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60">
            {cities.filter(c => c.active).slice(0, -1).map((city, i) => {
              const next = cities.filter(c => c.active)[i + 1];
              if (!next) return null;
              return (
                <motion.line
                  key={`${city.name}-${next.name}`}
                  x1={city.x}
                  y1={city.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="rgba(34,211,238,0.15)"
                  strokeWidth="0.1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Active Operations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Expanding</span>
          </div>
        </div>
      </div>
    </section>
  );
}
