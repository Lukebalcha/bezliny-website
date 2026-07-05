"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface HorizontalItem {
  num: string;
  title: string;
  desc: string;
}

export default function HorizontalScroll({ items }: { items: HorizontalItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(items.length - 1) * 33}%`]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile: simple stacked layout
  if (isMobile) {
    return (
      <section className="py-24 px-6 relative">
        <div className="relative z-[1] mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">Process</span>
          <h2 className="mt-3 text-3xl font-bold font-[family-name:var(--font-space)]">How We Deliver</h2>
        </div>
        <div className="relative z-[1] space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-white/[0.04] bg-[#111113]"
            >
              <span className="text-3xl font-bold text-[#c8cdd3]/20 font-[family-name:var(--font-space)]">{item.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-white/90">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: horizontal scroll
  return (
    <div ref={containerRef} className="relative" style={{ height: `${items.length * 50}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-[12vh] left-[10vw] z-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/20">Process</span>
          <h2 className="mt-2 text-2xl font-bold font-[family-name:var(--font-space)] text-white/90">How We Deliver</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 pl-[10vw] mt-[18vh]">
          {items.map((item) => (
            <div
              key={item.num}
              className="shrink-0 w-[38vw] lg:w-[28vw] p-10 rounded-3xl border border-white/[0.04] bg-[#111113]/90 backdrop-blur-sm"
            >
              <span className="text-5xl font-bold text-[#c8cdd3]/15 font-[family-name:var(--font-space)]">{item.num}</span>
              <h3 className="mt-6 text-xl font-semibold text-white/90">{item.title}</h3>
              <p className="mt-4 text-white/70 leading-relaxed text-sm">{item.desc}</p>
              <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
