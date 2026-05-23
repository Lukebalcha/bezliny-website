"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Cinematic scroll transition — drone flies across as you scroll through this divider
export function DroneTransition({ direction = "left" }: { direction?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const droneX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    direction === "left" 
      ? ["-120%", "0%", "0%", "120%"] 
      : ["120%", "0%", "0%", "-120%"]
  );
  const droneY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ["40px", "0px", "-10px", "0px", "-30px"]);
  const droneRotate = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    direction === "left" ? [-5, 0, 0, 5] : [5, 0, 0, -5]
  );
  const droneScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.6, 1, 1.1, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 1, 1, 1, 0]);
  const scanWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]);
  const trailWidth = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0%", "40%", "60%", "100%"]);
  const trailOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);
  const edgeGlow = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-[25vh] md:h-[35vh] overflow-hidden">
      {/* Horizontal scan line */}
      <motion.div
        style={{ width: scanWidth, opacity: scanOpacity }}
        className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      {/* The drone */}
      <motion.div
        style={{ x: droneX, y: droneY, rotate: droneRotate, scale: droneScale, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[160px] md:h-[160px]"
      >
        <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
          <rect x="30" y="35" width="20" height="10" rx="3" fill="white" fillOpacity="1" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.85" strokeWidth="2" />
          <line x1="60" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.85" strokeWidth="2" />
          <line x1="20" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.85" strokeWidth="2" />
          <line x1="60" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.85" strokeWidth="2" />
          <circle cx="20" cy="20" r="9" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="20" r="9" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 20" to="-360 60 20" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="60" r="9" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 60" to="360 20 60" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="60" r="9" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="-360 60 60" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="40" r="4" fill="white" fillOpacity="1" />
          {/* Glow around center */}
          <circle cx="40" cy="40" r="8" fill="white" fillOpacity="0.15" />
        </svg>
      </motion.div>

      {/* Flight trail behind drone */}
      <motion.div
        style={{ width: trailWidth, opacity: trailOpacity }}
        className={`absolute top-[calc(50%-1px)] h-[2px] ${direction === "left" ? "left-0" : "right-0"}`}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Bottom edge glow */}
      <motion.div
        style={{ opacity: edgeGlow }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
    </div>
  );
}

