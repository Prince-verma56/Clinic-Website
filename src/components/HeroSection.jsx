"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Award, Users, Heart } from "lucide-react";
import { Navbar } from "./ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModelViewer from "./ModelViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeopathyHero = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // 🚀 GSAP Timeline Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.from(".navbar", { y: -50, opacity: 0, duration: 0.6 })
      .from(leftRef.current, { x: -80, opacity: 0 }, "-=0.2")
      .from(rightRef.current, { x: 80, opacity: 0, rotateY: 15 }, "-=0.4")
      .from(headingRef.current.querySelectorAll("span"), {
        y: 80,
        opacity: 0,
        rotateX: -90,
        stagger: 0.15,
      }, "-=0.3")
      .from(".key-point", { x: -20, opacity: 0, stagger: 0.1 }, "-=0.3")
      .from(ctaRef.current, { y: 50, opacity: 0, scale: 0.9 }, "-=0.2")
      .from(".scroll-indicator", { y: 30, opacity: 0 }, "-=0.2");

  }, []);

  return (
    <div
      ref={heroRef}
      style={{ backgroundImage: "url(/images/Backgrounds/Home.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}

      className="relative min-h-screen w-full max-w-8xl mx-auto 
      
      bg-gradient-to-br shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
      
       from-[#fcfaf7] via-[#fefdfb] to-[#f9f6f1] overflow-hidden rounded-3xl"
      onMouseMove={handleMouseMove}
    >
      {/* Navbar */}
      {/* <div className="navbar">
        <Navbar />
      </div> */}

      {/* Floating background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-[#8b5e3c]/10 to-[#f1b52b]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#4CAF50]/10 to-[#8b5e3c]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8 py-20">
        {/* LEFT SIDE */}
        <div ref={leftRef} className="space-y-10">
          <div
            ref={headingRef}
            className="text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight font-serif"
          >
            <span className="block text-gray-900">Natural</span>
            <span className="block bg-gradient-to-r from-[#8b5e3c] via-[#6b4a36] to-[#4CAF50] bg-clip-text text-transparent">
              Healing
            </span>
            <span className="block text-gray-900">Journey 🌿</span>
          </div>

          <p className="text-lg text-gray-700 max-w-xl">
            Experience <span className="text-[#8b5e3c] font-semibold">gentle, permanent</span> healing that treats the root, not the symptom.
          </p>

          <div className="grid gap-5">
            {[
              { icon: Leaf, text: "100% Natural & Safe Remedies" },
              { icon: Award, text: "25+ Years Healing Experience" },
              { icon: Heart, text: "Personalized Treatment Plans" },
              { icon: Users, text: "5000+ Success Stories" },
            ].map((item, i) => (
              <div
                key={i}
                className="key-point flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <item.icon className="w-7 h-7 text-[#8b5e3c]" />
                </div>
                <span className="text-lg font-medium text-gray-800 group-hover:text-[#8b5e3c] transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-5 pt-6">
            <Link href="/contact-us" passHref>
              <Button
                size="lg"
                className="px-10 py-7 text-lg font-semibold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] text-white rounded-2xl shadow-2xl"
              >
                Book Free Consultation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about-me" passHref>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-semibold border-2 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#f5e6db]"
              >
                Meet Dr. Specialist
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Model */}
        <div ref={rightRef} className="relative flex justify-center items-center h-[600px]">
          <motion.div
            className="relative w-full max-w-[550px] h-full bg-gradient-to-br from-orange-100 via-[#f5e6db]/20 to-[#fef3ea]/30 rounded-[3rem] overflow-hidden shadow-2xl border border-[#8b5e3c]/10 backdrop-blur-sm"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <ModelViewer />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-2">
        <p className="text-sm font-medium text-[#8b5e3c]">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-[#8b5e3c]/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#8b5e3c] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeopathyHero;
