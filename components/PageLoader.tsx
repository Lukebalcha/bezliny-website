"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const certifications = ["ISO 9001", "ISO 14001", "CE", "EASA", "NATO"];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 8 + 3;
      });
    }, 100);

    const timer = setTimeout(() => setLoading(false), 3200);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#09090b]"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="relative flex flex-col items-center">
            {/* BEZLINY name */}
            <motion.span
              className="text-4xl md:text-6xl font-bold tracking-[0.4em] font-[family-name:var(--font-space)] text-white block"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              BEZLINY
            </motion.span>

            <motion.span
              className="mt-3 block text-[10px] md:text-[11px] text-white/25 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Industrial Drone Technology
            </motion.span>
            
            {/* Progress bar */}
            <motion.div
              className="mt-8 h-[1px] bg-white/10 w-48 md:w-64 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#10b981] to-white/80"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Certifications — appearing one by one */}
            <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-8">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-1 h-1 rounded-full bg-[#10b981]" />
                  <span className="text-[10px] md:text-xs text-white/40 tracking-[0.15em] uppercase font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>

            {/* Tagline at bottom */}
            <motion.p
              className="mt-8 text-[10px] text-white/15 tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              Certified. Trusted. Worldwide.
            </motion.p>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
