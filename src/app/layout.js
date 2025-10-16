import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Garg Homoeo Clinic - Dr. Devesh Kumar Garg | Vrindavan",
  description:
    "Garg Homoeo Clinic, run by Dr. Devesh Kumar Garg, offers trusted and effective homoeopathic treatments in Vrindavan, Uttar Pradesh. Visit us for holistic and safe healthcare solutions.",
  icons: {
    // Serve the favicon that's inside public/images
    icon: "/images/icons/HealPointLogo.png",
    shortcut: "/images/icons/HealPointLogo.png",
    apple: "/images/icons/HealPointLogo.png",
  },
  keywords: [
    "Garg Homoeo Clinic",
    "Dr Devesh Kumar Garg",
    "Homoeopathy in Vrindavan",
    "Homoeopathic Doctor Vrindavan",
    "Best Homeopathy Clinic in Vrindavan",
    "Homeopathic medicine Vrindavan",
    "Gurukul Road Clinic",
    "Natural healing Vrindavan",
  ],
  authors: [{ name: "Dr. Devesh Kumar Garg", email: "dr.deveshgaeg@gmail.com" }],
  creator: "Dr. Devesh Kumar Garg",
  publisher: "Garg Homoeo Clinic",
  metadataBase: new URL("https://garg-homoeo-clinic.vercel.app"), // change this to your real domain later
  openGraph: {
    title: "Garg Homoeo Clinic - Trusted Homoeopathy in Vrindavan",
    description:
      "Providing quality homoeopathic treatments under the care of Dr. Devesh Kumar Garg in Vrindavan, Uttar Pradesh.",
    url: "https://garg-homoeo-clinic.vercel.app",
    siteName: "Garg Homoeo Clinic",
    images: [
      {
        url: "/clinic-banner.jpg", // replace with your actual image in /public
        width: 1200,
        height: 630,
        alt: "Garg Homoeo Clinic Vrindavan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // icons are defined above (pointing to /images)
  alternates: {
    canonical: "https://garg-homoeo-clinic.vercel.app",
  },
  other: {
    "clinic:name": "Garg Homoeo Clinic",
    "clinic:owner": "Dr. Devesh Kumar Garg",
    "clinic:address":
      "Out of Andhvidhyalay, Gurukul Road, Vrindavan, Uttar Pradesh 281122",
    "clinic:contact": "6396664765",
    "clinic:email": "dr.deveshgaeg@gmail.com",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScroll />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
