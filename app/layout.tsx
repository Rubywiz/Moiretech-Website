import type { Metadata } from "next";
import { Orbitron, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIConcierge from "@/components/AIConcierge";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moire Tech | Consultancy. Dev Solutions. Real Impact.",
  description: "Where Code Meets Defence. Tech Development, Cybersecurity Training, and In-House Products for the future.",
  keywords: ["tech development", "cybersecurity training", "software solutions", "AI", "defence tech", "consultancy"],
  authors: [{ name: "Moire Tech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moire.tech",
    title: "Moire Tech | Consultancy. Dev Solutions. Real Impact.",
    description: "Where Code Meets Defence. Tech Development, Cybersecurity Training, and In-House Products.",
    siteName: "Moire Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moire Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moire Tech | Consultancy. Dev Solutions. Real Impact.",
    description: "Where Code Meets Defence. Tech Development, Cybersecurity Training, and In-House Products.",
    images: ["/og-image.png"],
    creator: "@moiretech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${dmSans.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="bg-brand-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AIConcierge />
      </body>
    </html>
  );
}
