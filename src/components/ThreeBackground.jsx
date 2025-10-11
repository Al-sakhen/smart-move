'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Points, PointMaterial, Box, Sphere, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Seeded random generator for consistent results
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }
  
  random() {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
}

// Futuristic floating geometric shapes with holographic effects
function FloatingShape({ position, shape, delay = 0 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2 + delay) * 0.4;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1 + delay) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.8;
      
      // Holographic glow effect
      const glowIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 3 + delay) * 0.3;
      if (meshRef.current.material) {
        meshRef.current.material.emissiveIntensity = glowIntensity;
      }
      
      // Advanced hover scaling with smooth transitions
      const targetScale = hovered ? 1.4 : 1.0;
      const currentScale = meshRef.current.scale.x;
      meshRef.current.scale.setScalar(currentScale + (targetScale - currentScale) * 0.15);
    }
  });

  const ShapeComponent = shape === 'box' ? Box : shape === 'sphere' ? Sphere : Octahedron;
  
  return (
    <ShapeComponent
      ref={meshRef}
      position={position}
      args={shape === 'box' ? [1.5, 1.5, 1.5] : [1.0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshPhysicalMaterial
        color={hovered ? "#00ff88" : "#0088ff"}
        emissive={hovered ? "#004455" : "#002244"}
        emissiveIntensity={0.5}
        transparent
        opacity={hovered ? 0.9 : 0.7}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transmission={0.3}
        ior={2.4}
        thickness={1.0}
        envMapIntensity={2}
        wireframe={false}
      />
      {/* Holographic outline */}
      <mesh>
        <edgesGeometry args={[shape === 'box' ? new THREE.BoxGeometry(1.5, 1.5, 1.5) : shape === 'sphere' ? new THREE.SphereGeometry(1.0) : new THREE.OctahedronGeometry(1.0)]} />
        <lineBasicMaterial color={hovered ? "#00ff88" : "#0088ff"} transparent opacity={0.8} />
      </mesh>
    </ShapeComponent>
  );
}

// Futuristic holographic data streams
function DataStreams() {
  const streamRef = useRef();
  
  const streamData = useMemo(() => {
    const rng = new SeededRandom(456);
    const streams = [];
    
    for (let i = 0; i < 15; i++) {
      const points = [];
      const startX = (rng.random() - 0.5) * 20;
      const startY = (rng.random() - 0.5) * 15;
      const startZ = -10;
      
      for (let j = 0; j < 50; j++) {
        points.push(new THREE.Vector3(
          startX + Math.sin(j * 0.1) * 2,
          startY + j * 0.3,
          startZ + j * 0.2
        ));
      }
      streams.push(points);
    }
    return streams;
  }, []);

  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.children.forEach((stream, index) => {
        if (stream.material) {
          stream.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
        }
      });
    }
  });

  return (
    <group ref={streamRef}>
      {streamData.map((points, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={index % 2 === 0 ? "#00ff88" : "#0088ff"}
            transparent
            opacity={0.4}
          />
        </line>
      ))}
    </group>
  );
}

