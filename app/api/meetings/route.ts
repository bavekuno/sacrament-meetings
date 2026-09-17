import type { SacramentMeeting } from "@/lib/types";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  const meetings = getMeetings(date ?? undefined);
  return Response.json(meetings satisfies SacramentMeeting[]);
}
