import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import { MeetingSearch } from "@/components/MeetingSearch";
import MeetingCard from "@/components/MeetingCard";
import { Pagination } from "@/components/Pagination";

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string; date?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const date = searchParams?.date;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage, date),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold mb-6">All Meetings</h1>
      <MeetingSearch />
      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
