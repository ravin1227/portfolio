'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

type FlowVisualId = 'dashboard' | 'trajectory' | 'events';

const FLOW_VISUAL_ORDER = ['dashboard', 'trajectory', 'events'] as const satisfies readonly FlowVisualId[];

const FLOW_VISUALS: Record<
  FlowVisualId,
  { src: string; alt: string; heading: string; caption: string }
> = {
  dashboard: {
    src: '/assets/projects/unbox/flow-dashboard.png',
    alt: 'Unbox dashboard: current speed gauge, live readings for sensor-1, and per-second telemetry log.',
    heading: 'Live dashboard',
    caption:
      'Gauge, live readings strip, and per-second log — the surface that moves on every ingest tick.',
  },
  trajectory: {
    src: '/assets/projects/unbox/flow-trajectory.png',
    alt: 'Trajectory projection chart with live vector over time and optional peak highlight.',
    heading: 'Trajectory projection',
    caption:
      'Bucketed telemetry (e.g. ~30s bins) reflects how rolls-ups meet your batch windows before persistence.',
  },
  events: {
    src: '/assets/projects/unbox/flow-system-events.png',
    alt: 'System events list with alert rows and active channels including sensor-1.',
    heading: 'System events',
    caption:
      'Validated streams drive alert rows and channel chips — the operational view alongside writes.',
  },
};

/** Full-fidelity UI grabs shown in the dedicated Product UI section (not duplicated in the timeline). */
const UNBOX_PRODUCT_GALLERY = [
  {
    src: '/assets/projects/unbox/flow-dashboard.png',
    alt: 'Unbox current speed dashboard: radial gauge, live readings, and per-second log for sensor-1.',
    title: 'Live dashboard',
    caption: 'Gauge, readings strip, and scrolling per-second log updating on each ingest.',
  },
  {
    src: '/assets/projects/unbox/flow-live-readings.png',
    alt: 'Live readings card with current sensor-1 speed and per-second log.',
    title: 'Live readings',
    caption: 'Current tab selection, progress bar, and timestamped log rows.',
  },
  {
    src: '/assets/projects/unbox/flow-gauge.png',
    alt: 'Velocity gauge focused view with KM/H readout and live stream label.',
    title: 'Velocity gauge',
    caption: 'Needle, arc fill, and live stream metadata for the active sensor.',
  },
  {
    src: '/assets/projects/unbox/flow-events-and-trajectory.png',
    alt: 'System events and trajectory projection panels side by side.',
    title: 'Events & trajectory',
    caption: 'Alert stream next to bucketed trajectory with live / predicted controls.',
  },
  {
    src: '/assets/projects/unbox/flow-system-events.png',
    alt: 'System events list with alert indicators and active channels.',
    title: 'System events',
    caption: 'Threshold alerts, timestamps, and channel chips.',
  },
  {
    src: '/assets/projects/unbox/flow-trajectory.png',
    alt: 'Trajectory projection chart with primary vector and peak highlight.',
    title: 'Trajectory projection',
    caption: 'Time-binned line, grid, and peak marker on the live vector.',
  },
] as const;

const DATA_FLOW_STEPS = [
  {
    time: 't = 0s',
    short: 'Sensor tick',
    label:
      'sensor-1 publishes a speed sample; the per-second log line updates as soon as the packet hits the API.',
    progress: 20,
    visual: 'dashboard',
  },
  {
    time: 't ≈ 250ms',
    short: 'Validate & push',
    label:
      'Express validates the payload, persists metadata, and fans out WebSocket payloads so CURRENT SPEED and Live readings stay in lockstep.',
    progress: 40,
    visual: 'dashboard',
  },
  {
    time: 't ≈ 500ms',
    short: 'Queue hand-off',
    label:
      'A BullMQ job is enqueued for the batch writer while rule evaluation can emit System events for threshold breaches.',
    progress: 55,
    visual: 'events',
  },
  {
    time: 't = 60s window',
    short: 'Buffer flush',
    label:
      'The worker reaches its 60-row buffer, closes the batch, and prepares a single multi-row INSERT — the same cadence you visualize in trajectory bins.',
    progress: 80,
    visual: 'trajectory',
  },
  {
    time: 't ≈ 60ms',
    short: 'Postgres commit',
    label:
      'PostgreSQL acks the bulk write; charts and alerts read from committed data on the next poll or push.',
    progress: 100,
    visual: 'trajectory',
  },
] as const;

