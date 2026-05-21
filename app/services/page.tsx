import { FadeUp } from "@/components/Animations";
import ServiceCards from "@/components/ServiceCards";
import { Background3D } from "@/components/Dynamic3D";

export default function ServicesPage() {
  return (
    <>
      <Background3D />
      <section className="pt-36 pb-24 relative z-[1]">
        <div className="absolute top-20 right-8 text-[14rem] font-bold text-white/[0.015] font-[family-name:var(--font-space)] select-none pointer-events-none leading-none">S</div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">What We Do</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">Our Services</h1>
            <p className="mt-6 text-xl text-white/75 max-w-2xl">
              Comprehensive drone-based solutions for the most demanding industrial environments. 
              Safe, efficient, and environmentally responsible.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-36 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServiceCards />
        </div>
      </section>

      {/* Process */}
      <section className="py-36 border-t border-white/[0.04] relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">Process</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">How We Work</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Site survey and detailed project planning" },
              { step: "02", title: "Preparation", desc: "Risk analysis and equipment configuration" },
              { step: "03", title: "Execution", desc: "Autonomous drone operation with live monitoring" },
              { step: "04", title: "Reporting", desc: "Full documentation with inspection data" },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.08}>
                <div className="relative p-8 rounded-2xl border border-white/[0.04] bg-[#111113]/95 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-[#c8cdd3]/25 font-[family-name:var(--font-space)]">{item.step}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white/90">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
