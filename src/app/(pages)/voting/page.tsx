"use client";

import BackNav from "@src/components/BackNav";
import useRandomCat from "@src/hooks/useRandomCat";
import ActionLogs from "./ActionLogs";
import { useState } from "react";
import Image from "next/image";
import BtnGroup from "./BtnGroup";

export type ActionType = "Likes" | "Dislikes" | "FavAdd" | "FavRemove";

export interface Action {
  type: ActionType;
  date: Date;
  imgId: string;
}

const Voting = () => {
  const [action, setAction] = useState<Action | null>(null);
  const [request, setRequest] = useState("");
  const { cat, loading, error } = useRandomCat(request);

  if (error) throw new Error("Failed to fetch data");

  return (
    <div className="h-full flex flex-col">
      <BackNav pageTitle="voting" />
      <div className="relative mb-14">
        {loading ? (
          <div className="h-[360px] flex justify-center items-center rounded-[20px] bg-grey animate-pulse">
            <div className="flex space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        ) : (
          cat && (
            <div>
              <div className="relative overflow-hidden h-[360px] rounded-[20px]">
                <Image
                  src={cat.url}
                  fill
                  alt="Cat"
                  sizes="(max-width: 768px) 100%, 100%"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-[44px] left-2/4 -translate-x-1/2">
                <BtnGroup
                  imgId={cat.id}
                  setAction={setAction}
                  setRequest={setRequest}
                />
              </div>
            </div>
          )
        )}
      </div>
      <ActionLogs action={action} />
    </div>
  );
};

export default Voting;
