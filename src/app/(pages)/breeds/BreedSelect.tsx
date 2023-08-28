import useBreeds from "@src/hooks/useBreeds";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectBase from "@src/components/SelectBase";
import { useEffect, useState } from "react";

const BreedSelect = () => {
  const [value, setValue] = useState("All breeds");
  const { breeds } = useBreeds();
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const breed = searchParams.get("breed_ids");
    if (breed) {
      setValue(breed);
    } else {
      setValue("All breeds");
    }
  }, [searchParams]);

  const handleSort = (breed: string) => {
    setValue(breed);

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (breed === "All breeds") {
      current.delete("breed_ids");
    } else {
      current.set("breed_ids", breed);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  };

  return (
    <SelectBase>
      <select
        name="breed"
        id="breed-select"
        onChange={(e) => handleSort(e.target.value)}
        value={value}
        className="select_base text-grey bg-grey-light"
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
