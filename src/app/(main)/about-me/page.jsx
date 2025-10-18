"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Globe, Heart, ArrowLeft } from "lucide-react";

const theme = {
    primary: "#8b5e3c", // warm golden brown
    secondary: "#f3efe9",
    accent: "#d8b77a",
    darkText: "#2e2a27",
};

const stats = [
    { icon: Briefcase, label: "Years of Practice", value: 15, suffix: "+" },
    { icon: Users, label: "Happy Patients", value: 8000, suffix: "+" },
    { icon: Globe, label: "Online Consultations", value: 12, suffix: "+" },
    { icon: Heart, label: "Success Rate", value: 97, suffix: "%" },
];

const charAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.03, duration: 0.4, ease: "easeOut" },
    }),
};

export default function AboutDoctor() {
    const heading = "Healing that Begins with Understanding";
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartCount(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="relative w-full py-20 md:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden"
            // style={{ backgroundColor: theme.secondary }}
              style={{ backgroundImage: "url(/images/Backgrounds/BeigeAbout.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}

        >

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-6 left-6"
            >
                <Link href="/" passHref>
                    <Button
                        variant="outline"
                        className="fixed lg:top-12 sm:top-8 lg:left-20 cursor-pointer px-4 flex items-center gap-3 bg-gradient-to-r from-[#f2e8dc] to-[#e5d0b8] text-[#3b2f2f] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-[#e5d0b8] hover:to-[#d8b58f]"
                    >
                        <ArrowLeft size={18} className="text-[#3b2f2f] font-bold" />
                        Back
                    </Button>
                </Link>
            </motion.div>

            {/* Background accents */}
            <div className="absolute top-20 left-1/3 w-40 h-40 bg-[#d7bfa5]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#b08c64]/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Title Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p
                            className="inline-block px-5 py-1.5 rounded-full text-sm font-medium tracking-wider mb-3"
                            style={{
                                backgroundColor: `${theme.primary}15`,
                                color: theme.primary,
                            }}
                        >
                            Dr. Devesh Kumar Garg — Homeopathy Specialist
                        </p>
                    </motion.div>

                    {/* Character-by-character Heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto"
                        style={{
                            color: theme.darkText,
                            lineHeight: "1.2",
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        {heading.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={charAnimation}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.7 }}
                        className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        Dedicated to restoring health through personalized and natural
                        homeopathic care — treating the root, not just the symptoms.
                    </motion.p>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="space-y-8 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <h4 className="uppercase text-lg font-bold tracking-wider mb-1 text-gray-700">
                                Holistic Healing Approach
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Focusing on mind-body balance, Dr. Garg provides treatments that
                                enhance natural immunity and long-term wellness.
                            </p>
                        </div>

                        <div>
                            <h4 className="uppercase text-md font-bold tracking-wider mb-1 text-gray-700">
                                Trusted Worldwide
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Thousands of patients from India and abroad rely on our
                                homeopathic consultations for holistic healing and better life
                                quality.
                            </p>
                        </div>

                        <div>
                            <h4 className="uppercase text-sm font-semibold tracking-wider mb-1 text-gray-700">
                                Personalized Care
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Each treatment plan is uniquely designed after a detailed
                                evaluation of symptoms, lifestyle, and emotional health.
                            </p>
                        </div>

                        <div className="pt-6">
                            <Link href="/contact-us">
                                <Button
                                    className="text-white font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
                                    style={{ backgroundColor: theme.primary }}
                                >
                                    Book a Consultation
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* CENTER - Doctor Image */}
                    <motion.div
                        className="relative flex justify-center order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Card className="p-4 md:p-6 shadow-2xl rounded-[2.5rem] border border-gray-200 bg-white">
                            <div className="overflow-hidden rounded-[3rem] border-[6px] border-[#f1e7d6] aspect-[3/4] flex items-center justify-center">
                                <Image
                                    src="/images/UpdatedDrDev.jpg"
                                    alt="Dr. Devesh Kumar Garg"
                                    width={420}
                                    height={520}
                                    className="object-cover w-full h-full rounded-[2.8rem] transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <CardContent className="text-center mt-6">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="text-2xl sm:text-3xl font-bold"
                                    style={{ color: theme.darkText }}
                                >
                                    Dr. Devesh Kumar Garg
                                </motion.h2>
                                <p
                                    className="text-sm font-medium tracking-wide"
                                    style={{ color: theme.primary }}
                                >
                                    B.H.M.S
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Healing lives since 2008 · India
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* RIGHT SIDE - Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-6 justify-center order-3"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 + index * 0.15 }}
                                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#cfa774]/50 transition-all"
                            >
                                <stat.icon
                                    className="mb-2"
                                    size={30}
                                    style={{ color: theme.primary }}
                                />
                                <p
                                    className="text-3xl sm:text-4xl font-bold"
                                    style={{ color: theme.darkText }}
                                >
                                    {startCount ? (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.2}
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        "0"
                                    )}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1 text-center">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
