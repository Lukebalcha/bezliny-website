import { FadeUp } from "@/components/Animations";
import ServiceCards from "@/components/ServiceCards";

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#34C7FF]/5 to-transparent opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">What We Do</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">Our Services</h1>
            <p className="mt-6 text-xl text-white/50 max-w-2xl">
              Comprehensive drone-based solutions for the most demanding industrial environments. 
              Safe, efficient, and environmentally responsible.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ServiceCards />
        </div>
      </section>

      {/* Process */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Process</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">How We Work</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Site survey and detailed project planning" },
              { step: "02", title: "Preparation", desc: "Risk analysis and equipment configuration" },
              { step: "03", title: "Execution", desc: "Autonomous drone operation with live monitoring" },
              { step: "04", title: "Reporting", desc: "Full documentation with inspection data" },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl glass text-center">
                  <div className="text-3xl font-bold text-[#34C7FF]/30 font-[family-name:var(--font-space)]">{item.step}</div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
