"use client";

import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large animated gradient blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #c8cdd3 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #c8cdd3 0%, transparent 70%)",
          top: "40%",
          left: "30%",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
