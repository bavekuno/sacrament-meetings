'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/meetings") {
      return pathname === "/meetings" || pathname.startsWith("/meetings/");
    }
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <nav className="mt-3" aria-label="Main navigation">
      <ul className="flex gap-2 text-sm">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-block rounded-md px-3 py-1.5 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black ${
                  active
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-sm dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
