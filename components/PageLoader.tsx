"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const certifications = ["ISO 9001", "ISO 14001", "CE Certified", "EASA Approved", "UDT Certified"];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: 3D drone only, 1: brand reveal, 2: certs

  useEffect(() => {
    // Slow progress bar to match 5.5s total
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 4 + 1.5;
      });
    }, 120);

    // Phase 1: Show brand name after 1.5s of drone
    const t1 = setTimeout(() => setPhase(1), 1500);
    // Phase 2: Show certs after 3s
    const t2 = setTimeout(() => setPhase(2), 3000);
    // End loader at 5.5s
    const t3 = setTimeout(() => setLoading(false), 5500);

    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#09090b]"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D Drone scene — always visible, the star of the show */}
          <div className="absolute inset-0 z-0">
            <Scene3D />
          </div>

          {/* Subtle radial gradient overlay to focus center */}
          <div className="absolute inset-0 z-[1] bg-radial-[ellipse_at_center] from-transparent via-transparent to-[#09090b]/80" />

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px] z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Main content — layered above 3D */}
          <div className="relative z-10 flex flex-col items-center">
            {/* BEZLINY — appears in phase 1 */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] font-[family-name:var(--font-space)] text-white"
                    initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    BEZLINY
                  </motion.h1>

                  <motion.p
                    className="mt-4 text-[11px] md:text-sm text-white/50 tracking-[0.25em] uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    Industrial Drone Technology
                  </motion.p>

                  {/* Progress bar */}
                  <motion.div
                    className="mt-10 h-[2px] bg-white/5 w-56 md:w-72 overflow-hidden rounded-full"
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-white/60 to-white"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Certifications — phase 2 */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  className="mt-12 md:mt-16 flex flex-wrap justify-center gap-5 md:gap-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="text-[10px] md:text-xs text-white/60 tracking-[0.12em] uppercase font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Final tagline */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.p
                  className="mt-8 text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Precision. Safety. Innovation.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Corner accents */}
          <motion.div className="absolute top-6 left-6 w-14 h-14 border-l border-t border-white/[0.06] z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} />
          <motion.div className="absolute top-6 right-6 w-14 h-14 border-r border-t border-white/[0.06] z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} />
          <motion.div className="absolute bottom-6 left-6 w-14 h-14 border-l border-b border-white/[0.06] z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} />
          <motion.div className="absolute bottom-6 right-6 w-14 h-14 border-r border-b border-white/[0.06] z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
