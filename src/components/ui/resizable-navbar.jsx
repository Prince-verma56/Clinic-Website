'use client';

import { MapPin, Phone, User } from "lucide-react"; // import relevant icons
import React, { useState, useRef } from "react";
// Assuming cn and Button are correctly imported from your project setup
// import { cn } from "@/lib/utils"; 
// import { Button } from "@/components/ui/button";

// Mock implementation for demonstration since external imports like cn and Button were used.
const cn = (...classes) => classes.filter(Boolean).join(' '); 
const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 font-medium transition-colors ${className}`} {...props}>
        {children}
    </button>
);


import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
// Assuming Image and Link are standard Next.js imports
const Image = ({ src, alt, width, height, className }) => <img src={src} alt={alt} width={width} height={height} className={className} />;
const Link = ({ children, href, className, onClick }) => <a href={href} className={className} onClick={onClick}>{children}</a>;


// --- Component Start ---
export const Navbar = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll({ target: ref });
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);

    // Adjusted the threshold to 400px so the navbar hides later when scrolling down
    const HIDE_THRESHOLD = 50;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();
        if (latest > prev && latest > HIDE_THRESHOLD) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    });

    const navItems = [
        { name: "Find Us", href: "/find-us", icon: MapPin },
        { name: "Contact Us", href: "/contact-us", icon: Phone },
        { name: "About Me", href: "/about-me", icon: User },
    ];

    return (
        <AnimatePresence>
            <motion.nav
                ref={ref}
                initial={{ y: -100 }} // Increased initial offset for smoother entry
                animate={{
                    y: visible ? 0 : -100, // Adjusted hide position
                    backdropFilter: visible ? "blur(24px)" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                    // --- GLAMORPHISM STYLING APPLIED HERE ---
                    "fixed top-6 left-0 right-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full", 
                    "border border-neutral-200/50 bg-white/50 px-6 py-3 shadow-xl backdrop-blur-xl", // Glamorphism
                    "dark:bg-neutral-900/40 dark:border-neutral-700/50",
                )}
            >
                {/* Left Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/images/icons/HealPointLogo.png" alt="Healpoint" width={40} height={40} />
                    <span className="font-semibold text-lg text-gray-800 dark:text-white">
                        Healpoint
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300 md:flex">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-1 transition hover:text-black dark:hover:text-white"
                            >
                                <Icon size={16} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                    <span className="text-gray-300">|</span>
                    <select className="bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none">
                        <option>EN</option>
                        <option>HI</option>
                    </select>
                </div>


                {/* Right Button */}
                <Link href="/contact">
                    <Button
                        // Removed variant="default" as it relies on external UI library
                        className="hidden rounded-full bg-[#8b5e3c] px-6 py-2 text-white hover:bg-[#6b4a36] md:block"
                    >
                        Get Help?
                    </Button>
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            // Mobile menu styling also adjusted for a slight glamorphism effect
                            className="absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-md dark:bg-neutral-900/70 md:hidden"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-gray-700 transition hover:text-black dark:text-gray-200 dark:hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setOpen(false)}>
                                <Button
                                    // Removed variant="default" as it relies on external UI library
                                    className="rounded-full bg-[#8b5e3c] text-white hover:bg-[#6b4a36]"
                                >
                                    Get Help?
                                </Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </AnimatePresence>
    );
};
