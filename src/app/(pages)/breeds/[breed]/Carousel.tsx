import { CatData } from "@src/hooks/useCats";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarouselProps {
  cats: CatData[];
}

const Carousel = ({ cats }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === cats.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const limitedCats = cats.slice(0, 5);

  return (
    <div className="relative w-full mb-14 aspect-[1.8]" data-carousel="slide">
      <div className="relative overflow-hidden rounded-[20px] h-full">
        {limitedCats.map(({ id, url }, index) => (
          <div
            key={id}
            className={`${
              index !== currentSlide ? "hidden " : ""
            }w-full h-full duration-700 ease-in-out`}
          >
            <Image src={url} fill className="object-cover" alt="Cat photo" />
          </div>
        ))}
      </div>
      <div className="absolute flex gap-[5px] z-30 p-2.5 rounded-[20px] bg-white -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2 transition-colors">
        {limitedCats.map(({ id }, index) => (
          <button
            key={id}
            type="button"
            className={`${
              index !== currentSlide ? "bg-red-light " : "bg-red"
            } w-3 h-3 rounded-full`}
            aria-label={`Slide ${index}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
