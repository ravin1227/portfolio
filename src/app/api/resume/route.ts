import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import {
  resolveResumeAbsolutePath,
  RESUME_DOWNLOAD_FILENAME,
} from "@/lib/resume";

export async function GET() {
  const filePath = resolveResumeAbsolutePath();
  if (!filePath) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  const body = readFileSync(filePath);
  const encodedFilename = encodeURIComponent(RESUME_DOWNLOAD_FILENAME);

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${RESUME_DOWNLOAD_FILENAME}"; filename*=UTF-8''${encodedFilename}`,
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
