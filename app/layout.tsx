import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated Metadata for SEO based on competitor standards
export const metadata: Metadata = {
  title: "LUMORA Relaxation Studio | Luxury Wellness",
  description:
    "Find your inner peace at LUMORA. Experience luxury wellness, massages, and relaxation treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Set the default background to dark grey to match the logo */}
      <body className="min-h-full flex flex-col bg-zinc-900 text-zinc-50">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
