"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const navItems = [
    { name: "Find Us", href: "/find-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Me", href: "/about-me" },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        ref={ref}
        initial={{ y: -80 }}
        animate={{
          y: visible ? 0 : -80,
          backdropFilter: visible ? "blur(12px)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed top-8 left-0 right-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-transparent bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md dark:bg-neutral-900/70"
        )}
      >
        {/* Left Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Healpoint" width={30} height={30} /> */}
          <span className="font-semibold text-lg text-gray-800 dark:text-white">
            Healpoint
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-black dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <span className="text-gray-300">|</span>
          <select className="bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none">
            <option>EN</option>
            <option>HI</option>
          </select>
        </div>

        {/* Right Button */}
        <Link href="/contact">
          <Button
            variant="default"
            className="hidden rounded-full bg-black px-6 py-2 text-white hover:bg-neutral-800 md:block"
          >
            Get Help?
          </Button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-900 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 transition hover:text-black dark:text-gray-200 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button
                  variant="default"
                  className="rounded-full bg-black text-white hover:bg-neutral-800"
                >
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
