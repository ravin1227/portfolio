'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { getProjectById, getProjectGradients, getProjectShadows } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';

// Dynamic import for diagrams (only show for UnBox project)
const UnboxDiagrams = dynamic(
  () =>
    import('@/components/ProjectIllustrators/UnboxArchitectureDiagram').then((mod) => ({
      default: ({ accentColor }: { accentColor: string }) => (
        <div className="space-y-6">
          <mod.SystemArchitectureDiagram accentColor={accentColor} />
          <mod.UnboxProductScreensSection accentColor={accentColor} />
          <mod.DataFlowDiagram accentColor={accentColor} />
        </div>
      ),
    })),
  { ssr: false }
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const getSkillIconUrl = (iconName: string): string => {
  const simpleIconsOnly = ['zapier', 'openai', 'googleanalytics'];
  const lowerIconName = iconName.toLowerCase();

  if (simpleIconsOnly.includes(lowerIconName)) {
    return `https://cdn.simpleicons.org/${iconName}`;
  }

  const iconMap: Record<string, string> = {
    vuedotjs: 'vuejs',
    nodedotjs: 'nodejs',
    rubyonrails: 'rails',
  };

  const skillIconName = iconMap[lowerIconName] || lowerIconName;
  return `https://skillicons.dev/icons?i=${skillIconName}`;
};

const getMainColor = (color: string): string => {
  const colorMap: Record<string, string> = {
    pink: '#DB2777',
    blue: '#4F6EF7',
    teal: '#14B8A6',
    purple: '#7C3AED',
    emerald: '#10B981',
    amber: '#D97706',
  };
  return colorMap[color] || '#DB2777';
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <p className="text-white/40 text-sm font-sans tracking-wide">Loading project</p>
      </motion.div>
    </div>
  );
}

function NotFoundScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-sm"
      >
        <p className="text-white/20 text-6xl font-playfair font-bold mb-4">404</p>
        <h1 className="text-white text-2xl font-semibold mb-2">Project not found</h1>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          The project you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Go back
        </button>
      </motion.div>
    </div>
  );
}

