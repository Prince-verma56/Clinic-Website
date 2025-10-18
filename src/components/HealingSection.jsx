"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// --- Homeopathy-focused Content Data ---
const healingFocuses = [
    {
        id: 0,
        title: "Constitutional Prescribing",
        shortLine: "Deep-Rooted Healing",
        description: "We analyze your entire symptom picture (mental, emotional, and physical) to find the single, best-suited remedy for lasting relief.",
        bgColor: "bg-[#e9f5e1]",
        imageUrl: "/images/ServeImgs/DeepRooted.png",
        imageAlt: "A holistic diagram showing mind, body, and spirit connection."
    },
    {
        id: 1,
        title: "Chronic Disease Management",
        shortLine: "Beyond Symptom Relief",
        description: "Using gentle, non-toxic remedies, we address the underlying causes of long-standing conditions like allergies, arthritis, or fatigue.",
        bgColor: "bg-[#f5e1e9]",
        imageUrl: "/images/ServeImgs/Cronic.png",
        imageAlt: "A person feeling calm in a natural, bright setting."
    },
    {
        id: 2,
        title: "Emotional & Mental Wellness",
        shortLine: "Balancing Mind & Mood",
        description: "Homeopathy supports emotional stability by treating anxiety, grief, and stress, helping restore balance without sedative effects.",
        bgColor: "bg-[#e1f5f3]",
        imageUrl: "/images/ServeImgs/MentalWellness.png",
        imageAlt: "A simple illustration of two hands gently holding a small bud."
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        } 
    }
};

const ProgressLine = ({ isActive, onClick, title, index, total }) => {
    const progress = isActive ? 100 : 0;
    
    return (
        <motion.div
            className="flex items-center space-x-4 cursor-pointer group relative"
            onClick={onClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            {/* The vertical line indicator with progress animation */}
            <div className="relative h-16 w-[4px] flex-shrink-0 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-white via-emerald-200 to-white"
                    initial={{ height: 0, top: 0 }}
                    animate={{ 
                        height: isActive ? '100%' : 0,
                        top: 0
                    }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                    }}
                />
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-white/50 blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )}
            </div>
            
            {/* Text label with smooth transitions */}
            <motion.h3 
                className={`font-semibold text-sm md:text-base lg:w-40 transition-all duration-500 ${
                    isActive 
                        ? 'opacity-100 text-white translate-x-0' 
                        : 'opacity-0 md:opacity-60 text-white/70 -translate-x-2 md:translate-x-0 md:group-hover:opacity-100 md:group-hover:text-white'
                }`}
                layout
            >
                {title}
            </motion.h3>
            
            {/* Active indicator dot */}
            {isActive && (
                <motion.div
                    className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-white rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export function HealingSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const activeFocus = healingFocuses[currentIndex];
    const intervalTime = 5000;

    useEffect(() => {
        const cycle = setInterval(() => {
            setDirection(1);
            setCurrentIndex(prevIndex => (prevIndex + 1) % healingFocuses.length);
        }, intervalTime);

        return () => clearInterval(cycle);
    }, []);

    const handleFocusClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const cardVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            rotateY: direction > 0 ? 15 : -15
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
            rotateY: direction > 0 ? -15 : 15,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <motion.section  
            id="healing"
            className="relative bg-gradient-to-br from-[#294c3d] via-[#2d5442] to-[#1e3a2d] text-white py-16 md:py-24 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"
                />
            </div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Section: Main Text Content */}
                <div className="max-w-xl space-y-8">
                    <motion.div variants={textVariants}>
                        <Badge className="px-4 py-2 bg-emerald-500/20 text-emerald-200 border-emerald-400/30 hover:bg-emerald-500/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2" />
                            CARING IS ALWAYS FREE
                        </Badge>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        variants={textVariants}
                    >
                        We help you find balance and{" "}
                        <motion.span 
                            className="relative inline-block text-[#f1f1d4]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            long-term vitality.
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f1f1d4] to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-[#d0e0d5] max-w-md leading-relaxed"
                        variants={textVariants}
                    >
                        Classical homeopathic practice focuses on stimulating the body's innate healing mechanisms for sustainable wellness and confidence at any age.
                    </motion.p>

                    {/* Stats or Trust Indicators */}
                    <motion.div
                        className="flex flex-wrap gap-8 pt-4"
                        variants={textVariants}
                    >
                        <div className="space-y-1">
                            <motion.p 
                                className="text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                            >
                                25+
                            </motion.p>
                            <p className="text-sm text-emerald-200">Years Experience</p>
                        </div>
                        <div className="space-y-1">
                            <motion.p 
                                className="text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                5000+
                            </motion.p>
                            <p className="text-sm text-emerald-200">Happy Patients</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Section: Dynamic Card with Progress Lines */}
                <motion.div
                    className="relative order-first lg:order-last flex justify-center lg:justify-end min-h-[400px] lg:min-h-[500px] w-full"
                    variants={textVariants}
                >
                    <div className="flex w-full max-w-xl">
                        {/* Progress Indicator Lines */}
                        <motion.div
                            className="hidden md:flex flex-col space-y-2 mr-8 pt-16"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            {healingFocuses.map((focus, index) => (
                                <ProgressLine
                                    key={focus.id}
                                    isActive={index === currentIndex}
                                    onClick={() => handleFocusClick(index)}
                                    title={focus.shortLine}
                                    index={index}
                                    total={healingFocuses.length}
                                />
                            ))}
                        </motion.div>

                        {/* Card Container with AnimatePresence for smooth transitions */}
                        <div className="relative flex-1 perspective-1000">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={activeFocus.id}
                                    custom={direction}
                                    variants={cardVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="group w-full rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200/50 dark:border-neutral-800 cursor-pointer hover:shadow-emerald-500/20 transition-shadow duration-500"
                                >
                                    {/* Image Section with Enhanced Hover Effects */}
                                    <div className="relative w-full h-[280px] overflow-hidden pointer-events-none">
                                        <motion.img
                                            src={activeFocus.imageUrl}
                                            alt={activeFocus.imageAlt}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://placehold.co/400x400/cccccc/333333?text=Image+Unavailable';
                                            }}
                                        />
                                        {/* Gradient overlay with animation */}
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        
                                        {/* Floating badge on image */}
                                        <motion.div
                                            className="absolute top-4 right-4"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm border-0 shadow-lg">
                                                Featured
                                            </Badge>
                                        </motion.div>
                                    </div>

                                    {/* Content Section with Smooth Transitions */}
                                    <CardContent className="px-6 py-6 space-y-4 shadow-[inset_-12px_-8px_40px_#46464620]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                                                {activeFocus.title}
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {activeFocus.description.length > 130
                                                    ? activeFocus.description.slice(0, 130) + '...'
                                                    : activeFocus.description}
                                            </p>
                                        </motion.div>

                                        <motion.a
                                            href="/learn-more"
                                            className="inline-flex items-center justify-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold text-sm group/link"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            Explore Program
                                            <ChevronRight 
                                                size={16} 
                                                className="ml-1 group-hover/link:translate-x-1 transition-transform" 
                                            />
                                        </motion.a>
                                    </CardContent>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}