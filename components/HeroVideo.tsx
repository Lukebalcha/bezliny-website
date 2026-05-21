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

  // Force autoplay on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const playVideo = () => {
      video.play().catch(() => {
        // If autoplay blocked, try muted play
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    // Play immediately
    playVideo();

    // Also play on user interaction (for iOS)
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("click", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
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
        style={{ WebkitMediaControls: "none" } as React.CSSProperties}
      >
        <source src="/assets/drone-hero.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
