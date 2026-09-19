import Link from "next/link";



export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1">
      <div className="mx-auto max-w-4xl px-4 py-4">
        <nav className="flex gap-4 text-sm mb-4">
          <Link href="/meetings" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            All Meetings
          </Link>
          <Link href="/meetings/current" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Current Sunday
          </Link>
        </nav>
        {children}
      </div>
    </section>
  );
}
