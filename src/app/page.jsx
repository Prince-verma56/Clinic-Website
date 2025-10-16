"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/ui/resizable-navbar";
import { motion } from "framer-motion";
import { ServicesSection } from "@/components/ServicesSection";
import {HealingSection} from "@/components/HealingSection";
import { FeaturedServices } from "@/components/FeaturedService";
import { TestimonialsSection } from "@/components/TestimonialSection";
import { FooterSection } from "@/components/FooterSection";

export default function Page() {
  return (
 <main className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 w-full flex flex-col overflow-x-hidden">      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
<section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#fcfaf7] via-[#fefdfb] to-[#f9f6f1]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#8b5e3c] rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-20 -right-40 w-[600px] h-[600px] bg-[#4CAF50] rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#f1b52b] rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#6b4a36] rounded-full blur-3xl"
        />
      </div>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,94,60,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(76,175,80,0.03),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5e3c08_1px,transparent_1px),linear-gradient(to_bottom,#8b5e3c08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Leaf Icons */}
        <motion.div
          className="absolute top-1/4 left-[15%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-[#8b5e3c]">
            <path d="M11 2L11 22M11 2C11 2 14 5 14 10C14 15 11 16 11 16M11 2C11 2 8 5 8 10C8 15 11 16 11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[60%] right-[10%]"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-[#4CAF50]">
            <path d="M11 2L11 22M11 2C11 2 14 5 14 10C14 15 11 16 11 16M11 2C11 2 8 5 8 10C8 15 11 16 11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[8%]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" className="text-[#f1b52b]">
            <path d="M11 2L11 22M11 2C11 2 14 5 14 10C14 15 11 16 11 16M11 2C11 2 8 5 8 10C8 15 11 16 11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* Floating Particles/Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-[#8b5e3c]' : 
              i % 3 === 1 ? 'bg-[#4CAF50]' : 
              'bg-[#f1b52b]'
            }`}
            style={{
              top: `${15 + (i * 7)}%`,
              left: `${5 + (i * 8)}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Decorative Circles */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-32 h-32 border-2 border-dashed border-[#8b5e3c]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-[25%] left-[12%] w-40 h-40 border-2 border-dashed border-[#4CAF50]/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-[40%] left-[5%] w-24 h-24 bg-gradient-to-br from-[#f5e6db]/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-[70%] right-[15%] w-32 h-32 bg-gradient-to-br from-[#e8fff1]/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28">
        <HeroSection />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
      {/* Divider / Transition (optional aesthetic) */}
      <motion.div
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

     <ServicesSection/>
     <HealingSection/>
     <FeaturedServices/>
     <TestimonialsSection/>
     <FooterSection/>

      {/* Footer (optional later) */}
      <footer className="mt-auto py-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Healpoint Clinic. All rights reserved.
      </footer>
    </main>
  );
}
