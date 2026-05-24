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

    // Force attributes
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;

    const play = () => {
      video.muted = true;
      const p = video.play();
      if (p) p.catch(() => {});
    };

    play();

    const onLoaded = () => play();
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("canplay", onLoaded);

    // Retry on any user interaction
    const onInteract = () => {
      play();
      if (!video.paused) {
        document.removeEventListener("touchstart", onInteract);
        document.removeEventListener("click", onInteract);
        document.removeEventListener("scroll", onInteract);
      }
    };
    document.addEventListener("touchstart", onInteract, { passive: true });
    document.addEventListener("click", onInteract, { passive: true });
    document.addEventListener("scroll", onInteract, { passive: true });

    // Retry on visibility change
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Retry periodically
    const retries = [100, 300, 500, 1000, 2000, 3000, 5000, 8000].map(ms =>
      setTimeout(play, ms)
    );

    // Resume if paused externally
    const onPause = () => setTimeout(play, 100);
    video.addEventListener("pause", onPause);

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      video.removeEventListener("pause", onPause);
      retries.forEach(clearTimeout);
    };
  }, []);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="absolute inset-0">
      {/* Desktop hero */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="hidden md:block w-full h-full object-cover object-center"
        // @ts-ignore
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
      >
        <source src="/assets/drone-hero.mp4" type="video/mp4" />
      </video>
      {/* Mobile hero — portrait drone video, not zoomed in */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="block md:hidden w-full h-full object-cover object-center"
        // @ts-ignore
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
      >
        <source src="/assets/drone-hero-mobile.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
