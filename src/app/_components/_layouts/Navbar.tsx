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
import { ButtonsCard } from "../../../components/ui/tailwindcss-button";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="fixed inset-x-0 top-5 z-50 flex items-center justify-between px-4">
        <p className="text-2xl font-bold">Hitung</p>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Support
          </span>
        </button>
      </div>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-lg mx-auto z-50",
          className
        )}
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
          <Link href="/aplikasi">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Aplikasi"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}
