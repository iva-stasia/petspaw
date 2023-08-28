"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import { useRouter } from "next/navigation";
import useBreeds from "@src/hooks/useBreeds";

const Search = () => {
  const { breeds } = useBreeds();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!breeds) return;

    const breed = breeds.filter(
      ({ name }) => name.toLowerCase() === query.toLowerCase()
    )[0]?.id;

    router.push(`/search/${breed ? breed : query}`);
  };

  return (
    <div className="relative flex-1">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for breeds by name"
          className="w-full py-[18px] pl-5 pr-[60px] rounded-[20px] placeholder:text-xl placeholder:text-grey border-2 border-white hover:border-red-light focus-visible:border-red transition-colors outline-none"
        />
        <div className="absolute top-2.5 right-2.5 text-red bg-red-light hover:text-white hover:bg-red rounded-[10px]">
          <button
            onClick={handleSubmit}
            className="h-10 w-10 flex items-center justify-center transition-colors"
          >
            <Icon icon="search" size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
