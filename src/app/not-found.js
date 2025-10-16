'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

// --- Local Mock Button Component (with GIF-like rounded corners) ---
const Button = ({ children, className, ...props }) => (
    <button
        // Added 'rounded-full' for extreme roundness and 'shadow-lg' for depth,
        // matching the visual style requested.
        className={`inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background 
        rounded-full shadow-lg hover:shadow-xl active:shadow-md 
        ${className}`}
        {...props}
    >
        {children}
    </button>
);
// --- End Mock Button Component ---

export default function NotFoundPage() {
    // Theme colors: Brown/Orange (#8b5e3c) and Cream/Off-White (#fdfcfc)
    const primaryColor = '#8b5e3c'; // Brown/Terra Cotta for strong elements
    const secondaryColor = '#fdfcfc'; // Background/Cream
    const textColor = '#3b2f2f'; // Dark Brown text

    // New Illustration: Character stuck in nature's "wires" (vines/vines)
    // This theme is consistent with the Homeopathy/Nature concept.
    const LostHomieIllustration = () => (
        <svg 
            className="w-full max-w-sm h-auto mx-auto mb-10" 
            viewBox="0 0 500 350" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Blob/Shape - Soft, calming base */}
            <path d="M480 180C450 280 300 350 250 350C200 350 50 280 20 180C-10 80 100 0 250 0C400 0 510 80 480 180Z" fill="#FFF8F3"/>

            {/* Main Character - Earthy Tones */}
            <g id="Character">
                {/* Body (Brown shirt) */}
                <rect x="235" y="160" width="30" height="60" rx="10" fill="#a07c5e"/>
                {/* Pants/Lower Body */}
                <rect x="235" y="220" width="30" height="40" fill="#6b4a36"/> 
                {/* Head (Skin tone: Creamy/Pale) */}
                <circle cx="250" cy="150" r="25" fill="#fce4c4"/>
                {/* Hair/Beard (Dark Brown) */}
                <path d="M230 135C230 120 270 120 270 135V150H230V135Z" fill="#3b2f2f"/>
                {/* Hands (Waving/Confused gesture - one hand up, one holding a vine) */}
                <circle cx="270" cy="170" r="7" fill="#fce4c4"/> {/* Right Hand */}
                <path d="M277 170 L285 150 L295 160 L287 180 Z" fill="#fce4c4"/> {/* Right Arm Waving */}
                <circle cx="230" cy="200" r="7" fill="#fce4c4"/> {/* Left Hand - holding vine */}
            </g>

            {/* "Wire/Vine" Elements - Representing a tangled situation */}
            <g id="Vines" stroke="#4a934a" strokeWidth="5" fill="none">
                {/* Vine 1 (Tangled near the character) */}
                <path d="M150 280 C200 200 230 200 250 210 C270 220 300 180 350 250"/>
                {/* Vine 2 (Crossing) */}
                <path d="M100 200 C200 150 300 150 400 200" stroke="#8b5e3c"/>
                {/* Leaf accents (Small lost pieces/errors) */}
                <circle cx="120" cy="200" r="5" fill="#5c8a5c" stroke="none"/>
                <circle cx="380" cy="180" r="5" fill="#5c8a5c" stroke="none"/>
                <circle cx="250" cy="50" r="8" fill="#8b5e3c" stroke="none" opacity="0.6"/>
            </g>
            
            {/* Small animated element (Pulsing leaf) to mimic the GIF's movement */}
            <style>
                {`
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    .pulsing-leaf {
                        animation: pulse 2s infinite ease-in-out;
                        transform-origin: center center;
                    }
                `}
            </style>
            <path 
                d="M400 270 L410 260 L400 250 L390 260 Z" 
                fill="#5c8a5c" 
                className="pulsing-leaf"
            />
        </svg>
    );

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center" 
            style={{ backgroundColor: secondaryColor, color: textColor }}
        >
            <div className="max-w-xl w-full p-8 md:p-12 rounded-3xl shadow-2xl" 
                style={{ backgroundColor: '#ffffff', border: `1px solid ${primaryColor}20` }}
            >
                
                {/* 404 Header (Similar font style to the GIF's bold text) */}
                <h1 className="text-9xl md:text-[150px] font-extrabold mb-4" style={{ color: primaryColor, opacity: 0.85 }}>
                    404
                </h1>

                <LostHomieIllustration /> {/* Replaced old illustration */}
                
                {/* Main Message (Look like you're lost) */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: textColor }}>
                    Lagta hai Aap Rasta Bhatak Gaye Hain.
                </h2>
                
                {/* Subtext */}
                {/* FIXED: The original error was likely due to an unescaped single quote in a previous version of the text,
                    but the current text is clean. This replacement is purely for safety/demonstration. */}
                <p className="text-lg text-gray-600 mb-10 max-w-sm mx-auto">
                    Kripya dhyaan dein, jis page ki aap talash kar rahe hain woh ab maujood nahi hai. Hum rasste dhoondh rahe hain!
                </p>

                {/* Go to Home Button (Curved and themed) */}
                <Button
                    onClick={() => window.location.href = '/'} // Redirects to the homepage
                    className="px-8 py-3 text-lg font-semibold tracking-wider transition-all duration-200"
                    style={{ 
                        backgroundColor: primaryColor, 
                        color: 'white', 
                        boxShadow: `0 4px 10px ${primaryColor}40`,
                    }}
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Home Page Par Wapas Jaaein
                </Button>

            </div>
            
            {/* Optional Footer/Branding */}
            <p className="mt-12 text-gray-500 text-sm">
                Healing through nature&apos;s wisdom.
            </p>
        </div>
    );
}
