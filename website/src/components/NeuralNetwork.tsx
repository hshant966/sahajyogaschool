"use client";
 
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
 
interface ParticlesProps {
  count?: number;
}
 
function Particles({ count = 150 }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
 
  // Generate random positions in sphere shape
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const radius = 5;
      // eslint-disable-next-line react-hooks/purity
      const phi = Math.acos(2 * Math.random() - 1);
      // eslint-disable-next-line react-hooks/purity
      const theta = Math.random() * Math.PI * 2;
 
      arr[i] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);
 
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005;
      ref.current.rotation.y += 0.0008;
    }
  });
 
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#52B788"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#C9A84C" />
      <Particles count={150} />
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        background: "#FAFAF7",
        width: "100%",
        height: "100%",
      }}
    >
      <Scene />
    </Canvas>
  );
}
