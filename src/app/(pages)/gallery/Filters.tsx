"use client";

import React, { useState } from "react";
import OrderSelect from "./OrderSelect";
import TypeSelect from "./TypeSelect";
import BreedSelect from "./BreedSelect";
import LimitSelect from "./LimitSelect";
import IconBtn from "@src/components/IconBtn";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Filters = () => {
  const [type, setType] = useState("All");
  const [order, setOrder] = useState("rand");
  const [limit, setLimit] = useState("5");
  const [breed, setBreed] = useState("All breeds");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUpdate = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (order === "rand") {
      current.delete("sort");
    } else {
      current.set("sort", order);
    }

    if (breed === "All breeds") {
      current.delete("breed_ids");
    } else {
      current.set("breed_ids", breed);
    }

    if (type === "All") {
      current.delete("type");
    } else {
      current.set("type", type);
    }

    current.set("limit", limit);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    console.log(query);

    router.push(`${currentRoute}${query}`);
  };

  return (
    <div className="p-5 pt-2.5 grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-2.5 bg-grey-light rounded-[20px]">
      <OrderSelect order={order} setOrder={setOrder} />
      <TypeSelect type={type} setType={setType} />
      <BreedSelect breed={breed} setBreed={setBreed} />
      <div className="flex gap-2.5 items-end">
        <LimitSelect limit={limit} setLimit={setLimit} />
        <div className="text-red bg-white hover:text-white hover:bg-red rounded-[10px]">
          <IconBtn icon="update" onClick={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
