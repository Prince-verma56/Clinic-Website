import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { Navbar } from './ui/resizable-navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const HomeopathyHero = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: true, amount: 0.3 });

    return (
        <div className="relative min-h-screen border bg-gradient-to-br from-[#fcfaf7] via-[#fefdfb] to-[#f9f6f1] overflow-hidden rounded-3xl">
            {/* Navbar */}
            <Navbar />
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.03, 0.06, 0.03],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-[#8b5e3c] rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.03, 0.06, 0.03],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-40 right-20 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        y: [0, 50, 0],
                        opacity: [0.02, 0.05, 0.02],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#f1b52b] rounded-full blur-3xl"
                />
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,94,60,0.03),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5e3c08_1px,transparent_1px),linear-gradient(to_bottom,#8b5e3c08_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#8b5e3c] rounded-full opacity-20"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                />
            ))}



            {/* Hero Content */}
            <div ref={heroRef} className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 ">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-120px)]">

                    {/* Left Side - Welcome & Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8 z-10"
                    >


                        {/* Main Heading */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                            >
                                <span className="text-gray-900">
                                    Your Path to
                                </span>
                                <br />
                                <motion.span
                                    className="relative inline-block bg-gradient-to-r from-[#8b5e3c] via-[#6b4a36] to-[#8b5e3c] bg-clip-text text-transparent"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    Holistic Healing
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8b5e3c]/60 to-transparent rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={isInView ? { scaleX: 1 } : {}}
                                        transition={{ delay: 0.9, duration: 0.8 }}
                                    />
                                </motion.span>
                                <br />
                                <span className="text-gray-900">
                                    Starts Here 🌿
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl font-medium"
                            >
                                We provide gentle, natural remedies tailored to your unique constitution,
                                addressing the root cause of illness, not just the symptoms. Experience
                                classical homeopathy that stimulates your body's innate ability to heal.
                            </motion.p>
                        </div>

                        {/* Key Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5e6db] to-[#fef3ea] flex items-center justify-center shadow-lg flex-shrink-0">
                                    <Leaf className="w-6 h-6 text-[#8b5e3c]" />
                                </div>
                                <p className="text-gray-700 font-medium">100% Natural & Safe Remedies</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8fff1] to-[#f0fff5] flex items-center justify-center shadow-lg flex-shrink-0">
                                    <Award className="w-6 h-6 text-[#4CAF50]" />
                                </div>
                                <p className="text-gray-700 font-medium">25+ Years of Healing Experience</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fff7e6] to-[#fffbf0] flex items-center justify-center shadow-lg flex-shrink-0">
                                    <Star className="w-6 h-6 text-[#f1b52b] fill-[#f1b52b]" />
                                </div>
                                <p className="text-gray-700 font-medium">Trusted by 5000+ Happy Patients</p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            {/* ✅ BOOK APPOINTMENT */}
                            <Link href="/contact-us" passHref>
                                <Button
                                    size="lg"
                                    className="cursor-pointer px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] text-white hover:from-[#6b4a36] hover:to-[#8b5e3c] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full group"
                                >
                                    Book Appointment
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>

                            {/* ✅ LEARN MORE */}
                            <Link href="/about-me" passHref>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer px-8 py-6 text-lg font-semibold border-2 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#f5e6db] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                                >
                                    About Me
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - 3D Model / Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative h-[500px] lg:h-[700px] flex items-center justify-center"
                    >
                        {/* Main 3D Model Container */}
                        <motion.div
                            className="relative w-full max-w-[600px] h-full bg-gradient-to-br from-white via-[#f5e6db]/30 to-[#fef3ea]/40 rounded-[4rem] overflow-hidden shadow-2xl border border-[#8b5e3c]/10 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

                            {/* 3D Model Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-center space-y-6">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                        className="w-48 h-48 lg:w-64 lg:h-64 mx-auto bg-gradient-to-br from-[#f5e6db] via-[#fef3ea] to-[#e8fff1] rounded-full flex items-center justify-center shadow-2xl relative"
                                    >
                                        <div className="absolute inset-4 bg-gradient-to-br from-[#8b5e3c]/10 via-[#4CAF50]/10 to-[#f1b52b]/10 rounded-full" />
                                        <Leaf className="w-24 h-24 lg:w-32 lg:h-32 text-[#8b5e3c] relative z-10" />

                                        {/* Orbiting elements */}
                                        <motion.div
                                            className="absolute w-6 h-6 bg-[#4CAF50] rounded-full"
                                            style={{ top: '10%', left: '50%' }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.div
                                            className="absolute w-4 h-4 bg-[#f1b52b] rounded-full"
                                            style={{ bottom: '15%', right: '20%' }}
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        />
                                    </motion.div>

                                    <div className="space-y-3">
                                        <p className="text-[#8b5e3c] font-bold text-2xl">3D Model Canvas</p>
                                        <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                                            Replace this container with your R3F Canvas component for interactive 3D homeopathy remedy visualization
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 
                Uncomment and use React Three Fiber here:
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <YourHomeopathyModel />
                  <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
              */}

                            {/* Decorative corner elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#8b5e3c]/20 to-transparent rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#4CAF50]/20 to-transparent rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                            className="absolute -bottom-8 -left-8 lg:-left-12 bg-white rounded-2xl p-6 shadow-2xl border-4 border-[#f5e6db] z-20"
                        >
                            <div className="text-center">
                                <p className="text-5xl font-bold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] bg-clip-text text-transparent">25+</p>
                                <p className="text-sm font-bold text-gray-700 tracking-wider mt-1">Years Experience</p>
                            </div>
                        </motion.div>

                        {/* Decorative rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 -right-10 w-40 h-40 border-[3px] border-dashed border-[#8b5e3c]/30 rounded-full"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[#8b5e3c] rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-[#8b5e3c] rounded-full" />
                </motion.div>
            </motion.div>

            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </div>
    );
};

export default HomeopathyHero;