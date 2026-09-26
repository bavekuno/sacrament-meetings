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
    <nav className="mx-auto max-w-4xl px-4">
      <ul className="flex gap-4 text-sm">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-semibold text-foreground border-b-2 border-primary pb-0.5"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }
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
