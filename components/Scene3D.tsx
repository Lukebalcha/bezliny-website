"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Drone flight path — curved trajectory lines showing drone routes
function FlightPaths() {
  const group = useRef<THREE.Group>(null);

  const curves = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const points = [];
      const offset = (i - 2) * 2.5;
      for (let j = 0; j <= 50; j++) {
        const t = j / 50;
        points.push(new THREE.Vector3(
          (t - 0.5) * 16,
          Math.sin(t * Math.PI * 2 + i) * 1.5 + offset * 0.3,
          Math.cos(t * Math.PI + i * 0.5) * 2 - 3
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      return curve.getPoints(80);
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
  });

  return (
    <group ref={group}>
      {curves.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#a0aec0"
            transparent
            opacity={0.12 + i * 0.03}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  );
}

// Scanning grid — represents drone surveying a surface
function ScanGrid() {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x = -0.6;
    ref.current.position.y = -1.5;
    ref.current.position.z = -2;
  });

  const lines = useMemo(() => {
    const result: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < 15; i++) {
      const y = (i / 14 - 0.5) * 6;
      result.push([new THREE.Vector3(-5, y, 0), new THREE.Vector3(5, y, 0)]);
    }
    for (let i = 0; i < 15; i++) {
      const x = (i / 14 - 0.5) * 10;
      result.push([new THREE.Vector3(x, -3, 0), new THREE.Vector3(x, 3, 0)]);
    }
    return result;
  }, []);

  return (
    <group ref={ref}>
      {lines.map((pair, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...pair[0].toArray(), ...pair[1].toArray()]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={i < 15 ? "#a0aec0" : "#e2e8f0"}
            transparent
            opacity={0.04}
          />
        </line>
      ))}
    </group>
  );
}

// Drone propeller halos — spinning rings representing drone rotors
function PropellerHalo({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 3;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, 0.008, 8, 32]} />
      <meshBasicMaterial color="#a0aec0" transparent opacity={0.25} />
    </mesh>
  );
}

// Central drone silhouette with 4 propeller halos and water spray
function DroneShape() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    group.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={group} position={[0, 0.5, 0]}>
        {/* Drone body */}
        <mesh scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        
        {/* Arms */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[2.2, 0.02, 0.02]} />
          <meshBasicMaterial color="#e2e8f0" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[2.2, 0.02, 0.02]} />
          <meshBasicMaterial color="#e2e8f0" transparent opacity={0.2} />
        </mesh>
        
        {/* 4 propeller halos */}
        <PropellerHalo position={[0.8, 0.8, 0]} size={0.35} />
        <PropellerHalo position={[-0.8, 0.8, 0]} size={0.35} />
        <PropellerHalo position={[0.8, -0.8, 0]} size={0.35} />
        <PropellerHalo position={[-0.8, -0.8, 0]} size={0.35} />
        
        {/* Water spray cone below */}
        <mesh position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.4, 1.2, 8, 1, true]} />
          <meshBasicMaterial color="#a0aec0" transparent opacity={0.06} wireframe />
        </mesh>
        
        {/* Glow */}
        <pointLight color="#a0aec0" intensity={2} distance={4} decay={2} />
      </group>
    </Float>
  );
}

// Subtle floating particles — like water mist
function MistParticles() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) return null;
  // No 3D on mobile — video only, keeps it fast and clean
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <DroneShape />
        <FlightPaths />
        <ScanGrid />
        <MistParticles />
      </Canvas>
    </div>
  );
}
