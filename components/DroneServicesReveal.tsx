"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Particle explosion burst
function ParticleBurst({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {[...Array(60)].map((_, i) => {
        const angle = (i / 60) * Math.PI * 2;
        const distance = 200 + Math.random() * 400;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const size = 2 + Math.random() * 4;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: size,
              height: size,
              background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#ffffff' : '#0088ff',
              boxShadow: `0 0 ${size * 3}px ${i % 3 === 0 ? '#00d4ff' : '#0088ff'}`,
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 + Math.random() * 0.5, ease: "easeOut", delay: Math.random() * 0.2 }}
          />
        );
      })}
    </div>
  );
}

// Light streak effect
function LightStreaks({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
          style={{
            top: `${15 + i * 10}%`,
            left: '-100%',
            width: '200%',
          }}
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: '50%', opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function DroneServicesReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [phase, setPhase] = useState(0);
  // Phase 0: dark void, Phase 1: energy charge, Phase 2: explosion burst, Phase 3: drone reveal + text

  useEffect(() => {
    if (!isInView) return;
    // Automatically sequence the phases
    const timers = [
      setTimeout(() => setPhase(1), 200),    // energy charge
      setTimeout(() => setPhase(2), 1200),   // explosion
      setTimeout(() => setPhase(3), 2200),   // reveal
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-[#030305]"
    >
      {/* Phase 1: Energy charging orb */}
      {phase >= 1 && (
        <motion.div
          className="absolute z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase === 1 ? { scale: [0, 1.5, 1], opacity: [0, 1, 0.8] } : { scale: [1, 15], opacity: [0.8, 0] }}
          transition={phase === 1 ? { duration: 1, ease: "easeOut" } : { duration: 0.8, ease: "easeIn" }}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 blur-sm" />
          <div className="absolute inset-2 rounded-full bg-white/30 blur-md" />
        </motion.div>
      )}

      {/* Phase 1: Concentric rings charging */}
      {phase >= 1 && phase < 3 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-cyan-500/30 rounded-full"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: 100 + i * 80, height: 100 + i * 80, opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      {/* Phase 2: Particle explosion */}
      <ParticleBurst active={phase >= 2} />
      <LightStreaks active={phase >= 2} />

      {/* Phase 2: Flash */}
      {phase >= 2 && (
        <motion.div
          className="absolute inset-0 bg-white z-30 pointer-events-none"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Phase 3: Drone + text cinematic reveal */}
      {phase >= 3 && (
        <>
          {/* Background: subtle grid + glow */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-900/20 via-blue-900/10 to-transparent blur-3xl" />
          </motion.div>

          {/* Drone flies in from top */}
          <motion.div
            className="relative z-20"
            initial={{ y: -200, scale: 0.3, opacity: 0, rotateX: 40 }}
            animate={{ y: 0, scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 240 140" className="w-56 md:w-80 h-auto drop-shadow-[0_0_40px_rgba(0,200,255,0.3)]" fill="none">
              {/* Main body - sleek */}
              <motion.path
                d="M90 65 Q100 55 120 55 Q140 55 150 65 L155 75 Q150 85 120 85 Q90 85 85 75 Z"
                fill="url(#bodyGrad)" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"
                animate={{ filter: ["drop-shadow(0 0 5px rgba(0,200,255,0.3))", "drop-shadow(0 0 15px rgba(0,200,255,0.5))", "drop-shadow(0 0 5px rgba(0,200,255,0.3))"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Arms */}
              <line x1="90" y1="68" x2="40" y2="48" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
              <line x1="150" y1="68" x2="200" y2="48" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
              <line x1="90" y1="72" x2="40" y2="92" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
              <line x1="150" y1="72" x2="200" y2="92" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
              {/* Motors */}
              <circle cx="40" cy="48" r="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx="200" cy="48" r="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx="40" cy="92" r="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx="200" cy="92" r="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
              {/* Rotor blur */}
              <motion.ellipse cx="40" cy="48" rx="22" ry="3" fill="white" fillOpacity="0.15"
                animate={{ scaleX: [1, 0.2, 1], opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 0.08, repeat: Infinity }} />
              <motion.ellipse cx="200" cy="48" rx="22" ry="3" fill="white" fillOpacity="0.15"
                animate={{ scaleX: [0.2, 1, 0.2], opacity: [0.4, 0.15, 0.4] }} transition={{ duration: 0.08, repeat: Infinity }} />
              <motion.ellipse cx="40" cy="92" rx="22" ry="3" fill="white" fillOpacity="0.15"
                animate={{ scaleX: [0.6, 0.1, 0.6], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 0.07, repeat: Infinity }} />
              <motion.ellipse cx="200" cy="92" rx="22" ry="3" fill="white" fillOpacity="0.15"
                animate={{ scaleX: [0.1, 0.7, 0.1], opacity: [0.35, 0.15, 0.35] }} transition={{ duration: 0.09, repeat: Infinity }} />
              {/* Camera gimbal */}
              <rect x="112" y="85" width="16" height="12" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
              <motion.circle cx="120" cy="91" r="4" fill="cyan" fillOpacity="0.7"
                animate={{ fillOpacity: [0.5, 0.9, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
              {/* Water spray system */}
              <rect x="116" y="97" width="8" height="6" rx="1" fill="white" fillOpacity="0.15" />
              {/* Spray particles */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={117 + (i % 4) * 2.5}
                  cy={103}
                  r={1}
                  fill="cyan"
                  fillOpacity={0.7}
                  animate={{ cy: [103, 120 + i * 2], opacity: [0.7, 0], r: [1, 0.3] }}
                  transition={{ duration: 0.8 + (i % 3) * 0.2, delay: i * 0.1, repeat: Infinity }}
                />
              ))}
              {/* LED status lights */}
              <motion.circle cx="95" cy="62" r="1.5" fill="#00ff88"
                animate={{ opacity: [1, 0.1, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
              <motion.circle cx="145" cy="62" r="1.5" fill="#ff2222"
                animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 0.8, repeat: Infinity }} />
              {/* Gradient defs */}
              <defs>
                <linearGradient id="bodyGrad" x1="85" y1="55" x2="155" y2="85">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="50%" stopColor="#16213e" />
                  <stop offset="100%" stopColor="#0f3460" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating hover effect */}
            <motion.div
              className="absolute -inset-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text reveal */}
          <motion.div
            className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center z-20 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-cyan-400/70 mb-3"
              initial={{ letterSpacing: "0.8em", opacity: 0 }}
              animate={{ letterSpacing: "0.5em", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              The Future of Maintenance
            </motion.p>
            <motion.h2
              className="text-3xl md:text-6xl font-bold font-[family-name:var(--font-space)] text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Zero Risk. Zero Limits.
              </span>
            </motion.h2>
            <motion.p
              className="mt-4 text-sm md:text-lg text-white/60 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              From government monuments to offshore platforms — autonomous precision at any altitude.
            </motion.p>
          </motion.div>

          {/* Ambient particles */}
          <div className="absolute inset-0 pointer-events-none z-5">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-cyan-400/30 rounded-full"
                style={{ left: `${5 + Math.random() * 90}%`, top: `${5 + Math.random() * 90}%` }}
                animate={{ y: [0, -20 - Math.random() * 40, 0], opacity: [0, 0.6, 0] }}
                transition={{ duration: 4 + Math.random() * 3, delay: 1 + i * 0.15, repeat: Infinity }}
              />
            ))}
          </div>
        </>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent z-40" />
    </div>
  );
}
