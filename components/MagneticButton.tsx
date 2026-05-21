"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || !isDesktop) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.12);
    y.set((e.clientY - centerY) * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = variant === "primary"
    ? "bg-white text-[#09090b] font-semibold hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
    : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white";

  return (
    <motion.div
      ref={ref}
      style={isDesktop ? { x: springX, y: springY } : undefined}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        className={`relative inline-flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-500 text-sm md:text-base ${base}`}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}
