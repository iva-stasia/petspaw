"use client";

import BackNav from "@src/components/BackNav";
import useCats from "@src/hooks/useCats";
import React from "react";
import Carousel from "./Carousel";

interface Params {
  params: { breed: string };
}

const Breed = ({ params }: Params) => {
  const { cats, loading } = useCats(params.breed);

  const breedData = loading ? "" : cats[0].breeds[0];

  return (
    !loading &&
    breedData && (
      <div className="h-full overflow-hidden flex flex-col">
        <div className="mb-5 flex gap-2.5">
          <BackNav pageTitle="breeds" />
          <div className="btn text-xl px-7 py-1.5 text-white bg-red">
            {cats[0].breeds[0].id}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Carousel cats={cats} />
          <div className="relative">
            <h2 className="absolute z-10 top-0 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 px-10 text-4xl font-medium bg-white">
              {breedData.name}
            </h2>
            <div className=" flex flex-col p-10 pt-7 border-2 border-red-light rounded-[20px]">
              <p className="mb-5 font-medium text-xl text-center text-grey">
                {breedData.description.split(".")[0]}.
              </p>
              <div className="grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-2.5 text-grey">
                <p className="row-span-3">
                  <p className="font-medium text-black">Temperament:</p>{" "}
                  {breedData.temperament}
                </p>
                <p>
                  <span className="font-medium text-black">Origin:</span>{" "}
                  {breedData.origin}
                </p>
                <p>
                  <span className="font-medium text-black">Weight:</span>{" "}
                  {breedData.weight.metric}
                </p>
                <p>
                  <span className="font-medium text-black">Life span:</span>{" "}
                  {breedData.lifeSpan}
                  years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Breed;
