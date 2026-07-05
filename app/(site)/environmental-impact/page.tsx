"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

export default function EnvironmentalImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0a0f] to-[#09090b]" />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/70 uppercase mb-6">Environmental Impact</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-[family-name:var(--font-space)] leading-[0.9]">
              Clean buildings.<br />
              <span className="text-white/50">Clean conscience.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
              Traditional cleaning poisons the ground beneath it. We chose a different path.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The problem */}
      <ScrollReveal className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-light text-white/80 leading-tight">
            Traditional facade cleaning uses <span className="text-white font-normal">85,000 liters</span> of chemically-treated water per building, per year.
          </h2>
          <p className="mt-6 text-white/35 text-base">Runoff enters storm drains. Chemicals reach groundwater. Nobody talks about it.</p>
        </div>
      </ScrollReveal>

      {/* Our numbers */}
      <ScrollReveal className="min-h-[50vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-6xl md:text-9xl font-bold font-[family-name:var(--font-space)] text-white/80">
            0
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-white/60">Chemicals used. Ever.</p>
        </div>
      </ScrollReveal>

      {/* Impact metrics */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "90%",
                label: "Water Recycled",
                desc: "Closed-loop water system captures and filters runoff in real-time. Only 10% evaporates.",
                color: "text-white/80",
              },
              {
                value: "0",
                label: "Chemical Agents",
                desc: "Pure water at 142 BAR. Pressure does the work. No detergents, no surfactants, no acids.",
                color: "text-white/80",
              },
              {
                value: "Carbon Neutral",
                label: "Operations",
                desc: "Electric drones charged from renewable sources. Fleet carbon footprint offset quarterly.",
                color: "text-white/70",
              },
            ].map((metric, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="border border-white/[0.06] rounded-xl p-8 text-center"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))' }}>
                  <div className={`text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="mt-2 text-base text-white/70 font-medium">{metric.label}</div>
                  <div className="mt-3 text-sm text-white/35 leading-relaxed">{metric.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-6">Per Building, Per Year</p>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-10">Traditional vs. Bezliny</h3>
          </FadeUp>

          <div className="space-y-4">
            {[
              { label: "Water consumption", traditional: "85,000 L", bezliny: "8,500 L", savings: "90% less" },
              { label: "Chemical agents", traditional: "340 kg", bezliny: "0 kg", savings: "100% eliminated" },
              { label: "CO₂ emissions", traditional: "2.4 tonnes", bezliny: "0 tonnes", savings: "Carbon neutral" },
              { label: "Contaminated runoff", traditional: "72,000 L", bezliny: "0 L", savings: "Zero discharge" },
              { label: "Personnel at risk", traditional: "4-8 workers", bezliny: "0", savings: "100% autonomous" },
              { label: "Noise pollution", traditional: "75-90 dB", bezliny: "45 dB", savings: "Near silent" },
            ].map((row, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-white/[0.04] items-center">
                  <span className="text-sm text-white/60">{row.label}</span>
                  <span className="text-sm text-white/50 line-through">{row.traditional}</span>
                  <span className="text-sm text-white/80 font-medium">{row.bezliny}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">{row.savings}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <ScrollReveal className="min-h-[50vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">
            Every building we clean<br />
            is a building that didn&apos;t poison its surroundings.
          </h2>
        </div>
      </ScrollReveal>

      {/* ESG commitment */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">ESG Commitment</p>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-8">Our Environmental Pledge</h3>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>Bezliny is committed to becoming the most environmentally responsible building maintenance company in Europe. Our technology was designed from day one with sustainability as a core architectural principle — not an afterthought.</p>
              <p>We publish quarterly environmental impact reports. Every operation is measured. Every liter tracked. Every gram of CO₂ accounted for and offset through verified European carbon credit programs.</p>
              <p>By 2027, we aim to make every client building we service eligible for enhanced green building certification (BREEAM / LEED) through our documented zero-chemical, water-recycling cleaning methodology.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] mb-6">
            Make your building<br />
            <span className="text-white/50">part of the solution.</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">Request an environmental impact assessment for your property.</p>
          <MagneticButton href="/contact" variant="primary">
            Get Environmental Report
          </MagneticButton>
        </FadeUp>
      </section>
    </>
  );
}
