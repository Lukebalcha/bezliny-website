"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// TRANSITION 1: Cinematic 4D Window Perspective
// Story: Customer POV through apartment window → rope cleaners appear (invasive) 
// → panic/curtains close → drone swoops in (private, efficient) → crystal clear view
// Psychology: Why drones are superior — privacy, dignity, no human intrusion
export function DroneTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scene progression (0→1 as user scrolls)
  const masterOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);
  
  // Phase 1: Window frame appears, city visible (0.0 - 0.25)
  const windowOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const cityOpacity = useTransform(scrollYProgress, [0.08, 0.2], [0, 1]);
  
  // Phase 2: Rope cleaners descend (0.2 - 0.4)
  const ropeY = useTransform(scrollYProgress, [0.18, 0.35], [-200, 60]);
  const ropeOpacity = useTransform(scrollYProgress, [0.18, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const ropeSwing = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [-3, 2, -2, 1]);
  
  // Phase 3: Discomfort — red tint, curtains close (0.35 - 0.55)
  const discomfortOpacity = useTransform(scrollYProgress, [0.33, 0.4, 0.5, 0.55], [0, 0.4, 0.4, 0]);
  const curtainLeft = useTransform(scrollYProgress, [0.38, 0.52], [-50, 48]);
  const curtainRight = useTransform(scrollYProgress, [0.38, 0.52], [100, 52]);
  
  // Phase 4: Transition flash (0.5 - 0.6)
  const flashOpacity = useTransform(scrollYProgress, [0.52, 0.55, 0.58], [0, 1, 0]);
  
  // Phase 5: Drone arrives, curtains open, clean view (0.55 - 0.85)
  const curtainOpenLeft = useTransform(scrollYProgress, [0.58, 0.7], [48, -50]);
  const curtainOpenRight = useTransform(scrollYProgress, [0.58, 0.7], [52, 100]);
  const droneX = useTransform(scrollYProgress, [0.55, 0.68, 0.8], [120, 50, 40]);
  const droneY = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [-50, 45, 50]);
  const droneOpacity = useTransform(scrollYProgress, [0.55, 0.62, 0.88, 0.95], [0, 1, 1, 0]);
  const droneScale = useTransform(scrollYProgress, [0.55, 0.7, 0.85], [0.3, 1, 1.1]);
  const sprayOpacity = useTransform(scrollYProgress, [0.68, 0.73, 0.85, 0.9], [0, 0.8, 0.8, 0]);
  const cleanGlow = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  
  // Text reveals
  const oldWayText = useTransform(scrollYProgress, [0.25, 0.32, 0.42, 0.48], [0, 1, 1, 0]);
  const newWayText = useTransform(scrollYProgress, [0.7, 0.78, 0.88, 0.95], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[80vh] md:h-[100vh] overflow-hidden bg-[#09090b]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        
        <svg className="w-full h-full max-w-6xl" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0a1628" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="curtainGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2a1a1a" />
              <stop offset="50%" stopColor="#3d2222" />
              <stop offset="100%" stopColor="#2a1a1a" />
            </linearGradient>
            <linearGradient id="sprayGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow4d">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="windowClip">
              <rect x="150" y="50" width="700" height="500" rx="8" />
            </clipPath>
          </defs>

          {/* === THE WINDOW FRAME (customer's perspective, looking out) === */}
          <motion.g style={{ opacity: windowOpacity }}>
            {/* Room darkness around window */}
            <rect x="0" y="0" width="1000" height="600" fill="#050508" />
            
            {/* Window opening */}
            <rect x="150" y="50" width="700" height="500" fill="url(#skyGrad)" rx="4" />
            
            {/* Window frame (thick, architectural) */}
            <rect x="145" y="45" width="710" height="510" fill="none" stroke="#333" strokeWidth="8" rx="6" />
            {/* Window cross bars */}
            <rect x="495" y="45" width="6" height="510" fill="#333" />
            <rect x="145" y="295" width="710" height="6" fill="#333" />
            
            {/* Window sill */}
            <rect x="130" y="550" width="740" height="20" fill="#222" rx="3" />
            
            {/* Glass reflection lines */}
            <line x1="180" y1="80" x2="220" y2="280" stroke="white" strokeOpacity="0.03" strokeWidth="30" />
            <line x1="650" y1="60" x2="700" y2="200" stroke="white" strokeOpacity="0.02" strokeWidth="20" />
          </motion.g>

          {/* === CITY SKYLINE (visible through window) === */}
          <motion.g style={{ opacity: cityOpacity }} clipPath="url(#windowClip)">
            {/* Distant buildings */}
            <rect x="160" y="200" width="60" height="350" fill="#1a1a2e" stroke="#2a2a4e" strokeWidth="0.5" />
            <rect x="230" y="150" width="80" height="400" fill="#151530" stroke="#252550" strokeWidth="0.5" />
            <rect x="320" y="180" width="55" height="370" fill="#1c1c35" stroke="#2c2c55" strokeWidth="0.5" />
            <rect x="520" y="130" width="90" height="420" fill="#141428" stroke="#242448" strokeWidth="0.5" />
            <rect x="620" y="170" width="65" height="380" fill="#1a1a30" stroke="#2a2a50" strokeWidth="0.5" />
            <rect x="700" y="190" width="70" height="360" fill="#181830" stroke="#282850" strokeWidth="0.5" />
            <rect x="780" y="220" width="55" height="330" fill="#1c1c38" stroke="#2c2c58" strokeWidth="0.5" />
            
            {/* Building windows (small lit rectangles) */}
            {[180, 250, 540, 640, 720].map((bx, bi) => 
              [0, 1, 2, 3, 4, 5, 6, 7].map((floor) => (
                <rect key={`bw-${bi}-${floor}`} x={bx + 8} y={220 + floor * 40} width="12" height="16" 
                  fill="#ffd700" fillOpacity={Math.random() > 0.5 ? 0.15 : 0.05} rx="1" />
              ))
            )}
          </motion.g>

          {/* === ROPE CLEANERS (the old invasive way) === */}
          <motion.g style={{ opacity: ropeOpacity }} clipPath="url(#windowClip)">
            <motion.g style={{ y: ropeY, rotate: ropeSwing, transformOrigin: "500px 0px" }}>
              {/* Ropes from above */}
              <line x1="380" y1="-200" x2="380" y2="180" stroke="#666" strokeWidth="2" />
              <line x1="600" y1="-200" x2="600" y2="160" stroke="#666" strokeWidth="2" />
              
              {/* Worker 1 — hanging on rope, too close to window */}
              <g transform="translate(360, 140)">
                {/* Body harness */}
                <rect x="0" y="20" width="30" height="50" fill="#ff6b35" rx="4" />
                {/* Head with helmet */}
                <circle cx="15" cy="10" r="12" fill="#ffcc80" />
                <path d="M3 8 Q15 -2 27 8" fill="#ff8c00" />
                {/* Arms reaching toward window */}
                <line x1="5" y1="35" x2="-15" y2="50" stroke="#ffcc80" strokeWidth="4" strokeLinecap="round" />
                <line x1="25" y1="35" x2="45" y2="45" stroke="#ffcc80" strokeWidth="4" strokeLinecap="round" />
                {/* Squeegee */}
                <rect x="40" y="40" width="30" height="4" fill="#ccc" rx="2" />
                {/* Legs */}
                <line x1="8" y1="70" x2="5" y2="100" stroke="#334" strokeWidth="5" strokeLinecap="round" />
                <line x1="22" y1="70" x2="25" y2="100" stroke="#334" strokeWidth="5" strokeLinecap="round" />
              </g>
              
              {/* Worker 2 — peering in */}
              <g transform="translate(570, 120)">
                <rect x="0" y="20" width="30" height="50" fill="#ff6b35" rx="4" />
                <circle cx="15" cy="10" r="12" fill="#ffcc80" />
                <path d="M3 8 Q15 -2 27 8" fill="#ff8c00" />
                <line x1="5" y1="35" x2="-10" y2="55" stroke="#ffcc80" strokeWidth="4" strokeLinecap="round" />
                <line x1="25" y1="35" x2="40" y2="30" stroke="#ffcc80" strokeWidth="4" strokeLinecap="round" />
                <line x1="8" y1="70" x2="3" y2="100" stroke="#334" strokeWidth="5" strokeLinecap="round" />
                <line x1="22" y1="70" x2="27" y2="100" stroke="#334" strokeWidth="5" strokeLinecap="round" />
              </g>
            </motion.g>
          </motion.g>

          {/* === DISCOMFORT OVERLAY (red tint = invasion of privacy) === */}
          <motion.rect x="150" y="50" width="700" height="500" fill="#ff0000"
            style={{ opacity: discomfortOpacity }} />

          {/* === CURTAINS CLOSING (customer's reaction) === */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.35, 0.4, 0.68, 0.72], [0, 1, 1, 0]) }}>
            {/* Left curtain */}
            <motion.g style={{ x: useTransform(scrollYProgress, (v) => {
              if (v < 0.52) return -50 + (v - 0.38) * (98 / 0.14);
              return 48 + (v - 0.58) * (-98 / 0.12);
            }) }}>
              <rect x="150" y="50" width="200" height="500" fill="url(#curtainGrad)" />
              {/* Curtain folds */}
              <line x1="200" y1="50" x2="200" y2="550" stroke="#1a0a0a" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="250" y1="50" x2="250" y2="550" stroke="#4a2020" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="300" y1="50" x2="300" y2="550" stroke="#1a0a0a" strokeWidth="1" strokeOpacity="0.5" />
            </motion.g>
            {/* Right curtain */}
            <motion.g style={{ x: useTransform(scrollYProgress, (v) => {
              if (v < 0.52) return 100 - (v - 0.38) * (48 / 0.14);
              return 52 - (v - 0.58) * (-48 / 0.12);
            }) }}>
              <rect x="550" y="50" width="200" height="500" fill="url(#curtainGrad)" />
              <line x1="600" y1="50" x2="600" y2="550" stroke="#1a0a0a" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="650" y1="50" x2="650" y2="550" stroke="#4a2020" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="700" y1="50" x2="700" y2="550" stroke="#1a0a0a" strokeWidth="1" strokeOpacity="0.5" />
            </motion.g>
          </motion.g>

          {/* === TRANSITION FLASH === */}
          <motion.rect x="0" y="0" width="1000" height="600" fill="white"
            style={{ opacity: flashOpacity }} />

          {/* === DRONE ARRIVES (the new way — private, efficient) === */}
          <motion.g style={{ opacity: droneOpacity }} clipPath="url(#windowClip)">
            <motion.g style={{ 
              x: useTransform(scrollYProgress, [0.55, 0.68, 0.8], [300, 0, -20]),
              y: useTransform(scrollYProgress, [0.55, 0.65, 0.75], [-150, -10, 0]),
              scale: droneScale,
              transformOrigin: "500px 300px"
            }}>
              {/* Drone body — industrial, large, detailed */}
              <g transform="translate(420, 230)">
                {/* Main chassis */}
                <rect x="20" y="30" width="120" height="40" rx="8" fill="#1a1a2e" stroke="#60a5fa" strokeWidth="1.5" />
                {/* Core housing */}
                <rect x="40" y="25" width="80" height="50" rx="6" fill="#0f1729" stroke="#3b82f6" strokeWidth="1" />
                
                {/* Propeller arms */}
                <line x1="30" y1="50" x2="-30" y2="10" stroke="#60a5fa" strokeWidth="2.5" />
                <line x1="130" y1="50" x2="190" y2="10" stroke="#60a5fa" strokeWidth="2.5" />
                <line x1="30" y1="50" x2="-30" y2="90" stroke="#60a5fa" strokeWidth="2.5" />
                <line x1="130" y1="50" x2="190" y2="90" stroke="#60a5fa" strokeWidth="2.5" />
                
                {/* Propellers (spinning) */}
                <circle cx="-30" cy="10" r="20" fill="none" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 -30 10" to="360 -30 10" dur="0.15s" repeatCount="indefinite" />
                </circle>
                <circle cx="190" cy="10" r="20" fill="none" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 190 10" to="-360 190 10" dur="0.15s" repeatCount="indefinite" />
                </circle>
                <circle cx="-30" cy="90" r="20" fill="none" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 -30 90" to="360 -30 90" dur="0.15s" repeatCount="indefinite" />
                </circle>
                <circle cx="190" cy="90" r="20" fill="none" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 190 90" to="-360 190 90" dur="0.15s" repeatCount="indefinite" />
                </circle>
                
                {/* NOZZLE SYSTEM (front — the cleaning nose) */}
                <g transform="translate(140, 40)">
                  {/* Triple nozzle housing */}
                  <rect x="0" y="-5" width="40" height="20" rx="4" fill="#1a2744" stroke="#3b82f6" strokeWidth="1" />
                  {/* Individual nozzles */}
                  <circle cx="45" cy="0" r="4" fill="#09090b" stroke="#60a5fa" strokeWidth="1.5" />
                  <circle cx="45" cy="10" r="3" fill="#09090b" stroke="#60a5fa" strokeWidth="1" />
                  <circle cx="50" cy="5" r="3.5" fill="#09090b" stroke="#93c5fd" strokeWidth="1" />
                </g>
                
                {/* Status LEDs */}
                <circle cx="50" cy="40" r="3" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="65" cy="40" r="2" fill="#3b82f6">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="40" r="3" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>

                {/* Tether cable going up */}
                <path d="M80 25 Q80 -20 75 -60 Q70 -100 80 -150" fill="none" stroke="#666" strokeWidth="1.5" strokeDasharray="4 2" />
              </g>
            </motion.g>

            {/* Spray particles (cleaning in action) */}
            <motion.g style={{ opacity: sprayOpacity }}>
              {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
                <circle key={`spray-${i}`} r={1.5 + Math.random() * 2}
                  cx={610 + Math.random() * 80} cy={260 + Math.random() * 60}
                  fill="#60a5fa" fillOpacity={0.3 + Math.random() * 0.4}>
                  <animate attributeName="cx" values={`${610 + i * 7};${640 + i * 8};${610 + i * 7}`} dur={`${1 + Math.random()}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${0.8 + Math.random()}s`} repeatCount="indefinite" />
                </circle>
              ))}
              {/* Water mist fan */}
              <path d="M600 270 Q650 250 700 270 Q680 300 620 300 Z" fill="#60a5fa" fillOpacity="0.08" />
            </motion.g>
          </motion.g>

          {/* === CLEAN GLOW (result — crystal clear window) === */}
          <motion.rect x="150" y="50" width="700" height="500" fill="#60a5fa" rx="4"
            style={{ opacity: useTransform(cleanGlow, (v) => v * 0.05) }} />

          {/* === TEXT OVERLAYS === */}
          {/* "The Old Way" text */}
          <motion.g style={{ opacity: oldWayText }}>
            <text x="500" y="540" textAnchor="middle" fill="#ff6b35" fillOpacity="0.8" fontSize="11" letterSpacing="6" fontWeight="600">THE OLD WAY</text>
            <text x="500" y="560" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="8" letterSpacing="3">INVASIVE • UNCOMFORTABLE • NO PRIVACY</text>
          </motion.g>

          {/* "The Bezliny Way" text */}
          <motion.g style={{ opacity: newWayText }}>
            <text x="500" y="540" textAnchor="middle" fill="#60a5fa" fillOpacity="0.9" fontSize="11" letterSpacing="6" fontWeight="600">THE BEZLINY WAY</text>
            <text x="500" y="560" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="8" letterSpacing="3">AUTONOMOUS • PRIVATE • PRECISION CLEAN</text>
          </motion.g>

          {/* 4th dimension depth lines (nano-tech aesthetic) */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.92], [0, 0.3, 0.3, 0]) }}>
            {[0,1,2,3,4,5].map((i) => (
              <line key={`depth-${i}`} x1={200 + i * 120} y1="55" x2={250 + i * 100} y2="545"
                stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="2 6" />
            ))}
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}

