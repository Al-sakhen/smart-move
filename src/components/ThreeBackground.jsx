'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const orbsRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    orbsRef.current.rotation.x = Math.cos(t / 4) * 0.1;
    orbsRef.current.rotation.y = Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={orbsRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 3,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            -2
          ]}
        >
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshBasicMaterial
            color={`hsl(${(i * 45) % 360}, 70%, 60%)`}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;