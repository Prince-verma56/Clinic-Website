"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

// Utility functions
const cn = (...classes) => classes.filter(Boolean).join(" ");
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 font-medium transition-colors rounded-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Navbar = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const HIDE_THRESHOLD = 80;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > HIDE_THRESHOLD) setVisible(false);
    else setVisible(true);
  });

  // Nav items
  const navItems = [
    {
      name: "Find Us",
      href: "/find-us",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/onmwuuox.json"
          trigger="loop"
          delay="1000"
          style={{ width: "28px", height: "28px" }}
        ></lord-icon>
      ),
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/vpbspaec.json"
          trigger="loop"
          delay="1500"
          style={{ width: "28px", height: "28px" }}
        ></lord-icon>
      ),
    },
    {
      name: "About Me",
      href: "/about-me",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/bhfjfgqz.json"
          trigger="loop"
          delay="2000"
          style={{ width: "28px", height: "28px" }}
        ></lord-icon>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {/* Load Lordicon Script */}
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />

      <motion.nav
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className={cn(
          "fixed top-6 left-0 right-0 z-50 mx-auto flex max-w-[80vw] md:max-w-7xl items-center justify-between ",
          "border border-neutral-200/50 bg-white/60 px-6 py-3 shadow-xl backdrop-blur-xl rounded-full",
          "dark:bg-neutral-900/40 dark:border-neutral-700/50"
        )}
      >
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/icons/HealPointLogo.png"
            alt="Healpoint"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-lg text-gray-800 dark:text-white">
            Healpoint
          </span>
        </Link>

        {/* --- Desktop Nav --- */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <Link
              key={`${item.name}-desktop`}
              href={item.href}
              className="flex items-center space-x-2 hover:text-[#8b5e3c] transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

          <span className="text-gray-300">|</span>
          <select className="bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none">
            <option>EN</option>
            <option>HI</option>
          </select>
        </div>

        {/* --- Right Button --- */}
        <Link href="/contact" className="hidden md:block">
          <Button className="bg-[#8b5e3c] text-white hover:bg-[#6b4a36]">
            Get Help?
          </Button>
        </Link>

        {/* --- Mobile Toggle --- */}
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- Mobile Drawer --- */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 flex flex-col items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-md dark:bg-neutral-900/70 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={`${item.name}-mobile`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-[#8b5e3c]"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="bg-[#8b5e3c] text-white hover:bg-[#6b4a36]">
                  Get Help?
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