type ArchTile = {
  id: string;
  x: number;
  y: number;
  title: string;
  subtitle: string;
  detail: string;
};

const ARCH_TILES: ArchTile[] = [
  {
    id: 'sensors',
    x: 50,
    y: 100,
    title: 'Speed sensors',
    subtitle: 'Edge input',
    detail: '~1 reading / sec',
  },
  {
    id: 'api',
    x: 280,
    y: 100,
    title: 'Express API',
    subtitle: 'HTTP + WebSocket',
    detail: 'Validate & broadcast',
  },
  {
    id: 'queue',
    x: 510,
    y: 100,
    title: 'BullMQ',
    subtitle: 'Redis-backed queue',
    detail: 'Async fan-out',
  },
  {
    id: 'worker',
    x: 740,
    y: 100,
    title: 'Worker',
    subtitle: 'Batch writer',
    detail: '60 rows / flush',
  },
  {
    id: 'db',
    x: 970,
    y: 100,
    title: 'PostgreSQL',
    subtitle: 'Primary store',
    detail: 'Durable writes',
  },
  {
    id: 'ui',
    x: 280,
    y: 280,
    title: 'React dashboard',
    subtitle: 'Live UI',
    detail: 'Sub-second updates',
  },
];

function ArchTileSvg({
  accentColor,
  tile,
}: {
  accentColor: string;
  tile: ArchTile;
}) {
  const cx = tile.x + 70;
  const fill = `${accentColor}15`;

  return (
    <g>
      <rect
        x={tile.x}
        y={tile.y}
        width="140"
        height="100"
        rx="12"
        fill={fill}
        stroke={accentColor}
        strokeWidth="2"
      />
      <text x={cx} y={tile.y + 42} textAnchor="middle" className="fill-white font-semibold text-sm">
        {tile.title}
      </text>
      <text x={cx} y={tile.y + 62} textAnchor="middle" className="fill-white/65 text-xs">
        {tile.subtitle}
      </text>
      <text x={cx} y={tile.y + 82} textAnchor="middle" className="fill-white/45 text-[11px]">
        {tile.detail}
      </text>
    </g>
  );
}

