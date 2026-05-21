"use client";

import ServiceCards from "@/components/ServiceCards";
import { DroneTransition, BurstTransition } from "@/components/ScrollTransitions";
import { FormingSection, FormingElement } from "@/components/CinematicReveal";
import { useLang } from "@/lib/LangContext";

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <FormingSection className="pt-36 pb-24 relative z-[1]">
        <div className="absolute top-20 right-8 text-[14rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">S</div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FormingElement from="left">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">{t.servicesPage.label}</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">{t.servicesPage.title}</h1>
            <p className="mt-6 text-xl text-white/75 max-w-2xl">{t.servicesPage.subtitle}</p>
          </FormingElement>
        </div>
      </FormingSection>

      <DroneTransition direction="left" />

      <FormingSection className="pb-36 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServiceCards />
        </div>
      </FormingSection>

      <BurstTransition />

      <FormingSection className="py-36 border-t border-white/[0.04] relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FormingElement from="bottom">
            <div className="text-center mb-20">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">{t.servicesPage.processLabel}</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">{t.servicesPage.processTitle}</h2>
            </div>
          </FormingElement>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: t.servicesPage.s01, desc: t.servicesPage.s01d },
              { step: "02", title: t.servicesPage.s02, desc: t.servicesPage.s02d },
              { step: "03", title: t.servicesPage.s03, desc: t.servicesPage.s03d },
              { step: "04", title: t.servicesPage.s04, desc: t.servicesPage.s04d },
            ].map((item, i) => (
              <FormingElement key={item.step} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="relative p-8 rounded-2xl border border-white/[0.04] bg-[#111113] text-center">
                  <div className="text-3xl font-bold text-[#c8cdd3]/25 font-[family-name:var(--font-space)]">{item.step}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white/90">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </div>
              </FormingElement>
            ))}
          </div>
        </div>
      </FormingSection>
    </>
  );
}
