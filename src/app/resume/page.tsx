import type { Metadata } from "next";
import Link from "next/link";
import { resolveResumePublicPath } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download and view Ravindra Verma's resume (PDF).",
  openGraph: {
    title: "Resume | Ravindra Kumar Verma",
    description: "Download and view my resume (PDF).",
    url: "https://ravindraverma.tech/resume",
  },
};

export default function ResumePage() {
  const resumePublicPath = resolveResumePublicPath();

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Resume
            </h1>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Latest CV as a PDF. Use the buttons to open or download a copy.
            </p>
          </div>
          {resumePublicPath && (
            <div className="flex flex-wrap gap-2">
              <a
                href={resumePublicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open in new tab
              </a>
              <a
                href="/api/resume"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Download PDF
              </a>
            </div>
          )}
        </header>

        {resumePublicPath ? (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
            <iframe
              title="Resume PDF"
              src={`${resumePublicPath}#toolbar=1`}
              className="h-[min(85vh,900px)] w-full min-h-[480px] bg-neutral-900"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-10 text-center">
            <p className="text-white/80">
              No resume file found yet. Add your PDF as{" "}
              <code className="rounded-md bg-white/10 px-2 py-0.5 text-sm text-white">
                public/resume.pdf
              </code>{" "}
              or{" "}
              <code className="rounded-md bg-white/10 px-2 py-0.5 text-sm text-white">
                public/ravindra.pdf
              </code>{" "}
              and redeploy (or refresh locally).
            </p>
            <p className="mt-4 text-sm text-white/50">
              <Link href="/" className="text-white/70 underline underline-offset-4 hover:text-white">
                Back to home
              </Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
