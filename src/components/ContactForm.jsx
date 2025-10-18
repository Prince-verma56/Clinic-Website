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
import { ArrowLeft, Star, Clock, Users, Award, Heart, CheckCircle } from 'lucide-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.6
    }
  }
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

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '25+ Years Experience',
      description: 'Expert homeopathic care with decades of proven results and deep understanding of holistic healing principles.',
      stats: '25+ Years',
      color: 'from-[#8b5e3c] to-[#6b4a36]',
      bgColor: 'bg-[#fdf6e3]'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '5000+ Happy Patients',
      description: 'Trusted by thousands of patients with successful treatments for chronic and acute conditions.',
      stats: '5000+ Patients',
      color: 'from-[#4CAF50] to-[#45a049]',
      bgColor: 'bg-[#f0f9ff]'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personalized Care',
      description: 'Individualized treatment plans tailored to your unique constitution and health requirements.',
      stats: '100% Custom',
      color: 'from-[#f1b52b] to-[#e6a10f]',
      bgColor: 'bg-[#fffaf0]'
    }
  ];

  const benefits = [
    "No Side Effects Treatment",
    "Root Cause Analysis",
    "Natural Healing Process",
    "Long Lasting Results",
    "Complete Wellness Focus",
    "Affordable Healthcare"
  ];

  return (
    <div className="w-full">
      {/* ---------- HERO HEADING SECTION ---------- */}
<section
  style={{ backgroundImage: "url(/images/Backgrounds/GreenBgH.png)", backgroundSize: 'cover', backgroundPosition: 'center' , opacity: 0.80}}
  className="relative min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fdf6e3] to-[#f7e9d7] px-6 py-20 overflow-hidden"
>
  <Toaster position="top-right" />
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 z-10"
        >
          <Link href="/" passHref>
            <Button
              variant="outline"
              className=" fixed lg:top-12 sm:top-8 lg:left-20 cursor-pointer px-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm text-[#3b2f2f] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-[#8b5e3c]/20"
            >
              <ArrowLeft size={18} className="text-[#3b2f2f]" />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-10 top-1/4 w-32 h-32 bg-[#8b5e3c]/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-10 bottom-1/4 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-2xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Badge className="uppercase tracking-widest text-sm md:text-base text-[#8b5e3c] bg-white/80 backdrop-blur-sm shadow-md flex items-center gap-2 px-4 py-2 rounded-full">
            <IconMessageCircle size={16} />
            Sampark Karein
          </Badge>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#38040e] leading-tight mb-6 mt-6 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="block">Appointment Book Karein</span>
          <span className="block bg-gradient-to-r from-[#403d39] to-[#38040e] bg-clip-text text-transparent">
            Ya Sawal Poochein
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Humein message bhejein aur hum jald hi aapse sampark karenge.
          <span className="block mt-2 text-[#8b5e3c] font-semibold">Aapka swagat hai!</span>
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#8b5e3c] to-[#4CAF50] rounded-full mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section
        style={{ backgroundImage: "url('/images/Backgrounds/ClockAndCal.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}

        className="relative pointer-events-none min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fcfbf9] to-[#f7f3e9] py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(139,94,60,0.02)_50%,transparent_52%)] bg-[size:50px_50px]" />

        <motion.div
          className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-start backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* LEFT SIDE - FORM DETAILS */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f] mb-4 font-[Poppins]">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 text-lg">
                Fill the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Poora Naam *"
                  required
                  className="h-14 rounded-xl border-gray-200 focus:border-[#8b5e3c] focus:ring-[#8b5e3c]"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="h-14 rounded-xl border-gray-200 focus:border-[#8b5e3c] focus:ring-[#8b5e3c]"
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border-gray-200 focus:border-[#8b5e3c] focus:ring-[#8b5e3c]"
                />
              </div>

              <Textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Apna Sawal ya Samasya Likhein *"
                required
                className="rounded-xl border-gray-200 focus:border-[#8b5e3c] focus:ring-[#8b5e3c] resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] hover:from-[#6b4a36] hover:to-[#8b5e3c] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE - DATE & TIME SELECTION */}
          <div className="bg-gradient-to-br from-[#fdfaf6] to-[#faf5ed] rounded-2xl p-8 shadow-inner border border-[#8b5e3c]/10">
            <h3 className="text-2xl font-bold mb-6 text-[#3b2f2f] text-center">Select Date & Time</h3>
            <div className="space-y-8">
              <Calendar
                mode="single"
                selected={formData.date ? new Date(formData.date) : undefined}
                onSelect={handleDateSelect}
                className="rounded-xl border border-gray-200 mx-auto"
              />

              <div className="text-center">
                <h4 className="font-semibold text-gray-700 mb-4">Available Time Slots</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { time: '10:00', label: '10:00 AM' },
                    { time: '12:00', label: '12:00 PM' },
                    { time: '14:00', label: '2:00 PM' },
                    { time: '16:00', label: '4:00 PM' }
                  ].map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot.time })}
                      className={`px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${formData.time === slot.time
                          ? 'bg-[#8b5e3c] text-white border-[#8b5e3c] shadow-lg scale-105'
                          : 'border-gray-300 text-gray-700 hover:border-[#8b5e3c] hover:bg-[#8b5e3c]/5 hover:scale-105'
                        }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- ENHANCED FEATURES SECTION ---------- */}
      <section className="py-20 bg-gradient-to-b from-[#f7f3e9] to-[#fdfaf6] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#8b5e3c]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-4 bg-[#8b5e3c] text-white px-4 py-2 rounded-full text-sm font-medium">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3b2f2f] mb-6">
              Why Trust <span className="text-[#8b5e3c]">Dr. Devesh Kumar Garg</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With decades of expertise in classical homeopathy, we provide comprehensive healing
              that addresses root causes while ensuring complete patient satisfaction.
            </p>
          </motion.div>

          {/* Enhanced Feature Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-2xl border border-[#8b5e3c]/10 hover:shadow-3xl transition-all duration-500 h-full flex flex-col ${feature.bgColor}`}>

                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#3b2f2f] mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#8b5e3c]/10">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-[#8b5e3c] text-sm">
                        {feature.stats}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#8b5e3c]/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-bold text-center text-[#3b2f2f] mb-8">
              Our Treatment Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fdf6e3] transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}