// Holographic interface elements
function HolographicInterface() {
  const interfaceRef = useRef();
  
  useFrame((state) => {
    if (interfaceRef.current) {
      interfaceRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      interfaceRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={interfaceRef} position={[0, 0, -8]}>
      {/* Rotating rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.05, 8, 32]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 3]}>
        <torusGeometry args={[2.5, 0.03, 8, 32]} />
        <meshBasicMaterial color="#0088ff" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 1.5]}>
        <torusGeometry args={[2, 0.02, 8, 32]} />
        <meshBasicMaterial color="#ff0088" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Enhanced particle system
function EnhancedParticles() {
  const ref = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const rng = new SeededRandom(42);
    const positions = new Float32Array(2000 * 3); // Reduced count for better performance
    const colors = new Float32Array(2000 * 3);
    const sizes = new Float32Array(2000);
    
    for (let i = 0; i < 2000; i++) {
      // Create more diverse particle distribution
      const radius = rng.random() * 15 + 5;
      const theta = 2 * Math.PI * rng.random();
      const phi = Math.acos(2 * rng.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 5; // Push back in Z
      
      // Vary particle sizes for depth
      sizes[i] = rng.random() * 0.02 + 0.005;
      
      // Color gradient based on distance
      const distance = Math.sqrt(
        positions[i * 3] ** 2 + 
        positions[i * 3 + 1] ** 2 + 
        positions[i * 3 + 2] ** 2
      );
      const colorIntensity = Math.max(0.3, 1 - distance / 20);
      
      colors[i * 3] = 0.55 * colorIntensity; // Purple-ish
      colors[i * 3 + 1] = 0.36 * colorIntensity;
      colors[i * 3 + 2] = 0.96 * colorIntensity;
    }
    return [positions, colors, sizes];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          alphaTest={0.1}
        />
      </Points>
    </group>
  );
}

const ThreeBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating shapes representing different services
  const floatingShapes = useMemo(() => [
    { position: [-8, 3, -5], shape: 'box', delay: 0 }, // Web development
    { position: [7, -2, -3], shape: 'sphere', delay: 1 }, // Mobile development
    { position: [-5, -4, -6], shape: 'octahedron', delay: 2 }, // Marketing
    { position: [6, 4, -4], shape: 'box', delay: 3 }, // Business solutions
    { position: [0, -6, -7], shape: 'sphere', delay: 4 }, // Social media
    { position: [-10, -1, -8], shape: 'octahedron', delay: 5 }, // Design
    { position: [9, 1, -6], shape: 'sphere', delay: 6 }, // Consulting
    { position: [3, 6, -5], shape: 'box', delay: 7 }, // Analytics
  ], []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Futuristic dark gradient background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 pointer-events-none bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" 
      />
      
      {/* Animated circuit pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-1000 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#00ff88 1px, transparent 1px),
            linear-gradient(90deg, #0088ff 1px, transparent 1px),
            linear-gradient(45deg, #ff0088 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px',
          animation: 'circuitMove 25s linear infinite'
        }}
      />
      
      {/* Holographic scan lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 136, 0.03) 2px,
            rgba(0, 255, 136, 0.03) 4px
          )`,
          animation: 'scanLines 3s linear infinite'
        }}
      />
      
      {/* Three.js Canvas */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas 
            camera={{ position: [0, 0, 10], fov: 60 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            style={{ pointerEvents: 'none' }}
          >
            {/* Futuristic lighting system */}
            <ambientLight intensity={0.2} color="#001122" />
            <directionalLight 
              position={[15, 15, 10]} 
              intensity={1.2} 
              color="#0088ff"
              castShadow 
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-15, -15, -10]} intensity={0.8} color="#00ff88" />
            <pointLight position={[15, -15, 10]} intensity={0.6} color="#ff0088" />
            <spotLight 
              position={[0, 20, 0]} 
              angle={0.4} 
              penumbra={1} 
              intensity={1.0} 
              color="#0088ff"
              castShadow 
            />
            <spotLight 
              position={[0, -20, 5]} 
              angle={0.3} 
              penumbra={0.8} 
              intensity={0.7} 
              color="#00ff88"
            />
            
            {/* Holographic fog effect */}
            <fog attach="fog" args={['#000811', 5, 30]} />
            
            {/* Futuristic particle system */}
            <EnhancedParticles />
            
            {/* Data streams */}
            <DataStreams />
            
            {/* Holographic interface */}
            <HolographicInterface />
            
            {/* Floating geometric shapes */}
            {floatingShapes.map((shape, index) => (
              <FloatingShape
                key={index}
                position={shape.position}
                shape={shape.shape}
                delay={shape.delay}
              />
            ))}
          </Canvas>
        </div>
      )}
      
      {/* Futuristic overlay for better content readability */}
      {mounted && (
        <div 
          className="absolute inset-0 transition-all duration-700 pointer-events-none bg-gradient-to-br from-slate-900/60 via-transparent to-slate-900/40"
        />
      )}
      
      {/* CSS for futuristic animations */}
      <style jsx>{`
        @keyframes circuitMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes scanLines {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default ThreeBackground;