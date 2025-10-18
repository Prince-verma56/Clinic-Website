"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, Leaf, Quote, HeartHandshake, MessageSquare } from "lucide-react";

/**
 * TestimonialsSection — optimized version
 *
 * Notes:
 * - Put your images under /public/images/ServeImgs/ with the same filenames you provided.
 * - Change timing, sizing, or colors via the constants below.
 * - This component respects `prefers-reduced-motion` and will disable float/auto-advance if the user prefers reduced motion.
 */

/* =========================
   Configuration (easy to tweak)
   ========================= */
const AUTO_ADVANCE_MS = 7000; // auto advance delay
const TRANSITION_DURATION = 0.45; // base transition for fades
const IMAGE_ASPECT_RATIO_CLASS = "aspect-[4/5]"; // container aspect ratio for image box

/* =========================
   Testimonials data
   Keep your imagePath values; each entry has a colorHex used for stars / accents.
   ========================= */
const TESTIMONIALS = [
  {
    id: 1,
    quoteMain: "Felt a true connection to myself",
    quoteBody:
      "After years of struggling with chronic fatigue, the individualized homeopathic treatment addressed the root cause. I now feel energetic and completely balanced, something conventional medicine couldn't achieve.",
    patientName: "Anya Sharma",
    patientTitle: "Creative Director, Digital Wellness Studio",
    imagePath: "/images/ServeImgs/AnyaSharma.png",
    imageAlt: "Anya Sharma, satisfied patient",
    colorHex: "#f1b52b",
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
    colorHex: "#4CAF50",
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
    imagePath: "/images/ServeImgs/AnuMittal.png",
    imageAlt: "Anu Mittal, satisfied patient",
    colorHex: "#8b5e3c",
    bgColor: "bg-[#f5e6db]",
    icon: MessageSquare,
  },
];

/* =========================
   Small helper components
   ========================= */

// Progress item — memoized for performance
const ProgressItem = React.memo(function ProgressItem({ isActive, index, onClick }) {
  const label = index < 10 ? `0${index}` : `${index}`;
  return (
    <button
      aria-pressed={isActive}
      onClick={onClick}
      className="flex items-center group mb-7 relative focus:outline-none"
      title={`Go to testimonial ${label}`}
    >
      <motion.div
        className="w-1 rounded-full"
        style={{ backgroundColor: isActive ? "#8b5e3c" : "#e7e0d7" }}
        initial={{ height: "3rem" }}
        animate={{ height: isActive ? "4rem" : "3rem" }}
        transition={{ duration: 0.35 }}
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-1">
        <motion.div
          className={`p-1 rounded-full ${isActive ? "bg-[#8b5e3c]" : "bg-[#e7e0d7] group-hover:bg-[#d4c3b0]"}`}
          animate={{ scale: isActive ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </div>

      <div className={`ml-4 text-sm font-semibold uppercase tracking-wider hidden sm:block ${isActive ? "text-[#8b5e3c]" : "text-gray-500"}`}>
        {label}
      </div>
    </button>
  );
});

/* =========================
   Main component
   ========================= */
export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(TESTIMONIALS[0]?.id ?? 1);
  const activeTestimonial = useMemo(
    () => TESTIMONIALS.find((t) => t.id === activeIndex) || TESTIMONIALS[0],
    [activeIndex]
  );

  // Auto-advance (disabled if user prefers reduced motion)
  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const idx = TESTIMONIALS.findIndex((t) => t.id === prev);
        const next = (idx + 1) % TESTIMONIALS.length;
        return TESTIMONIALS[next].id;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  // click handler memoized
  const handleSelect = useCallback((id) => setActiveIndex(id), []);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-28 font-inter overflow-hidden"
      style={{
        backgroundImage: "url('/images/Backgrounds/ReviewedBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Soft accent behind content */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f5e6db] rounded-full blur-3xl opacity-30 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center" aria-hidden={false}>
          <h3 id="testimonials-label" className="text-sm font-bold uppercase tracking-widest text-[#8b5e3c] mb-3">
            Patient Stories
          </h3>
          <p id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold text-[#3b2f2f]">
            <span className="relative inline-block">
              Real Transformations
              <svg
                className="absolute bottom-0 right-0 h-4 w-full text-[#f1b52b]/50 -translate-y-1"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,10 C30,15 70,5 100,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            .
          </p>
        </div>

        {/* Main content card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start p-6 md:p-12 rounded-[40px] shadow-2xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700">
          {/* Left: Image / visual */}
          <div className="w-full lg:w-5/12 relative max-w-md lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: TRANSITION_DURATION }}
                className={`relative w-full ${IMAGE_ASPECT_RATIO_CLASS} rounded-[30px] overflow-hidden shadow-2xl ${activeTestimonial.bgColor}`}
                aria-live="polite"
              >
                {/* Image container (next/image) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={activeTestimonial.imagePath}
                    alt={activeTestimonial.imageAlt}
                    fill
                    sizes="(max-width: 768px) 360px, (max-width: 1024px) 480px, 640px"
                    className="object-cover"
                    priority={false} // non-critical image, lazy by default
                  />
                </div>

                {/* gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />

                {/* Quote icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg">
                  <Quote className="h-6 w-6 text-[#8b5e3c]" strokeWidth={1.5} />
                </div>

                {/* name + title */}
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-xl font-bold">{activeTestimonial.patientName}</p>
                  <p className="text-sm font-light opacity-80">{activeTestimonial.patientTitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: progress + quote */}
          <div className="w-full lg:w-7/12 flex gap-6 md:gap-8">
            {/* progress column */}
            <div className="flex flex-col justify-start pt-10" aria-hidden="false">
              {TESTIMONIALS.map((t) => (
                <ProgressItem
                  key={t.id}
                  isActive={t.id === activeIndex}
                  index={t.id}
                  onClick={() => handleSelect(t.id)}
                />
              ))}
            </div>

            {/* text area */}
            <div className="flex-1 pt-8">
              <AnimatePresence mode="wait">
                {activeTestimonial && (
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: TRANSITION_DURATION }}
                  >
                    {/* stars */}
                    <div className="flex mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 mr-1"
                          fill={activeTestimonial.colorHex}
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* headline */}
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-5 text-[#3b2f2f]">
                      “{activeTestimonial.quoteMain}”
                    </h2>

                    {/* body */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic border-l-4 border-[#8b5e3c] pl-4">
                      {activeTestimonial.quoteBody}
                    </p>

                    {/* small label with icon */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <activeTestimonial.icon className="h-5 w-5 text-[#8b5e3c]" />
                      <span>Holistic Healing Approach</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
