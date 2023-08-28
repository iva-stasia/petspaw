import SelectBase from "@src/components/SelectBase";
import useBreeds from "@src/hooks/useBreeds";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface BreedSelectProps {
  breed: string;
  setBreed: (breed: string) => void;
}

const BreedSelect = ({ breed, setBreed }: BreedSelectProps) => {
  const { breeds } = useBreeds();
  const searchParams = useSearchParams();

  useEffect(() => {
    const breedQ = searchParams.get("breed_ids");
    console.log(breedQ);

    if (breedQ) {
      setBreed(breedQ);
    } else {
      setBreed("All breeds");
    }
  }, [searchParams, setBreed]);

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
