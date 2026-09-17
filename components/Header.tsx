import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-4 flex flex-col gap-1">
        <Link href="/" className="text-xl font-bold hover:underline">
          Ward Sacrament Meetings
        </Link>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{dateStr}</p>
      </div>
      <NavLinks />
    </header>
  );
}
