"use client";

import Link from "next/link";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

interface IconLinkProps {
  icon: string;
  url: string;
}

const IconLink = ({ icon, url }: IconLinkProps) => {
  const currentRoute = usePathname();

  const isActive = currentRoute === url;

  return (
    <Link
      href={url}
      className={`${
        isActive ? "text-white bg-red" : "text-red bg-white"
      } h-[60px] w-[60px] flex items-center justify-center rounded-[20px] hover:bg-red-light transition-colors`}
    >
      <Icon icon={icon} size={30} />
    </Link>
  );
};

export default IconLink;
