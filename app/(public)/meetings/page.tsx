import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import { MeetingSearch } from "@/components/MeetingSearch";
import MeetingCard from "@/components/MeetingCard";
import { Pagination } from "@/components/Pagination";
import { deleteMeeting } from "@/lib/actions";

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
            <div key={meeting.id} className="flex flex-col">
              <MeetingCard meeting={meeting} />
              <form action={deleteMeeting.bind(null, meeting.id)} className="mt-2">
                <button
                  type="submit"
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
