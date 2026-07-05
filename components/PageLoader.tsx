"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const certifications = ["PANSA Registered", "ULC Certified", "CE Certified", "EASA Compliant", "ISO 14001"];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState(0);
  // Phase 0: Pure 3D drone (2 seconds — fast, impactful)
  // Phase 1: Brand + text fade in (slow, readable — 2 seconds)
  // Phase 2: Certs appear (hold for reading — 2.5 seconds)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000);  // After 2s show brand (faster drone)
    const t2 = setTimeout(() => setPhase(2), 4000);  // Certs appear (slow, readable)
    const t3 = setTimeout(() => setLoading(false), 6500); // Give time to read, then exit

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#09090b]"
          exit={{
            scale: 0.85,
            opacity: 0,
            filter: "blur(20px)",
            borderRadius: "24px",
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D Drone — the hero of the intro, full screen */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={phase >= 1 ? { scale: 1.1, opacity: 0.7 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Scene3D />
          </motion.div>

          {/* Cinematic vignette */}
          <div className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, #09090b 85%)" }}
          />

          {/* Top & bottom cinematic bars (like movie letterbox) */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Brand content — appears after 5s of pure 3D */}
          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-[0.25em] font-[family-name:var(--font-space)] text-white"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    BEZLINY
                  </motion.h1>

                  <motion.div
                    className="mt-4 h-[1px] w-32 md:w-48 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                  />

                  <motion.p
                    className="mt-5 text-sm md:text-base text-white/80 tracking-[0.2em] uppercase"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                  >
                    Industrial Drone Technology
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Certifications */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  className="mt-12 md:mt-16 flex flex-wrap justify-center gap-5 md:gap-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="text-[11px] md:text-sm text-white/80 tracking-[0.1em] uppercase font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner accents — appear immediately for cinematic framing (hidden on mobile) */}
          <motion.div className="hidden md:block absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/[0.08] z-20"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="hidden md:block absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-white/[0.08] z-20"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="hidden md:block absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/[0.08] z-20"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="hidden md:block absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/[0.08] z-20"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
