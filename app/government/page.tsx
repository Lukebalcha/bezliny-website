import { FadeUp, SlideIn } from "@/components/Animations";
import Link from "next/link";

export default function GovernmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/5 to-transparent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] text-[#10b981]">Public Sector</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
              Government &<br />Public Sector
            </h1>
            <p className="mt-6 text-xl text-white/50 max-w-3xl">
              Trusted by municipalities, government agencies, and public institutions to maintain 
              critical infrastructure safely, efficiently, and at reduced cost.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Video */}
      <section className="relative h-[40vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/drone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <FadeUp>
            <p className="text-center text-2xl md:text-3xl font-bold font-[family-name:var(--font-space)] max-w-2xl px-6">
              Serving Public Infrastructure with <span className="text-[#10b981]">Autonomous Precision</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Government */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#10b981]">Why Bezliny</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] leading-tight">
                  Reducing Costs While Protecting Public Assets
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed text-lg">
                  Government buildings, bridges, monuments, and public infrastructure require regular 
                  maintenance. Traditional methods involve scaffolding, road closures, and significant 
                  budgets. Our drone systems eliminate these barriers — delivering faster results at 
                  a fraction of the cost with zero public disruption.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  We work with municipal authorities, national agencies, and public-private partnerships 
                  across Europe to maintain and inspect critical assets safely.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "60%", label: "Lower costs vs scaffolding" },
                  { value: "Zero", label: "Road closures needed" },
                  { value: "3x", label: "Faster project delivery" },
                  { value: "100%", label: "Public safety maintained" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl glass text-center">
                    <div className="text-2xl font-bold text-[#10b981] font-[family-name:var(--font-space)]">{stat.value}</div>
                    <div className="text-sm text-white/50 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#10b981]">Sectors</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
                Public Sector Applications
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Government Buildings",
                desc: "Ministries, courts, parliament buildings, embassies — facade cleaning and inspection without disruption to operations.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v4m4-4v4m4-4v4" /></svg>,
              },
              {
                title: "Bridges & Highways",
                desc: "Structural inspection and cleaning of bridges, overpasses, and highway infrastructure — no lane closures required.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 6v6m0-6l2-2m14 2v6m0-6l-2-2M4 12h16M4 12v6m16-6v6M8 12v6m4-6v6m4-6v6M4 18h16" /></svg>,
              },
              {
                title: "Public Transport Hubs",
                desc: "Airports, train stations, and bus terminals — maintaining glass facades and rooftops at scale.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17l4 4 4-4m-4-5v9M3 4h18" /></svg>,
              },
              {
                title: "Monuments & Heritage",
                desc: "Delicate cleaning of historical monuments, churches, and protected structures with our chemical-free system.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>,
              },
              {
                title: "Schools & Hospitals",
                desc: "Safe exterior maintenance during operating hours — zero noise, zero chemical exposure to occupants.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>,
              },
              {
                title: "Military & Defence",
                desc: "Inspection and maintenance of military installations, hangars, and restricted-access facilities.",
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
              },
            ].map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-[#10b981]/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-6 group-hover:bg-[#10b981]/20 transition-colors">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#10b981] transition-colors">{sector.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{sector.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#10b981]">Compliance</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-space)] leading-tight">
                  Meeting Government Standards
                </h2>
                <p className="mt-6 text-white/60 leading-relaxed">
                  We understand the strict requirements of public procurement. Our operations meet all 
                  necessary regulatory frameworks and we&apos;re equipped to handle government tender processes.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-4">
                {[
                  "EU Public Procurement Directive compliant",
                  "Full HSE documentation and risk assessments",
                  "GDPR compliant data handling",
                  "Insured for government contract work",
                  "Certified drone operators (EASA regulations)",
                  "Environmental impact documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 rounded-xl glass">
                    <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
              Partner with Bezliny for <span className="text-[#10b981]">Public Sector</span> Projects
            </h2>
            <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
              Contact our government relations team to discuss procurement, tenders, or pilot programs.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="px-10 py-4 bg-[#10b981] text-black font-semibold rounded-full hover:bg-[#5dd6ff] transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,199,255,0.3)] text-lg">
                Contact Government Team
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
