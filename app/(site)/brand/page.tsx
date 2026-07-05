"use client";

import { FadeUp } from "@/components/Animations";

export default function BrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0b0e] to-[#09090b]" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 uppercase mb-6">Brand & Policy</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)] leading-[0.9]">
              Our Standards.<br />
              <span className="text-white/40">Non-negotiable.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Brand values */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Core Values</p>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-10">What Bezliny stands for</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Precision Over Speed",
                desc: "We never rush an operation. Every surface is mapped, every path computed, every result verified. 99.7% isn't a target — it's our minimum.",
              },
              {
                title: "Safety Without Compromise",
                desc: "Zero humans at height. Zero exceptions. No deadline, no client, no contract is worth compromising on this principle.",
              },
              {
                title: "Environmental Responsibility",
                desc: "Chemical-free is not a marketing claim. It's an engineering decision baked into our technology stack from day one.",
              },
              {
                title: "Transparency in Operations",
                desc: "Every flight is recorded. Every metric is shared with clients. Every result is verifiable. We operate in the open.",
              },
              {
                title: "Technology-First Thinking",
                desc: "We solve problems with engineering, not labor. Every challenge is an opportunity to build better systems.",
              },
              {
                title: "Client Partnership",
                desc: "We don't have customers — we have partners. Long-term relationships built on measurable results and mutual growth.",
              },
            ].map((v, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-base font-semibold text-white/85 mb-2">{v.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Operational standards */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Operational Standards</p>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-10">How we operate</h2>
          </FadeUp>
          <div className="space-y-4">
            {[
              "All operations must be pre-authorized by certified flight operations manager",
              "Minimum 48-hour advance weather assessment before any scheduled operation",
              "127-parameter automated pre-flight check on every drone before deployment",
              "Real-time telemetry monitoring throughout entire operation duration",
              "Post-operation QC scan with AI-assisted surface coverage verification",
              "Client receives digital completion report within 2 hours of operation end",
              "All flight data retained for minimum 5 years for audit compliance",
              "Monthly equipment overhaul and certification by manufacturer-trained engineers",
              "Quarterly safety review with external aviation safety consultant",
              "Zero-tolerance policy for operational shortcuts or safety workarounds",
            ].map((standard, i) => (
              <FadeUp key={i} delay={i * 0.03}>
                <div className="flex items-start gap-4 py-3 border-b border-white/[0.04]">
                  <span className="text-[10px] text-white/30 font-mono mt-1 shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-white/60 leading-relaxed">{standard}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership policy */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">Partnership Policy</p>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] mb-8">Working with Bezliny</h2>
            <div className="space-y-6 text-white/50 leading-relaxed text-sm md:text-base">
              <p>Bezliny maintains strict policies regarding the use of our brand, technology, and operational methodology. All partnerships are subject to our quality and safety standards.</p>
              <p><strong className="text-white/70">Brand Usage:</strong> The Bezliny name, logo, and visual identity may only be used with written authorization. All materials representing Bezliny must be approved by our communications team prior to publication.</p>
              <p><strong className="text-white/70">Sub-contracting:</strong> Bezliny does not sub-contract operations. Every drone that flies under our name is operated by our certified team, using our equipment, following our protocols.</p>
              <p><strong className="text-white/70">Data & Privacy:</strong> Client building data, flight paths, and operational telemetry are treated as confidential. We comply with GDPR and maintain ISO 27001 data security practices.</p>
              <p><strong className="text-white/70">Quality Guarantee:</strong> Every operation comes with a satisfaction guarantee. If our QC scan shows below 99% coverage, we re-clean at no additional cost.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Visual identity note */}
      <section className="py-20 md:py-32 text-center">
        <FadeUp>
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Visual Identity</p>
          <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-space)] text-white/70 mb-4">Brand assets available upon request</h3>
          <p className="text-sm text-white/35 max-w-lg mx-auto">For media inquiries, press coverage, or partnership materials, contact our communications team at <a href="mailto:contact@bezliny.com" className="text-cyan-400/60 hover:text-cyan-400 transition-colors">contact@bezliny.com</a></p>
        </FadeUp>
      </section>
    </>
  );
}
