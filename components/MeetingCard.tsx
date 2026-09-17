import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const date = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/meetings/${meeting.id}`}>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
        <h2 className="text-lg font-semibold">{date}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 capitalize">
          {meeting.meetingType} meeting
        </p>
        <p className="text-sm text-zinc-500 mt-1">
          Presiding: {meeting.presiding}
        </p>
      </div>
    </Link>
  );
}
