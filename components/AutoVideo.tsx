"use client";

import { useRef, useEffect } from "react";

interface AutoVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function AutoVideo({ src, className = "", poster }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Force attributes via JS (some React attrs don't map correctly)
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");
    video.setAttribute("x5-playsinline", "");
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;

    const play = () => {
      video.muted = true;
      const p = video.play();
      if (p) p.catch(() => {});
    };

    // Attempt immediate play
    play();

    // Also try after loadeddata event
    const onLoaded = () => play();
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("canplay", onLoaded);

    // Retry on any user interaction (iOS requirement)
    const onInteract = () => {
      play();
      // After first successful play, remove interaction listeners
      if (!video.paused) {
        document.removeEventListener("touchstart", onInteract);
        document.removeEventListener("click", onInteract);
        document.removeEventListener("scroll", onInteract);
      }
    };
    document.addEventListener("touchstart", onInteract, { passive: true });
    document.addEventListener("click", onInteract, { passive: true });
    document.addEventListener("scroll", onInteract, { passive: true });

    // Retry when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) play(); },
      { threshold: 0.05 }
    );
    observer.observe(video);

    // Retry on visibility change
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Retry periodically for first 8 seconds
    const retries = [100, 300, 500, 1000, 2000, 3000, 5000, 8000].map(ms =>
      setTimeout(play, ms)
    );

    // If video gets paused externally (iOS can pause on scroll), resume it
    const onPause = () => {
      setTimeout(play, 100);
    };
    video.addEventListener("pause", onPause);

    return () => {
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", onVisible);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      video.removeEventListener("pause", onPause);
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
      poster={poster}
      // @ts-ignore - non-standard but needed for mobile browsers
      webkit-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="false"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
