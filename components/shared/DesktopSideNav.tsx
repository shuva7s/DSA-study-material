"use client";
import { navLinks } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopSideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block w-64 h-screen border-r flex-shrink-0 sticky top-0">
      <p className="p-3 text-3xl font-bold text-foreground">DSA</p>
      <nav className="w-full custom_height overflow-y-auto p-3 pt-0">
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathname === link.href
                    ? "text-foreground p-3 bg-border/80 dark:bg-accent rounded-lg"
                    : "text-muted-foreground hover:pl-1.5"
                } block text-base hover:text-foreground py-3 transition-all`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DesktopSideNav;
