"use client";

import React from "react";
import IconBtn from "./IconBtn";
import { useRouter } from "next/navigation";

interface BackNavProps {
  pageTitle: string;
}

const BackNav = ({ pageTitle }: BackNavProps) => {
  const router = useRouter();

  return (
    <nav className="mb-5 flex gap-2.5">
      <IconBtn icon="back" onClick={() => router.back()} />
      <div className="btn text-xl px-7 py-1.5 text-white bg-red">
        {pageTitle}
      </div>
    </nav>
  );
};

export default BackNav;
