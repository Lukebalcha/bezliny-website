"use client";

import ContactForm from "@/components/ContactForm";
import { DroneTransition } from "@/components/ScrollTransitions";
import { FormingSection, FormingElement } from "@/components/CinematicReveal";
import { useLang } from "@/lib/LangContext";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <FormingSection className="pt-32 pb-20 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FormingElement from="left">
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">{t.contactPage.label}</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">{t.contactPage.title}</h1>
            <p className="mt-6 text-xl text-white/85 max-w-2xl">{t.contactPage.subtitle}</p>
          </FormingElement>
        </div>
      </FormingSection>

      <DroneTransition />

      <FormingSection className="pb-32 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FormingElement from="left" delay={0.1}>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">{t.contactPage.hq}</h3>
                  <div className="space-y-3 text-white/85">
                    <p>{t.contactPage.hqCity}</p>
                    <p>{t.contactPage.hqRegion}</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">{t.contactPage.directContact}</h3>
                  <div className="space-y-3">
                    <a href="mailto:contact@bezliny.com" className="block text-white/85 hover:text-white transition-colors">
                      contact@bezliny.com
                    </a>
                    <a href="tel:+48579366868" className="block text-white/85 hover:text-white transition-colors">
                      +48 579 366 868
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">{t.contactPage.operations}</h3>
                  <p className="text-white/85">{t.contactPage.opsGlobal}</p>
                  <p className="text-white/85 mt-1">{t.contactPage.opsAvail}</p>
                </div>
              </div>
            </FormingElement>

            <FormingElement from="right" delay={0.2}>
              <ContactForm />
            </FormingElement>
          </div>
        </div>
      </FormingSection>
    </>
  );
}
