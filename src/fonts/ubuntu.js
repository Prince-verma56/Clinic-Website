// src/fonts/ubuntu.js
import localFont from 'next/font/local';

export const ubuntu = localFont({
  src: [
    {
      path: './Ubuntu-Light.ttf', // Adjust file names to match yours
      weight: '300',
      style: 'normal',
    },
    {
      path: './Ubuntu-LightItalic.ttf', 
      weight: '300',
      style: 'italic',
    },
    {
      path: './Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Ubuntu-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Ubuntu-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Ubuntu-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Ubuntu-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-ubuntu', 
  display: 'swap',
});