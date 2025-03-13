import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hemant Arya Panwar | Software Developer Analyst",
  description: "Portfolio website of Hemant Arya Panwar, Software Developer Analyst at Deloitte with expertise in React, Angular, and WebRTC",
  keywords: ["Hemant Arya Panwar", "Software Developer", "React", "Angular", "WebRTC", "Deloitte", "IIIT Sonepat"],
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