export function SystemArchitectureDiagram({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);

  const containerVariants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1, transition: { duration: 0 } } }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.12 },
        },
      };

  const itemVariants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  const arrowVariants = reduce
    ? {
        hidden: { pathLength: 1, opacity: 0.75 },
        show: { pathLength: 1, opacity: 0.75, transition: { duration: 0.2 } },
      }
    : {
        hidden: { pathLength: 0, opacity: 0 },
        show: {
          pathLength: 1,
          opacity: 0.95,
          transition: {
            duration: 1.5,
            ease: [0.42, 0, 0.58, 1] as const,
            repeat: Infinity,
            repeatType: 'loop' as const,
          },
        },
      };

  const titleId = 'unbox-arch-diagram-title';
  const descId = 'unbox-arch-diagram-desc';

  return (
    <figure className="w-full overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-lg shadow-black/25 ring-1 ring-white/[0.04] sm:p-8">
      <figcaption className="sr-only" id={descId}>
        Diagram of data flowing from speed sensors through Express, BullMQ, a worker, and into
        PostgreSQL, with a WebSocket path to the React dashboard.
      </figcaption>
      <div className="mb-6 border-b border-white/[0.06] pb-5">
        <p
          id={titleId}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45"
        >
          System architecture
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
          Ingest from sensors, enqueue durable work, batch writes to the database, and push live
          state to the dashboard.
        </p>
      </div>

      <svg
        viewBox="0 0 1200 400"
        className="min-w-[720px] w-full h-auto sm:min-w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
      >
        <rect width="1200" height="400" fill="none" />

        <motion.g
          variants={containerVariants}
          initial={reduce ? 'show' : 'hidden'}
          animate="show"
        >
          {ARCH_TILES.map((tile) => (
            <motion.g key={tile.id} variants={itemVariants}>
              <ArchTileSvg accentColor={accentColor} tile={tile} />
            </motion.g>
          ))}

          {/* Horizontal pipeline */}
          <motion.path
            d="M 190 150 L 280 150"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={arrowVariants}
          />
          <polygon points="280,150 270,145 270,155" fill={accentColor} className="opacity-70" />

          <motion.path
            d="M 420 150 L 510 150"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={arrowVariants}
          />
          <polygon points="510,150 500,145 500,155" fill={accentColor} className="opacity-70" />

          <motion.path
            d="M 650 150 L 740 150"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={arrowVariants}
          />
          <polygon points="740,150 730,145 730,155" fill={accentColor} className="opacity-70" />

          <motion.path
            d="M 880 150 L 970 150"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={arrowVariants}
          />
          <polygon points="970,150 960,145 960,155" fill={accentColor} className="opacity-70" />

          {/* API → dashboard (WebSocket) */}
          <motion.path
            d="M 350 200 Q 350 240 350 280"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
            strokeLinecap="round"
            variants={arrowVariants}
          />
          <polygon points="350,280 345,270 355,270" fill={accentColor} className="opacity-70" />
          <text
            x="368"
            y="248"
            className="fill-white/40 text-[10px] font-medium"
            style={{ fontSize: '11px' }}
          >
            WebSocket push
          </text>
        </motion.g>
      </svg>
    </figure>
  );
}

