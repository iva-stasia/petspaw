import SelectBase from "@src/components/SelectBase";
import useBreeds from "@src/hooks/useBreeds";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BreedSelect = () => {
  const [breed, setBreed] = useState("All breeds");
  const { breeds } = useBreeds();
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (breed === "All breeds") {
      current.delete("breed_ids");
    } else {
      current.set("breed_ids", breed);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  }, [breed, currentRoute, searchParams, router]);

  return (
    <div>
      <label htmlFor="breed-select-gallery" className="select_label">
        Breed
      </label>
      <SelectBase>
        <select
          name="breed"
          id="breed-select-gallery"
          onChange={(e) => setBreed(e.target.value)}
          value={breed}
          className="select_base bg-white"
        >
          <option value="All breeds">All breeds</option>
          {breeds.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </SelectBase>
    </div>
  );
};

export default BreedSelect;
