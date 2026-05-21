"use client";

import { useRef, useEffect } from "react";

interface AutoVideoProps {
  src: string;
  className?: string;
}

export default function AutoVideo({ src, className = "" }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Force play
    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    play();

    // iOS requires user gesture — attach listeners
    const onInteract = () => {
      play();
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("scroll", onInteract);
    };
    document.addEventListener("touchstart", onInteract, { once: true, passive: true });
    document.addEventListener("scroll", onInteract, { once: true, passive: true });

    // Also retry on visibility change (tab switch)
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      className={className}
      webkit-playsinline="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
