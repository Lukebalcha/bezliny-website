"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Slow drifting particles — diffused then collected look
function FloatingParticles() {
  const count = 80;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = Math.sin(t * 0.008) * 0.03;
    // Gentle breathing scale
    const s = 1 + Math.sin(t * 0.3) * 0.05;
    ref.current.scale.setScalar(s);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Subtle wireframe grid — the crossed lines effect
function SubtleGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = -Math.PI / 2.3 + Math.sin(t * 0.1) * 0.02;
    ref.current.rotation.z = t * 0.02;
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.06 + Math.sin(t * 0.4) * 0.015;
  });

  return (
    <mesh ref={ref} position={[0, -1.5, -2]}>
      <planeGeometry args={[24, 24, 18, 18]} />
      <meshBasicMaterial color="#c8cdd3" wireframe transparent opacity={0.06} />
    </mesh>
  );
}

// Slowly orbiting thin rings — elegant motion
function OrbitalRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.03) * 0.1;
  });

  return (
    <group ref={group} position={[0, 0, -3]}>
      {[2.5, 3.5, 4.5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / (3 + i * 0.5), i * 0.3, 0]}>
          <torusGeometry args={[radius, 0.005, 8, 64]} />
          <meshBasicMaterial color="#c8cdd3" transparent opacity={0.08 - i * 0.015} />
        </mesh>
      ))}
    </group>
  );
}

// Connection lines — subtle data flow look
function DataLines() {
  const group = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      const r1 = 1.5;
      const r2 = 5;
      return new Float32Array([
        Math.cos(angle) * r1, (Math.random() - 0.5) * 2, Math.sin(angle) * r1,
        Math.cos(angle) * r2, (Math.random() - 0.5) * 3, Math.sin(angle) * r2,
      ]);
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={group} position={[0, 0, -2]}>
      {lines.map((linePos, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePos, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#c8cdd3" transparent opacity={0.05} />
        </line>
      ))}
    </group>
  );
}

export default function Scene3DBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <FloatingParticles />
        <SubtleGrid />
        <OrbitalRings />
        <DataLines />
      </Canvas>
    </div>
  );
}
