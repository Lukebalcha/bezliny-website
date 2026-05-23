"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const pressItemsEn = [
  { source: "Industry", title: "Global Façade Cleaning Market Projected to Reach $50B by 2030", date: "2025" },
  { source: "EU Policy", title: "European Green Deal Drives Demand for Chemical-Free Maintenance", date: "2025" },
  { source: "Aviation", title: "EASA Expands Commercial Drone Operations Framework Across EU", date: "2024" },
  { source: "Energy", title: "Wind Turbine Fleet Maintenance Costs Reduced 40% with Autonomous Systems", date: "2024" },
];

const pressItemsPl = [
  { source: "Branża", title: "Globalny rynek czyszczenia fasad osiągnie $50 mld do 2030", date: "2025" },
  { source: "Polityka UE", title: "Europejski Zielony Ład napędza popyt na bezchemiczną konserwację", date: "2025" },
  { source: "Lotnictwo", title: "EASA rozszerza ramy komercyjnych operacji dronowych w UE", date: "2024" },
  { source: "Energia", title: "Koszty utrzymania turbin wiatrowych obniżone o 40% dzięki autonomii", date: "2024" },
];

export default function PressSection() {
  const { locale } = useLang();
  const pressItems = locale === "pl" ? pressItemsPl : pressItemsEn;
  const label = locale === "pl" ? "Rynek" : "Market";
  const heading = locale === "pl" ? "Informacje Branżowe" : "Industry Insights";

  return (
    <section className="py-16 md:py-24 relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
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
              className="mt-2 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {heading}
            </motion.h2>
          </div>
        </motion.div>
        <div className="space-y-3 md:space-y-4">
          {pressItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.01)" }}
              className="flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-xl border border-white/[0.03] hover:border-white/[0.08] transition-all duration-500 group cursor-pointer"
            >
              <span className="text-[10px] md:text-xs font-semibold text-cyan-400/60 uppercase tracking-wider shrink-0 w-20 md:w-28">{item.source}</span>
              <span className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors flex-1">{item.title}</span>
              <span className="text-[10px] text-white/30 shrink-0">{item.date}</span>
              <motion.div
                className="shrink-0"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-4 h-4 text-white/20 group-hover:text-cyan-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
