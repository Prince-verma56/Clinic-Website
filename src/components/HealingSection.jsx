"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// ---- Healing Focus Data ----
const healingFocuses = [
  {
    id: 0,
    title: "Constitutional Prescribing",
    shortLine: "Deep-Rooted Healing",
    description:
      "We analyze your entire symptom picture (mental, emotional, and physical) to find the single, best-suited remedy for lasting relief.",
    bgColor: "bg-[#e9f5e1]",
    imageUrl: "/images/ServeImgs/DeepRooted.png",
    imageAlt: "A holistic diagram showing mind, body, and spirit connection.",
  },
  {
    id: 1,
    title: "Chronic Disease Management",
    shortLine: "Beyond Symptom Relief",
    description:
      "Using gentle, non-toxic remedies, we address the underlying causes of long-standing conditions like allergies, arthritis, or fatigue.",
    bgColor: "bg-[#f5e1e9]",
    imageUrl: "/images/ServeImgs/Cronic.png",
    imageAlt: "A person feeling calm in a natural, bright setting.",
  },
  {
    id: 2,
    title: "Emotional & Mental Wellness",
    shortLine: "Balancing Mind & Mood",
    description:
      "Homeopathy supports emotional stability by treating anxiety, grief, and stress, helping restore balance without sedative effects.",
    bgColor: "bg-[#e1f5f3]",
    imageUrl: "/images/ServeImgs/MentalWellness.png",
    imageAlt: "A simple illustration of two hands gently holding a small bud.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProgressLine = ({ isActive, onClick, title, index }) => (
  <motion.button
    onClick={onClick}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="flex items-center space-x-4 cursor-pointer group relative"
  >
    <div className="relative h-16 w-[4px] flex-shrink-0 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-white via-emerald-200 to-white"
        animate={{ height: isActive ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>

    <motion.span
      className={`font-semibold text-sm md:text-base lg:w-40 transition-all duration-500 ${
        isActive
          ? "text-white"
          : "opacity-60 text-white/70 group-hover:opacity-100"
      }`}
    >
      {title}
    </motion.span>
  </motion.button>
);

export function HealingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeFocus = healingFocuses[currentIndex];

  useEffect(() => {
    const cycle = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % healingFocuses.length);
    }, 6000);
    return () => clearInterval(cycle);
  }, []);

  const handleFocusClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const cardVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
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
      {/* Soft Animated BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"
        />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 max-w-xl">
          <motion.div variants={textVariants}>
            <Badge className="px-4 py-2 bg-emerald-500/20 text-emerald-200 border-emerald-400/30 hover:bg-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" /> CARING IS ALWAYS FREE
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={textVariants}
          >
            We help you find balance and{" "}
            <span className="relative inline-block text-[#f1f1d4]">
              long-term vitality.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f1f1d4] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#d0e0d5] max-w-md leading-relaxed"
            variants={textVariants}
          >
            Classical homeopathic practice focuses on stimulating the body's
            innate healing mechanisms for sustainable wellness and confidence at
            any age.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-8 pt-4"
            variants={textVariants}
          >
            <div>
              <p className="text-4xl font-bold text-white">25+</p>
              <p className="text-sm text-emerald-200">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">5000+</p>
              <p className="text-sm text-emerald-200">Happy Patients</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          className="relative flex justify-center lg:justify-center items-center w-full"
          variants={textVariants}
        >
          <div className="flex w-full max-w-lg justify-center items-center">
            {/* Progress Lines */}
            <div className="hidden md:flex flex-col space-y-4 mr-6 pt-8">
              {healingFocuses.map((focus, index) => (
                <ProgressLine
                  key={focus.id}
                  isActive={index === currentIndex}
                  onClick={() => handleFocusClick(index)}
                  title={focus.shortLine}
                  index={index}
                />
              ))}
            </div>

            {/* Animated Card */}
            <div className="relative w-full max-w-sm">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeFocus.id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200/50 dark:border-neutral-700"
                >
                  <div className="relative w-full h-[280px]">
                    <Image
                      src={activeFocus.imageUrl}
                      alt={activeFocus.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm border-0 shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="px-6 py-6 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeFocus.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {activeFocus.description}
                    </p>

                    <motion.a
                      href="/learn-more"
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Explore Program
                      <ChevronRight className="ml-1 w-4 h-4" />
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

export default HealingSection;
