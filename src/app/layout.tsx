import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulse - Fitness & AI Insights",
  description: "Track workouts, Connect apps and get smart summaries",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <Navbar />
        <main className="min-h[calc(100dvh-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}