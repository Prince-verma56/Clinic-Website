'use client';
import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const THEME = {
  PRIMARY_ACCENT: '#8b5e3c',
  DARK_TEXT: '#3b2f2f',
  LIGHT_BG: '#f7f3e9',
  CONTENT_BG: '#fdf6e3',
};

// ---------- Framer Motion Variants ----------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
};

// ---------- Memoized Accordion Item ----------
const AccordionItem = memo(({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const contentHeight = isOpen ? (contentRef.current?.scrollHeight || 0) : 0;

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl overflow-hidden border transition-all duration-300 bg-white shadow-sm hover:shadow-md"
    >
      {/* Trigger */}
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full px-6 py-4 text-left group select-none"
      >
        <div className="flex items-center space-x-3">
          <CheckCircle
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? 'text-[#8b5e3c]' : 'text-gray-300 group-hover:text-[#8b5e3c]'
            }`}
          />
          <span
            className={`text-lg font-medium transition-colors duration-300 ${
              isOpen ? 'text-[#8b5e3c]' : 'text-[#3b2f2f]'
            }`}
          >
            {title}
          </span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-[#8b5e3c] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out bg-[#fdf6e3]/70"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div className="px-6 pb-5 text-gray-700">{content}</div>
      </div>
    </motion.div>
  );
});
AccordionItem.displayName = 'AccordionItem';

// ---------- Main Accordion Section ----------
const AccordionSection = ({ title, subtitle, benefits }) => {
  const [openItem, setOpenItem] = useState(null);
  const toggleAccordion = (key) => setOpenItem(openItem === key ? null : key);

  return (
    <section
      className="py-20 px-6 sm:px-10 overflow-hidden"
      style={{ backgroundColor: THEME.LIGHT_BG }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-medium mb-4 bg-[#8b5e3c]">
          Why Choose Us
        </span>
        <h2 className="text-4xl font-bold mb-3 text-[#3b2f2f]">
          {title}{' '}
          <span className="text-[#8b5e3c]">Benefits</span>
        </h2>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4 border border-[#8b5e3c]/10"
      >
        {benefits.map((benefit) => (
          <AccordionItem
            key={benefit.title}
            title={benefit.title}
            content={benefit.content}
            isOpen={openItem === benefit.title}
            onToggle={() => toggleAccordion(benefit.title)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default AccordionSection;
