"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// TRANSITION 1: Cinematic Drone Perspective — Premium Architectural
// Deep perspective looking up glass facade, drone light trails, industrial precision
// No cartoon characters. Pure architectural + tech aesthetic.
export function DroneTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);
  const facadeReveal = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const droneTrail = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const glowPulse = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.6]);
  const textReveal = useTransform(scrollYProgress, [0.4, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scanLine = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-[#020204]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0">

        {/* Deep perspective grid — architectural */}
        <motion.div style={{ opacity: facadeReveal, y: parallaxY }} className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.02) 50%, transparent 100%),
              repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(148,163,184,0.04) 79px, rgba(148,163,184,0.04) 80px),
              repeating-linear-gradient(0deg, transparent, transparent 119px, rgba(148,163,184,0.03) 119px, rgba(148,163,184,0.03) 120px)
            `
          }} />
          {/* Vertical facade lines — perspective depth */}
          <div className="absolute inset-0 flex justify-center">
            <div className="relative w-full max-w-5xl h-full" style={{
              background: `
                linear-gradient(to bottom, transparent 0%, rgba(6,182,212,0.01) 30%, rgba(6,182,212,0.03) 60%, transparent 100%)
              `,
              maskImage: `linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)`
            }}>
              {/* Glass panel grid — high-rise facade */}
              {Array.from({length: 12}).map((_, i) => (
                <div key={`col-${i}`} className="absolute top-0 bottom-0" style={{
                  left: `${8 + i * 7.5}%`,
                  width: '1px',
                  background: `linear-gradient(to bottom, transparent, rgba(148,163,184,${0.06 + (i % 3 === 0 ? 0.04 : 0)}) 20%, rgba(148,163,184,${0.04 + (i % 3 === 0 ? 0.03 : 0)}) 80%, transparent)`,
                }} />
              ))}
              {Array.from({length: 8}).map((_, i) => (
                <div key={`row-${i}`} className="absolute left-0 right-0" style={{
                  top: `${12 + i * 11}%`,
                  height: '1px',
                  background: `linear-gradient(to right, transparent 5%, rgba(148,163,184,0.05) 20%, rgba(148,163,184,0.05) 80%, transparent 95%)`,
                }} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Drone flight path — precision light trail */}
        <motion.div style={{ opacity: droneTrail }} className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <filter id="trailBloom">
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <radialGradient id="nodeGlow">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Primary drone path — sweeping precision curve */}
            <motion.path
              d="M 50 450 C 200 400, 300 150, 500 200 S 800 100, 950 300"
              stroke="url(#trailGrad)"
              strokeWidth="2"
              fill="none"
              style={{ pathLength: droneTrail }}
              strokeLinecap="round"
            />
            {/* Glow trail behind */}
            <motion.path
              d="M 50 450 C 200 400, 300 150, 500 200 S 800 100, 950 300"
              stroke="url(#trailGrad)"
              strokeWidth="8"
              fill="none"
              filter="url(#trailBloom)"
              style={{ pathLength: droneTrail, opacity: 0.3 }}
              strokeLinecap="round"
            />

            {/* Secondary path — return sweep */}
            <motion.path
              d="M 950 300 C 850 350, 700 500, 500 420 S 200 480, 80 350"
              stroke="url(#trailGrad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
              style={{ pathLength: droneTrail, opacity: 0.4 }}
            />

            {/* Waypoint nodes — precision markers */}
            {[
              { x: 200, y: 380, delay: 0 },
              { x: 400, y: 180, delay: 0.2 },
              { x: 600, y: 160, delay: 0.4 },
              { x: 800, y: 180, delay: 0.6 },
            ].map((node, i) => (
              <g key={`node-${i}`}>
                <circle cx={node.x} cy={node.y} r="20" fill="url(#nodeGlow)" opacity="0.5">
                  <animate attributeName="r" values="15;22;15" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={node.x} cy={node.y} r="3" fill="#06b6d4" />
                <circle cx={node.x} cy={node.y} r="6" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.6" />
                {/* Crosshair */}
                <line x1={node.x - 10} y1={node.y} x2={node.x - 5} y2={node.y} stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1={node.x + 5} y1={node.y} x2={node.x + 10} y2={node.y} stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1={node.x} y1={node.y - 10} x2={node.x} y2={node.y - 5} stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1={node.x} y1={node.y + 5} x2={node.x} y2={node.y + 10} stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4" />
              </g>
            ))}

            {/* Cleaning zone indicators — precision rectangles */}
            <rect x="350" y="130" width="300" height="200" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 2" />
            <rect x="370" y="150" width="260" height="160" fill="rgba(6,182,212,0.02)" stroke="#06b6d4" strokeWidth="0.3" strokeOpacity="0.2" />

            {/* Status data points */}
            <text x="380" y="145" fill="#06b6d4" fillOpacity="0.4" fontSize="8" fontFamily="monospace">ZONE_A7 // ACTIVE</text>
            <text x="380" y="320" fill="#06b6d4" fillOpacity="0.3" fontSize="7" fontFamily="monospace">COVERAGE: 94.2% // ETA: 3m 42s</text>
          </svg>
        </motion.div>

        {/* Ambient particles — dust/water mist */}
        <motion.div style={{ opacity: glowPulse }} className="absolute inset-0 pointer-events-none">
          {Array.from({length: 20}).map((_, i) => (
            <div key={`particle-${i}`} className="absolute rounded-full" style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              backgroundColor: i % 3 === 0 ? 'rgba(6,182,212,0.4)' : 'rgba(148,163,184,0.2)',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }} />
          ))}
        </motion.div>

        {/* Horizontal scan line */}
        <motion.div style={{ top: scanLine, opacity: 0.3 }} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

        {/* Center text — appears mid-scroll */}
        <motion.div style={{ opacity: textReveal }} className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-cyan-400/60 uppercase mb-4 font-light">Autonomous Precision</p>
          <h3 className="text-2xl md:text-4xl font-extralight text-white/90 tracking-wide">
            <span className="text-white/40">Beyond</span> Human Reach
          </h3>
          <div className="mt-6 flex items-center gap-8 text-[10px] tracking-[0.2em] text-white/30 uppercase">
            <span>150m Altitude</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
            <span>Zero Risk</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
            <span>360° Coverage</span>
          </div>
        </motion.div>

        {/* Vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(2,2,4,0.7) 100%)`
        }} />
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(5px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

// TRANSITION 2: Performance Metrics — Enterprise Investor-Deck Style
// Clean, bold, premium. Think Apple keynote / Tesla investor presentation.
// Large numbers, clean typography, glass-morphism cards, no toy circles.
export function PerformanceTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const titleReveal = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);
  const cardsReveal = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.15, 0.45], [40, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  const metrics = [
    { value: "99.7", unit: "%", label: "Precision Rate", sub: "AI-guided path accuracy" },
    { value: "4", unit: "×", label: "Faster", sub: "vs. traditional rope access" },
    { value: "150", unit: "m", label: "Max Altitude", sub: "Full facade coverage" },
    { value: "0", unit: "", label: "Human Risk", sub: "Zero personnel at height" },
    { value: "24", unit: "/7", label: "Operation", sub: "Weather-adaptive scheduling" },
    { value: "360", unit: "°", label: "Coverage", sub: "Complete surface mapping" },
  ];

  return (
    <div ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-gradient-to-b from-[#020204] via-[#050509] to-[#020204]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-6">

        {/* Section title */}
        <motion.div style={{ opacity: titleReveal }} className="text-center mb-8 md:mb-12">
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-white/30 uppercase mb-3">Verified Operational Data</p>
          <h3 className="text-lg md:text-2xl font-extralight text-white/80 tracking-wide">Why Industry Leaders Choose Us</h3>
          <motion.div style={{ width: lineWidth }} className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mt-4 mx-auto" />
        </motion.div>

        {/* Metrics grid — clean cards */}
        <motion.div style={{ opacity: cardsReveal, y: cardsY }} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl w-full">
          {metrics.map((m, i) => (
            <div key={i} className="relative group">
              {/* Card */}
              <div className="relative border border-white/[0.06] rounded-lg p-4 md:p-6 backdrop-blur-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(6,182,212,0.01) 100%)' }}>
                {/* Subtle top accent */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                {/* Value */}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl md:text-4xl font-extralight text-white/90 tabular-nums">{m.value}</span>
                  <span className="text-sm md:text-lg font-light text-cyan-400/70">{m.unit}</span>
                </div>
                {/* Label */}
                <p className="mt-1 text-[11px] md:text-xs font-medium text-white/60 tracking-wide">{m.label}</p>
                {/* Sub */}
                <p className="mt-0.5 text-[9px] md:text-[10px] text-white/25 tracking-wider">{m.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// TRANSITION 3: Technical Blueprint — Drone system schematic
// Precision engineering aesthetic, wireframe assembly
export function BurstTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);
  const assembleProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const armExtend = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const nozzleDrop = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const hudOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]);
  const scanY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 0.3, 0.3, 0]);

  return (
    <div ref={ref} className="relative h-[45vh] md:h-[55vh] overflow-hidden flex items-center justify-center bg-[#020204]">
      {/* Background grid */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </motion.div>

      {/* Scan line */}
      <motion.div style={{ top: scanY, opacity: scanOpacity }} className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Main SVG — Drone Blueprint */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full max-w-4xl h-auto px-4" fill="none">
          <defs>
            <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
            </linearGradient>
          </defs>

          {/* Core body */}
          <motion.g style={{ opacity: assembleProgress }}>
            <rect x="340" y="220" width="120" height="55" rx="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)" />
            <rect x="355" y="230" width="90" height="35" rx="3" stroke="rgba(6,182,212,0.25)" strokeWidth="0.6" fill="rgba(6,182,212,0.01)" />
            {/* Internal components */}
            <rect x="362" y="236" width="10" height="22" rx="1.5" stroke="rgba(6,182,212,0.35)" strokeWidth="0.5" />
            <rect x="377" y="236" width="10" height="22" rx="1.5" stroke="rgba(6,182,212,0.35)" strokeWidth="0.5" />
            <rect x="395" y="234" width="30" height="26" rx="2" stroke="rgba(139,92,246,0.25)" strokeWidth="0.4" />
            {/* Circuit traces */}
            <path d="M400 238 h5 v6 h8 v-3 h6" stroke="rgba(139,92,246,0.2)" strokeWidth="0.3" />
            <path d="M400 246 h7 v4 h10" stroke="rgba(139,92,246,0.15)" strokeWidth="0.3" />
            {/* Status indicator */}
            <circle cx="405" cy="240" r="1.2" fill="rgba(52,211,153,0.7)">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          {/* Arms — extending outward */}
          <motion.g style={{ opacity: armExtend }}>
            {/* Left arms */}
            <motion.line x1="340" y1="235" x2="240" y2="195" stroke="url(#armGrad)" strokeWidth="1.2" strokeLinecap="round" style={{ pathLength: armExtend }} />
            <motion.line x1="340" y1="260" x2="240" y2="300" stroke="url(#armGrad)" strokeWidth="1.2" strokeLinecap="round" style={{ pathLength: armExtend }} />
            {/* Right arms */}
            <motion.line x1="460" y1="235" x2="560" y2="195" stroke="url(#armGrad)" strokeWidth="1.2" strokeLinecap="round" style={{ pathLength: armExtend }} />
            <motion.line x1="460" y1="260" x2="560" y2="300" stroke="url(#armGrad)" strokeWidth="1.2" strokeLinecap="round" style={{ pathLength: armExtend }} />

            {/* Propeller circles */}
            {[{x:240,y:195},{x:240,y:300},{x:560,y:195},{x:560,y:300}].map((p, i) => (
              <g key={`prop-${i}`}>
                <circle cx={p.x} cy={p.y} r="28" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="0.5" strokeDasharray="3 2">
                  <animateTransform attributeName="transform" type="rotate" from={`0 ${p.x} ${p.y}`} to={`360 ${p.x} ${p.y}`} dur={`${0.8 + i * 0.1}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={p.x} cy={p.y} r="4" fill="rgba(6,182,212,0.3)" stroke="rgba(6,182,212,0.5)" strokeWidth="0.5" />
              </g>
            ))}
          </motion.g>

          {/* Nozzle system — deploys downward */}
          <motion.g style={{ opacity: nozzleDrop }}>
            <line x1="400" y1="275" x2="400" y2="340" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
            <rect x="385" y="340" width="30" height="12" rx="3" stroke="rgba(6,182,212,0.4)" strokeWidth="0.6" fill="rgba(6,182,212,0.02)" />
            {/* Spray indicator */}
            <path d="M392 352 L388 380 M400 352 L400 385 M408 352 L412 380" stroke="rgba(96,165,250,0.2)" strokeWidth="0.5" strokeDasharray="2 3">
              <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="1.5s" repeatCount="indefinite" />
            </path>
          </motion.g>

          {/* HUD data */}
          <motion.g style={{ opacity: hudOpacity }}>
            <text x="100" y="150" fill="rgba(6,182,212,0.5)" fontSize="8" fontFamily="monospace">SYS: NOMINAL</text>
            <text x="100" y="165" fill="rgba(6,182,212,0.35)" fontSize="7" fontFamily="monospace">PWR: 94.2% | ALT: 87m</text>
            <text x="100" y="180" fill="rgba(6,182,212,0.3)" fontSize="7" fontFamily="monospace">WIND: 3.2 m/s NNE</text>
            <text x="100" y="195" fill="rgba(52,211,153,0.4)" fontSize="7" fontFamily="monospace">STATUS: CLEANING</text>

            <text x="600" y="400" fill="rgba(6,182,212,0.4)" fontSize="8" fontFamily="monospace">NOZZLE PRESSURE: 142 BAR</text>
            <text x="600" y="415" fill="rgba(6,182,212,0.3)" fontSize="7" fontFamily="monospace">WATER FLOW: 2.4 L/min</text>
            <text x="600" y="430" fill="rgba(6,182,212,0.3)" fontSize="7" fontFamily="monospace">SURFACE TEMP: 18.3°C</text>
          </motion.g>

          {/* Corner brackets — technical frame */}
          <motion.g style={{ opacity: assembleProgress }} stroke="rgba(255,255,255,0.15)" strokeWidth="0.8">
            <path d="M60 60 L60 80 M60 60 L80 60" />
            <path d="M740 60 L740 80 M740 60 L720 60" />
            <path d="M60 440 L60 420 M60 440 L80 440" />
            <path d="M740 440 L740 420 M740 440 L720 440" />
          </motion.g>

          {/* Model designation */}
          <motion.text style={{ opacity: hudOpacity }} x="400" y="470" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace" letterSpacing="4">
            BEZ-X1 AUTONOMOUS CLEANING PLATFORM
          </motion.text>
        </svg>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at center, transparent 40%, rgba(2,2,4,0.6) 100%)`
      }} />
    </div>
  );
}
