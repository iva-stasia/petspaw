"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  title: string;
  url: string;
  image: string;
}

const MenuItem = ({ title, url, image }: MenuItemProps) => {
  const currentRoute = usePathname();

  const isActive = currentRoute === url;

  return (
    <Link key={title} href={url} className="group">
      <div
        className={`${
          isActive ? "border-red-light" : "border-white/60"
        } relative mb-2.5 bg-violet h-[198px] w-[138px] rounded-[20px] border-4 group-hover:border-white transition-colors`}
      >
        <Image src={image} fill alt="" priority />
      </div>
      <div
        className={`${
          isActive ? "bg-red text-white" : "bg-white text-red"
        } btn p-2.5 text-xs group-hover:bg-red-light`}
      >
        {title}
      </div>
    </Link>
  );
};

export default MenuItem;
