import useCats, { CatData } from "@src/hooks/useCats";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import AddToFavBtn from "./AddToFavBtn";

interface CatGridProps {
  page: string;
}

const compareIndexDigit = (index: number, digit: number) => {
  const lastIndexDigit = Number(index.toString().slice(-1));
  return lastIndexDigit + 1 === digit;
};

const sortCats = (cats: CatData[], order: string) => {
  return order === "asc"
    ? cats.sort((cat1, cat2) => comparator(cat1, cat2))
    : cats.sort((cat1, cat2) => comparator(cat2, cat1));
};

const comparator = (cat1: CatData, cat2: CatData) => {
  const a = cat1.breeds[0].name.toLowerCase();
  const b = cat2.breeds[0].name.toLowerCase();

  return a.localeCompare(b);
};

const CatGrid = ({ page }: CatGridProps) => {
  const { cats, loading, error } = useCats();
  const searchParams = useSearchParams();

  if (error) throw new Error("Failed to fetch data");

  const order = searchParams.get("sort");

  const sortedCats = useMemo(() => {
    if (order) {
      return sortCats(cats, order);
    }
    return cats;
  }, [order, cats]);

  return (
    <div className="grid grid-cols-3 auto-rows-[1fr] gap-5">
      {loading
        ? "Loading"
        : !!sortedCats.length &&
          sortedCats.map(({ id, url, breeds }, index) => {
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
                {page === "breeds" && (
                  <div className="absolute h-full w-full bg-red/60 z-10 opacity-0 hover:opacity-100 transition-all">
                    <div className="h-full p-2.5 flex items-end">
                      <Link
                        href={`breeds/${breeds[0].id}`}
                        className="py-[5px] px-2.5 w-full text-center text-red bg-white rounded-[10px]"
                      >
                        {breedName}
                      </Link>
                    </div>
                  </div>
                )}
                {page === "gallery" && (
                  <div className="absolute h-full w-full bg-red/60 z-10 opacity-0 hover:opacity-100 transition-all">
                    <div className="h-full flex items-center justify-center">
                      <AddToFavBtn imgId={id} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
    </div>
  );
};

export default CatGrid;
