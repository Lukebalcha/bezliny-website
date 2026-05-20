import { FadeUp, ScaleIn, SlideIn } from "@/components/Animations";
import Counter from "@/components/Counter";
import HeroVideo from "@/components/HeroVideo";
import ServiceCards from "@/components/ServiceCards";
import { TextReveal, ParagraphReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <>
      {/* Hero — Full viewport cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroVideo />
        <div className="video-overlay absolute inset-0 z-10" />
        
        {/* Thin corner frames for editorial feel */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10 z-20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10 z-20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="text-[11px] text-white/40 uppercase tracking-[0.25em]">Next-Generation Industrial Drone Technology</span>
            </div>
          </FadeUp>
          
          <TextReveal
            text="Redefining Industrial Maintenance"
            as="h1"
            delay={0.3}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold font-[family-name:var(--font-space)] leading-[0.85] tracking-tight"
          />

          <ParagraphReveal
            text="Autonomous drone systems engineered for precision cleaning, inspection, and surface treatment across the world's most demanding environments."
            delay={0.8}
            className="mt-10 text-lg md:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed"
          />

          <FadeUp delay={1}>
            <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
              <MagneticButton href="/services" variant="primary">
                Explore Solutions
              </MagneticButton>
              <MagneticButton href="/contact" variant="secondary">
                Get in Touch
              </MagneticButton>
            </div>
          </FadeUp>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
      </section>

      {/* Stats — Minimal, impactful */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <Counter end={15} suffix="+" label="Countries" />
            <Counter end={500} suffix="+" label="Projects Delivered" />
            <Counter end={99} suffix="%" label="Safety Record" />
            <Counter end={60} suffix="%" label="Cost Reduction" />
          </div>
        </div>
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </section>

      {/* Mission — Editorial asymmetric layout */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0b0e] to-[#09090b]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <SlideIn direction="left">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">Our Mission</span>
                <h2 className="mt-6 text-4xl md:text-[3.5rem] font-bold font-[family-name:var(--font-space)] leading-[1.05]">
                  Eliminating Human Risk in Industrial Maintenance
                </h2>
                <p className="mt-8 text-white/40 leading-[1.8] text-lg max-w-xl">
                  Every year, thousands of workers are injured in high-altitude maintenance operations. Bezliny&apos;s autonomous drone platform replaces dangerous manual labor with precision robotic systems — delivering superior results while keeping people safe.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-3">
                  {[
                    { value: "Zero", label: "Human risk" },
                    { value: "3x", label: "Faster execution" },
                    { value: "100%", label: "Chemical-free" },
                    { value: "24/7", label: "Operation capable" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                      <div className="text-xl font-bold text-[#10b981]">{stat.value}</div>
                      <div className="text-xs text-white/30 mt-1.5 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
            <div className="lg:col-span-5">
              <SlideIn direction="right" delay={0.2}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/assets/drone-hero.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 to-transparent" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/10" />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services — with subtle section number */}
      <section className="py-40 relative">
        <div className="absolute top-32 right-8 text-[12rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">03</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-xl mb-20">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">Solutions</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Industrial-Grade Services</h2>
              <p className="mt-5 text-white/35 leading-relaxed">From skyscrapers to offshore platforms — precision drone operations for every sector.</p>
            </div>
          </FadeUp>
          <ServiceCards />
          <FadeUp delay={0.3}>
            <div className="mt-20 text-center">
              <MagneticButton href="/services" variant="secondary">
                View All Services
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Horizontal Scroll Process */}
      <HorizontalScroll items={[
        { num: "01", title: "Site Assessment", desc: "Comprehensive drone survey and structural analysis. Our engineers evaluate every surface, height, and environmental factor before any operation begins." },
        { num: "02", title: "Mission Planning", desc: "AI-driven flight path optimization. Every millimeter is calculated — pressure, temperature, water flow — for perfect results with zero surface damage." },
        { num: "03", title: "Autonomous Execution", desc: "GPS-RTK navigation with centimeter precision. Our drones operate fully autonomously while our operators monitor from a safe distance." },
        { num: "04", title: "Verification & Reporting", desc: "4K thermal and visual inspection post-operation. Full compliance documentation delivered within 24 hours." },
      ]} />

      {/* Video Break — Cinematic */}
      <section className="relative h-[70vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="/assets/drone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#09090b]/75" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <FadeUp>
            <div className="text-center max-w-4xl px-6">
              <TextReveal
                text="Precision Engineering. Zero Compromise."
                as="h2"
                className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space)] leading-[1.1]"
              />
              <ParagraphReveal
                text="Our proprietary cleaning systems use filtered water, controlled heat, and calibrated pressure — preserving surfaces while delivering unmatched results."
                delay={0.5}
                className="mt-8 text-white/35 text-lg max-w-2xl mx-auto"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Technology */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-32 left-8 text-[12rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">05</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScaleIn delay={0.1}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.04]">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/assets/drone-hero.mp4" type="video/mp4" />
                  </video>
                </div>
              </ScaleIn>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeUp>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">Technology</span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">Bezliny Drone Systems</h2>
                <p className="mt-6 text-white/40 leading-relaxed text-lg max-w-lg">Our proprietary sensor technology provides centimeter-level precision, setting a new standard for quality and significantly improving HSE performance.</p>
                <div className="mt-12 space-y-3">
                  {[
                    { title: "Non-contact cleaning approach", desc: "Preserves surface integrity" },
                    { title: "Patented safety system", desc: "Automated collision avoidance" },
                    { title: "Centimeter-level precision", desc: "GPS-RTK navigation" },
                    { title: "Chemical-free operation", desc: "Pure water technology" },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-700 group">
                      <div className="w-9 h-9 rounded-lg bg-[#10b981]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white/75 group-hover:text-white transition-colors duration-500">{feature.title}</h4>
                        <p className="text-sm text-white/30 mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-40 relative">
        <div className="absolute inset-0 border-t border-white/[0.04]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">Global Reach</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Operating Worldwide</h2>
            <p className="mt-5 text-white/35 max-w-2xl mx-auto">From the high-rises of Warsaw to offshore platforms in the North Sea.</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { region: "Europe", detail: "HQ — Warsaw, Poland" },
                { region: "Scandinavia", detail: "Nordic Operations" },
                { region: "Middle East", detail: "Oil & Gas Sector" },
                { region: "Asia Pacific", detail: "Expansion 2026" },
              ].map((loc) => (
                <div key={loc.region} className="p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.1] transition-all duration-700 group">
                  <div className="text-lg font-semibold text-white/75 group-hover:text-white transition-colors duration-500">{loc.region}</div>
                  <div className="text-sm text-white/25 mt-2">{loc.detail}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10b981]/[0.015] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <TextReveal
            text="Ready to Eliminate Scaffolding Forever?"
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space)] leading-[1.05]"
          />
          <ParagraphReveal
            text="Join the world's most innovative companies that have already switched to autonomous drone-based maintenance."
            delay={0.5}
            className="mt-8 text-white/35 text-lg max-w-xl mx-auto"
          />
          <FadeUp delay={0.7}>
            <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
              <MagneticButton href="/contact" variant="primary">
                Request a Demo
              </MagneticButton>
              <MagneticButton href="/about" variant="secondary">
                Learn More
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
