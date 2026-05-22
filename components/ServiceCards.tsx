"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "High-Rise Façade Cleaning",
    desc: "Glass, concrete, and cladding — any height, no scaffolding required. Our drones handle buildings up to 200m with autonomous precision.",
    image: "/services/facade-cleaning.jpg",
  },
  {
    num: "02",
    title: "Government & Public Infrastructure",
    desc: "Partnering with municipal authorities for monument restoration, public building maintenance, and civic infrastructure cleaning across Poland.",
    image: "/services/government.jpg",
  },
  {
    num: "03",
    title: "Bridge & Infrastructure",
    desc: "Cleaning and inspection of girders, decks, and supports without traffic disruption or costly road closures.",
    image: "/services/bridge.jpg",
  },
  {
    num: "04",
    title: "Oil & Gas Platforms",
    desc: "Offshore rigs, flare stacks, and storage tanks — preserving protective coatings in extreme environments without human risk.",
    image: "/services/oil-platform.jpg",
  },
  {
    num: "05",
    title: "Wind Turbine Cleaning",
    desc: "Blade cleaning and inspection at height — maximizing energy output and extending turbine lifespan by up to 30%.",
    image: "/services/wind-turbine.jpg",
  },
  {
    num: "06",
    title: "Ship & Vessel Cleaning",
    desc: "Hull and superstructure maintenance above the waterline — in port or at sea, zero dock time wasted.",
    image: "/services/ship.jpg",
  },
  {
    num: "07",
    title: "Industrial Inspection",
    desc: "Visual and thermal inspection of structures, pipelines, and equipment — detecting issues before they become failures.",
    image: "/services/industrial.jpg",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {services.map((service, i) => (
        <motion.div
          key={service.num}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
          className="group relative rounded-2xl border border-white/[0.06] bg-[#0c0c0e] hover:border-cyan-500/20 transition-all duration-500 overflow-hidden"
        >
          {/* Image with Ken Burns motion effect */}
          <div className="relative h-52 md:h-56 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear group-hover:scale-125"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Service number badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="text-[10px] text-cyan-400/60 font-mono bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-cyan-500/10">
                {service.num}
              </span>
            </div>

            {/* Scan line animation on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative p-5 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white/90 group-hover:text-cyan-50 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-[13px] text-white/55 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              {service.desc}
            </p>
          </div>

          {/* Bottom glow on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
