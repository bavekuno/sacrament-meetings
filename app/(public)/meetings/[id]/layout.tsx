import type { Metadata, ResolvingMetadata } from "next";
import { getMeetingById } from "@/lib/meetings-db";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = Number(params.id);
  const meeting = await getMeetingById(id);
  
  if (!meeting) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }
  
  return {
    title: `${meeting.date} - ${meeting.meetingType}`,
    description: `Sacrament meeting on ${meeting.date} with ${meeting.presiding} presiding.`,
    openGraph: {
      title: `${meeting.date} - ${meeting.meetingType}`,
      description: `Sacrament meeting on ${meeting.date} with ${meeting.presiding} presiding.`,
      type: "article",
    },
  };
}

export default function MeetingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
