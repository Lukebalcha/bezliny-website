"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLang } from "@/lib/LangContext";

const videosEn = [
  { src: "/assets/drone-hero.mp4", title: "Façade Cleaning", desc: "High-rise glass exterior" },
  { src: "/assets/videos/drone-rooftop.mp4", title: "Rooftop Operations", desc: "Elevated surface maintenance" },
  { src: "/assets/videos/drone-multifunction.mp4", title: "Multi-Function System", desc: "Versatile cleaning modes" },
  { src: "/assets/videos/drone-dual-nozzle.mp4", title: "Dual Nozzle", desc: "Precision water delivery" },
  { src: "/assets/videos/drone-tethered.mp4", title: "Tethered Flight", desc: "Unlimited operation time" },
  { src: "/assets/videos/drone-triple-nozzle.mp4", title: "Triple Nozzle", desc: "Maximum coverage system" },
  { src: "/assets/videos/drone-closeup.mp4", title: "Close-Up View", desc: "Sensor-guided precision" },
  { src: "/assets/videos/drone-showcase.mp4", title: "Full Showcase", desc: "Complete system demonstration" },
];

const videosPl = [
  { src: "/assets/drone-hero.mp4", title: "Czyszczenie Fasad", desc: "Szklane elewacje wieżowców" },
  { src: "/assets/videos/drone-rooftop.mp4", title: "Operacje Dachowe", desc: "Konserwacja powierzchni wyniesionych" },
  { src: "/assets/videos/drone-multifunction.mp4", title: "System Wielofunkcyjny", desc: "Wszechstronne tryby czyszczenia" },
  { src: "/assets/videos/drone-dual-nozzle.mp4", title: "Podwójna Dysza", desc: "Precyzyjne podawanie wody" },
  { src: "/assets/videos/drone-tethered.mp4", title: "Lot Zacumowany", desc: "Nieograniczony czas operacji" },
  { src: "/assets/videos/drone-triple-nozzle.mp4", title: "Potrójna Dysza", desc: "System maksymalnego zasięgu" },
  { src: "/assets/videos/drone-closeup.mp4", title: "Widok z Bliska", desc: "Precyzja kierowana czujnikami" },
  { src: "/assets/videos/drone-showcase.mp4", title: "Pełna Prezentacja", desc: "Kompletna demonstracja systemu" },
];

function GalleryItem({ video, index }: { video: typeof videosEn[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative group overflow-hidden rounded-lg border border-white/[0.04]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="aspect-video relative">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
        {/* Title bar */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="text-xs md:text-sm font-semibold text-white font-[family-name:var(--font-space)]">
            {video.title}
          </h3>
          <p className="text-[10px] md:text-[11px] text-white/50 mt-0.5">{video.desc}</p>
        </div>
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/20" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/20" />
      </div>
    </motion.div>
  );
}

export default function VideoGallery() {
  const { locale } = useLang();
  const videos = locale === "pl" ? videosPl : videosEn;
  const label = locale === "pl" ? "Nasze Operacje" : "Our Operations";
  const heading = locale === "pl" ? "Drony w Akcji" : "Drones in Action";
  const desc = locale === "pl"
    ? "Prawdziwe nagrania z naszych operacji czyszczenia dronami"
    : "Real footage from our autonomous drone cleaning operations";

  return (
    <section className="py-20 md:py-32 relative border-t border-white/[0.03]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0b0d] to-[#09090b]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/50 inline-block"
            initial={{ letterSpacing: "0.6em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {label}
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-white/50 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {desc}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {videos.map((video, i) => (
            <GalleryItem key={video.src} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
