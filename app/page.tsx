import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      <Image
        src="/globe.svg"
        alt="Ward meeting globe icon"
        width={120}
        height={120}
        priority
        className="dark:invert"
      />
      <h1 className="text-4xl font-bold text-center">Sacrament Meetings</h1>
      <p className="text-lg text-center text-zinc-600 dark:text-zinc-400 max-w-xl">
        View upcoming and past sacrament meeting programs for our ward.
      </p>
      <Link
        href="/meetings"
        className="rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        View Meetings
      </Link>
    </div>
  );
}
