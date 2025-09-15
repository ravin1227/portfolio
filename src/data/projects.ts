// Types
export type ProjectColor = 'pink' | 'blue' | 'teal' | 'purple' | 'emerald';

export interface ProjectImage {
  readonly src: string;
  readonly height: number;
  readonly width: number;
  readonly blurDataURL: string;
}

export interface TechStackItem {
  readonly name: string;
  readonly icon: string;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly shortDes: string;
  readonly des: string;
  readonly desc: string;
  readonly bulletPoints: readonly string[];
  readonly img: ProjectImage;
  readonly color: ProjectColor;
  readonly bulletPointsColor: string;
  readonly techStack: readonly TechStackItem[];
  readonly liveLink: string;
  readonly githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Next Ventures",
    shortDes: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
    des: "NextVentures leverages the latest Next.js 15 capabilities, including background processing using After, faster development via Server Component HMR Cache, and Partial Prerendering for optimal performance. Its clean design creates an ideal space for entrepreneurs to share and explore innovative ideas.",
    desc: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. Built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    bulletPoints: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization."
    ],
    img: {
      src: "/screen1.jpg",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAkA4JaQAAuUt8gAA/vvvFkm0Njg+jBrTz8JkE+/AuIuIkFAA"
    },
    color: "pink",
    bulletPointsColor: "fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Motion.dev", icon: "framer" },
      { name: "Sanity cms", icon: "sanity" },
      { name: "Auth.js", icon: "nextdns" },
      { name: "markdown", icon: "markdown/lightblue" },
      { name: "GROQ", icon: "zod" },
      { name: "Sentry", icon: "sentry/violet" }
    ],
    liveLink: "/projects/next-venture",
    githubLink: "https://github.com/RavindraVerma/Next-Venture"
  },
  {
    id: 1,
    title: "Zenith Minds",
    shortDes: "A platform connecting students and instructors for enhanced learning experiences.",
    des: "ZenithMinds is an innovative educational platform designed to enhance learning for students and instructors. It provides an interactive and accessible environment where students can explore resources and instructors can share their expertise, fostering a global community of collaboration and continuous learning.",
    desc: "An educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
    bulletPoints: [
      "Built with Next.js, React, and TypeScript for scalability.",
      "Styled using Tailwind CSS with animations by Motion.dev.",
      "Used Zustand for state management and Zod for validation.",
      "Integrated MongoDB and RESTful APIs with Node.js and Express.",
      "Designed a user-friendly interface for seamless interactions."
    ],
    img: {
      src: "/screen1.jpg",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACagf/EAB0QAAECBwAAAAAAAAAAAAAAAAMCMQABBAUiUXH/2gAIAQEAAT8AFTCJbjGyktDNrkf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="
    },
    color: "blue",
    bulletPointsColor: "fill-blue-600 text-blue-600 dark:text-blue-400 bg-blue-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Turborepo", icon: "turborepo" },
      { name: "Zod", icon: "zod" },
      { name: "Motion.dev", icon: "framer" },
      { name: "Zustand", icon: "redux" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "NodeJS", icon: "nodedotjs" },
      { name: "ExpressJS", icon: "express/white" },
      { name: "Razorpay", icon: "razorpay/blue" }
    ],
    liveLink: "/projects/zenith-minds",
    githubLink: "https://github.com/RavindraVerma/ZenithMinds"
  },
  {
    id: 2,
    title: "Snippix",
    shortDes: "A platform for creating and sharing code snippets with a clean and intuitive design.",
    des: "Snippix is a platform for creating and sharing code snippets with a clean and intuitive design. It allows you to create, share, and discover code snippets with ease.",
    desc: "A platform for creating and sharing code snippets with a clean and intuitive design that allows users to create, share, and discover code snippets with ease.",
    bulletPoints: [
      "Choose from over 10+ code editor themes (light and dark) and 12+ handpicked monospace fonts.",
      "Automatic syntax highlighting powered by Highlight.js for all major programming languages",
      "Export your snippet as PNG or SVG, copy it to your clipboard, or generate a shareable permalink.",
      "Change font size, background styles, padding, window controls, line numbers,and more — Snippix adapts to your aesthetic.",
      "Drag to resize the snippet container, and use keyboard shortcuts (via react-hotkeys-hook) for a faster workflow."
    ],
    img: {
      src: "/screen1.jpg",
      height: 967,
      width: 1602,
      blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEUECAcsFhBfGjhCER0iIiMmDxlGFw0IEBMTEBQWDgxzHBpZJBdoIl9cGBeAHCtkNhyGPR1+JmH9NreCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXGyREAIAgEsBVQLs/+m3XIK4BNonAA/TFHq+wxbsVX5nHATFVV5AMUsAD7l2fGUgAAAABJRU5ErkJggg=="
    },
    color: "teal",
    bulletPointsColor: "fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Zustand", icon: "redux" },
      { name: "Shadcn", icon: "shadcnui/white" },
      { name: "Highlight.js", icon: "symphony" },
      { name: "react-hotkeys-hook", icon: "react" }
    ],
    liveLink: "/projects/snippix",
    githubLink: "https://github.com/RavindraVerma/Snippix"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    shortDes: "Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
    des: "A personal portfolio that showcases modern web design and user experience. With a sleek layout and smooth animations, it highlights my skills and projects, serving as an inspiring reference for developers and designers. Explore the essence of contemporary web development!",
    desc: "A personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of my skills and projects.",
    bulletPoints: [
      "Integrated PostgreSQL and Prisma for efficient data handling.",
      "Built with Next.js and TypeScript for performance and scalability.",
      "Implemented state management with Zustand and validation using Zod.",
      "Secured authentication with Auth.js for user account management."
    ],
    img: {
      src: "/screen1.jpg",
      height: 702,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAkA4JZQAAuUvfwAA/vy3lePrVF3KNJzCO83e0QEWnj3IPYZAAAA="
    },
    color: "purple",
    bulletPointsColor: "fill-purple-600 text-purple-600 dark:text-purple-400 bg-purple-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "MDX", icon: "mdx/yellow" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Motion.dev", icon: "framer" },
      { name: "Zustand", icon: "redux" },
      { name: "Zod", icon: "zod" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "Auth.js", icon: "nextdns" }
    ],
    liveLink: "/projects/portfolio"
  },
  {
    id: 4,
    title: "StarForge",
    shortDes: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    des: "An AI SaaS landing page that showcases modern UI/UX excellence. With its sleek design and smooth animations, it delivers an engaging user experience and serves as an inspiring reference for developers and designers. Experience the future of web design with StarForge!",
    desc: "An AI SaaS landing page showcasing modern UI/UX excellence. With sleek design and smooth animations, it delivers an engaging user experience and serves as an inspiring reference for developers and designers.",
    bulletPoints: [
      "Built with React and Vite for fast and scalable development.",
      "Designed responsive layouts using Tailwind CSS.",
      "Enhanced user experience with smooth animations using react-just-parallax.",
      "Implemented JavaScript for dynamic interactions and seamless functionality."
    ],
    img: {
      src: "/screen1.jpg",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JZQCdAEO94GJQAD+/A2P/7gwD1PFc6mse22XIWxUdD78Oe0rTfY5FKegAAAA"
    },
    color: "pink",
    bulletPointsColor: "fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "react-just-parallax", icon: "react" },
      { name: "Vercel", icon: "vercel/white" }
    ],
    liveLink: "/projects/star-forge",
    githubLink: "https://github.com/RavindraVerma/Ai-SaaS-LandingPage"
  },
  {
    id: 5,
    title: "FLux Lura",
    shortDes: "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    des: "Unlock your creativity with FluxLura – the ultimate online tool for seamless and free multimedia conversion. Effortlessly transform images, audio, and videos without limits. Start converting today and elevate your content to new heights!",
    desc: "A free online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with ease and elevate your content instantly!",
    bulletPoints: [
      "Developed a multimedia converter using Next.js and TypeScript.",
      "Styled with Tailwind CSS and enhanced with Motion.dev for smooth animations.",
      "Integrated Shadcn UI for consistent and accessible design components.",
      "Leveraged FFmpeg for efficient media processing and conversion.",
      "Created a responsive and intuitive user interface for effortless conversions."
    ],
    img: {
      src: "/screen1.jpg",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACSg//EABcQAAMBAAAAAAAAAAAAAAAAAAATIYH/2gAIAQEAAT8AqtP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="
    },
    color: "emerald",
    bulletPointsColor: "fill-emerald-600 text-emerald-600 dark:text-emerald-400 bg-emerald-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Motion.dev", icon: "framer" },
      { name: "Shadcn", icon: "shadcnui/white" },
      { name: "FFmpeg", icon: "ffmpeg" }
    ],
    liveLink: "/projects/flux-lura",
    githubLink: "https://github.com/RavindraVerma/flux-lura"
  }
];

