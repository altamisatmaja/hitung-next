"use client";
import { useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/saham">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Saham"
          ></MenuItem>
        </Link>
        <Link href="/crypto">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Crypto"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
