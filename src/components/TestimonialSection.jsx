"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react'; // Using Lucide for the star icon

// --- Testimonial Data ---
const testimonials = [
    {
        id: 1,
        quoteMain: "Felt a true connection to myself",
        quoteBody: "After years of struggling with chronic fatigue, the individualized homeopathic treatment addressed the root cause. I now feel energetic and completely balanced, something conventional medicine couldn't achieve.",
        patientName: "Anya Sharma",
        patientTitle: "Creative Director, Digital Wellness Studio",
        imageSrc: "/images/Doctor-pateint.png", // Replace with local path
        imageAlt: "Anya Sharma, satisfied patient",
        color: 'text-[#f1b52b]', // Yellow accent
        bgColor: 'bg-[#fff7e6]',
    },
    {
        id: 2,
        quoteMain: "Finally relief from years of allergies",
        quoteBody: "The gentle, natural remedies were perfectly tailored. My seasonal allergies disappeared within months without harsh side effects. This has truly changed my quality of life.",
        patientName: "Rohan Patel",
        patientTitle: "Software Engineer, Startup Founder",
        imageSrc: "/images/Doctor-pateint.png", // Replace with local path
        imageAlt: "Rohan Patel, satisfied patient",
        color: 'text-[#4CAF50]', // Green accent
        bgColor: 'bg-[#e8fff1]',
    },
    {
        id: 3,
        quoteMain: "Found peace amidst the chaos",
        quoteBody: "My anxiety had become debilitating. The holistic consultation and the suggested remedy helped restore my emotional resilience. I feel grounded and calm, a genuine sense of inner peace.",
        patientName: "Chloe Lee",
        patientTitle: "Educator, Montessori School",
        imageSrc: "/images/Doctor-pateint.png", // Replace with local path
        imageAlt: "Chloe Lee, satisfied patient",
        color: 'text-[#8b5e3c]', // Brown accent
        bgColor: 'bg-[#f5e6db]',
    },
];

// --- Custom Components ---

// Progress Line Component (Navigation)
const ProgressLine = ({ activeId, currentId, onClick, color }) => {
    const isActive = activeId === currentId;

    return (
        <div 
            className="flex items-center cursor-pointer group mb-6 md:mb-8 transition-opacity duration-300"
            onClick={onClick}
        >
            <div 
                className={`w-1 h-12 rounded-full transition-all duration-500 ease-in-out 
                            ${isActive ? 'bg-[#8b5e3c] h-16' : 'bg-[#e7e0d7] group-hover:bg-[#d4c3b0]'}`}
            />
            {/* The small vertical dots/lines next to the main line */}
            <div className={`ml-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${isActive ? 'text-[#8b5e3c]' : 'text-gray-500'}`}>
                {currentId < 10 ? `0${currentId}` : currentId}
            </div>
        </div>
    );
};

// --- Main Component ---
export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(1);
    const activeTestimonial = useMemo(() => testimonials.find(t => t.id === activeIndex), [activeIndex]);

    // Auto-advance functionality (optional, but good for dynamic sections)
    const autoAdvance = useCallback(() => {
        setActiveIndex(prevIndex => (prevIndex % testimonials.length) + 1);
    }, []);

    useEffect(() => {
        const timer = setInterval(autoAdvance, 6000); // Change testimonial every 6 seconds
        return () => clearInterval(timer);
    }, [autoAdvance]);

    if (!activeTestimonial) return null;

    return (
        <section 
            id="testimonials"
            className="bg-[#fcfaf7] dark:bg-neutral-900 py-16 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-7 py-4 rounded-4xl sm:px-8 lg:px-12 bg-[#f9eae1]">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
                    
                    {/* LEFT SIDE: Static Doctor Profile Card */}
                    <motion.div 
                        className="w-full lg:w-5/12 max-w-lg lg:max-w-none p-6 md:p-8 rounded-3xl shadow-xl overflow-hidden bg-[#8b5e3c] dark:bg-neutral-800 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            // Custom warm shadow for elevation
                            boxShadow: "rgba(139, 94, 60, 0.01) 0px 520px 146px 0px, rgba(139, 94, 60, 0.05) 0px 333px 133px 0px, rgba(139, 94, 60, 0.20) 0px 83px 83px 0px, rgba(139, 94, 60, 0.25) 0px 21px 46px 0px"
                        }}
                    >
                        {/* Image Container (Simulating the star shape with clips/masks is complex in Tailwind,
                          so we'll use a clean, modern large rounded-corner container and let the image be central) */}
                        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-[#f1b52b] p-6 flex justify-center items-end">
                            {/* Decorative element like the plus/leaf icon */}
                            <Star className="absolute top-4 right-4 h-8 w-8 text-[#8b5e3c]" fill="#8b5e3c" strokeWidth={0} />
                            
                            <Image
                                src="/images/Homeopath-Dr.png" // Placeholder for the doctor
                                alt="Dr. Elara Vance, Homeopath"
                                width={300}
                                height={320}
                                className="object-cover object-top h-full w-auto"
                            />
                        </div>
                        
                        <div className="bg-white/10 p-4 rounded-xl text-white">
                            <h3 className="text-2xl font-bold font-ubuntu mb-1">Dr. Elara Vance</h3>
                            <p className="text-lg font-medium opacity-80 mb-2">Classical Homeopath & Wellness Expert</p>
                            <div className="flex justify-between items-center pt-2 border-t border-white/20">
                                <p className="text-sm opacity-70">Practicing since 2005</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* RIGHT SIDE: Dynamic Testimonials and Navigation */}
                    <div className="w-full lg:w-7/12 flex gap-6 lg:gap-10">
                        
                        {/* Progress Line Navigation */}
                        <motion.div 
                            className="flex flex-col justify-start pt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {testimonials.map(t => (
                                <ProgressLine
                                    key={t.id}
                                    activeId={activeIndex}
                                    currentId={t.id}
                                    onClick={() => setActiveIndex(t.id)}
                                    color={t.color}
                                />
                            ))}
                        </motion.div>

                        {/* Testimonial Content */}
                        <motion.div 
                            className="flex-1 pt-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <AnimatePresence mode="wait">
                                {activeTestimonial && (
                                    <motion.div
                                        key={activeTestimonial.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    >
                                        
                                        {/* Main Quote */}
                                        <h2 className="text-4xl md:text-5xl font-extrabold font-ubuntu leading-snug mb-8 text-[#3b2f2f] dark:text-zinc-100">
                                            “{activeTestimonial.quoteMain}”
                                        </h2>

                                        {/* Patient Info and Star Image */}
                                        <div className="flex items-center mb-6">
                                            <div className={`relative w-16 h-16 rounded-full overflow-hidden mr-4 border-4 ${activeTestimonial.bgColor} p-0.5`}>
                                                <Image
                                                    src={activeTestimonial.imageSrc}
                                                    alt={activeTestimonial.patientName}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    sizes="64px"
                                                    className="rounded-full"
                                                />
                                                {/* Quote mark (like in the image) */}
                                                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center border-2 border-gray-100 shadow-sm text-lg leading-none">
                                                    “
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg text-[#3b2f2f] dark:text-zinc-100">{activeTestimonial.patientName}</p>
                                                <p className="text-sm text-gray-500">{activeTestimonial.patientTitle}</p>
                                            </div>
                                        </div>

                                        {/* Detailed Testimonial */}
                                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic border-l-4 border-[#8b5e3c] pl-4">
                                            {activeTestimonial.quoteBody}
                                        </p>
                                        
                                        {/* Decoration (Leaf icon) */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#8b5e3c]/50 rotate-12 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
