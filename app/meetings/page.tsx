import { getMeetings } from "@/lib/meetings-db";
import MeetingCard from "@/components/MeetingCard";

export default async function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold mb-6">All Meetings</h1>
      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}
    </div>
  );
}
