"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, MapPin } from "lucide-react";

/**
 * OurCustomers.jsx
 * - Uses only local images under /public/images/testimonials/ (change filenames as needed)
 * - Optimized: Next/Image, lazy-loading, reduced animation on small screens and prefers-reduced-motion
 * - Accessible: aria-labels, meaningful alt text, unique keys
 *
 * NOTE:
 * - Put your testimonial images in: /public/images/testimonials/
 *   e.g. /public/images/testimonials/user1.jpg, user2.jpg ... user8.jpg
 * - If your filenames differ, update the `src` values in the `testimonials` array below.
 */

const testimonials = [
  // Use your local images (examples below). Keep unique `id`s.
  { id: 1, src: "/images/testimonials/user1.jpg", alt: "Patient testimonial 1", pos: "top-4 left-0 md:left-20" },
  { id: 2, src: "/images/testimonials/user2.jpg", alt: "Patient testimonial 2", pos: "top-40 left-10 md:left-56" },
  { id: 3, src: "/images/testimonials/user3.jpg", alt: "Patient testimonial 3", pos: "top-72 left-0 md:left-10" },
  { id: 4, src: "/images/testimonials/user4.jpg", alt: "Patient testimonial 4", pos: "bottom-10 left-32 md:left-72" },
  { id: 5, src: "/images/testimonials/user5.jpg", alt: "Patient testimonial 5", pos: "top-0 right-0 md:right-32" },
  { id: 6, src: "/images/testimonials/user6.jpg", alt: "Patient testimonial 6", pos: "top-36 right-10 md:right-8" },
  { id: 7, src: "/images/testimonials/user7.jpg", alt: "Patient testimonial 7", pos: "top-72 right-0 md:right-40" },
  { id: 8, src: "/images/testimonials/user8.jpg", alt: "Patient testimonial 8", pos: "bottom-10 right-30 md:right-10" },
];

// Subtle float animation variant (respects reduced motion)
const floatVariant = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92, y: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    y: [0, -12, 0],
    transition: {
      delay,
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
});

export default function OurCustomers() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        {/* Testimonials container */}
        <div className="relative h-[700px] w-full max-w-5xl mx-auto mb-16 lg:mb-24">
          {/* Floating images (absolute-positioned) */}
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id} // unique key
              aria-hidden="true"
              className={`pointer-events-none rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 transition-transform hover:scale-105 border border-white/30 dark:border-gray-700/30 ${t.pos} z-${10 + (i % 3)}`}
              initial="initial"
              // disable complex animation for reduced-motion users and on small screens via CSS below
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={floatVariant(i * 0.12)}
            >
              <div className="relative w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-52">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
                  className="object-cover rounded-2xl"
                  priority={false} // lazy by default
                />
              </div>
            </motion.div>
          ))}

          {/* Central Content Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="bg-[#fcfbf9]/95 dark:bg-gray-800/90 p-6 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl max-w-sm md:max-w-xl border border-gray-100 dark:border-gray-700 z-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#8b5e3c] bg-[#f1f1d4] dark:bg-gray-700 rounded-full mb-4">
                Testimonials
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#3b2f2f] dark:text-white mb-3">
                Trusted by leaders
              </h2>

              <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Learn why professionals trust our clinic for consistent, gentle, and effective care.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="/"
                  aria-label="Go to Home"
                  className="inline-flex items-center text-white bg-[#8b5e3c] hover:bg-[#6b4a36] px-5 py-3 rounded-lg font-semibold text-sm shadow-md transition-colors"
                >
                  <Home size={16} className="mr-2" />
                  Home
                </a>

                <a
                  href="/find-us"
                  aria-label="Find Us"
                  className="inline-flex items-center text-[#8b5e3c] bg-white border border-[#8b5e3c] hover:bg-[#f1f1d4] dark:bg-gray-900 dark:text-[#8b5e3c] dark:border-[#8b5e3c] dark:hover:bg-gray-700 px-5 py-3 rounded-lg font-semibold text-sm shadow-md transition-colors"
                >
                  <MapPin size={16} className="mr-2" />
                  Find Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative background elements (desktop-only) */}
        <div className="hidden lg:block" aria-hidden="true">
          <div className="absolute w-24 h-48 bg-[#3b2f2f] dark:bg-[#294c3d] opacity-10 rounded-full blur-3xl -top-20 -left-20 rotate-45" />
          <div className="absolute w-48 h-24 bg-[#f1f1d4] dark:bg-[#8b5e3c] opacity-15 rounded-full blur-3xl -bottom-20 -right-20 -rotate-45" />
        </div>
      </div>

      <style jsx>{`
        /* disable floating animation on small screens and for users who prefer reduced motion */
        @media (max-width: 768px) {
          .pointer-events-none[aria-hidden="true"] {
            transform: translateY(0) !important;
            transition: none !important;
            animation: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pointer-events-none[aria-hidden="true"] {
            transform: translateY(0) !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
