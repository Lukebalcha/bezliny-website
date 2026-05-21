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

    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    // Play immediately
    play();

    // Retry on any user interaction (iOS requirement)
    const onInteract = () => play();
    document.addEventListener("touchstart", onInteract, { passive: true });
    document.addEventListener("click", onInteract, { passive: true });
    document.addEventListener("scroll", onInteract, { passive: true });

    // Retry when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) play(); },
      { threshold: 0.1 }
    );
    observer.observe(video);

    // Retry on visibility change
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Retry periodically for first 5 seconds (catches delayed loading)
    const retries = [500, 1000, 2000, 3000, 5000].map(ms =>
      setTimeout(play, ms)
    );

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
      observer.disconnect();
      retries.forEach(clearTimeout);
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
