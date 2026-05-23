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

        <div className="relative z-20 max-w-6xl mx-auto px-5 md:px-6 text-center">
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
            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[6rem] font-bold font-[family-name:var(--font-space)] leading-[0.9] md:leading-[0.85] tracking-tight"
          />

          <ParagraphReveal
            text={t.hero.subtitle}
            delay={0.8}
            className="mt-6 md:mt-10 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
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

      {/* Alaa */}
      <section className="py-20 relative overflow-hidden bg-[#030308]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full max-w-5xl h-96" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            {/* Flower 1 — left, blooming rose */}
            <g transform="translate(100, 320)">
              <path d="M0 0 Q-3 -20 0 -50" fill="none" stroke="#2d5a27" strokeWidth="2" />
              <path d="M-2 -30 Q-15 -35 -20 -28" fill="none" stroke="#2d5a27" strokeWidth="1.5" />
              <ellipse cx="-20" cy="-28" rx="8" ry="5" fill="#3a7a33" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <ellipse key={`f1-${i}`} cx="0" cy="-62" rx="7" ry="16" fill="#e63946" fillOpacity={0.85}
                  transform={`rotate(${angle} 0 -50)`}>
                  <animateTransform attributeName="transform" type="rotate"
                    values={`${angle} 0 -50;${angle + 5} 0 -50;${angle} 0 -50`} dur="4s" repeatCount="indefinite" />
                </ellipse>
              ))}
              <circle cx="0" cy="-50" r="5" fill="#ffd700" />
            </g>

            {/* === GIRL ON HORSE — realistic proportions, 5'3" rider === */}
            <g transform="translate(500, 80)">
              {/* === HORSE — detailed anatomy, muscular === */}
              {/* Horse body — barrel chest, powerful */}
              <ellipse cx="0" cy="180" rx="90" ry="55" fill="#8B4513" stroke="#5C2E0A" strokeWidth="0.8" />
              {/* Hindquarters — muscular curve */}
              <ellipse cx="-70" cy="175" rx="50" ry="50" fill="#7A3B10" stroke="#5C2E0A" strokeWidth="0.5" />
              {/* Shoulder */}
              <ellipse cx="65" cy="170" rx="40" ry="45" fill="#8B4513" stroke="#5C2E0A" strokeWidth="0.5" />
              {/* Neck — arched, powerful */}
              <path d="M85 145 Q100 100 95 60 Q90 40 75 30" fill="#7A3B10" stroke="#5C2E0A" strokeWidth="1" />
              <path d="M65 155 Q75 110 72 65 Q68 45 55 35" fill="#8B4513" stroke="#5C2E0A" strokeWidth="0.5" />
              {/* Head — refined, alert */}
              <path d="M75 30 Q85 15 80 5 Q75 -5 65 0 Q55 5 55 20 Q58 30 65 35 Z" fill="#7A3B10" stroke="#5C2E0A" strokeWidth="0.8" />
              {/* Ear */}
              <path d="M72 -2 Q74 -12 70 -15 Q68 -12 70 -2" fill="#6B3410" stroke="#5C2E0A" strokeWidth="0.5" />
              <path d="M78 0 Q80 -10 77 -13 Q75 -10 76 0" fill="#6B3410" stroke="#5C2E0A" strokeWidth="0.5" />
              {/* Eye */}
              <ellipse cx="72" cy="12" rx="4" ry="3.5" fill="#1a0a00" />
              <circle cx="73" cy="11" r="1" fill="#fff" fillOpacity="0.4" />
              {/* Nostril */}
              <ellipse cx="76" cy="22" rx="3" ry="2.5" fill="#3a1a0a" />
              {/* Mouth line */}
              <path d="M65 25 Q70 27 78 25" fill="none" stroke="#3a1a0a" strokeWidth="0.8" />
              {/* Mane — flowing */}
              <path d="M80 20 Q90 40 85 60 Q82 80 88 100 Q85 120 82 140" fill="none" stroke="#1a0a00" strokeWidth="3" />
              <path d="M75 15 Q85 35 80 55 Q78 75 82 95 Q80 115 78 135" fill="none" stroke="#2a1500" strokeWidth="2" />
              <path d="M70 18 Q78 38 74 58 Q72 78 76 98" fill="none" stroke="#3a2000" strokeWidth="1.5" />
              
              {/* Front legs */}
              {/* Front-right leg */}
              <path d="M80 210 L82 250 Q83 265 82 280 L80 300" fill="none" stroke="#7A3B10" strokeWidth="10" strokeLinecap="round" />
              <rect x="75" y="295" width="12" height="8" fill="#1a0a00" rx="3" /> {/* Hoof */}
              {/* Front-left leg (slightly back) */}
              <path d="M55 215 L53 255 Q52 268 53 282 L55 302" fill="none" stroke="#6B3410" strokeWidth="9" strokeLinecap="round" />
              <rect x="50" y="297" width="11" height="8" fill="#1a0a00" rx="3" />
              {/* Back legs */}
              {/* Back-right leg */}
              <path d="M-40 220 L-38 250 Q-35 270 -38 285 L-40 305" fill="none" stroke="#7A3B10" strokeWidth="10" strokeLinecap="round" />
              <rect x="-45" y="300" width="12" height="8" fill="#1a0a00" rx="3" />
              {/* Back-left leg */}
              <path d="M-60 218 L-62 248 Q-63 268 -62 283 L-60 303" fill="none" stroke="#6B3410" strokeWidth="9" strokeLinecap="round" />
              <rect x="-65" y="298" width="11" height="8" fill="#1a0a00" rx="3" />
              
              {/* Tail — flowing */}
              <path d="M-115 165 Q-135 175 -140 200 Q-138 230 -130 260" fill="none" stroke="#1a0a00" strokeWidth="4" />
              <path d="M-112 168 Q-130 180 -135 205 Q-133 235 -125 260" fill="none" stroke="#2a1500" strokeWidth="3" />
              <path d="M-110 170 Q-125 185 -130 210 Q-128 238 -122 258" fill="none" stroke="#3a2000" strokeWidth="2" />
              
              {/* Saddle */}
              <path d="M-20 140 Q0 125 30 130 Q50 135 55 145 Q50 155 30 158 Q0 160 -20 155 Z" fill="#2a1500" stroke="#1a0a00" strokeWidth="1" />
              <path d="M-15 142 Q0 130 25 133 Q45 137 50 145" fill="none" stroke="#3a2000" strokeWidth="1.5" />
              {/* Saddle pad */}
              <path d="M-30 148 Q0 138 40 142 Q60 146 65 155 Q55 165 30 168 Q-5 170 -30 162 Z" fill="#1a3050" stroke="#0f2040" strokeWidth="0.5" />
              {/* Stirrup */}
              <path d="M40 155 L42 190 Q42 195 38 195 L35 195 Q32 195 32 190 L34 175" fill="none" stroke="#888" strokeWidth="1.5" />
              <path d="M-10 158 L-12 192 Q-12 197 -8 197 L-5 197 Q-2 197 -2 192 L-4 178" fill="none" stroke="#888" strokeWidth="1.5" />
              {/* Bridle & reins */}
              <path d="M70 18 L72 25 L68 30" fill="none" stroke="#2a1500" strokeWidth="1.5" />
              <path d="M68 30 Q50 50 35 80 Q25 100 20 120" fill="none" stroke="#2a1500" strokeWidth="1.2" />
              <path d="M75 20 Q85 30 80 40 Q65 55 50 85 Q40 105 35 125" fill="none" stroke="#2a1500" strokeWidth="1.2" />

              {/* === RIDER — Alaa, 5'3" proportions, realistic === */}
              <g transform="translate(10, 50)">
                {/* Legs — in riding position, boots in stirrups */}
                <path d="M20 95 Q25 110 28 125 Q30 135 32 145" fill="none" stroke="#1a1a2e" strokeWidth="7" strokeLinecap="round" />
                <path d="M-5 98 Q-8 112 -10 127 Q-12 137 -14 147" fill="none" stroke="#1a1a2e" strokeWidth="7" strokeLinecap="round" />
                {/* Riding boots */}
                <rect x="27" y="140" width="10" height="14" fill="#1a0a00" rx="2" />
                <rect x="-18" y="142" width="10" height="14" fill="#1a0a00" rx="2" />
                
                {/* Torso — fitted riding jacket */}
                <path d="M-5 30 Q-8 50 -5 75 Q0 90 5 95 L25 95 Q30 90 33 75 Q36 50 33 30 Z" fill="#1a1a3a" stroke="#2a2a5a" strokeWidth="0.5" />
                {/* Jacket collar */}
                <path d="M5 30 Q14 25 23 30" fill="#2a2a5a" stroke="#1a1a3a" strokeWidth="0.5" />
                {/* Buttons */}
                <circle cx="14" cy="45" r="1.5" fill="#888" />
                <circle cx="14" cy="55" r="1.5" fill="#888" />
                <circle cx="14" cy="65" r="1.5" fill="#888" />
                
                {/* Arms — holding reins */}
                <path d="M-2 38 Q-10 50 -8 65 Q-6 75 0 80" fill="none" stroke="#1a1a3a" strokeWidth="5" strokeLinecap="round" />
                <path d="M30 38 Q38 50 36 65 Q34 75 28 80" fill="none" stroke="#1a1a3a" strokeWidth="5" strokeLinecap="round" />
                {/* Hands — holding reins */}
                <ellipse cx="0" cy="82" rx="4" ry="3.5" fill="url(#skinTone)" />
                <ellipse cx="28" cy="82" rx="4" ry="3.5" fill="url(#skinTone)" />
                
                {/* Neck */}
                <path d="M10 22 L10 30 M18 22 L18 30" fill="none" stroke="url(#skinTone)" strokeWidth="4" />
                
                {/* Head — feminine, detailed */}
                <ellipse cx="14" cy="10" rx="12" ry="14" fill="url(#skinTone)" />
                {/* Eyes — expressive */}
                <ellipse cx="9" cy="8" rx="2.5" ry="2" fill="#2a1a0a" />
                <circle cx="9.5" cy="7.5" r="0.8" fill="#fff" fillOpacity="0.5" />
                <ellipse cx="19" cy="8" rx="2.5" ry="2" fill="#2a1a0a" />
                <circle cx="19.5" cy="7.5" r="0.8" fill="#fff" fillOpacity="0.5" />
                {/* Eyelashes */}
                <path d="M6 6 Q5 5 4 5" fill="none" stroke="#1a0a00" strokeWidth="0.5" />
                <path d="M22 6 Q23 5 24 5" fill="none" stroke="#1a0a00" strokeWidth="0.5" />
                {/* Eyebrows — arched */}
                <path d="M6 3 Q9 1 12 3" fill="none" stroke="#2a1500" strokeWidth="1" />
                <path d="M16 3 Q19 1 22 3" fill="none" stroke="#2a1500" strokeWidth="1" />
                {/* Nose */}
                <path d="M13 10 Q14 13 13 14" fill="none" stroke="#a07050" strokeWidth="0.8" />
                {/* Smile */}
                <path d="M9 17 Q14 20 19 17" fill="none" stroke="#8a5040" strokeWidth="1" />
                {/* Blush */}
                <circle cx="7" cy="14" r="3" fill="#e89090" fillOpacity="0.2" />
                <circle cx="21" cy="14" r="3" fill="#e89090" fillOpacity="0.2" />
                
                {/* Riding helmet */}
                <path d="M1 2 Q2 -10 14 -12 Q26 -10 27 2 Q25 4 14 5 Q3 4 1 2 Z" fill="#1a1a2e" stroke="#333" strokeWidth="0.8" />
                <path d="M0 3 Q14 6 28 3" fill="none" stroke="#444" strokeWidth="1.5" />
                {/* Helmet velvet cover */}
                <path d="M5 -8 Q14 -14 23 -8" fill="none" stroke="#2a2a4e" strokeWidth="0.5" />
                
                {/* Hair — flowing out from under helmet */}
                <path d="M2 5 Q-5 15 -8 30 Q-10 45 -6 55" fill="none" stroke="#1a0a00" strokeWidth="2.5" />
                <path d="M3 6 Q-3 18 -5 32 Q-7 45 -4 52" fill="none" stroke="#2a1500" strokeWidth="2" />
                <path d="M26 5 Q32 15 34 28 Q35 40 33 48" fill="none" stroke="#1a0a00" strokeWidth="2.5" />
                <path d="M25 6 Q30 17 31 30 Q32 40 30 46" fill="none" stroke="#2a1500" strokeWidth="2" />
              </g>
            </g>

            {/* Flower 2 — center-right, lily */}
            <g transform="translate(750, 330)">
              <path d="M0 0 Q2 -25 0 -55" fill="none" stroke="#2d5a27" strokeWidth="2" />
              <path d="M1 -35 Q12 -40 18 -33" fill="none" stroke="#2d5a27" strokeWidth="1.5" />
              <ellipse cx="18" cy="-33" rx="8" ry="5" fill="#3a7a33" />
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <ellipse key={`f2-${i}`} cx="0" cy="-67" rx="9" ry="20" fill="#fff0f5" fillOpacity={0.9}
                  transform={`rotate(${angle} 0 -55)`}>
                  <animateTransform attributeName="transform" type="rotate"
                    values={`${angle} 0 -55;${angle + 3} 0 -55;${angle} 0 -55`} dur="5s" repeatCount="indefinite" />
                </ellipse>
              ))}
              <circle cx="0" cy="-55" r="5" fill="#ff69b4" />
            </g>

            {/* Flower 3 — far right, sunflower */}
            <g transform="translate(900, 310)">
              <path d="M0 0 Q2 -30 0 -65" fill="none" stroke="#2d5a27" strokeWidth="2.5" />
              <path d="M-1 -40 Q-14 -45 -18 -38" fill="none" stroke="#2d5a27" strokeWidth="1.5" />
              <ellipse cx="-18" cy="-38" rx="8" ry="5" fill="#3a7a33" />
              {Array.from({length: 12}, (_, i) => (
                <ellipse key={`f3-${i}`} cx="0" cy="-78" rx="5" ry="14" fill="#fbbf24" fillOpacity={0.9}
                  transform={`rotate(${i * 30} 0 -65)`}>
                  <animateTransform attributeName="transform" type="rotate"
                    values={`${i*30} 0 -65;${i*30 + 2} 0 -65;${i*30} 0 -65`} dur="6s" repeatCount="indefinite" />
                </ellipse>
              ))}
              <circle cx="0" cy="-65" r="10" fill="#78350f" />
              <circle cx="0" cy="-65" r="7" fill="#92400e" />
            </g>

            {/* Ground grass */}
            <path d="M0 350 Q250 340 500 350 Q750 340 1000 350 L1000 400 L0 400 Z" fill="#1a3a15" fillOpacity="0.3" />
          </svg>
        </div>
        <div className="relative text-center pt-72">
          <p className="text-2xl md:text-4xl font-bold text-white/90 font-[family-name:var(--font-space)]">
            Alaa is Adorable 🌸
          </p>
        </div>
      </section>
    </>
  );
}
