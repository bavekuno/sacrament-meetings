import { headers } from "next/headers";
import MeetingDetail from "@/components/MeetingDetail";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return (
      <div className="mx-auto max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Invalid meeting ID</h1>
      </div>
    );
  }

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/meetings/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    if (res.status === 404) {
      return (
        <div className="mx-auto max-w-3xl p-8">
          <h1 className="text-2xl font-bold">Meeting not found</h1>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Error loading meeting</h1>
      </div>
    );
  }

  const meeting = (await res.json()) as import("@/lib/types").SacramentMeeting;
  return <MeetingDetail meeting={meeting} />;
}
