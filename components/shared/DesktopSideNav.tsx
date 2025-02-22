"use client";
import { navLinks } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopSideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 z-10 bg-background hidden lg:flex flex-col border-r">
      <p className="p-3 text-3xl font-bold text-foreground">DSA</p>
      <nav className="w-full p-3 pt-0 custom_height custom-scrollbar sticky top-0 overflow-y-auto">
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
