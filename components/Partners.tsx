"use client";

import { motion } from "framer-motion";

const partners = [
  "DJI Enterprise", "Aerones", "Kärcher", "Wingtra",
  "Pix4D", "DroneDeploy", "Microsoft Azure", "AWS IoT",
];

export default function Partners() {
  return (
    <section className="py-16 md:py-24 relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 inline-block"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Ecosystem
          </motion.span>
          <motion.h2
            className="mt-3 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Technology Partners
          </motion.h2>
          <motion.p
            className="mt-3 text-white/50 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Integrated with industry-leading platforms and hardware
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.1)" }}
              className="relative p-5 md:p-8 rounded-xl border border-white/[0.04] flex items-center justify-center overflow-hidden group"
            >
              {/* Shimmer line on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <span className="text-sm md:text-base font-medium text-white/30 group-hover:text-white/70 tracking-wide transition-colors duration-500 relative z-10">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
