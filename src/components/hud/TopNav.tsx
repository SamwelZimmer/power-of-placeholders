"use client";

import { ModeToggle } from "@/components/providers/theme-provider";
import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";

export default function TopNav() {
  const mounted = useMounted();

  if (mounted)
    return (
      <nav
        className={`fixed top-0 z-30 px-6 w-full h-max pb-4 border-b border-border/40  flex flex-col pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 `}
      >
        <div className="flex items-center gap-2 w-full justify-between">
          <Link href={"/"} className="font-bold">
            The Power of Placeholders
          </Link>

          <ModeToggle className="" />
        </div>
      </nav>
    );

  return <></>;
}
