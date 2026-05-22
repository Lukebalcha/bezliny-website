"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AutoVideo from "@/components/AutoVideo";

export default function DroneServicesReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative h-[100vh] overflow-hidden bg-black">
      {/* Phase 1: Scan lines + boot sequence */}
      {phase >= 1 && (
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={phase >= 3 ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* CRT scan lines */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }} />
          {/* Boot text */}
          <div className="absolute top-8 left-8 font-mono text-[10px] md:text-xs text-cyan-400/80 space-y-1">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              [BEZLINY OS v4.2.1] INITIALIZING...
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              → DRONE SYSTEMS: ONLINE
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              → NAVIGATION: GPS-RTK LOCKED
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              → CLEANING MODULE: ARMED
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              → MISSION: FACADE CLEANING | WARSAW
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Phase 2: Video appears with glitch effect */}
      {phase >= 2 && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AutoVideo
            src="/assets/drone-hero.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Cinematic color grading overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
        </motion.div>
      )}

      {/* Phase 3: HUD overlay */}
      {phase >= 3 && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan-400/40" />
          <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan-400/40" />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-cyan-400/40" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40" />

          {/* Crosshair center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 md:w-32 md:h-32 border border-cyan-400/20 rounded-full" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-400/20" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-400/20" />
          </div>

          {/* Data readouts - top right */}
          <div className="absolute top-8 right-8 font-mono text-[9px] md:text-[11px] text-cyan-400/70 text-right space-y-0.5">
            <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              ALT: 127.4m
            </motion.p>
            <p>SPD: 2.3 m/s</p>
            <p>WIND: 4.1 m/s NW</p>
            <motion.p className="text-green-400/80" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              ● REC 4K 60fps
            </motion.p>
          </div>

          {/* Data readouts - bottom left */}
          <div className="absolute bottom-8 left-8 font-mono text-[9px] md:text-[11px] text-cyan-400/70 space-y-0.5">
            <p>LAT: 52.2297°N</p>
            <p>LON: 21.0122°E</p>
            <p>BAT: 87% ████████░░</p>
            <p>SIGNAL: ▂▄▆█</p>
          </div>

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            animate={{ top: ["5%", "95%", "5%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Target lock animation */}
          <motion.div
            className="absolute top-[35%] left-[30%] md:top-[30%] md:left-[35%] w-24 h-24 md:w-40 md:h-40 border border-cyan-400/30 rounded-sm"
            animate={{ scale: [1, 0.95, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-400/60" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-cyan-400/60" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-cyan-400/60" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-400/60" />
            <p className="absolute -top-5 left-0 font-mono text-[8px] text-cyan-400/50">TARGET SURFACE</p>
          </motion.div>
        </motion.div>
      )}

      {/* Phase 4: Title text reveal */}
      {phase >= 4 && (
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-20 md:pb-28 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 border border-cyan-500/30 rounded-full mb-4 backdrop-blur-sm bg-black/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-cyan-400/90 font-mono">
                Autonomous Operations
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-7xl font-bold font-[family-name:var(--font-space)] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Industrial Precision.</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Zero Human Risk.
              </span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-sm md:text-lg text-white/60 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Our autonomous drone fleet delivers industrial-grade cleaning across 7 sectors — from government monuments to offshore platforms.
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-40" />
    </div>
  );
}
