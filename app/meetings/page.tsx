import { headers } from "next/headers";
import MeetingCard from "@/components/MeetingCard";



export default async function MeetingsPage() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;


  const res = await fetch(`${baseUrl}/api/meetings`, { next: { revalidate: 60 } });
  const meetings = (await res.json()) as import("@/lib/types").SacramentMeeting[];

  
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
