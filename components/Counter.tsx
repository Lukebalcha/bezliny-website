"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

export default function Counter({ end, suffix = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)] bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-white/50 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
