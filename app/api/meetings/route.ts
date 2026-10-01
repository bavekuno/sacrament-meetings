import type { NextRequest } from "next/server";
import type { SacramentMeeting } from "@/lib/types";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? undefined;
  const query = request.nextUrl.searchParams.get("query") ?? "";
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, page, date),
    getMeetingsTotalPages(query),
  ]);

  return Response.json({ meetings, totalPages } satisfies {
    meetings: SacramentMeeting[];
    totalPages: number;
  });
}
