'use client'

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Loader2, MapPin, ZoomIn, Map, Contact, ArrowLeft } from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function FindUs() {
  const clinicAddress = "27°34'24.9\"N 77°41'50.0\"E";
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3536.643458339967!2d77.69463307546259!3d27.57357377625952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM0JzI0LjkiTiA3N8KwNDEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1760371985124!5m2!1sen!2sin`;
  const interactiveEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.643458339967!2d77.69463307546259!3d27.57357377625952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzI0LjkiTiA3N8KwNDEnNTAuMCJF!5e1!3m2!1sen!2sin!4v1760372200000!5m2!1sen!2sin`;

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [address, setAddress] = useState('');
  const [showRealMap, setShowRealMap] = useState(false);

  const getDirections = useCallback(() => {
    const directionUrl = `https://www.google.com/maps/dir/${address || 'Current+Location'}/${clinicAddress}`;
    window.open(directionUrl, '_blank');
  }, [address, clinicAddress]);

  const toggleMapView = () => {
    setIsMapLoaded(false);
    setShowRealMap(prev => !prev);
  };

  const currentMapUrl = showRealMap ? interactiveEmbedUrl : embedUrl;

  return (

    <section
      id="find-us"
      className="relative flex items-center justify-center py-16 px-4 md:px-8 lg:py-24"
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
          className=" fixed top-12 left-20 cursor-pointer px-4 flex items-center gap-3 bg-gradient-to-r from-[#f2e8dc] to-[#e5d0b8] text-[#3b2f2f] font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-[#e5d0b8] hover:to-[#d8b58f]"
        >
          <ArrowLeft size={18} className="text-[#3b2f2f] font-bold" />
          Back
        </Button>
      </Link>
    </motion.div>
      {/* ✅ Fullscreen fixed background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/Backgrounds/Mapping.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* ✅ Content Container */}
      <div className="relative container mx-auto max-w-5xl">

        <div className="text-center mb-10 lg:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8b5e3c] mb-2">
            Humse Milein
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#3b2f2f] dark:text-zinc-100">
            Aapki Agli Sehat Yatra Yahan Shuru Hoti Hai
          </h2>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white/90 dark:bg-zinc-800/90 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center flex-grow p-1">
              <MapPin className="h-5 w-5 text-[#8b5e3c] mr-3 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Apni location daalein (ya khali chhod dein)..."
                className="flex-grow bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-none h-auto p-0 text-base"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') getDirections();
                }}
              />
            </div>
            <Button
              onClick={getDirections}
              className="mt-2 md:mt-0 px-6 py-3 cursor-pointer font-semibold rounded-lg bg-[#8b5e3c] hover:bg-[#6b4a36] transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md flex-shrink-0"
            >
              <Search className="h-5 w-5" />
              <span>Directions Paayein</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <Button
            onClick={toggleMapView}
            className="px-4 py-2 cursor-pointer text-sm font-medium rounded-full border border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white transition-colors duration-300 flex items-center space-x-2 shadow-sm"
            variant="outline" // Using outline variant
          >
            {showRealMap ? (
              <>
                <Map className="h-4 w-4" />
                <span>Simple Embed Map Dekhein</span>
              </>
            ) : (
              <>
                <ZoomIn className="h-4 w-4" />
                <span>Interactive Embed Map Dekhein</span>
              </>
            )}
          </Button>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-[#8b5e3c]/20"
          style={{
            boxShadow: '0 10px 30px rgba(139, 94, 60, 0.2)'
          }}
        >
          {!isMapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-gray-200/80 dark:bg-zinc-900/80">
              <Loader2 className="h-10 w-10 text-[#8b5e3c] animate-spin mb-4" />
              <p className="text-[#3b2f2f] dark:text-zinc-100 font-semibold">
                {showRealMap ? 'Interactive Map Load Ho Raha Hai...' : 'Embed Map Load Ho Raha Hai...'}
              </p>
            </div>
          )}

          <iframe
            key={currentMapUrl}
            src={currentMapUrl}
            className={`w-full h-[40vh] md:h-[60vh] lg:h-[70vh] border-0 transition-opacity duration-700 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={showRealMap ? "Interactive Embedded Google Map View" : "Simple Embedded Clinic Location Map"}
            onLoad={() => setIsMapLoaded(true)}
          ></iframe>
        </div>

      </div>
    </section>

  );
}