// Helper functions for project data
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByColor = (color: ProjectColor): Project[] => {
  return projects.filter(project => project.color === color);
};

export const getProjectsWithGithub = (): Project[] => {
  return projects.filter(project => project.githubLink);
};

export const getAllProjectColors = (): ProjectColor[] => {
  return ['pink', 'blue', 'teal', 'purple', 'emerald'] as const;
};

export const getProjectCount = (): number => {
  return projects.length;
};

export const getProjectGradients = (): Record<ProjectColor, string> => {
  return {
    pink: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F9D793 113.5%)",
    blue: "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
    teal: "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
    purple: "linear-gradient(188.62deg, #581C87 49.9%, #7C3AED 81.7%, #A855F7 93.88%, #F9D793 113.5%)",
    emerald: "linear-gradient(188.62deg, #064E3B 49.9%, #10B981 81.7%, #34D399 93.88%, #F9D793 113.5%)"
  } as const;
};

export const getProjectShadows = (): Record<ProjectColor, string> => {
  return {
    pink: "shadow-[0_0_30px_#DB2777]",
    blue: "shadow-[0_0_30px_#2932CB]",
    teal: "shadow-[0_0_30px_#14B8A6]",
    purple: "shadow-[0_0_30px_#7C3AED]",
    emerald: "shadow-[0_0_30px_#10B981]"
  } as const;
};
