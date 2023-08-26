import { catApi } from "@src/utils/catApi";
import { useEffect, useState } from "react";

interface FavData {
  id: number;
  image: {
    id: string;
    url: string;
  };
}

const useFavourites = (id: string, request: string) => {
  const [favs, setFavs] = useState<FavData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFavData = async () => {
      try {
        const data = await catApi(`favourites?sub_id=${id}`).json<FavData[]>();
        setFavs(data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getFavData();
  }, [id, request]);

  return { favs, loading, error };
};

export default useFavourites;
