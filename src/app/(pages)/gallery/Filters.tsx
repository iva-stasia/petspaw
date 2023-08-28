"use client";

import React from "react";
import OrderSelect from "./OrderSelect";
import TypeSelect from "./TypeSelect";
import BreedSelect from "./BreedSelect";
import LimitSelect from "./LimitSelect";
import IconBtn from "@src/components/IconBtn";

const Filters = () => {
  return (
    <div className="p-5 pt-2.5 grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-2.5 bg-grey-light rounded-[20px]">
      <OrderSelect />
      <TypeSelect />
      <BreedSelect />
      <div className="flex gap-2.5 items-end">
        <LimitSelect />
        <div className="text-red bg-white hover:text-white hover:bg-red rounded-[10px]">
          <IconBtn icon="update" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
