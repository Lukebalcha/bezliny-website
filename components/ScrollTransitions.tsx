"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// TRANSITION 1: Cinematic 4D Window Perspective — NANO-TECH DETAIL LEVEL
// Story: Customer POV through high-rise window → rope cleaners descend (hyper-detailed, invasive, creepy)
// → panic/curtains close → industrial drone arrives with precision nozzle array
// Detail level: Every rope fiber, harness buckle, pocket zipper, skin texture visible
// Architecture: Real industrial drone proportions — 2m wingspan, multi-nozzle array, composite body
export function DroneTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scene progression (0→1 as user scrolls)
  const masterOpacity = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], [0, 1, 1, 0]);
  
  // Phase 1: Window frame appears (0.0 - 0.2)
  const windowOpacity = useTransform(scrollYProgress, [0.03, 0.12], [0, 1]);
  const cityOpacity = useTransform(scrollYProgress, [0.06, 0.18], [0, 1]);
  
  // Phase 2: Rope cleaners descend (0.15 - 0.42)
  const ropeY = useTransform(scrollYProgress, [0.15, 0.35], [-300, 40]);
  const ropeOpacity = useTransform(scrollYProgress, [0.15, 0.22, 0.42, 0.48], [0, 1, 1, 0]);
  const ropeSwing = useTransform(scrollYProgress, [0.22, 0.28, 0.34, 0.4], [-2, 1.5, -1, 0.5]);
  
  // Phase 3: Discomfort + curtains close (0.35 - 0.55)
  const discomfortOpacity = useTransform(scrollYProgress, [0.34, 0.4, 0.5, 0.54], [0, 0.35, 0.35, 0]);
  
  // Phase 4: Transition flash (0.5 - 0.58)
  const flashOpacity = useTransform(scrollYProgress, [0.52, 0.55, 0.58], [0, 0.9, 0]);
  
  // Phase 5: Drone arrives (0.55 - 0.9)
  const droneOpacity = useTransform(scrollYProgress, [0.56, 0.63, 0.9, 0.96], [0, 1, 1, 0]);
  const droneScale = useTransform(scrollYProgress, [0.56, 0.72, 0.88], [0.2, 1, 1.05]);
  const sprayOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.88, 0.93], [0, 1, 1, 0]);
  const cleanGlow = useTransform(scrollYProgress, [0.75, 0.88], [0, 1]);
  
  // Text reveals
  const oldWayText = useTransform(scrollYProgress, [0.25, 0.3, 0.42, 0.47], [0, 1, 1, 0]);
  const newWayText = useTransform(scrollYProgress, [0.72, 0.78, 0.9, 0.95], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[100vh] md:h-[120vh] overflow-hidden bg-[#030308]">
      <motion.div style={{ opacity: masterOpacity }} className="absolute inset-0 flex items-center justify-center">
        
        <svg className="w-full h-full max-w-7xl" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Hyper-realistic gradients */}
            <linearGradient id="skyGrad4d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0a1a" />
              <stop offset="40%" stopColor="#0d1525" />
              <stop offset="100%" stopColor="#131b2e" />
            </linearGradient>
            <linearGradient id="steelFrame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="30%" stopColor="#2a2a2a" />
              <stop offset="70%" stopColor="#1f1f1f" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>
            <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="50%" stopColor="#c49464" />
              <stop offset="100%" stopColor="#b08050" />
            </linearGradient>
            <linearGradient id="overallGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3a5c" />
              <stop offset="50%" stopColor="#153050" />
              <stop offset="100%" stopColor="#0f2540" />
            </linearGradient>
            <linearGradient id="helmetGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffcc00" />
              <stop offset="30%" stopColor="#e6b800" />
              <stop offset="100%" stopColor="#cc9900" />
            </linearGradient>
            <linearGradient id="droneBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2744" />
              <stop offset="40%" stopColor="#0f1c33" />
              <stop offset="100%" stopColor="#0a1422" />
            </linearGradient>
            <linearGradient id="droneArm" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2a4060" />
              <stop offset="50%" stopColor="#1a3050" />
              <stop offset="100%" stopColor="#0f2040" />
            </linearGradient>
            <linearGradient id="carbonFiber" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="25%" stopColor="#222244" />
              <stop offset="50%" stopColor="#1a1a2e" />
              <stop offset="75%" stopColor="#222244" />
              <stop offset="100%" stopColor="#1a1a2e" />
            </linearGradient>
            <linearGradient id="nozzleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0f2040" />
              <stop offset="50%" stopColor="#1a3050" />
              <stop offset="100%" stopColor="#0a1830" />
            </linearGradient>
            <radialGradient id="propBlur" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="curtainVelvet" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a0808" />
              <stop offset="20%" stopColor="#2d1010" />
              <stop offset="40%" stopColor="#3d1515" />
              <stop offset="60%" stopColor="#2d1010" />
              <stop offset="80%" stopColor="#3d1515" />
              <stop offset="100%" stopColor="#1a0808" />
            </linearGradient>
            <filter id="nanoGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="heavyGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
            </filter>
            <clipPath id="windowClip4d">
              <rect x="180" y="60" width="840" height="580" rx="3" />
            </clipPath>
            {/* Rope texture pattern */}
            <pattern id="ropeTexture" x="0" y="0" width="4" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 0 Q2 2 4 0 Q2 6 0 8" fill="none" stroke="#8b7355" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* === ARCHITECTURAL WINDOW FRAME (premium steel & glass) === */}
          <motion.g style={{ opacity: windowOpacity }}>
            {/* Room darkness — deep black void surrounding window */}
            <rect x="0" y="0" width="1200" height="700" fill="#020205" />
            
            {/* Window opening — the view */}
            <rect x="180" y="60" width="840" height="580" fill="url(#skyGrad4d)" rx="2" />
            
            {/* Premium steel frame — multi-layer depth */}
            <rect x="172" y="52" width="856" height="596" fill="none" stroke="#1a1a1a" strokeWidth="16" rx="4" />
            <rect x="176" y="56" width="848" height="588" fill="none" stroke="#2a2a2a" strokeWidth="8" rx="3" />
            <rect x="178" y="58" width="844" height="584" fill="none" stroke="#3a3a3a" strokeWidth="2" rx="2" />
            
            {/* Cross mullions — precision engineered */}
            <rect x="595" y="52" width="10" height="596" fill="url(#steelFrame)" />
            <rect x="172" y="345" width="856" height="8" fill="url(#steelFrame)" />
            
            {/* Mullion edge highlights */}
            <line x1="595" y1="52" x2="595" y2="648" stroke="#4a4a4a" strokeWidth="0.5" />
            <line x1="605" y1="52" x2="605" y2="648" stroke="#111" strokeWidth="0.5" />
            
            {/* Window hardware — locks, handles */}
            <rect x="588" y="330" width="24" height="30" rx="3" fill="#222" stroke="#444" strokeWidth="1" />
            <circle cx="600" cy="345" r="4" fill="#333" stroke="#555" strokeWidth="0.5" />
            
            {/* Window sill — polished stone */}
            <rect x="165" y="645" width="870" height="22" fill="#1a1a1a" rx="2" />
            <rect x="165" y="645" width="870" height="3" fill="#333" rx="1" />
            
            {/* Glass reflections — subtle, realistic */}
            <path d="M200 80 L240 400" stroke="white" strokeOpacity="0.015" strokeWidth="40" strokeLinecap="round" />
            <path d="M800 70 L850 250" stroke="white" strokeOpacity="0.01" strokeWidth="25" strokeLinecap="round" />
            <path d="M400 600 L500 400" stroke="white" strokeOpacity="0.008" strokeWidth="15" strokeLinecap="round" />
          </motion.g>

          {/* === CITY SKYLINE — Warsaw at night (hyper-detailed) === */}
          <motion.g style={{ opacity: cityOpacity }} clipPath="url(#windowClip4d)">
            {/* Sky gradient overlay */}
            <rect x="180" y="60" width="840" height="580" fill="url(#skyGrad4d)" />
            
            {/* Distant buildings — varied architectural styles */}
            <rect x="195" y="200" width="75" height="440" fill="#0c0c1a" stroke="#1a1a30" strokeWidth="0.3" />
            <rect x="280" y="140" width="95" height="500" fill="#0a0a18" stroke="#181830" strokeWidth="0.3" />
            <rect x="385" y="170" width="65" height="470" fill="#0d0d1e" stroke="#1c1c35" strokeWidth="0.3" />
            <rect x="460" y="110" width="110" height="530" fill="#090916" stroke="#161630" strokeWidth="0.3" />
            <rect x="620" y="130" width="85" height="510" fill="#0b0b1a" stroke="#1a1a32" strokeWidth="0.3" />
            <rect x="715" y="155" width="70" height="485" fill="#0c0c1c" stroke="#1b1b34" strokeWidth="0.3" />
            <rect x="795" y="185" width="90" height="455" fill="#0a0a17" stroke="#191930" strokeWidth="0.3" />
            <rect x="895" y="210" width="60" height="430" fill="#0d0d1e" stroke="#1d1d36" strokeWidth="0.3" />
            <rect x="960" y="165" width="50" height="475" fill="#0b0b19" stroke="#1a1a32" strokeWidth="0.3" />
            
            {/* Building window grids — life inside */}
            {[210, 295, 475, 635, 730, 810].map((bx, bi) => 
              Array.from({length: 12}, (_, floor) => (
                <rect key={`bw-${bi}-${floor}`} x={bx + 8 + (floor % 3) * 18} y={230 + floor * 32} width="10" height="14" 
                  fill="#ffd700" fillOpacity={[0.03, 0.08, 0.15, 0.05, 0.12, 0.02][bi] * (floor % 2 === 0 ? 1.5 : 0.5)} rx="0.5" />
              ))
            )}
            
            {/* Atmospheric haze layers */}
            <rect x="180" y="450" width="840" height="190" fill="#0a0a1a" fillOpacity="0.4" />
            <rect x="180" y="550" width="840" height="90" fill="#0a0a1a" fillOpacity="0.3" />
          </motion.g>

          {/* === ROPE CLEANERS — HYPER-DETAILED HUMANS (the old invasive way) === */}
          <motion.g style={{ opacity: ropeOpacity }} clipPath="url(#windowClip4d)">
            <motion.g style={{ y: ropeY, rotate: ropeSwing, transformOrigin: "600px 0px" }}>
              
              {/* ROPES — individual fiber detail with braided texture */}
              <line x1="420" y1="-300" x2="420" y2="250" stroke="url(#ropeTexture)" strokeWidth="5" />
              <line x1="418" y1="-300" x2="418" y2="250" stroke="#5a4a35" strokeWidth="1.5" />
              <line x1="422" y1="-300" x2="422" y2="250" stroke="#6b5a45" strokeWidth="1" />
              {/* Rope 2 */}
              <line x1="760" y1="-300" x2="760" y2="220" stroke="url(#ropeTexture)" strokeWidth="5" />
              <line x1="758" y1="-300" x2="758" y2="220" stroke="#5a4a35" strokeWidth="1.5" />
              <line x1="762" y1="-300" x2="762" y2="220" stroke="#6b5a45" strokeWidth="1" />

              {/* === WORKER 1 — RIGHT AT THE WINDOW, detailed down to pores === */}
              <g transform="translate(380, 180)" filter="url(#softShadow)">
                {/* HARNESS SYSTEM — full body rigging */}
                {/* Main webbing straps */}
                <path d="M15 30 L15 0 L45 0 L45 30" fill="none" stroke="#cc0000" strokeWidth="3" />
                <path d="M15 30 L15 90 M45 30 L45 90" fill="none" stroke="#cc0000" strokeWidth="3" />
                <path d="M15 55 L45 55" fill="none" stroke="#cc0000" strokeWidth="2.5" />
                {/* D-ring connector (chest) */}
                <circle cx="30" cy="30" r="5" fill="none" stroke="#aaa" strokeWidth="2" />
                <rect x="27" y="24" width="6" height="4" fill="#888" rx="1" />
                {/* Carabiner on rope */}
                <path d="M37 -5 Q42 -10 40 -20 L38 -20 Q40 -10 37 -5" fill="#bbb" stroke="#999" strokeWidth="1" />
                
                {/* BODY — realistic proportions */}
                {/* Torso in work coverall */}
                <path d="M12 30 Q8 35 8 50 L8 95 Q8 98 12 100 L48 100 Q52 98 52 95 L52 50 Q52 35 48 30 Z" fill="url(#overallGrad)" stroke="#0a1a30" strokeWidth="0.5" />
                {/* Chest pocket (left) with pen */}
                <rect x="14" y="40" width="12" height="14" fill="#122840" stroke="#1a3a5c" strokeWidth="0.5" rx="1" />
                <line x1="18" y1="40" x2="18" y2="36" stroke="#333" strokeWidth="1.5" />
                {/* Chest pocket (right) — radio */}
                <rect x="34" y="38" width="12" height="18" fill="#111" stroke="#333" strokeWidth="0.5" rx="1" />
                <rect x="36" y="40" width="8" height="8" fill="#1a1a1a" rx="0.5" />
                <line x1="40" y1="38" x2="42" y2="30" stroke="#333" strokeWidth="0.5" />
                {/* Tool belt */}
                <rect x="8" y="88" width="44" height="8" fill="#2a1a0a" stroke="#1a0a00" strokeWidth="0.5" rx="1" />
                {/* Belt loops and buckle */}
                <rect x="26" y="87" width="8" height="10" fill="#888" stroke="#666" strokeWidth="0.5" rx="1" />
                {/* Hip pouches (tools) */}
                <rect x="6" y="88" width="10" height="14" fill="#1a0a00" stroke="#0a0500" strokeWidth="0.5" rx="2" />
                <rect x="44" y="88" width="12" height="16" fill="#1a0a00" stroke="#0a0500" strokeWidth="0.5" rx="2" />
                
                {/* HEAD — detailed face visible through window */}
                <ellipse cx="30" cy="8" rx="13" ry="14" fill="url(#skinTone)" />
                {/* Facial features — you can see the detail */}
                <ellipse cx="24" cy="5" rx="2.5" ry="1.5" fill="#2a1a0a" /> {/* Left eye */}
                <ellipse cx="36" cy="5" rx="2.5" ry="1.5" fill="#2a1a0a" /> {/* Right eye */}
                <path d="M28 11 Q30 13 32 11" fill="none" stroke="#8a6040" strokeWidth="1" /> {/* Nose */}
                <path d="M25 16 Q30 18 35 16" fill="none" stroke="#7a5030" strokeWidth="1.2" /> {/* Mouth */}
                {/* Stubble texture */}
                <rect x="22" y="14" width="16" height="8" fill="#2a1a0a" fillOpacity="0.08" rx="4" />
                {/* Eyebrows — furrowed (concentrated) */}
                <path d="M21 0 Q24 -2 27 0" fill="none" stroke="#3a2a1a" strokeWidth="1.5" />
                <path d="M33 0 Q36 -2 39 0" fill="none" stroke="#3a2a1a" strokeWidth="1.5" />
                
                {/* HELMET — industrial safety hard hat */}
                <path d="M14 -4 Q15 -18 30 -20 Q45 -18 46 -4 Q44 -2 30 -2 Q16 -2 14 -4 Z" fill="url(#helmetGrad)" stroke="#aa8800" strokeWidth="0.5" />
                {/* Helmet brim */}
                <path d="M12 -3 Q30 0 48 -3" fill="none" stroke="#cc9900" strokeWidth="2" />
                {/* Chin strap */}
                <path d="M18 -3 L16 12 Q17 14 18 12" fill="none" stroke="#333" strokeWidth="1" />
                <path d="M42 -3 L44 12 Q43 14 42 12" fill="none" stroke="#333" strokeWidth="1" />
                {/* Headlamp */}
                <rect x="25" y="-16" width="10" height="6" fill="#222" stroke="#444" strokeWidth="0.5" rx="2" />
                <circle cx="30" cy="-13" r="2.5" fill="#ffd700" fillOpacity="0.3" />
                
                {/* ARMS — reaching toward window, muscular detail */}
                {/* Left arm — holding rope */}
                <path d="M12 35 Q5 40 2 55 Q0 65 -5 75" fill="none" stroke="url(#skinTone)" strokeWidth="6" strokeLinecap="round" />
                {/* Gloved hand gripping rope */}
                <ellipse cx="-5" cy="78" rx="5" ry="6" fill="#333" stroke="#222" strokeWidth="0.5" />
                {/* Right arm — holding squeegee pressed to glass */}
                <path d="M48 35 Q58 38 68 42 Q78 45 85 48" fill="none" stroke="url(#skinTone)" strokeWidth="6" strokeLinecap="round" />
                {/* Gloved hand */}
                <ellipse cx="88" cy="49" rx="5" ry="5" fill="#333" stroke="#222" strokeWidth="0.5" />
                {/* SQUEEGEE — professional tool, detailed */}
                <rect x="85" y="44" width="55" height="4" fill="#bbb" stroke="#999" strokeWidth="0.5" rx="1" />
                <rect x="135" y="38" width="4" height="16" fill="#666" rx="1" /> {/* Handle joint */}
                <rect x="134" y="36" width="40" height="3" fill="#444" rx="1" /> {/* Rubber blade */}
                <rect x="134" y="53" width="40" height="3" fill="#444" rx="1" /> {/* Rubber blade bottom */}
                <line x1="140" y1="38" x2="140" y2="54" stroke="#555" strokeWidth="0.3" />
                <line x1="150" y1="38" x2="150" y2="54" stroke="#555" strokeWidth="0.3" />
                <line x1="160" y1="38" x2="160" y2="54" stroke="#555" strokeWidth="0.3" />
                
                {/* LEGS — heavy work boots, detailed */}
                <path d="M16 100 L14 135 L12 165" fill="none" stroke="url(#overallGrad)" strokeWidth="9" strokeLinecap="round" />
                <path d="M44 100 L46 135 L48 165" fill="none" stroke="url(#overallGrad)" strokeWidth="9" strokeLinecap="round" />
                {/* Knee pads */}
                <ellipse cx="14" cy="135" rx="6" ry="8" fill="#222" stroke="#111" strokeWidth="0.5" />
                <ellipse cx="46" cy="135" rx="6" ry="8" fill="#222" stroke="#111" strokeWidth="0.5" />
                {/* Steel-toe boots */}
                <rect x="5" y="160" width="16" height="14" fill="#1a0a00" stroke="#0a0500" strokeWidth="0.5" rx="3" />
                <rect x="41" y="160" width="16" height="14" fill="#1a0a00" stroke="#0a0500" strokeWidth="0.5" rx="3" />
                {/* Boot soles */}
                <rect x="5" y="172" width="16" height="3" fill="#0a0500" rx="1" />
                <rect x="41" y="172" width="16" height="3" fill="#0a0500" rx="1" />
                
                {/* Water dripping from squeegee */}
                <circle cx="140" cy="58" r="1" fill="#60a5fa" fillOpacity="0.5">
                  <animate attributeName="cy" values="58;120;180" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.3;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="155" cy="60" r="0.8" fill="#60a5fa" fillOpacity="0.4">
                  <animate attributeName="cy" values="60;130;200" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.2;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* === WORKER 2 — CREEPING CLOSER, face pressed to glass === */}
              <g transform="translate(710, 150)" filter="url(#softShadow)">
                {/* Harness system */}
                <path d="M15 30 L15 0 L45 0 L45 30" fill="none" stroke="#cc0000" strokeWidth="3" />
                <path d="M15 30 L15 90 M45 30 L45 90" fill="none" stroke="#cc0000" strokeWidth="3" />
                <circle cx="30" cy="30" r="5" fill="none" stroke="#aaa" strokeWidth="2" />
                
                {/* Torso — same workwear */}
                <path d="M12 30 Q8 35 8 50 L8 95 Q8 98 12 100 L48 100 Q52 98 52 95 L52 50 Q52 35 48 30 Z" fill="url(#overallGrad)" stroke="#0a1a30" strokeWidth="0.5" />
                {/* Pockets visible */}
                <rect x="14" y="42" width="12" height="12" fill="#122840" stroke="#1a3a5c" strokeWidth="0.5" rx="1" />
                <rect x="10" y="88" width="40" height="8" fill="#2a1a0a" stroke="#1a0a00" strokeWidth="0.5" rx="1" />
                
                {/* Head — PRESSED AGAINST GLASS (the creepy invasion) */}
                <ellipse cx="30" cy="8" rx="13" ry="14" fill="url(#skinTone)" />
                {/* Eyes LOOKING IN — directly at you */}
                <ellipse cx="24" cy="5" rx="3" ry="2" fill="#1a0a00" />
                <circle cx="24" cy="5" r="1" fill="#fff" /> {/* Eye gleam */}
                <ellipse cx="36" cy="5" rx="3" ry="2" fill="#1a0a00" />
                <circle cx="36" cy="5" r="1" fill="#fff" />
                <path d="M27 12 Q30 14 33 12" fill="none" stroke="#8a6040" strokeWidth="1" />
                
                {/* Helmet */}
                <path d="M14 -4 Q15 -18 30 -20 Q45 -18 46 -4 Q44 -2 30 -2 Q16 -2 14 -4 Z" fill="url(#helmetGrad)" stroke="#aa8800" strokeWidth="0.5" />
                <rect x="25" y="-16" width="10" height="6" fill="#222" stroke="#444" strokeWidth="0.5" rx="2" />
                
                {/* Hand pressed flat against glass — creepy detail */}
                <g transform="translate(50, 20)">
                  <path d="M0 0 L-3 -15 M3 0 L3 -16 M7 0 L8 -14 M11 0 L13 -13 M15 0 L16 -10" fill="none" stroke="url(#skinTone)" strokeWidth="3" strokeLinecap="round" />
                  <ellipse cx="8" cy="5" rx="10" ry="6" fill="url(#skinTone)" fillOpacity="0.8" />
                </g>
                
                {/* Legs */}
                <path d="M16 100 L15 140 L13 170" fill="none" stroke="url(#overallGrad)" strokeWidth="9" strokeLinecap="round" />
                <path d="M44 100 L45 140 L47 170" fill="none" stroke="url(#overallGrad)" strokeWidth="9" strokeLinecap="round" />
                <rect x="6" y="165" width="16" height="14" fill="#1a0a00" rx="3" />
                <rect x="40" y="165" width="16" height="14" fill="#1a0a00" rx="3" />
              </g>

              {/* Safety rope connections to building above */}
              <path d="M420 -300 Q420 -280 418 -260" fill="none" stroke="#5a4a35" strokeWidth="2" />
              <path d="M760 -300 Q760 -280 758 -260" fill="none" stroke="#5a4a35" strokeWidth="2" />
            </motion.g>
          </motion.g>

          {/* === DISCOMFORT OVERLAY (deep red invasion feeling) === */}
          <motion.rect x="180" y="60" width="840" height="580" fill="#8b0000"
            style={{ opacity: discomfortOpacity }} />

          {/* === CURTAINS CLOSING (velvet, heavy, detailed folds) === */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.36, 0.4, 0.7, 0.74], [0, 1, 1, 0]) }}>
            {/* Left curtain */}
            <motion.g style={{ x: useTransform(scrollYProgress, (v: number) => {
              if (v < 0.38) return -500;
              if (v < 0.52) return -500 + ((v - 0.38) / 0.14) * 500;
              if (v < 0.6) return 0;
              if (v < 0.72) return -((v - 0.6) / 0.12) * 500;
              return -500;
            }) }}>
              <rect x="180" y="60" width="430" height="580" fill="url(#curtainVelvet)" />
              {/* Detailed curtain folds */}
              {[210, 250, 290, 330, 370, 410, 450, 490, 530, 570].map((cx, i) => (
                <line key={`cl-${i}`} x1={cx} y1="60" x2={cx} y2="640" stroke={i % 2 === 0 ? "#0a0303" : "#4a1515"} strokeWidth={i % 3 === 0 ? "2" : "1"} strokeOpacity="0.6" />
              ))}
              {/* Curtain rod rings */}
              <circle cx="220" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
              <circle cx="300" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
              <circle cx="380" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
            </motion.g>
            {/* Right curtain */}
            <motion.g style={{ x: useTransform(scrollYProgress, (v: number) => {
              if (v < 0.38) return 500;
              if (v < 0.52) return 500 - ((v - 0.38) / 0.14) * 500;
              if (v < 0.6) return 0;
              if (v < 0.72) return ((v - 0.6) / 0.12) * 500;
              return 500;
            }) }}>
              <rect x="600" y="60" width="420" height="580" fill="url(#curtainVelvet)" />
              {[630, 670, 710, 750, 790, 830, 870, 910, 950].map((cx, i) => (
                <line key={`cr-${i}`} x1={cx} y1="60" x2={cx} y2="640" stroke={i % 2 === 0 ? "#0a0303" : "#4a1515"} strokeWidth={i % 3 === 0 ? "2" : "1"} strokeOpacity="0.6" />
              ))}
              <circle cx="660" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
              <circle cx="740" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
              <circle cx="820" cy="65" r="6" fill="none" stroke="#888" strokeWidth="1.5" />
            </motion.g>
          </motion.g>

          {/* === TRANSITION FLASH === */}
          <motion.rect x="0" y="0" width="1200" height="700" fill="white"
            style={{ opacity: flashOpacity }} />

          {/* === INDUSTRIAL DRONE — REAL ARCHITECTURE, MASSIVE, DETAILED === */}
          <motion.g style={{ opacity: droneOpacity }} clipPath="url(#windowClip4d)">
            <motion.g style={{ 
              scale: droneScale,
              transformOrigin: "600px 350px"
            }}>
              <g transform="translate(400, 220)">
                {/* === MAIN BODY — carbon fiber composite fuselage === */}
                {/* Central body — hexagonal cross-section industrial housing */}
                <path d="M80 40 L320 40 Q340 40 340 60 L340 100 Q340 120 320 120 L80 120 Q60 120 60 100 L60 60 Q60 40 80 40 Z" fill="url(#droneBody)" stroke="#3b82f6" strokeWidth="1" />
                {/* Carbon fiber panel lines */}
                <line x1="100" y1="40" x2="100" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="140" y1="40" x2="140" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="180" y1="40" x2="180" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="220" y1="40" x2="220" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="260" y1="40" x2="260" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="300" y1="40" x2="300" y2="120" stroke="#2a4060" strokeWidth="0.3" />
                {/* Horizontal seams */}
                <line x1="60" y1="70" x2="340" y2="70" stroke="#2a4060" strokeWidth="0.3" />
                <line x1="60" y1="90" x2="340" y2="90" stroke="#2a4060" strokeWidth="0.3" />
                
                {/* Top sensor array dome */}
                <ellipse cx="200" cy="38" rx="40" ry="12" fill="#0a1422" stroke="#3b82f6" strokeWidth="0.8" />
                <circle cx="185" cy="35" r="3" fill="#111" stroke="#60a5fa" strokeWidth="0.5" />
                <circle cx="200" cy="33" r="4" fill="#111" stroke="#60a5fa" strokeWidth="0.5" />
                <circle cx="215" cy="35" r="3" fill="#111" stroke="#60a5fa" strokeWidth="0.5" />
                
                {/* === PROPULSION ARMS — 6 arms, carbon fiber tubular === */}
                {/* Front-left arm */}
                <rect x="30" y="55" width="80" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" transform="rotate(-30 60 60)" />
                {/* Front-right arm */}
                <rect x="290" y="55" width="80" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" transform="rotate(30 340 60)" />
                {/* Mid-left arm */}
                <rect x="10" y="76" width="70" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" />
                {/* Mid-right arm */}
                <rect x="320" y="76" width="70" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" />
                {/* Rear-left arm */}
                <rect x="30" y="95" width="80" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" transform="rotate(25 60 100)" />
                {/* Rear-right arm */}
                <rect x="290" y="95" width="80" height="8" rx="4" fill="url(#droneArm)" stroke="#3b82f6" strokeWidth="0.5" transform="rotate(-25 340 100)" />
                
                {/* === PROPELLERS — motion blur discs (6 props) === */}
                <ellipse cx="-20" cy="25" rx="35" ry="35" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0 -20 25" to="360 -20 25" dur="0.1s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="420" cy="25" rx="35" ry="35" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0 420 25" to="-360 420 25" dur="0.1s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="-40" cy="80" rx="32" ry="32" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 -40 80" to="360 -40 80" dur="0.12s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="440" cy="80" rx="32" ry="32" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 440 80" to="-360 440 80" dur="0.12s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="-15" cy="135" rx="33" ry="33" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 -15 135" to="360 -15 135" dur="0.11s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="415" cy="135" rx="33" ry="33" fill="url(#propBlur)" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 415 135" to="-360 415 135" dur="0.11s" repeatCount="indefinite" />
                </ellipse>
                
                {/* === NOZZLE ARRAY — the cleaning nose (front-mounted) === */}
                <g transform="translate(340, 55)">
                  {/* Nozzle housing — extends forward */}
                  <path d="M0 0 L60 -10 L80 -5 L80 35 L60 40 L0 30 Z" fill="url(#nozzleGrad)" stroke="#3b82f6" strokeWidth="1" />
                  {/* Multi-nozzle tips — high pressure array */}
                  <circle cx="85" cy="5" r="5" fill="#050510" stroke="#60a5fa" strokeWidth="1.5" filter="url(#nanoGlow)" />
                  <circle cx="88" cy="15" r="4" fill="#050510" stroke="#60a5fa" strokeWidth="1" filter="url(#nanoGlow)" />
                  <circle cx="85" cy="25" r="5" fill="#050510" stroke="#60a5fa" strokeWidth="1.5" filter="url(#nanoGlow)" />
                  <circle cx="90" cy="10" r="2.5" fill="#050510" stroke="#93c5fd" strokeWidth="0.8" />
                  <circle cx="90" cy="20" r="2.5" fill="#050510" stroke="#93c5fd" strokeWidth="0.8" />
                  {/* Pressure lines to nozzles */}
                  <line x1="60" y1="5" x2="80" y2="5" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="60" y1="15" x2="83" y2="15" stroke="#3b82f6" strokeWidth="1" />
                  <line x1="60" y1="25" x2="80" y2="25" stroke="#3b82f6" strokeWidth="1.5" />
                  {/* Flow direction arrows */}
                  <path d="M70 5 L75 3 L75 7 Z" fill="#60a5fa" fillOpacity="0.6" />
                  <path d="M70 25 L75 23 L75 27 Z" fill="#60a5fa" fillOpacity="0.6" />
                </g>
                
                {/* === STATUS INDICATORS — running systems === */}
                {/* Power indicator */}
                <circle cx="120" cy="55" r="4" fill="#22c55e" filter="url(#nanoGlow)">
                  <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
                </circle>
                {/* Pressure gauge */}
                <circle cx="160" cy="55" r="4" fill="#3b82f6" filter="url(#nanoGlow)">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
                </circle>
                {/* Navigation */}
                <circle cx="200" cy="55" r="4" fill="#22c55e" filter="url(#nanoGlow)">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* LiDAR active */}
                <circle cx="240" cy="55" r="4" fill="#a855f7" filter="url(#nanoGlow)">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="0.8s" repeatCount="indefinite" />
                </circle>
                {/* Fluid level */}
                <circle cx="280" cy="55" r="4" fill="#06b6d4" filter="url(#nanoGlow)">
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* === WATER TANK (underslung) === */}
                <rect x="120" y="122" width="160" height="30" rx="8" fill="#0a1422" stroke="#1e40af" strokeWidth="0.8" />
                <text x="200" y="141" textAnchor="middle" fill="#3b82f6" fillOpacity="0.5" fontSize="7" fontFamily="monospace">H₂O TANK — 15L</text>
                
                {/* === TETHER CABLE (to roof unit) === */}
                <path d="M200 38 Q200 -20 195 -60 Q190 -120 200 -200" fill="none" stroke="#444" strokeWidth="2" strokeDasharray="6 3" />
                <path d="M202 38 Q202 -20 197 -60 Q192 -120 202 -200" fill="none" stroke="#222" strokeWidth="1" />
              </g>
            </motion.g>

            {/* === SPRAY SYSTEM ACTIVE — high pressure water mist === */}
            <motion.g style={{ opacity: sprayOpacity }}>
              {/* Main spray cone */}
              <path d="M830 280 Q900 260 950 290 Q930 340 860 350 Z" fill="#60a5fa" fillOpacity="0.06" />
              <path d="M835 285 Q890 270 940 295 Q920 330 855 340 Z" fill="#93c5fd" fillOpacity="0.04" />
              
              {/* Individual droplets — nano-scale spray visualization */}
              {Array.from({length: 25}, (_, i) => (
                <circle key={`nano-${i}`} r={0.5 + Math.random() * 2}
                  cx={835 + Math.random() * 120} cy={265 + Math.random() * 90}
                  fill="#60a5fa" fillOpacity={0.2 + Math.random() * 0.5}>
                  <animate attributeName="cx" values={`${835 + i * 5};${855 + i * 5};${835 + i * 5}`} dur={`${0.5 + Math.random() * 1.5}s`} repeatCount="indefinite" />
                  <animate attributeName="r" values={`${0.5 + Math.random()};${1 + Math.random() * 2};${0.5 + Math.random()}`} dur={`${0.8 + Math.random()}s`} repeatCount="indefinite" />
                </circle>
              ))}
              
              {/* Pressure stream lines */}
              {[280, 295, 310, 325].map((y, i) => (
                <line key={`stream-${i}`} x1="830" y1={y} x2={900 + i * 15} y2={y + 5}
                  stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 5">
                  <animate attributeName="strokeDashoffset" values="0;-8" dur="0.3s" repeatCount="indefinite" />
                </line>
              ))}
            </motion.g>
            
            {/* Clean glass result — pristine glow */}
            <motion.g style={{ opacity: useTransform(cleanGlow, (v: number) => v * 0.06) }}>
              <rect x="180" y="60" width="840" height="580" fill="#60a5fa" rx="2" />
            </motion.g>
          </motion.g>

          {/* === TEXT — minimal, luxury typography === */}
          <motion.g style={{ opacity: oldWayText }}>
            <text x="600" y="660" textAnchor="middle" fill="#ff4444" fillOpacity="0.7" fontSize="10" letterSpacing="8" fontFamily="monospace">THE OLD WAY</text>
            <text x="600" y="678" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="7" letterSpacing="4" fontFamily="monospace">INVASIVE • NO PRIVACY • HUMAN ERROR</text>
          </motion.g>
          <motion.g style={{ opacity: newWayText }}>
            <text x="600" y="660" textAnchor="middle" fill="#60a5fa" fillOpacity="0.9" fontSize="10" letterSpacing="8" fontFamily="monospace" filter="url(#nanoGlow)">THE BEZLINY WAY</text>
            <text x="600" y="678" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="7" letterSpacing="4" fontFamily="monospace">AUTONOMOUS • PRECISION • ZERO INTRUSION</text>
          </motion.g>

          {/* === NANO-TECH DEPTH GRID (4th dimension layer) === */}
          <motion.g style={{ opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.88, 0.94], [0, 0.2, 0.2, 0]) }}>
            {Array.from({length: 15}, (_, i) => (
              <line key={`grid-v-${i}`} x1={250 + i * 50} y1="65" x2={260 + i * 48} y2="635"
                stroke="#3b82f6" strokeOpacity="0.04" strokeWidth="0.3" />
            ))}
            {Array.from({length: 8}, (_, i) => (
              <line key={`grid-h-${i}`} x1="185" y1={100 + i * 70} x2="1015" y2={105 + i * 68}
                stroke="#3b82f6" strokeOpacity="0.03" strokeWidth="0.3" />
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

