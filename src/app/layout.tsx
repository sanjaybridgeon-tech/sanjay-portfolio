import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjay A | Full Stack Developer Portfolio",
  description: "B.Tech graduate in ECE and Full Stack Developer intern at Bridgeon, specializing in React and Java development.",
};

import ParticleBackground from "../components/ParticleBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
