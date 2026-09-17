import type { SacramentMeeting } from "@/lib/types";

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  if (!meeting) {
    return <div className="p-8">Meeting not found.</div>;
  }

  const date = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-2">Sacrament Meeting</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">{date}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Presiding & Conducting</h2>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </section>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Announcements</h2>
          <ul className="list-disc pl-5">
            {meeting.announcements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order of Service</h2>
        <ul className="space-y-1 list-disc pl-5">
          <li>Opening Hymn: {meeting.openingHymn.number} - {meeting.openingHymn.title}</li>
          <li>Opening Prayer: {meeting.openingPrayer}</li>
          <li>
            Sacrament Hymn: {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
          </li>
          <li>Ward Business: {meeting.wardBusiness.map((b) => b.description).join(", ") || "None"}</li>
          {meeting.stakeBusiness && <li>Stake Business</li>}
          <li>
            Speakers:
            <ul className="list-disc pl-5 mt-1">
              {meeting.speakers.map((speaker, index) => (
                <li key={index}>
                  {speaker.name}
                  {speaker.topic ? ` - ${speaker.topic}` : ""}
                  <span className="text-zinc-500"> ({speaker.type})</span>
                </li>
              ))}
            </ul>
          </li>
          <li>Closing Hymn: {meeting.closingHymn.number} - {meeting.closingHymn.title}</li>
          <li>Closing Prayer: {meeting.closingPrayer}</li>
        </ul>
      </section>
    </div>
  );
}
