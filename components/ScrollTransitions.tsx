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
        className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8cdd3]/40 to-transparent"
      />

      {/* The drone */}
      <motion.div
        style={{ x: droneX, y: droneY, rotate: droneRotate, scale: droneScale, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
      >
        <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
          <rect x="32" y="36" width="16" height="8" rx="2" fill="white" fillOpacity="0.9" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="60" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="60" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="20" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 20" to="-360 60 20" dur="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="60" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 60" to="360 20 60" dur="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="60" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="-360 60 60" dur="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="40" r="3" fill="white" fillOpacity="0.7" />
        </svg>
      </motion.div>

      {/* Flight trail behind drone */}
      <motion.div
        style={{ width: trailWidth, opacity: trailOpacity }}
        className={`absolute top-[calc(50%-0.5px)] h-[1px] ${direction === "left" ? "left-0" : "right-0"}`}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </motion.div>

      {/* Bottom edge glow */}
      <motion.div
        style={{ opacity: edgeGlow }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8cdd3]/30 to-transparent"
      />
    </div>
  );
}

// Quick burst transition — point expands into ring then fades
export function BurstTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const centerScale = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.6, 0.8], [0, 0.5, 1, 0.5, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.6, 0.8], [0, 0.8, 1, 0.8, 0]);
  const ringScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.3, 1, 2.5]);
  const ringOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.6, 0.3, 0]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 0.3, 0.3, 0]);

  return (
    <div ref={ref} className="relative h-[15vh] md:h-[20vh] overflow-hidden flex items-center justify-center">
      {/* Expanding ring */}
      <motion.div
        style={{ scale: ringScale, opacity: ringOpacity }}
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/30"
      />
      
      {/* Center point */}
      <motion.div
        style={{ scale: centerScale, opacity: centerOpacity }}
        className="absolute w-2 h-2 rounded-full bg-white"
      />

      {/* Horizontal divider line */}
      <motion.div
        style={{ scaleX: lineScale, opacity: lineOpacity }}
        className="absolute w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}

