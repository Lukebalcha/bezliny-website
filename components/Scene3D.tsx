"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
  const count = 800;
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particles.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingOrb({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#10b981"
          transparent
          opacity={0.12}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function CentralShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={mesh} scale={2.2}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          wireframe
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
        <CentralShape />
        <FloatingOrb position={[-3, 1.5, -2]} scale={0.8} speed={0.7} />
        <FloatingOrb position={[3.5, -1, -3]} scale={0.6} speed={0.9} />
        <FloatingOrb position={[1, 2.5, -4]} scale={0.5} speed={1.1} />
      </Canvas>
    </div>
  );
}