// TRANSITION 2: Performance Matrix — radial metrics emanating from core
// Communicates: "These numbers prove WHY this technology is superior"
export function PerformanceTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const coreScale = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const ring1 = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const ring2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const ring3 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const metricsOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.9], [0, 1, 1, 0]);
  const connectionOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const metrics = [
    { value: "99.7%", label: "PRECISION", angle: -60, color: "#22c55e" },
    { value: "4×", label: "FASTER", angle: 0, color: "#3b82f6" },
    { value: "ZERO", label: "RISK", angle: 60, color: "#f59e0b" },
    { value: "150m", label: "ALTITUDE", angle: 120, color: "#8b5cf6" },
    { value: "24/7", label: "OPERATION", angle: 180, color: "#06b6d4" },
    { value: "360°", label: "COVERAGE", angle: 240, color: "#ec4899" },
  ];

  return (
    <div ref={ref} className="relative h-[35vh] md:h-[45vh] overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0a0a0f] to-[#09090b]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        {/* Radial background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-500/[0.03] to-transparent" />
        </div>

        <svg className="w-full max-w-4xl h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="metricGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <radialGradient id="coreGrad">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer rotating ring */}
          <motion.g style={{ rotate: rotateOuter, transformOrigin: "400px 200px", opacity: ring3 }}>
            <circle cx="400" cy="200" r="170" fill="none" stroke="#3b82f6" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="8 4" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
              <circle key={`dot-outer-${a}`} cx={400 + 170 * Math.cos(a * Math.PI / 180)} cy={200 + 170 * Math.sin(a * Math.PI / 180)} r="1.5" fill="#3b82f6" fillOpacity="0.3" />
            ))}
          </motion.g>

          {/* Middle rotating ring */}
          <motion.g style={{ rotate: rotateInner, transformOrigin: "400px 200px", opacity: ring2 }}>
            <circle cx="400" cy="200" r="120" fill="none" stroke="#60a5fa" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 6" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <circle key={`dot-mid-${a}`} cx={400 + 120 * Math.cos(a * Math.PI / 180)} cy={200 + 120 * Math.sin(a * Math.PI / 180)} r="2" fill="#60a5fa" fillOpacity="0.4" />
            ))}
          </motion.g>

          {/* Inner ring */}
          <motion.g style={{ opacity: ring1 }}>
            <circle cx="400" cy="200" r="60" fill="none" stroke="#93c5fd" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle cx="400" cy="200" r="55" fill="none" stroke="#60a5fa" strokeOpacity="0.08" strokeWidth="8" />
          </motion.g>

          {/* Core */}
          <motion.g style={{ scale: coreScale, transformOrigin: "400px 200px" }}>
            <circle cx="400" cy="200" r="35" fill="url(#coreGrad)" />
            <circle cx="400" cy="200" r="20" fill="#09090b" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="400" cy="200" r="8" fill="#3b82f6" fillOpacity="0.8" filter="url(#metricGlow)" />
            {/* Core pulse */}
            <circle cx="400" cy="200" r="20" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.6">
              <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          {/* Connection lines from core to metrics */}
          <motion.g style={{ opacity: connectionOpacity }}>
            {metrics.map((m, i) => {
              const rad = m.angle * Math.PI / 180;
              const x2 = 400 + 140 * Math.cos(rad);
              const y2 = 200 + 95 * Math.sin(rad);
              return (
                <g key={`conn-${i}`}>
                  <line x1="400" y1="200" x2={x2} y2={y2} stroke={m.color} strokeOpacity="0.2" strokeWidth="0.5" strokeDasharray="3 3" />
                  {/* Traveling dot on connection */}
                  <circle r="2" fill={m.color} fillOpacity="0.7">
                    <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite"
                      path={`M400,200 L${x2},${y2}`} />
                  </circle>
                </g>
              );
            })}
          </motion.g>

          {/* Metric nodes */}
          <motion.g style={{ opacity: metricsOpacity }}>
            {metrics.map((m, i) => {
              const rad = m.angle * Math.PI / 180;
              const x = 400 + 140 * Math.cos(rad);
              const y = 200 + 95 * Math.sin(rad);
              return (
                <g key={`metric-${i}`}>
                  {/* Metric background */}
                  <circle cx={x} cy={y} r="28" fill="#09090b" stroke={m.color} strokeOpacity="0.4" strokeWidth="1" />
                  <circle cx={x} cy={y} r="28" fill={m.color} fillOpacity="0.05" />
                  {/* Value */}
                  <text x={x} y={y - 2} textAnchor="middle" fill={m.color} fontSize="12" fontWeight="700" letterSpacing="1">{m.value}</text>
                  {/* Label */}
                  <text x={x} y={y + 11} textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="6.5" letterSpacing="2">{m.label}</text>
                </g>
              );
            })}
          </motion.g>

          {/* Title */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.9], [0, 0.7, 0.7, 0]) }}>
            <text x="400" y="35" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9" letterSpacing="5">WHY INDUSTRY LEADERS CHOOSE US</text>
            <text x="400" y="380" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="8" letterSpacing="3">VERIFIED OPERATIONAL DATA</text>
          </motion.g>
        </svg>
      </motion.div>
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

