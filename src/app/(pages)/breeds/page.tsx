"use client";

import BackNav from "@src/components/BackNav";
import React from "react";
import Filters from "./Filters";
import CatGrid from "@src/components/CatGrid";

const Breeds = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5 flex gap-2.5 items-center">
        <BackNav pageTitle="breeds" />
        <Filters />
      </div>
      <div className="overflow-y-auto flex-1">
        <CatGrid />
      </div>
    </div>
  );
};

export default Breeds;
