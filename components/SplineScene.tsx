"use client";

import { useState, useEffect } from "react";

// Spline 3D scene embedded via iframe for maximum compatibility
// Using a dark, futuristic geometric scene
export default function SplineScene({ 
  scene = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
  className = "" 
}: { 
  scene?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#10b981]/30 border-t-[#10b981] rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={scene}
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease",
        }}
        onLoad={() => setLoaded(true)}
        allow="autoplay"
        title="3D Scene"
      />
    </div>
  );
}
