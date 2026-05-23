"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "GPS-RTK", desc: "Centimeter-level precision navigation", delay: 0 },
  { name: "AI Vision", desc: "Real-time surface analysis & path planning", delay: 0.08 },
  { name: "Thermal Imaging", desc: "Defect detection & heat mapping", delay: 0.16 },
  { name: "LiDAR", desc: "3D structure scanning & collision avoidance", delay: 0.24 },
  { name: "Hydro System", desc: "Pure water cleaning at 150+ bar", delay: 0.32 },
  { name: "Smart Battery", desc: "Hot-swap system, zero downtime", delay: 0.4 },
  { name: "Cloud Fleet", desc: "Remote monitoring & mission control", delay: 0.48 },
  { name: "Analytics", desc: "Post-mission reports & surface health data", delay: 0.56 },
];

function TechCard({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: tech.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-5 md:p-6 rounded-xl border border-white/[0.04] hover:border-cyan-400/20 bg-[#111113]/50 hover:bg-[#111113] transition-colors duration-700 group cursor-default"
    >
      {/* Animated circuit line */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: tech.delay + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Pulse node */}
      <motion.div
        className="absolute top-[-3px] right-4 w-[6px] h-[6px] rounded-full bg-cyan-400/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0.4] }}
        viewport={{ once: true }}
        transition={{ delay: tech.delay + 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Index number */}
      <div className="text-[10px] font-mono text-white/15 mb-3 tracking-widest">0{index + 1}</div>
      
      <h4 className="text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-500">{tech.name}</h4>
      <p className="mt-1.5 text-[10px] md:text-xs text-white/40 group-hover:text-white/60 leading-relaxed transition-colors duration-500">{tech.desc}</p>
      
      {/* Corner accent */}
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/[0.06] group-hover:border-cyan-400/30 transition-colors duration-700" />
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 relative" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.01] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 inline-block"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Technology
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]"
            initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Integrated Platform
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Every mission powered by our proprietary technology stack
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
