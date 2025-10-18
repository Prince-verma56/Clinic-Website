'use client';

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { toast, Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Star,
  Users,
  Award,
  Heart,
  CheckCircle,
  Contact2Icon,
} from 'lucide-react';

import AccordionSection from '@/components/AccordionSection';

// ✅ Accordion Data
const accordionBenefits = [
  {
    title: 'No Side Effects Treatment',
    content:
      'Homeopathy uses natural remedies that work with your body, ensuring gentle and side-effect-free healing.',
  },
  {
    title: 'Root Cause Analysis',
    content:
      'We focus on identifying and treating the underlying cause, not just managing surface-level symptoms.',
  },
  {
    title: 'Natural Healing Process',
    content:
      'The body’s own healing power is stimulated through natural remedies, promoting long-term wellness.',
  },
  {
    title: 'Long Lasting Results',
    content:
      'Our treatments aim for permanent recovery, reducing the chances of recurrence of illness.',
  },
  {
    title: 'Complete Wellness Focus',
    content:
      'We treat the body, mind, and emotions together for complete balance and health.',
  },
  {
    title: 'Affordable Healthcare',
    content:
      'Homeopathic remedies are affordable, making holistic healthcare accessible to everyone.',
  },
];

// ---------- Animation Variants ----------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  },
};

// ---------- API Request ----------
async function sendEmailsViaApi(formData) {
  const response = await fetch('/api/send-emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  if (response.ok && result.success) return result;
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

  const features = useMemo(
    () => [
      {
        icon: <Award className="w-8 h-8" />,
        title: '25+ Years Experience',
        description:
          'Expert homeopathic care with decades of proven results and deep understanding of holistic healing principles.',
        stats: '25+ Years',
        color: 'from-[#8b5e3c] to-[#6b4a36]',
        bgColor: 'bg-[#fdf6e3]',
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: '5000+ Happy Patients',
        description:
          'Trusted by thousands of patients with successful treatments for chronic and acute conditions.',
        stats: '5000+ Patients',
        color: 'from-[#4CAF50] to-[#45a049]',
        bgColor: 'bg-[#f0f9ff]',
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: 'Personalized Care',
        description:
          'Individualized treatment plans tailored to your unique constitution and health requirements.',
        stats: '100% Custom',
        color: 'from-[#f1b52b] to-[#e6a10f]',
        bgColor: 'bg-[#fffaf0]',
      },
    ],
    []
  );

  const shortBenefits = useMemo(
    () => [
      'No Side Effects Treatment',
      'Root Cause Analysis',
      'Natural Healing Process',
      'Long Lasting Results',
      'Complete Wellness Focus',
      'Affordable Healthcare',
    ],
    []
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDateSelect = (date) =>
    setFormData({ ...formData, date: format(date, 'yyyy-MM-dd') });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Name, Email and Message are required!');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendEmailsViaApi(formData);
      toast.success(result.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: '',
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full overflow-hidden">
      <Head>
        <title>Contact | Dr. Devesh Homeopathy Clinic</title>
        <meta
          name="description"
          content="Book your appointment or ask questions at Dr. Devesh Homeopathy Clinic. Natural healing, personalized care, and 25+ years of trusted expertise."
        />
      </Head>

      <Toaster position="top-right" richColors />

      {/* ---------- HERO SECTION ---------- */}
      <motion.section
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/Backgrounds/GreenBgH.png)",
        }}
      >
        <Link href="/" className="absolute top-6 left-6 z-50">
          <Button
            variant="outline"
            className="fixed top-8 left-8 md:top-12 md:left-20 bg-white/80 backdrop-blur-md rounded-full shadow hover:scale-105 transition-transform text-[#3b2f2f]"
          >
            <ArrowLeft size={18} /> Back
          </Button>
        </Link>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Badge className="text-[#8b5e3c] bg-white/90 backdrop-blur-sm shadow px-4 py-2 rounded-full uppercase tracking-wide flex items-center gap-2">
            <Contact2Icon size={16} /> Sampark Karein
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#38040e] mt-6 mb-4 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Appointment Book Karein
          <span className="block bg-gradient-to-r from-[#403d39] to-[#38040e] bg-clip-text text-transparent">
            Ya Sawal Poochein
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed bg-white/10 backdrop-blur-[4px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Humein message bhejein aur hum jald hi aapse sampark karenge.
          <span className="block mt-2 text-[#0e0d0c] font-bold backdrop-blur-2xl rounded-2xl">
            Aapka swagat hai!
          </span>
        </motion.p>
      </motion.section>

      {/* ---------- CONTACT FORM ---------- */}
      <section
        className="relative py-20 bg-gradient-to-br from-[#fcfbf9] to-[#f7f3e9] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Backgrounds/ClockAndCal.png')" }}
      >
        <motion.div
          className="relative max-w-6xl bg-white rounded-3xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {/* Form Left */}
          <motion.article variants={fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f] mb-4">
              Book Your Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Fill the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Poora Naam *" required />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
              <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
              <Textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Apna Sawal ya Samasya Likhein *" required />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer h-14 text-lg font-bold bg-gradient-to-r from-[#8b5e3c] to-[#6b4a36] hover:opacity-90 transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </Button>
            </form>
          </motion.article>

          {/* Calendar Right */}
          <motion.aside
            className="bg-[#fdfaf6] rounded-2xl p-8 shadow-inner border border-[#8b5e3c]/10"
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-[#3b2f2f]">
              Select Date & Time
            </h3>
            <Calendar
              mode="single"
              selected={formData.date ? new Date(formData.date) : undefined}
              onSelect={handleDateSelect}
              className="rounded-xl border border-gray-200 mx-auto"
            />
            <div className="text-center mt-6">
              <h4 className="font-semibold text-gray-700 mb-3">
                Available Time Slots
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['10:00', '12:00', '14:00', '16:00'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: t })}
                    className={`px-4 py-3 rounded-xl border-2 transition-all ${
                      formData.time === t
                        ? 'bg-[#8b5e3c] text-white border-[#8b5e3c]'
                        : 'border-gray-300 hover:border-[#8b5e3c]'
                    }`}
                  >
                    {t === '10:00'
                      ? '10:00 AM'
                      : t === '12:00'
                      ? '12:00 PM'
                      : t === '14:00'
                      ? '2:00 PM'
                      : '4:00 PM'}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="py-20 bg-gradient-to-b from-[#f7f3e9] to-[#fdfaf6]">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <Badge className="mb-4 bg-[#8b5e3c] text-white px-4 py-2 rounded-full">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold text-[#3b2f2f] mb-6">
            Why Trust <span className="text-[#8b5e3c]">Dr. Devesh Kumar Garg</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With decades of expertise in classical homeopathy, we provide healing that addresses root causes while ensuring complete satisfaction.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`p-8 rounded-3xl shadow-xl ${f.bgColor} border border-[#8b5e3c]/10`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center mb-6 text-white`}
              >
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-600 mb-4">{f.description}</p>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow">
                <Star className="w-4 h-4 text-yellow-500" /> <span>{f.stats}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accordion Section */}
        <AccordionSection
          title="Our Treatment"
          subtitle="Discover the holistic advantages of personalized homeopathic care."
          benefits={accordionBenefits}
        />

        {/* Simple Grid Benefits */}
        <motion.div
          className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 mt-16 shadow-xl border border-[#8b5e3c]/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-[#3b2f2f]">
            Our Treatment Benefits
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {shortBenefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#fdf6e3] transition"
              >
                <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
