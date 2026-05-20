import { FadeUp } from "@/components/Animations";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] text-[#34C7FF]">Our Work</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">Gallery</h1>
            <p className="mt-6 text-xl text-white/50 max-w-2xl">
              See our drone systems in action — cleaning, inspecting, and maintaining critical infrastructure worldwide.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <FadeUp key={item} delay={item * 0.1}>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src="/assets/drone-hero.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Operation #{item}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
