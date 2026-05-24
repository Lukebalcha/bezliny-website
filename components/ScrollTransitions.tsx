"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// TRANSITION 1: DRAMATIC Drone Architecture — Layers that BREATHE on scroll
// Bright, high-contrast, industrial. Layers split open revealing depth.
// "First AI Crash Deterrent System" — we show the architecture, the innovation.
export function DroneTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Dramatic layer animations
  const masterOpacity = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], [0, 1, 1, 0]);
  
  // Layers split open
  const layer1X = useTransform(scrollYProgress, [0.05, 0.3], [-100, 0]);
  const layer2X = useTransform(scrollYProgress, [0.05, 0.3], [100, 0]);
  const layer1Rotate = useTransform(scrollYProgress, [0.05, 0.35], [-5, 0]);
  const layer2Rotate = useTransform(scrollYProgress, [0.05, 0.35], [5, 0]);
  const layerScale = useTransform(scrollYProgress, [0.05, 0.4], [0.85, 1]);
  
  // Center content breathes in
  const centerScale = useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // Grid expands outward
  const gridScale = useTransform(scrollYProgress, [0.1, 0.5], [0.6, 1.05]);
  const gridOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Text staggers in
  const titleY = useTransform(scrollYProgress, [0.35, 0.55], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.85, 0.95], [0, 1, 1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  
  // Scan/pulse
  const pulseScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [0.5, 1.2, 0.8, 1.5]);
  const pulseOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [0.8, 0, 0.6, 0]);
  
  // Data readouts
  const dataOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[80vh] md:h-[100vh] overflow-hidden bg-[#0a0a0a]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0">

        {/* === LAYER 1 — Left architectural panel (slides in from left) === */}
        <motion.div 
          style={{ x: layer1X, rotateY: layer1Rotate, scale: layerScale }}
          className="absolute inset-0 origin-left"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1/2">
            {/* Vertical lines — building columns */}
            {Array.from({length: 8}).map((_, i) => (
              <div key={`l1-${i}`} className="absolute top-0 bottom-0" style={{
                left: `${10 + i * 12}%`,
                width: i % 3 === 0 ? '2px' : '1px',
                background: `linear-gradient(to bottom, transparent 5%, rgba(255,255,255,${i % 3 === 0 ? 0.25 : 0.1}) 20%, rgba(255,255,255,${i % 3 === 0 ? 0.2 : 0.08}) 80%, transparent 95%)`,
              }} />
            ))}
            {/* Horizontal struts */}
            {Array.from({length: 6}).map((_, i) => (
              <div key={`h1-${i}`} className="absolute left-[10%] right-0" style={{
                top: `${15 + i * 14}%`,
                height: '1px',
                background: `linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
              }} />
            ))}
          </div>
        </motion.div>

        {/* === LAYER 2 — Right architectural panel (slides in from right) === */}
        <motion.div 
          style={{ x: layer2X, rotateY: layer2Rotate, scale: layerScale }}
          className="absolute inset-0 origin-right"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            {Array.from({length: 8}).map((_, i) => (
              <div key={`l2-${i}`} className="absolute top-0 bottom-0" style={{
                right: `${10 + i * 12}%`,
                width: i % 3 === 0 ? '2px' : '1px',
                background: `linear-gradient(to bottom, transparent 5%, rgba(255,255,255,${i % 3 === 0 ? 0.25 : 0.1}) 20%, rgba(255,255,255,${i % 3 === 0 ? 0.2 : 0.08}) 80%, transparent 95%)`,
              }} />
            ))}
            {Array.from({length: 6}).map((_, i) => (
              <div key={`h2-${i}`} className="absolute left-0 right-[10%]" style={{
                top: `${15 + i * 14}%`,
                height: '1px',
                background: `linear-gradient(to left, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
              }} />
            ))}
          </div>
        </motion.div>

        {/* === CENTER GRID — expands outward dramatically === */}
        <motion.div style={{ scale: gridScale, opacity: gridOpacity }} className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] relative">
            {/* Precision grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }} />
            {/* Diagonal accent lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* === CENTER PULSE — breathing ring === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ scale: pulseScale, opacity: pulseOpacity }} className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/30" />
          <motion.div style={{ scale: centerScale, opacity: centerOpacity }} className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/50 flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/80" />
          </motion.div>
        </div>

        {/* === MAIN TEXT — slides up dramatically === */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="text-center">
            <p className="text-[9px] md:text-[11px] tracking-[0.6em] text-white/50 uppercase mb-4 md:mb-6">World{"'"}s First</p>
            <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space)] text-white leading-[0.95]">
              AI Crash Deterrent<br />
              <span className="text-white/50 font-light">Cleaning System</span>
            </h3>
          </motion.div>
          <motion.div style={{ y: subtitleY, opacity: subtitleOpacity }} className="text-center mt-6 md:mt-10">
            <p className="text-sm md:text-base text-white/40 max-w-xl leading-relaxed">
              Autonomous obstacle detection. Real-time path correction. 
              Zero collision guarantee at any altitude.
            </p>
            <div className="mt-6 md:mt-8 flex items-center justify-center gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-white">360°</div>
                <div className="text-[9px] md:text-[10px] text-white/35 uppercase tracking-wider mt-1">LiDAR Coverage</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-white">0.02s</div>
                <div className="text-[9px] md:text-[10px] text-white/35 uppercase tracking-wider mt-1">Reaction Time</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-white">0</div>
                <div className="text-[9px] md:text-[10px] text-white/35 uppercase tracking-wider mt-1">Collisions</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* === DATA READOUTS — corners === */}
        <motion.div style={{ opacity: dataOpacity }} className="absolute inset-0 pointer-events-none">
          {/* Top-left */}
          <div className="absolute top-8 md:top-12 left-6 md:left-12 font-mono text-[9px] md:text-[10px] text-white/40 space-y-1">
            <p>SYS: ACTIVE</p>
            <p>LIDAR: 48 POINTS/SEC</p>
            <p>OBSTACLE: CLEAR</p>
          </div>
          {/* Top-right */}
          <div className="absolute top-8 md:top-12 right-6 md:right-12 font-mono text-[9px] md:text-[10px] text-white/40 space-y-1 text-right">
            <p>ALT: 87.4m</p>
            <p>WIND: 2.1 m/s</p>
            <p>BATTERY: 94%</p>
          </div>
          {/* Bottom-left */}
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 font-mono text-[9px] md:text-[10px] text-white/40 space-y-1">
            <p>ZONE: A7-NORTH</p>
            <p>COVERAGE: 67.3%</p>
          </div>
          {/* Bottom-right */}
          <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 font-mono text-[9px] md:text-[10px] text-white/40 space-y-1 text-right">
            <p>PRESSURE: 142 BAR</p>
            <p>FLOW: 2.4 L/min</p>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-6 md:top-10 left-4 md:left-10 w-6 md:w-10 h-6 md:h-10 border-l-2 border-t-2 border-white/20" />
          <div className="absolute top-6 md:top-10 right-4 md:right-10 w-6 md:w-10 h-6 md:h-10 border-r-2 border-t-2 border-white/20" />
          <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 w-6 md:w-10 h-6 md:h-10 border-l-2 border-b-2 border-white/20" />
          <div className="absolute bottom-6 md:bottom-10 right-4 md:right-10 w-6 md:w-10 h-6 md:h-10 border-r-2 border-b-2 border-white/20" />
        </motion.div>

      </motion.div>
    </div>
  );
}

