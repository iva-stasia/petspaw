"use client";

import Icon from "@src/components/Icon";
import Link from "next/link";

const Error = () => {
  return (
    <div className="absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center bg-red-light bg-[url('/error-bg.png')] bg-center">
      <h2 className="text-9xl mb-10">Ops!</h2>
      <Link
        href="/"
        className="text-2xl flex items-center gap-2.5 hover:text-red transition-all"
      >
        <Icon icon="back" size={20} />
        Return Home
      </Link>
    </div>
  );
};

export default Error;
