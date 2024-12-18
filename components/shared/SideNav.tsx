"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/const";
import { PanelRight } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <PanelRight />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            Theme <ModeToggle />
          </div>
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="overflow-y-auto">
                <SheetClose asChild>
                  <Link
                    className={`${
                      pathname === link.href
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground"
                    } block hover:pl-1.5 hover:text-foreground py-3 transition-all`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
