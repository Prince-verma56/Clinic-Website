"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Homeopathy-focused Feature Data ---
const features = [
  {
    id: 1,
    title: "Holistic Consultations",
    description:
      "Personalized plans addressing your unique physical, mental, and emotional needs.",
    imageSrc: "/images/Doctor-pateint.png",
    imageAlt: "A smiling, calm person representing holistic well-being.",
    accentColor: "text-[#8b5e3c]",
    borderColor: "border-[#f5e6db]",
  },
  {
    id: 2,
    title: "Gentle Remedies",
    description:
      "Natural, non-toxic preparations tailored to stimulate your body's healing.",
    imageSrc: "/images/Nature-Envir.png",
    imageAlt: "A person with a warm, joyful expression representing natural remedies.",
    accentColor: "text-[#4CAF50]",
    borderColor: "border-[#e8fff1]",
  },
  {
    id: 3,
    title: "Chronic Care Support",
    description:
      "Long-term guidance for conditions like allergies, anxiety, and digestive issues.",
    imageSrc: "/images/Soulful-Treat.png",
    imageAlt: "A thoughtful person representing supportive care.",
    accentColor: "text-[#8b5e3c]",
    borderColor: "border-[#f2edff]",
  },
  {
    id: 4,
    title: "Wellness Education",
    description:
      "Empowering you with knowledge for sustainable health and preventive care.",
    imageSrc: "/images/Wellness.png",
    imageAlt: "A happy person representing wellness education.",
    accentColor: "text-[#f1b52b]",
    borderColor: "border-[#fff7e6]",
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function FeaturedServices() {
  return (
    <motion.section
      id="featured-services"
      className="bg-[#fcfaf7] dark:bg-neutral-900 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-[#6b4a36] bg-[#f5e6db] mb-4"
            variants={textVariants}
          >
            PEACEFUL BEGINNING
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold font-ubuntu leading-tight text-[#3b2f2f] mb-4"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Embrace your{" "}
            <span className="text-[#8b5e3c]">inner harmony</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Discover a balanced approach to wellness with personalized care and natural solutions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="text-center group"
              variants={itemVariants}
              transition={{ delay: index * 0.15 }}
            >
              {/* Circular Image Container */}
              <motion.div
                className={`relative mx-auto mb-6 rounded-full border-[3px] ${feature.borderColor} flex items-center justify-center overflow-hidden`}
                style={{
                  width: "7rem",
                  height: "7rem",
                  minWidth: "7rem",
                  minHeight: "7rem",
                }}
                whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 112px"
                  priority
                />

                {/* Decorative Elements */}
                {index === 0 && (
                  <div
                    className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#f2edff] opacity-70 blur-sm"
                    aria-hidden="true"
                  />
                )}
                {index === 1 && (
                  <div
                    className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#fff7e6] opacity-70 blur-sm"
                    aria-hidden="true"
                  />
                )}
              </motion.div>

              {/* Title + Description */}
              <h3
                className={`text-xl font-bold font-ubuntu mb-2 ${feature.accentColor}`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-[250px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
