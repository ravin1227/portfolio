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
  metadataBase: new URL('https://ravindraverma.tech'),
  title: {
    default: "Ravindra Verma | Full-Stack Developer & Software Engineer",
    template: "Ravindra | %s",
  },
  description: "Full-stack developer passionate about creating dynamic web experiences. Specialized in React, Next.js, Node.js, and modern web technologies. Building scalable applications with clean code.",
  keywords: ["Ravindra Verma", "Full-Stack Developer", "Software Engineer", "React Developer", "Next.js", "Node.js", "Web Development", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Ravindra Verma", url: "https://ravindraverma.tech" }],
  creator: "Ravindra Verma",
  publisher: "Ravindra Verma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ravindraverma.tech',
    siteName: 'Ravindra Verma',
    title: 'Ravindra Verma | Full-Stack Developer & Software Engineer',
    description: 'Full-stack developer passionate about creating dynamic web experiences. Specialized in React, Next.js, Node.js, and modern web technologies.',
    images: [
      {
        url: '/assets/logos/ChatGPT Image Nov 1, 2025, 03_11_05 PM-Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'Ravindra Verma - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravindra Verma | Full-Stack Developer & Software Engineer',
    description: 'Full-stack developer passionate about creating dynamic web experiences. Specialized in React, Next.js, Node.js, and modern web technologies.',
    images: ['/assets/logos/ChatGPT Image Nov 1, 2025, 03_11_05 PM-Photoroom.png'],
    creator: '@ravindraverma',
  },
  alternates: {
    canonical: 'https://ravindraverma.tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ravindra Verma',
    url: 'https://ravindraverma.tech',
    image: 'https://ravindraverma.tech/assets/logos/ChatGPT Image Nov 1, 2025, 03_11_05 PM-Photoroom.png',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack developer passionate about creating dynamic web experiences. Specialized in React, Next.js, Node.js, and modern web technologies.',
    sameAs: [
      'https://github.com/ravin1227',
      'https://www.linkedin.com/in/ravindraverma',
      'https://twitter.com/ravindraverma',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Full-Stack Development',
      'Web Development',
      'Software Engineering',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
