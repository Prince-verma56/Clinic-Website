"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

function CapsuleModel() {
    const { scene } = useGLTF("/models/3DCapsulemodel.glb");
    const modelRef = useRef();

    // 🌀 Smooth rotation with 45° tilt
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // spin horizontally
            modelRef.current.rotation.x = Math.PI / 8; // slight forward tilt (~22.5°)
            modelRef.current.rotation.z = Math.PI / 4; // rightward tilt (~45°)
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={1.8}
            position={[0, -0.2, 0]}
        />
    );
}

export default function ModelViewer() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* 🎯 Circular container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#f6dcc8] to-[#fff] cursor-pointer shadow-lg flex items-center justify-center overflow-hidden">
                <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: "transparent" }}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                    <directionalLight position={[-5, 2, 5]} intensity={1.0} />
                    <directionalLight position={[0, 5, -5]} intensity={0.8} />

                    <Suspense
                        fallback={
                            <mesh>
                                <sphereGeometry args={[0.5, 32, 32]} />
                                <meshStandardMaterial color="#decbb7" />
                            </mesh>
                        }
                    >
                        <CapsuleModel />
                        <Environment preset="sunset" />
                    </Suspense>


                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={true}
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
