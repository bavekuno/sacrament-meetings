import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default async function CurrentMeetingRedirect() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const isoDate = sunday.toISOString().slice(0, 10);

  const meetings = getMeetings(isoDate);

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }

  redirect("/meetings");
}
