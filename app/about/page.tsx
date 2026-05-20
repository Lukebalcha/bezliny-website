import { FadeUp, SlideIn } from "@/components/Animations";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">About Us</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
              Engineering the Future
            </h1>
            <p className="mt-6 text-xl text-white/50 max-w-3xl">
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
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Story */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Our Story</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)]">
                  Born from Innovation
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  Founded in Warsaw, Poland, Bezliny was built on a simple observation: the world&apos;s 
                  most critical infrastructure still depends on dangerous manual labor for maintenance. 
                  Our founders set out to change this by developing autonomous drone platforms capable 
                  of performing cleaning, inspection, and surface treatment at any height or in any 
                  hazardous environment.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Today, we operate across 15+ countries, serving clients in property management, 
                  oil and gas, energy, maritime, and infrastructure sectors. Our patented cleaning 
                  technology uses only filtered water — zero chemicals, zero surface damage.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="space-y-6">
                {[
                  { year: "2020", event: "Company founded in Warsaw, Poland" },
                  { year: "2021", event: "First commercial facade cleaning operation" },
                  { year: "2022", event: "Expanded to Scandinavian markets" },
                  { year: "2023", event: "Oil & Gas sector entry — North Sea operations" },
                  { year: "2024", event: "15+ countries, 500+ projects completed" },
                  { year: "2025", event: "Next-gen autonomous platform launch" },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-4 p-4 rounded-xl glass">
                    <span className="text-[#34C7FF] font-bold font-[family-name:var(--font-space)] shrink-0">{item.year}</span>
                    <span className="text-white/70">{item.event}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Values</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">What Drives Us</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Safety First", desc: "Every decision starts with worker safety. Our drones eliminate human exposure to height and hazardous environments." },
              { title: "Precision Engineering", desc: "Centimeter-level accuracy, patented cleaning systems, and continuous R&D investment in autonomous technology." },
              { title: "Sustainability", desc: "100% chemical-free cleaning using pure water technology. Zero environmental impact, maximum cleaning performance." },
            ].map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl border border-white/5 bg-[#111] h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#34C7FF]/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#34C7FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