// Industrial cleaning drone schematic — complex blueprint that assembles on scroll
export function BurstTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Master timings
  const masterOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);
  const assembleProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const dataFlicker = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6, 0.7], [0, 1, 0.7, 1, 0.5]);
  
  // Drone arms extend outward
  const armExtend = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const armRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 15]);
  
  // Nozzle system deploys
  const nozzleDrop = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const sprayActive = useTransform(scrollYProgress, [0.4, 0.55, 0.8], [0, 1, 0.6]);
  
  // Tether cable extends down
  const tetherLength = useTransform(scrollYProgress, [0.15, 0.45], ["0%", "100%"]);
  const tetherOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.75, 0.9], [0, 0.6, 0.6, 0]);
  
  // Propeller spin  
  const propSpin = useTransform(scrollYProgress, [0, 1], [0, 1440]);
  
  // HUD data readouts
  const hudOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]);
  
  // Pressure system
  const pressureFill = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "87%"]);
  
  // Scan line
  const scanY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 0.4, 0.4, 0]);

  return (
    <div ref={ref} className="relative h-[45vh] md:h-[55vh] overflow-hidden flex items-center justify-center">
      {/* Background: industrial grid */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </motion.div>

      {/* Vertical scan line */}
      <motion.div
        style={{ top: scanY, opacity: scanOpacity }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      {/* Main SVG — Industrial Drone Blueprint */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 500" className="w-full max-w-4xl h-auto px-4" fill="none">
          {/* ===== MAIN DRONE BODY (center fuselage) ===== */}
          <motion.g style={{ opacity: assembleProgress }}>
            {/* Core body — heavy industrial chassis */}
            <rect x="340" y="210" width="120" height="60" rx="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
            <rect x="355" y="220" width="90" height="40" rx="4" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" fill="rgba(34,211,238,0.02)" />
            {/* Tank indicators */}
            <rect x="362" y="228" width="12" height="24" rx="2" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6">
              <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="380" y="228" width="12" height="24" rx="2" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
            </rect>
            {/* Motor controller board */}
            <rect x="400" y="225" width="35" height="30" rx="2" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" />
            {/* Circuit traces */}
            <path d="M405 230 h5 v8 h10 v-4 h8" stroke="rgba(139,92,246,0.25)" strokeWidth="0.4" />
            <path d="M405 240 h8 v5 h12" stroke="rgba(139,92,246,0.2)" strokeWidth="0.4" />
            <path d="M405 248 h4 v-3 h15" stroke="rgba(139,92,246,0.2)" strokeWidth="0.4" />
            {/* Status LEDs */}
            <circle cx="408" cy="233" r="1.5" fill="rgba(52,211,153,0.8)">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="413" cy="233" r="1.5" fill="rgba(34,211,238,0.7)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          {/* ===== FOUR PROPELLER ARMS (extending outward) ===== */}
          {/* Top-Left Arm */}
          <motion.g style={{ opacity: armExtend, rotate: armRotate, transformOrigin: "400px 240px" }}>
            <motion.line x1="340" y1="215" x2="240" y2="140" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ pathLength: armExtend }} />
            <rect x="225" y="125" width="30" height="6" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" transform="rotate(-30 240 128)" />
            {/* Motor housing */}
            <circle cx="240" cy="140" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)" />
            <circle cx="240" cy="140" r="12" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
            {/* Spinning propeller */}
            <motion.g style={{ rotate: propSpin, transformOrigin: "240px 140px" }}>
              <ellipse cx="240" cy="140" rx="28" ry="4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
              <ellipse cx="240" cy="140" rx="4" ry="28" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
            </motion.g>
          </motion.g>

          {/* Top-Right Arm */}
          <motion.g style={{ opacity: armExtend, rotate: armRotate, transformOrigin: "400px 240px" }}>
            <motion.line x1="460" y1="215" x2="560" y2="140" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ pathLength: armExtend }} />
            <circle cx="560" cy="140" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)" />
            <circle cx="560" cy="140" r="12" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
            <motion.g style={{ rotate: propSpin, transformOrigin: "560px 140px" }}>
              <ellipse cx="560" cy="140" rx="28" ry="4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
              <ellipse cx="560" cy="140" rx="4" ry="28" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
            </motion.g>
          </motion.g>

          {/* Bottom-Left Arm */}
          <motion.g style={{ opacity: armExtend }}>
            <motion.line x1="340" y1="265" x2="240" y2="340" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ pathLength: armExtend }} />
            <circle cx="240" cy="340" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)" />
            <circle cx="240" cy="340" r="12" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
            <motion.g style={{ rotate: propSpin, transformOrigin: "240px 340px" }}>
              <ellipse cx="240" cy="340" rx="28" ry="4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
              <ellipse cx="240" cy="340" rx="4" ry="28" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
            </motion.g>
          </motion.g>

          {/* Bottom-Right Arm */}
          <motion.g style={{ opacity: armExtend }}>
            <motion.line x1="460" y1="265" x2="560" y2="340" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ pathLength: armExtend }} />
            <circle cx="560" cy="340" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)" />
            <circle cx="560" cy="340" r="12" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
            <motion.g style={{ rotate: propSpin, transformOrigin: "560px 340px" }}>
              <ellipse cx="560" cy="340" rx="28" ry="4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
              <ellipse cx="560" cy="340" rx="4" ry="28" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
            </motion.g>
          </motion.g>

          {/* ===== NOZZLE SYSTEM (deploys below body) ===== */}
          <motion.g style={{ opacity: nozzleDrop }}>
            {/* Main pipe */}
            <line x1="370" y1="270" x2="370" y2="310" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
            <line x1="400" y1="270" x2="400" y2="320" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
            <line x1="430" y1="270" x2="430" y2="310" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
            {/* Nozzle heads */}
            <circle cx="370" cy="315" r="5" stroke="rgba(34,211,238,0.6)" strokeWidth="1" fill="rgba(34,211,238,0.1)" />
            <circle cx="400" cy="325" r="6" stroke="rgba(34,211,238,0.7)" strokeWidth="1.2" fill="rgba(34,211,238,0.1)" />
            <circle cx="430" cy="315" r="5" stroke="rgba(34,211,238,0.6)" strokeWidth="1" fill="rgba(34,211,238,0.1)" />
            {/* Cross pipe connecting nozzles */}
            <path d="M370 295 h60" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" />
            {/* Valve indicators */}
            <rect x="383" y="292" width="4" height="6" fill="rgba(34,211,238,0.4)" rx="1">
              <animate attributeName="fill-opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
            </rect>
            <rect x="413" y="292" width="4" height="6" fill="rgba(34,211,238,0.4)" rx="1">
              <animate attributeName="fill-opacity" values="0.5;0.9;0.5" dur="1.3s" repeatCount="indefinite" />
            </rect>
          </motion.g>

          {/* ===== SPRAY PARTICLES (active cleaning) ===== */}
          <motion.g style={{ opacity: sprayActive }}>
            {/* Left nozzle spray */}
            <line x1="367" y1="320" x2="360" y2="370" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
            <line x1="370" y1="320" x2="370" y2="375" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="373" y1="320" x2="380" y2="368" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
            {/* Center nozzle spray (strongest) */}
            <line x1="395" y1="331" x2="388" y2="390" stroke="rgba(34,211,238,0.3)" strokeWidth="0.6" strokeDasharray="3 4" />
            <line x1="400" y1="331" x2="400" y2="395" stroke="rgba(34,211,238,0.4)" strokeWidth="0.7" strokeDasharray="3 5" />
            <line x1="405" y1="331" x2="412" y2="390" stroke="rgba(34,211,238,0.3)" strokeWidth="0.6" strokeDasharray="3 4" />
            {/* Right nozzle spray */}
            <line x1="427" y1="320" x2="420" y2="370" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
            <line x1="430" y1="320" x2="430" y2="375" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="433" y1="320" x2="440" y2="368" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
            {/* Mist particles */}
            {[355,365,375,385,395,405,415,425,435,445].map((x, i) => (
              <circle key={`mist-${i}`} cx={x} cy={360 + (i%3)*12} r="1" fill="rgba(34,211,238,0.3)">
                <animate attributeName="cy" values={`${355+i*3};${380+i*2};${355+i*3}`} dur={`${1.5+i*0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${1.2+i*0.15}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </motion.g>

          {/* ===== TETHER CABLE (power + water line) ===== */}
          <motion.g style={{ opacity: tetherOpacity }}>
            <motion.line x1="400" y1="270" x2="400" y2="480" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="6 4" style={{ pathLength: assembleProgress }} />
            <motion.line x1="403" y1="270" x2="403" y2="480" stroke="rgba(34,211,238,0.15)" strokeWidth="0.8" strokeDasharray="3 6" style={{ pathLength: assembleProgress }} />
            {/* Ground station indicator */}
            <rect x="385" y="465" width="30" height="12" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
            <text x="400" y="474" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">GND</text>
          </motion.g>

          {/* ===== HUD DATA READOUTS ===== */}
          <motion.g style={{ opacity: hudOpacity }}>
            {/* Left panel — altitude + pressure */}
            <rect x="60" y="150" width="120" height="180" rx="4" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" fill="rgba(34,211,238,0.01)" />
            <text x="70" y="168" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="monospace">SYSTEM STATUS</text>
            <line x1="70" y1="174" x2="170" y2="174" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            
            <text x="70" y="190" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">ALT</text>
            <text x="120" y="190" fill="rgba(34,211,238,0.7)" fontSize="6" fontFamily="monospace">
              <animate attributeName="textContent" values="087.2m;087.4m;087.1m;087.3m" dur="2s" repeatCount="indefinite" />
              087.2m
            </text>
            
            <text x="70" y="205" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">PSI</text>
            <text x="120" y="205" fill="rgba(52,211,153,0.7)" fontSize="6" fontFamily="monospace">142 BAR</text>
            
            <text x="70" y="220" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">FLOW</text>
            <text x="120" y="220" fill="rgba(34,211,238,0.7)" fontSize="6" fontFamily="monospace">12.4 L/m</text>
            
            <text x="70" y="235" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">WIND</text>
            <text x="120" y="235" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">3.2 m/s</text>
            
            <text x="70" y="250" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">BATT</text>
            <text x="120" y="250" fill="rgba(52,211,153,0.7)" fontSize="6" fontFamily="monospace">∞ TETHERED</text>
            
            <text x="70" y="270" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">NOZZLE</text>
            <text x="120" y="270" fill="rgba(34,211,238,0.7)" fontSize="6" fontFamily="monospace">TRIPLE</text>
            
            <text x="70" y="285" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">MODE</text>
            <text x="120" y="285" fill="rgba(52,211,153,0.8)" fontSize="6" fontFamily="monospace">CLEANING</text>
            
            {/* Pressure gauge */}
            <text x="70" y="305" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">PRESSURE</text>
            <rect x="70" y="310" width="100" height="4" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
            <motion.rect x="70" y="310" width="87" height="4" rx="2" fill="rgba(34,211,238,0.4)" style={{ width: pressureFill }} />
          </motion.g>

          {/* Right panel — mission data */}
          <motion.g style={{ opacity: hudOpacity }}>
            <rect x="620" y="150" width="120" height="160" rx="4" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" fill="rgba(34,211,238,0.01)" />
            <text x="630" y="168" fill="rgba(34,211,238,0.6)" fontSize="7" fontFamily="monospace">MISSION DATA</text>
            <line x1="630" y1="174" x2="730" y2="174" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            
            <text x="630" y="190" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">AREA</text>
            <text x="690" y="190" fill="rgba(255,255,255,0.6)" fontSize="6" fontFamily="monospace">2,400 m²</text>
            
            <text x="630" y="205" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">DONE</text>
            <text x="690" y="205" fill="rgba(52,211,153,0.7)" fontSize="6" fontFamily="monospace">67%</text>
            
            <text x="630" y="220" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">TIME</text>
            <text x="690" y="220" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">01:24:18</text>
            
            <text x="630" y="235" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">ETA</text>
            <text x="690" y="235" fill="rgba(34,211,238,0.6)" fontSize="6" fontFamily="monospace">00:42:06</text>
            
            <text x="630" y="250" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">PASSES</text>
            <text x="690" y="250" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">3 of 4</text>
            
            <text x="630" y="265" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">CHEM</text>
            <text x="690" y="265" fill="rgba(52,211,153,0.8)" fontSize="6" fontFamily="monospace">NONE</text>
            
            <text x="630" y="280" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">GPS</text>
            <text x="690" y="280" fill="rgba(34,211,238,0.6)" fontSize="6" fontFamily="monospace">52.2°N</text>
            
            <text x="630" y="295" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">SAT</text>
            <text x="690" y="295" fill="rgba(52,211,153,0.6)" fontSize="6" fontFamily="monospace">14 LOCKED</text>
          </motion.g>

          {/* ===== DIMENSION LINES (engineering blueprint style) ===== */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.95], [0, 0.4, 0.4, 0]) }}>
            {/* Wingspan dimension */}
            <line x1="210" y1="100" x2="590" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="210" y1="95" x2="210" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            <line x1="590" y1="95" x2="590" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            <text x="400" y="97" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">2.4m WINGSPAN</text>
            
            {/* Height dimension */}
            <line x1="190" y1="130" x2="190" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="185" y1="130" x2="195" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            <line x1="185" y1="380" x2="195" y2="380" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            <text x="183" y="260" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace" transform="rotate(-90 183 260)">1.8m HEIGHT</text>
            
            {/* Nozzle spread */}
            <line x1="365" y1="340" x2="435" y2="340" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            <text x="400" y="348" textAnchor="middle" fill="rgba(34,211,238,0.3)" fontSize="5" fontFamily="monospace">TRIPLE NOZZLE 0.6m</text>
          </motion.g>

          {/* ===== SIGNAL/DATA TRANSMISSION INDICATORS ===== */}
          <motion.g style={{ opacity: dataFlicker }}>
            {/* WiFi-like signal arcs from drone */}
            <path d="M440 200 Q 460 190 460 180" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5" fill="none" />
            <path d="M445 195 Q 470 182 470 170" stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" fill="none" />
            <path d="M450 190 Q 480 175 480 162" stroke="rgba(52,211,153,0.15)" strokeWidth="0.5" fill="none" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Corner frame markers (technical drawing style) */}
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-6 md:inset-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/10" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/10" />
      </motion.div>

      {/* Top-left technical label */}
      <motion.div style={{ opacity: hudOpacity }} className="absolute top-4 left-4 md:top-8 md:left-12">
        <span className="text-[8px] md:text-[9px] font-mono text-cyan-400/40 tracking-wider">JTC-10 INDUSTRIAL CLEANING DRONE — TECHNICAL SCHEMATIC</span>
      </motion.div>

      {/* Bottom-right version label */}
      <motion.div style={{ opacity: hudOpacity }} className="absolute bottom-4 right-4 md:bottom-8 md:right-12">
        <span className="text-[7px] md:text-[8px] font-mono text-white/20 tracking-wider">REV 4.2 | BEZLINY AEROSPACE DIVISION</span>
      </motion.div>
    </div>
  );
}