// Ambient orb background — replaces the random `window` particles
function AmbientBackground({
  color,
  gradient,
}: {
  color: string;
  gradient: string;
}) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Full-page subtle gradient wash */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ background: gradient }}
      />
      {/* Top-right bloom */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
        style={{ backgroundColor: color }}
      />
      {/* Bottom-left counter-bloom */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function ProjectDetails() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<any>(null);
  const [imageHovered, setImageHovered] = useState(false);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!params.id) return;
    const projectId = parseInt(params.id as string);
    const proj = getProjectById(projectId);
    if (proj) setProject(proj);
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) return <LoadingScreen />;
  if (!project) return <NotFoundScreen onBack={() => router.back()} />;

  const gradients = getProjectGradients();
  const shadows = getProjectShadows();
  const mainColor = getMainColor(project.color);
  const gradient = gradients[project.color as keyof typeof gradients];

  // Animation variants — respect prefers-reduced-motion
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0 },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
    show: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    show: { opacity: 1, x: 0 },
  };

  const stagger = { show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
  const fastTransition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' as const };
  const slowTransition = { duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' as const };

  const hasGithub = Boolean(project.githubLink);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AmbientBackground color={mainColor} gradient={gradient} />

      {/* ------------------------------------------------------------------ */}
      {/* Sticky header                                                        */}
      {/* ------------------------------------------------------------------ */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        className="sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/[0.06]"
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <button
            ref={backBtnRef}
            onClick={() => router.back()}
            aria-label="Go back to previous page"
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-1 py-1 -ml-1 shrink-0 group"
          >
            <motion.span
              className="inline-flex"
              whileHover={shouldReduceMotion ? {} : { x: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={18} />
            </motion.span>
            <span className="text-sm font-medium hidden sm:inline">Back</span>
          </button>

          {/* Center title — truncated on small screens */}
          <h1
            className="text-sm sm:text-base font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md font-playfair"
            style={{
              background: `linear-gradient(120deg, #ffffff 0%, ${mainColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {project.title}
          </h1>

          {/* Spacer to keep title centered */}
          <div className="w-16 sm:w-20 shrink-0" aria-hidden="true" />
        </div>
      </motion.header>

      {/* ------------------------------------------------------------------ */}
      {/* Main content                                                         */}
      {/* ------------------------------------------------------------------ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">

        {/* Hero headline — mobile-first, above the two-column grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ ...fastTransition, delay: 0.05 }}
          className="mb-8 md:mb-12 lg:hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-2">
            Case Study
          </p>
          <h2
            className="text-3xl font-bold font-playfair leading-tight"
            style={{
              background: `linear-gradient(120deg, #ffffff 10%, ${mainColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {project.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 xl:gap-20 items-start">

          {/* ============================================================== */}
          {/* Left column: image + tech stack + links                         */}
          {/* ============================================================== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ ...slowTransition, delay: 0.1 }}
            className="flex flex-col gap-5"
          >

            {/* Project screenshot */}
            <motion.div
              className={`
                relative overflow-hidden rounded-2xl border border-white/[0.08]
                transition-shadow duration-500
                ${imageHovered ? shadows[project.color as keyof typeof shadows] : ''}
              `}
              onHoverStart={() => setImageHovered(true)}
              onHoverEnd={() => setImageHovered(false)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.008 }}
              transition={{ duration: 0.35 }}
            >
              {/* Gradient shimmer inside the border frame */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ background: gradient }}
              />

              <div className="relative rounded-[14px] overflow-hidden bg-zinc-900/60 m-px">
                {/* Faint browser-chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="flex-1 mx-2 h-4 rounded bg-white/5 text-[9px] text-white/20 flex items-center px-2 truncate">
                    {project.liveLink !== '#' ? project.liveLink : 'localhost:3000'}
                  </span>
                </div>
                <Image
                  src={project.img.src}
                  alt={`Screenshot of ${project.title}`}
                  width={project.img.width}
                  height={project.img.height}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                  blurDataURL={project.img.blurDataURL}
                  priority
                />
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ ...fastTransition, delay: 0.25 }}
              aria-labelledby="tech-stack-heading"
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 backdrop-blur-sm"
            >
              <h3
                id="tech-stack-heading"
                className="flex items-center gap-2 text-[11px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-4"
              >
                <Layers size={13} className="opacity-60" />
                Tech Stack
              </h3>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {project.techStack.map((tech: any, index: number) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <img
                      src={getSkillIconUrl(tech.icon)}
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain flex-shrink-0"
                    />
                    <span className="text-xs font-medium text-white/80">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ ...fastTransition, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Primary CTA */}
              {project.liveLink && project.liveLink !== '#' && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg"
                  style={{
                    backgroundColor: mainColor,
                    boxShadow: `0 4px 24px ${mainColor}40`,
                  }}
                  // Inline style for focus ring to match color
                  onFocus={(e) => (e.currentTarget.style.outline = `2px solid ${mainColor}`)}
                  onBlur={(e) => (e.currentTarget.style.outline = 'none')}
                >
                  <ExternalLink size={15} />
                  <span>View Live Project</span>
                </motion.a>
              )}

              {/* Secondary CTA — GitHub (optional) */}
              {hasGithub && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 text-sm font-medium text-white/80 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${project.liveLink !== '#' ? 'sm:flex-none' : 'flex-1'}`}
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </motion.a>
              )}

              {/* Fallback when liveLink is # and no github */}
              {project.liveLink === '#' && !hasGithub && (
                <span className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/[0.08] text-sm font-medium text-white/30 cursor-not-allowed">
                  <ExternalLink size={15} />
                  <span>Coming Soon</span>
                </span>
              )}
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* Right column: title + description + features + tagline          */}
          {/* ============================================================== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ ...slowTransition, delay: 0.15 }}
            className="flex flex-col gap-8"
          >

            {/* Desktop-only headline (hidden on mobile, shown above on mobile) */}
            <div className="hidden lg:block">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ ...fastTransition, delay: 0.2 }}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-2"
              >
                Case Study
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ ...fastTransition, delay: 0.25 }}
                className="text-4xl xl:text-5xl font-bold font-playfair leading-tight"
                style={{
                  background: `linear-gradient(120deg, #ffffff 10%, ${mainColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {project.title}
              </motion.h2>
            </div>

            {/* Project overview */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ ...fastTransition, delay: 0.3 }}
              aria-labelledby="overview-heading"
            >
              <h3
                id="overview-heading"
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3"
              >
                Overview
              </h3>
              <p className="text-white/70 leading-[1.75] text-base font-sans">
                {project.des}
              </p>
            </motion.section>

            {/* Divider */}
            <div
              className="h-px w-full opacity-10"
              style={{ background: `linear-gradient(90deg, ${mainColor}, transparent)` }}
              aria-hidden="true"
            />

            {/* Key Features */}
            <motion.section
              aria-labelledby="features-heading"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <h3
                id="features-heading"
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-4"
              >
                Key Features
              </h3>

              <ul className="space-y-3" role="list">
                {project.bulletPoints.map((point: string, index: number) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ duration: 0.18 }}
                    className="flex gap-3 group"
                  >
                    {/* Accent check icon */}
                    <CheckCircle2
                      size={17}
                      className="shrink-0 mt-[3px] transition-transform duration-200 group-hover:scale-110"
                      style={{ color: mainColor }}
                      aria-hidden="true"
                    />
                    <span className="text-white/65 text-sm leading-[1.65] group-hover:text-white/85 transition-colors duration-200">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Tagline / short description card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ ...fastTransition, delay: 0.55 }}
              className="relative overflow-hidden rounded-xl border p-5"
              style={{
                backgroundColor: `${mainColor}0C`,
                borderColor: `${mainColor}25`,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: mainColor }}
                aria-hidden="true"
              />
              <p className="relative text-sm text-white/60 italic leading-[1.7] font-sans">
                &ldquo;{project.shortDes}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Architecture Diagrams - Full width for UnBox project */}
        {project.id === 6 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ ...fastTransition, delay: 0.6 }}
            aria-labelledby="diagrams-heading"
            className="mt-16 md:mt-20 pt-12 border-t border-white/[0.06]"
          >
            <h2
              id="diagrams-heading"
              className="text-2xl md:text-3xl font-bold font-playfair mb-8 flex items-center gap-3"
              style={{
                background: `linear-gradient(120deg, #ffffff 10%, ${mainColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              How It Works
            </h2>
            <UnboxDiagrams accentColor={mainColor} />
          </motion.section>
        )}
      </main>
    </div>
  );
}
