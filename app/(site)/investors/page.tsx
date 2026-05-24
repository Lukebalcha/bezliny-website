"use client";

import { FadeUp } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function InvestorsPage() {
  const marketData = [
    { value: "$12.4B", label: "Global façade cleaning market", sub: "2025, growing 6.8% CAGR" },
    { value: "€3.2B", label: "European market opportunity", sub: "Commercial + industrial" },
    { value: "2.1M", label: "High-rise buildings in EU", sub: "Requiring regular maintenance" },
    { value: "<1%", label: "Currently served by drones", sub: "Massive whitespace" },
  ];

  const advantages = [
    {
      title: "First-Mover in Central Europe",
      desc: "Only PANSA + ULC certified drone cleaning operator in Poland. Building regulatory moat while competitors wait.",
    },
    {
      title: "Hardware-Agnostic Platform",
      desc: "Our value isn't in the drone — it's in the AI pathfinding, surface mapping, and autonomous operations software stack.",
    },
    {
      title: "Recurring Revenue Model",
      desc: "Buildings need cleaning 4-12× per year. Every new contract is predictable, recurring income with zero incremental CAC.",
    },
    {
      title: "Zero Marginal Labor Cost",
      desc: "Scaling means more drones, not more employees. Each operator manages 6+ simultaneous drone operations.",
    },
    {
      title: "Regulatory Tailwind",
      desc: "EU workplace safety directives are tightening annually. Every new regulation makes rope access less viable and drones more necessary.",
    },
    {
      title: "ESG Native",
      desc: "Zero chemicals, carbon-neutral operations, no workplace injuries. Property funds increasingly require ESG-compliant vendors.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0b10] to-[#09090b]" />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 uppercase mb-6">Enterprise & Investment</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-[family-name:var(--font-space)] leading-[0.9]">
              The future<br />
              <span className="text-white/40">doesn&apos;t wait.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
              Every high-rise in Europe will be cleaned by autonomous systems. The question is who builds the infrastructure.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Market Opportunity</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] mb-12">The numbers speak.</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketData.map((d, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-space)] text-white">{d.value}</div>
                  <div className="mt-2 text-sm text-white/60">{d.label}</div>
                  <div className="mt-1 text-[10px] text-white/30 uppercase tracking-wider">{d.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-16 md:py-24 flex items-center justify-center px-6">
        <FadeUp>
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-light text-white/80 leading-tight">
              We&apos;re not building a cleaning company.<br />
              <span className="text-white/40">We&apos;re building the operating system for building maintenance.</span>
            </h2>
          </div>
        </FadeUp>
      </section>

      {/* Competitive advantages */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Why Bezliny</p>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-10">Structural Advantages</h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((a, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.015), transparent)' }}>
                  <h4 className="text-base font-semibold text-white/85 mb-2">{a.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Vision timeline */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Roadmap</p>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-10">Where we&apos;re going</h3>
          </FadeUp>
          <div className="space-y-6">
            {[
              { year: "2025", milestone: "Warsaw market dominance", desc: "50+ commercial contracts, full operational proof" },
              { year: "2026", milestone: "Poland-wide expansion", desc: "Kraków, Wrocław, Gdańsk, Poznań — every major city" },
              { year: "2027", milestone: "DACH market entry", desc: "Germany, Austria, Switzerland — highest-value European market" },
              { year: "2028", milestone: "Platform licensing", desc: "License our OS to property management companies globally" },
              { year: "2030", milestone: "European market leader", desc: "1,000+ buildings under management, SaaS + operations hybrid" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start py-4 border-b border-white/[0.04]">
                  <span className="text-lg font-bold font-[family-name:var(--font-space)] text-white/70 shrink-0 w-14">{item.year}</span>
                  <div>
                    <h4 className="text-base font-medium text-white/80">{item.milestone}</h4>
                    <p className="text-sm text-white/35 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] mb-4">
            Ready to build the future?
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">For strategic partnerships, investment discussions, and enterprise fleet contracts.</p>
          <MagneticButton href="/contact" variant="primary">
            Start Conversation
          </MagneticButton>
          <p className="mt-6 text-[10px] text-white/25 uppercase tracking-wider">NDA available upon request • Deck shared after initial call</p>
        </FadeUp>
      </section>
    </>
  );
}
