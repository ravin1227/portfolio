import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read articles and insights on web development, JavaScript, React, Next.js, and software engineering best practices by Ravindra Verma. Learn from real-world experiences and technical tutorials.',
  openGraph: {
    title: 'Blog | Ravindra Verma',
    description: 'Read articles and insights on web development, JavaScript, React, Next.js, and software engineering best practices by Ravindra Verma.',
    url: 'https://ravindraverma.tech/blog',
  },
  twitter: {
    title: 'Blog | Ravindra Verma',
    description: 'Read articles and insights on web development, JavaScript, React, Next.js, and software engineering best practices.',
  },
  alternates: {
    canonical: 'https://ravindraverma.tech/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
