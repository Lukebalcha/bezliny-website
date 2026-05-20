"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = variant === "primary"
    ? "bg-white text-[#09090b] font-semibold hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]"
    : "border border-white/15 text-white/80 hover:border-white/30 hover:text-white";

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        className={`relative inline-flex items-center justify-center px-10 py-4 rounded-full transition-all duration-500 text-base ${base}`}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}
