"use client";

import { motion } from "framer-motion";
import { FadeUp, SlideIn } from "@/components/Animations";
import AutoVideo from "@/components/AutoVideo";
import { useLang } from "@/lib/LangContext";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import MagneticButton from "@/components/MagneticButton";

export default function TechnologyPage() {
  const { locale } = useLang();

  const specs = [
    { label: locale === "pl" ? "Model" : "Model", value: "JTC-10 Industrial" },
    { label: locale === "pl" ? "Rozpiętość" : "Wingspan", value: "2.4m" },
    { label: locale === "pl" ? "Masa operacyjna" : "Operating Weight", value: "35 kg" },
    { label: locale === "pl" ? "Maks. wysokość" : "Max Altitude", value: "150m" },
    { label: locale === "pl" ? "Czas lotu" : "Flight Time", value: "∞ (Tethered)" },
    { label: locale === "pl" ? "Ładowność" : "Payload", value: "15 kg" },
    { label: locale === "pl" ? "Ciśnienie" : "Pressure", value: "150 BAR" },
    { label: locale === "pl" ? "Przepływ" : "Flow Rate", value: "12.4 L/min" },
    { label: locale === "pl" ? "Dysze" : "Nozzle System", value: "Triple Nozzle" },
    { label: locale === "pl" ? "Nawigacja" : "Navigation", value: "GPS-RTK + LiDAR" },
    { label: locale === "pl" ? "Klasa IP" : "IP Rating", value: "IP67" },
    { label: locale === "pl" ? "Wiatr maks." : "Max Wind", value: "12 m/s" },
  ];

  const advantages = locale === "pl" ? [
    { title: "System zacumowany", desc: "Nieograniczony czas lotu dzięki zasilaniu z ziemi. Brak potrzeby wymiany baterii podczas operacji." },
    { title: "Potrójna dysza", desc: "System trzech niezależnych dysz zapewnia maksymalne pokrycie powierzchni w jednym przelocie." },
    { title: "Autonomiczna nawigacja", desc: "GPS-RTK z dokładnością centymetrową + LiDAR do omijania przeszkód w czasie rzeczywistym." },
    { title: "Zero chemii", desc: "Czyszczenie wyłącznie filtrowaną wodą pod ciśnieniem. Brak uszkodzeń powierzchni, zero wpływu na środowisko." },
  ] : [
    { title: "Tethered Power System", desc: "Unlimited flight time via ground-supplied power. No battery swaps needed during operations." },
    { title: "Triple Nozzle Array", desc: "Three independent nozzles provide maximum surface coverage in a single pass." },
    { title: "Autonomous Navigation", desc: "GPS-RTK centimeter-level precision + real-time LiDAR obstacle avoidance." },
    { title: "Zero Chemical Operation", desc: "Cleans with filtered pressurized water only. No surface damage, zero environmental impact." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">
              {locale === "pl" ? "Technologia" : "Technology"}
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
              {locale === "pl" ? "JTC-10 Industrial" : "JTC-10 Industrial"}
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-3xl">
              {locale === "pl"
                ? "Nasza platformy dronowa nowej generacji — zaprojektowana do czyszczenia fasad w każdych warunkach, na dowolnej wysokości."
                : "Our next-generation drone platform — engineered for façade cleaning in any condition, at any height."}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Video showcase */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <AutoVideo src="/assets/videos/drone-tethered.mp4" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-[#09090b]/60" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <span className="text-[9px] uppercase tracking-wider text-cyan-400/60 font-mono">JTC-10 IN OPERATION</span>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">
                {locale === "pl" ? "Specyfikacja" : "Specifications"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
                {locale === "pl" ? "Dane Techniczne" : "Technical Data"}
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.01]"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2">{spec.label}</div>
                <div className="text-lg md:text-xl font-bold text-white/90 font-[family-name:var(--font-space)]">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">
                  {locale === "pl" ? "Przewaga" : "Advantages"}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)]">
                  {locale === "pl" ? "Dlaczego JTC-10" : "Why JTC-10"}
                </h2>
                <div className="mt-8 space-y-6">
                  {advantages.map((adv, i) => (
                    <motion.div
                      key={adv.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white/85">{adv.title}</h3>
                        <p className="text-sm text-white/55 mt-1 leading-relaxed">{adv.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.04]">
                <AutoVideo src="/assets/videos/drone-triple-nozzle.mp4" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 to-transparent" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Tech Stack + Certifications */}
      <TechStack />
      <Certifications />

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
              {locale === "pl" ? "Gotowy zobaczyć nasz system w akcji?" : "Ready to see our system in action?"}
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact" variant="primary">
                {locale === "pl" ? "Zamów demonstrację" : "Schedule a Demo"}
              </MagneticButton>
              <MagneticButton href="/projects" variant="secondary">
                {locale === "pl" ? "Zobacz projekty" : "View Projects"}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
