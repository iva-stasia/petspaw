import { catApi } from "@src/utils/catApi";
import { useEffect, useState } from "react";

export interface BreedsData {
  id: string;
  name: string;
}

const useBreeds = () => {
  const [breeds, setBreeds] = useState<BreedsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFavData = async () => {
      try {
        const data = await catApi("breeds").json<BreedsData[]>();
        setBreeds(data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getFavData();
  }, []);

  return { breeds, loading, error };
};

export default useBreeds;
