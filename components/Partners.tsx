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
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Ecosystem</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)]">Technology Partners</h2>
          <p className="mt-3 text-white/50 text-sm max-w-lg mx-auto">Integrated with industry-leading platforms and hardware</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-5 md:p-8 rounded-xl border border-white/[0.04] hover:border-white/[0.1] flex items-center justify-center transition-all duration-500 group"
            >
              <span className="text-sm md:text-base font-medium text-white/30 group-hover:text-white/70 tracking-wide transition-colors duration-500">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
