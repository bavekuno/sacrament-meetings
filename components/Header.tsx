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
      <div className="mx-auto max-w-4xl px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-foreground transition-colors duration-200 hover:text-primary"
        >
          Ward Sacrament Meetings
        </Link>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{dateStr}</p>
        <NavLinks />
      </div>
    </header>
  );
}
