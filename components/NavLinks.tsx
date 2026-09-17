import Link from "next/link";

const links = [
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export default function NavLinks() {
  return (
    <nav className="mx-auto max-w-4xl px-4">
      <ul className="flex gap-4 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
