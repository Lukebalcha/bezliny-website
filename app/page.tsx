import Link from "next/link";
import { FadeUp, FadeIn, ScaleIn, SlideIn } from "@/components/Animations";
import Counter from "@/components/Counter";
import HeroVideo from "@/components/HeroVideo";
import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroVideo />
        <div className="video-overlay absolute inset-0 z-10" />
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-[#34C7FF] animate-pulse" />
              <span className="text-xs text-white/70 uppercase tracking-wider">Next-Generation Industrial Drone Technology</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space)] leading-[0.9] tracking-tight">
              Redefining<br />
              <span className="gradient-text">Industrial</span><br />
              Maintenance
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Autonomous drone systems for cleaning, inspection, and surface treatment. No scaffolding. No risk. No limits.
            </p>
          </FadeUp>
          <FadeUp delay={0.6}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="px-8 py-4 bg-[#34C7FF] text-black font-semibold rounded-full hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,199,255,0.3)]">
                Explore Solutions
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <FadeIn delay={1.5}>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={15} suffix="+" label="Countries" />
            <Counter end={500} suffix="+" label="Projects Delivered" />
            <Counter end={99} suffix="%" label="Safety Record" />
            <Counter end={60} suffix="%" label="Cost Reduction" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Our Mission</span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">
                  Eliminating Human Risk in Industrial Maintenance
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed text-lg">
                  Every year, thousands of workers are injured in high-altitude maintenance operations. Bezliny&apos;s autonomous drone platform replaces dangerous manual labor with precision robotic systems — delivering superior results while keeping people safe.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { value: "Zero", label: "Human risk" },
                    { value: "3x", label: "Faster execution" },
                    { value: "100%", label: "Chemical-free" },
                    { value: "24/7", label: "Operation capable" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl glass">
                      <div className="text-xl font-bold text-[#34C7FF]">{stat.value}</div>
                      <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden glow">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/assets/drone-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Solutions</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Industrial-Grade Services</h2>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto">From skyscrapers to offshore platforms, our drone systems handle the most demanding cleaning and inspection tasks in any environment.</p>
            </div>
          </FadeUp>
          <ServiceCards />
          <FadeUp delay={0.4}>
            <div className="mt-16 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:border-[#34C7FF]/50 hover:bg-[#34C7FF]/5 transition-all duration-300 group">
                View All Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/drone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <FadeUp>
            <div className="text-center max-w-3xl px-6">
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
                Precision Engineering.<br /><span className="text-[#34C7FF]">Zero Compromise.</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg">Our proprietary cleaning systems use filtered water, controlled heat, and calibrated pressure — preserving surfaces while delivering unmatched results.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Technology */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Technology</span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">Bezliny Drone Systems</h2>
                <p className="mt-6 text-white/60 leading-relaxed text-lg">Our proprietary sensor technology provides centimeter-level precision, setting a new standard for quality and significantly improving HSE performance.</p>
                <div className="mt-10 space-y-6">
                  {[
                    { title: "Non-contact cleaning approach", desc: "Preserves surface integrity" },
                    { title: "Patented safety system", desc: "Automated collision avoidance" },
                    { title: "Centimeter-level precision", desc: "GPS-RTK navigation" },
                    { title: "Chemical-free operation", desc: "Pure water technology" },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#34C7FF]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#34C7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-[#34C7FF] transition-colors">{feature.title}</h4>
                        <p className="text-sm text-white/40 mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <ScaleIn delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-[#111]">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/assets/drone-hero.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#34C7FF]/20 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#34C7FF]/10 rounded-3xl" />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Global Reach</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">Operating Worldwide</h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">From the high-rises of Warsaw to offshore platforms in the North Sea — our drone systems operate wherever critical infrastructure needs maintenance.</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: "Europe", detail: "HQ - Warsaw, Poland" },
                { region: "Scandinavia", detail: "Nordic Operations" },
                { region: "Middle East", detail: "Oil & Gas Sector" },
                { region: "Asia Pacific", detail: "Expansion 2026" },
              ].map((loc) => (
                <div key={loc.region} className="p-6 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="text-lg font-semibold group-hover:text-[#34C7FF] transition-colors">{loc.region}</div>
                  <div className="text-sm text-white/40 mt-1">{loc.detail}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#34C7FF]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space)] leading-tight">
              Ready to Eliminate<br /><span className="gradient-text">Scaffolding Forever?</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">Join the world&apos;s most innovative companies that have already switched to drone-based maintenance.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-4 bg-[#34C7FF] text-black font-semibold rounded-full hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,199,255,0.3)] text-lg">Request a Demo</Link>
              <Link href="/about" className="px-10 py-4 border border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-lg">Learn More</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
