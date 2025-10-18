"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Leaf, Quote, HeartHandshake, MessageSquare } from "lucide-react";
// import Image from "next/image"; // Placeholder, can uncomment when using Next.js Image

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    quoteMain: "Felt a true connection to myself",
    quoteBody:
      "After years of struggling with chronic fatigue, the individualized homeopathic treatment addressed the root cause. I now feel energetic and completely balanced, something conventional medicine couldn't achieve.",
    patientName: "Anya Sharma",
    patientTitle: "Creative Director, Digital Wellness Studio",
 imagePath: "/images/ServeImgs/AnyaSharma.png",    imageAlt: "Anya Sharma, satisfied patient",
    color: "text-[#f1b52b]",
    bgColor: "bg-[#fff7e6]",
    icon: Leaf,
  },
  {
    id: 2,
    quoteMain: "Finally relief from years of allergies",
    quoteBody:
      "The gentle, natural remedies were perfectly tailored. My seasonal allergies disappeared within months without harsh side effects. This has truly changed my quality of life.",
    patientName: "Rohan Patel",
    patientTitle: "Software Engineer, Startup Founder",
    imagePath: "/images/ServeImgs/RohanPatel.png",
    imageAlt: "Rohan Patel, satisfied patient",
    color: "text-[#4CAF50]",
    bgColor: "bg-[#e8fff1]",
    icon: HeartHandshake,
  },
  {
    id: 3,
    quoteMain: "Found peace amidst the chaos",
    quoteBody:
      "My anxiety had become debilitating. The holistic consultation and the suggested remedy helped restore my emotional resilience. I feel grounded and calm, a genuine sense of inner peace.",
    patientName: "Anu Mittal",
    patientTitle: "Educator, Montessori School",
 imagePath: "/images/ServeImgs/AnuMittal.png",    imageAlt: "Chloe Lee, satisfied patient",
    color: "text-[#8b5e3c]",
    bgColor: "bg-[#f5e6db]",
    icon: MessageSquare,
  },
];

// --- Progress Line Component ---
const ProgressLine = ({ activeId, currentId, onClick }) => {
  const isActive = activeId === currentId;
  return (
    <div
      className="flex items-center cursor-pointer group mb-7 relative"
      onClick={onClick}
    >
      <motion.div
        className="w-1 rounded-full transition-all duration-500 ease-in-out"
        style={{ backgroundColor: isActive ? "#8b5e3c" : "#e7e0d7" }}
        initial={{ height: "3rem" }}
        animate={{ height: isActive ? "4rem" : "3rem" }}
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-1">
        <motion.div
          className={`p-1 rounded-full transition-colors duration-300 ${
            isActive
              ? "bg-[#8b5e3c] scale-110"
              : "bg-[#e7e0d7] group-hover:bg-[#d4c3b0]"
          }`}
          animate={{ scale: isActive ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <div
        className={`ml-4 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${
          isActive ? "text-[#8b5e3c]" : "text-gray-500"
        }`}
      >
        {currentId < 10 ? `0${currentId}` : currentId}
      </div>
    </div>
  );
};

// --- Main Component ---
export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeTestimonial = useMemo(
    () => testimonials.find((t) => t.id === activeIndex),
    [activeIndex]
  );

  const autoAdvance = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex % testimonials.length) + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(autoAdvance, 7000);
    return () => clearInterval(timer);
  }, [autoAdvance]);

  if (!activeTestimonial) return null;

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-28 font-inter overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/Backgrounds/ReviewedBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Background Accent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f5e6db] rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#8b5e3c] mb-3">
            Patient Stories
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-[#3b2f2f] dark:text-zinc-100">
            <span className="relative inline-block">
              Real Transformations
              <svg
                className="absolute bottom-0 right-0 h-4 w-full text-[#f1b52b]/50 -translate-y-1"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0,10 C30,15 70,5 100,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            .
          </p>
        </motion.div>

        {/* Main Content Flex */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start p-6 md:p-12 rounded-[40px] shadow-2xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700">
          {/* Left Image */}
          <motion.div className="w-full lg:w-5/12 relative max-w-md lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative w-full aspect-[4/5] rounded-[30px] shadow-2xl overflow-hidden ${activeTestimonial.bgColor}`}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* <Image src={activeTestimonial.imagePath} alt={activeTestimonial.imageAlt} className="object-cover w-full h-full" /> */}
                  <img
                    src={activeTestimonial.imagePath}
                    alt={activeTestimonial.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg">
                  <Quote className="h-6 w-6 text-[#8b5e3c]" strokeWidth={1.5} />
                </div>

                {/* Patient Name/Title */}
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-xl font-bold">{activeTestimonial.patientName}</p>
                  <p className="text-sm font-light opacity-80">{activeTestimonial.patientTitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12 flex gap-6 md:gap-8">
            {/* Progress Line */}
            <motion.div className="flex flex-col justify-start pt-10">
              {testimonials.map((t) => (
                <ProgressLine
                  key={t.id}
                  activeId={activeIndex}
                  currentId={t.id}
                  onClick={() => setActiveIndex(t.id)}
                />
              ))}
            </motion.div>

            {/* Testimonial Text */}
            <motion.div className="flex-1 pt-8">
              <AnimatePresence mode="wait">
                {activeTestimonial && (
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 mr-1 ${activeTestimonial.color}`}
                          fill={activeTestimonial.color.replace("text-", "#").replace("]", "").replace("[", "")}
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Quote Main */}
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-5 text-[#3b2f2f] dark:text-zinc-100">
                      “{activeTestimonial.quoteMain}”
                    </h2>

                    {/* Quote Body */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic border-l-4 border-[#8b5e3c] pl-4">
                      {activeTestimonial.quoteBody}
                    </p>

                    {/* Icon Label */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <activeTestimonial.icon className="h-5 w-5 text-[#8b5e3c]" />
                      <span>Holistic Healing Approach</span>
                    </div>
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