export function UnboxProductScreensSection({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);

  return (
    <section
      className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-lg shadow-black/25 ring-1 ring-white/[0.04] sm:p-8"
      aria-labelledby="unbox-product-ui-heading"
    >
      <header className="mb-8 border-b border-white/[0.06] pb-6">
        <h3
          id="unbox-product-ui-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45"
        >
          Product UI
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/55">
          Light-themed surfaces from the shipped build: monitoring, telemetry, and alerting as they
          appear in the browser — separate from the architecture and pipeline views below.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {UNBOX_PRODUCT_GALLERY.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-32px' }}
            transition={reduce ? { duration: 0 } : { delay: i * 0.06, duration: 0.45 }}
            className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 ring-1 ring-white/[0.04] shadow-xl shadow-black/35"
          >
            <div
              className="relative aspect-[4/3] w-full bg-neutral-900 sm:aspect-[16/11]"
              style={{ boxShadow: `inset 0 0 0 1px ${accentColor}14` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="space-y-1 border-t border-white/[0.06] px-4 py-3">
              <span className="text-xs font-semibold text-white/90">{item.title}</span>
              <p className="text-[11px] leading-relaxed text-white/52">{item.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

const PIPELINE_FLOW_INTERVAL_MS = 1350;
const PIPELINE_SPINE_TRAVEL_S = 4.2;

function PipelineTimelineTrack({
  accentColor,
  reduce,
}: {
  accentColor: string;
  reduce: boolean;
}) {
  if (reduce) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-4 top-5 w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-white/[0.04] sm:left-5"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-10 left-4 top-5 w-[3px] -translate-x-1/2 overflow-hidden rounded-full sm:left-5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-white/[0.03]" />
      <motion.div
        className="absolute left-0 right-0 h-14 rounded-full opacity-[0.92]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${accentColor} 45%, transparent 100%)`,
          boxShadow: `0 0 24px 2px ${accentColor}55`,
        }}
        initial={{ top: '-20%' }}
        animate={{ top: ['-25%', '120%'] }}
        transition={{
          duration: PIPELINE_SPINE_TRAVEL_S,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

export function DataFlowDiagram({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);
  const listRef = useRef<HTMLOListElement>(null);
  const listInView = useInView(listRef, { amount: 0.22, margin: '-8% 0px' });
  const [flowStep, setFlowStep] = useState(0);

  useEffect(() => {
    if (reduce || !listInView) return;
    const id = window.setInterval(() => {
      setFlowStep((s) => (s + 1) % DATA_FLOW_STEPS.length);
    }, PIPELINE_FLOW_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduce, listInView]);

  return (
    <section
      className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-lg shadow-black/25 ring-1 ring-white/[0.04] sm:p-8"
      aria-label="Real-time data flow timeline"
    >
      <header className="mb-8 border-b border-white/[0.06] pb-6">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
          Real-time data flow
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/55">
          End-to-end path from one sensor tick to a committed bulk write. Interface snapshots live in{' '}
          <span className="font-medium text-white/75">Product UI</span> above; this block is the pipeline
          only.
        </p>
      </header>

      <div>
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          Pipeline timeline
        </p>
        <ol ref={listRef} className="relative space-y-0">
          <PipelineTimelineTrack accentColor={accentColor} reduce={reduce} />
          {DATA_FLOW_STEPS.map((item, i) => {
            const visual = FLOW_VISUALS[item.visual];
            const isFlowing = !reduce && listInView && flowStep === i;
            return (
              <motion.li
                key={`${item.time}-${item.short}`}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-36px' }}
                transition={reduce ? { duration: 0 } : { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`relative z-[1] flex gap-4 pb-8 last:pb-0 sm:gap-5 ${
                  isFlowing ? 'rounded-xl pr-2 transition-shadow duration-300 sm:pr-3' : ''
                }`}
                style={{
                  boxShadow: isFlowing ? `inset 3px 0 0 0 ${accentColor}` : 'none',
                }}
              >
                <div className="relative z-[2] flex shrink-0 flex-col items-center">
                  <motion.span
                    className="relative flex size-8 items-center justify-center rounded-full border-2 border-white/10 bg-zinc-950/90 text-[11px] font-bold text-white/90 shadow-md sm:size-10 sm:text-xs"
                    style={{
                      borderColor: isFlowing ? accentColor : `${accentColor}66`,
                      boxShadow: isFlowing
                        ? `0 0 0 1px ${accentColor}55, 0 0 28px -4px ${accentColor}88`
                        : `0 0 0 1px ${accentColor}33`,
                    }}
                    animate={
                      reduce || !listInView
                        ? {}
                        : isFlowing
                          ? { scale: [1, 1.07, 1] }
                          : { scale: 1 }
                    }
                    transition={
                      isFlowing && !reduce
                        ? {
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }
                        : { duration: 0.2 }
                    }
                  >
                    {i + 1}
                    {isFlowing && (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: `${accentColor}99` }}
                        initial={{ opacity: 0.55, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.45 }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    )}
                  </motion.span>
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <motion.span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90"
                      style={{ backgroundColor: `${accentColor}2E` }}
                      animate={
                        isFlowing ? { backgroundColor: `${accentColor}52` } : { backgroundColor: `${accentColor}2E` }
                      }
                      transition={{ duration: 0.35 }}
                    >
                      {visual.heading}
                    </motion.span>
                    <span className="font-mono text-[11px] tabular-nums text-white/45">{item.time}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white/90">{item.short}</h4>
                  <div
                    className="mb-3 mt-2 h-2 w-full max-w-md overflow-hidden rounded-full bg-white/[0.09]"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={item.progress}
                    aria-label={item.label}
                  >
                    <motion.div
                      className="relative h-full overflow-hidden rounded-full"
                      style={{ backgroundColor: accentColor }}
                      initial={reduce ? { width: `${item.progress}%` } : { width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true, margin: '-28px' }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { delay: 0.12 + i * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                      }
                    >
                      {!reduce && isFlowing && (
                        <motion.span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 w-[min(45%,8rem)] bg-gradient-to-r from-transparent via-white/[0.4] to-transparent"
                          initial={{ left: '-40%' }}
                          animate={{ left: '140%' }}
                          transition={{
                            duration: 1.12,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </motion.div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">{item.label}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
