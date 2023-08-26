import React from "react";
import IconBtn from "./IconBtn";

const Search = () => {
  return (
    <div className="relative flex-1">
      <form>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search for breeds by name"
          className="w-full py-[18px] pl-5 pr-[60px] rounded-[20px] placeholder:text-xl placeholder:text-grey border-2 border-white hover:border-red-light focus-visible:border-red transition-colors outline-none"
        />
        <div className="absolute top-2.5 right-2.5 ">
          <IconBtn icon="search" />
        </div>
      </form>
    </div>
  );
};

export default Search;
