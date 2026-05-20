"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HorizontalItem {
  num: string;
  title: string;
  desc: string;
}

export default function HorizontalScroll({ items }: { items: HorizontalItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(items.length - 1) * 33}%`]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${items.length * 60}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw] p-10 rounded-3xl border border-white/[0.04] bg-[#111113]/80 backdrop-blur-sm"
            >
              <span className="text-6xl font-bold text-[#10b981]/20 font-[family-name:var(--font-space)]">{item.num}</span>
              <h3 className="mt-6 text-2xl font-semibold text-white/90">{item.title}</h3>
              <p className="mt-4 text-white/40 leading-relaxed">{item.desc}</p>
              <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