// TRANSITION 2: Performance Metrics — Bold enterprise numbers
export function PerformanceTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const titleReveal = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);
  const cardsReveal = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.15, 0.45], [60, 0]);
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
    <div ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[#0a0a0a]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-6">

        {/* Section title */}
        <motion.div style={{ opacity: titleReveal }} className="text-center mb-8 md:mb-12">
          <p className="text-[10px] md:text-[11px] tracking-[0.5em] text-white/50 uppercase mb-3">Verified Operational Data</p>
          <h3 className="text-lg md:text-2xl font-extralight text-white/90 tracking-wide">Why Industry Leaders Choose Us</h3>
          <motion.div style={{ width: lineWidth }} className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mt-4 mx-auto" />
        </motion.div>

        {/* Metrics grid */}
        <motion.div style={{ opacity: cardsReveal, y: cardsY }} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl w-full">
          {metrics.map((m, i) => (
            <div key={i} className="relative">
              <div className="relative border border-white/[0.1] rounded-lg p-4 md:p-6 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl md:text-4xl font-extralight text-white tabular-nums">{m.value}</span>
                  <span className="text-sm md:text-lg font-light text-white/60">{m.unit}</span>
                </div>
                <p className="mt-1 text-[11px] md:text-xs font-medium text-white/70 tracking-wide">{m.label}</p>
                <p className="mt-0.5 text-[9px] md:text-[10px] text-white/30 tracking-wider">{m.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// TRANSITION 3: Technical Blueprint — Drone schematic with dramatic reveal
export function BurstTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);
  
  // Dramatic scale-in
  const schematicScale = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);
  const schematicOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Arms extend
  const armLength = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  // HUD data appears
  const hudOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.8, 0.9], [0, 1, 1, 0]);
  
  // Scan
  const scanY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-[45vh] md:h-[55vh] overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Grid background */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </motion.div>

      {/* Scan line */}
      <motion.div style={{ top: scanY, opacity: 0.3 }} className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* Drone Schematic */}
      <motion.div style={{ opacity: schematicOpacity, scale: schematicScale }} className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full max-w-4xl h-auto px-4" fill="none">
          {/* Core body */}
          <rect x="340" y="220" width="120" height="55" rx="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="rgba(255,255,255,0.02)" />
          <rect x="355" y="230" width="90" height="35" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="rgba(255,255,255,0.01)" />
          
          {/* Internal components */}
          <rect x="362" y="236" width="10" height="22" rx="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <rect x="377" y="236" width="10" height="22" rx="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
          <rect x="395" y="234" width="30" height="26" rx="2" stroke="rgba(200,200,200,0.3)" strokeWidth="0.4" />
          
          {/* Status indicator */}
          <circle cx="405" cy="240" r="1.5" fill="rgba(255,255,255,0.8)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Arms */}
          <motion.g style={{ opacity: armLength }}>
            <line x1="340" y1="235" x2="240" y2="195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="340" y1="260" x2="240" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="460" y1="235" x2="560" y2="195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="460" y1="260" x2="560" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />

            {/* Propeller circles */}
            {[{x:240,y:195},{x:240,y:300},{x:560,y:195},{x:560,y:300}].map((p, i) => (
              <g key={`prop-${i}`}>
                <circle cx={p.x} cy={p.y} r="28" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="3 2">
                  <animateTransform attributeName="transform" type="rotate" from={`0 ${p.x} ${p.y}`} to={`360 ${p.x} ${p.y}`} dur={`${0.8 + i * 0.1}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={p.x} cy={p.y} r="4" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
              </g>
            ))}
          </motion.g>

          {/* Nozzle */}
          <motion.g style={{ opacity: armLength }}>
            <line x1="400" y1="275" x2="400" y2="340" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
            <rect x="385" y="340" width="30" height="12" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
          </motion.g>

          {/* Corner brackets */}
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
            <path d="M60 60 L60 85 M60 60 L85 60" />
            <path d="M740 60 L740 85 M740 60 L715 60" />
            <path d="M60 440 L60 415 M60 440 L85 440" />
            <path d="M740 440 L740 415 M740 440 L715 440" />
          </g>

          {/* Model name */}
          <motion.text style={{ opacity: hudOpacity }} x="400" y="470" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="4">
            BEZ-X1 AUTONOMOUS CLEANING PLATFORM
          </motion.text>
        </svg>
      </motion.div>

      {/* HUD data */}
      <motion.div style={{ opacity: hudOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 font-mono text-[9px] md:text-[10px] text-white/50 space-y-1">
          <p>SYS: NOMINAL</p>
          <p>PWR: 94.2%</p>
          <p>STATUS: CLEANING</p>
        </div>
        <div className="absolute top-8 right-8 font-mono text-[9px] md:text-[10px] text-white/50 space-y-1 text-right">
          <p>PRESSURE: 142 BAR</p>
          <p>FLOW: 2.4 L/min</p>
          <p>TEMP: 18.3°C</p>
        </div>
      </motion.div>
    </div>
  );
}
