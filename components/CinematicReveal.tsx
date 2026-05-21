"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Content materializes from scattered fragments — like magic spell forming
export function CinematicReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Particle scatter effect behind content as it forms */}
      {!isInView && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: (Math.random() - 0.5) * 200, 
                y: (Math.random() - 0.5) * 100,
                opacity: 0.5,
                scale: 0.5 
              }}
              className="absolute w-1 h-1 rounded-full bg-white/40"
              style={{ left: `${10 + i * 7}%`, top: `${20 + (i % 3) * 25}%` }}
            />
          ))}
        </div>
      )}

      {/* The actual content — materializes */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95, y: 30 }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Section that forms from dispersed fragments — cinematic page entrance
// Content pieces fly in from different directions and assemble
export function FormingSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const blur = useTransform(scrollYProgress, [0, 0.6, 1], [8, 2, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 0.97, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual card/element that flies in from a direction and "locks into place"
export function FormingElement({ 
  children, 
  delay = 0, 
  from = "bottom",
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number; 
  from?: "left" | "right" | "bottom" | "top";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const directions = {
    left: { x: -80, y: 0, rotate: -3 },
    right: { x: 80, y: 0, rotate: 3 },
    bottom: { x: 0, y: 60, rotate: 0 },
    top: { x: 0, y: -60, rotate: 0 },
  };

  const dir = directions[from];

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: dir.x, 
        y: dir.y, 
        rotate: dir.rotate,
        filter: "blur(6px)",
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: 0,
        filter: "blur(0px)",
        scale: 1
      } : {}}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Full cinematic page transition — drone delivers the page
// Combines: drone flies in → content materializes behind it
export function DroneDeliver({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Drone movement
  const droneX = useTransform(scrollYProgress, [0, 0.2, 0.4], ["120%", "0%", "-120%"]);
  const droneY = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], ["20px", "-5px", "5px", "-20px"]);
  const droneOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const droneScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.7, 1.1, 0.7]);

  // Content forms AFTER drone passes
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.5], [0, 0.5, 1]);
  const contentBlur = useTransform(scrollYProgress, [0.15, 0.4, 0.55], [15, 4, 0]);
  const contentScale = useTransform(scrollYProgress, [0.15, 0.5], [0.93, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.5], [40, 0]);

  // Particle scatter — visible while content is forming
  const particleOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.45, 0.55], [0, 0.7, 0.7, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Drone flying across */}
      <motion.div
        style={{ x: droneX, y: droneY, opacity: droneOpacity, scale: droneScale }}
        className="sticky top-1/2 z-20 pointer-events-none"
      >
        <svg width="100" height="100" viewBox="0 0 80 80" fill="none" className="mx-auto">
          <rect x="32" y="36" width="16" height="8" rx="2" fill="white" fillOpacity="0.9" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="60" y1="20" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="60" y1="60" x2="40" y2="40" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="20" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 20" to="-360 60 20" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="60" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 20 60" to="360 20 60" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="60" r="8" stroke="white" strokeOpacity="0.35" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="-360 60 60" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="40" r="3" fill="white" fillOpacity="0.7" />
        </svg>
      </motion.div>

      {/* Forming particles — scatter effect while content assembles */}
      <motion.div style={{ opacity: particleOpacity }} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const startX = (Math.random() - 0.5) * 300;
          const startY = (Math.random() - 0.5) * 200;
          return (
            <motion.div
              key={i}
              style={{
                x: useTransform(scrollYProgress, [0.1, 0.5], [startX, 0]),
                y: useTransform(scrollYProgress, [0.1, 0.5], [startY, 0]),
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i % 5) * 18}%`,
              }}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/50"
            />
          );
        })}
      </motion.div>

      {/* Actual content — materializes after drone passes */}
      <motion.div
        style={{ 
          opacity: contentOpacity, 
          scale: contentScale, 
          y: contentY,
          filter: useTransform(contentBlur, (v) => `blur(${v}px)`)
        }}
        className="relative z-[1]"
      >
        {children}
      </motion.div>
    </div>
  );
}
