"use client";

import { motion } from "framer-motion";

const techStack = [
  { icon: "🛰️", name: "GPS-RTK", desc: "Centimeter-level precision navigation" },
  { icon: "🤖", name: "AI Vision", desc: "Real-time surface analysis & path planning" },
  { icon: "🌡️", name: "Thermal Imaging", desc: "Defect detection & heat mapping" },
  { icon: "📡", name: "LiDAR", desc: "3D structure scanning & collision avoidance" },
  { icon: "💧", name: "Hydro System", desc: "Pure water cleaning at 150+ bar" },
  { icon: "🔋", name: "Smart Battery", desc: "Hot-swap system, zero downtime" },
  { icon: "☁️", name: "Cloud Fleet", desc: "Remote monitoring & mission control" },
  { icon: "📊", name: "Analytics", desc: "Post-mission reports & surface health data" },
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.01] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Technology</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Integrated Platform</h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto">Every mission powered by our proprietary technology stack</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 md:p-6 rounded-xl border border-white/[0.04] hover:border-cyan-400/20 bg-[#111113]/50 hover:bg-[#111113] transition-all duration-700 group"
            >
              <span className="text-2xl md:text-3xl">{tech.icon}</span>
              <h4 className="mt-3 text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors">{tech.name}</h4>
              <p className="mt-1 text-[10px] md:text-xs text-white/50 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
