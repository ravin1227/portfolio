import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Explore Ravindra Verma\'s portfolio of web development projects. View case studies, live demos, and code samples showcasing expertise in React, Next.js, Node.js, and full-stack development.',
  openGraph: {
    title: 'Work & Projects | Ravindra Verma',
    description: 'Explore Ravindra Verma\'s portfolio of web development projects. View case studies, live demos, and code samples showcasing expertise in React, Next.js, and Node.js.',
    url: 'https://ravindraverma.tech/work',
  },
  twitter: {
    title: 'Work & Projects | Ravindra Verma',
    description: 'Explore Ravindra Verma\'s portfolio of web development projects showcasing expertise in React, Next.js, and Node.js.',
  },
  alternates: {
    canonical: 'https://ravindraverma.tech/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
