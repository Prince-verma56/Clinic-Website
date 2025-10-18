"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Holistic Consultations",
    description:
      "Personalized plans addressing your unique physical, mental, and emotional needs.",
    imageSrc: "/images/Doctor-pateint.png",
    accentColor: "text-[#8b5e3c]",
    borderColor: "border-[#f5e6db]",
  },
  {
    id: 2,
    title: "Gentle Remedies",
    description:
      "Natural, non-toxic preparations tailored to stimulate your body's healing.",
    imageSrc: "/images/Nature-Envir.png",
    accentColor: "text-[#4CAF50]",
    borderColor: "border-[#e8fff1]",
  },
  {
    id: 3,
    title: "Chronic Care Support",
    description:
      "Long-term guidance for conditions like allergies, anxiety, and digestive issues.",
    imageSrc: "/images/Soulful-Treat.png",
    accentColor: "text-[#8b5e3c]",
    borderColor: "border-[#f2edff]",
  },
  {
    id: 4,
    title: "Wellness Education",
    description:
      "Empowering you with knowledge for sustainable health and preventive care.",
    imageSrc: "/images/Wellness.png",
    accentColor: "text-[#f1b52b]",
    borderColor: "border-[#fff7e6]",
  },
];

export  function FeaturedServices() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // clear any previous triggers (useful in HMR)
    ScrollTrigger.getAll().forEach((t) => t.kill(true));

    // timeline controls header then cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 80%",    // enter when top of section hits 80% of viewport
        end: "bottom 40%",   // optional end
        toggleActions: "play none none reverse",
        // markers: true, // uncomment for debugging
      },
    });

    // header: fade + up
    tl.from(root.querySelectorAll(".fs-header"), {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
    });

    // cards: scale & rise with nice easing and slight overlap
    tl.from(
      root.querySelectorAll(".fs-card"),
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: "expo.out",
        stagger: { each: 0.16, from: "start" },
      },
      "-=0.25"
    );

    // small 3D settle (very subtle) to give a tactile feel
    tl.to(
      root.querySelectorAll(".fs-card"),
      {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "sine.out",
      },
      "-=0.6"
    );

    return () => {
      // cleanup
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill(true));
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="featured-services"
      className="bg-[#fcfaf7] dark:bg-neutral-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="fs-header inline-block px-4 py-2 rounded-full text-sm font-medium text-[#6b4a36] bg-[#f5e6db] mb-4">
            PEACEFUL BEGINNING
          </p>

          <h2 className="fs-header text-3xl sm:text-4xl md:text-5xl font-extrabold font-ubuntu leading-tight text-[#3b2f2f] mb-4">
            Embrace your <span className="text-[#8b5e3c]">inner harmony</span>
          </h2>

          <p className="fs-header text-lg text-gray-700 dark:text-gray-300">
            Discover a balanced approach to wellness with personalized care and natural solutions.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((f) => (
            <article
              key={f.id}
              className="fs-card text-center group transform-gpu will-change-transform"
              aria-labelledby={`fs-title-${f.id}`}
            >
              <div
                className={`relative mx-auto mb-6 rounded-full border-[3px] ${f.borderColor} flex items-center justify-center overflow-hidden`}
                style={{ width: 112, height: 112, minWidth: 112, minHeight: 112 }}
              >
                <Image
                  src={f.imageSrc}
                  alt={f.title}
                  fill
                  className="object-cover pointer-events-none rounded-full"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 112px"
                  priority
                />
              </div>

              <h3 id={`fs-title-${f.id}`} className={`text-xl font-bold font-ubuntu mb-2 ${f.accentColor}`}>
                {f.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 max-w-[280px] mx-auto">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
