import fs from "fs";
import path from "path";

/** First match wins; add names here if you store the PDF under another filename. */
export const RESUME_CANDIDATES = ["resume.pdf", "ravindra.pdf"] as const;

/** Suggested filename for downloads (always .pdf). */
export const RESUME_DOWNLOAD_FILENAME = "Ravindra-Verma-Resume.pdf";

export function resolveResumeAbsolutePath(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  for (const name of RESUME_CANDIDATES) {
    const full = path.join(publicDir, name);
    if (fs.existsSync(full)) {
      return full;
    }
  }
  return null;
}

export function resolveResumePublicPath(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  for (const name of RESUME_CANDIDATES) {
    if (fs.existsSync(path.join(publicDir, name))) {
      return `/${name}`;
    }
  }
  return null;
}
