"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    play();

    // Retry on any user interaction
    const onInteract = () => play();
    document.addEventListener("touchstart", onInteract, { passive: true });
    document.addEventListener("click", onInteract, { passive: true });
    document.addEventListener("scroll", onInteract, { passive: true });

    // Retry on visibility change
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Retry periodically
    const retries = [500, 1000, 2000, 3000, 5000].map(ms =>
      setTimeout(play, ms)
    );

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
      retries.forEach(clearTimeout);
    };
  }, []);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="w-full h-full object-cover"
        webkit-playsinline="true"
      >
        <source src="/assets/drone-hero.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
