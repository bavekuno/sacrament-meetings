import type { NextRequest } from "next/server";
import type { SacramentMeeting } from "@/lib/types";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return new Response("Invalid meeting ID", { status: 400 });
  }

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    return new Response("Meeting not found", { status: 404 });
  }

  return Response.json(meeting satisfies SacramentMeeting);
}
