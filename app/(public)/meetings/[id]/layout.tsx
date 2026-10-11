import type { Metadata } from "next";
import { getMeetingById } from "@/lib/meetings-db";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const numId = Number(id);
  if (isNaN(numId)) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }
  const meeting = await getMeetingById(numId);
  
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
