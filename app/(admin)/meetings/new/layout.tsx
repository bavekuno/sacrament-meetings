import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Meeting",
  description: "Create a new sacrament meeting for the ward.",
};

export default function NewMeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
