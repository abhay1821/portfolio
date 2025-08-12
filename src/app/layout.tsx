import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhay Chaudhary | Software Developer",
  description: "Portfolio website of Abhay Chaudhary, Software Developer Analyst at Infinitybox with expertise in React, Flutter, and Next.js",
  keywords: ["Abhay Chaudhary", "Software Developer", "React", "Angular", "WebRTC", "Infinitybox", "IIIT Sonepat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
