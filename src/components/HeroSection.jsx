"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

/*
  NOTE: keeping ModelViewer dynamic import in place (lazy) for future use.
  If you want to re-enable the 3D model, uncomment <ModelViewer /> below
  and remove the <Image /> used in its place.
*/
const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-[#8b5e3c]">
      Loading 3D View...
    </div>
  ),
});

export default function HomeopathyHero() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax mouse values (kept — you can still use them elsewhere)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const config = { damping: 25, stiffness: 90 };
  // we won't apply rotate springs to the image (minimal animation)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), config);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), config);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Entrance animations (GSAP)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });

    // safe guards if refs are null
    if (leftRef.current) tl.from(leftRef.current, { x: -60, opacity: 0 });
    if (rightRef.current) tl.from(rightRef.current, { x: 60, opacity: 0 }, "-=0.4");
    if (headingRef.current) {
      const spans = headingRef.current.querySelectorAll("span");
      if (spans.length) tl.from(spans, { y: 60, opacity: 0, stagger: 0.1 }, "-=0.3");
    }
    tl.from(".key-point", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.2");
    if (ctaRef.current) tl.from(ctaRef.current, { y: 40, opacity: 0 }, "-=0.2");
  }, []);

  // key points array (unique keys)
  const keyPoints = [
    { icon: Leaf, text: "100% Natural & Safe Remedies" },
    { icon: Award, text: "25+ Years Healing Experience" },
    { icon: Heart, text: "Personalized Treatment Plans" },
    { icon: Users, text: "5000+ Success Stories" },
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      // using next/image as background is preferred — but keeping your inline fallback for simplicity
      style={{ backgroundImage: "url(/images/Backgrounds/Home.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      className="relative min-h-screen w-full overflow-hidden bg-[#fcfaf7] rounded-4xl shadow-lg"
      aria-label="Homeopathy hero"
    >
      {/* Floating Background Lights (unchanged) */}
      {/* <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-[#8b5e3c]/10 to-[#f1b52b]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#4CAF50]/10 to-[#8b5e3c]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      /> */}

      {/* === Hero Content === */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8 py-20">
        {/* LEFT SIDE */}
        <div ref={leftRef} className="space-y-10">
          <header ref={headingRef} className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
            <span className="block text-gray-900">Natural</span>
            <span className="block bg-gradient-to-r from-[#8b5e3c] via-[#6b4a36] to-[#4CAF50] bg-clip-text text-transparent">Healing</span>
            <span className="block text-gray-900">Journey 🌿</span>
          </header>

          <p className="text-lg text-gray-700 max-w-xl">
            Experience <span className="text-[#8b5e3c] font-semibold">gentle, permanent</span> healing that treats the root, not just the symptom.
          </p>

          {/* Key Points */}
          <ul className="grid gap-4" aria-hidden>
            {keyPoints.map((item) => (
              <li key={item.text} className="key-point flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center shadow-md border border-gray-100 group-hover:shadow-lg transition-all">
                  <item.icon className="w-7 h-7 text-[#8b5e3c]" />
                </div>
                <span className="text-lg font-medium text-gray-800 group-hover:text-[#8b5e3c] transition-colors">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-5 pt-6">
            <Link href="/contact-us" aria-label="Book Free Consultation">
              <Button
                size="lg"
                className="px-10 py-7 text-lg font-semibold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                Book Free Consultation <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/about-me" aria-label="Meet Dr. Specialist">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-semibold border-2 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#f5e6db] transition-colors"
              >
                Meet Dr. Specialist
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE inside circle with minimal floating animation */}
        <div ref={rightRef} className="relative flex justify-center items-center h-[500px]">
          <motion.div
            className="relative w-[450px] h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-[#ffdbc1] via-[#fff9f4] to-[#fef3ea] shadow-2xl border border-[#8b5e3c]/10 flex items-center justify-center"
            // Minimal floating animation — gentle Y movement + tiny scale
            animate={{ y: [0, -12, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden={false}
            role="img"
          >
            {/* 
              Using next/image with fill inside the circular container.
              - object-contain keeps the illustration intact without cropping.
              - priority=true keeps hero visuals crisp for first paint (optional).
              - If you prefer lazy-loading to reduce LCP for slower connections, set priority={false}.
            */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <div className="h-92 w-92 bg-orange-200/50 backdrop-blur-3xl rounded-full flex justify-center items-center">

              <Image
                src="/images/Med2D.png"
                alt="Medical illustration"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 450px"
                priority
                />
                </div>
            </div>

            {/* 
              If you want to re-enable 3D in future:
              
              <ModelViewer />
              
              Notes for 3D usage (kept here):
              - Keep ModelViewer dynamically imported (`ssr: false`) to avoid server errors.
              - Lazy-load heavy assets inside ModelViewer and show a lightweight placeholder.
              - Consider using `Suspense` fallback + small poster image for LCP.
              - Use <ModelViewer /> only on desktop if mobile performance suffers.
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
