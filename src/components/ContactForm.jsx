'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';



import { Badge } from '@/components/ui/badge';
import { IconArrowLeft, IconMessageCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03 } }),
};



// API function stays same
async function sendEmailsViaApi(formData) {
  const response = await fetch('/api/send-emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  if (response.ok && result.success) return { success: true, message: result.message };
  throw new Error(result.error || 'Message bhejte samay koi samasya hui.');
}

export default function ContactAndInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleDateSelect = (date) => setFormData({ ...formData, date: format(date, 'yyyy-MM-dd') });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Name, Email and Message are required!');
      setIsSubmitting(false);
      return;
    }
    try {
      const result = await sendEmailsViaApi(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', phone: '', message: '', date: '', time: '' });
      }
    } catch (error) {
      toast.error(error.message || 'Message bhejte samay koi samasya hui.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textAnim = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div className="w-full">
      {/* ---------- HERO HEADING SECTION ---------- */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fdf6e3] to-[#f7e9d7] px-6 py-20 overflow-hidden">
        <Toaster position="top-right" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6"
        >
          <Link href="/" passHref>
            <Button
              variant="outline"
              className="cursor-pointer px-4 flex items-center gap-3 bg-gradient-to-r from-[#f2e8dc] to-[#e5d0b8] text-[#3b2f2f] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-[#e5d0b8] hover:to-[#d8b58f]"
            >
              <ArrowLeft size={18} className="text-[#3b2f2f] font-bold" />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Left SVG */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-20"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 100 100" fill="#f8d5a3">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </motion.div>

        {/* Right SVG */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-20"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 100 100" fill="#f8b463">
            <rect width="100" height="100" rx="20" />
          </svg>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Badge className="uppercase tracking-widest text-sm md:text-base text-[#8b5e3c] bg-[#fff4e0] shadow-md flex items-center gap-2">
            <IconMessageCircle size={16} />
            Sampark Karein
          </Badge>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-[#3b2f2f] leading-snug mb-4 font-[Poppins] mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {'Appointment Book Karein ya Sawal Poochein'
            .split('')
            .map((char, i) => (
              <motion.span
                key={i}
                variants={textAnim}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Humein message bhejein aur hum jald hi aapse sampark karenge. Aapka swagat hai!
        </motion.p>



        {/* Divider */}
        <div className="mt-10 w-24 h-1 bg-[#8b5e3c] rounded-full"></div>
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section
        style={{ backgroundImage: "url('/images/Backgrounds/ClockAndCal.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}

        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fcfbf9] to-[#f7f3e9] py-20 px-4">
        <motion.div
          className="w-full max-w-5xl bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-10 md:p-12 grid md:grid-cols-2 gap-10 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* LEFT SIDE - FORM DETAILS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b2f2f] mb-8 text-center md:text-left font-[Poppins]">
              Book Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Poora Naam *"
                  required
                  className="h-12"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="h-12"
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="h-12"
                />
              </div>

              <Textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Apna Sawal ya Samasya Likhein *"
                required
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-[#8b5e3c] hover:bg-[#6b4a36]"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE - DATE & TIME SELECTION */}
          <div className="bg-[#fdfaf6] dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-inner">
            <h3 className="text-xl font-semibold mb-4 text-[#3b2f2f]">Select Date & Time</h3>
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={formData.date ? new Date(formData.date) : undefined}
                onSelect={handleDateSelect}
                className="rounded-lg border border-gray-300 dark:border-zinc-600"
              />

              <div className="flex justify-center md:justify-start items-center gap-4">
                {['10:00', '12:00', '14:00'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, time })}
                    className={`px-4 py-2 rounded-lg border transition-all ${formData.time === time
                      ? 'bg-[#8b5e3c] text-white border-[#8b5e3c]'
                      : 'border-gray-300 hover:bg-gray-100'
                      }`}
                  >
                    {time === '10:00'
                      ? '10:00 AM'
                      : time === '12:00'
                        ? '12:00 PM'
                        : '2:00 PM'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- DIVIDER BETWEEN FORM & FEATURES ---------- */}
      <div className="h-[100px] w-full bg-gradient-to-b from-[#f7f3e9] to-[#fdfaf6] flex items-center justify-center">
        <div className="w-24 h-1 bg-[#8b5e3c] rounded-full"></div>
      </div>

      {/* ---------- SECTION 2: Features ---------- */}
      <section className="py-20 bg-[#f7f3e9] dark:bg-zinc-900">
        <div className="container mx-auto px-6 md:px-12 text-center space-y-12">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-[#3b2f2f] font-[Poppins]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Why Choose Dr. Devesh Kumar Garg?
          </motion.h2>

          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Providing holistic homeopathic care with years of experience, personalized treatment plans, and a focus on overall wellness.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Experienced Doctor', icon: '🩺' },
              { title: 'Holistic Treatment', icon: '🌿' },
              { title: 'Patient-Centered', icon: '❤️' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.2, duration: 0.6 },
                }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-[#3b2f2f] mb-2 font-[Poppins]">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Detailed explanation about this feature in clinic context.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
