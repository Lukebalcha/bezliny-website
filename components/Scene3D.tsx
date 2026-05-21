"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Mouse tracking for interactive camera
function MouseCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.02;
    target.current.y += (mouse.current.y - target.current.y) * 0.02;
    camera.position.x = target.current.x * 0.8;
    camera.position.y = -target.current.y * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// The main centerpiece — a massive morphing metallic sphere with inner glow
function CinematicOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    meshRef.current.rotation.z = Math.cos(t * 0.03) * 0.1;

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.12;
      innerRef.current.rotation.x = Math.cos(t * 0.07) * 0.3;
    }
  });

  return (
    <group>
      {/* Outer distorted shell — translucent metallic */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh ref={meshRef} scale={2.8}>
          <icosahedronGeometry args={[1, 64]} />
          <MeshDistortMaterial
            color="#c0c0c0"
            metalness={0.95}
            roughness={0.08}
            distort={0.35}
            speed={1.2}
            transparent
            opacity={0.7}
            envMapIntensity={2.5}
          />
        </mesh>
      </Float>

      {/* Inner glowing core — emissive green energy */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.2}>
        <mesh ref={innerRef} scale={1.4}>
          <icosahedronGeometry args={[1, 32]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={2.5}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Point light inside for volumetric glow */}
      <pointLight position={[0, 0, 0]} color="#10b981" intensity={8} distance={6} decay={2} />
    </group>
  );
}

// Orbiting rings — like Saturn rings or tech halos
function OrbitalRing({ radius, tilt, speed, thickness }: { radius: number; tilt: number; speed: number; thickness: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = tilt;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color="#e2e8f0"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.3}
        emissive="#10b981"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Floating micro particles with depth
function CosmicParticles() {
  const count = 1500;
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 12;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      s[i] = Math.random() * 1.5 + 0.5;
    }
    return [pos, s];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating geometric debris
function FloatingDebris() {
  const group = useRef<THREE.Group>(null);

  const debris = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 3,
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 0.5 + 0.2,
      type: Math.floor(Math.random() * 3),
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const d = debris[i];
      child.rotation.x = state.clock.elapsedTime * d.speed;
      child.rotation.y = state.clock.elapsedTime * d.speed * 0.7;
      child.position.y = d.position[1] + Math.sin(state.clock.elapsedTime * d.speed + i) * 0.5;
    });
  });

  return (
    <group ref={group}>
      {debris.map((d, i) => (
        <mesh key={i} position={d.position} scale={d.scale}>
          {d.type === 0 && <octahedronGeometry args={[1, 0]} />}
          {d.type === 1 && <tetrahedronGeometry args={[1, 0]} />}
          {d.type === 2 && <boxGeometry args={[1, 1, 1]} />}
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.9}
            roughness={0.2}
            emissive="#10b981"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#10b981" />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} penumbra={1} color="#e2e8f0" />

        {/* Environment for realistic reflections */}
        <Environment preset="night" />

        {/* Main 3D elements */}
        <MouseCamera />
        <CinematicOrb />
        <OrbitalRing radius={4.2} tilt={1.2} speed={0.1} thickness={0.015} />
        <OrbitalRing radius={5.0} tilt={0.8} speed={-0.07} thickness={0.01} />
        <OrbitalRing radius={3.5} tilt={1.8} speed={0.15} thickness={0.012} />
        <CosmicParticles />
        <FloatingDebris />

        {/* Post-processing for cinematic look */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <ChromaticAberration
            offset={new THREE.Vector2(0.0008, 0.0008)}
            radialModulation={false}
            modulationOffset={0}
          />
          <Vignette offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
