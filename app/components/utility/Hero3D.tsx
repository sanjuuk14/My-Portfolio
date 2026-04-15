'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Billboard } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

type FloatingTextNodeProps = {
  text: string;
  position: [number, number, number]; // 3D position (x, y, z)
  scale?: number;
};

// Reusable component for the floating tech text
function FloatingTextNode({
  text,
  position,
  scale = 0.1,
}: FloatingTextNodeProps) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
        {/* Billboard forces the text to always face the user */}
        <Billboard>
          <Text
            fontSize={1}
            scale={scale}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
            // Adding a tiny dark outline makes it pop against the light background
            outlineWidth={0.02}
            outlineColor="#171717"
          >
            {text}
            {/* The emissive material gives it that cyber-glow */}
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </Text>
        </Billboard>
      </Float>
    </group>
  );
}

// The Orbiting Text Ecosystem
function TechEcosystem() {
  // const orbitRef = useRef();
  const orbitRef = useRef<THREE.Group | null>(null);
  // Slowly rotate the entire ecosystem of words around the core
  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * 0.2;
      orbitRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={orbitRef}>
      {/* Positioned spherically around the glowing core */}
      <FloatingTextNode text="REACT" position={[0.8, 0.3, 0.2]} />
      <FloatingTextNode text="NEXT.JS" position={[-0.7, -0.4, 0.3]} />
      <FloatingTextNode text="NODE.JS" position={[0.2, 0.8, -0.2]} />
      <FloatingTextNode text="MONGODB" position={[-0.4, 0.3, -0.7]} />
      <FloatingTextNode text="TAILWIND" position={[0.5, -0.6, 0.4]} />
      <FloatingTextNode text="JS / TS" position={[-0.6, 0.5, 0.4]} />
      <FloatingTextNode text="HTML / CSS" position={[0.1, -0.8, -0.5]} />
      <FloatingTextNode text="EXPRESS" position={[0.6, 0.1, -0.6]} />
    </group>
  );
}

// The Main Cybernetic Data Node
function CyberNode() {
  // const groupRef = useRef();
  // const innerRef = useRef();
  // const ringRef = useRef();
  const groupRef = useRef<THREE.Group | null>(null);
  const innerRef = useRef<THREE.Mesh | null>(null);
  const ringRef = useRef<THREE.Mesh | null>(null);
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.4;
      innerRef.current.rotation.z -= delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={1.4}>
        {/* Outer Wireframe Shell */}
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#171717"
            wireframe={true}
            transparent={true}
            opacity={0.15}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh ref={innerRef} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={2}
            wireframe={true}
            toneMapped={false}
          />
        </mesh>

        {/* Orbiting Tech Rings */}
        <mesh ref={ringRef} rotation-x={Math.PI / 2} scale={1.3}>
          <ringGeometry args={[1, 1.02, 64]} />
          <meshBasicMaterial
            color="#171717"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh rotation-y={Math.PI / 2} scale={1.1}>
          <ringGeometry args={[1, 1.02, 64]} />
          <meshBasicMaterial
            color="#10b981"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* The Text Ecosystem orbiting inside the wireframe */}
        <TechEcosystem />
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute top-0 right-0 w-full md:w-2/3 h-full  z-0 opacity-60 md:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1} />
        <CyberNode />
      </Canvas>
    </div>
  );
}
