"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/Animations";
import { useLang } from "@/lib/LangContext";
import VideoGallery from "@/components/VideoGallery";
import MagneticButton from "@/components/MagneticButton";

export default function ProjectsPage() {
  const { locale } = useLang();

  const sectors = locale === "pl" ? [
    { title: "Wieżowce komercyjne", desc: "Czyszczenie szklanych fasad w centrum Warszawy. Budynki 80-150m.", status: "Aktywny" },
    { title: "Sektor energetyczny", desc: "Panele fotowoltaiczne i turbiny wiatrowe. Czyszczenie bez przestojów.", status: "Aktywny" },
    { title: "Infrastruktura przemysłowa", desc: "Hale produkcyjne, magazyny, centra logistyczne. Dachy i elewacje.", status: "Aktywny" },
    { title: "Budynki rządowe", desc: "Obiekty administracji publicznej, szkoły, szpitale. Zgodność z PANSA.", status: "W planach" },
    { title: "Sektor morski", desc: "Platformy offshore, statki, infrastruktura portowa.", status: "W planach" },
    { title: "Lotniska i hangary", desc: "Wielkoformatowe struktury aluminiowe i szklane.", status: "W planach" },
  ] : [
    { title: "Commercial High-Rises", desc: "Glass façade cleaning in central Warsaw. Buildings 80-150m height.", status: "Active" },
    { title: "Energy Sector", desc: "Solar panels and wind turbines. Cleaning without operational downtime.", status: "Active" },
    { title: "Industrial Infrastructure", desc: "Production halls, warehouses, logistics centers. Roofs and elevations.", status: "Active" },
    { title: "Government Buildings", desc: "Public administration offices, schools, hospitals. PANSA-compliant operations.", status: "Planned" },
    { title: "Maritime Sector", desc: "Offshore platforms, vessels, port infrastructure.", status: "Planned" },
    { title: "Airports & Hangars", desc: "Large-format aluminum and glass structures.", status: "Planned" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">
              {locale === "pl" ? "Portfolio" : "Portfolio"}
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
              {locale === "pl" ? "Nasze Projekty" : "Our Projects"}
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-3xl">
              {locale === "pl"
                ? "Prawdziwe operacje dronowe naszego zespołu — od szklanych wieżowców po infrastrukturę przemysłową."
                : "Real drone operations from our team — from glass skyscrapers to industrial infrastructure."}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery />

      {/* Sectors */}
      <section className="py-24 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">
                {locale === "pl" ? "Sektory" : "Sectors"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
                {locale === "pl" ? "Gdzie operujemy" : "Where We Operate"}
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.01] group hover:border-cyan-400/10 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white/85 text-sm">{sector.title}</h3>
                  <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    sector.status === "Active" || sector.status === "Aktywny"
                      ? "text-emerald-400/80 bg-emerald-400/10"
                      : "text-cyan-400/60 bg-cyan-400/5"
                  }`}>
                    {sector.status}
                  </span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
              {locale === "pl" ? "Zainteresowany naszymi usługami?" : "Interested in our services?"}
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              {locale === "pl"
                ? "Skontaktuj się z nami w celu bezpłatnej wyceny. Odpowiadamy w ciągu 24h."
                : "Get in touch for a free assessment. We respond within 24 hours."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact" variant="primary">
                {locale === "pl" ? "Zamów wycenę" : "Request Assessment"}
              </MagneticButton>
              <MagneticButton href="/technology" variant="secondary">
                {locale === "pl" ? "Nasza technologia" : "Our Technology"}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
