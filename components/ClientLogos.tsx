"use client";

import { motion } from "framer-motion";

const clients = [
  "PROPERTY MANAGERS", "ENERGY SECTOR", "MARITIME", "INFRASTRUCTURE",
  "GOVERNMENT", "INDUSTRIAL", "COMMERCIAL", "RENEWABLE",
  "OIL & GAS", "AVIATION", "LOGISTICS", "AGRICULTURE",
];

export default function ClientLogos() {
  return (
    <section className="py-10 md:py-14 border-b border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Sectors We Serve</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10" />
        <motion.div
          className="flex gap-12 md:gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="text-sm md:text-base font-semibold tracking-[0.15em] text-white/20 hover:text-white/50 transition-colors duration-500 select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
