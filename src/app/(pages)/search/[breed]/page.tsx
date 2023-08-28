"use client";

import BackNav from "@src/components/BackNav";
import Loader from "@src/components/Loader";
import useCats from "@src/hooks/useCats";
import compareIndexDigit from "@src/utils/compareIndexDigit";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: { breed: string };
}

const BreedSearch = ({ params }: Params) => {
  const { cats, loading } = useCats(params.breed);

  return (
    <div className="overflow-hidden flex flex-col">
      <div className="mb-5">
        <BackNav pageTitle="search" />
      </div>
      <div className="overflow-auto flex-1 grid grid-cols-3 auto-rows-[1fr] gap-5">
        {loading ? (
          <Loader />
        ) : (
          !!cats.length &&
          cats.map(({ id, url, breeds }, index) => {
            const isLastIndexDigit1 = compareIndexDigit(index, 1);
            const isLastIndexDigit4 = compareIndexDigit(index, 4);
            const isLastIndexDigit8 = compareIndexDigit(index, 8);
            const isLastIndexDigit9 = compareIndexDigit(index, 9);

            const breedName =
              breeds[0].name.slice(0, 1).toLocaleUpperCase() +
              breeds[0].name.slice(1);

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
                  cats.length === 1 ? "aspect-[0.67] " : ""
                } relative rounded-[20px] overflow-hidden`}
              >
                <Image
                  src={url}
                  fill
                  alt="Cat photo"
                  sizes="(max-width: 768px) 100%, 100%"
                  priority
                  className="object-cover"
                />
                <div className="absolute h-full w-full bg-red/60 z-10 opacity-0 hover:opacity-100 transition-all">
                  <div className="h-full p-2.5 flex items-end">
                    <Link
                      href={`/breeds/${breeds[0].id}`}
                      className="py-[5px] px-2.5 w-full text-center text-red bg-white rounded-[10px]"
                    >
                      {breedName}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BreedSearch;
