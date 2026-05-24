"use client";

import { useLang } from "@/lib/LangContext";
import Counter from "@/components/Counter";
import HeroVideo from "@/components/HeroVideo";
import ServiceCards from "@/components/ServiceCards";
import { TextReveal, ParagraphReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import HorizontalScroll from "@/components/HorizontalScroll";
import { Section3D, MeshGradient } from "@/components/Dynamic3D";
import AutoVideo from "@/components/AutoVideo";
import { DroneTransition, BurstTransition, PerformanceTransition } from "@/components/ScrollTransitions";
import { FormingSection, FormingElement } from "@/components/CinematicReveal";
import { FadeUp, ScaleIn, SlideIn } from "@/components/Animations";
import DroneServicesReveal from "@/components/DroneServicesReveal";
import ClientLogos from "@/components/ClientLogos";
import LiveOpsCounter from "@/components/LiveOpsCounter";
import GlobalMap from "@/components/GlobalMap";
import Certifications from "@/components/Certifications";
import TechStack from "@/components/TechStack";
import Partners from "@/components/Partners";
import PressSection from "@/components/PressSection";
import VideoGallery from "@/components/VideoGallery";

export default function HomeContent() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroVideo />
        <div className="video-overlay absolute inset-0 z-[2]" />
        <div className="hidden md:block absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20 z-20" />
        <div className="hidden md:block absolute top-8 right-8 w-16 h-16 border-r border-t border-white/20 z-20" />
        <div className="hidden md:block absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/20 z-20" />
        <div className="hidden md:block absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/20 z-20" />

        <div className="relative z-20 max-w-6xl mx-auto px-10 md:px-6 text-center overflow-hidden">
          <FadeUp>
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full glass mb-8 md:mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8cdd3]" />
              <span className="text-[10px] md:text-[11px] text-white/90 uppercase tracking-[0.15em] md:tracking-[0.25em]">{t.hero.badge}</span>
            </div>
          </FadeUp>
          
          <TextReveal
            text={t.hero.title}
            as="h1"
            delay={0.3}
            className="text-[1.4rem] xs:text-[1.75rem] sm:text-4xl md:text-7xl lg:text-[6rem] font-bold font-[family-name:var(--font-space)] leading-[1.05] sm:leading-[0.95] md:leading-[0.85] tracking-tight"
          />

          <ParagraphReveal
            text={t.hero.subtitle}
            delay={0.8}
            className="mt-6 md:mt-10 text-sm md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2"
          />

          <FadeUp delay={1}>
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
              <MagneticButton href="/services" variant="primary">
                {t.hero.cta}
              </MagneticButton>
              <MagneticButton href="/about" variant="secondary">
                {t.hero.ctaSecondary}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 md:py-8 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 md:gap-16 opacity-50">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">{t.trust.label}</span>
            <div className="hidden md:flex items-center gap-8 md:gap-12">
              {["PANSA Registered", "ULC Certified", "CE Certified", "EASA Compliant", "ISO 14001"].map((cert) => (
                <span key={cert} className="text-[10px] md:text-xs text-white/50 tracking-wider">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <Counter end={90} suffix="+" label={t.stats.countries} />
            <Counter end={50} suffix="+" label={t.stats.projects} />
            <Counter end={99} suffix="%" label={t.stats.safety} />
            <Counter end={60} suffix="%" label={t.stats.cost} />
          </div>
        </div>
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </section>

      {/* Mission */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0b0e] to-[#09090b]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-7">
              <SlideIn direction="left">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">{t.mission.label}</span>
                <h2 className="mt-4 md:mt-6 text-3xl md:text-[3.5rem] font-bold font-[family-name:var(--font-space)] leading-[1.1] md:leading-[1.05]">
                  {t.mission.title}
                </h2>
                <p className="mt-5 md:mt-8 text-white/90 leading-[1.7] md:leading-[1.8] text-base md:text-lg max-w-xl">
                  {t.mission.text}
                </p>
                <div className="mt-8 md:mt-12 grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { value: "Zero", label: t.mission.risk },
                    { value: "3x", label: t.mission.faster },
                    { value: "100%", label: t.mission.chemical },
                    { value: "24/7", label: t.mission.operation },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 md:p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                      <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-white/70 mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
            <div className="lg:col-span-5">
              <SlideIn direction="right" delay={0.2}>
                <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden">
                  <AutoVideo src="/assets/videos/drone-multifunction.mp4" className="w-full h-full object-contain md:object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 to-transparent" />
                  <div className="hidden md:block absolute top-4 right-4 w-8 h-8 border-t border-r border-white/10" />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <DroneTransition />
      <DroneServicesReveal />
      <FormingSection className="py-20 md:py-40 relative">
        <div className="hidden md:block absolute top-32 right-8 text-[12rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">03</div>
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <FormingElement from="left">
            <div className="max-w-xl mb-12 md:mb-20">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">{t.services.label}</span>
              <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">{t.services.title}</h2>
              <p className="mt-4 md:mt-5 text-white/85 leading-relaxed text-sm md:text-base">{t.services.subtitle}</p>
            </div>
          </FormingElement>
          <ServiceCards />
          <FormingElement from="bottom" delay={0.4}>
            <div className="mt-12 md:mt-20 text-center">
              <MagneticButton href="/services" variant="secondary">
                {t.services.viewAll}
              </MagneticButton>
            </div>
          </FormingElement>
        </div>
      </FormingSection>

      {/* Process */}
      <BurstTransition />
      <HorizontalScroll items={[
        { num: "01", title: t.process.step01, desc: t.process.step01Desc },
        { num: "02", title: t.process.step02, desc: t.process.step02Desc },
        { num: "03", title: t.process.step03, desc: t.process.step03Desc },
        { num: "04", title: t.process.step04, desc: t.process.step04Desc },
      ]} />

      {/* Video Break */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <AutoVideo src="/assets/videos/drone-rooftop.mp4" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-[#09090b]/75" />
        <div className="relative z-10 flex items-center justify-center h-full px-5">
          <FadeUp>
            <div className="text-center max-w-4xl">
              <TextReveal
                text={t.videoBreak.title}
                as="h2"
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space)] leading-[1.15] md:leading-[1.1]"
              />
              <ParagraphReveal
                text={t.videoBreak.text}
                delay={0.5}
                className="mt-5 md:mt-8 text-white/85 text-sm md:text-lg max-w-2xl mx-auto"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Technology */}
      <PerformanceTransition />
      <section className="py-20 md:py-40 relative overflow-hidden">
        <Section3D />
        <MeshGradient />
        <div className="hidden md:block absolute top-32 left-8 text-[12rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">05</div>
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScaleIn delay={0.1}>
                <div className="relative aspect-[3/2] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.04]">
                  <AutoVideo src="/assets/videos/drone-tethered.mp4" className="w-full h-full object-contain md:object-cover object-center" />
                </div>
              </ScaleIn>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeUp>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">{t.technology.label}</span>
                <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">{t.technology.title}</h2>
                <p className="mt-4 md:mt-6 text-white/90 leading-relaxed text-base md:text-lg max-w-lg">{t.technology.text}</p>
                <div className="mt-8 md:mt-12 space-y-2 md:space-y-3">
                  {[
                    { title: t.technology.f1, desc: t.technology.f1d },
                    { title: t.technology.f2, desc: t.technology.f2d },
                    { title: t.technology.f3, desc: t.technology.f3d },
                    { title: t.technology.f4, desc: t.technology.f4d },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-700 group">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#c8cdd3]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base text-white/75 group-hover:text-white transition-colors duration-500">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-white/70 mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Global Map */}
      <GlobalMap />

      {/* Video Gallery - Drones in Action */}
      <VideoGallery />

      {/* Technology Stack */}
      <TechStack />

      {/* Certifications */}
      <Certifications />

      {/* Partners */}
      <Partners />

      {/* Press */}
      <PressSection />

      {/* Operational Capability */}
      <LiveOpsCounter />

      {/* Environmental Impact — Homepage Preview */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0a0f] to-[#09090b]" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/70">Environmental Impact</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
                Clean buildings.<br /><span className="text-white/40">Clean conscience.</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "0", unit: "", label: "Chemicals Used", color: "text-white/80" },
              { value: "90", unit: "%", label: "Water Recycled", color: "text-white/80" },
              { value: "0", unit: "", label: "CO₂ Emissions", color: "text-white/80" },
              { value: "45", unit: "dB", label: "Near Silent", color: "text-white/80" },
            ].map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center border border-white/[0.06] rounded-xl p-5 md:p-8"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)' }}>
                  <div className={`text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] ${m.color}`}>
                    {m.value}<span className="text-lg md:text-2xl">{m.unit}</span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-white/50">{m.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <div className="mt-10 text-center">
              <p className="text-white/35 text-sm mb-6">Pure water at 142 BAR. No detergents. No surfactants. No acids. Carbon-neutral electric fleet.</p>
              <MagneticButton href="/environmental-impact" variant="secondary">
                Full Environmental Report
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        <MeshGradient />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c8cdd3]/[0.015] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-6 lg:px-8 text-center">
          <TextReveal
            text={t.cta.title}
            as="h2"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space)] leading-[1.1] md:leading-[1.05]"
          />
          <ParagraphReveal
            text={t.cta.text}
            delay={0.5}
            className="mt-5 md:mt-8 text-white/85 text-sm md:text-lg max-w-xl mx-auto"
          />
          <FadeUp delay={0.7}>
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact" variant="primary">
                Request Assessment
              </MagneticButton>
              <MagneticButton href="/services" variant="secondary">
                Schedule Demo
              </MagneticButton>
            </div>
            <p className="mt-6 text-[10px] text-white/30 uppercase tracking-wider">Enterprise inquiries • 24h response guaranteed</p>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
