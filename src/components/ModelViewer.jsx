"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

function CapsuleModel({ onLoaded }) {
  const { scene } = useGLTF("/models/HealPointMed.glb");
  const ref = useRef();

  // Smooth floating + stable rotation
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.015;
    ref.current.rotation.x = Math.PI / 8;
    ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
  });

  return <primitive ref={ref} object={scene} scale={1.8} position={[0, -0.2, 0]} onUpdate={onLoaded} />;
}

export default function ModelViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full backdrop-blur-sm flex items-center justify-center overflow-hidden bg-black/10">
        {/* Placeholder until model loads */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-[#8b5e3c] text-xl">
            Loading...
          </div>
        )}

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: "transparent" }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <CapsuleModel onLoaded={() => setLoaded(true)} />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>

        {/* Subtle Glow Ring */}
        <div className="absolute inset-0 rounded-full ring-2 ring-[#decbb7]/60 blur-sm pointer-events-none"></div>
      </div>
    </div>
  );
}
