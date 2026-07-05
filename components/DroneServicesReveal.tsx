"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DroneServicesReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative h-[200px] md:h-[280px] overflow-hidden bg-[#0a0a0b] flex items-center justify-center">
      {isInView && (
        <>
          {/* 3D perspective grid rushing forward */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0" style={{
              perspective: '400px',
              perspectiveOrigin: '50% 50%',
            }}>
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,200,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,200,255,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  transformStyle: 'preserve-3d',
                }}
                initial={{ rotateX: 60, translateZ: -200, opacity: 0 }}
                animate={{ rotateX: 60, translateZ: 200, opacity: [0, 0.8, 0] }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Central energy burst */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 3], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-500/20 to-transparent blur-xl" />
          </motion.div>

          {/* Light streaks */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
              style={{ top: `${20 + i * 12}%`, left: 0, right: 0 }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeInOut" }}
            />
          ))}

          {/* Quick flash */}
          <motion.div
            className="absolute inset-0 bg-white z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 0.4, delay: 1.8 }}
          />

          {/* Title that appears briefly */}
          <motion.div
            className="relative z-30 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-cyan-400/80 font-mono mb-2">
              Drone Operations
            </p>
            <h2 className="text-xl md:text-3xl font-bold font-[family-name:var(--font-space)] text-white">
              Industrial-Grade Services
            </h2>
          </motion.div>
        </>
      )}
    </div>
  );
}
