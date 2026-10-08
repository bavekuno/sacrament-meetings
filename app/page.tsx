import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      <div className="relative h-48 w-64 overflow-hidden rounded-lg">
        <Image
          src="/temple.jpg"
          alt="LDS temple"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 256px"
          className="object-cover"
        />
      </div>
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
