"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { Mail, Loader2, CheckCircle, XCircle, Star } from "lucide-react";

const stats = [
  { target: 48, label: "People enrolled in program", unit: "%" },
  { target: 93, label: "People report benefits", unit: "%" },
];

const AnimatedCounter = ({ from, to, unit }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = (to - from) / steps;
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, from, to]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-extrabold text-white">
      {count}
      <span className="text-3xl font-light align-top ml-1 text-[#8b5e3c]">
        {unit}
      </span>
    </span>
  );
};

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ show: false, type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setSnackbar({ show: false, type: "", text: "" });

    try {
      const res = await fetch("/api/send-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Visitor",
          email,
          phone: "N/A",
          message: "Subscribed via footer newsletter.",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSnackbar({
          show: true,
          type: "success",
          text: "✅ Thank you for subscribing! Email sent successfully.",
        });
        setEmail("");
      } else {
        setSnackbar({
          show: true,
          type: "error",
          text: "❌ Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      console.error("Footer submit error:", error);
      setSnackbar({
        show: true,
        type: "error",
        text: "⚠️ Network or server error.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setSnackbar({ show: false, type: "", text: "" }), 4000);
    }
  };

  const linkClasses =
    "text-gray-400 hover:text-[#8b5e3c] transition duration-300";

  return (
    <>
      {/* Load Lordicon Script */}
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="beforeInteractive"
      />

      <footer className="bg-[#3b2f2f] dark:bg-black text-white pt-16 pb-8 border-t border-[#8b5e3c]/20 relative">
        {/* Snackbar */}
        <AnimatePresence>
          {snackbar.show && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              className={`fixed top-5 left-1/2 -translate-x-1/2 px-5 py-3 rounded-md shadow-lg text-sm font-medium z-50 ${snackbar.type === "success"
                  ? "bg-green-600"
                  : snackbar.type === "error"
                    ? "bg-red-600"
                    : "bg-gray-700"
                }`}
            >
              <div className="flex items-center gap-2">
                {snackbar.type === "success" && <CheckCircle size={18} />}
                {snackbar.type === "error" && <XCircle size={18} />}
                <span>{snackbar.text}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-12 mb-8">
            {/* Brand */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <Star className="h-7 w-7 text-[#8b5e3c] mr-2" fill="#8b5e3c" />
                <span className="text-2xl font-bold font-ubuntu">
                  HealPoint
                </span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Healing the world naturally, one remedy at a time.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <AnimatedCounter
                    from={0}
                    to={stat.target}
                    unit={stat.unit}
                  />
                  <span className="mt-2 text-md font-semibold text-gray-300 border-b-2 border-[#8b5e3c] pb-1 max-w-fit">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-white">
                Subscribe to our wellness newsletter
              </h4>
              <form onSubmit={handleSubmit} className="flex relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-16 py-3 rounded-full bg-[#524444] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#8b5e3c] focus:outline-none transition-colors duration-300"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-[#8b5e3c] hover:bg-[#6b4a36] rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 text-white animate-spin" />
                  ) : (
                    <lord-icon
                      src="https://cdn.lordicon.com/vpbspaec.json"
                      trigger="loop"
                      delay="1500"
                      style={{
                        width: "26px",
                        height: "26px",

                      }}
                    ></lord-icon>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="order-2 md:order-1 mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} HomeoWell. All rights reserved.
            </p>
            <div className="order-1 md:order-2 flex space-x-6">
              <a href="/privacy" className={linkClasses}>
                Privacy Policy
              </a>
              <a href="/terms" className={linkClasses}>
                Terms of Service
              </a>
              <a href="/faq" className={linkClasses}>
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
