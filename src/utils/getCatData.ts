import { CatData } from "@src/hooks/useCats";
import { catApi } from "@src/utils/catApi";

const getCatData = async (id: string) => {
  return await catApi(`images/${id}`).json<CatData>();
};

export default getCatData;
