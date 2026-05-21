"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// DNA-helix style double helix with glowing nodes
function DNAHelix() {
  const group = useRef<THREE.Group>(null);
  const nodeCount = 30;

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount * 2 }, (_, i) => {
      const strand = i < nodeCount ? 0 : 1;
      const idx = i % nodeCount;
      const angle = (idx / nodeCount) * Math.PI * 4 + (strand * Math.PI);
      const y = (idx / nodeCount) * 8 - 4;
      const x = Math.cos(angle) * 1.5;
      const z = Math.sin(angle) * 1.5;
      return { position: [x, y, z] as [number, number, number], strand };
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={group} position={[3, 0, -2]}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position} scale={0.06}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color={node.strand === 0 ? "#10b981" : "#e2e8f0"}
            emissive={node.strand === 0 ? "#10b981" : "#94a3b8"}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating holographic grid plane
function HoloGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 2.5;
    ref.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 40, 40]} />
      <meshBasicMaterial
        color="#10b981"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

// Energy stream particles
function EnergyStream() {
  const count = 600;
  const ref = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array>(new Float32Array(count));

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.current[i] = Math.random() * 0.01 + 0.005;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += velocities.current[i];
      if (posAttr.array[i * 3 + 1] > 6) posAttr.array[i * 3 + 1] = -6;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#10b981"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating metallic torus knot
function TechKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} position={[-3, 0.5, -1]} scale={0.6}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#c0c0c0"
          metalness={0.95}
          roughness={0.05}
          distort={0.1}
          speed={0.8}
          transparent
          opacity={0.4}
          emissive="#10b981"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3DSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[3, 5, 5]} intensity={0.5} color="#e2e8f0" />
        <pointLight position={[-3, 2, 3]} intensity={0.5} color="#10b981" />
        <Environment preset="night" />

        <DNAHelix />
        <TechKnot />
        <HoloGrid />
        <EnergyStream />

        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.3} luminanceSmoothing={0.8} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
