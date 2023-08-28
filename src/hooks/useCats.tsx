import { catApi } from "@src/utils/catApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface CatData {
  id: string;
  url: string;
  breeds: [
    {
      id: string;
      name: string;
      temperament: string;
      origin: string;
      lifeSpan: string;
      description: string;
      weight: { metric: string };
    }
  ];
}

const useCats = (breed?: string) => {
  const [cats, setCats] = useState<CatData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const current = new URLSearchParams(
    Array.from(searchParams.entries()).filter((entry) => entry[0] !== "sort")
  );

  const search = current.toString();
  const query = search ? `&${search}` : "";

  useEffect(() => {
    const getCatData = async () => {
      try {
        if (breed) {
          const data = await catApi(
            `images/search?limit=5&breed_ids=${breed}`
          ).json<CatData[]>();

          setCats(data);
          return;
        }
        const data = await catApi(`images/search?has_breeds=1&${query}`).json<
          CatData[]
        >();

        setCats(data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCatData();
  }, [query, breed]);

  return { cats, loading, error };
};

export default useCats;
