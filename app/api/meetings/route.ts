import type { NextRequest } from "next/server";
import type { SacramentMeeting } from "@/lib/types";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");

  const meetings = getMeetings(date ?? undefined);
  return Response.json(meetings satisfies SacramentMeeting[]);
}
