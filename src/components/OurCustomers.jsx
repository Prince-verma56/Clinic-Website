'use client'
//  tag is required for Next.js 13+
import React from 'react';
import { ArrowRight, Home, MapPin } from 'lucide-react'; // Added Home and MapPin icons
import { motion } from 'framer-motion';

// Sample data for the testimonial images and their updated, larger positions
const testimonials = [
    // Left side cluster (Larger size and wider spread)
    { id: 1, src: "https://placehold.co/120x150/f4f4f4/333?text=User+1", alt: "User 1", positionClass: "absolute top-4 left-0 md:left-20 z-10 w-32 h-40 md:w-36 md:h-44 shadow-lg" },
    { id: 2, src: "https://placehold.co/150x150/d4d4d4/333?text=User+2", alt: "User 2", positionClass: "absolute top-40 left-10 md:left-56 z-20 w-40 h-40 md:w-44 md:h-44 shadow-xl" },
    { id: 3, src: "https://placehold.co/130x130/f4f4f4/333?text=User+3", alt: "User 3", positionClass: "absolute top-72 left-0 md:left-10 z-10 w-36 h-36 md:w-40 md:h-40 shadow-lg" },
    { id: 4, src: "https://placehold.co/140x170/d4d4d4/333?text=User+4", alt: "User 4", positionClass: "absolute bottom-10 left-32 md:left-72 z-20 w-36 h-44 md:w-40 md:h-52 shadow-2xl" },

    // Right side cluster (Larger size and wider spread)
    { id: 5, src: "https://placehold.co/140x140/f4f4f4/333?text=User+5", alt: "User 5", positionClass: "absolute top-0 right-0 md:right-32 z-10 w-36 h-36 md:w-40 md:h-40 shadow-xl" },
    { id: 6, src: "https://placehold.co/160x150/d4d4d4/333?text=User+6", alt: "User 6", positionClass: "absolute top-36 right-10 md:right-8 z-20 w-40 h-36 md:w-44 md:h-40 shadow-2xl" },
    { id: 7, src: "https://placehold.co/120x120/f4f4f4/333?text=User+7", alt: "User 7", positionClass: "absolute top-72 right-0 md:right-40 z-10 w-32 h-32 md:w-36 md:h-36 shadow-lg" },
    { id: 8, src: "https://placehold.co/150x180/d4d4d4/333?text=User+8", alt: "User 8", positionClass: "absolute bottom-10 right-30 md:right-10 z-20 w-36 h-44 md:w-40 md:h-52 shadow-xl" },
];

// Framer motion variants for subtle floating animation
const floatVariants = (delay) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8, // Slightly longer duration for smoother entry
            delay: delay,
            ease: "easeOut",
            y: {
                repeat: Infinity,
                duration: 6, // Slower float
                ease: "easeInOut",
                repeatType: "reverse",
            }
        },
        // Subtle vertical floating effect
        y: [0, -15, 0] // Increased floating range
    }
});


export function OurCustomers() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">

                {/* Testimonials Grid Container */}
                {/* Increased height to accommodate larger/farther images */}
                <div className="relative h-[700px] w-full max-w-5xl mx-auto mb-16 lg:mb-24">
                    
                    {/* Floating Images */}
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={test.id}
                            className={`${test.positionClass} rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 transition-transform hover:scale-105 border border-white/50 dark:border-gray-700/50`}
                            variants={floatVariants(index * 0.1)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <img
                                // Using object-cover for better aspect ratio fitting
                                src={test.src}
                                alt={test.alt}
                                className="w-full h-full object-cover rounded-2xl"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://placehold.co/120x120/eeeeee/333?text=Photo';
                                }}
                            />
                        </motion.div>
                    ))}

                    {/* Central Content Box */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            // Applying background color and theme based on previous components
                            className="bg-[#fcfbf9]/90 dark:bg-gray-800/90 p-6 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl max-w-sm md:max-w-xl border border-gray-100 dark:border-gray-700 z-30"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <p className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#8b5e3c] bg-[#f1f1d4] dark:bg-gray-700 rounded-full mb-4">
                                Testimonials
                            </p>
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#3b2f2f] dark:text-white mb-4">
                                Trusted by leaders
                                <span className="block font-medium text-gray-600 dark:text-gray-400 mt-3 text-3xl">from various industries</span>
                            </h2>
                            <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                                Learn why professionals trust our solutions to complete their customer journeys.
                            </p>
                            
                            {/* Call to Action Buttons: Home and Find Us */}
                            <div className="flex justify-center space-x-4">
                                {/* Home Button (Thematic Primary Button) */}
                                <a
                                    href="/"
                                    className="inline-flex items-center text-white bg-[#8b5e3c] hover:bg-[#6b4a36] px-6 py-3 rounded-lg font-semibold text-sm shadow-md transition-colors"
                                >
                                    <Home size={16} className="mr-2" />
                                    Go to Home
                                </a>

                                {/* Find Us Button (Secondary Button) */}
                                <a
                                    href="/find-us"
                                    className="inline-flex items-center text-[#8b5e3c] bg-white border border-[#8b5e3c] hover:bg-[#f1f1d4] dark:bg-gray-900 dark:text-[#8b5e3c] dark:border-[#8b5e3c] dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold text-sm shadow-md transition-colors"
                                >
                                    <MapPin size={16} className="mr-2" />
                                    Find Us
                                </a>
                            </div>

                        </motion.div>
                    </div>

                </div>
                
                {/* Visual elements for background styling - Theme based colors */}
                <div className="hidden lg:block">
                    {/* Darker background elements */}
                    <div className="absolute w-24 h-48 bg-[#3b2f2f] dark:bg-[#294c3d] opacity-10 rounded-full blur-3xl -top-20 -left-20 transform rotate-45"></div>
                    {/* Lighter background elements */}
                    <div className="absolute w-48 h-24 bg-[#f1f1d4] dark:bg-[#8b5e3c] opacity-15 rounded-full blur-3xl -bottom-20 -right-20 transform -rotate-45"></div>
                </div>

            </div>
        </section>
    );
}
