"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Star } from 'lucide-react';

// Data for the counter statistics
const stats = [
    { target: 48, label: "People enrolled in program", unit: '%' },
    { target: 93, label: "People report benefits", unit: '%' },
];

/**
 * Animated Counter Component
 */
const AnimatedCounter = ({ from, to, unit }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60; // Frames per second
        const stepTime = duration / steps;
        const increment = (to - from) / steps;

        let current = from;
        const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
                setCount(to);
                clearInterval(timer);
            } else {
                // Round based on the unit to avoid decimal points for 'k' or '%'
                setCount(Math.round(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, from, to, unit]);

    return (
        <span ref={ref} className="text-5xl md:text-7xl font-extrabold text-white">
            {count}
            <span className="text-3xl font-light align-top ml-1 text-[#8b5e3c]">{unit}</span>
        </span>
    );
};

/**
 * Main Footer Component
 */
export function FooterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send the email to your API here
        console.log("Subscribing email:", email);
        alert(`Thank you for subscribing, ${email}!`);
        setEmail('');
    };

    const linkClasses = "text-gray-400 hover:text-[#8b5e3c] transition duration-300";

    return (
        <footer className="bg-[#3b2f2f] dark:bg-black text-white pt-16 pb-8 border-t border-[#8b5e3c]/20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                
                {/* Top Section: Logo, Stats, and Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-12 mb-8">
                    
                    {/* Column 1: Logo and Brand Info (lg:col-span-3) */}
                    <motion.div 
                        className="lg:col-span-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <Star className="h-7 w-7 text-[#8b5e3c] mr-2" fill="#8b5e3c" />
                            <span className="text-2xl font-bold font-ubuntu">HealPoint</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Healing the world naturally, one remedy at a time.
                        </p>
                    </motion.div>

                    {/* Column 2: Animated Stats (lg:col-span-5) */}
                    <motion.div 
                        className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                                <AnimatedCounter from={0} to={stat.target} unit={stat.unit} />
                                <span className="mt-2 text-md font-semibold text-gray-300 border-b-2 border-[#8b5e3c] pb-1 max-w-fit">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Column 3: Newsletter (lg:col-span-4) */}
                    <motion.div 
                        className="lg:col-span-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h4 className="text-xl font-semibold mb-4 text-white">Subscribe to our wellness newsletter</h4>
                        <form onSubmit={handleSubmit} className="flex relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-10 pr-16 py-3 rounded-full bg-[#524444] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#8b5e3c] focus:outline-none transition-colors duration-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-[#8b5e3c] hover:bg-[#6b4a36] rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                                <Send className="h-5 w-5 text-white" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Section: Legal Links and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="order-2 md:order-1 mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} HomeoWell. All rights reserved.
                    </p>
                    <div className="order-1 md:order-2 flex space-x-6">
                        <a href="/privacy" className={linkClasses}>Privacy Policy</a>
                        <a href="/terms" className={linkClasses}>Terms of Service</a>
                        <a href="/faq" className={linkClasses}>FAQ</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
