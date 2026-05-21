import ContactForm from "@/components/ContactForm";
import { DroneTransition } from "@/components/ScrollTransitions";
import { FormingSection, FormingElement } from "@/components/CinematicReveal";

export default function ContactPage() {
  return (
    <>
      <FormingSection className="pt-32 pb-20 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FormingElement from="left">
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">Get In Touch</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">Contact</h1>
            <p className="mt-6 text-xl text-white/85 max-w-2xl">
              Ready to transform your maintenance operations? Let&apos;s discuss how our drone technology can work for you.
            </p>
          </FormingElement>
        </div>
      </FormingSection>

      <DroneTransition direction="right" />

      <FormingSection className="pb-32 relative z-[1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <FormingElement from="left" delay={0.1}>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">Headquarters</h3>
                  <div className="space-y-3 text-white/85">
                    <p>Warsaw, Poland</p>
                    <p>European Union</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <a href="mailto:cooperation@gmail.com" className="block text-white/85 hover:text-white transition-colors">
                      cooperation@gmail.com
                    </a>
                    <a href="tel:+48579366868" className="block text-white/85 hover:text-white transition-colors">
                      +48 579 366 868
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-lg font-semibold mb-4">Operations</h3>
                  <p className="text-white/85">Global — 15+ Countries</p>
                  <p className="text-white/85 mt-1">Available 24/7 for emergency deployments</p>
                </div>
              </div>
            </FormingElement>

            {/* Form */}
            <FormingElement from="right" delay={0.2}>
              <ContactForm />
            </FormingElement>
          </div>
        </div>
      </FormingSection>
    </>
  );
}
