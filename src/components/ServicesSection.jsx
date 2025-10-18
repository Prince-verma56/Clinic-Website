"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    // --- Timeline Animation Setup ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // starts just before visible
        end: "bottom 20%",
        scrub: 1.2,
        toggleActions: "play none none reverse",
      },
    });

    // --- Animations ---
    tl.fromTo(
      section.querySelector(".image-box"),
      { opacity: 0, y: 100, scale: 0.9, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    )
      .fromTo(
        section.querySelectorAll(".anim-text"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.25,
        },
        "-=1.2"
      )
      .fromTo(
        section.querySelector(".anim-btn"),
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

    // --- Optional: subtle parallax effect ---
    gsap.to(section.querySelector(".image-box img"), {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="container mx-auto py-16 px-4 md:px-8 lg:py-24 
                 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* --- Left Side Image --- */}
        <div className="image-box relative pointer-events-none flex-shrink-0 w-full max-w-md lg:max-w-xl order-2 lg:order-1">
          <div
            className="relative w-full aspect-[4/3] bg-[#e8fff1] dark:bg-zinc-800 
                          flex items-center justify-center rounded-2xl overflow-hidden 
                          shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),
                          _15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),
                          _25px_25px_rgba(0,_98,_90,_0.05)]"
          >
            <Image
              src="/images/Doctor-pateint.png"
              alt="Doctor-patient"
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* --- Right Side Content --- */}
        <div className="flex-1 max-w-2xl text-center lg:text-left order-1 lg:order-2 space-y-6">
          <h2 className="anim-text text-4xl md:text-5xl font-extrabold font-ubuntu leading-tight text-[#3b2f2f] dark:text-zinc-100">
            Your path to{" "}
            <span className="text-[#8b5e3c]">Holistic Healing</span> starts here.
            <span className="inline-block align-middle ml-2 text-yellow-500">🌿</span>
          </h2>

          <p className="anim-text text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            We provide gentle, natural remedies tailored to your unique constitution, addressing the
            root cause of illness, not just the symptoms.
          </p>

          <p className="anim-text text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Our Approach:</strong> Classical Homeopathy focuses on stimulating your body's
            innate ability to heal, ensuring long-lasting health and vitality.
          </p>

          <div className="anim-btn">
            <Button
              className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg 
                         bg-[#8b5e3c] text-white hover:bg-[#6b4a36] 
                         focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:ring-offset-2
                         inline-flex items-center group transition-all duration-300"
              asChild
            >
              <Link href="/services" className="flex items-center">
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
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
