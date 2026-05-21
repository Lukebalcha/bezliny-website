"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Cinematic camera — orbits around the scene smoothly
function CinematicCamera() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Smooth orbital motion
    camera.position.x = Math.sin(t * 0.3) * 4;
    camera.position.y = Math.cos(t * 0.2) * 1.5 + 0.5;
    camera.position.z = Math.cos(t * 0.3) * 4 + 3;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Drone propeller — fast spinning ring
function Propeller({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 8;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, 0.012, 8, 32]} />
      <meshBasicMaterial color="#c8cdd3" transparent opacity={0.5} />
    </mesh>
  );
}

// The drone — flies in a dynamic path
function Drone() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Dynamic flight path — figure-8 motion
    group.current.position.x = Math.sin(t * 0.4) * 2;
    group.current.position.y = Math.sin(t * 0.6) * 0.8 + Math.cos(t * 0.3) * 0.4;
    group.current.position.z = Math.cos(t * 0.4) * 1.5;
    // Tilt with movement
    group.current.rotation.z = Math.sin(t * 0.4) * 0.15;
    group.current.rotation.x = Math.cos(t * 0.6) * 0.1;
    group.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={group}>
      {/* Drone body — larger, more visible */}
      <mesh scale={0.2}>
        <boxGeometry args={[1, 0.3, 1]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
      
      {/* Arms — X shape */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2.8, 0.04, 0.04]} />
        <meshBasicMaterial color="#e2e8f0" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[2.8, 0.04, 0.04]} />
        <meshBasicMaterial color="#e2e8f0" transparent opacity={0.5} />
      </mesh>
      
      {/* 4 propellers — spinning fast */}
      <Propeller position={[1, 1, 0]} size={0.4} />
      <Propeller position={[-1, 1, 0]} size={0.4} />
      <Propeller position={[1, -1, 0]} size={0.4} />
      <Propeller position={[-1, -1, 0]} size={0.4} />
      
      {/* Water spray below — cone */}
      <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.3, 1.5, 8, 1, true]} />
        <meshBasicMaterial color="#c8cdd3" transparent opacity={0.08} wireframe />
      </mesh>

      {/* Glow point */}
      <pointLight color="#ffffff" intensity={3} distance={5} decay={2} />
    </group>
  );
}

// Flight trail — follows the drone path with fading trail
function FlightTrail() {
  const ref = useRef<THREE.Points>(null);
  const count = 100;
  const positions = useRef(new Float32Array(count * 3));
  const head = useRef(0);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    
    // Add new point at drone position
    const idx = head.current % count;
    positions.current[idx * 3] = Math.sin(t * 0.4) * 2;
    positions.current[idx * 3 + 1] = Math.sin(t * 0.6) * 0.8 + Math.cos(t * 0.3) * 0.4;
    positions.current[idx * 3 + 2] = Math.cos(t * 0.4) * 1.5;
    head.current++;

    const geo = ref.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c8cdd3"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Scanning laser lines sweeping across
function ScanBeams() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const beams = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      return {
        start: [Math.cos(angle) * 0.5, 0, Math.sin(angle) * 0.5] as [number, number, number],
        end: [Math.cos(angle) * 5, -2, Math.sin(angle) * 5] as [number, number, number],
      };
    });
  }, []);

  return (
    <group ref={group} position={[0, 1, 0]}>
      {beams.map((beam, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...beam.start, ...beam.end]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#c8cdd3" transparent opacity={0.06} />
        </line>
      ))}
    </group>
  );
}

// Ambient floating particles
function Particles() {
  const count = 150;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Ground grid — holographic floor
function GroundGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = -2;
    ref.current.rotation.x = -Math.PI / 2;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[16, 16, 20, 20]} />
      <meshBasicMaterial color="#c8cdd3" wireframe transparent opacity={0.03} />
    </mesh>
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
        camera={{ position: [0, 1, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <CinematicCamera />
        <Drone />
        <FlightTrail />
        <ScanBeams />
        <Particles />
        <GroundGrid />
      </Canvas>
    </div>
  );
}
