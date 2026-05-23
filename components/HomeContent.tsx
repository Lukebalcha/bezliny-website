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

      {/* Alaa — Cinematic Horse Riding Animation (auto-play loop) */}
      <section className="py-10 relative overflow-hidden bg-[#030308] h-[50vh] md:h-[60vh]">
        <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0a2e" />
              <stop offset="40%" stopColor="#2d1b4e" />
              <stop offset="70%" stopColor="#4a2040" />
              <stop offset="100%" stopColor="#1a3020" />
            </linearGradient>
            <linearGradient id="horseBrown" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#6B3410" />
              <stop offset="100%" stopColor="#5C2E0A" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="80%" cy="30%" r="30%">
              <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a4a20" />
              <stop offset="100%" stopColor="#1a3015" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect x="0" y="0" width="1200" height="500" fill="url(#sunsetSky)" />
          <rect x="0" y="0" width="1200" height="500" fill="url(#sunGlow)" />
          
          {/* Moon */}
          <circle cx="950" cy="120" r="40" fill="#ffd700" fillOpacity="0.15" />
          <circle cx="950" cy="120" r="30" fill="#ffaa00" fillOpacity="0.1" />
          
          {/* Stars twinkling */}
          {[{x:100,y:60},{x:250,y:90},{x:400,y:50},{x:550,y:80},{x:700,y:45},{x:850,y:70},{x:1050,y:55},{x:150,y:130},{x:350,y:110}].map((s, i) => (
            <circle key={`star-${i}`} cx={s.x} cy={s.y} r="1.5" fill="#fff" fillOpacity="0.6">
              <animate attributeName="fillOpacity" values="0.6;0.1;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Distant hills — scrolling parallax */}
          <path d="M-200 350 Q0 300 200 340 Q400 300 600 330 Q800 290 1000 320 Q1200 300 1400 340 L1400 500 L-200 500 Z" fill="#0f2010" fillOpacity="0.6">
            <animateTransform attributeName="transform" type="translate" values="0,0;-200,0;0,0" dur="30s" repeatCount="indefinite" />
          </path>

          {/* Mid-ground trees — scrolling faster */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;-400,0;0,0" dur="15s" repeatCount="indefinite" />
            {[0, 200, 450, 700, 950, 1200, 1450].map((tx, i) => (
              <g key={`tree-${i}`} transform={`translate(${tx}, 330)`}>
                <rect x="-3" y="0" width="6" height="40" fill="#2a1a00" />
                <ellipse cx="0" cy="-10" rx="20" ry="25" fill="#1a3a15" fillOpacity="0.7" />
              </g>
            ))}
          </g>

          {/* Ground */}
          <rect x="0" y="380" width="1200" height="120" fill="url(#groundGrad)" />
          {/* Grass scrolling fast */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;-90,0;0,0" dur="0.8s" repeatCount="indefinite" />
            {Array.from({length: 30}, (_, i) => (
              <line key={`grass-${i}`} x1={i * 45} y1="382" x2={i * 45 - 5} y2="372" stroke="#3a5a25" strokeWidth="1.5" strokeOpacity="0.5" />
            ))}
          </g>

          {/* Dust cloud behind horse */}
          {Array.from({length: 15}, (_, i) => (
            <circle key={`dust-${i}`} r={2 + i * 0.5} fill="#8B7355" fillOpacity="0.25">
              <animate attributeName="cx" values={`${420 - i * 18};${320 - i * 22};${420 - i * 18}`} dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="cy" values={`${375 + (i % 3) * 5};${368 + (i % 4) * 4};${375 + (i % 3) * 5}`} dur={`${1 + i * 0.15}s`} repeatCount="indefinite" />
              <animate attributeName="fillOpacity" values="0.25;0.03;0.25" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* === HORSE + RIDER — galloping animation === */}
          <g>
            {/* Whole unit bouncing (gallop rhythm) */}
            <animateTransform attributeName="transform" type="translate" values="500,180;500,168;500,180;500,172;500,180" dur="0.7s" repeatCount="indefinite" />
            
            {/* Horse body */}
            <ellipse cx="0" cy="120" rx="80" ry="45" fill="url(#horseBrown)" stroke="#4a2508" strokeWidth="0.8" />
            <ellipse cx="55" cy="110" rx="35" ry="40" fill="#7A3B10" />
            <ellipse cx="-60" cy="115" rx="42" ry="42" fill="#6B3410" />
            
            {/* Neck */}
            <path d="M70 90 Q85 55 80 25 Q75 10 65 5" fill="#7A3B10" stroke="#5C2E0A" strokeWidth="1" />
            <path d="M55 100 Q65 60 62 30 Q58 15 50 10" fill="#8B4513" />
            
            {/* Head — bobbing */}
            <g>
              <animateTransform attributeName="transform" type="rotate" values="-5,65,5;8,65,5;-5,65,5" dur="0.7s" repeatCount="indefinite" />
              <path d="M65 5 Q75 -10 72 -20 Q68 -28 58 -25 Q48 -20 48 -5 Q50 5 58 10 Z" fill="#6B3410" stroke="#5C2E0A" strokeWidth="0.8" />
              <path d="M62 -25 Q63 -35 60 -37 Q58 -33 59 -25" fill="#5C2E0A" />
              <path d="M68 -23 Q70 -33 67 -35 Q65 -31 66 -23" fill="#5C2E0A" />
              <ellipse cx="63" cy="-12" rx="3.5" ry="3" fill="#1a0a00" />
              <circle cx="64" cy="-13" r="1" fill="#fff" fillOpacity="0.3" />
              <ellipse cx="67" cy="-2" rx="3" ry="2.5" fill="#3a1500">
                <animate attributeName="rx" values="3;4.5;3" dur="0.7s" repeatCount="indefinite" />
              </ellipse>
              <path d="M55 -15 L60 -5 L55 5" fill="none" stroke="#2a1500" strokeWidth="1.5" />
            </g>
            
            {/* Mane — flowing wild */}
            <path fill="none" stroke="#1a0a00" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="d" values="M72 0 Q82 18 76 38 Q72 58 78 78;M72 0 Q88 22 80 42 Q70 62 76 82;M72 0 Q82 18 76 38 Q72 58 78 78" dur="0.7s" repeatCount="indefinite" />
            </path>
            <path fill="none" stroke="#2a1500" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="d" values="M68 -5 Q76 12 73 32 Q70 52 75 72;M68 -5 Q82 16 76 36 Q68 56 73 74;M68 -5 Q76 12 73 32 Q70 52 75 72" dur="0.7s" repeatCount="indefinite" />
            </path>
            
            {/* LEGS — full gallop cycle */}
            {/* Front-right */}
            <path fill="none" stroke="#7A3B10" strokeWidth="9" strokeLinecap="round">
              <animate attributeName="d" values="M65 155 L78 178 L82 200;M65 155 L88 168 L105 170;M65 155 L70 188 L62 202;M65 155 L78 178 L82 200" dur="0.7s" repeatCount="indefinite" />
            </path>
            <ellipse rx="6" ry="4" fill="#1a0a00">
              <animate attributeName="cx" values="82;105;62;82" dur="0.7s" repeatCount="indefinite" />
              <animate attributeName="cy" values="204;174;206;204" dur="0.7s" repeatCount="indefinite" />
            </ellipse>
            {/* Front-left */}
            <path fill="none" stroke="#6B3410" strokeWidth="8" strokeLinecap="round">
              <animate attributeName="d" values="M55 158 L62 185 L56 202;M55 158 L42 172 L30 175;M55 158 L68 178 L78 195;M55 158 L62 185 L56 202" dur="0.7s" repeatCount="indefinite" begin="0.175s" />
            </path>
            <ellipse rx="5" ry="4" fill="#1a0a00">
              <animate attributeName="cx" values="56;30;78;56" dur="0.7s" repeatCount="indefinite" begin="0.175s" />
              <animate attributeName="cy" values="206;179;199;206" dur="0.7s" repeatCount="indefinite" begin="0.175s" />
            </ellipse>
            {/* Back-right */}
            <path fill="none" stroke="#7A3B10" strokeWidth="9" strokeLinecap="round">
              <animate attributeName="d" values="M-35 155 L-28 180 L-22 202;M-35 155 L-52 168 L-68 172;M-35 155 L-22 185 L-18 202;M-35 155 L-28 180 L-22 202" dur="0.7s" repeatCount="indefinite" begin="0.35s" />
            </path>
            <ellipse rx="6" ry="4" fill="#1a0a00">
              <animate attributeName="cx" values="-22;-68;-18;-22" dur="0.7s" repeatCount="indefinite" begin="0.35s" />
              <animate attributeName="cy" values="206;176;206;206" dur="0.7s" repeatCount="indefinite" begin="0.35s" />
            </ellipse>
            {/* Back-left */}
            <path fill="none" stroke="#6B3410" strokeWidth="8" strokeLinecap="round">
              <animate attributeName="d" values="M-50 158 L-55 183 L-52 202;M-50 158 L-38 172 L-28 178;M-50 158 L-62 180 L-66 200;M-50 158 L-55 183 L-52 202" dur="0.7s" repeatCount="indefinite" begin="0.525s" />
            </path>
            <ellipse rx="5" ry="4" fill="#1a0a00">
              <animate attributeName="cx" values="-52;-28;-66;-52" dur="0.7s" repeatCount="indefinite" begin="0.525s" />
              <animate attributeName="cy" values="206;182;204;206" dur="0.7s" repeatCount="indefinite" begin="0.525s" />
            </ellipse>
            
            {/* Tail — dramatic flow */}
            <path fill="none" stroke="#1a0a00" strokeWidth="5" strokeLinecap="round">
              <animate attributeName="d" values="M-95 105 Q-122 108 -138 130 Q-148 162 -132 192;M-95 105 Q-132 98 -155 118 Q-162 152 -142 188;M-95 105 Q-118 115 -132 138 Q-142 168 -128 198;M-95 105 Q-122 108 -138 130 Q-148 162 -132 192" dur="0.7s" repeatCount="indefinite" />
            </path>
            <path fill="none" stroke="#2a1500" strokeWidth="3" strokeLinecap="round">
              <animate attributeName="d" values="M-92 108 Q-118 112 -132 135 Q-142 165 -128 195;M-92 108 Q-128 102 -148 122 Q-158 155 -138 190;M-92 108 Q-112 118 -128 140 Q-138 170 -122 198;M-92 108 Q-118 112 -132 135 Q-142 165 -128 195" dur="0.7s" repeatCount="indefinite" />
            </path>
            
            {/* Saddle */}
            <path d="M-15 85 Q5 75 25 78 Q40 82 42 90 Q38 98 20 100 Q0 102 -15 97 Z" fill="#2a1500" stroke="#1a0a00" strokeWidth="1" />
            
            {/* === RIDER — Alaa bouncing with gallop === */}
            <g>
              <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0;0,-6;0,0" dur="0.7s" repeatCount="indefinite" />
              
              {/* Legs in stirrups */}
              <path d="M20 92 Q25 106 28 118" fill="none" stroke="#1a1a2e" strokeWidth="6" strokeLinecap="round" />
              <path d="M-5 95 Q-8 108 -10 120" fill="none" stroke="#1a1a2e" strokeWidth="6" strokeLinecap="round" />
              <rect x="24" y="116" width="9" height="12" fill="#1a0a00" rx="2" />
              <rect x="-14" y="118" width="9" height="12" fill="#1a0a00" rx="2" />
              
              {/* Torso */}
              <path d="M-3 18 Q-5 38 -3 58 Q0 72 5 78 L25 78 Q30 72 32 58 Q34 38 32 18 Z" fill="#1a1a3a" stroke="#2a2a5a" strokeWidth="0.5" />
              <circle cx="14" cy="32" r="1.2" fill="#888" />
              <circle cx="14" cy="42" r="1.2" fill="#888" />
              <circle cx="14" cy="52" r="1.2" fill="#888" />
              
              {/* Arms — bouncing with rhythm */}
              <path fill="none" stroke="#1a1a3a" strokeWidth="5" strokeLinecap="round">
                <animate attributeName="d" values="M0 26 Q-8 38 -5 52 Q-3 60 2 63;M0 26 Q-12 35 -9 48 Q-6 56 0 59;M0 26 Q-8 38 -5 52 Q-3 60 2 63" dur="0.7s" repeatCount="indefinite" />
              </path>
              <path fill="none" stroke="#1a1a3a" strokeWidth="5" strokeLinecap="round">
                <animate attributeName="d" values="M28 26 Q36 38 34 52 Q32 60 27 63;M28 26 Q40 35 37 48 Q34 56 29 59;M28 26 Q36 38 34 52 Q32 60 27 63" dur="0.7s" repeatCount="indefinite" />
              </path>
              
              {/* Hands + reins */}
              <ellipse cx="2" cy="65" rx="3.5" ry="3" fill="#c49464" />
              <ellipse cx="27" cy="65" rx="3.5" ry="3" fill="#c49464" />
              <path d="M2 65 Q20 48 45 18" fill="none" stroke="#2a1500" strokeWidth="1.2" />
              <path d="M27 65 Q35 43 50 13" fill="none" stroke="#2a1500" strokeWidth="1.2" />
              
              {/* Neck */}
              <rect x="9" y="10" width="10" height="10" fill="#c49464" rx="3" />
              
              {/* Head */}
              <ellipse cx="14" cy="0" rx="11" ry="13" fill="#c49464" />
              <ellipse cx="9" cy="-2" rx="2.2" ry="1.8" fill="#2a1a0a" />
              <circle cx="9.5" cy="-2.5" r="0.7" fill="#fff" fillOpacity="0.4" />
              <ellipse cx="19" cy="-2" rx="2.2" ry="1.8" fill="#2a1a0a" />
              <circle cx="19.5" cy="-2.5" r="0.7" fill="#fff" fillOpacity="0.4" />
              <path d="M6 -6 Q9 -8 12 -6" fill="none" stroke="#2a1500" strokeWidth="0.8" />
              <path d="M16 -6 Q19 -8 22 -6" fill="none" stroke="#2a1500" strokeWidth="0.8" />
              <path d="M13 1 Q14 3 13 4" fill="none" stroke="#a07050" strokeWidth="0.7" />
              <path d="M9 7 Q14 10 19 7" fill="none" stroke="#8a5040" strokeWidth="0.8" />
              <circle cx="7" cy="3" r="2.5" fill="#e89090" fillOpacity="0.15" />
              <circle cx="21" cy="3" r="2.5" fill="#e89090" fillOpacity="0.15" />
              
              {/* Helmet */}
              <path d="M2 -9 Q3 -18 14 -20 Q25 -18 26 -9 Q24 -7 14 -6 Q4 -7 2 -9 Z" fill="#1a1a2e" stroke="#333" strokeWidth="0.7" />
              
              {/* Hair flowing wildly in wind */}
              <path fill="none" stroke="#1a0a00" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="d" values="M3 -5 Q-8 8 -14 25 Q-18 42 -12 55;M3 -5 Q-12 5 -20 20 Q-24 38 -18 52;M3 -5 Q-8 8 -14 25 Q-18 42 -12 55" dur="0.7s" repeatCount="indefinite" />
              </path>
              <path fill="none" stroke="#2a1500" strokeWidth="2" strokeLinecap="round">
                <animate attributeName="d" values="M4 -4 Q-5 10 -10 28 Q-13 44 -8 54;M4 -4 Q-9 7 -16 22 Q-19 40 -14 50;M4 -4 Q-5 10 -10 28 Q-13 44 -8 54" dur="0.7s" repeatCount="indefinite" />
              </path>
              <path fill="none" stroke="#1a0a00" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="d" values="M25 -5 Q34 6 38 22 Q40 38 36 50;M25 -5 Q38 4 42 18 Q44 35 40 48;M25 -5 Q34 6 38 22 Q40 38 36 50" dur="0.7s" repeatCount="indefinite" />
              </path>
              <path fill="none" stroke="#2a1500" strokeWidth="2" strokeLinecap="round">
                <animate attributeName="d" values="M24 -4 Q32 8 35 24 Q37 40 34 50;M24 -4 Q36 5 39 20 Q41 36 37 48;M24 -4 Q32 8 35 24 Q37 40 34 50" dur="0.7s" repeatCount="indefinite" />
              </path>
            </g>
          </g>

          {/* Flowers along the ground */}
          {[{x:80,c:"#e63946"},{x:200,c:"#ff69b4"},{x:1000,c:"#fbbf24"},{x:1100,c:"#e63946"},{x:150,c:"#fff0f5"}].map((f, i) => (
            <g key={`flower-${i}`} transform={`translate(${f.x}, 375)`}>
              <line x1="0" y1="0" x2="0" y2="-20" stroke="#2d5a27" strokeWidth="1.5" />
              {[0, 72, 144, 216, 288].map((a, j) => (
                <ellipse key={`fp-${i}-${j}`} cx="0" cy="-28" rx="4" ry="10" fill={f.c} fillOpacity="0.8" transform={`rotate(${a} 0 -20)`}>
                  <animateTransform attributeName="transform" type="rotate" values={`${a} 0 -20;${a+3} 0 -20;${a} 0 -20`} dur="4s" repeatCount="indefinite" />
                </ellipse>
              ))}
              <circle cx="0" cy="-20" r="3" fill="#ffd700" />
            </g>
          ))}

          {/* Text */}
          <text x="600" y="470" textAnchor="middle" fill="white" fillOpacity="0.85" fontSize="24" fontFamily="serif" letterSpacing="3">
            Alaa is Adorable 🌸
          </text>
        </svg>
      </section>
    </>
  );
}
