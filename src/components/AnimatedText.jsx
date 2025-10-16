"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * Simple fade + slide-up animated text using Framer Motion.
 * Perfect for hero headings or section titles.
 */
export function AnimatedText({ text, className }) {
  // Split the text into characters for a staggered animation
  const letters = text.split("");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className || ""}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
