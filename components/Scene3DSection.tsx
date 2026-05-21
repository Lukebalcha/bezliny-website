"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Waypoint network — connected dots showing drone route planning
function WaypointNetwork() {
  const group = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const n = Array.from({ length: 20 }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6 - 2,
    ] as [number, number, number]);

    const e: [number, number][] = [];
    for (let i = 0; i < n.length; i++) {
      const closest = n
        .map((_, j) => ({ j, dist: new THREE.Vector3(...n[i]).distanceTo(new THREE.Vector3(...n[j])) }))
        .filter(x => x.j !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2);
      closest.forEach(c => e.push([i, c.j]));
    }
    return { nodes: n, edges: e };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos} scale={0.04}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.6} />
        </mesh>
      ))}
      {edges.map(([a, b], i) => (
        <line key={`e-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...nodes[a], ...nodes[b]]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#10b981" transparent opacity={0.08} />
        </line>
      ))}
    </group>
  );
}

// Data stream — rising particles like telemetry data
function TelemetryStream() {
  const count = 150;
  const ref = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array>(new Float32Array(count));

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      velocities.current[i] = Math.random() * 0.008 + 0.003;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += velocities.current[i];
      if (posAttr.array[i * 3 + 1] > 5) posAttr.array[i * 3 + 1] = -5;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#10b981"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3DSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <WaypointNetwork />
        <TelemetryStream />
      </Canvas>
    </div>
  );
}
