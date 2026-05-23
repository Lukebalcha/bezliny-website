"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// TRANSITION 1: Intelligent Pipeline — shows connected system nodes with data flow
// Communicates: "This is a precision-engineered process, not random cleaning"
export function DroneTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 100]);
  const node1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const node2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const node3 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const node4 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const node5 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const pulseOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.8, 0]);
  const dataFlow = useTransform(scrollYProgress, [0.15, 0.85], [0, 5]);

  const stages = [
    { label: "SCAN", sub: "3D Mapping", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" },
    { label: "ANALYZE", sub: "AI Processing", icon: "M21 3H3v18h18V3zm-2 16H5V5h14v14zM7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" },
    { label: "PLAN", sub: "Path Routing", icon: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" },
    { label: "EXECUTE", sub: "Precision Clean", icon: "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" },
    { label: "VERIFY", sub: "Quality Check", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
  ];

  return (
    <div ref={ref} className="relative h-[35vh] md:h-[45vh] overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0a0a0f] to-[#09090b]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Main pipeline SVG */}
        <svg className="w-full max-w-5xl h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Main connection line */}
          <motion.line
            x1="100" y1="150" x2="900" y2="150"
            stroke="url(#pipeGradient)" strokeWidth="1.5"
            strokeDasharray="1000"
            style={{ strokeDashoffset: useTransform(lineProgress, (v) => 1000 - v * 10) }}
          />

          {/* Secondary parallel lines */}
          <motion.line x1="100" y1="145" x2="900" y2="145" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="0.5"
            strokeDasharray="4 8" style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }} />
          <motion.line x1="100" y1="155" x2="900" y2="155" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="0.5"
            strokeDasharray="4 8" style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }} />

          {/* Data packets traveling along the line */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.circle key={`packet-${i}`} cy="150" r="2.5" fill="#60a5fa" filter="url(#nodeGlow)"
              style={{
                cx: useTransform(dataFlow, (v) => 100 + ((v * 160 + i * 115) % 800)),
                opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.8, 0.9], [0, 0.8, 0.8, 0])
              }}
            />
          ))}

          {/* Pipeline nodes */}
          {stages.map((stage, i) => {
            const cx = 140 + i * 180;
            const nodeOpacity = [node1, node2, node3, node4, node5][i];
            return (
              <motion.g key={stage.label} style={{ opacity: nodeOpacity }}>
                {/* Node outer ring */}
                <motion.circle cx={cx} cy={150} r="32" fill="none" stroke="#3b82f6" strokeWidth="1"
                  strokeDasharray="4 3" filter="url(#nodeGlow)">
                  <animateTransform attributeName="transform" type="rotate"
                    from={`0 ${cx} 150`} to={`${i % 2 === 0 ? 360 : -360} ${cx} 150`} dur={`${8 + i * 2}s`} repeatCount="indefinite" />
                </motion.circle>
                {/* Node inner circle */}
                <circle cx={cx} cy={150} r="22" fill="#09090b" stroke="#60a5fa" strokeWidth="1.5" />
                {/* Node core glow */}
                <circle cx={cx} cy={150} r="14" fill="#3b82f6" fillOpacity="0.1" />
                <circle cx={cx} cy={150} r="6" fill="#60a5fa" fillOpacity="0.6" />
                {/* Pulse ring */}
                <motion.circle cx={cx} cy={150} r="22" fill="none" stroke="#60a5fa" strokeWidth="0.5"
                  style={{ opacity: pulseOpacity, r: useTransform(scrollYProgress, [0.3, 0.7], [22, 40]) }} />
                {/* Stage label */}
                <text x={cx} y={195} textAnchor="middle" fill="white" fillOpacity="0.9" fontSize="10" fontWeight="600" letterSpacing="2">{stage.label}</text>
                <text x={cx} y={210} textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="8" letterSpacing="1">{stage.sub}</text>
                {/* Connection dots between nodes */}
                {i < 4 && (
                  <>
                    <circle cx={cx + 60} cy={150} r="1.5" fill="#3b82f6" fillOpacity="0.5" />
                    <circle cx={cx + 90} cy={150} r="1" fill="#3b82f6" fillOpacity="0.3" />
                    <circle cx={cx + 120} cy={150} r="1.5" fill="#3b82f6" fillOpacity="0.5" />
                  </>
                )}
              </motion.g>
            );
          })}

          {/* Top data readout */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.9], [0, 0.7, 0.7, 0]) }}>
            <text x="500" y="80" textAnchor="middle" fill="#60a5fa" fillOpacity="0.5" fontSize="9" letterSpacing="4">AUTONOMOUS CLEANING PIPELINE v3.2</text>
            <line x1="200" y1="90" x2="800" y2="90" stroke="#3b82f6" strokeOpacity="0.1" strokeWidth="0.5" />
          </motion.g>

          {/* Bottom status indicators */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6, 0.8, 0.9], [0, 0.6, 0.6, 0]) }}>
            <text x="200" y="260" textAnchor="middle" fill="#22c55e" fillOpacity="0.6" fontSize="8" letterSpacing="2">● SYSTEM ACTIVE</text>
            <text x="500" y="260" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="8" letterSpacing="2">LATENCY: 12ms</text>
            <text x="800" y="260" textAnchor="middle" fill="#60a5fa" fillOpacity="0.5" fontSize="8" letterSpacing="2">ACCURACY: 99.7%</text>
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
            <text x="400" y="35" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9" letterSpacing="5">PERFORMANCE METRICS</text>
            <text x="400" y="380" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="8" letterSpacing="3">REAL-TIME MONITORING ACTIVE</text>
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

