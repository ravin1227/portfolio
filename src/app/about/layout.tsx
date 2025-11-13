import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Ravindra Verma - Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies. Discover my journey, skills, and passion for building exceptional web experiences.',
  openGraph: {
    title: 'About Ravindra Verma | Full-Stack Developer',
    description: 'Learn more about Ravindra Verma - Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://ravindraverma.tech/about',
  },
  twitter: {
    title: 'About Ravindra Verma | Full-Stack Developer',
    description: 'Learn more about Ravindra Verma - Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies.',
  },
  alternates: {
    canonical: 'https://ravindraverma.tech/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
