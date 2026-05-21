import { FadeUp, SlideIn } from "@/components/Animations";

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">About Us</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
              Engineering the Future
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-3xl">
              Bezliny Cleaning Corporation is a global industrial technology company 
              specializing in autonomous drone systems for building maintenance, 
              industrial cleaning, and infrastructure inspection.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Video */}
      <section className="relative h-[50vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/drone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#09090b]/50" />
      </section>

      {/* Story */}
      <section className="py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <SlideIn direction="left">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">Our Story</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)]">
                  Born from Innovation
                </h2>
                <p className="mt-6 text-white/80 leading-[1.8]">
                  Founded in Warsaw, Poland, Bezliny was built on a simple observation: the world&apos;s 
                  most critical infrastructure still depends on dangerous manual labor for maintenance. 
                  Our founders set out to change this by developing autonomous drone platforms capable 
                  of performing cleaning, inspection, and surface treatment at any height or in any 
                  hazardous environment.
                </p>
                <p className="mt-4 text-white/80 leading-[1.8]">
                  Today, we operate across 15+ countries, serving clients in property management, 
                  oil and gas, energy, maritime, and infrastructure sectors. Our patented cleaning 
                  technology uses only filtered water — zero chemicals, zero surface damage.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="space-y-4">
                {[
                  { year: "2020", event: "Company founded in Warsaw, Poland" },
                  { year: "2021", event: "First commercial facade cleaning operation" },
                  { year: "2022", event: "Expanded to Scandinavian markets" },
                  { year: "2023", event: "Oil & Gas sector entry — North Sea operations" },
                  { year: "2024", event: "15+ countries, 500+ projects completed" },
                  { year: "2025", event: "Next-gen autonomous platform launch" },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                    <span className="text-[#c8cdd3] font-bold font-[family-name:var(--font-space)] shrink-0">{item.year}</span>
                    <span className="text-white/85">{item.event}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/65">Values</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">What Drives Us</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Safety First", desc: "Every decision starts with worker safety. Our drones eliminate human exposure to height and hazardous environments." },
              { title: "Precision Engineering", desc: "Centimeter-level accuracy, patented cleaning systems, and continuous R&D investment in autonomous technology." },
              { title: "Sustainability", desc: "100% chemical-free cleaning using pure water technology. Zero environmental impact, maximum cleaning performance." },
            ].map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-white/[0.04] bg-[#111113] h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#c8cdd3]/10 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-[#c8cdd3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white/80 mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
