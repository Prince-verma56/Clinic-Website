"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";
import Image from "next/image";

function CapsuleModel({ onLoaded }) {
    const { scene } = useGLTF("/models/3DCapsulemodel.glb", true, undefined, () => onLoaded());
    const modelRef = useRef();

    // Smooth rotation with tilt
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
            modelRef.current.rotation.x = Math.PI / 8;
            modelRef.current.rotation.z = Math.PI / 4;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={1.8} position={[0, -0.2, 0]} />;
}

export default function ModelViewer() {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Circular container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#f6dcc8] to-[#fff] cursor-pointer shadow-lg flex items-center justify-center overflow-hidden">
                {/* 🖼️ Placeholder until 3D model loads */}
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#fefaf7]">
                        <Image
                            src="/images/icons/CapsuleIcon.png" // 👈 Put your fallback image path here
                            alt="Loading model..."
                            fill
                            className="object-contain animate-pulse"
                            priority={false}
                        />
                    </div>
                )}

                {/* 🎨 3D Model Canvas */}
                <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: "transparent" }}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                    <directionalLight position={[-5, 2, 5]} intensity={1.0} />
                    <directionalLight position={[0, 5, -5]} intensity={0.8} />

                    <Suspense fallback={null}>
                        <CapsuleModel onLoaded={() => setLoaded(true)} />
                        <Environment preset="sunset" />
                    </Suspense>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Canvas>

                {/* ✨ Decorative glowing ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-[#decbb7]/60 blur-sm pointer-events-none"></div>
            </div>
        </div>
    );
}
