"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });
const Scene3DSection = dynamic(() => import("@/components/Scene3DSection"), { ssr: false });
const GradientMesh = dynamic(() => import("@/components/GradientMesh"), { ssr: false });

export function Hero3D() {
  return <Scene3D />;
}

export function Section3D() {
  return <Scene3DSection />;
}

export function MeshGradient() {
  return <GradientMesh />;
}
