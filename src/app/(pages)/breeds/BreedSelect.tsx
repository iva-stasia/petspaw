import React, { useEffect, useState } from "react";
import useBreeds from "@src/hooks/useBreeds";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectBase from "@src/components/SelectBase";

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
    <SelectBase>
      <select
        name="breeds"
        id="breeds-select"
        onChange={(e) => setBreed(e.target.value)}
        value={breed}
        className="select_base"
      >
        <option value="All breeds">All breeds</option>
        {breeds.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </SelectBase>
  );
};

export default BreedSelect;