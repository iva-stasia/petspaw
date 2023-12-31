"use client";

import ActionLogs from "@src/components/ActionLogs";
import AddToFavBtn from "@src/components/AddToFavBtn";
import BackNav from "@src/components/BackNav";
import Loader from "@src/components/Loader";
import useFavourites from "@src/hooks/useFavourites";
import compareIndexDigit from "@src/utils/compareIndexDigit";
import { TEMP_USER_ID } from "@src/utils/constants";
import Image from "next/image";
import { useState } from "react";
import { Action } from "../voting/page";

const Favourites = () => {
  const { favs, loading, error } = useFavourites(TEMP_USER_ID, "");
  const [action, setAction] = useState<Action | null>(null);

  if (error) throw new Error("Failed to fetch data");

  return (
    <div>
      <div className="mb-5">
        <BackNav pageTitle="favourites" />
      </div>
      <div className="mb-10 grid grid-cols-3 auto-rows-[1fr] gap-5">
        {loading ? (
          <Loader />
        ) : (
          !!favs.length &&
          favs.map(({ id, image }, index) => {
            const isLastIndexDigit1 = compareIndexDigit(index, 1);
            const isLastIndexDigit4 = compareIndexDigit(index, 4);
            const isLastIndexDigit8 = compareIndexDigit(index, 8);
            const isLastIndexDigit9 = compareIndexDigit(index, 9);

            return (
              <div
                key={id}
                className={`${index === 2 ? "aspect-[1.44] " : ""}${
                  isLastIndexDigit1 || isLastIndexDigit8 ? "row-span-2 " : ""
                }${
                  isLastIndexDigit9 || isLastIndexDigit4
                    ? "row-span-2 col-span-2 "
                    : ""
                }${
                  favs.length === 1 ? "aspect-[0.67] " : ""
                } relative rounded-[20px] overflow-hidden`}
              >
                <Image
                  src={image.url}
                  fill
                  alt="Cat photo"
                  sizes="(max-width: 768px) 100%, 100%"
                  priority
                  className="object-cover"
                />
                <div className="absolute h-full w-full bg-red/60 z-10 opacity-0 hover:opacity-100 transition-all">
                  <div className="h-full flex items-center justify-center">
                    <AddToFavBtn imgId={image.id} setAction={setAction} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ActionLogs action={action} />
    </div>
  );
};

export default Favourites;
