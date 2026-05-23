"use client";

import { motion } from "framer-motion";

const pressItems = [
  {
    source: "Tech Crunch",
    title: "How Drone Cleaning Is Disrupting a $50B Industry",
    date: "2025",
  },
  {
    source: "Bloomberg",
    title: "The Autonomous Maintenance Revolution in Europe",
    date: "2025",
  },
  {
    source: "Reuters",
    title: "Warsaw Startup Targets Global Infrastructure Cleaning Market",
    date: "2024",
  },
  {
    source: "Wired",
    title: "AI-Powered Drones: The Future of Building Maintenance",
    date: "2024",
  },
];

export default function PressSection() {
  return (
    <section className="py-16 md:py-24 relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Press</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]">In The News</h2>
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          {pressItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-xl border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-500 group cursor-pointer"
            >
              <span className="text-[10px] md:text-xs font-semibold text-cyan-400/60 uppercase tracking-wider shrink-0 w-20 md:w-28">{item.source}</span>
              <span className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors flex-1">{item.title}</span>
              <span className="text-[10px] text-white/30 shrink-0">{item.date}</span>
              <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
