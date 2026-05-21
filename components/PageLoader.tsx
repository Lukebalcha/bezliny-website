"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
        return p + Math.random() * 15 + 5;
      });
    }, 100);

    const timer = setTimeout(() => setLoading(false), 2200);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#09090b]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated lines */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="relative">
            <motion.span
              className="text-4xl md:text-5xl font-bold tracking-[0.4em] font-[family-name:var(--font-space)] text-white block"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              BEZLINY
            </motion.span>
            
            {/* Progress bar */}
            <motion.div
              className="mt-8 h-[1px] bg-white/10 w-full overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#10b981] to-white"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            <motion.span
              className="mt-4 block text-[11px] text-white/20 tracking-[0.3em] uppercase text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Industrial Drone Technology
            </motion.span>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
