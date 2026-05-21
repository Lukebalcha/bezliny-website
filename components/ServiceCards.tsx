"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "High-Rise Façade Cleaning",
    desc: "Glass, concrete, and cladding — any height, no scaffolding required.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Bridge & Infrastructure",
    desc: "Cleaning and inspection of girders, decks, and supports without traffic disruption.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 6v6m0-6l2-2m14 2v6m0-6l-2-2M4 12h16M4 12v6m16-6v6M8 12v6m4-6v6m4-6v6M4 18h16" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Oil & Gas Platforms",
    desc: "Offshore rigs, flare stacks, and storage tanks — preserving protective coatings.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343M6.343 7.343A8 8 0 0117.657 18.657M12 2v2m0 16v2m10-10h-2M4 12H2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Wind Turbine Cleaning",
    desc: "Blade cleaning and inspection at height — maximizing energy output.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Ship & Vessel Cleaning",
    desc: "Hull and superstructure maintenance above the waterline — in port or at sea.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l2-5h14l2 5M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Industrial Inspection",
    desc: "Visual and thermal inspection of structures, pipelines, and equipment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <motion.div
          key={service.num}
          initial={{ opacity: 0, y: 24, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
          className="group relative p-8 rounded-2xl border border-white/[0.04] bg-[#111113] hover:border-white/10 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle light sweep on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-500">
                {service.icon}
              </div>
              <span className="text-xs text-white/15 font-mono">{service.num}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-white/65 leading-relaxed">{service.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
