"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Subtle wireframe grid — the crossed lines look from mobile loader
function WireGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.015;
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.055 + Math.sin(t * 0.3) * 0.015;
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[20, 20, 16, 16]} />
      <meshBasicMaterial color="#c8cdd3" wireframe transparent opacity={0.055} />
    </mesh>
  );
}

// Slow floating particles — diffused collected look
function DriftParticles() {
  const count = 50;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.012;
    const s = 1 + Math.sin(t * 0.25) * 0.04;
    ref.current.scale.setScalar(s);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.18}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Thin orbital arc
function Arc() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <torusGeometry args={[4, 0.004, 8, 80, Math.PI * 1.2]} />
      <meshBasicMaterial color="#c8cdd3" transparent opacity={0.06} />
    </mesh>
  );
}

export default function Scene3DInline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[0] pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <WireGrid />
        <DriftParticles />
        <Arc />
      </Canvas>
    </div>
  );
}
