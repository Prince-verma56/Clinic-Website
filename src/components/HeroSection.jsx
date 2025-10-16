import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Award, Users, Heart } from 'lucide-react'; // Removed unused Sparkles, Star, Clock
import { Navbar } from './ui/resizable-navbar';
import { Button } from '@/components/ui/button';
// Removed unused Badge
import Link from 'next/link';
import ModelViewer from './ModelViewer';

const HomeopathyHero = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: true, amount: 0.3 });
    
    // Mouse parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const springConfig = { damping: 30, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div 
            className="relative min-h-screen border bg-gradient-to-br from-[#fcfaf7] via-[#fefdfb] to-[#f9f6f1] overflow-hidden rounded-3xl"
            onMouseMove={handleMouseMove}
        >
            {/* Enhanced Navbar */}
            <Navbar />

            {/* Professional Background with Gradient Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-[#8b5e3c]/10 to-[#f1b52b]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#4CAF50]/10 to-[#8b5e3c]/10 rounded-full blur-3xl"
                />
                
                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,94,60,0.05),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(139,94,60,0.02)_50%,transparent_52%)] bg-[size:50px_50px]" />
            </div>

            {/* Enhanced Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-[#8b5e3c] to-[#4CAF50] rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />
            ))}

            {/* Main Hero Content */}
            <div ref={heroRef} 
 className="relative w-full max-w-9xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-20">                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-120px)]">

                    {/* Left Content - Enhanced Typography & Animations */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10 z-10"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-[#8b5e3c]/10"
                        >
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] rounded-full border-2 border-white" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900">5000+ Happy Patients</span>
                                <span className="text-xs text-gray-600">Trusted Since 1999</span>
                            </div>
                        </motion.div>

                        {/* Enhanced Main Heading */}
                        <div className="space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight font-serif"
                            >
                                <span className="text-gray-900 block">
                                    Natural
                                </span>
                                <motion.span
                                    className="relative inline-block bg-gradient-to-r from-[#8b5e3c] via-[#6b4a36] to-[#4CAF50] bg-clip-text text-transparent"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5, duration: 1 }}
                                >
                                    Healing
                                    <motion.div
                                        className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8b5e3c] to-transparent rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={isInView ? { scaleX: 1 } : {}}
                                        transition={{ delay: 1, duration: 1 }}
                                    />
                                </motion.span>
                                <span className="text-gray-900 block">
                                    Journey 🌿
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl font-light"
                            >
                                Experience <span className="font-semibold text-[#8b5e3c]">gentle, permanent solutions</span> through classical homeopathy that addresses root causes, not just symptoms.
                            </motion.p>
                        </div>

                        {/* Enhanced Key Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="grid gap-5"
                        >
                            {[
                                { icon: Leaf, text: "100% Natural & Safe Remedies", color: "#8b5e3c" },
                                { icon: Award, text: "25+ Years Healing Experience", color: "#4CAF50" },
                                { icon: Heart, text: "Personalized Treatment Plans", color: "#f1b52b" },
                                { icon: Users, text: "5000+ Success Stories", color: "#8b5e3c" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <motion.div 
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                    >
                                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                    </motion.div>
                                    <span className="text-lg font-medium text-gray-800 group-hover:text-[#8b5e3c] transition-colors">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            className="flex flex-wrap gap-5 pt-6"
                        >
                            <Link href="/contact-us" passHref>
                                <Button
                                    size="lg"
                                    className="cursor-pointer px-10 py-7 text-lg font-semibold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] text-white hover:from-[#6b4a36] hover:to-[#8b5e3c] shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                    Book Free Consultation
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </Button>
                            </Link>

                            <Link href="/about-me" passHref>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer px-10 py-7 text-lg font-semibold border-3 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#f5e6db] hover:border-[#6b4a36] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-sm"
                                >
                                    Meet Dr. Specialist
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Enhanced 3D Model Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, rotateY: 10 }}
                        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="relative h-[600px] lg:h-[800px] flex items-center justify-center perspective-1000"
                    >
                        {/* Main 3D Container with Parallax */}
                        <motion.div
                            className="relative w-full max-w-[650px] h-full bg-gradient-to-br from-orange-100 via-[#f5e6db]/20 to-[#fef3ea]/30 rounded-[4rem] overflow-hidden shadow-3xl border border-[#8b5e3c]/10 backdrop-blur-lg"
                            style={{
                                rotateX: rotateX,
                                rotateY: rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            // 🚫 REMOVED: whileHover to prevent scaling on hover
                            transition={{ duration: 0.5 }}
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5e3c]/5 via-transparent to-[#4CAF50]/5" />
                            
                            {/* 3D Model Viewer - Updated to use ModelViewer directly */}
                            <div className="absolute inset-0 p-4 top-[10]">
                                <ModelViewer />
                            </div>

                            {/* Callout Text - Moved outside ModelViewer to ensure proper z-indexing and positioning */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1 }}
className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-2 z-20 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#8b5e3c]/10 shadow-lg"
                            >
                                <p className="text-xl font-bold bg-gradient-to-r from-[#8b5e3c] to-[#4CAF50] bg-clip-text text-transparent">
                                    Holistic 3D Experience
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Use your mouse to explore the model!
                                </p>
                            </motion.div>
                            
                            {/* Enhanced Corner Accents */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#8b5e3c]/20 to-transparent rounded-full blur-2xl"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#4CAF50]/20 to-transparent rounded-full blur-2xl"
                                animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                            />
                        </motion.div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 200 }}
                            className="absolute -bottom-6 -left-6 lg:-left-16 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-[#f5e6db] z-20"
                        >
                            <div className="text-center space-y-2">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-6xl font-bold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] bg-clip-text text-transparent"
                                >
                                    25+
                                </motion.div>
                                <p className="text-sm font-bold text-gray-700 tracking-wider uppercase">Years Healing</p>
                                <p className="text-xs text-gray-500">Experience</p>
                            </div>
                        </motion.div>

                        {/* Rotating Decorative Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute top-20 -right-16 w-48 h-48 border-2 border-dashed border-[#8b5e3c]/20 rounded-full"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center space-y-2"
                >
                    <span className="text-sm font-medium text-[#8b5e3c]">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-[#8b5e3c]/50 rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-3 bg-[#8b5e3c] rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) rotate(45deg); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
};

export default HomeopathyHero;