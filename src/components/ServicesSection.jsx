"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"; // Shadcn Button component
import { motion } from "framer-motion";

// --- Animation Definitions ---
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="container mx-auto py-16 px-4 md:px-8 lg:py-24 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Image Section */}
        <motion.div
          className="relative flex-shrink-0 w-full max-w-md lg:max-w-xl order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariants}
        >
          <div className="relative w-full aspect-[4/3] bg-[#e8fff1] dark:bg-zinc-800 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Doctor-pateint.png"
              alt="Doctor-patient"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* Right Section: Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left order-1 lg:order-2">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold font-ubuntu leading-tight mb-6 text-[#3b2f2f] dark:text-zinc-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Your path to <span className="text-[#8b5e3c]">Holistic Healing</span> starts here.
            <span className="inline-block align-middle ml-2 text-yellow-500">🌿</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            We provide gentle, natural remedies tailored to your unique constitution, addressing the root cause of illness, not just the symptoms.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            <strong>Our Approach:</strong> Classical Homeopathy focuses on stimulating your body's innate ability to heal, ensuring long-lasting health and vitality.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            transition={{ delay: 0.7 }}
          >
            <Button
              className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300
                         bg-[#8b5e3c] text-white hover:bg-[#6b4a36] focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:ring-offset-2
                         inline-flex items-center group"
              asChild
            >
              <a href="/services" className="flex items-center">
                Explore Our Treatments
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
