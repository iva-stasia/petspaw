"use client";

import React from "react";
import IconBtn from "./IconBtn";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface BackNavProps {
  pageTitle: string;
}

const BackNav = ({ pageTitle }: BackNavProps) => {
  const router = useRouter();
  const currentRoute = usePathname();

  const isPrev =
    currentRoute.includes(pageTitle) && currentRoute.split("/").length > 2;

  return (
    <nav className="flex gap-2.5">
      <IconBtn icon="back" onClick={() => router.back()} />
      <Link
        href={`/${pageTitle}`}
        className={`${
          isPrev ? "text-red bg-red-light" : "text-white bg-red"
        } btn text-xl px-7 py-1.5 transition-colors`}
      >
        {pageTitle}
      </Link>
    </nav>
  );
};

export default BackNav;
