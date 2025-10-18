"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/ui/resizable-navbar";
import { motion } from "framer-motion";
import { ServicesSection } from "@/components/ServicesSection";
import { HealingSection } from "@/components/HealingSection";
import { FeaturedServices } from "@/components/FeaturedService";
import { TestimonialsSection } from "@/components/TestimonialSection";
import { FooterSection } from "@/components/FooterSection";

export default function Page() {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 w-full flex flex-col overflow-x-hidden">      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        class="relative w-full flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28 inset-0 
  bg-orange-100/20 
  bg-[linear-gradient(to_right,#faedcd_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
  bg-[size:24px_24px] overflow-hidden">
        <HeroSection />

        <div class="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#e6d5c3] opacity-50 blur-3xl rounded-full pointer-events-none"></div>

        <div class="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#d8bfa9] opacity-50 blur-3xl rounded-full pointer-events-none"></div>

      </section>

      {/* Divider / Transition (optional aesthetic) */}
      <motion.div
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <ServicesSection />
      <HealingSection />
      <FeaturedServices />
      <TestimonialsSection />
      <FooterSection />

      {/* Footer (optional later) */}
      <footer className="mt-auto py-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Healpoint Clinic. All rights reserved.
      </footer>
    </main>
  );
}
