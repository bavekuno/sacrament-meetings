export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex-1">{children}</section>;
}
