"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DroneServicesReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const droneY = useTransform(scrollYProgress, [0, 0.5], [120, -30]);
  const droneScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.6, 1.2, 0.9]);
  const droneRotate = useTransform(scrollYProgress, [0, 0.5], [-8, 4]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 0]);
  const particleSpread = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[70vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-[#0a0a0b]">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow behind drone */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.4], [0, 0.6]) }}
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
      </motion.div>

      {/* Animated drone SVG */}
      <motion.div
        className="relative z-10"
        style={{ y: droneY, scale: droneScale, rotate: droneRotate }}
      >
        <svg viewBox="0 0 200 120" className="w-64 md:w-96 h-auto" fill="none">
          {/* Body */}
          <motion.rect x="70" y="50" width="60" height="20" rx="10" fill="white" fillOpacity="0.9"
            animate={{ fillOpacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
          {/* Arms */}
          <line x1="70" y1="60" x2="30" y2="40" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
          <line x1="130" y1="60" x2="170" y2="40" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
          <line x1="70" y1="60" x2="30" y2="80" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
          <line x1="130" y1="60" x2="170" y2="80" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
          {/* Rotors */}
          <motion.ellipse cx="30" cy="40" rx="18" ry="4" fill="white" fillOpacity="0.3"
            animate={{ scaleX: [1, 0.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 0.15, repeat: Infinity }} />
          <motion.ellipse cx="170" cy="40" rx="18" ry="4" fill="white" fillOpacity="0.3"
            animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.6, 0.3, 0.6] }} transition={{ duration: 0.15, repeat: Infinity }} />
          <motion.ellipse cx="30" cy="80" rx="18" ry="4" fill="white" fillOpacity="0.3"
            animate={{ scaleX: [0.7, 0.2, 0.7], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 0.12, repeat: Infinity }} />
          <motion.ellipse cx="170" cy="80" rx="18" ry="4" fill="white" fillOpacity="0.3"
            animate={{ scaleX: [0.2, 0.8, 0.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 0.13, repeat: Infinity }} />
          {/* Camera lens */}
          <circle cx="100" cy="72" r="5" fill="white" fillOpacity="0.6" />
          <circle cx="100" cy="72" r="2.5" fill="cyan" fillOpacity="0.8" />
          {/* Water spray nozzle */}
          <rect x="96" y="72" width="8" height="8" rx="2" fill="white" fillOpacity="0.4" />
          {/* Water spray particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={96 + Math.random() * 8}
              cy={82}
              r={1.5}
              fill="cyan"
              fillOpacity={0.6}
              animate={{
                cy: [82, 100 + i * 3],
                opacity: [0.8, 0],
                r: [1.5, 0.5],
              }}
              transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
          {/* LED indicators */}
          <motion.circle cx="75" cy="55" r="2" fill="#00ff88"
            animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <motion.circle cx="125" cy="55" r="2" fill="#ff3333"
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} />
        </svg>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Text overlay */}
      <motion.div
        className="absolute bottom-12 md:bottom-20 left-0 right-0 text-center z-20 px-4"
        style={{ opacity: textOpacity }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Autonomous Precision</p>
        <h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)] text-white/90">
          Every Surface. Any Height.
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/60 max-w-md mx-auto">
          From government monuments to offshore platforms — our drones deliver industrial-grade cleaning without human risk.
        </p>
      </motion.div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-30" />
    </div>
  );
}
