"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GridParticles() {
  const count = 400;
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#10b981"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRing({ position, scale }: { position: [number, number, number]; scale: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function Scene3DSection() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <GridParticles />
        <FloatingRing position={[-2, 0, 0]} scale={1.2} />
        <FloatingRing position={[2.5, 1, -2]} scale={0.8} />
        <Float speed={1.5} rotationIntensity={0.2}>
          <mesh scale={1.5}>
            <dodecahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial
              color="#10b981"
              transparent
              opacity={0.05}
              wireframe
              distort={0.4}
              speed={2}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
