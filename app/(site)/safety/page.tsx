"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

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
  const certifications = [
    {
      code: "PANSA",
      name: "Polish Air Navigation Services Agency",
      desc: "Registered UAV operator for commercial operations in Polish airspace",
      status: "ACTIVE",
    },
    {
      code: "ULC",
      name: "Civil Aviation Authority of Poland",
      desc: "Full operational license for BVLOS drone operations in urban environments",
      status: "ACTIVE",
    },
    {
      code: "EASA",
      name: "European Union Aviation Safety Agency",
      desc: "Compliant with EU drone regulations for the Specific category of operations",
      status: "COMPLIANT",
    },
    {
      code: "CE",
      name: "Conformité Européenne",
      desc: "All drone platforms meet EU safety, health, and environmental requirements",
      status: "CERTIFIED",
    },
    {
      code: "ISO 14001",
      name: "Environmental Management System",
      desc: "Certified environmental management ensuring sustainable operations",
      status: "CERTIFIED",
    },
    {
      code: "ISO 9001",
      name: "Quality Management System",
      desc: "Consistent quality standards across all cleaning operations",
      status: "CERTIFIED",
    },
  ];

  const safetyMetrics = [
    { value: "0", label: "Incidents", sub: "Since founding" },
    { value: "0", label: "Personnel at height", sub: "Ever" },
    { value: "100%", label: "Autonomous ops", sub: "No manual intervention" },
    { value: "24/7", label: "Monitoring", sub: "Real-time telemetry" },
  ];

  return (
    <>
      {/* Hero statement */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0d12] to-[#09090b]" />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/70 uppercase mb-6">Safety & Compliance</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-[family-name:var(--font-space)] leading-[0.9]">
              Zero humans.<br />
              <span className="text-white/40">Zero risk.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
              The safest way to clean a building is to never put a person on it.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The problem statement */}
      <FullScreenStatement>
        <div className="text-center max-w-4xl">
          <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-6">The industry standard</p>
          <h2 className="text-3xl md:text-5xl font-light text-white/80 leading-tight">
            Every year, <span className="text-white font-normal">hundreds of workers</span> are injured cleaning buildings at height.
          </h2>
          <p className="mt-6 text-white/40 text-lg">Rope access. Scaffolding. Cradles. Human error.</p>
        </div>
      </FullScreenStatement>

      {/* Our answer */}
      <FullScreenStatement>
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)] text-white">
            We eliminated the risk entirely.
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
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase mb-4">Certifications & Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] mb-12">
              Every credential. Verified.
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
          <p className="text-[10px] tracking-[0.4em] text-white/60 uppercase mb-6">Operational Protocol</p>
          <h2 className="text-2xl md:text-4xl font-light text-white/80 leading-relaxed">
            Every flight is pre-authorized. Every path is computed. Every surface is mapped in real-time.
            The drone sees more than a human ever could — and never gets tired, distracted, or afraid.
          </h2>
        </div>
      </FullScreenStatement>

      {/* Safety features list */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {[
              "Redundant flight controllers — dual IMU, triple GPS lock",
              "Automatic RTH (Return to Home) on signal loss",
              "Geofencing — drone cannot leave designated work zone",
              "Real-time wind monitoring — auto-pause at 12 m/s",
              "Obstacle avoidance — 360° LiDAR + optical sensors",
              "Emergency parachute deployment system",
              "Full flight telemetry recorded for every operation",
              "Insurance coverage up to €5M per operation",
              "Pre-flight automated system checks (127 parameters)",
              "Post-flight inspection AI — detects wear before failure",
            ].map((feature, i) => (
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
            Safety isn&apos;t a feature.<br />
            <span className="text-white/40">It&apos;s the foundation.</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">Request our full safety documentation and compliance certificates for your procurement team.</p>
          <MagneticButton href="/contact" variant="primary">
            Request Safety Documentation
          </MagneticButton>
        </FadeUp>
      </section>
    </>
  );
}
