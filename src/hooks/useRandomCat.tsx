import { catApi } from "@src/utils/catApi";
import { useEffect, useState } from "react";

interface CatData {
  id: string;
  url: string;
}

const useRandomCat = (request: string) => {
  const [cat, setCat] = useState<CatData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCatData = async () => {
      try {
        const data = await catApi("images/search").json<CatData[]>();
        setCat(data[0]);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCatData();
  }, [request]);

  return { cat, loading, error };
};

export default useRandomCat;
