"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    num: "01",
    title: "High-Rise Façade Cleaning",
    desc: "Glass, concrete, and cladding — any height, no scaffolding required. Our drones handle buildings up to 200m.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format",
  },
  {
    num: "02",
    title: "Government & Public Infrastructure",
    desc: "Partnering with municipal authorities for monument restoration, public building maintenance, and civic infrastructure cleaning.",
    image: "https://images.unsplash.com/photo-1555521913-ea16a746f8e1?w=800&q=80&auto=format",
  },
  {
    num: "03",
    title: "Bridge & Infrastructure",
    desc: "Cleaning and inspection of girders, decks, and supports without traffic disruption.",
    image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80&auto=format",
  },
  {
    num: "04",
    title: "Oil & Gas Platforms",
    desc: "Offshore rigs, flare stacks, and storage tanks — preserving protective coatings in extreme environments.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80&auto=format",
  },
  {
    num: "05",
    title: "Wind Turbine Cleaning",
    desc: "Blade cleaning and inspection at height — maximizing energy output and extending turbine lifespan.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80&auto=format",
  },
  {
    num: "06",
    title: "Ship & Vessel Cleaning",
    desc: "Hull and superstructure maintenance above the waterline — in port or at sea, zero dock time wasted.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80&auto=format",
  },
  {
    num: "07",
    title: "Industrial Inspection",
    desc: "Visual and thermal inspection of structures, pipelines, and equipment — detecting issues before they become failures.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format",
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
          className="group relative rounded-2xl border border-white/[0.04] bg-[#111113] hover:border-white/10 transition-all duration-500 overflow-hidden"
        >
          {/* Service Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/40 to-transparent" />
            <div className="absolute top-4 right-4">
              <span className="text-xs text-white/40 font-mono bg-black/40 px-2 py-1 rounded">{service.num}</span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-white/65 leading-relaxed">{service.desc}</p>
          </div>

          {/* Subtle light sweep on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
