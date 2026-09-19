import { getMeetings } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  const meetings = getMeetings();
  const upcoming = meetings
    .filter((m) => new Date(m.date) >= new Date(new Date().toISOString().slice(0, 10)))
    .sort((a, b) => a.date.localeCompare(b.date));

  if (upcoming.length === 0) {
    return (
      <div className="p-8 text-center">
        <p>No upcoming meetings found.</p>
      </div>
    );
  }

  const nextMeeting = upcoming[0];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Current Sunday Meeting</h1>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        Redirecting to the next scheduled meeting on {nextMeeting.date}...
      </p>
    </div>
  );
}
