"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "High-Rise Façade Cleaning",
    desc: "Glass, concrete, and cladding — any height, no scaffolding. Autonomous precision up to 200m.",
    image: "/services/facade-cleaning.jpg",
    status: "ACTIVE",
  },
  {
    num: "02",
    title: "Government & Public Infrastructure",
    desc: "Monument restoration, public buildings, civic infrastructure — partnering with municipal authorities.",
    image: "/services/government.jpg",
    status: "CONTRACTED",
  },
  {
    num: "03",
    title: "Bridge & Infrastructure",
    desc: "Girders, decks, and supports cleaned without traffic disruption or road closures.",
    image: "/services/bridge.jpg",
    status: "ACTIVE",
  },
  {
    num: "04",
    title: "Oil & Gas Platforms",
    desc: "Offshore rigs, flare stacks, storage tanks — preserving coatings in extreme environments.",
    image: "/services/oil-platform.jpg",
    status: "DEPLOYED",
  },
  {
    num: "05",
    title: "Wind Turbine Cleaning",
    desc: "Blade cleaning at height — maximizing energy output, extending lifespan by 30%.",
    image: "/services/wind-turbine.jpg",
    status: "ACTIVE",
  },
  {
    num: "06",
    title: "Ship & Vessel Cleaning",
    desc: "Hull and superstructure maintenance above the waterline — zero dock time wasted.",
    image: "/services/ship.jpg",
    status: "AVAILABLE",
  },
  {
    num: "07",
    title: "Industrial Inspection",
    desc: "Visual and thermal inspection — detecting failures before they happen.",
    image: "/services/drone-inspection.jpg",
    status: "ACTIVE",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {services.map((service, i) => (
        <motion.div
          key={service.num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="group relative rounded-xl border border-white/[0.06] bg-[#0a0a0c] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
        >
          {/* Service image */}
          <div className="relative h-48 md:h-52 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear group-hover:scale-110 [image-rendering:auto]"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/30 to-transparent" />
            
            {/* HUD corners */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/30" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-400/30" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-400/30" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/30" />

            {/* Status badge */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[8px] md:text-[9px] text-green-400/80 font-mono uppercase tracking-wider">
                {service.status}
              </span>
            </div>

            {/* Service number */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="text-[9px] text-cyan-400/50 font-mono">
                SECTOR {service.num}
              </span>
            </div>

            {/* Scan line on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <motion.div
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative p-4 md:p-5">
            <h3 className="text-sm md:text-base font-semibold mb-1.5 text-white/90 group-hover:text-cyan-50 transition-colors duration-300 font-[family-name:var(--font-space)]">
              {service.title}
            </h3>
            <p className="text-[12px] md:text-[13px] text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-500">
              {service.desc}
            </p>
          </div>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
