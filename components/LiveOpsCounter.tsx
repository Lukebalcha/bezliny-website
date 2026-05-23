"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

function TickingNumber({ target, duration = 3 }: { target: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target, count, rounded, duration]);

  return <span>{display}</span>;
}

export default function LiveOpsCounter() {
  const [pulse, setPulse] = useState(true);
  const { locale } = useLang();

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  const ops = locale === "pl" ? [
    { value: 4, label: "Drony we flocie", suffix: "" },
    { value: 12, label: "Klientów obsłużonych", suffix: "+" },
    { value: 24, label: "Czas odpowiedzi", suffix: "h" },
    { value: 100, label: "Bez chemii", suffix: "%" },
  ] : [
    { value: 4, label: "Drones in Fleet", suffix: "" },
    { value: 12, label: "Clients Served", suffix: "+" },
    { value: 24, label: "Hour Response Time", suffix: "h" },
    { value: 100, label: "Chemical-Free", suffix: "%" },
  ];

  const statusLabel = locale === "pl" ? "Status operacyjny" : "Live Operations";

  return (
    <section className="py-12 md:py-16 relative border-t border-b border-white/[0.03]">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-emerald-500/[0.02]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 mb-8">
          <div className={`w-2 h-2 rounded-full transition-all duration-1000 ${pulse ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "bg-emerald-400/50"}`} />
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400/80">{statusLabel}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ops.map((op) => (
            <motion.div
              key={op.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] text-white">
                <TickingNumber target={op.value} />
                <span className="text-white/60">{op.suffix}</span>
              </div>
              <div className="text-[10px] md:text-xs text-white/50 mt-2 uppercase tracking-wider">{op.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
