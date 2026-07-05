"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";
import { useLang } from "@/lib/LangContext";

function FullScreenStatement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -30]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={`min-h-[70vh] flex items-center justify-center px-6 ${className}`}>
      {children}
    </motion.div>
  );
}

export default function SafetyPage() {
  const { t } = useLang();
  const certifications = t.safety.certifications;

  const safetyMetrics = t.safety.metrics;

  return (
    <>
      {/* Hero statement */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0d12] to-[#09090b]" />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/70 uppercase mb-6">{t.safety.heroLabel}</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-[family-name:var(--font-space)] leading-[0.9]">
              {t.safety.heroTitle1}<br />
              <span className="text-white/40">{t.safety.heroTitle2}</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
              {t.safety.heroSubtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The problem statement */}
      <FullScreenStatement>
        <div className="text-center max-w-4xl">
          <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-6">{t.safety.problemLabel}</p>
          <h2 className="text-3xl md:text-5xl font-light text-white/80 leading-tight" dangerouslySetInnerHTML={{ __html: t.safety.problemTitle }} />
          <p className="mt-6 text-white/40 text-lg">{t.safety.problemSubtitle}</p>
        </div>
      </FullScreenStatement>

      {/* Our answer */}
      <FullScreenStatement>
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)] text-white">
            {t.safety.answerTitle}
          </h2>
        </div>
      </FullScreenStatement>

      {/* Safety metrics */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {safetyMetrics.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space)] text-white">{m.value}</div>
                  <div className="mt-2 text-sm md:text-base text-white/70 font-medium">{m.label}</div>
                  <div className="mt-1 text-[10px] md:text-xs text-white/30 uppercase tracking-wider">{m.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase mb-4">{t.safety.certsLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] mb-12">
              {t.safety.certsTitle}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="border border-white/[0.08] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-500 group"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(6,182,212,0.01))' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-white/90 font-[family-name:var(--font-space)]">{cert.code}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20 uppercase tracking-wider">{cert.status}</span>
                  </div>
                  <p className="text-xs text-white/50 font-medium mb-1">{cert.name}</p>
                  <p className="text-[11px] text-white/35 leading-relaxed">{cert.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Operational protocols */}
      <FullScreenStatement>
        <div className="max-w-4xl">
          <p className="text-[10px] tracking-[0.4em] text-white/60 uppercase mb-6">{t.safety.protocolLabel}</p>
          <h2 className="text-2xl md:text-4xl font-light text-white/80 leading-relaxed">
            {t.safety.protocolText}
          </h2>
        </div>
      </FullScreenStatement>

      {/* Safety features list */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {t.safety.features.map((feature, i) => (
              <FadeUp key={i} delay={i * 0.03}>
                <div className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-white/70">{feature}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] mb-6">
            {t.safety.ctaTitle1}<br />
            <span className="text-white/40">{t.safety.ctaTitle2}</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">{t.safety.ctaSubtitle}</p>
          <MagneticButton href="/contact" variant="primary">
            {t.safety.ctaButton}
          </MagneticButton>
        </FadeUp>
      </section>
    </>
  );
}
