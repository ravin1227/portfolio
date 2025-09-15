import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "A modern developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSans.variable} ${outfit.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="min-h-screen bg-black">
          <Navbar />
          <main>
            {children}
          </main>
          <GetInTouchSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
