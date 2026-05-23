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

// Cinematic industrial 3D burst — complex geometric structure that assembles on scroll
export function BurstTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const masterOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.8, 0.95], [0, 1, 1, 0]);
  const outerRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const innerRotate = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const microRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const coreScale = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1.2, 1.2, 0]);
  const ringExpand = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0.3, 1, 1, 1.8]);
  const ringFade = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 0.8, 0.8, 0]);
  const particleSpread = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 2]);
  const beamLength = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], ["0%", "100%", "100%", "0%"]);
  const shimmer = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-[30vh] md:h-[40vh] overflow-hidden flex items-center justify-center">
      {/* Deep radial glow */}
      <motion.div
        style={{ opacity: shimmer, background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, rgba(139,92,246,0.03) 30%, transparent 70%)" }}
        className="absolute w-[600px] h-[600px] rounded-full"
      />

      {/* Outer hexagonal structure — rotates slowly */}
      <motion.div style={{ rotate: outerRotate, scale: ringExpand, opacity: ringFade }} className="absolute">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" className="md:w-[420px] md:h-[420px]">
          {/* Hexagon 1 */}
          <polygon points="160,20 280,80 280,200 160,260 40,200 40,80" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" />
          {/* Hexagon 2 — offset */}
          <polygon points="160,50 250,95 250,185 160,230 70,185 70,95" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
          {/* Hexagon 3 — inner */}
          <polygon points="160,80 220,110 220,170 160,200 100,170 100,110" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />
          {/* Vertices nodes */}
          {[[160,20],[280,80],[280,200],[160,260],[40,200],[40,80]].map(([cx,cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(34,211,238,0.6)">
              <animate attributeName="r" values="2;3.5;2" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {/* Cross connection lines */}
          <line x1="40" y1="80" x2="280" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
          <line x1="280" y1="80" x2="40" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
          <line x1="160" y1="20" x2="160" y2="260" stroke="rgba(34,211,238,0.08)" strokeWidth="0.3" />
        </svg>
      </motion.div>

      {/* Inner rotating triangle structure */}
      <motion.div style={{ rotate: innerRotate, scale: coreScale, opacity: ringFade }} className="absolute">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="md:w-[240px] md:h-[240px]">
          {/* Triangle 1 */}
          <polygon points="90,15 165,140 15,140" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" fill="none" />
          {/* Triangle 2 — inverted */}
          <polygon points="90,155 15,40 165,40" stroke="rgba(34,211,238,0.35)" strokeWidth="0.8" fill="none" />
          {/* Inner diamond */}
          <polygon points="90,45 135,90 90,135 45,90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
          {/* Radial spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 90 + Math.cos(rad) * 25;
            const y1 = 90 + Math.sin(rad) * 25;
            const x2 = 90 + Math.cos(rad) * 70;
            const y2 = 90 + Math.sin(rad) * 70;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(34,211,238,0.15)" strokeWidth="0.4" />;
          })}
        </svg>
      </motion.div>

      {/* Micro rotating ring — fastest */}
      <motion.div style={{ rotate: microRotate, scale: coreScale, opacity: ringFade }} className="absolute">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="md:w-[130px] md:h-[130px]">
          <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" strokeDasharray="3 6" />
          <circle cx="50" cy="50" r="25" stroke="rgba(34,211,238,0.3)" strokeWidth="0.6" fill="none" />
          {/* Orbiting particles */}
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 50 + Math.cos(rad) * 35;
            const cy = 50 + Math.sin(rad) * 35;
            return (
              <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" fillOpacity="0.7">
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </svg>
      </motion.div>

      {/* Core energy point */}
      <motion.div style={{ scale: coreScale, opacity: masterOpacity }} className="absolute">
        <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9),0_0_60px_rgba(34,211,238,0.5),0_0_100px_rgba(139,92,246,0.3)]" />
      </motion.div>

      {/* Horizontal energy beams */}
      <motion.div style={{ width: beamLength, opacity: ringFade }} className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <motion.div style={{ width: beamLength, opacity: shimmer }} className="absolute h-[1px] mt-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const baseR = 80 + (i % 3) * 40;
        return (
          <motion.div
            key={i}
            style={{
              x: useTransform(particleSpread, (s) => Math.cos(angle + s * 0.5) * baseR),
              y: useTransform(particleSpread, (s) => Math.sin(angle + s * 0.3) * baseR * 0.6),
              opacity: ringFade,
              scale: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]),
            }}
            className="absolute w-1 h-1 rounded-full bg-white/40"
          />
        );
      })}
    </div>
  );
}

