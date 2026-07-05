"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Warsaw Financial District",
    metric: "12,000m²",
    metricLabel: "Cleaned in 4 hours",
    desc: "Full façade restoration of 28-story glass tower — zero road closures, completed overnight.",
    sector: "Commercial",
  },
  {
    title: "North Sea Wind Farm",
    metric: "47",
    metricLabel: "Turbines serviced",
    desc: "Blade cleaning across offshore wind installation — 30% energy output recovery measured.",
    sector: "Energy",
  },
  {
    title: "Baltic Bridge Restoration",
    metric: "3.2km",
    metricLabel: "Surface cleaned",
    desc: "Full structural cleaning without traffic disruption — drone fleet coordination across spans.",
    sector: "Infrastructure",
  },
  {
    title: "Government Complex",
    metric: "6",
    metricLabel: "Buildings maintained",
    desc: "Quarterly scheduled maintenance for municipal headquarters — heritage-safe methods applied.",
    sector: "Public Sector",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Case Studies</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Project Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 md:p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.1] bg-[#111113]/50 hover:bg-[#111113] transition-all duration-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-400/60 px-2 py-1 rounded border border-cyan-400/20">{study.sector}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white/90 group-hover:text-white transition-colors">{study.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{study.desc}</p>
              <div className="mt-6 pt-4 border-t border-white/[0.04]">
                <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] text-white">{study.metric}</span>
                <span className="text-xs text-white/50 ml-2 uppercase tracking-wider">{study.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
