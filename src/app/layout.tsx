import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ravindra",
    template: "Ravindra | %s",
  },
  description: "Full-stack developer passionate about creating dynamic web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairDisplay.variable} ${sourceSansPro.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <GetInTouchSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
