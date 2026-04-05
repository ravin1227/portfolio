// Types
export type ProjectColor = 'pink' | 'blue' | 'teal' | 'purple' | 'emerald' | 'amber';

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
    title: "MyWiFi Networks",
    shortDes: "A white label WiFi marketing platform for digital agencies & MSPs to capture social data, analyze visitor metrics and automate loyalty marketing.",
    des: "MyWiFi Networks is a comprehensive cloud-based WiFi marketing and analytics platform that helps businesses capture guest data, analyze visitor metrics, and automate loyalty marketing. The platform offers 100% white label solutions for digital agencies, managed service providers, and internet service providers to monetize their clients' guest WiFi networks.",
    desc: "A leading WiFi marketing platform that enables businesses to capture guest data, generate real-time analytics, create custom splash pages, and automate marketing campaigns. Built with a focus on white label solutions for agencies and service providers.",
    bulletPoints: [
      "100% white label platform with custom branding and domain support.",
      "Real-time WiFi analytics with customizable reports and presence analytics for footfall heatmaps.",
      "WYSIWYG campaign editor for creating beautiful guest WiFi splash pages without a designer.",
      "Marketing automation engine with smart connection triggers, email/SMS integration, and webhook support.",
      "GDPR compliant with consent forms, opt-out mechanisms, and data export capabilities.",
      "Multi-language dashboard, portal, and reporting with client access and subuser management."
    ],
    img: {
      src: "/assets/projects/mywifinetworks.png",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAkA4JaQAAuUt8gAA/vvvFkm0Njg+jBrTz8JkE+/AuIuIkFAA"
    },
    color: "blue",
    bulletPointsColor: "fill-blue-600 text-blue-600 dark:text-blue-400 bg-blue-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Laravel", icon: "laravel" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Docker", icon: "docker" }
    ],
    liveLink: "https://www.mywifinetworks.com/"
  },
  {
    id: 1,
    title: "Formester",
    shortDes: "The easiest way to build powerful forms with AI, add logic jumps, and automate. No code. No hassle.",
    des: "Formester is a comprehensive form builder platform that enables users to create interactive forms with AI capabilities, logic jumps, and automation. The platform offers features like custom PDFs, payment processing, collaboration tools, spam protection, and smart analytics. Trusted by over 15,000+ users including major brands like Peabody, Aramark, Loreal, Toptal, and Virgin.",
    desc: "A powerful form builder platform that makes it easy to create interactive forms with AI, logic jumps, and automation. Features include custom PDFs, payments, collaboration, spam protection, and analytics.",
    bulletPoints: [
      "AI-powered form generation and conditional logic for creating interactive forms without coding.",
      "Built-in email & field validation, file uploads, meeting bookings, and e-signature capabilities.",
      "Advanced spam protection with AI detection, email verification, and Turnstile integration.",
      "Capture partial or incomplete entries even if users drop off, with offline form submission support.",
      "Smart analytics with drop-off analysis, GA4 integration, and heatmap tracking for conversion optimization.",
      "Extensive integrations with 50+ tools including CRMs, email platforms, cloud storage, and task management."
    ],
    img: {
      src: "/assets/projects/formester.png",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACagf/EAB0QAAECBwAAAAAAAAAAAAAAAAMCMQABBAUiUXH/2gAIAQEAAT8AFTCJbjGyktDNrkf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="
    },
    color: "teal",
    bulletPointsColor: "fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "AI/ML", icon: "openai" },
      { name: "Google Analytics", icon: "googleanalytics" },
      { name: "Zapier", icon: "zapier" }
    ],
    liveLink: "https://formester.com/"
  },
  {
    id: 2,
    title: "Dailzy",
    shortDes: "A platform connecting users with local helpers for daily tasks, errands, reminders, and services.",
    des: "Dailzy is a community-driven platform that connects users with reliable local helpers to complete daily tasks and errands. The platform facilitates task posting, helper matching, and service delivery, making it easy for users to outsource everyday responsibilities and for helpers to earn income by providing local services.",
    desc: "A platform connecting users with local helpers for daily tasks, errands, reminders, and pet care services, facilitating efficient task completion and local service delivery.",
    bulletPoints: [
      "Task posting and matching system connecting users with reliable local helpers.",
      "Community-driven platform for outsourcing daily errands and tasks efficiently.",
      "Service categories including reminders, pet care, errands, and general assistance.",
      "User-friendly interface for posting tasks and browsing available helpers.",
      "Local service delivery system with secure transaction and communication features.",
      "Flexible platform supporting both task requesters and service providers."
    ],
    img: {
      src: "/assets/projects/dailzy.png",
      height: 753,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JZQCdAEO94GJQAD+/A2P/7gwD1PFc6mse22XIWxUdD78Oe0rTfY5FKegAAAA"
    },
    color: "pink",
    bulletPointsColor: "fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      {name: "Laravel", icon: "laravel"},
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Database", icon: "postgresql" },
      { name: "Docker", icon: "docker" }
    ],
    liveLink: "https://dailzy.com/"
  },
  {
    id: 3,
    title: "DealsOnFire",
    shortDes: "A deals discovery platform where users can post, browse, and vote on the latest deals across various categories.",
    des: "DealsOnFire is a community-driven deals platform that allows users to discover, share, and vote on the best deals available online. The platform features deals across multiple categories including Smart Home, Wearable Technology, and more. Users can post deals, track trending items, and find popular discounts with detailed pricing information.",
    desc: "A community-driven deals platform for discovering, sharing, and voting on the latest deals across various product categories with real-time pricing and discount tracking.",
    bulletPoints: [
      "Community-driven deal sharing platform with user-submitted deals and voting system.",
      "Categorized deal listings including Smart Home, Wearable Technology, and multiple product categories.",
      "Real-time deal tracking with original and discounted pricing information.",
      "Trending and popular deals section to highlight the most valuable offers.",
      "User engagement features including deal voting, comments, and deal posting capabilities.",
      "Clean and intuitive interface for easy deal browsing and discovery."
    ],
    img: {
      src: "/assets/projects/dealsonfire.png",
      height: 967,
      width: 1602,
      blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEUECAcsFhBfGjhCER0iIiMmDxlGFw0IEBMTEBQWDgxzHBpZJBdoIl9cGBeAHCtkNhyGPR1+JmH9NreCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXGyREAIAgEsBVQLs/+m3XIK4BNonAA/TFHq+wxbsVX5nHATFVV5AMUsAD7l2fGUgAAAABJRU5ErkJggg=="
    },
    color: "purple",
    bulletPointsColor: "fill-purple-600 text-purple-600 dark:text-purple-400 bg-purple-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Ruby on Rails", icon: "rubyonrails" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Database", icon: "postgresql" }
    ],
    liveLink: "https://www.dealsonfire.ca/"
  },
  {
    id: 4,
    title: "Rumie Learn",
    shortDes: "Transform your daily screen time into personal development with Byte Learning - learn new concepts in minutes.",
    des: "Rumie Learn is an innovative educational platform that transforms daily screen time into personal development through Byte Learning. Bytes are bite-sized learning modules that allow users to learn new concepts in minutes, making them 20% more efficient than traditional learning. The platform features a wide range of topics including Career Skills, Health, Business Acumen, Digital Literacies, and more, with new Bytes published daily.",
    desc: "An educational platform that transforms screen time into personal development through Byte Learning - bite-sized, efficient learning modules covering career skills, health, business, and more.",
    bulletPoints: [
      "Byte Learning format allows users to learn new concepts in minutes, 20% more efficient than traditional learning.",
      "Daily publication of new Bytes across multiple categories including Career Skills, Health, Business Acumen, and Digital Literacies.",
      "Trusted educational content created by professionals with no hidden agenda or sales pitches.",
      "Personalized recommendations and trending Bytes based on user interests and community engagement.",
      "Browse functionality with categories, tags, collections, and favorites for easy content discovery.",
      "Community-driven platform with trending content and personalized learning paths for continuous skill development."
    ],
    img: {
      src: "/assets/projects/rumielearn.png",
      height: 702,
      width: 1203,
      blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAkA4JZQAAuUvfwAA/vy3lePrVF3KNJzCO83e0QEWnj3IPYZAAAA="
    },
    color: "emerald",
    bulletPointsColor: "fill-emerald-600 text-emerald-600 dark:text-emerald-400 bg-emerald-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Database", icon: "postgresql" }
    ],
    liveLink: "https://learn.rumie.org/"
  },
  {
    id: 5,
    title: "Biller App",
    shortDes: "Multi-tenant mobile billing app for Indian GST-based furniture businesses with real-time sync and PDF invoicing.",
    des: "Biller is a comprehensive mobile billing application designed specifically for Indian GST-based furniture businesses. Built with Flutter and Supabase, it provides a complete suite of invoicing, party management, and real-time team collaboration features. The app handles complex GST calculations, automatic invoice numbering, and professional PDF generation with support for multiple devices syncing.",
    desc: "A Flutter-powered mobile app for managing invoices, parties, and teams in Indian GST-compliant furniture businesses with real-time Supabase sync and PDF invoicing.",
    bulletPoints: [
      "Multi-tenant architecture with role-based access control (admin/agent) and organization-level data isolation.",
      "Intelligent GST calculation engine - reverse-calculates base amount from inclusive price with automatic CGST/SGST splitting.",
      "Atomic invoice numbering system using PostgreSQL RPC functions ensuring zero duplicate invoice numbers across simultaneous requests.",
      "Real-time Supabase synchronization across multiple devices with Row-Level Security for data privacy.",
      "Professional PDF invoice generation with QR codes, item breakdowns, and tax summaries.",
      "Driver and team member management with customizable roles and permissions for collaborative invoicing."
    ],
    img: {
      src: "/assets/projects/biller.png",
      height: 2622,
      width: 1206,
      blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBYAAAAwAQCdASoBAAUAAkA4JZACdLoAyQAA/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4AAAA="
    },
    color: "teal",
    bulletPointsColor: "fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Supabase", icon: "supabase" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "PDF", icon: "adobeacrobatreader" }
    ],
    liveLink: "#",
  },
  {
    id: 6,
    title: "UnBox Robotics - Fleet Speedometer",
    shortDes: "Real-time fleet monitoring system with live sensor data ingestion, WebSocket updates, and batch processing for scalable telemetry collection.",
    des: "UnBox Robotics Fleet Speedometer is a full-stack real-time monitoring system designed for collecting and processing continuous sensor data from vehicle fleets. Built with Express.js, React, BullMQ queue system, and PostgreSQL, it provides live speed readings with WebSocket-based updates, historical tracking, and intelligent batch processing for optimal database performance.",
    desc: "A distributed real-time fleet monitoring dashboard with live WebSocket updates, queue-based async processing, and fault-tolerant batch writes to PostgreSQL.",
    bulletPoints: [
      "Real-time sensor data ingestion with 1-second update intervals and live WebSocket broadcasts to the frontend.",
      "Queue-based async processing using BullMQ and Redis for decoupling ingest from database operations.",
      "Intelligent batch write optimization - buffers records and flushes when reaching 60 records or 60-second timeout.",
      "Live speedometer dashboard with animated gauge, real-time readings panel, and trajectory projections.",
      "Sensor offline detection with automatic status updates within 10 seconds of connection loss.",
      "Horizontally scalable architecture with Docker Compose orchestration (Postgres, Redis, API, worker, UI, sensors)."
    ],
    img: {
      src: "/assets/projects/unbox.png",
      height: 843,
      width: 1024,
      blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAkA4JaQAAuUt8gAA/vvvFkm0Njg+jBrTz8JkE+/AuIuIkFAA"
    },
    color: "amber",
    bulletPointsColor: "fill-amber-600 text-amber-600 dark:text-amber-400 bg-amber-600/20 lg:bg-white-1 dark:lg:bg-black",
    techStack: [
      { name: "React", icon: "react" },
      { name: "Express.js", icon: "express" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "Docker", icon: "docker" }
    ],
    liveLink: "#",
    githubLink: "https://github.com/ravin1227/unbox-robotics-assignment"
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
    emerald: "linear-gradient(188.62deg, #064E3B 49.9%, #10B981 81.7%, #34D399 93.88%, #F9D793 113.5%)",
    amber: "linear-gradient(188.62deg, #78350F 49.9%, #D97706 81.7%, #FBBF24 93.88%, #F9D793 113.5%)"
  } as const;
};

export const getProjectShadows = (): Record<ProjectColor, string> => {
  return {
    pink: "shadow-[0_0_30px_#DB2777]",
    blue: "shadow-[0_0_30px_#2932CB]",
    teal: "shadow-[0_0_30px_#14B8A6]",
    purple: "shadow-[0_0_30px_#7C3AED]",
    emerald: "shadow-[0_0_30px_#10B981]",
    amber: "shadow-[0_0_30px_#D97706]"
  } as const;
};
