'use client';

import { useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

// Generate random points in a 3D space
function generateRandomPoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random()); // Cube root for more even distribution
    
    points[i3] = r * Math.sin(phi) * Math.cos(theta);
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i3 + 2] = r * Math.cos(phi);
  }
  return points;
}

// Animated stars component
function Stars({ count = 5000, radius = 20 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const sphere = generateRandomPoints(count, radius);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 10) * 0.2;
      pointsRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 15) * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Animated color wave
function ColorWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time / 2) * 0.3 - 1;
      meshRef.current.rotation.x = time * 0.2;
      
      // Update material color
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      const hue = (time * 0.05) % 1;
      material.color.setHSL(hue, 0.8, 0.5);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, 0]} rotation={[Math.PI / 4, 0, 0]}>
      <planeGeometry args={[30, 30, 32, 32]} />
      <meshBasicMaterial color="#4a1d96" transparent opacity={0.15} wireframe />
    </mesh>
  );
}

// Main animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <Stars />
          <ColorWave />
          <ambientLight intensity={0.1} />
        </Suspense>
      </Canvas>
      
      {/* Color overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-purple-900/10 to-pink-900/20 animate-pulse" 
           style={{ animationDuration: '10s' }}></div>
      
      {/* Additional gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/70"></div>
    </div>
  );
};

export default AnimatedBackground; 